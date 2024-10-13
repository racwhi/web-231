"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Rachel White
      Date: 10/13/2024

      Filename: project07-01.js
*/
// Declare signup variable
let signupForm = document.getElementById("signup");

// event listener for the submission of the signup form
signupForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // Create  regular expressions
  let regex1 = /[A-Z]/; // At least one uppercase letter
  let regex2 = /\d/; // At least one digit
  let regex3 = /[!#$%]/; // At least one special character from given set

  // Validate password
  if (pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters.";
  } else if (!regex1.test(pwd)) {
    feedback.textContent =
      "Your password must include at least one uppercase letter.";
  } else if (!regex2.test(pwd)) {
    feedback.textContent = "Your password must include at least one number.";
  } else if (!regex3.test(pwd)) {
    feedback.textContent =
      "Your password must include one of the following: !$#%.";
  } else {
    // Submit the form if  password is valid
    signupForm.submit();
  }
});
