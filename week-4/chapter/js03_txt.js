/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Rachel White
     Date: 9/8/2024

     Filename: js03.js
 */

//Days of the week . Create the weekDays array.
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

//event listener to run the add WeekDays() function when the page is loaded
window.addEventListener("load", addWeekdays);

//addWeekdays() function , function to write weekdays into the calendar
function addWeekdays() {
  let i = 0; //initial counter value

  //reference the collection of heading cells
  let headingCells = document.getElementsByTagName("th");

  //write each of the seven days into a heading cell
  while (i < 7) {
    headingCells[i].innerHTML = weekDays[i];

    //increase the counter by 1
    i++;
  }
}

//event listener to run the showGames() function when pages is loaded
window.addEventListener("load", showGames);

//function to write game information into the calendar
function showGames() {
  for (let i = 0; i < gameDates.length; i++) {
    let gameInfo = "";

    //open the paragraph
    switch (gameResults[i]) {
      case "W":
        gameInfo += "<p class= 'win'>";
        break;
      case "L":
        gameInfo += "<p class= 'lose'>";
        break;
      case "S":
        gameInfo += "<p class= 'suspended'>";
        break;
      case "P":
        gameInfo += "<p class= 'postponed'>";
        break;
    }

    //open the paragraph
    // gameInfo += "<p>";

    //display the game location
    if (gameLocations[i] === "h") {
      gameInfo += "vs. ";
    } else if (gameLocations[i] === "a") {
      gameInfo += "@ ";
    }

    //include the opponent
    gameInfo += gameOpponents[i] + "<br>";

    //include the result and score
    gameInfo +=
      gameResults[i] + " : ( " + runsScored[i] + " - " + runsAllowed[i] + ")";

    //display innings played for suspended, shortened or extrainning games
    if (gameInnings[i] < 5) {
      gameInfo += " [" + gameInnings[i] + "]***";
    } else if (gameInnings[i] < 9) {
      gameInfo += " [" + gameInnings[i] + "]*";
    } else if (gameInnings[i] > 9) {
      gameInfo += " [" + gameInnings[i] + "]";
    }
    //close the paragraph
    gameInfo += "</p>";

    //write the information into a table cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
  }
}
