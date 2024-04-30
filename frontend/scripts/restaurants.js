// Dummy array of restaurants
{const restaurants = [
    
    {
        id: 1,
        picSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iicxz127dequaxndmzho',
        name: 'Prantha King',
        rating: '4.3',
        deliveryTime: '65-70 mins',
        type: 'Indian',
        location: 'Durgi',
        dishes: [
            {
                name: "Mix Paratha",
                picSrc: "https://media-cdn.tripadvisor.com/media/photo-s/19/0b/74/b6/aloo-paratha-with-curd.jpg",
                description: 'A type of Indian flatbread, typically a variant of "paratha," made with a mixture of different ingredients.',
                ratingReviews:'3.2 (15)',
                price:50
            },

        ]
    },
    {
        id: 2,
        picSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nse2ochgmakpsw2hv2ld',
        name: 'Rishav Food Point',
        rating: '4',
        deliveryTime: '55-60 mins',
        type: 'North Indian, Chinese',
        location: 'Samrala Chowk'
    },
    {
        id: 3,
        picSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cf6280d32aefb59cc849ef81b39fd3fd',
        name: "Captain Sam's Pizza",
        rating: '4.1',
        deliveryTime: '50-55 mins',
        type: 'Pizzas, Desserts, Beverages, Pastas, Fast Food, Snacks, Italian',
        location: 'Sector 32'
    },
    {
        id: 4,
        picSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b64bf721e12e7b3df82c832898999c51',
        name: 'Barista Coffee',
        rating: '3.8',
        deliveryTime: '45-50 mins',
        type: 'Barista Coffee',
        location: 'Civil Lines'
    },
    {
        id: 5,
        picSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3lgjak3utbgngopjotu',
        name: 'A-One Vegetarian',
        rating: '4.3',
        deliveryTime: '50-55 mins',
        type: 'North Indian, Snacks, Chinese',
        location: 'Ludhiana Junction'
    },
    {
        id: 6,
        picSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/caelqz7fu8nektqunkza',
        name: 'Royal South Vegetarians',
        rating: '4.4',
        deliveryTime: '50-55 mins',
        type: 'South Indian, North Indian',
        location: 'Sector 32'
    },
    {
        id:7 ,
        picSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3382cca4f0b3a8fed179b7c348c79fc6',
        name: 'Khushi Ram & Sons',
        rating: '4.4',
        deliveryTime: '55-60 mins',
        type: 'Sweets, Snacks',
        location: 'Sector 32'
    },
];
// Convert the array to JSON string
const restaurantsJSON = JSON.stringify(restaurants);

// Store in local storage
localStorage.setItem('restaurants', restaurantsJSON);
}

