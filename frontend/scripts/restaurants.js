// Dummy array of restaurants
{
  const restaurants = [
    {
      id: 1,
      picSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iicxz127dequaxndmzho",
      name: "Prantha King",
      rating: "4.3",
      deliveryTime: "65-70 mins",
      type: "Indian",
      location: "Durgi",
      dishes: [11, 12, 13, 14, 15, 16]
    },
    {
      id: 2,
      picSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nse2ochgmakpsw2hv2ld",
      name: "Rishav Food Point",
      rating: "4",
      deliveryTime: "55-60 mins",
      type: "North Indian, Chinese",
      location: "Samrala Chowk",
      dishes: [21,22,23,24,25,26]
    },
    {
      id: 3,
      picSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cf6280d32aefb59cc849ef81b39fd3fd",
      name: "Captain Sam's Pizza",
      rating: "4.1",
      deliveryTime: "50-55 mins",
      type: "Pizzas, Desserts, Beverages..",
      location: "Sector 32",
      dishes:[31,32,33,34,35,36],
    },
    {
      id: 4,
      picSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b64bf721e12e7b3df82c832898999c51",
      name: "Barista Coffee",
      rating: "3.8",
      deliveryTime: "45-50 mins",
      type: "Barista Coffee",
      location: "Civil Lines",
      dishes:[41,42,43,44,45,46],

    },
    {
      id: 5,
      picSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3lgjak3utbgngopjotu",
      name: "A-One Vegetarian",
      rating: "4.3",
      deliveryTime: "50-55 mins",
      type: "North Indian, Snacks, Chinese",
      location: "Ludhiana Junction",
      dishes:[51,52,53,54,55,56],
    },
    {
      id: 6,
      picSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/caelqz7fu8nektqunkza",
      name: "Royal South Vegetarians",
      rating: "4.4",
      deliveryTime: "50-55 mins",
      type: "South Indian, North Indian",
      location: "Sector 32",
      dishes:[61,62,63,64,65,66],
    },
    {
      id: 7,
      picSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3382cca4f0b3a8fed179b7c348c79fc6",
      name: "Khushi Ram & Sons",
      rating: "4.4",
      deliveryTime: "55-60 mins",
      type: "Sweets, Snacks",
      location: "Sector 32",
      dishes:[71,72,73,74,75,76],
    },
    {
      id: 8,
      picSrc:
        "https://b.zmtcdn.com/data/pictures/0/120280/d5fb6fd12367b4f3a47ae4e49b6137d5.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
      name: "Sindhi Sweets",
      rating: "4.5",
      deliveryTime: "40 mins",
      type: "Sweets,Bakery",
      location: "Sector-17,Chandigarh",
      dishes:[81,82,83,84,85,86],
    },
    {
      id: 9,
      picSrc:
        "https://b.zmtcdn.com/data/pictures/chains/4/18654404/6ad6dbbbdc4e24718bde17c5815ce05e.jpg?fit=around|300:273&crop=300:273;*,*",
      name: "Brown Bakers",
      rating: "4.3",
      deliveryTime: "45 mins",
      type: "Bakery,Desserts",
      location: "Industrial Area,Chandigarh",
      dishes:[91,92,93,94,95,96],
    }
    /*,
    {
      id: 10,
      picSrc:
        "https://b.zmtcdn.com/data/pictures/chains/0/120130/601596c9f9e443ba02d5142e21bd3f90.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      name: "Gopals",
      rating: "4.8",
      deliveryTime: "30 mins",
      type: "North-Indian,South-Indian",
      location: "Sector-35,Chandigarh",
      dishes:[101,102,103,104,105,106],
    },
    {
      id: 11,
      picSrc:
        "https://b.zmtcdn.com/data/pictures/chains/6/20773566/057621f9682f8a930b896da1f2f00673.jpg?fit=around|300:273&crop=300:273;*,*",
      name: "Reflections Cafe",
      rating: "4.4",
      deliveryTime: "45 mins",
      type: "Italian,Continental",
      location: "Sector-35,Chandigarh",
      dishes:[111,112,113,114,115,116],
    },
    {
      id: 12,
      picSrc:
        "https://b.zmtcdn.com/data/pictures/4/19142394/a1c9a190156170702d44c5470cf4b5be.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      name: "Dhaba 7",
      rating: "4.3",
      deliveryTime: "45 mins",
      type: "North-Indian,Street-food",
      location: "Sector-7,Chandigarh",
      dishes:[121,122,123,124,125,126],
    },*/
  ];
  // Convert the array to JSON string
  const restaurantsJSON = JSON.stringify(restaurants);
  // Store in local storage
  localStorage.setItem("restaurants", restaurantsJSON);
}