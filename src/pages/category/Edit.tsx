import { useState } from "react";
import { myAxios } from "../../helper/axios";

export default function EditCategory() {
  const [image, setImage] = useState<any>();
  const [nama, setNama] = useState<string>("");
  const [id, setID] = useState<string>("");

  const submitEdit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_category", id);
    formData.append("category", nama);
    formData.append("photo", image);

    try {
      const result = await myAxios.patch(
        "/api/category/edit-category",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 w-full flex flex-col gap-y-5 items-center">
      <span className="font-bold text-4xl ">Edit Category</span>
      <form
        onSubmit={submitEdit}
        className="w-1/2 flex flex-col items-center gap-y-5"
      >
        <div className="flex flex-col w-full ">
          <label htmlFor="id_category" className="text-xl">
            ID Category
          </label>
          <input
            onChange={(e) => setID(e.target.value)}
            type="text"
            className="w-full outline-none border-2 border-black rounded py-1"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="id_category" className="text-xl">
            Nama
          </label>
          <input
            onChange={(e) => setNama(e.target.value)}
            type="text"
            className="w-full outline-none border-2 border-black rounded py-1"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="id_category" className="text-xl">
            Photo
          </label>
          <input
            onChange={(e) => setImage(e.target.files?.[0])}
            type="file"
            className="w-full outline-none border-2 border-black rounded py-1"
          />
        </div>
        <button className="px-8 py-1 rounded bg-sky-600">Submit</button>
      </form>
    </div>
  );
}
