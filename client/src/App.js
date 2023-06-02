import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Product from "./components/Product";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./Firebase/Api";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
