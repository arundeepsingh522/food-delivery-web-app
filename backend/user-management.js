// Sign Up
function saveUser(username, email, password) {
  try {
    console.log("inside user save");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    //check if the email already exists
    const existingUser = users.find((user) => user.email == email);
    console.log("exs user", existingUser);
    if (existingUser) {
      throw new Error("Email address already exists");
    }
    //else create a new user
    const user = { username, email, password };
    //add to array of users
    users.push(user);
    //save updated data to local storage
    localStorage.setItem("users", JSON.stringify(users));
    console.log("user is pushed to local storage");
    return "";
  } catch (error) {
    //console.log("error in saving user", error);
    console.log("error in findind mail", error);
    return error;
  }
}

//Login User
function loginUser(email, password) {
  const users = getUsers();
  if (users) {
    const user = users.find((user) => {
      return user.email === email && user.password === password;
    });
    if (user) {
      const response = { username: user.username, email: user.email };
      setCurrentUser(response);
      return response;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function searchUserByEmail(email) {
  const users = getUsers();
  if (users) {
    const user = users.find((user) => {
      return user.email === email;
    });
    if (user) {
      const response = "found";
      return response;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

// set current user in local storage

function setCurrentUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}
function getCurrentUserEmail() {
  const user = getCurrentUser();
  if (user) {
    return user.email;
  } else {
    return null;
  }
}
function getUsers() {
  const users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  } else {
    return null;
  }
}

function updatePassword(email, password) {
  const users = getUsers();
  if (users) {
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex != -1) {
      console.log("user index: " + userIndex);
      users[userIndex].password = password;
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    }
  }
}
//functions for getting restaurants
function getRestaurants() {
  const restaurants = localStorage.getItem("restaurants");
  if (restaurants) {
    return JSON.parse(restaurants);
  } else {
    return null;
  }
}

function getRestaurant(index) {
  const restaurant = getRestaurants();
  return restaurant[index];
}

function getAllDishes() {
  return JSON.parse(localStorage.getItem("dishes"));
}
function addDishes() {
  localStorage.setItem("dishes", JSON.stringify());
}

function getDishes(dishesArray) {
  console.log("dish arr", dishesArray);
  const dishesJson = getAllDishes();
  console.log("dish json", dishesJson);
  const dishes = [];
  dishesArray.forEach((dishId) => {
    const dish = dishesJson.find((dish) => dish.id == dishId);
    if (dish) {
      console.log("inside dish");
      dishes.push(dish);
    } else {
      console.log("ouside dish");
    }
  });
  return dishes;
}
function getCartDishes() {
  const dishes = getDishes();
  const users = getUsers();
  const currentUserEmail = getCurrentUserEmail();
  const cart = users.find((user) => user.email === currentUserEmail).cart;
  cart.forEach((element) => {
    const dish = dishes.find((dish) => dish.id === element);
    console.log("dish", dish);
  });

  if (cart) {
    return cart;
  } else {
    return null;
  }
}

 function addToCart(id, restaurantId) {
  const users = getUsers();
  const currentUserEmail = getCurrentUserEmail();
  console.log("current email", currentUserEmail);
  console.log("users", users);

  if (users) {
    const userIndex = users.findIndex((user) => {
      return user.email === currentUserEmail;
    });
    if (userIndex !== -1) {
      const cartArr = users[userIndex].cart || [];
      if (cartArr.length === 0) {
        // If the cart is empty, simply push the dish ID
        cartArr.push(id);
      } else {
        // If the cart is not empty, check if the dish ID is already in the cart
        if (!cartArr.includes(id)) {
          //
          //existing restourent id
          const existingResId = cartArr[0].charAt(0);
          const resId = parseInt(id.charAt(0));
          restaurantId = parseInt(restaurantId) + 1;
          console.log("resIdddddddddddddd", resId, existingResId);
          if (existingResId != resId) {
           

           try {
            const result =  showCustomizedAlertCart(id,restaurantId);
            return false;
         
          /*  if (result==true) {
              console.log('resukt isssssss',result);
                cartArr.push(id);
                console.log("Dish added to cart");
                console.log('User confirm the cart');
            } else {
                console.log("User canceled the action");
                return false;
            }*/
        } catch (error) {
            console.error("Error showing alert:", error);
        }
            // return 'custom-alert';
          } else {
            console.log("in elseeeeeeeeeeeeeeeeeeeeeeeeeeee");
            cartArr.push(id); // Push the dish ID if it's not already in the cart
          }
        } else {
          // Dish ID is already in the cart
          console.log("Dish already in cart");
          return false;
        }
      }
      console.log("dish added");
      console.log("cartArr", cartArr);
      users[userIndex].cart = cartArr;
      localStorage.setItem("users", JSON.stringify(users)); // Store the entire users array
      console.log("after users", users);
      return true;
    }
  }
}

function removeFromCart(dishId) {
  const users = getUsers();
  const currentUserEmail = getCurrentUserEmail();
  console.log("current email", currentUserEmail);
  console.log("users", users);

  if (users) {
    const userIndex = users.findIndex((user) => {
      return user.email === currentUserEmail;
    });
    if (userIndex !== -1) {
      const index = users[userIndex].cart.indexOf(dishId);
      users[userIndex].cart.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(users)); // Store the entire users array
      console.log("after dish remove", users);
      return true;
    }
  }
}
function getCart() {
  const users = getUsers();
  const currentUserEmail = getCurrentUserEmail();
  if (users) {
    const userIndex = users.findIndex((user) => {
      return user.email === currentUserEmail;
    });
    if (userIndex !== -1) {
      return users[userIndex].cart;
    } else {
      return false;
    }
  }
}

function clearCart() {
  const allusers = getUsers();
  const currentUserEmail = getCurrentUserEmail();
  const userIndex = allusers.findIndex(
    (user) => user.email === currentUserEmail
  );
  const currentUser = allusers.find((user) => user.email === currentUserEmail);
  currentUser.cart = [];
  allusers[userIndex] = currentUser;
  localStorage.setItem("users", JSON.stringify(allusers));
  return true;
}

function generateOrderId() {
  const randomId = Math.floor(Math.random() * 1000000);
  return `order_${randomId}`;
}
function addOrders(order) {
  const users = getUsers();
  const currentUserEmail = getCurrentUserEmail();

  if (users && currentUserEmail) {
    const user = users.find((user) => user.email === currentUserEmail);

    if (user) {
      user.orders = user.orders || [];
      user.orders.push(order);
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    }
  }
  return false;
}
function createAndStoreOrder(items, deliveryFee) {
  const orderId = generateOrderId();
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const order = {
    id: orderId,
    date: formattedDate,
    items: items,
    deliveryFee: deliveryFee,
  };

  // let existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
  //existingOrders.push(order);
  //localStorage.setItem('orders', JSON.stringify(existingOrders));

  const result = addOrders(order);

  if (result) {
    return true;
  } else {
    return false;
  }
}

function getCurrenUserOrders() {
  const users = getUsers();

  const currentUserEmail = getCurrentUserEmail();
  const orders = users.find((user) => user.email === currentUserEmail).orders;
  if (orders) {
    return orders;
  } else {
    return null;
  }
}
