// Function to generate a unique ID for orders
function generateOrderId() {
  // Generate a random number
  const randomId = Math.floor(Math.random() * 1000000);
  return `order_${randomId}`;
}
// Function to create an order object with a dynamic ID and items
function createOrder(items) {
  const orderId = generateOrderId();
  return {
    id: orderId,
    items: items,
  };
}
// Example order JSON
const orderItems = [11, 12, 13, 14, 15];
const order = createOrder(orderItems);
console.log("Generated Order:", order);
let orderList =  [order, order, order,order];

const ordersContainer = document.getElementById("orders-list-container");

if (orderList) {
    orderList.reverse();
    console.log("insie if");

    orderList.forEach((order)=>{

        const dishes=getDishes(order.items)
        //console.log('dname',dishes[0].name);
        let dishName="";
        let count=0;
        let price = 0;
        dishes.forEach(dish => {
            
        
            dishName+=`${dish.name}&times; 1, `
            count++;
            price+=dish.price;
            if(count%2==0)
            {
                dishName+='<br>'
            }
            console.log('dish name',dish.name);

            console.log('last count value:',count);

            
        });
        
        ordersContainer.innerHTML+=
        `<div class="list-div">
                <img id="order-icon" src="../images/order-icon.png" />
                <h3>
                    ${dishName}
                </h3>
                <h3>₹${price}</h3>
                <h3>Items: ${order.items.length}</h3>
            </div>`;

    });
} else {
    console.log('inside else');
    ordersContainer.style=null;
  ordersContainer.innerHTML =
    
"No Orders Yet. Go To Home And Choose Your Favourite Dishes.";
  
}
