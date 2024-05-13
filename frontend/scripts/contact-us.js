var helpOptionsSelect;
var fullNameInput; // Selects the first input with class "inputc"
var emailAddressInput; // Selects the second input with class "inputc"
var mobileNumberInput; // Selects the third input with class "inputc"
var textArea;
var submitButton = document.getElementById("bt-s");

submitButton.addEventListener("click", (e) => {
  helpOptionsSelect = document.getElementById("helpOptions");
  fullNameInput = document.querySelector(".inputc:nth-of-type(1)"); // Selects the first input with class "inputc"
  emailAddressInput = document.querySelector(".inputc:nth-of-type(2)"); // Selects the second input with class "inputc"
  mobileNumberInput = document.querySelector(".inputc:nth-of-type(3)"); // Selects the third input with class "inputc"
  textArea = document.getElementById("txt-area");

  const errorMessage = checkValidations();
  if (errorMessage) {
    showCustomizedAlert(errorMessage);
  }else{
    const feedback={
        "helpOption":helpOptionsSelect.value,
        "fullName":fullNameInput.value,
        "emailAddress":emailAddressInput.value,
        "mobileNumber":mobileNumberInput.value,
        "message":textArea.value,
        "date":new Date()

    };
    const result = storeFeedBack(feedback);
    if(result)
        {
            showToast("Feedback is Submitted");
            if(getCurrentUserEmail)
                {
                    navigateToPage('contact-us2.html')
                }else{
                    navigateToPage('contack-us.html')
                }
           
        }
  
  }

  console.log("s", fullNameInput.value.length);
});

function checkValidations() {
  var errorMessage = "";
  if (helpOptionsSelect.value == "") {
    errorMessage = "Please select a help option";
  } else if (fullNameInput.value == "") {
    errorMessage = "Please enter your full name";
  } else if (fullNameInput.value.length < 4) {
    errorMessage = "Full name should be at least 4 characters long.";
  } else if (emailAddressInput.value == "") {
    errorMessage = "Please enter your email address";
  } else if (!isValidEmail(emailAddressInput.value)) {
    errorMessage = "Please enter an valid email";
  } else if (mobileNumberInput.value.length != 0) {
    if (!isValidMobileNumber(mobileNumberInput.value)) {
      errorMessage = "Please enter an valid mobile number";
    }
  } else if (textArea.value == "") {
    errorMessage = "Please enter your message";
  }else if(textArea.value.length>1000)
    {
        errorMessage = "Message should be less than 1000 characters";
    }
  else {
    errorMessage = "";
  }
  return errorMessage;
}
