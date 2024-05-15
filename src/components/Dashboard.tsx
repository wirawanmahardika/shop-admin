import Bars3 from "../icons/bars3";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex font-geologica">
      <div className="basis-1/6 bg-blue-600"></div>
      <div className="basis-5/6 ">
        <div className="w-full h-[8vh] bg-sky-600 flex p-4 items-center gap-x-3">
          <Bars3 />
          <span className="font-bold text-xl text-white">Dawala</span>
        </div>
      </div>
    </div>
  );
}
