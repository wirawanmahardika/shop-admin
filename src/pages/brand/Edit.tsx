import { Form } from "react-router-dom";

export default function EditBrand() {
  return (
    <div className="p-8 w-full flex flex-col gap-y-5 items-center">
      <span className="font-bold text-4xl ">Edit Brand</span>
      <Form className="w-1/2 flex flex-col items-center gap-y-5">
        <div className="flex flex-col w-full ">
          <label htmlFor="id_category" className="text-xl">
            ID Category
          </label>
          <input
            type="text"
            className="w-full outline-none border-2 border-black rounded py-1"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="id_category" className="text-xl">
            Nama
          </label>
          <input
            type="text"
            className="w-full outline-none border-2 border-black rounded py-1"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="id_category" className="text-xl">
            Photo
          </label>
          <input
            type="file"
            className="w-full outline-none border-2 border-black rounded py-1"
          />
        </div>
        <button className="px-8 py-1 rounded bg-sky-600">Submit</button>
      </Form>
    </div>
  );
}
