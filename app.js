function checkEmail() {
    const emailInput = document.getElementById("email-input");
    const emailMessage = document.getElementById("email-message");
    
    // check if the email input is empty
    if (emailInput.value === "") {
      emailMessage.innerHTML = "Please enter your email";
      emailMessage.style.color = "red";
    } else {
      emailMessage.innerHTML = "Please check your email";
      emailMessage.style.color = "green";
    }
  }