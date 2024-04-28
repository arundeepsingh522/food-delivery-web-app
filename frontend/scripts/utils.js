function isValidEmail(email) {
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return pattern.test(password);
  }

  function storeString(key,data)
  {
    return localStorage.setItem(key,data);
  }
  function retrieveString(key)
  {
    return localStorage.getItem(key);
  }

  function showToast(message) {
    var toast = document.getElementById("toastMessage");
    toast.innerText = message; // Set the message text
    toast.style.display = "block";

    return new Promise(resolve => {
      setTimeout(function(){
          toast.style.display = "none";
          resolve(); // Resolve the promise after hiding the toast
      }, 4000); // Hide the toast after 3 seconds
  });// Hide the toast after 3 seconds
}


function navigateToPage(page) {
  // Add a fade-out effect to the body
  
  
  // After a short delay, navigate to the second page
  setTimeout(function() {
    document.body.style.transition = "opacity 0.5s ease";
  document.body.style.opacity = 0;
      window.location.href = page;
  },900 ); // Adjust the timeout to match the transition duration
}

document.addEventListener('DOMContentLoaded', function() {
  // If transitioning from the signup page, make the body visible with a transition
  document.body.style.transition = "opacity 0.5s ease";
  document.body.style.opacity = 1;
});


// Function to show customized SweetAlert
function showCustomizedAlert(errorMessage) {
  Swal.fire({
      title: 'Error!',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#008B8B',
      background: '#FFFFFF',
      width:'300px',
      height:'100px',
       customClass: {
            confirmButton: 'custom-swal-confirm' // Apply custom class to the confirm button
        }
  });
}
