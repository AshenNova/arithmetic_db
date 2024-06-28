let setTime = 3;

// window.addEventListener("load", function () {
//   $(".loader").addClass("hidden");
// });

window.onload = function () {
  // setTimeout(function () {
  document.querySelector(".loader").classList.add("hidden");
  // }, 2000);
};
// const screenHeight = window.screen.availHeight;
// const screenWidth = window.screen.availWidth;
const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
console.log("Height: " + screenHeight + ", Width: " + screenWidth);
let now = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
console.log(now);

// import { updateProblems } from "./updateProblems.js";

// import { resetStuff } from "./reset.js";
import { cutOffCheck } from "./cut_off.js";
import { displayContent } from "./content.js";
import { instructionsContent } from "./instruction-content.js";
import { helpList, helpMeFunc } from "./helpMe.js";
import { updateProblems } from "./display.js";
import { genProblems } from "./genProblems.js";
import { handleSubmit } from "./answer.js";

let user = document.querySelector("#userName").textContent;
user = user.trim();
if (user.split(" ").length > 1) {
  console.log("Splitting user");
  user = user.split(" ");
  console.log({ user });
  user =
    user[0].charAt(0).toUpperCase() +
    user[0].slice(1, user[0].length).toLowerCase() +
    " " +
    user[1].charAt(0).toUpperCase() +
    user[1].slice(1, user[1].length).toLowerCase();
} else {
  user =
    user.charAt(0).toUpperCase() + user.slice(1, user.length).toLowerCase();
}

console.log(user);
let buttonLevel = 0;
let mulLevel = 0;
let scoreNeeded = 0;
let time = 0;
let setting = "";
let range = 0;
let difficulty = 0;
let digit = 0;
let choice = 0;
let manipulation = 0;
let attempt = 1;
let startTime = undefined;
let mode = "Normal";
const displayProblem = document.querySelector(".display-problems");
const helpMe = document.querySelector(".help-me-text");

const ourForm = document.querySelector(".our-form");
const ourForm2 = document.querySelector(".our-form2");
const userInput = document.getElementById("user-input");
// const userInputOptions = document.getElementById("user-input-options");
const userInput2 = document.getElementById("user-input2");
const currentScore = document.getElementById("current-score");
const currentMistake = document.getElementById("current-mistake");
const buttonStart = document.querySelector(".start-button");
const starto = document.querySelector(".starto");
const startBox = document.querySelector(".start-box");
const countDownTimer = document.querySelector(".countDownTimer");
const timerD = document.getElementById("timerD");
const questionTimerD = document.getElementById("questionTimer");
const finalBox = document.querySelector(".finalBox");
const finalText = document.getElementById("finalText");
const scoreNeededCl = document.querySelector(".score-needed");
const multiplesSettingCl = document.querySelector(".multiples-setting");
const mainContainer = document.querySelector(".main-container");
const secondUnitMeasurement = document.querySelector(".secondUnitMeasurement");
const inputBox = document.querySelector(".input.box");
const resetButton = document.getElementById("reset");
const backButton = document.querySelectorAll(".back-button");

//INSTRUCTIONS
const instructions = document.querySelector(".instructions");
const instructionPencilIcon = document.querySelector(".fa-pencil");
const instructionBox = document.querySelector(".instructions-box");

//MODES
const hardcoreMode = document.querySelector(".hardcore-mode");
const easyMode = document.querySelector(".easy-mode");
const reviewAnswer = document.querySelector(".fa-hire-a-helper");
const inputBoxCl = document.querySelector(".input-box");
const optionsBox = document.querySelector(".optionsBox");
const calculator = document.createElement("div");

const promptBox = document.querySelector("#prompt-box");
const promptBoxInput = document.querySelector("#prompt-box-input");
const calculatorSymbol = document.querySelector(".fa-calculator");
const imageG = document.createElement("img");
const imageS = document.createElement("img");
const imageB = document.createElement("img");
const imageNMP = document.createElement("img");
const imageFailed = document.createElement("img");
const imageCompleted = document.createElement("img");
imageG.src = "images/endgame/gold.jpeg";
imageS.src = "/images/endgame/silver.jpeg";
imageB.src = "/images/endgame/bronze.jpeg";
imageNMP.src = "/images/endgame/needmorepractice.jpeg";
imageFailed.src = "/images/endgame/failed.jpeg";
imageCompleted.src = "/images/endgame/complete.jpeg";

const attemptListen = document.querySelector(".attemptCreation");
const attemptUser = document.querySelector(".attempt-user");
const attemptMode = document.querySelector(".attempt-mode");
const attemptLevel = document.querySelector(".attempt-level");
const attemptTime = document.querySelector(".attempt-time");
const attemptMistake = document.querySelector(".attempt-mistake");
const attemptScore = document.querySelector(".attempt-score");
const attemptSetting = document.querySelector(".attempt-setting");
const attemptExtra = document.querySelector(".attempt-extra");
const attemptDate = document.querySelector(".attempt-date");
const attemptSubmitBtn = document.querySelector(".btn-attemptSubmit");
// const attemptIp = document.querySelector(".attempt-ip");

//SUMMARY STUFF
const summaryTextCl = document.querySelector(".summary-text");
const summaryBtn = document.querySelector(".btn-summary");
const summaryContainer = document.querySelector(".summary-container");
const closeBtn = document.querySelector(".btn-close");
const summaryScore = document.querySelector(".summary-label-score");
const summaryMistakes = document.querySelector(".summary-mistakes-count");
const summaryTime = document.querySelector(".summary-time-clock");
const summaryStatus = document.querySelector(".summary-status");
const timeDoneCl = document.querySelector(".timeDone");
const summaryAttemptCl = document.querySelector(".attempt-number");
const summarySettingCl = document.querySelector(".summary-setting");
const summaryItemLeft = document.querySelector(".summary-item-left");
const summaryItemRight = document.querySelector(".summary-item-right");
let summarySettingDisplay = undefined;
let accepted;
//EXTRA PRACTICE
const extraPracticeBtn = document.querySelector(".extra-practice");

//
const levelSetting = document.querySelector(".level-setting");
const levelLabel = document.querySelector(".level-label");
const mainBox = document.querySelector(".main-box");

const mistakesCountCl = document.querySelector(".mistakesCount");
const settingButton = document.querySelectorAll(".settingButton");
const heuristics = document.querySelectorAll(".heuristics");
const calBtn = document.querySelectorAll(".calButton");
const toMultiplesBtn = document.querySelector(".toMultiples");

const highScoreName = document.querySelector(".highScoreName");
const highScoreTime = document.querySelector(".highScoreTime");
const highScoreMistakes = document.querySelector(".highScoreMistakes");
const highscore = document.querySelector("#highscore");
const modeStarter = document.querySelector("#mode");
const parent = document.querySelector("#modeSet");

const platinumStarter = document.querySelector("#platinumStart");
const goldStarter = document.querySelector("#goldStart");
const silverStarter = document.querySelector("#silverStart");
const bronzeStarter = document.querySelector("#bronzeStart");
const previousAttempt = document.querySelector("#previousAttempt");
const fractionChoice = document.querySelector(".fraction-choice");
const wholeNumberContainer = document.querySelector(".whole-numbers-container");
const fractionsContainer = document.querySelector(".fractions-container");
const workingContainer = document.querySelector(".working");
const numeratorOne = document.querySelector(".numeratorOne");
const numeratorTwo = document.querySelector(".numeratorTwo");
const denominatorOne = document.querySelector(".denominatorOne");
const denominatorTwo = document.querySelector(".denominatorTwo");
const fractionsOperator = document.querySelector(".fractions-operator");
const fractionsWholeNum = document.querySelector(
  ".simple-fraction-whole-number"
);
const fractionsLine = document.querySelector(".lineFrac");

const displayTwoFractions = document.querySelector(".display-problems-two");
const fractionsUnitOfMeasurement = document.querySelector(".unitOfMeasurement");
const fractionsContainerTwo = document.querySelector(
  ".fractions-container-two"
);
const twoWholeNumber = document.querySelector(".two-whole-number");
const twoNumerator = document.querySelector(".two-numerator");
const twoDenominator = document.querySelector(".two-denominator");
const threeWholeNumber = document.querySelector(".three-whole-number");
const threeNumerator = document.querySelector(".three-numerator");
const threeDenominator = document.querySelector(".three-denominator");
const equalSymbol = document.querySelector(".equal-symbol");
const equalSymbolTwo = document.querySelector(".equal-symbol-two");

// // WORKING AND CALCULATION DISPLAY
const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
const workingAnswer = document.querySelector(".workingAnswer");
const operator = document.querySelector(".operator");

const firstCanvas = document.querySelector(".first-canvas");
const canvasTextId = document.getElementById("canvasText");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// const mouse = {
//   x: undefined,
//   y: undefined,
// };

// function findFactors(number) {
//   let factors = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i == 0) factors.push(i);
//   }
//   return factors;
// }
// function displaySimpleFraction(numerator, denominator) {
//   return `
//   <div class="frac">
//   <span>${numerator}</span>
//   <span class="symbol">/</span>
//   <span class="bottom">${denominator}</span>
//   </div>
//   `;
// }
// function angles(x1, y1, x2, y2) {
//   let dy = y2 - y1;
//   let dx = x2 - x1;
//   let theta = Math.atan2(dy, dx);
//   theta *= 180 / Math.PI;
//   return theta;
// }

// canvas.addEventListener("click", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

let noAnswer = 0;
let reviewCount = 0;
let level = 0;
let player = 1;
let extraPractice = 0;
let levelArr = [];
let arr = [];
let arr2 = [];
let arr3 = [];
let heuArr = [];
let calArr = [];
let calArrQns = [];

