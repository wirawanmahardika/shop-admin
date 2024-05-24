import { myAxios } from "../../helper/axios";
import { useState } from "react";

export default function TambahBrand() {
  const [brandName, setBrandName] = useState<string>("");
  const [brandPhoto, setBrandPhoto] = useState<any>(null);

  const addCategory = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name_brand", brandName);
    formData.append("image", brandPhoto);

    try {
      await myAxios.post("/api/brands", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Berhasil menambah brand baru");
    } catch (err) {
      alert("something went wrong");
    }
  };

  return (
    <form
      onSubmit={addCategory}
      className="w-1/2 mx-auto flex flex-col p-5 gap-y-5 "
    >
      <span className="font-bold text-4xl text-center">Tambah Brand</span>
      <div className="flex flex-col">
        <span className="text-2xl ">Nama</span>
        <input
          onChange={(e) => setBrandName(e.target.value)}
          type="text"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Photo</span>
        <input
          onChange={(e) => setBrandPhoto(e.target.files?.[0])}
          type="file"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <button className="font-bold px-4 py-1 rounded bg-sky-600 text-stone-200 mx-auto w-fit">
        Tambah
      </button>
    </form>
  );
}
