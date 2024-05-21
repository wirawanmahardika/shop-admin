export default function LihatBrand() {
  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto ">
      <span className="col-span-3 font-bold text-5xl text-center">Brands</span>
      <Category nama="Adidas" src="/img/adidas.png" id={2} />
      <Category nama="Gucci" src="/img/gucci.png" id={3} />
      <Category nama="Converse" src="/img/converse.png" id={4} />
      <Category nama="Nike" src="/img/nike.png" id={5} />
      <Category nama="Puma" src="/img/puma.png" id={5} />
    </div>
  );
}

function Category({
  src,
  nama,
  id,
}: {
  src: string;
  nama: string;
  id: number;
}) {
  return (
    <div className="hover:bg-slate-600 p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg h-full justify-end">
      <img className="max-w-[66%]" src={src} alt={nama} />
      <div className="flex flex-col ">
        <span className="font-bold text-4xl text-center">{nama}</span>
        <span className="text-lg text-center text-gray-600">ID : {id}</span>
      </div>
    </div>
  );
}