let questionTimeForSummary = undefined;
let summary = [];
let extraPracticeArr = [];
let regen = 0;
let skipArr = [];
let questionsCorrectArr = [];
let boyNames = [
  "Liam",
  "Noah",
  "Oliver",
  "James",
  "Elijah",
  "William",
  "Henry",
  "Lucas",
  "Benjamin",
  "Theodore",
];
let girlNames = [
  "Olivia",
  "Emma",
  "Charlotte",
  "Amelia",
  "Sophia",
  "Isabella",
  "Ava",
  "Mia",
  "Evelyn",
  "Luna",
];

let primeNumbers = [
  2, 3, 5, 7, 9, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
];
const compassArr = [
  "north",
  "north-east",
  "east",
  "south-east",
  "south",
  "south-west",
  "west",
  "north-west",
];
let multiplesArr = [0];
let gold = 0;
let silver = 0;
let bronze = 0;
let hardcore = 0;
let easy = 0;
let global = 0;
let skipGlobalUpdateProblem = 0;
const commonMultipleArr = [];
const commonMultipleArrTwo = [];
let cutoff = 600;
let accumulatedScore = 0;

function HighScore(name, date, time, mistake) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.mistake = mistake;
}

const highScore1DotZero = new HighScore(
  "Jayden Cheong",
  "16 October 2021",
  140,
  1
);
const levelBtn1Zero = document.querySelector(".btn-level-one");
let levelBtn1ZeroCount = 0;

const highScore1DotZero1 = new HighScore(
  "Jayden Cheong",
  "16 October 2021",
  823,
  12
);
const highScore1DotZero2 = new HighScore("Zyon Lim", "26 October 2022", 313, 0);
const highScore1DotZero3 = new HighScore("Aixl Lim", "26 March 2022", 124, 0);
const highScore1DotZero4 = new HighScore("Shanice Lee", "19 April 2022", 80, 0);
const highScore1DotZero5 = new HighScore("Reila", "28 mar 2022", 141, 0);
const highScore1DotZero6 = new HighScore(
  "Amanda Poon",
  "16 April 2022",
  206,
  0
);
const highScore1DotZero7 = new HighScore(
  "Shanice Lee",
  "13 April 2022",
  117,
  1
);
const highScore2DotZero = new HighScore("Nil", "16 October 2021", 0, 0);
const highScore2DotZero1 = new HighScore(
  "Jayden Cheong",
  "9 April 2022",
  278,
  0
);
const highScore2DotZero2 = new HighScore("Reila", "28 March 2022", 152, 1);
const highScore2DotZero3 = new HighScore(
  "Jayden Cheong",
  "19 March 2022",
  623,
  1
);
const highScore2DotZero4 = new HighScore("Shanice Lee", "19 April 2022", 48, 0);
const highScore2DotZero5 = new HighScore("Adam Poon", "26 March 2022", 343, 2);
const highScore2DotZero6 = new HighScore("Nil", "Nil", 0, 0);
const highScore2DotZero7 = new HighScore("Reila", "28 mar 2022", 107, 0);
const highScore2DotZero8 = new HighScore("Nil", "Nil", 0, 0);
const highScore2DotZero9 = new HighScore("Nil", "Nil", 0, 0);

const highScore3DotZero = new HighScore(
  "Shanice Lee",
  "30 October 2021",
  614,
  7
);
const highScore3DotZero1 = new HighScore(
  "Shanice Lee",
  "30 October 2021",
  162,
  5
);
const highScore3DotZero2 = new HighScore("Javen Chen", "12 March 2022", 230, 2);
const highScore3DotZero3 = new HighScore(
  "Shanice Lee",
  "6 November 2021",
  662,
  4
);
const highScore3DotZero4 = new HighScore(
  "Amanda Poon",
  "12 March 2022",
  229,
  0
);
const highScore3DotZero5 = new HighScore("Maegan Lim", "10 April 2022", 229, 0);
const highScore3DotZero6 = new HighScore("Yuki Chin", "20 mar 2022", 299, 3);
const highScore3DotZero7 = new HighScore(
  "Sheyanne Cheong",
  "12 March 2022",
  80,
  0
);
const highScore3DotZero8 = new HighScore("Nil", "Nil", 0, 0);
const highScore3DotZero9 = new HighScore("Nil", "Nil", 0, 0);
const highScore3DotZero10 = new HighScore(
  "Maegan Lim",
  "10 April 2022",
  223,
  0
);
const highScore3DotZero11 = new HighScore(
  "Shanice Lee",
  "22 March 2022",
  478,
  2
);
const highScore3DotZero12 = new HighScore("Jayden Goo", "16 march 2022", 72, 0);
const highScore3DotZero13 = new HighScore(
  "Jadee Wong",
  "14 March 2022",
  310,
  1
);
const highScore3DotZero14 = new HighScore(
  "Sheyanne Cheong",
  "19 March 2022",
  240,
  0
);
const highScore3DotZero15 = new HighScore("Emma Leo", "18 April 2022", 281, 1);
const highScore3DotZero16 = new HighScore(
  "Jayden Goo",
  "20 April 2022",
  141,
  0
);
const highScore3DotZero17 = new HighScore("Nil", "Nil", 0, 0);
const highScore3DotZero18 = new HighScore("Yuki Chin", "27 March 2022", 165, 2);
const highScore3DotZero19 = new HighScore(
  "Javen Chen",
  "17 April 2022",
  111,
  0
);

const highScore4DotZero = new HighScore("Javen Chen", "27 March 2022", 140, 0);
const highScore4DotZero1 = new HighScore("Adam Poon", "12 March 2022", 229, 0);
const highScore4DotZero3 = new HighScore("Javen Chen", "12 March 2022", 264, 2);
const highScore4DotZero4 = new HighScore("Jadee Wong", "11 March 2022", 758, 8);
const highScore4DotZero5 = new HighScore("Nadya", "27 March 2022", 225, 1);
const highScore4DotZero6 = new HighScore("Nil", "Nil", 0, 0);
const highScore4DotZero7 = new HighScore("Nil", "Nil", 0, 0);
const highScore4DotZero8 = new HighScore("Izekiel", "14 April 2022", 108, 0);
const highScore4DotZero9 = new HighScore("Nil", "Nil", 0, 0);
const highScore4DotZero10 = new HighScore("Nil", "Nil", 0, 0);
const highScore4DotZero11 = new HighScore("Nadya", "13 March 2022", 215, 0);
const highScore4DotZero12 = new HighScore("Nadya", "13 March 2022", 134, 0);
const highScore4DotZero13 = new HighScore(
  "Javen Chen",
  "12 March 2022",
  297,
  3
);
const highScore4DotZero14 = new HighScore(
  "Sheyanne Cheong",
  "12 March 2022",
  49,
  0
);
const highScore4DotZero15 = new HighScore("Jayden Goo", "16 mar 2022", 91, 2);
const highScore4DotZero16 = new HighScore("Emma Leo", "30 March 2022", 393, 2);
const highScore4DotZero17 = new HighScore(
  "Jayden Goo",
  "20 April 2022",
  213,
  4
);
const highScore4DotZero18 = new HighScore(
  "Jayden Goo",
  "20 April 2022",
  185,
  0
);
const highScore4DotZero19 = new HighScore("Nil", "Nil", 0, 0);
const highScore4Dot2Zero = new HighScore("Emma Leo", "14 April 202", 160, 0);
const highScore4Dot21 = new HighScore("Nil", "Nil", 0, 0);
const highScore4DotZero22 = new HighScore("Nil", "Nil", 0, 0);
const highScore4DotZero23 = new HighScore("Nil", "Nil", 0, 0);
const highScore4DotZero24 = new HighScore("Nil", "Nil", 0, 0);

// const highScore5DotZero = new HighScore(
//   "Sheyanne Cheong",
//   "9 April 2022",
//   176,
//   0
// );
const highScore5DotZero1 = new HighScore("Emma Leo", "28 Feb 2022", 273, 0);
const highScore5DotZero2 = new HighScore("Emma Leo", "21 March 2022", 167, 0);
const highScore5DotZero3 = new HighScore("Emma Leo", "20 April 2022", 354, 8);
const highScore5DotZero4 = new HighScore("Jayden Goo", "23 Mar 2022", 88, 0);
const highScore5DotZero5 = new HighScore("Nil", "Nil", 0, 0);
const highScore5DotZero6 = new HighScore("Emma Leo", "20 April 2022", 96, 0);
const highScore5DotZero7 = new HighScore(
  "Sheyanne Cheong",
  "9 April 2022",
  144,
  0
);
const highScore5DotZero8 = new HighScore("Jayden Goo", "20 April 2022", 49, 2);
const highScore5DotZero9 = new HighScore("Jayden Goo", "14 April 2022", 69, 0);
const highScore5DotZero10 = new HighScore("Jayden Goo", "14 April 2022", 99, 1);
const highScore5DotZero11 = new HighScore("Emma Leo", "20 April 2022", 143, 1);
const highScore5DotZero12 = new HighScore(
  "Jayden Goo",
  "20 April 2022",
  109,
  1
);
const highScore5DotZero13 = new HighScore(
  "Jayden Goo",
  "13 April 2022",
  108,
  3
);
const highScore5DotZero14 = new HighScore("Jayden Goo", "20 April 2022", 35, 1);
const highScore6DotZero = new HighScore("Jayden Goo", "20 April 2022", 79, 1);
const highScore6DotZero1 = new HighScore("Emma Leo", "18 April 2022", 240, 0);
const highScore6DotZero2 = new HighScore("Nil", "", 0, 0);
const highScore6DotZero3 = new HighScore("Nil", "", 0, 0);
const highScore6DotZero5 = new HighScore("Nil", "", 0, 0);
const highScore6DotZero6 = new HighScore("Nil", "", 0, 0);
const highScore6DotZero7 = new HighScore("Nil", "", 0, 0);

