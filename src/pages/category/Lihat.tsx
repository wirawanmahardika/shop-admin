import useFetchGet from "../../hooks/useFetchGet";

export default function LihatCategory() {
  const category = useFetchGet("/api/category");

  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto ">
      <span className="col-span-3 font-bold text-5xl text-center">
        Categories
      </span>

      {category &&
        category.map((c) => {
          return (
            <Category
              key={c.id_category}
              nama={c.category}
              src={c.category_photo}
              id={c.id_category}
            />
          );
        })}
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
    <div className="p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg h-full justify-end">
      <img className="max-w-[66%]" src={src} alt={nama} />
      <div className="flex flex-col ">
        <span className="font-bold text-4xl text-center">{nama}</span>
        <span className="text-lg text-center text-gray-600">ID : {id}</span>
      </div>
    </div>
  );
}
