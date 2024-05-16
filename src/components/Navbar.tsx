import { useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col text-gray-200">
      <div className="items-center flex justify-center gap-x-3 p-3  bg-black">
        <img src="/logo.png" alt="logo" className="size-8" />
        <span className="font-bold text-gray-200 text-2xl text-center">
          Dashboard
        </span>
      </div>

      <div className="bg-black border-y border-stone-700 p-1 flex justify-between px-2 items-center cursor-pointer">
        <span className="">Home</span>
      </div>

      <NavigationGroup name="Category">
        <span>Tambah</span>
        <span>Edit</span>
        <span>Hapus</span>
      </NavigationGroup>
      <NavigationGroup name="Customer">
        <span>Tambah</span>
        <span>Edit</span>
        <span>Hapus</span>
      </NavigationGroup>
    </nav>
  );
}

function NavigationGroup({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {" "}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-black border-y border-stone-700 p-1 flex justify-between px-2 items-center cursor-pointer"
      >
        <span className="">{name}</span>
        <ArrowLeft isRotate={isOpen} />
      </div>
      <div
        style={{ transition: "height 0.3s linear" }}
        className={`flex flex-col font-quicksand px-4 overflow-hidden ${
          isOpen ? "h-20 py-1" : "h-0 py-0"
        }`}
      >
        {children}
        {/* <span className="cursor-pointer hover:text-sky-600 transition-colors">
          Tambah
        </span>
        <span className="cursor-pointer hover:text-sky-600 transition-colors">
          Edit
        </span>
        <span className="cursor-pointer hover:text-sky-600 transition-colors">
          Hapus
        </span> */}
      </div>
    </>
  );
}
