export default function LihatCategory() {
  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto">
      <span className="col-span-3 font-bold text-5xl text-center">
        Categories
      </span>
      <div className="p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg">
        <img className="max-w-[66%]" src="/img/baju.png" alt="baju" />
        <span className="font-bold text-4xl text-center">Baju</span>
      </div>
      <div className="p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg">
        <img className="max-w-[66%]" src="/img/shoes3.png" alt="sepatu" />
        <span className="font-bold text-4xl text-center">Sepatu</span>
      </div>
      <div className="p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg">
        <img className="max-w-[66%]" src="/img/kalung.png" alt="kalung" />
        <span className="font-bold text-4xl text-center">Kalung</span>
      </div>
      <div className="p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg">
        <img className="max-w-[66%]" src="/img/gelang.png" alt="gelang" />
        <span className="font-bold text-4xl text-center">Gelang</span>
      </div>
      <div className="p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg">
        <img className="max-w-[66%]" src="/img/celana.png" alt="celana" />
        <span className="font-bold text-4xl text-center">Celana</span>
      </div>
    </div>
  );
}
