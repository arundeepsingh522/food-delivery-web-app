const errorMessage = document.getElementById("errormessage");
const email = retrieveString("email");
console.log("email", email);
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", (event) => {
  const password = event.target.value;
  console.log("password", password);
  if (!isValidPassword(password)) {
    displayError(
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long."
    );
  } else {
    clearError();
  }
});
document.querySelector("#submit-login").addEventListener("click", (event) => {
  let errorMessage = "";
  const password = document.getElementById("password").value;
  if (!password) {
    errorMessage = "Password is required";
  } else if (!isValidPassword(password)) {
    errorMessage =
      "Invalid password. Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.";
  } else {
    const result = updatePassword(email, password);
    if (true) {
      showToast("Password changed successfully.");
      navigateToPage("login.html");
    }
  }
  if (errorMessage) {
    showCustomizedAlert(errorMessage);
  }
});
function displayError(message) {
  errorMessage.innerText = message;
}
function clearError() {
  errorMessage.innerText = "";
}
