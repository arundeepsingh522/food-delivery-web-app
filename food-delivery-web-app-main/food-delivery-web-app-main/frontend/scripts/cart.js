const cart = getCart();
console.log(cart);


//these are the cart dishes 
const  dishes = getDishes(cart);
console.log('fetched dishes',dishes);


//to remove from cart 
//use function removeFromCart(dishID)