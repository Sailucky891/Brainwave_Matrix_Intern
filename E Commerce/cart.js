function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "Total: $0.00";
    return;
  }

  let total = 0;

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <div class="cart-item-info">
        <p>${item.name}</p>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(itemDiv);
    total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", loadCart);
function buyAllItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // You can add logic here for processing purchase/payment if needed

  alert("Bought all items in the cart!");
  localStorage.removeItem("cart");
  loadCart();
}