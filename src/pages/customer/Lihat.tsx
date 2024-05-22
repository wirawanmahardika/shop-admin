export default function LihatCustomer() {
  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto ">
      <span className="col-span-3 font-bold text-5xl text-center">Items</span>
      <Item
        nama="Baju Adidas Terbatas"
        src="/img/baju.png"
        id={2}
        brand="Gucci"
        price="200.000"
        category="Baju"
      />
      <Item
        nama="Kalung Cleopatra"
        src="/img/kalung.png"
        id={2}
        brand="Adidas"
        price="240.000"
        category="Kalung"
      />
      <Item
        nama="Gelang Arab"
        src="/img/gelang.png"
        id={2}
        brand="Puma"
        price="1.000.000"
        category="Gelang"
      />
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
}: {
  price: string;
  category: string;
  brand: string;
  src: string;
  nama: string;
  id: number;
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
          <span className="text-sm">Price : Rp {price}</span>
        </div>
      </div>
    </div>
  );
}