const heuOne = new HighScore("Nil", "", 0, 0);
const heuTwo = new HighScore("Nil", "", 0, 0);
const heuThree = new HighScore("Nil", "", 0, 0);
const heuFour = new HighScore("Nil", "", 0, 0);

// Storing of question
let state = {
  score: 0,
  mistake: 0,
  scoreNeeded: 0,
  correctAnswer: 0,
  global: 0,
};

// function normalDisplay() {
//   wholeNumberContainer.classList.remove("hidden");
//   firstCanvas.classList.add("hidden");
//   fractionsContainer.classList.add("hidden");
//   workingContainer.classList.add("hidden");
//   fractionsContainerTwo.classList.add("hidden");
//   displayProblem.style.fontSize = "18px";
//   displayProblem.style.textAlign = "left";
// }
// function drawingDisplay() {
//   canvasTextId.textContent = "";
//   ctx.setTransform(1, 0, 0, 1, 0, 0);
//   ctx.clearRect(0, 0, 1000, 1000);
//   firstCanvas.classList.remove("hidden");
//   canvasTextId.classList.remove("hidden");
//   wholeNumberContainer.classList.add("hidden");
//   fractionsContainer.classList.add("hidden");
//   fractionsContainerTwo.classList.add("hidden");
//   workingContainer.classList.add("hidden");
// }
// function simpleFractionDisplay() {
//   fractionsContainer.classList.remove("hidden");
//   wholeNumberContainer.classList.add("hidden");
//   firstCanvas.classList.add("hidden");
//   workingContainer.classList.add("hidden");
//   fractionsContainerTwo.classList.add("hidden");
// }
// function mixedFractionDisplay() {
//   fractionsContainer.classList.add("hidden");
//   wholeNumberContainer.classList.add("hidden");
//   firstCanvas.classList.add("hidden");
//   workingContainer.classList.add("hidden");
//   fractionsContainerTwo.classList.remove("hidden");
// }
// function workingDisplay() {
//   fractionsContainer.classList.add("hidden");
//   fractionsContainerTwo.classList.add("hidden");
//   wholeNumberContainer.classList.add("hidden");
//   firstCanvas.classList.add("hidden");
//   workingContainer.classList.remove("hidden");
// }
function withinStart() {
  startBox.classList.add("hidden");
  multiplesSettingCl.classList.add("hidden");
  countDownTimer.classList.remove("hidden");
  if (levelArr.length != 0) {
    buttonLevelSetting();
    levelLabel.innerHTML = `You are attempting Level ${level}`;
    console.log(buttonLevel);
  }

  // Timer1 countdown
  let countDTimer = setTime;
  const countDownOne = setInterval(function () {
    timerD.innerHTML = countDTimer;
    countDTimer--;

    if (countDTimer < 0) {
      clearInterval(countDownOne);
      timerD.innerHTML = countDTimer;
      starto.classList.add("hidden");
      countDownTimer.classList.add("hidden");
      if (document.querySelector(".input-box").classList.contains("hidden")) {
        userInput2.focus();
      } else {
        userInput.focus();
      }
      timer2();
      questionTimer();

      optionsBox.classList.add("hidden");
      updateProblems(level, state, setting, regen, skipArr, heuArr); // display.js
    }
  }, 1000);
}
function clickStart() {
  startTime = new Date();
  summarySettingDisplay = `${level} ${setting}`;
  summarySettingCl.textContent = summarySettingDisplay;
  buttonLevel = this.innerHTML;
  console.log("start button clicked");
  withinStart();

  // SKIP BUTTON APPEARANCE
  console.log(isNaN(level * 1));
  if (isNaN(level * 1)) {
    document.querySelector(".skipBtnCl").classList.remove("hidden");
  } else {
    document.querySelector(".skipBtnCl").classList.add("hidden");
  }
}

let questionTime = undefined;
let questionSecs = 0;
export function questionTimer() {
  questionSecs = 0;
  questionTimerD.innerHTML = questionSecs;
  // clearInterval(countDownOne);
  questionTime = setInterval(function () {
    questionSecs++;
    questionTimerD.innerHTML = questionSecs;
    questionTimeForSummary = questionSecs;
  }, 1000);
  return questionSecs;
}

// Timer2
function timer2() {
  time = 0;
  let newStartTime = new Date();
  console.log("Start " + newStartTime);
  const countDownTwo = setInterval(function () {
    time++;
    document.getElementById("timer").innerHTML = time;
    console.log(state.score);
    skipArr.sort(function (a, b) {
      return a - b;
    });

    if (easy == 1) {
      cutoff = 99999;
    } else {
      cutoff = 600;
    }

    // 1. SCORE REACHED OR TIME CUT
    if (state.score >= scoreNeeded || time == cutoff) {
      extraPractice = 1;
      document.querySelector(".loader").classList.remove("hidden");
      // document.querySelector(".overlay");
      // .setAttribute("backdrop-filter", "none");
      if (time == cutoff) {
        summaryStatus.innerHTML = `<h3 class="summary-status" style="color:red">Failed... ${summarySettingDisplay}</h3>`;
      }
      clearInterval(questionTime);
      clearInterval(countDownTwo);
      document.getElementById("timer").innerHTML = time;
      starto.classList.remove("hidden");

      document.getElementById("current-table-user").innerHTML = user;
      document.getElementById("current-table-time").innerHTML = time;
      document.getElementById("current-table-mistake").innerHTML =
        state.mistake;
      document.getElementById("current-table-score").innerHTML = state.score;

      if (time == cutoff) {
        // finalText.innerHTML = `You scored ${state.score}`;
        // if (hardcore == 1) {
        //   finalText.innerHTML = `You scored a total of ${accumulatedScore}`;
        // }
        document.getElementById("current-table-time").innerHTML = "Failed";
        document.getElementById("current-table-time").style.color = "red";
        document.getElementById("current-table-mistake").innerHTML =
          state.mistake;
        if (hardcore == 1)
          document.getElementById("current-table-score").innerHTML =
            accumulatedScore;
      }
      // else {
      //   finalText.innerHTML = `You took ${time} seconds`;
      // }

      // finalBox.classList.remove("hidden");

      if (easy != 1) {
        console.log(`Gold: ${gold}, silver: ${silver}, bronze: ${bronze}`);
        if (gold == 0 && time == cutoff) {
          document.querySelector(".trophy").appendChild(imageFailed);
          console.log("Failed");
        } else if (gold == 0 && time < cutoff) {
          document.querySelector(".trophy").appendChild(imageB);
          console.log("Bronze image");
        } else if (time < gold) {
          document.querySelector(".trophy").appendChild(imageG);
          console.log("Gold image");
        } else if (time < silver) {
          document.querySelector(".trophy").appendChild(imageS);
          console.log("Silver image");
        } else if (time < bronze) {
          document.querySelector(".trophy").appendChild(imageB);
          console.log("Bronze image");
        } else if (time < cutoff) {
          document.querySelector(".trophy").appendChild(imageNMP);
          console.log("Practice image");
        } else {
          document.querySelector(".trophy").appendChild(imageFailed);
          console.log("Failed");
        }
      }
      if (easy == 1) {
        document.querySelector(".trophy").appendChild(imageCompleted);
        console.log("Completed image");
      }

      let newEndTime = new Date();
      let newDuration = Math.round((newEndTime - newStartTime) / 1000);
      const now = new Date();
      const duration = now - startTime;
      console.log(duration);
      time = newDuration;
      const durationMilli = duration;
      const durationSecs = durationMilli / 1000;
      let durationHours = Math.floor(durationSecs / 60 / 60);
      while (durationHours >= 24) durationHours -= 24;
      let durationMins = Math.floor(durationSecs / 60);
      while (durationMins >= 60) durationMins -= 60;
      const durationRemainingSecs = Math.floor(durationSecs % 60);
      timeDoneCl.innerHTML = `End Time: ${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()}  ${now.getHours()}:${now
        .getMinutes()
        .toString()
        .padStart(
          2,
          "0"
        )}</p> Elapsed Time: ${durationHours} hrs ${durationMins} mins ${durationRemainingSecs} secs`;

      // mistakesCountCl.innerHTML = state.mistake;
      player = 0;
      if (extraPracticeArr.length != 0) {
        extraPracticeBtn.classList.remove("hidden");
      } else {
        extraPracticeBtn.classList.add("hidden");
      }
      if (extraPracticeArr.length != 0) {
        extraPracticeArr = extraPracticeArr.sort(function (a, b) {
          return a - b;
        });
        summaryTextCl.innerHTML = `*Extra practice needed for ${extraPracticeArr.join(
          ", "
        )}.</p>`;
      } else {
        summaryTextCl.innerHTML = `Well Done! 👏🏽</p>`;
      }

      if (time == cutoff) {
        summaryTextCl.innerHTML = `More practice required... 😞</p>`;
      }
      // console.log(`Summary: ${summary[0]}`);
      summary.forEach((item, index) => {
        console.log(`Index: ${index}, ${item.time}`);
        summaryScore.textContent = state.score;
        if (hardcore == 1) {
          summaryScore.textContent = accumulatedScore;
        }
        summaryTime.textContent = time;
        summaryMistakes.textContent = state.mistake;
        let html = undefined;
        // console.log(0 % 2);
        if (index % 2 == 0) {
          html = `<p>▪️${item.attempt}) ${item.symbol} Setting: ${item.setting}, Time: ${item.time}s`;
          summaryItemLeft.insertAdjacentHTML("beforeend", html);
        } else {
          // html = `<div class="summary-item-left">▪️${item.attempt}) ${item.symbol} Setting: ${item.setting}, Time: ${item.time}s</div>`;
          html = `<p>▪️${item.attempt}) ${item.symbol} Setting: ${item.setting}, Time: ${item.time}s`;
          summaryItemRight.insertAdjacentHTML("beforeend", html);
        }
      });

      if (easy == 1) {
        mode = "Easy";
      } else if (hardcore == 1) {
        mode = "Hardcore";
      } else {
        mode = "Normal";
      }

      // FOR AJEX
      attemptUser.value = user;
      attemptMode.value = mode;
      attemptLevel.value = level;
      attemptTime.value = time;
      attemptMistake.value = state.mistake;
      document.querySelector(".attempt-skip").value = skipArr;
      document.querySelector(".attempt-summary").value =
        JSON.stringify(summary);
      if (mode == "Hardcore" && time == 600) {
        attemptScore.value = accumulatedScore;
      } else {
      }
      attemptScore.value = state.score;

      attemptExtra.value = extraPracticeArr;
      document.querySelector("#form-attempt").value = attempt;
      // attemptDate.value = new Date().toUTCString();
      attemptSubmitBtn.click();
    }
  }, 1000);
  // UPLOAD ATTEMPT
}

