export default function Home() {
  return (
    <main className="p-3 flex flex-col w-full gap-y-8 bg-slate-300 min-h-screen">
      <div className="w-full space-y-5 bg-white p-5 rounded">
        <span className="font-bold text-4xl">Entities</span>
        <div className="flex justify-between w-full">
          <BoxOfEntity tipe="customer" jumlah={6} color="bg-red-600" />
          <BoxOfEntity tipe="item" jumlah={6} color="bg-emerald-600" />
          <BoxOfEntity tipe="brand" jumlah={6} color="bg-blue-600" />
          <BoxOfEntity tipe="category" jumlah={6} color="bg-orange-600" />
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
          <tbody>
            <tr>
              <td className="border-2 border-black text-center">1</td>
              <td className="border-2 border-black text-center">Wirawan</td>
              <td className="border-2 border-black text-center">5-6-2004</td>
              <td className="border-2 border-black text-center">2</td>
              <td className="border-2 border-black text-center">Rp 400.000</td>
            </tr>
          </tbody>
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
