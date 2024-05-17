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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />} />
      <Route path="category" element={<ContainerCategory />}>
        <Route index element={<LihatCategory />} />
        <Route path="tambah" element={<TambahCategory />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
