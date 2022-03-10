firstName = document.querySelector("#firstName");
firstNameValidation = document.querySelector(".firstNameValidation");
lastName = document.querySelector("#lastName");
lastNameValidation = document.querySelector(".lastNameValidation");
email = document.querySelector("#email");
emailValidation = document.querySelector(".emailValidation");
phoneNumber = document.querySelector("#phoneNumber");
phoneNumberValidation = document.querySelector(".phoneNumberValidation");
message = document.querySelector("#message");
messageValidation = document.querySelector(".messageValidation");

function validate() {
  firstName.style.border = "1px solid black";
  lastName.style.border = "1px solid black";
  email.style.border = "1px solid black";
  phoneNumber.style.border = "1px solid black";
  message.style.border = "1px solid black";
  firstNameValidation.innerHTML = "";
  lastNameValidation.innerHTML = "";
  emailValidation.innerHTML = "";
  phoneNumberValidation.innerHTML = "";
  messageValidation.innerHTML = "";
  if (firstName.value == "") {
    firstName.style.border = "2px solid crimson";
    firstNameValidation.innerHTML = "Field cannot be empty!";
  }
  if (lastName.value == "") {
    lastName.style.border = "2px solid crimson";
    lastNameValidation.innerHTML = "Field cannot be empty!";
  }
  if (email.value == "") {
    email.style.border = "2px solid crimson";
    emailValidation.innerHTML = "Field cannot be empty!";
  }
  if (phoneNumber.value == "") {
    phoneNumber.style.border = "2px solid crimson";
    phoneNumberValidation.innerHTML = "Field cannot be empty!";
  }
  if (message.value == "") {
    message.style.border = "2px solid crimson";
    messageValidation.innerHTML = "Field cannot be empty!";
  }
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    phoneNumber.value == "" ||
    message.value == ""
  ) {
    return false;
  }
}
