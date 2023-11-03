import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/footer";
import { Outlet, useLoaderData } from "react-router-dom";
import Modal from "./Components/Modal";
export const ProductContext = createContext();
export const CartContext = createContext();
function App() {
  const { cart, data } = useLoaderData();
  const [cartArray, setCartArray] = useState(cart);

  let [isOpen, setIsOpen] = useState(false);
  const cartAlert = sessionStorage.getItem("alert");

  if (cartArray.length > 0 && cartAlert !== "true") {
    setIsOpen(true);
    sessionStorage.setItem("alert", true);
  }

  return (
    <>
      <CartContext.Provider value={[cartArray, setCartArray]}>
        <ProductContext.Provider value={data}>
          <Header></Header>
          <div className="min-h-[cal(100vh-137px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
        </ProductContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