function resetStuff() {
  extraPractice = 0;
  player = 1;
  attempt = 1;
  clearInterval(questionTime);
  levelSetting.classList.remove("hidden");
  finalBox.classList.add("hidden");
  state.score = 0;
  state.mistake = 0;
  currentScore.textContent = state.score;
  currentMistake.textContent = state.mistake;
  document.getElementById("timer").innerHTML = 0;
  timerD.innerHTML = 4;
  fractionsContainer.classList.add("hidden");
  fractionsContainerTwo.classList.add("hidden");
  threeNumerator.classList.remove("hidden");
  threeDenominator.classList.remove("hidden");
  wholeNumberContainer.classList.remove("hidden");
  multiplesSettingCl.classList.add("hidden");
  firstCanvas.classList.add("hidden");
  calculatorSymbol.classList.add("hidden");

  // calTwo setting 10
  denominatorOne.classList.remove("hidden");
  fractionsLine.classList.remove("hidden");
  fractionChoice.textContent = "Choices...";

  secondUnitMeasurement.textContent = "";

  // INSTRUCTIONS
  instructions.innerHTML = "";
  document.querySelector(".fa-pencil").classList.add("hidden");
  document.querySelector(".fa-book").classList.add("hidden");

  //STYLES
  document.querySelector("#user-input").setAttribute("type", "number");
  document.querySelector("#user-input").setAttribute("step", "1");
  userInput.style.width = "175px";
  document.querySelector("#user-input").style.marginTop = "0";
  document.querySelector("#user-input").setAttribute("max", "99999");
  canvas.setAttribute("height", "275px");
  displayProblem.style.margin = "30px 0";
  displayProblem.style.textAlign = "center";
  canvasTextId.classList.add("hidden");
  threeNumerator.classList.add("line");
  equalSymbol.innerHTML = "=";
  fractionsContainerTwo.style.margin = "0 25px 15px";
  helpMe.textContent = "";
  helpMe.style.fontSize = "30px";
  helpMe.style.lineHeight = "normal";
  helpMe.style.marginTop = "revert";
  helpMe.style.letterSpacing = "revert";
  inputBoxCl.classList.remove("hidden");
  ourForm2.classList.add("hidden");
  accumulatedScore = 0;
  heuArr.length = 0;
  global = 0;
  calArr = [];
  extraPracticeArr = [];
  // arr = null;
  calArrQns = [];
  setting = null;
  skipGlobalUpdateProblem = 0;
  summary = [];
  console.log(summary);
  summaryItemLeft.innerHTML = "";
  summaryItemRight.innerHTML = "";
  skipArr = [];
  questionsCorrectArr = [];

  gold = 0;
  silver = 0;
  bronze = 0;
  // if (document.querySelector(".trophy").childNodes.length > 0) {
  //   imageG.remove();
  //   imageS.remove();
  //   imageB.remove();
  //   imageNMP.remove();
  //   imageFailed.remove();
  //   imageCompleted.remove();

  // }
  arr.length = 0;
  arr2.length = 0;
  multiplesArr = [0];
  document.querySelector(".trophy").removeChild(document.querySelector("img"));
  ctx.clearRect(0, 0, 400, 275);

  console.log("reset button activated");
}

export function calArrAll(
  max,
  arr,
  setting,
  maxSetting,
  level,
  state,
  skipGlobalUpdateProblem
) {
  // console.log(maxSetting);
  if (setting == maxSetting || state.global == 1) {
    console.log("Everything!");
    state.global = 1;
    if (skipGlobalUpdateProblem != 1) {
      if (!arr.length) {
        let min = 1;
        console.log(level);
        if (level == "calOne" || level == "calTwo" || level == "calThree") {
          min = 3;
        }
        if (level == "calFive") min = 0;
        for (let i = min; i < max + 1; i++) {
          arr.push(i);
        }
        arr.map((item, index) => {
          if (skipArr.includes(item)) {
            arr.splice(index, 1);
          }
        });
        console.log(arr);
      }
      console.log(`Current available questions is/are ${arr}`);
      setting = arr[genNumbers(arr.length)];
      arr.splice(arr.indexOf(setting), 1);
      console.log(
        `Setting: ${setting} chosen. The remaining settings in calculation arr is ${arr}`
      );
    }
  }

  return setting;
}

export function checkRange(setting, arr, skipArr, skipGlobalUpdateProblem) {
  let calRange = [];
  console.log(`SkipGlobal: ${skipGlobalUpdateProblem}`);
  // skipGlobalUpdateProblem = updateCalc();
  // if (skipGlobalUpdateProblem != 1 || state.global == 1) {
  if (skipGlobalUpdateProblem == 0) {
    calRange.push(setting);
    console.log("Questions done:" + calRange);

    const isNotNumber = (calRange[0] * 1) % 1;
    console.log(isNotNumber);
    // const check = calRange[0].includes("-") ? "True" : "False";
    const check = isNaN(isNotNumber);
    if (check) {
      console.log("Range Detected!");
      state.min = calRange[0].split("-")[0] * 1;
      state.max = calRange[0].split("-")[1] * 1;
      console.log(state.min, state.max);
      if (!arr.length) {
        console.log("Arr is empty!");
        console.log("Updating / renewing set of questions");
        for (let i = state.min; i <= state.max; i++) {
          // FOR SKIP
          if (!skipArr.includes(i)) arr.push(i);
          console.log(`Loading: ${arr}`);
        }
      }
      setting = arr[genNumbers(arr.length)];
      const chosen = arr.splice(arr.indexOf(setting), 1);
      console.log(`Removed: ${chosen}, Remaining Questions: ${arr}`);
    }
  }
  console.log("Current question is " + setting);
  return setting;
}

buttonStart.addEventListener("click", clickStart);

// SKIP BUTTON
document.querySelector("#skipBtn").addEventListener("click", function (e) {
  console.log(setting);
  const isNotNumber = calRange[0] * 1;
  // if (calArr.length == 0) {
  if (questionSecs < 300) {
    alert("Keep trying for 5 mins...");
  } else {
    if (skipArr.length == state.max - state.min) {
      alert(
        "You seem to have skipped every single setting, unable to skip anymore"
      );
    } else if (questionsCorrectArr.includes(setting)) {
      console.log(calRange);
      console.log(setting);
      alert("You have got it right before. Think harder.");
    }
    // IS NUMBER
    else if (!isNaN(isNotNumber) && calArr.length == 0) {
      // else if ((!isNaN(isNotNumber) && calArr.length == 0) || (!isNaN(isNotNumber) && setting != 99) || (!isNaN(isNotNumber) && setting != 9)) {
      alert("There is only 1 setting, unable to skip.");
    } else {
      const answer = confirm("Have you at least given the question a try?");
      console.log(answer);
      if (answer == true) {
        summaryPush("🏳️");
        if (calArr.length == 0) {
          calArr.push([genNumbers(questionsCorrectArr)]);
        }
        if (!skipArr.includes(setting)) skipArr.push(setting);
        console.log(`Removing setting ${setting}`);
        // REMOVE FROM LIST OF POSSIBLE QUESTIONS
        while (calArr.includes(setting)) {
          const index = calArr.indexOf(setting);
          calArr.splice(index, 1);
        }
        console.log(calArr + " left");
        // REMOVE FROM EXTRA
        if (extraPracticeArr.includes(setting)) {
          const index = calArr.indexOf(setting);
          extraPracticeArr.splice(index, 1);
        }
        setting = calArr[genNumbers(calArr.length)];

        questionSecs = 0;
        updateProblems(level, state, setting, regen, skipArr, heuArr);
      }
    }
  }
});

toMultiplesBtn.addEventListener("click", function () {
  multiplesSettingCl.classList.remove("hidden");
  levelSetting.classList.add("hidden");
});

resetButton.addEventListener("click", function () {
  resetStuff();
});

for (let x = 0; x < backButton.length; x++) {
  backButton[x].addEventListener("click", function () {
    levelSetting.classList.remove("hidden");
    startBox.classList.add("hidden");
    optionsBox.classList.add("hidden");

    resetStuff();
  });
}

function drawCuboid(a, b, c, d) {
  // front
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(a, 0);
  ctx.lineTo(a, b);
  ctx.lineTo(0, b);
  ctx.closePath();
  ctx.stroke();

  // right
  ctx.beginPath();
  ctx.moveTo(a, 0);
  ctx.lineTo(a + c, 0 + d);
  ctx.lineTo(a + c, b + d);
  ctx.lineTo(a, b);
  ctx.closePath();
  ctx.stroke();

  // top
  ctx.beginPath();
  ctx.moveTo(0, b);
  ctx.lineTo(a, b);
  ctx.lineTo(a + c, b + d);
  ctx.lineTo(0 + c, b + d);
  ctx.closePath();
  ctx.stroke();
}

//////////////////// DISPLAY PROBLEMS ////////////////////

