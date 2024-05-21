import { Form } from "react-router-dom";

export default function TambahBrand() {
  return (
    <Form className="w-1/2 mx-auto flex flex-col p-5 gap-y-5 ">
      <span className="font-bold text-4xl text-center">Tambah Brand</span>
      <div className="flex flex-col">
        <span className="text-2xl ">Nama</span>
        <input
          type="text"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Photo</span>
        <input
          type="file"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <button className="font-bold px-4 py-1 rounded bg-sky-600 text-stone-200 mx-auto w-fit">
        Tambah
      </button>
    </Form>
  );
}
