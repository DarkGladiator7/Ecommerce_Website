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
import Login from "./pages/Login";
import AddProduct from "./components/AddProducts/AddProduct";
import StripeProvider from "./components/Checkout/StripeProvider";
import ThankYouPage from "./components/Thankyou";
import ContactPage from "./components/ContactUs/ContactPage";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addprod",
        element: <AddProduct />,
      },
      {
        path: "/checkout",
        element: <StripeProvider />,
      },
      {
        path: "/thankyou",
        element: <ThankYouPage />,
      },
      {
        path: "/contactus",
        element: <ContactPage />,
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