// Step 3: Updating, storing and then displaying the problem
// 1. generate new problem and store the question in state object
// 2. Also to visual update the HTML
// This used to be where updateProblems() is until is has been exported to display.js
function allTheStuffToSubmit() {
  console.log(arr);
  handleSubmit(
    player,
    state,
    level,
    questionTime,
    regen,
    questionsCorrectArr,
    setting,
    questionSecs,
    extraPracticeArr,
    skipGlobalUpdateProblem,
    accumulatedScore,
    easy,
    hardcore,
    arr,
    arr2,
    arr3,
    calArr,
    calArrQns,
    commonMultipleArr,
    commonMultipleArrTwo,
    scoreNeeded,
    reviewCount,
    attempt,
    skipArr
  );
}
ourForm.addEventListener("submit", function (e) {
  e.preventDefault();
  allTheStuffToSubmit();
});
ourForm2.addEventListener("submit", function (e) {
  e.preventDefault();
  allTheStuffToSubmit();
});

///////////////// LAST STEP ////////////////////////
// Step 4: Answer is marked
// Answer used to be here until exported to answer.js

////////// OTHERS////////

// Step 1: generate number
export function genNumbers(max) {
  return Math.floor(Math.random() * max);
}
//////////////////////////// SET VALUES //////////////////////////////
// Step 2: Generate Problem
// this is where genProblems use to be, exported to genProblems()

function SummaryCreate(attempt, symbol, setting, time) {
  this.attempt = attempt;
  this.symbol = symbol;
  this.setting = setting;
  this.time = time;
}
export function summaryPush(symbol, state) {
  if (
    level.toString().startsWith("cal") ||
    level.toString().startsWith("heu")
  ) {
    const question = new SummaryCreate(
      attempt,
      symbol,
      state.currentProblem.setting,
      questionTimeForSummary
    );
    summary.push(question);
  } else {
    const question = new SummaryCreate(
      attempt,
      symbol,
      level,
      questionTimeForSummary
    );
    summary.push(question);
  }
}

function levelDisplay() {
  levelLabel.innerHTML = `You are attempting Level ${level}`;
  if (typeof level == "string") {
    levelLabel.innerHTML = `You are attempting Level ${level}${
      setting == undefined ? "" : `.${setting}`
    }`;
  }
}

function levelBox() {
  scoreNeededCl.textContent = scoreNeeded;
  console.log(`Level ${level} selected`);
  levelSetting.classList.add("hidden");
  multiplesSettingCl.classList.add("hidden");
  startBox.classList.remove("hidden");
  levelDisplay();
}

// function draw(){
// state.currentDrawing = genProblems();
// const p = state.currentDrawing

// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");

// ctx.translate(p.translateX, p.translateY);
// ctx.rotate(p.rotation * Math.PI / 180);

// // label
// ctx.font = '1em serif'
// ctx.fillStyle = "red";
// ctx.fillText(p.labelABC, 0, 10)
// ctx.fillText(p.labelDEF, 0, p.pointY1+10)
// ctx.fillText(p.labelGHI, p.pointX1+3, 11)

//   // triangle
// ctx.fillStyle = 'black';
// ctx.lineWidth = 1;
// ctx.beginPath();
// ctx.moveTo(13, 10);
// ctx.lineTo(13, p.pointY1);
// ctx.lineTo(p.pointX1, 10);
// ctx.closePath();
// ctx.stroke();
// }

//////////////////////////// SET CLICK ///////////////////////////////
function display() {
  let x = 0;
  if (buttonLevel == "Heu.1") {
    level = "heuOne";
    x = 1;
  }
  if (buttonLevel == "Heu.2") {
    level = "heuTwo";
    x = 1;
  }
  if (buttonLevel == "Heu.2b") {
    level = "heuTwob";
    x = 1;
  }
  if (buttonLevel == "Heu.3") {
    level = "heuThree";
    x = 1;
  }
  if (buttonLevel == "Heu.3b") {
    level = "heuThreeb";
    x = 1;
  }
  if (buttonLevel == "Heu.4") {
    level = "heuFour";
    x = 1;
  }
  if (buttonLevel == "Heu.4b") {
    level = "heuFourb";
    x = 1;
  }
  if (buttonLevel == "Heu.5") {
    level = "heuFive";
    x = 1;
  }
  if (buttonLevel == "Heu.5b") {
    level = "heuFiveb";
    x = 1;
  }
  if (buttonLevel == "Heu.6") {
    level = "heuSix";
    x = 1;
  }
  if (buttonLevel == "Heu.6b") {
    level = "heuSixb";
    x = 1;
  }
  //CALCULATIONS
  if (buttonLevel == "Cal.1") {
    level = "calOne";
    x = 1;
  }
  if (buttonLevel == "Cal.2") {
    level = "calTwo";
    x = 1;
  }
  if (buttonLevel == "Cal.3") {
    level = "calThree";
    x = 1;
  }
  // if (buttonLevel == "Cal.3b") level = "calThreeb";

  if (buttonLevel == "Cal.4") {
    level = "calFour";
    x = 1;
  }
  // if (buttonLevel == "Cal.4b") level = "calFourb";

  if (buttonLevel == "Cal.5") {
    level = "calFive";
    x = 1;
  }
  if (buttonLevel == "Cal.5b") {
    level = "calFiveb";
    x = 1;
  }
  if (buttonLevel == "Cal.6") {
    level = "calSix";
    x = 1;
  }
  if (buttonLevel == "Cal.6b") {
    level = "calSixb";
    x = 1;
  }
  if (x == 1) {
    optionsBox.classList.remove("hidden");
    optionsBox.textContent = `Available settings:`;
    optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
  }
}
document
  .querySelector(".help-close-btn")
  .addEventListener("click", function () {
    document.querySelector("#help").classList.add("hidden");
  });
for (let i = 0; i < settingButton.length; i++) {
  settingButton[i].addEventListener("dblclick", function (e) {
    buttonLevel = this.innerHTML;
    // console.log(e);
    mulLevel = "nil";

    display();
    setTimeout(function () {
      buttonLevelSetting();
      levelBox();
      workingContainer.classList.add("hidden");
    }, 100);
  });
}

// INPUT TYPE 2
for (let i = 0; i < heuristics.length; i++) {
  heuristics[i].addEventListener("dblclick", function () {
    buttonLevel = this.innerHTML;
    mulLevel = "nil";

    console.log(buttonLevel);
    display();
    setTimeout(function () {
      buttonLevelSetting();
      levelBox();
      // if (this.textContent != "Heu.6") {
      document.querySelector(".input-box").classList.add("hidden");
      ourForm2.classList.remove("hidden");
    }, 100);

    // }
  });
}

instructionPencilIcon.addEventListener("click", function () {
  instructionBox.classList.remove("hidden");
});

document
  .querySelector(".instructions-close-btn")
  .addEventListener("click", function () {
    instructionBox.classList.add("hidden");
  });

calBtn.forEach((item) => {
  item.addEventListener("dblclick", function () {
    buttonLevel = this.innerHTML;
    mulLevel = "nil";

    display();
    setTimeout(function () {
      buttonLevelSetting();
      levelBox();
      if (buttonLevel != "Cal.6") {
        wholeNumberContainer.classList.toggle("hidden");
        workingContainer.classList.toggle("hidden");
      }
    }, 2000);
  });
});

hardcoreMode.addEventListener("click", function () {
  if (hardcore == 0) {
    hardcore = 1;
    mode = "Hardcore";
    easy = 0;
    mainBox.style.borderColor = "red";
    levelSetting.style.borderColor = "red";
  } else {
    hardcore = 0;
    mode = "Normal";
    mainBox.style.borderColor = "black";
    levelSetting.style.borderColor = "black";
  }
  console.log(hardcore, cutoff);
});

easyMode.addEventListener("click", function () {
  if (easy == 0) {
    easy = 1;
    mode = "Easy";
    hardcore = 0;
    mainBox.style.borderColor = "#39FF14";
    levelSetting.style.borderColor = "#39FF14";
  } else {
    easy = 0;
    mode = "Normal";
    mainBox.style.borderColor = "black";
    levelSetting.style.borderColor = "black";
  }
  console.log(hardcore);
});

