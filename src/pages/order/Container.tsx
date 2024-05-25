import { Dispatch, SetStateAction, useState } from "react";
import useFetchGet from "../../hooks/useFetchGet";
import dayjs from "dayjs";

export default function ContainerOrder() {
  const [statusVisibility, setStatusVisibility] = useState(false);
  const [detailVisibility, setDetailVisibility] = useState(false);
  const delivers = useFetchGet("/api/penjualan");

  const displayDelivers =
    delivers &&
    delivers.map((d, i) => {
      const price = d.item_terjual.reduce((a: any, b: any) => a + b.price, 0);

      return (
        <tr key={d.id_penjualan}>
          <td className="border-2 border-black text-center p-1">{i + 1}</td>
          <td className="border-2 border-black text-center p-1">
            {d.users.username}
          </td>
          <td className="border-2 border-black text-center p-1">
            {dayjs(d.tanggal_beli).format("HH:mm DD-MM-YY")}
          </td>
          <td className="border-2 border-black text-center p-1">{d.status}</td>
          <td className="border-2 border-black text-center p-1">Rp {price}</td>
          <td className="border-2 border-black p-1">
            <div className="flex justify-around">
              <button className="px-2 py-0.5 bg-red-500 rounded">Hapus</button>
              <button
                onClick={() => setStatusVisibility((prev) => !prev)}
                className="px-2 py-0.5 bg-emerald-500 rounded"
              >
                Set Status
              </button>
              <button
                onClick={() => setDetailVisibility((prev) => !prev)}
                className="px-2 py-0.5 bg-orange-500 rounded"
              >
                Detail
              </button>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <div className="p-5 flex flex-col gap-y-6">
      <span className="font-bold text-5xl text-center">Orders</span>

      <table className="border-collapse">
        <thead>
          <tr>
            <th className="border-2 border-black bg-black text-white w-1/12">
              No
            </th>
            <th className="border-2 border-black bg-black text-white w-2/12">
              Username
            </th>
            <th className="border-2 border-black bg-black text-white w-2-12">
              Tanggal Beli
            </th>
            <th className="border-2 border-black bg-black text-white w-1/12">
              Status
            </th>
            <th className="border-2 border-black bg-black text-white w-2/12">
              Total
            </th>
            <th className="border-2 border-black bg-black text-white w-4/12">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>{displayDelivers}</tbody>
      </table>

      <DeleteConfirmation
        visible={statusVisibility}
        setVisibility={setStatusVisibility}
      />

      <DetailComp
        visible={detailVisibility}
        setVisibility={setDetailVisibility}
      />
    </div>
  );
}

function DeleteConfirmation({
  visible,
  setVisibility,
}: {
  visible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-sm ${
          visible ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-black text-white flex flex-col gap-y-5 rounded ${
          visible ? "flex" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setVisibility((prev) => !prev)}
          className="size-6 absolute top-4 right-4 hover:fill-red-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span className="text-center font-bold text-2xl">Set Status Ke</span>
        <div className="flex gap-x-6">
          <button className="px-4 py-1 bg-red-500 rounded">Pengemasan</button>
          <button className="px-4 py-1 bg-orange-500 rounded">
            Pengiriman
          </button>
          <button className="px-4 py-1 bg-emerald-500 rounded">Diterima</button>
        </div>
      </div>
    </>
  );
}

function DetailComp({
  visible,
  setVisibility,
}: {
  visible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-sm ${
          visible ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-1/2 overflow-y-auto max-h-[80vh] left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-stone-400 flex flex-col gap-y-5 rounded border-2 border-black ${
          visible ? "block" : "hidden"
        }`}
      >
        <svg
          onClick={() => setVisibility((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 absolute top-4 right-4 hover:fill-red-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span className="font-bold text-4xl text-center">Detail</span>
        <div className="flex flex-col gap-y-5">
          <div className="flex justify-between w-full items-center">
            <img src="/img/baju.png" alt="baju" className="w-1/4" />
            <div className="flex flex-col gap-y-3">
              <span>Baju Adidas (x2)</span>
              <span>Rp 300.000</span>
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <img src="/img/baju.png" alt="baju" className="w-1/4" />
            <div className="flex flex-col gap-y-3">
              <span>Baju Adidas (x2)</span>
              <span>Rp 300.000</span>
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <img src="/img/baju.png" alt="baju" className="w-1/4" />
            <div className="flex flex-col gap-y-3">
              <span>Baju Adidas (x2)</span>
              <span>Rp 300.000</span>
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <img src="/img/baju.png" alt="baju" className="w-1/4" />
            <div className="flex flex-col gap-y-3">
              <span>Baju Adidas (x2)</span>
              <span>Rp 300.000</span>
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <img src="/img/baju.png" alt="baju" className="w-1/4" />
            <div className="flex flex-col gap-y-3">
              <span>Baju Adidas (x2)</span>
              <span>Rp 300.000</span>
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <img src="/img/baju.png" alt="baju" className="w-1/4" />
            <div className="flex flex-col gap-y-3">
              <span>Baju Adidas (x2)</span>
              <span>Rp 300.000</span>
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <img src="/img/baju.png" alt="baju" className="w-1/4" />
            <div className="flex flex-col gap-y-3">
              <span>Baju Adidas (x2)</span>
              <span>Rp 300.000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
