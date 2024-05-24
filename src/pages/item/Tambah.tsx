import { useState } from "react";
import useFetchGet from "../../hooks/useFetchGet";
import { myAxios } from "../../helper/axios";

export default function TambahItem() {
  const category = useFetchGet("/api/category");
  const brands = useFetchGet("/api/brands");
  const [input, setInput] = useState<{
    name?: string;
    id_category?: string;
    id_brand?: string;
    price?: string;
    stock?: string;
    image?: any;
  }>();

  const tambahItem = (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input?.name ? input.name : "");
    formData.append("id_category", input?.id_category ? input.id_category : "");
    formData.append("id_brand", input?.id_brand ? input.id_brand : "");
    formData.append("price", input?.price ? input.price : "");
    formData.append("stock", input?.stock ? input.stock : "");
    formData.append("image", input?.image ? input.image : "");

    myAxios
      .post("/api/items", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        alert("Berhasil menambah item baru");
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  return (
    <form
      onSubmit={tambahItem}
      className="w-1/2 mx-auto flex flex-col p-5 gap-y-5 "
    >
      <span className="font-bold text-4xl text-center">Tambah Item</span>
      <div className="flex flex-col">
        <span className="text-2xl ">Nama</span>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Category</span>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, id_category: e.target.value }))
          }
          list="categories"
          type="text"
          className="rounded outline-none border-2 border-black h-8"
        />
        <datalist id="categories">
          {category?.map((c) => {
            return (
              <option key={c.id_category} value={c.id_category}>
                {c.category}
              </option>
            );
          })}
        </datalist>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Brand</span>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, id_brand: e.target.value }))
          }
          list="brands"
          type="text"
          className="rounded outline-none border-2 border-black h-8"
        />
        <datalist id="brands">
          {brands?.map((c) => {
            return (
              <option key={c.id_brand} value={c.id_brand}>
                {c.name_brand}
              </option>
            );
          })}
        </datalist>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Price</span>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, price: e.target.value }))
          }
          type="number"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Stock</span>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, stock: e.target.value }))
          }
          type="number"
          className="rounded outline-none border-2 border-black h-8"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl ">Photo</span>
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, image: e.target.files?.[0] }))
          }
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
