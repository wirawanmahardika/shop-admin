import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Dashboard />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
