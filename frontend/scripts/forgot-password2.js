const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", (event) => {
    const password = event.target.value;
    if (!isValidPassword(password)) {
      displayError("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.");
    } else {
      clearError();
    }
  });
document.querySelector('#submit-login').addEventListener('click',(event)=>
{
  let errorMessage="";
  const password = document.getElementById("password").value;
  if (!password) {
    errorMessage = "Password is required";
  }else{
    // search for email
    const result= searchUserByEmail(email);
    if(result)
    {

    }
    else{
        alert("Email not found.");
    }
    console.log('check',result);
  }

  if(errorMessage)
  {
    alert(errorMessage)
  }

});
