/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Rachel White 
      Date: 9/1/2024

      Filename: project02-04.js
 */
//declare constants with initial values
const CHICKEN_PRICE = 10.95,
  HALIBUT_PRICE = 13.95,
  BURGER_PRICE = 9.95,
  SALMON_PRICE = 18.95,
  SALAD_PRICE = 7.95,
  SALES_TAX = 0.07;

//event handler to run  calcTotal() function when food items are clicked
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

//create calcTotal() function
function calcTotal() {
  //declare cost variable with an initial value of 0
  let cost = 0;

  //declare the buying variable equal to the checked property of the element for each id .
  const buyChicken = document.getElementById("chicken").checked;
  const buyHalibut = document.getElementById("halibut").checked;
  const buyBurger = document.getElementById("burger").checked;
  const buySalmon = document.getElementById("salmon").checked;
  const buySalad = document.getElementById("salad").checked;

  //example 2.2 totalCost += buyBook ? BOOK_COST: 0;
  //use comparison operator to increase the value of the cost variable by the value of the ..._PRICE
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  //Set the innerHTML property for the element with the id "foodTotal" to the value returned by the formatCurrency() function using tax as the parameter value
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  //Declare tax variable, setting its value equal to the cost variable MULTIPLIED by SALES_TAX
  const tax = cost * SALES_TAX;

  //set the innerHTML property for the element id "foodTax" to the value returned by the formatCurrency() function using tax as the parameter value
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  //declare totalCost variable , setting its value equal to the cost variable plus the tax variable
  const totalCost = cost + tax;

  //set the innerHTML property for the element id "totalBill" to the value returned by the formatCurrency() function using totalCost as the parameter value
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
