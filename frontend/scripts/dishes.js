// Check which restaurant the user selected
const index = getIndexFromURL();
const restaurant = getRestaurant(index);
const dishes = getDishes(restaurant.dishes);
let dishesHtml = "";
const dishesContainer = document.getElementById("dishes-div");
const cart = getCart()||[];
console.log('new cart',cart);


// Function to update the button text based on cart state

if (dishes) {
  
  dishes.forEach((dish) => {
    const dishesDiv = document.createElement("div");
    dishesDiv.classList.add("bg-gradient");

    dishesDiv.innerHTML = `
            <img id="resto-pic" src="${dish.picSrc}" alt="restaurant">
            <div>
                <h3 id="resto-name">${dish.name}</h3>
            </div>
            <div class="div5">
                <div class="divr">
                    <img id="rating" src="../images/rating.svg">
                    <h5 id="resto-rating-time" class="deliveryTime">${dish.ratingReviews}</h5>
                </div>
                <div class="div6 dish-desc">
                    <div id="resto-type" class="restaurantType dishd">${dish.description}</div>
                    <div id="resto-location" class="restaurantType dish-price">${dish.price}</div>
                </div>
                <button id="${dish.id}" class="addToCart" data-dish-id="${dish.id} >Add To Cart</button>
            </div>
        `;
    dishesContainer.appendChild(dishesDiv);
    
  });
} else {
  dishesContainer.innerHTML = "No + Found";
}
console.log("dishes", dishes);
function getIndexFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const index = urlParams.get("index");
  console.log("index", index);
  return index;
}
function renderDishes(searchValue) {
  dishesContainer.innerHTML = "";

  // Filter restaurants based on search input
  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log("filteredDishes", filteredDishes);

  if (filteredDishes.length == 0) {
    dishesContainer.innerHTML = "Not any dishes matches your search";
  } else {
    dishesContainer.innerHTML = "";
    filteredDishes.forEach((dish) => {
      const dishesDiv = document.createElement("div");
      dishesDiv.classList.add("bg-gradient");
      dishesDiv.innerHTML = `
                <img id="resto-pic" src="${dish.picSrc}" alt="restaurant">
                <div>
                    <h3 id="resto-name">${dish.name}</h3>
                </div>
                <div class="div5">
                    <div class="divr">
                        <img id="rating" src="../images/rating.svg">
                        <h5 id="resto-rating-time" class="deliveryTime">${dish.ratingReviews}</h5>
                    </div>
                    <div class="div6 dish-desc">
                        <div id="resto-type" class="restaurantType dishd">${dish.description}</div>
                        <div id="resto-location" class="restaurantType dish-price">${dish.price}</div>
                    </div>
                    <button id="${dish.id}" class="addToCart" data-dish-id="${dish.id}">Add To Cart</button>
                </div>
            `;
      dishesContainer.appendChild(dishesDiv);
    });
    console.log("after searchhhhhhhhhhhhh");

    updateDishes(filteredDishes);
  }
}

//initial render
renderDishes("");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (data) => {
  renderDishes(data.target.value);
  console.log("data", data.target.value);
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("addToCart")) {
    console.log("inside event");
    console.log("value==", event.target.textContent);
    const buttonText=event.target.textContent;
    const dishId = event.target.dataset.dishId;
    console.log("dishId", dishId);
    
    if(buttonText.includes('Add'))
    {
      //add dishes

      console.log("inside add event");
      
      const result = addToCart(dishId,index);

      console.log('add to cart result================',result);
      if(result)
        {

          updateButton(true,dishId);
        }
      
    }else{

      console.log('inside remove event');
      removeFromCart(dishId);
      updateButton(false,dishId);
    }
    
    /*if (result) {
      //change add to cart button text
      updateButton(true, dishId);

      console.log("result is true");
    } else {
      //remove dish id from cart
      removeFromCart(dishId);
      updateButton(false, dishId);
      console.log("result is false");
    }*/
  }
});
function updateButton(flag, dishId) {
  console.log('type of ',typeof dishId)
  const button = document.getElementById(dishId);
  console.log("inside update did",dishId);
  console.log("flag===", flag);

  console.log("button",button);
  if (flag) {
    //console.log("txt===","Remove From Cart");
    button.textContent = "Remove From Cart";
    button.style.backgroundColor="#D22B2B";
   button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = "#cf5951";
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#D22B2B'; // Reset to default color
    });
  } else {
    console.log("txt===", "Add To Cart");
    button.textContent = "Add To Cart";
    button.style.backgroundColor="#0B455C";
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = "rgb(85, 138, 138)";
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = "#0B455C"; // Reset to default color
    });
  }

  //  button.textContent = isInCart ? "Remove From Cart" : "Add To Cart";
}


document.addEventListener('DOMContentLoaded', function() {
  console.log('inside DoMContentLoaded');
  updateDishes(null);
});


function updateDishes(filteredDishes)
{
  let dishesArray;
  
  if(filteredDishes)
  {
    dishesArray=filteredDishes;

  }else{
    dishesArray=dishes;
  }
  console.log("inside update dishesssssssssssssssssssssssssssss");
  dishesArray.forEach((dish) => {
    if (cart.some(item => item == dish.id)) {
        console.log("inside", dish.id);
        updateButton(true, dish.id);
    } else {
        console.log("outside", dish.id);
        //updateButton(false, dish);
    }
});
}

