import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import LihatCategory from "./pages/category/Lihat";
import TambahCategory from "./pages/category/Tambah";
import ContainerCategory from "./pages/category/Container";
import EditCategory from "./pages/category/Edit";
import ContainerBrand from "./pages/brand/Container";
import LihatBrand from "./pages/brand/Lihat";
import TambahBrand from "./pages/brand/Tambah";
import EditBrand from "./pages/brand/Edit";
import ContainerItem from "./pages/item/Container";
import LihatItems from "./pages/item/Lihat";
import TambahItem from "./pages/item/Tambah";
import EditItem from "./pages/item/Edit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />} />
      <Route path="category" element={<ContainerCategory />}>
        <Route index element={<LihatCategory />} />
        <Route path="tambah" element={<TambahCategory />} />
        <Route path="edit" element={<EditCategory />} />
      </Route>
      <Route path="brand" element={<ContainerBrand />}>
        <Route index element={<LihatBrand />} />
        <Route path="tambah" element={<TambahBrand />} />
        <Route path="edit" element={<EditBrand />} />
      </Route>
      <Route path="item" element={<ContainerItem />}>
        <Route index element={<LihatItems />} />
        <Route path="tambah" element={<TambahItem />} />
        <Route path="edit" element={<EditItem />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
