import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";
import {
  clearFromDb,
  getStoredCart,
  removeFromDb,
} from "../Utilities/Utilities";
import { CartContext } from "../App";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const notify = () => toast.success("Order Placed! 👍");
  const [cart, setCart] = useContext(CartContext);
  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      let price = product.price * product.quantity;
      total = total + price;
    }
  }
  const handleRemoveItem = (id) => {
    const filter = cart.filter((product) => product.id !== id);
    setCart(filter);
    removeFromDb(id);
  };

  const handleClear = () => {
    clearFromDb();
    setCart([]);
    if (cart.length > 0) {
      notify();
    } else {
      const error = () => toast.error("Cart is empty! 🔥");
      error();
    }
  };

  const placeOrder = () => {
    if (cart.length > 0) {
      setCart([]);
    }
  };

  console.log(total);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  bg-gray-100">
      <div className="flex flex-col justify-center  max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold text-black">
          {cart.length ? "Reviews Cart Items" : "Cart is empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
              handleClear={handleClear}
            ></CartItem>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total Amount: <span className="font-semibold">{total}$</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxed and shipping charges
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <button onClick={() => handleClear()} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to={"/shop"}>
              <button className="btn-outlined">Back To Shop</button>
            </Link>
          )}
          <button onClick={() => handleClear()} className="btn-primary">
            Place Order
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Cart;
