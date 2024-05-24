import useFetchGet from "../../hooks/useFetchGet";

export default function LihatBrand() {
  const brands = useFetchGet("/api/brands");

  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto ">
      <span className="col-span-3 font-bold text-5xl text-center">Brands</span>

      {brands &&
        brands.map((b) => {
          return (
            <Brand
              key={b.id_brand}
              nama={b.name_brand}
              src={b.brand_photo}
              id={b.id_brand}
            />
          );
        })}
    </div>
  );
}

function Brand({ src, nama, id }: { src: string; nama: string; id: number }) {
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
