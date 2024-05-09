const cart = getCart();
console.log("cart", cart);
let subTotal = 0;
let total = 0;
let deliveryFee = 40;
const subTotalDiv = document.getElementById("subtotal-value");
const deliveryFeeDiv = document.getElementById("delivery-value");
const totalDiv = document.getElementById("total-value");
const cartContainer = document.getElementById("cart-container");
const contentCartContainer = document.getElementById("content-cart");
//these are the cart dishes
if (cart.length > 0) {
  const dishes = getDishes(cart);
  console.log("fetched dishes", dishes);
  let cartItemHtml = cartContainer.innerHTML;
  dishes.forEach((dish) => {
    subTotal += dish.price;
    console.log("dd", dish.id, dish.picSrc);
    cartItemHtml +=
      "<div class='item-cart'>" +
      `<div><img class='img-cart-dish' src='${dish.picSrc}'></div>` +
      `<h3>${dish.name}</h3>` + // Placeholder for dish title
      `<h3>₹${dish.price}</h3>` +
      `<h3>1</h3>` + // Assuming fixed quantity for now
      `<h3>₹${dish.price}</h3>` + // Assuming total price for one item
      `<div><button id='${dish.id}' class='bt-remove-cart'>x</button></div></div>`;
    cartContainer.innerHTML = cartItemHtml;
    subTotalDiv.textContent = `₹${subTotal}`;
    deliveryFeeDiv.textContent = `₹${deliveryFee}`;
    total = subTotal + deliveryFee;
    totalDiv.textContent = `₹${total}`;
  });
} else {
  contentCartContainer.innerHTML =
    "<center>Not Dishes Found .Please Add Your Favouraite dishes from Home!</center>";
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("bt-remove-cart")) {
    console.log("inside event");
    console.log("id of remove bt", event.target.id);
    const result = removeFromCart(event.target.id);

    if (result) {
      navigateToPage("cart.html");
    }
  }
  if (event.target.id == "bt-checkout") {
    console.log("inside bt-che");

    const order = createAndStoreOrder(cart, deliveryFee);
    if (order) {
      if (clearCart()) {
        showToast("Oder Successful!");
        navigateToPage("orders.html");
      }
    }

    console.log("order", order);
  }
});

//to remove from cart
//use function removeFromCart(dishID)
