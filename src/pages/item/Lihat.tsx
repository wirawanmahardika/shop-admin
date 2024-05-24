import useFetchGet from "../../hooks/useFetchGet";

export default function LihatItems() {
  const items = useFetchGet("/api/items/get-all");
  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto ">
      <span className="col-span-3 font-bold text-5xl text-center">Items</span>

      {items &&
        items.map((i) => {
          return (
            <Item
              key={i.id_item}
              stock={i.stock}
              nama={i.name}
              src={i.photo_item}
              id={i.id_item}
              brand={i.brand}
              price={i.price}
              category={i.category}
            />
          );
        })}
    </div>
  );
}

function Item({
  src,
  nama,
  id,
  brand,
  price,
  category,
  stock,
}: {
  price: string;
  category: string;
  brand: string;
  src: string;
  nama: string;
  id: number;
  stock: number;
}) {
  return (
    <div className="hover:bg-slate-600 p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg h-full justify-end">
      <img className="max-w-[66%]" src={src} alt={nama} />
      <div className="flex flex-col items-start w-full gap-y-3">
        <span className="font-bold text-4xl self-center text-center">
          {nama}
        </span>
        <div className="w-full grid grid-cols-2 gap-1 justify-items-start">
          <span className="text-sm">Brand : {brand}</span>
          <span className="text-sm">ID : {id}</span>
          <span className="text-sm">Category : {category}</span>
          <span className="text-sm">Stock : {stock}</span>
          <span className="text-sm">Price : Rp {price}</span>
        </div>
      </div>
    </div>
  );
}
