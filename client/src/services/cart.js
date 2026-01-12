export const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find(item => item.id === product.id);

  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};
