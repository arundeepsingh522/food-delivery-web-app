// Sign Up
function saveUser(username, email, password) {
  try {
    console.log("inside user save");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //check if the email already exists

    const existingUser = users.find((user) => user.email == email);
    console.log('exs user',existingUser);
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
  if(user)
  {
    return user.email;
  }else{
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


function addToCart(id) {
  const users = getUsers();
  const currentUserEmail = getCurrentUserEmail();

  console.log('current email',currentUserEmail);
  console.log('users',users);

  if (users) {
    const userIndex = users.findIndex((user) => {
      return user.email === currentUserEmail;
    });

    if (userIndex !== -1) {
      const cartArr = users[userIndex].cart || [];
      cartArr.push(id);
      console.log('cartArr', cartArr);
      users[userIndex].cart = cartArr;

      console.log('after users', users);
      localStorage.setItem('users', JSON.stringify(users)); // Store the entire users array

      return true;
    } else {
      return false;
    }
  }
}