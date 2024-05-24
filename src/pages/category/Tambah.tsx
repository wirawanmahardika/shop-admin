import { useState } from "react";
import { myAxios } from "../../helper/axios";

export default function TambahCategory() {
  const [category, setCategory] = useState<string>("");
  const [categoryPhoto, setCategoryPhoto] = useState<any>(null);

  const addCategory = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("image", categoryPhoto);

    try {
      await myAxios.post("/api/category", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Berhasil menambah kategori baru");
    } catch (err) {
      alert("something went wrong");
    }
  };

  return (
    <form
      onSubmit={addCategory}
      className="w-1/2 mx-auto flex flex-col p-5 gap-y-5 "
    >
      <span className="font-bold text-4xl text-center">Tambah Category</span>
      <div className="flex flex-col">
        <span className="text-2xl ">Nama</span>
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Photo</span>
        <input
          onChange={(e) => setCategoryPhoto(e.target.files?.[0])}
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
