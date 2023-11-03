import { getStoredCart } from "./Utilities";

const productsAndCartData = async () => {
  const res = await fetch("product.json");
  const data = await res.json();
  const savedCart = getStoredCart();
  let cart = [];
  for (const id in savedCart) {
    let findProduct = data.find((p) => p.id === id);
    findProduct.quantity = savedCart[id];
    cart.push(findProduct);
  }
  return { cart, data };
};

export default productsAndCartData;