// LEVEL SETTINGS
function settingCheck(inputSetting, acceptedValues, level) {
  const split = inputSetting.split("");
  if (split.includes("-")) {
    const array = inputSetting.split("-");
    if (
      !acceptedValues.includes(array[0] * 1) ||
      !acceptedValues.includes(array[1] * 1)
    ) {
      if (level.startsWith("heu")) return 9;
      if (level.startsWith("cal")) return 99;
    } else {
      if (
        (level.startsWith("heu") && array[1] == 9) ||
        (level.startsWith("heu") &&
          acceptedValues[acceptedValues.length - 2] == array[1])
      ) {
        return 9;
      } else if (
        (level.startsWith("cal") && array[1] == 99) ||
        (level.startsWith("cal") &&
          acceptedValues[acceptedValues.length - 2] == array[1])
      ) {
        return 99;
      } else {
        return `${array[0]}-${array[1]}`;
      }
    }
  } else {
    if (!acceptedValues.includes(inputSetting * 1)) {
      if (level.startsWith("heu")) return 9;
      if (level.startsWith("cal")) return 99;
    } else {
      return inputSetting;
    }
  }
}
function buttonLevelSetting() {
  // if (levelArr.length != 0){
  //   buttonLevel = `Level ${levelArr[0]}`
  // }
  switch (buttonLevel) {
    case "Level 1.0":
      level = 1.0;
      scoreNeeded = 50;
      break;

    case "Level 1.01":
      level = 1.01;
      scoreNeeded = 50;
      break;

    case "Level 1.02":
      level = 1.02;
      scoreNeeded = 50;
      helpMe.style.fontSize = "1.5em";
      break;

    case "Level 1.03":
      level = 1.03;
      scoreNeeded = 50;
      break;

    case "Level 1.04":
      level = 1.04;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 1.05":
      level = 1.05;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 1.06":
      level = 1.06;
      scoreNeeded = 30;
      break;

    case "Level 1.07":
      level = 1.07;
      scoreNeeded = 30;
      displayProblem.style.fontSize = "25px";
      document.querySelector("#user-input").style.marginTop = "100px";
      break;

    case "Level 1.08":
      level = 1.08;
      scoreNeeded = 20;
      break;

    case "Level 2.0":
      level = 2.0;
      scoreNeeded = 50;

      break;

    case "Level 2.01":
      level = 2.01;
      scoreNeeded = 50;
      break;

    case "Level 2.02":
      level = 2.02;
      scoreNeeded = 30;
      setting = prompt(
        "How many digits?\n2. Primary 2\n3. Primary 3\n4. Primary 4\n5. Primary 5\n6. Primary 6"
      );
      if (![2, 3, 4, 5, 6].includes(setting * 1)) {
        setting = 6;
      }

      break;

    case "Level 2.03":
      level = 2.03;
      scoreNeeded = 50;

      break;

    case "Level 2.04":
      level = 2.04;
      scoreNeeded = 30;
      break;

    case "Level 2.05":
      level = 2.05;
      scoreNeeded = 20;
      setting = prompt(
        "How many digits?\n2. Primary 2\n3. Primary 3\n4. Primary 4, 5 ,6"
      );
      if (![2, 3, 4].includes(setting * 1)) {
        setting = 4;
      }

      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 2.06":
      level = 2.06;
      scoreNeeded = 20;
      break;

    case "Level 2.07":
      level = 2.07;
      scoreNeeded = 50;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainer.classList.remove("hidden");
      // instructions.textContent = "Answer using '1' or '2' only";

      document.querySelector("#user-input").setAttribute("type", "number");
      document.querySelector("#user-input").setAttribute("min", "1");
      document.querySelector("#user-input").setAttribute("max", "2");
      break;

    case "Level 2.08":
      level = 2.08;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Level 2.09":
      level = 2.09;
      scoreNeeded = 10;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Level 2.10":
      level = 2.1;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 3.0":
      level = 3.0;
      scoreNeeded = 30;

      break;

    case "Level 3.01":
      level = 3.01;
      scoreNeeded = 30;

      break;

    case "Level 3.02":
      level = 3.02;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("max", "9999999");
      break;

    case "Level 3.03":
      level = 3.03;
      scoreNeeded = 30;

      break;

    case "Level 3.04":
      level = 3.04;
      scoreNeeded = 30;
      gold = 284;
      silver = 521;

      break;

    case "Level 3.05":
      level = 3.05;
      scoreNeeded = 30;

      break;

    case "Level 3.06":
      level = 3.06;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("type", "text");

      helpMe.textContent = `Include units`;
      break;

    case "Level 3.07":
      level = 3.07;
      scoreNeeded = 30;

      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 3.08":
      level = 3.08;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 3.09":
      level = 3.09;
      scoreNeeded = 30;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 3.10":
      level = 3.1;
      scoreNeeded = 30;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 3.11":
      level = 3.11;
      scoreNeeded = 30;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 3.12":
      level = 3.12;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      // instructions.textContent = "Form an Equation from the pattern";
      break;

    case "Level 3.16":
      level = 3.16;
      setting = prompt(
        "1. Triangle Pattern\n2. Continuous Pattern\n3. Square Number Pattern\n4. Position Pattern\n\n9. All",
        9
      );
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 3.17":
      level = 3.17;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 3.18":
      level = 3.18;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 3.19":
      setting = prompt("1. Basics\n2. Reverse\n\n9. All", 9);
      if (![1, 2, 9].includes(setting)) setting = 9;
      level = 3.19;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.0":
      level = 4.0;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 4.01":
      level = "4.01";
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("max", "100000");
      break;

    case "Level 4.02":
      level = 4.02;
      scoreNeeded = 20;
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("max", "200000");
      break;

    case "Level 4.03":
      level = 4.03;
      setting = prompt("1. Halfing\n2. Opposite\n\n9. All");
      if (setting != 1 && setting != 2) setting = 9;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainer.classList.remove("hidden");

      document.querySelector("#user-input").setAttribute("type", "number");
      document.querySelector("#user-input").setAttribute("min", "1");
      document.querySelector("#user-input").setAttribute("max", "2");

      break;

    case "Level 4.04":
      setting = prompt(
        "1. Mixed to improper fraction\n2. Improper to Mixed fraction\n\n9. All",
        9
      );
      level = 4.04;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.05":
      level = 4.05;
      scoreNeeded = 30;
      setting = Math.abs(
        prompt(
          "1. Numerator with value\n2. Multiplication of Fractions\n\n9. All",
          9
        )
      );
      break;

    case "Level 4.06":
      level = 4.06;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 4.07":
      level = "4.07";
      scoreNeeded = 30;

      break;

    case "Level 4.08":
      level = "4.08";
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("step", "0.000001");
      break;

    case "Level 4.09":
      level = 4.09;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.1":
      level = 4.1;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("step", "0.000001");
      break;

    case "Level 4.11":
      setting = prompt(
        "1. Decimal Conversion: Big to Small\n2. Decimal Conversion: Small to Big\n\n9. All",
        9
      );
      if (setting != 1 && setting != 2 && setting != 9) setting = 9;
      level = 4.11;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("step", "0.000001");
      break;

    case "Level 4.13":
      level = 4.13;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.14":
      level = 4.14;
      scoreNeeded = 30;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      equalSymbol.innerHTML = "";
      instructions.innerHTML = `Answer using</br>
          r, f, v
          `;
      threeWholeNumber.textContent = "";
      threeNumerator.textContent = "";
      threeDenominator.textContent = "";
      threeNumerator.classList.remove("line");
      break;

    case "Level 4.15":
      level = 4.15;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "250px";
      break;

    case "Level 4.17":
      level = 4.17;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      // arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.18":
      level = 4.18;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");

      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.19":
      level = 4.19;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.20":
      level = 4.2;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.21":
      setting = prompt(
        "1. Perfect Cutting\n2. Rectangle\n3. Cuboid\n4. Circles\n5. Rectangles\n\n9. Everything",
        9
      );
      accepted = [1, 2, 3, 4, 5, 9];
      setting = settingCheck(setting, accepted, level);
      level = 4.21;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 4.22":
      level = 4.22;
      scoreNeeded = 10;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.23":
      level = 4.23;
      scoreNeeded = 6;
      break;

    case "Level 4.24":
      level = 4.24;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");

      break;

    case "Level 4.25":
      level = 4.25;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.26":
      level = 4.26;
      scoreNeeded = 10;
      helpMe.style.fontSize = "10px";
      helpMe.style.lineHeight = "0";
      helpMe.style.letterSpacing = "4px";

      break;

    case "Level 5.0":
      level = 5.0;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 5.01":
      setting = prompt(
        "1. Like Fractions\n2. Remainder Concept ( Friendly )\n3. Remainder Concept ( UnFriendly )\n\n9. All",
        9
      );
      if (setting != 1 && setting != 2 && setting != 3 && setting != 9)
        setting = 9;
      level = 5.01;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 5.02":
      level = 5.02;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 5.03":
      level = 5.03;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 5.04":
      level = 5.04;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      instructions.innerHTML =
        "Form an equation using</br> multiplication of percentage </br> from/100 x end";
      userInput.style.width = "200px";
      break;

    case "Level 5.05":
      level = 5.05;
      scoreNeeded = 10;
      gold = 79;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 5.06":
      setting = prompt(
        "1. Right-angled Triangle\n2. Obtuse-triangle\n\n9. All",
        9
      );
      if (setting != 1 && setting != 2 && setting != 9) {
        setting = 9;
      }
      level = 5.06;
      scoreNeeded = 20;
      gold = highScore5DotZero6.time;
      silver = highScore5DotZero6.time + (cutoff - highScore5DotZero6.time) / 3;
      bronze =
        highScore5DotZero6.time + ((cutoff - highScore5DotZero6.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.07":
      level = 5.07;
      scoreNeeded = 20;
      gold = highScore5DotZero7.time;
      silver = highScore5DotZero7.time + (cutoff - highScore5DotZero7.time) / 3;
      bronze =
        highScore5DotZero7.time + ((cutoff - highScore5DotZero7.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.08":
      level = 5.08;
      scoreNeeded = 20;
      gold = highScore5DotZero8.time;
      silver = highScore5DotZero8.time + (cutoff - highScore5DotZero8.time) / 3;
      bronze =
        highScore5DotZero8.time + ((cutoff - highScore5DotZero8.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.09":
      level = 5.09;
      scoreNeeded = 10;
      gold = highScore5DotZero9.time;
      silver = highScore5DotZero9.time + (cutoff - highScore5DotZero9.time) / 3;
      bronze =
        highScore5DotZero9.time + ((cutoff - highScore5DotZero9.time) / 3) * 2;
      instructions.innerHTML = `
        discount/original x 100
        increase/original x 100
        decrease/original x 100
        `;
      displayProblem.style.fontSize = "25px";
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 5.10":
      level = 5.1;
      scoreNeeded = 20;
      gold = highScore5DotZero10.time;
      silver =
        highScore5DotZero10.time + (cutoff - highScore5DotZero10.time) / 3;
      bronze =
        highScore5DotZero10.time +
        ((cutoff - highScore5DotZero10.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.11":
      level = 5.11;
      scoreNeeded = 10;
      gold = highScore5DotZero11.time;
      silver =
        highScore5DotZero11.time + (cutoff - highScore5DotZero11.time) / 3;
      bronze =
        highScore5DotZero11.time +
        ((cutoff - highScore5DotZero11.time) / 3) * 2;
      instructions.innerHTML = `
        Calculate the value via percentage
        `;
      displayProblem.style.fontSize = "25px";
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 5.12":
      // difficulty = prompt("Difficulty: Enter 0, 1, 2 or 3");
      console.log(difficulty);
      level = 5.12;
      scoreNeeded = 10;
      gold = highScore5DotZero12.time;
      silver =
        highScore5DotZero12.time + (cutoff - highScore5DotZero12.time) / 3;
      bronze =
        highScore5DotZero12.time +
        ((cutoff - highScore5DotZero12.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");

      instructions.innerHTML = `
        Length x Breadth x Height = Volume
        L x B x H = V
        `;
      break;

    case "Level 5.13":
      level = 5.13;
      scoreNeeded = 10;
      gold = highScore5DotZero13.time;
      silver =
        highScore5DotZero13.time + (cutoff - highScore5DotZero13.time) / 3;
      bronze =
        highScore5DotZero13.time +
        ((cutoff - highScore5DotZero13.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.14":
      level = 5.14;
      scoreNeeded = 10;
      gold = highScore5DotZero14.time;
      silver =
        highScore5DotZero14.time + (cutoff - highScore5DotZero14.time) / 3;
      bronze =
        highScore5DotZero14.time +
        ((cutoff - highScore5DotZero14.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.15":
      level = 5.15;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Level 5.16":
      level = 5.16;
      scoreNeeded = 10;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      instructions.innerHTML = `
        Do not simplify when it is an equation in simple fraction.
        `;
      break;

    case "Level 5.17":
      level = 5.17;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "1.5em";
      document.querySelector("#user-input").setAttribute("type", "text");
      // wholeNumberContainer.classList.add("hidden");
      // firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.18":
      level = 5.18;
      scoreNeeded = 10;
      gold = highScore6DotZero.time;
      silver = highScore6DotZero.time + (cutoff - highScore6DotZero.time) / 3;
      bronze =
        highScore6DotZero.time + ((cutoff - highScore6DotZero.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 6.0":
      level = 6;
      scoreNeeded = 10;

      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 6.01":
      setting = prompt("1. Basic\n2. Intermediate", 2);
      // difficulty = prompt("Enter 0 or 1");
      // console.log(difficulty);
      level = 6.01;
      // if (difficulty == 1) {
      //   scoreNeeded = 10;
      // } else {
      //   scoreNeeded = 20;
      // }
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      instructions.innerHTML = `
        Area of Circle<br>
        π x r x r</br>
        Circumference of Circle</br>
        2 x π x r OR π x d
        `;
      break;

    case "Level 6.02":
      // difficulty = prompt("Enter 0 or 1")
      // console.log(difficulty);
      level = 6.02;
      scoreNeeded = 20;
      gold = highScore6DotZero2.time;
      silver = highScore6DotZero2.time + (cutoff - highScore6DotZero2.time) / 3;
      bronze =
        highScore6DotZero2.time + ((cutoff - highScore6DotZero2.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 6.03":
      level = 6.03;
      scoreNeeded = 20;
      gold = highScore6DotZero3.time;
      silver = highScore6DotZero3.time + (cutoff - highScore6DotZero3.time) / 3;
      bronze =
        highScore6DotZero3.time + ((cutoff - highScore6DotZero3.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 6.04":
      level = 6.04;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 6.05":
      level = 6.05;
      scoreNeeded = 20;
      gold = highScore6DotZero5.time;
      silver = highScore6DotZero5.time + (cutoff - highScore6DotZero5.time) / 3;
      bronze =
        highScore6DotZero5.time + ((cutoff - highScore6DotZero5.time) / 3) * 2;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "20px";
      instructions.innerHTML = `
        Distance = Speed x Time
        `;
      break;

    case "Level 7":
      level = 7;
      scoreNeeded = 30;
      break;

    case "Cal.1":
      level = "calOne";
      scoreNeeded = 10;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99];
      setting = settingCheck(setting, accepted, level);
      break;
    case "Cal.2":
      level = "calTwo";
      scoreNeeded = 10;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 99];
      setting = settingCheck(setting, accepted, level);
      document.querySelector("#user-input").setAttribute("type", "text");
      break;
    case "Cal.3":
      level = "calThree";
      scoreNeeded = 10;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 99,
      ];
      setting = settingCheck(setting, accepted, level);
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "1em";
      displayProblem.style.textAlign = "left";
      break;

    case "Cal.4":
      level = "calFour";
      scoreNeeded = 10;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");

      accepted = [...Array.from({ length: 23 }, (_, i) => i + 1), 99];
      setting = settingCheck(setting, accepted, level);
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      break;

    case "Cal.5":
      level = "calFive";

      scoreNeeded = 10;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");
      // if (
      //   ![...Array(27).keys(), 99].includes(setting * 1) &&
      //   !setting.split("").includes("-")
      // )
      //   setting = 99;
      accepted = [...Array(27).keys(), 99];
      setting = settingCheck(setting, accepted, level);
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Cal.5b":
      level = "calFiveb";
      console.log(level);
      scoreNeeded = 10;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [...Array.from({ length: 24 }, (_, i) => i + 1), 99];
      setting = settingCheck(setting, accepted, level);
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      break;

    // HEURISTICS SETTINGS
    case "Cal.6":
      level = "calSix";
      scoreNeeded = 10;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");
      //IF THERE ARE 7 TYPES, PUT 6. SINCE THE MAP FUNCTION WILL +1
      accepted = [...Array.from(Array(10)).map((e, i) => i + 1), 99];
      setting = settingCheck(setting, accepted, level);
      // if (
      //   ![...Array.from(Array(10)).map((e, i) => i + 1), 99].includes(
      //     setting * 1
      //   ) &&
      //   !setting.split("").includes("-")
      // )
      //   setting = 99;
      // console.log(...Array.from(Array(6)).map((e, i) => i + 1), 99);
      // console.log(...[...Array(6).keys()].map((i) => i + 1), 99);
      // console.log(...Array(6).keys().map((e, i) => i + 1), 99);
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      break;

    case "Cal.6b":
      level = "calSixb";
      scoreNeeded = 5;
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 99];
      // if (
      //   ![1, 2, 3, 4, 5, 6, 7, 99].includes(setting * 1) &&
      //   !setting.split("").includes("-")
      // )
      //   setting = 99;
      setting = settingCheck(setting, accepted, level);
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      break;

    case "Heu.1":
      level = "heuOne";
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      setting = settingCheck(setting, [1, 2, 3, 4, 5, 9], level);
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      instructions.style.fontSize = "16px";
      instructions.innerHTML = `
        A comparison statement tells us the difference.</p>
        Which allows us to change one variable to another.</p>
        `;
      break;

    case "Heu.2":
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      level = "heuTwo";
      accepted = [1, 2, 3, 4, 9];
      setting = settingCheck(setting, accepted, level);
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      range = 0;
      break;

    case "Heu.2b":
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      level = "heuTwob";
      accepted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      setting = settingCheck(setting, accepted, level);
      range = 0;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Heu.3":
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      setting = settingCheck(setting, accepted, level);
      scoreNeeded = 10;
      range = 0;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Heu.3b":
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 9];
      setting = settingCheck(setting, accepted, level);
      range = 0;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Heu.4":
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 9];
      setting = settingCheck(setting, accepted, level);
      scoreNeeded = 10;
      range = 0;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Heu.4b":
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 9];
      setting = settingCheck(setting, accepted, level);
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Heu.5":
      level = "heuFive";
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      setting = settingCheck(setting, accepted, level);
      range = 0;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      break;

    case "Heu.5b":
      level = "heuFiveb";
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 9];
      setting = settingCheck(setting, accepted, level);
      scoreNeeded = 5;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      break;

    case "Heu.6":
      level = "heuSix";
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 9];
      setting = settingCheck(setting, accepted, level);
      scoreNeeded = 5;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      break;

    case "Heu.6b":
      level = "heuSixb";
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (!setting) optionsBox.classList.add("hidden");
      accepted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      setting = settingCheck(setting, accepted, level);
      scoreNeeded = 5;

      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      break;

    case "Multiples 1":
      level = "1 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 2":
      level = "2 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 3":
      level = "3 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 4":
      level = "4 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 5":
      level = "5 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;
    case "Multiples 6":
      level = "6 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 7":
      level = "7 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 8":
      level = "8 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 9":
      level = "9 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 10":
      level = "10 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 11":
      level = "11 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    case "Multiples 12":
      level = "12 times table";
      mulLevel = "multiples";
      scoreNeeded = 13;
      break;

    default:
      console.log(this.innerHTML);
  }
  attemptSetting.value = setting;
  range = setting;
  if (hardcore == 1) {
    scoreNeeded /= 2;
  }
  instructions.innerHTML = instructionsContent(level);
}
//FOR TIMINGS AND HIGHSCORE
const allLevelButtons = [...settingButton].concat([...heuristics], [...calBtn]);
allLevelButtons.forEach((item, index) => {
  item.addEventListener("dblclick", function (e) {
    console.log(e);
    console.log(e.target.innerText);
    let level = e.target.innerText;

    if (level.startsWith("Level")) {
      console.log("Normal level selected");
      level = level.split(" ")[1];
    }
    if (level.startsWith("Cal")) {
      console.log("Calculation selected");
      level = level.split(".")[1];
      if (level == 1) level = "calOne";
      if (level == 2) level = "calTwo";
      if (level == 3) level = "calThree";
      if (level == 4) level = "calFour";
      if (level == 5) level = "calFive";
      if (level == "5b") level = "calFiveb";
      if (level == 6) level = "calSix";
      if (level == "6b") level = "calSixb";
    }
    if (level.startsWith("Heu")) {
      console.log("Heuristics selected");
      level = level.split(".")[1];
      if (level == 1) level = "heuOne";
      if (level == 2) level = "heuTwo";
      if (level == "2b") level = "heuTwo";
      if (level == 3) level = "heuThree";
      if (level == "3b") level = "heuThreeb";
      if (level == 4) level = "heuFour";
      if (level == "4b") level = "heuFourb";
      if (level == 5) level = "heuFive";
      if (level == "5b") level = "heuFiveb";
      if (level == 6) level = "heuSix";
      if (level == "6b") level = "heuSixb";
    }
    console.log(level, range);
    console.log("AJAXXX");

    let attempt = {
      level: level,
      setting: range,
      mode: mode,
    };
    e.preventDefault();
    // data = JSON.stringify({ data });
    $.ajax({
      url: "/attempts/previousAttempts",
      method: "POST",
      // data: JSON.stringify(attempt),
      data: attempt,
      // contentType: "application/json; charset=utf-8",
      success: function (res) {
        // setTimeout(function () {
        console.log(`Response from the control is ${res}`);
        // console.log(`Ajax: ${res}`);
        // const data = JSON.parse(res);
        const data = res;
        console.log(data);
        // highScoreName.textContent = data.highscore.user;
        // highScoreTime.textContent = data.highscore.time;
        // highScoreMistakes.textContent = data.highscore.mistake;
        if (data.highscore) {
          highscore.textContent = `
            ${data.highscore.user}, ${data.highscore.time}s, ${data.highscore.mistake} mistakes.
            `;
        } else {
          highscore.textContent = `No highscore has been set.`;
        }
        console.log(parent);
        const elements = parent.getElementsByTagName("td");
        console.log(elements);
        parent.removeChild(elements[0]);
        if (mode == "Easy") {
          document
            .querySelector("#modeSet")
            .insertAdjacentHTML(
              "afterbegin",
              `<td><btn class="btn btn-success">Easy</td>`
            );
        } else if (mode == "Hardcore") {
          document
            .querySelector("#modeSet")
            .insertAdjacentHTML(
              "afterbegin",
              `<td><btn class="btn btn-danger">Hardcore</td>`
            );
        } else {
          document
            .querySelector("#modeSet")
            .insertAdjacentHTML(
              "afterbegin",
              `<td><btn class="btn btn-secondary">Normal</td>`
            );
        }

        if (data.gold) {
          platinumStarter.textContent = `< ${Math.floor(data.gold.upper)}`;
          goldStarter.textContent = `< ${Math.floor(data.gold.lower)}`;
          silverStarter.textContent = `< ${Math.floor(data.silver.lower)}`;
          bronzeStarter.textContent = `< ${Math.floor(data.bronze.lower)}`;
        } else {
          platinumStarter.textContent = `Nil`;
          goldStarter.textContent = `Nil`;
          silverStarter.textContent = `Nil`;
          bronzeStarter.textContent = `Nil`;
        }

        if (data.previous) {
          previousAttempt.textContent = `Previous Attempt: ${Math.floor(
            data.previous.time
          )}s, ${data.previous.mistake} mistakes, ${data.daysAgo} days ago
          `;
        } else {
          previousAttempt.textContent = `This is your 1st Attempt.`;
        }

        // previousAttempt.textContent = `Age`;
      },
      error: function (res) {
        console.log(`Some error. ${res}.`);
      },
    });
  });
});

reviewAnswer.addEventListener("click", function () {
  if (confirm("Are you sure? Your score will drop to 0.")) {
    if (document.querySelector(".input-box").classList.contains("hidden")) {
      userInput2.focus();
      userInput2.value = state.correctAnswer;
    } else {
      userInput.focus();
      userInput.value = state.correctAnswer;
    }
    state.score = 0;
    currentScore.textContent = state.score;
    reviewAnswer.classList.add("hidden");
    reviewCount = 0;
  }
});

summaryBtn.addEventListener("click", function () {
  console.log("Summary button pressed");
  summaryContainer.classList.remove("hidden");
  summaryAttemptCl.textContent = attempt;
  if (screenWidth > 1430) {
    if (level.startsWith("cal") || level.startsWith("heu")) {
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
    }
  }
});

extraPracticeBtn.addEventListener("click", function () {
  if (extraPractice == 1) {
    attempt += 1;
    withinStart();
    ctx.clearRect(0, 0, 1000, 1000);
    scoreNeeded = extraPracticeArr.length * 3;
    console.log(`Extra: ${extraPracticeArr}. Score needed: ${scoreNeeded}`);
    finalBox.classList.add("hidden");
    state.score = 0;
    state.mistake = 0;
    currentScore.textContent = 0;
    currentMistake.textContent = 0;
    calArr = [];
    console.log(
      `Extra: ${extraPracticeArr}. Score needed: ${scoreNeeded}. calArr: ${calArr}`
    );
    const cloneArr = extraPracticeArr;
    calArr.push(...cloneArr, ...cloneArr, ...cloneArr);
    console.log(calArr);
    extraPracticeArr = [];
    player = 1;
    console.log(scoreNeeded);
    console.log(`calArr: ${calArr}`);
  }
});

closeBtn.addEventListener("click", function () {
  console.log("Close button pressed");
  summaryContainer.classList.add("hidden");
  optionsBox.classList.add("hidden");
});

//AJAX
// $(document).ready(function () {
$("#attemptAjex").on("submit", function (event) {
  console.log("AJAXXX");

  let attempt = {
    user: $("#form-username").val(),
    mode: $("#form-mode").val(),
    level: $("#form-level").val(),
    time: $("#form-time").val(),
    mistake: $("#form-mistake").val(),
    score: $("#form-score").val(),
    setting: $("#form-setting").val(),
    extra: $("#form-extra").val(),
    attemptNum: $("#form-attempt").val(),
    skip: $("#form-skip").val(),
    summary: $("#form-summary").val(),
  };
  event.preventDefault();
  // data = JSON.stringify({ data });
  $.ajax({
    url: "/attempts",
    method: "POST",
    // data: JSON.stringify(attempt),
    data: attempt,
    // contentType: "application/json; charset=utf-8",
    success: function (res) {
      setTimeout(function () {
        $(".loader").addClass("hidden");
        // $(".overlay").attr("backdrop-filter", "none");
        console.log(`Response from the control is ${res}`);
        // console.log(`Ajax: ${res}`);
        const data = JSON.parse(res);
        console.log(`highscore?: ${data.eligible} Ajax`);
        console.log(`Previous: ${data.previous} Ajax`);
        console.log(`Highscoreholder: ${data.highscore} Ajax`);
        if (data.eligible == 1) {
          console.log("YESSSS");

          $("img").attr("src", "/images/high-score.png");
          $("img").addClass("constant-tilt-shake");
          $(".finalBox").css("height", "475px");
          $(".highscore").text("You have set a new highscore!");
        }
        if (data.eligible != 1) {
          // if (easy != 1) {
          // console.log(`Gold: ${gold}, silver: ${silver}, bronze: ${bronze}`);
          if (time == cutoff) {
            $("img").attr("src", "/images/endgame/failed.jpeg");
          } else if (data.award == "Bronze") {
            $("img").attr("src", "/images/endgame/bronze.jpeg");
          } else if (data.award == "Gold") {
            $("img").attr("src", "/images/endgame/gold.jpeg");
          } else if (data.award == "Silver") {
            $("img").attr("src", "/images/endgame/silver.jpeg");
          } else if (data.award == "Try harder") {
            $("img").attr("src", "/images/endgame/needmorepractice.jpeg");
          } else {
            $("img").attr("src", "/images/endgame/platinum.jpeg");
          }
          // }
          // if (easy == 1) {
          //   $("img").attr("src", "/images/endgame/complete.jpeg");
          // }
          $(".highscore").text("");
          $("img").removeClass("constant-tilt-shake");
          $(".finalBox").css("height", "425px");
        }
        console.log("SUCCESS!");

        //DISPLAY PREVIOUS
        if (data.previous) {
          document.getElementById("previous-table-user").innerHTML =
            data.previous.user || 0;
          document.getElementById("previous-table-time").innerHTML =
            data.previous.time || 0;
          document.getElementById("previous-table-mistake").innerHTML =
            data.previous.mistake || 0;
          document.getElementById("previous-table-score").innerHTML =
            data.previous.score || 0;
        } else {
          document.getElementById("previous-table-user").innerHTML = "Nil";
          document.getElementById("previous-table-time").innerHTML = "Nil";
          document.getElementById("previous-table-mistake").innerHTML = "Nil";
          document.getElementById("previous-table-score").innerHTML = "Nil";
        }

        //DISPLAY HIGHSCORE

        if (data.highscore) {
          document.getElementById("highscore-table-user").innerHTML =
            data.highscore.user;
          document.getElementById("highscore-table-time").innerHTML =
            data.highscore.time;
          document.getElementById("highscore-table-mistake").innerHTML =
            data.highscore.mistake;
          document.getElementById("highscore-table-score").innerHTML =
            data.highscore.score;
        } else {
          document.getElementById("highscore-table-user").innerHTML = "Nil";
          document.getElementById("highscore-table-time").innerHTML = "Nil";
          document.getElementById("highscore-table-mistake").innerHTML = "Nil";
          document.getElementById("highscore-table-score").innerHTML = "Nil";
        }
        console.log(`${data} ❕`);
        // if (data.medals.gold.lower == null) {
        if (data.medals.gold.lower == null) {
          $("#gold").html(`Nil`);
          $("#silver").html(`Nil`);
          $("#bronze").html(`Nil`);
        } else {
          $("#gold").html(`< ${data.medals.gold.lower.toFixed(1)}`);
          $("#silver").html(`< ${data.medals.silver.lower.toFixed(1)}`);
          $("#bronze").html(`< ${data.medals.bronze.lower.toFixed(1)}`);
        }

        $(".finalBox").removeClass("hidden");
      }, 1000);
    },
    error: function (res) {
      console.log(`Some error. ${res}.`);
    },
  });
});
// });

// export { updateProblems, genNumbers };
