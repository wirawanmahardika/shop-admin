import { useState } from "react";
import Bars3 from "../icons/bars3";
import Navbar from "./Navbar";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-screen flex font-geologica">
      <div
        className={`overflow-hidden bg-stone-900 ${isOpen ? "w-1/6" : "w-0"}`}
        style={{ transition: "width 0.3s" }}
      >
        <Navbar />
      </div>
      <div className={`${isOpen ? "w-5/6" : "w-full"}`}>
        {/* <div className={"w-full"}> */}
        <div className="w-full h-[8vh] bg-sky-700 flex p-4 items-center gap-x-3">
          <Bars3 onClick={() => setIsOpen((prev) => !prev)} />
          <span className="font-bold text-xl text-white">Dawala</span>
        </div>
      </div>
    </div>
  );
}
