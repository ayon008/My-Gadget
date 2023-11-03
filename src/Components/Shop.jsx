import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { addToDb } from "../Utilities/Utilities";
import { CartContext, ProductContext } from "../App";
import toast, { Toaster } from "react-hot-toast";
const Shop = () => {
  const [cart, setCart] = useContext(CartContext);
  const products = useContext(ProductContext);

  const handleAddToCart = (product) => {
    let newArr = [];
    const exist = cart.find((p) => p.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newArr = [...cart, product];
    } else {
      const rest = cart.filter((p) => p.id !== product.id);
      find.quantity = find.quantity + 1;
      newArr = [...rest, find];
    }
    const added = () => {
      toast.success("Product Added! 🛒");
    };
    added();
    addToDb(product.id);
    setCart(newArr);
  };
  
  return (
    <div className="max-w-[90%] mx-auto mt-10">
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          ></ProductCard>
        ))}
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Shop;
