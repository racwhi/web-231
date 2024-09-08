/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Rachel White
      Date: 9/8/2024

      Filename: project03-01.js
*/

//declare variable named menuItems,containing the collection of HTML elements belonging to the menuItem class using getElementsByClassName
var menuItems = document.getElementsByClassName("menuItem");

/*for loop  items checked
for (var i = 0; i < menuItems.length; i++){
  if (menuItems[i].checked){
    orderTotal += Number(menuItems[i].value)
  }
}*/

//calcTotal function to calculate total
function calcTotal() {
  //declare orderTotal variable , setting initial value to 0
  var orderTotal = 0;

  /*example menuItem <input type="checkbox" class="menuItem" id="item1" value="11.95" /> 
for loop through menuItems collection and add item to orderTotal when checked
  */
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      //values are strings in html, so have to convert to using Number function
      orderTotal += Number(menuItems[i].value);
    }
  }
  //command to change the innerHTML property of the billTotal to the value returned by formatCurrency function using orderTotal as the parameter value
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}
// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

// for loop to add click event listener to each menu item
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

/* Code without comments throughout code 

function calcTotal() {
  var orderTotal = 0;

  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);

*/
