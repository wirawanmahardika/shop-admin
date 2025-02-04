import { useEffect, useState } from "react";
import { myAxios } from "../helper/axios";
import useFetchGet from "../hooks/useFetchGet";
import numberWithDot from "../helper/numberWithCommas";
import dayjs from "dayjs";

export default function Home() {
  const customers = useGetAmountOfEntity("/api/users/count");
  const categories = useGetAmountOfEntity("/api/category/count");
  const brands = useGetAmountOfEntity("/api/brands/count");
  const items = useGetAmountOfEntity("/api/items/count");

  const delivers = useFetchGet("/api/penjualan");
  const displayIncomingOrder = delivers?.map((d, i) => {
    const price = d.item_terjual.reduce((a: number, b: any) => a + b.price, 0);
    return (
      <tr key={d.id_penjualan}>
        <td className="border-2 border-black text-center">{i + 1}</td>
        <td className="border-2 border-black text-center">
          {d.users.username}
        </td>
        <td className="border-2 border-black text-center">
          {dayjs(d.tanggal_beli).format("D-M-YY")}
        </td>
        <td className="border-2 border-black text-center">
          {d.item_terjual.length}
        </td>
        <td className="border-2 border-black text-center">
          Rp {numberWithDot(price)}
        </td>
      </tr>
    );
  });

  return (
    <main className="p-3 flex flex-col w-full gap-y-8 bg-slate-300 min-h-screen">
      <div className="w-full space-y-5 bg-white p-5 rounded">
        <span className="font-bold text-4xl">Entities</span>
        <div className="flex justify-between w-full">
          <BoxOfEntity tipe="customer" jumlah={customers} color="bg-red-600" />
          <BoxOfEntity
            tipe="category"
            jumlah={categories}
            color="bg-orange-600"
          />
          <BoxOfEntity tipe="brand" jumlah={brands} color="bg-blue-600" />
          <BoxOfEntity tipe="item" jumlah={items} color="bg-emerald-600" />
        </div>
      </div>
      <div className="w-full space-y-5 bg-white p-5 rounded">
        <span className="font-bold text-4xl">Incoming Order</span>
        <table className="table-auto border-collapse border-black border-2 w-full">
          <thead>
            <tr className="bg-black text-white">
              <th className="border-2 border-black">No</th>
              <th className="border-2 border-black">Customer</th>
              <th className="border-2 border-black">Tanggal Beli</th>
              <th className="border-2 border-black">Jumlah Item</th>
              <th className="border-2 border-black">Total</th>
            </tr>
          </thead>
          <tbody>{displayIncomingOrder}</tbody>
        </table>
      </div>
    </main>
  );
}

function BoxOfEntity({
  tipe,
  jumlah,
  color,
}: {
  tipe: string;
  jumlah: number;
  color: string;
}) {
  return (
    <div
      className={`w-1/5 h-32 rounded p-4 text-slate-200 shadow flex flex-col justify-center gap-y-2 items-center ${color}`}
    >
      <span className="font-bold text-xl">{jumlah}</span>
      <span className="font-bold text-xl">{tipe}</span>
    </div>
  );
}

const useGetAmountOfEntity = (url: string) => {
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    myAxios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return data;
};
