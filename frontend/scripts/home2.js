const restaurants = getRestaurants();
console.log('restaurants: ',restaurants);

const restaurantContainer=document.getElementById('restaurants-container');
const restaurantData="";
restaurants.forEach((restaurant,index)=> {

    //add restaurent data dynamically

    // Create a div element for the restaurant
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant');

    // Populate the div with restaurant data
    restaurantDiv.innerHTML = `

    <a id="a-restaurent" class=a${index} href="dishes.html">
        <img id="resto-pic"  src="${restaurant.picSrc}" alt="restaurant">
        <h3 id="resto-name">${restaurant.name}</h3>
        <div class="div5">
            <div class="divr">
                <img id="rating" src="../images/rating.svg">
                <h5 id="resto-rating-time" class= "deliveryTime">${restaurant.rating} . ${restaurant.deliveryTime}</h5>
            </div>
            <div class="div6">
                <div id="resto-type" class ="restaurantType">${restaurant.type}</div>
                <div id="resto-location" class="restaurantType">${restaurant.location}</div>
            </div>
        </div></a>
    `;
    // Append the restaurant div to the container
    restaurantContainer.appendChild(restaurantDiv);
});

// Function to render restaurants based on search input
function renderRestaurants(searchValue) {
    // Clear the container
    restaurantContainer.innerHTML = '';

    // Filter restaurants based on search input
    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filteredRestaurants.length === 0) {
        // Create a div for "No results found" message
        const noResultsDiv = document.createElement('div');
        noResultsDiv.textContent = 'No results found';
        restaurantContainer.appendChild(noResultsDiv);
    } else {

    // Render filtered restaurants
    filteredRestaurants.forEach(restaurant => {
        // Create restaurant div
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.innerHTML = `
        <a id="a-restaurent" href="dishes.html">
        <img id="resto-pic" src="${restaurant.picSrc}" alt="restaurant">
        <h3 id="resto-name">${restaurant.name}</h3>
        <div class="div5">
            <div class="divr">
                <img id="rating" src="../images/rating.svg">
                <h5 id="resto-rating-time" class= "deliveryTime">${restaurant.rating} . ${restaurant.deliveryTime}</h5>
            </div>
            <div class="div6">
                <div id="resto-type" class ="restaurantType">${restaurant.type}</div>
                <div id="resto-location" class="restaurantType">${restaurant.location}</div>
            </div>
        </div></a>
    `;
        // Append restaurant div to container
        restaurantContainer.appendChild(restaurantDiv);
    });}
}
// Initial render
renderRestaurants('');
// Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    renderRestaurants(this.value);
});


for (let index = 0; index < restaurants.length; index++) {
    const element = document.getElementsByClassName(`a${index}`)
    console.log('element',element);

    element.addEventListener('click',()=>{
        localStorage.setItem('restaurantClick',index);
    })
    
}