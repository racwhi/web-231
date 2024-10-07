"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Rachel White
      Date: 10/6/2024  

      Filename: project06-03.js
*/
//declare useShip variable
let useShip = document.getElementById("useShip");

//add event listener for useShip
useShip.addEventListener("click", copyShippingToBilling);

//function to copy shipping to billing
function copyShippingToBilling() {
  if (useShip.checked) {
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;
    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;
    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

//declare formElements
let formElements = document.querySelectorAll("input[type='text']");

//declare fieldCount
let fieldCount = formElements.length;

//declare errorBox
let errorBox = document.getElementById("errorBox");

/*for loop that iterated through each element in the formElements node list and for 
each element apply an event listener that calls the showValidationError() 
function in response to the invalid event */
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

//create showvalidation Error function
function showValidationError(evt) {
  evt.preventDefault(); //apply preventDefault() method to prevent browser from applying native browser tools to respond to invalid data
  errorBox.textContent = "Complete all highlighted fields"; //error message
}
