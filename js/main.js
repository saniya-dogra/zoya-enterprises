let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart");
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  let msg = "Your Cart:\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.name} - ₹${item.price}\n`;
    total += item.price;
  });

  msg += `\nTotal: ₹${total}`;
  alert(msg);
}

function filterProducts(category, btn) {
  document.querySelectorAll(".category-filter button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      category === "all" || card.dataset.category === category
        ? "block"
        : "none";
  });
}

function login() {
  let user = localStorage.getItem("user");
  if (user) {
    alert("Welcome back " + user);
  } else {
    let name = prompt("Enter your name");
    if (name) {
      localStorage.setItem("user", name);
      alert("Welcome " + name);
    }
  }
}
