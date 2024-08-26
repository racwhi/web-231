/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Rachel White
      Date: 8/25/2024   

      Filename: project02-02.js
 */

function verifyForm() {
  //declare variables to equal value of input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  //conditional operator that tests the truly or falsy value of and name and email and phone using the && operator. If true alert Thank you otherwise .
  name && email && phone
    ? window.alert("Thank You")
    : window.alert("Please fill in all fields");
}

document.getElementById("submit").addEventListener("click", verifyForm);
