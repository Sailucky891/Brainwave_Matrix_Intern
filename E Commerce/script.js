function addToCart(name, price, imageUrl) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, imageUrl });
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to cart.html
  window.location.href = "cart.html";
}
