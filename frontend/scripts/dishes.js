// Check which restaurant the user selected
const index = getIndexFromURL();
const restaurant =getRestaurants();
const dishes = getDishes(index);

let dishesHtml = "";
const dishesContainer = document.getElementById('dishes-div');

if (dishes) {
    dishes.forEach(dish => {
        const dishesDiv = document.createElement('div');
        dishesDiv.classList.add('bg-gradient');

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
                <button id="addToCart">Add To Cart</button>
            </div>
        `;

        dishesContainer.appendChild(dishesDiv);
    });
} else {
    dishesContainer.innerHTML = "No Dishes Found";
}

console.log('dishes', dishes);

function getIndexFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    console.log('index', index);
    return index;
}
function renderDishes(searchValue)
{
    dishesContainer.innerHTML = '';

    // Filter restaurants based on search input
    const filteredDishes = dishes.filter(dish => 
        dish.name.toLowerCase().includes(searchValue.toLowerCase())||
        dish.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    console.log('filteredDishes', filteredDishes);

    if(filteredDishes.length==0)
    {
        dishesContainer.innerHTML="Not any dishes matches your search"
    }else{
        dishesContainer.innerHTML='';
        
        filteredDishes.forEach(dish => {
            const dishesDiv = document.createElement('div');
            dishesDiv.classList.add('bg-gradient');

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
                    <button class="addToCart" data-dish-id="${dish.id}">Add To Cart</button>
                </div>
            `;

            dishesContainer.appendChild(dishesDiv);
        });
    }

}

//initial render
renderDishes('');

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input',(data)=>{

    renderDishes(data.target.value);
    console.log('data',data.target.value)
});

document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('addToCart'))
    {
        const dishId = event.target.dataset.dishId;
        console.log('dishId',dishId);  
        addToCart(dishId) ;
    }

    
    
})


