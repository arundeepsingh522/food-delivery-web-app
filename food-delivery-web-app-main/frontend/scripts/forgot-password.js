document.querySelector("#submit-login").addEventListener("click", (event) => {
  let errorMessage = "";
  const email = document.getElementById("email").value;
  if (!email) {
    errorMessage = "Email is required";
  } else if (!isValidEmail(email)) {
    errorMessage = "Please enter a valid email";
  } else {
    // search for email
    const result = searchUserByEmail(email);
    if (result) {
      storeString("email", email);
      showToast("Email Found!");
      navigateToPage("forgot-password2.html");
      //window.location.href='forgot-password2.html';
    } else {
      showCustomizedAlert("Email not found.");
    }
    console.log("check", result);
  }
  if (errorMessage) {
    showCustomizedAlert(errorMessage);
  }
});
