function saveUser(username, email, password) {
  try {
    console.log('inside user save')
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //check if the email already exists

    const existingUser = users.find((user) => user.email == email);
    if (existingUser) {
      throw new Error("Email address already exists");
    }
    //else create a new user
    const user = { username, email, password };

    //add to array of users
    users.push(user);
    
    //save updated data to local storage

    localStorage.setItem('users',JSON.stringify(users));
    console.log('user is pushed to local storage')
    return "";
  } catch (error) {
    //console.log("error in saving user", error);
    return error;
  }
}

// set current user in local storage

function setCurrentUser(user){
  localStorage.setItem('user',JSON.stringify(user));
}
function getCurrentUser()
{
  return JSON.parse(localStorage.getItem('user'));
}