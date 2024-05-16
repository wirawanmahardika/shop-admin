export default function Home() {
  return (
    <main className="p-8 flex justify-around ">
      <BoxOfEntity tipe="customer" jumlah={6} color="bg-red-600" />
      <BoxOfEntity tipe="item" jumlah={6} color="bg-emerald-600" />
      <BoxOfEntity tipe="brand" jumlah={6} color="bg-blue-600" />
      <BoxOfEntity tipe="category" jumlah={6} color="bg-orange-600" />
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
      className={`w-1/5 h-32 rounded p-4 flex flex-col justify-center gap-y-2 items-center ${color}`}
    >
      <span className="font-bold text-xl">{jumlah}</span>
      <span className="font-bold text-xl">{tipe}</span>
    </div>
  );
}
