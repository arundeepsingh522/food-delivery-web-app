const userInput=document.getElementById('username');
const passwordInput=document.getElementById('password');
const emailInput = document.getElementById('email');
const confirmInput = document.getElementById('confirm-password');
const errorMessage=document.getElementById('errormessage');

username.addEventListener('input',(event)=>{
   if(event.target.value.length<6)
   {
    errorMessage.innerText="Username must be at least 6 characters long";
   }else{
    errorMessage.innerText="";
   }
});
passwordInput.addEventListener('input',(event)=>{
    if(!(isValidPassword(event.target.value)))
    {
        errorMessage.innerText="Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.";

    }else{
        errorMessage.innerText="";
    }

});
emailInput.addEventListener('focus',()=>{
errorMessage.innerText="";
});
confirmInput.addEventListener('focus',()=>{
    errorMessage.innerText="";

});
userInput.addEventListener('focus',()=>{
    errorMessage.innerText="";

});
passwordInput.addEventListener('focus',()=>{
    errorMessage.innerText=""
});

//on click submit
document.querySelector('#submit-signup').addEventListener('click',(event)=>{
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password= document.getElementById('password').value;
    const confirmPassword= document.getElementById('confirm-password').value;
    let errorMessage="";
    if(!username)
    {
    errorMessage="Username is required";
    }else if(!email)
    {
        errorMessage="Email is required"
    }else if(!password)
    {
        errorMessage="Password is required"
    }else if(!confirmPassword)
    {
        errorMessage="Confirm password is required"
    }else{
        errorMessage="";
    }
    if(errorMessage)
    {
        alert(errorMessage);
    }else{
        checkValidations(username,email,password,confirmPassword);
    }
    
  
    }
    );

    function checkValidations(username,email,password,confirmPassword)
    {
       
        let errorMessage ="";
        if(username.length<6)
        {
            errorMessage="Username must be at least 6 characters long" 
        }else if(!isValidEmail(email))
        {
            errorMessage="Please enter a valid email."
        }else if(!isValidPassword(password))
        {
            errorMessage="Invalid password. Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.";
        }else if(password!==confirmPassword)
        {
            errorMessage="Password and Confirm Password Must Be Same."
    
        }else{
            errorMessage=""
        };
    
        if(errorMessage)
        {
            alert(errorMessage);
        }else{
            //all conditions are satisfied
            //now go to the home section and also save the user
            //let saveUser= saveUser();
            alert("all satisfied");
        }
    
    }
    function isValidEmail(email) {
        const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        let d = emailRegex.test(email);
        console.log('d',d,'mail',email);
        return emailRegex.test(email);
    }
    
    function isValidPassword(password) {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
      return pattern.test(password);
    }
    