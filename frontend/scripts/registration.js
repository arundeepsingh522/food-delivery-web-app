const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const confirmInput = document.getElementById("confirm-password");
const errorMessage = document.getElementById("errormessage");
let users = [];

usernameInput.addEventListener("input", (event) => {
  const username = event.target.value;
  if (username.length < 6) {
    displayError("Username must be at least 6 characters long");
  } else {
    clearError();
  }
});
passwordInput.addEventListener("input", (event) => {
  const password = event.target.value;
  if (!isValidPassword(password)) {
    displayError("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.");
  } else {
    clearError();
  }
});

// Add similar event listeners for emailInput and confirmInput

document.querySelector("#submit-signup").addEventListener("click", () => {
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;

  let errorMessage = validateInputs(username, email, password, confirmPassword);
  if (errorMessage) {
    alert(errorMessage);
  } else {
    const result= saveUser(username, email, password);
    if(result){
      alert(result);
    }else{


      window.location.href='login.html'
    }
    
  }
});
function validateInputs(username, email, password, confirmPassword) {
  let errorMessage = "";
  if (!username) {
    errorMessage = "Username is required";
  } else if (!email) {
    errorMessage = "Email is required";
  } else if (!isValidEmail(email)) {
    errorMessage = "Please enter a valid email";
  } else if (!password) {
    errorMessage = "Password is required";
  } else if (!isValidPassword(password)) {
    errorMessage = "Invalid password. Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.";
  } else if (!confirmPassword) {
    errorMessage = "Confirm password is required";
  } else if (password !== confirmPassword) {
    errorMessage = "Password and Confirm Password must match";
  }
  return errorMessage;
}



function displayError(message) {
  errorMessage.innerText = message;
}

function clearError() {
  errorMessage.innerText = "";
}
