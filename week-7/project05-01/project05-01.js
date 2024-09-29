"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Rachel White
      Date: 9/29/2024 

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
const questionList = document.querySelectorAll("div#quiz input");

//event handler - Start Quiz button...
document.getElementById("startquiz").onclick = function () {
  document.getElementById("overlay").className = "showquiz";

  timeID = setInterval(countdown, 1000);
};

/*------------- Countdown function to update timer ----------------*/
function countdown() {
  if (timeLeft === 0) {
    clearInterval(timeID); // Clear interval
    let totalCorrect = checkAnswers(); // Check answers

    // alert message on how many answers are correct
    if (totalCorrect === correctAnswers.length) {
      alert("Way to go, you got all answers correct! ");
    } else {
      alert(
        `You got ${
          correctAnswers.length - totalCorrect
        } incorrect answers out of ${correctAnswers.length}.`
      );
    }

    // Reset quiz state
    timeLeft = quizTime;
    document.getElementById("quizclock").value = timeLeft;
    document.getElementById("overlay").className = "hidequiz";
  } else {
    timeLeft--;
    document.getElementById("quizclock").value = timeLeft;
  }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }
  return correctCount;
}
