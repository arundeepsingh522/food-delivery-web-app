const orderList = getCurrenUserOrders();
// Example order JSON
console.log("Generated Order:", orderList);
const ordersContainer = document.getElementById("orders-list-container");

if (orderList) {
    orderList.reverse();
    console.log("insie if");
    orderList.forEach((order)=>{
        const dishes=getDishes(order.items)
        //console.log('dname',dishes[0].name);
        let dishName="";
        let count=0;
        console.log('ddddd',order.deliveryFee);
        let price = parseInt(order.deliveryFee);
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
                <h3>${order.date}</h3>
            </div>`;

    });
} else {
    console.log('inside else');
    ordersContainer.style=null;
  ordersContainer.innerHTML =
    
"No Orders Yet. Go To Home And Choose Your Favourite Dishes.";
  
}
