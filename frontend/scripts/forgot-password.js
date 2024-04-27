document.querySelector('#submit-login').addEventListener('click',(event)=>
{
  let errorMessage="";
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email) {
    errorMessage = "Email is required";
  } else if (!isValidEmail(email)){
    errorMessage="Please enter a valid email";
  }else{
    // search for email


    const result= searchUserByEmail(email);
    if(result)
    {
        const emailDiv=document.getQuerySelector('#email-div');
        const passwordDiv=document.querySelector('password-div');
    

    }else{
        alert("Email not found.");
    }
    console.log('check',result);
  }

  if(errorMessage)
  {
    alert(errorMessage)
  }

});
