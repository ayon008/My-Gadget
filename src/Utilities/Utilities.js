const addToDb = (id) => {
  let db = {};
  const savedProduct = localStorage.getItem("shoppingCart");
  if (savedProduct) {
    db = JSON.parse(savedProduct);
  }
  let quantity = db[id];
  if (!quantity) {
    db[id] = 1;
  } else {
    db[id] = db[id] + 1;
  }
  localStorage.setItem("shoppingCart", JSON.stringify(db));
};

const getStoredCart = () => {
  let shoppingCart = [];
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const savedProduct = JSON.parse(localStorage.getItem("shoppingCart"));
  delete savedProduct[id];
  localStorage.setItem("shoppingCart", JSON.stringify(savedProduct));
};

const clearFromDb = () => {
  localStorage.removeItem("shoppingCart");
};

export { addToDb, getStoredCart, removeFromDb, clearFromDb };
