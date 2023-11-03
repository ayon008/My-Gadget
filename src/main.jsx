import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Error from "./Components/Error.jsx";
import About from "./Components/About.jsx";
import Shop from "./Components/Shop.jsx";
import Cart from "./Components/Cart.jsx";
import productsAndCartData from "./Utilities/getCart&ProductData.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: productsAndCartData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("product.json"),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: productsAndCartData,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
