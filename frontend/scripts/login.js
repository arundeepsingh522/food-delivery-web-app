document.querySelector('#submit-login').addEventListener('click',(event)=>
{
  let errorMessage="";
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email) {
    errorMessage = "Email is required";
  } else if (!password) {
    errorMessage = "Password is required";
  }else if (!isValidEmail(email))
  {
    errorMessage="Invalid Email or Password";
  }
  if(errorMessage)
  {
    alert(errorMessage);
  }else{
    //check and match password from database
  }
}
);
function isValidEmail(email) {
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    let d = emailRegex.test(email);
    console.log('d',d,'mail',email);
    return emailRegex.test(email);
}