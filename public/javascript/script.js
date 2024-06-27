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
import {
  pieChart,
  drawSquares,
  drawGrid,
  draw3d,
  drawTriangle,
  parallelOverlapping,
  swap,
  decimalCheck,
  accDecimal,
  commonDeno,
  simplify,
  commonFactors,
  // updateCalc,
  genUniqNum,
  reverseCalculation,
  simplifyThree,
  zoneOfDay,
  day12Hours,
  permutationAnswer,
  simplestForm,
  resultSide,
  blankSide,
  drawIntervals,
  drawThis,
  fillTextSplit,
  adjustCanvasBreadth,
  drawForFraction,
} from "./otherFunctions.js";
// import { resetStuff } from "./reset.js";
import { cutOffCheck } from "./cut_off.js";
import { displayContent } from "./content.js";
import { instructionsContent } from "./instruction-content.js";
import { helpList, helpMeFunc } from "./helpMe.js";
import { updateProblems } from "./display.js";

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

function SummaryCreate(attempt, symbol, setting, time) {
  this.attempt = attempt;
  this.symbol = symbol;
  this.setting = setting;
  this.time = time;
}
function summaryPush(symbol) {
  if (
    level.toString().startsWith("cal") ||
    level.toString().startsWith("heu")
  ) {
    const question = new SummaryCreate(
      attempt,
      symbol,
      setting,
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
      updateProblems(level, state, setting, regen); // display.js
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
function questionTimer() {
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
  calRange = [];
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

function calArrAll(
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

function checkRange(setting, arr, skipArr, skipGlobalUpdateProblem) {
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
        updateProblems(level, state, setting, regen);
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

function drawHorizontalLine(x, y, right, adjust) {
  ctx.save();

  // straight line
  ctx.translate(x, y);

  ctx.beginPath();
  ctx.moveTo(0, adjust);
  ctx.lineTo(right, adjust);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(5, adjust - 5);
  ctx.lineTo(0, adjust);
  ctx.lineTo(5, adjust + 5);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(right - 5, adjust - 5);
  ctx.lineTo(right, adjust);
  ctx.lineTo(right - 5, adjust + 5);
  ctx.stroke();
  ctx.restore();
}

function drawVerticalLine(x, y, bottom, adjust) {
  ctx.save();

  // straight line
  ctx.translate(x, y);

  ctx.beginPath();
  ctx.moveTo(adjust, 0);
  ctx.lineTo(adjust, bottom);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(adjust + 5, 5);
  ctx.lineTo(adjust + 0, 0);
  ctx.lineTo(adjust - 5, 5);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(adjust + 5, bottom - 5);
  ctx.lineTo(adjust + 0, bottom);
  ctx.lineTo(adjust - 5, bottom - 5);
  ctx.stroke();
  ctx.restore();
}
//////////////////// DISPLAY PROBLEMS ////////////////////

// Step 3: Updating, storing and then displaying the problem
// 1. generate new problem and store the question in state object
// 2. Also to visual update the HTML
// This used to be where updateProblems() is until is has been exported to display.js

ourForm.addEventListener("submit", handleSubmit);
ourForm2.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (player == 1) {
    // if (userInput.value == "") alert("Please input a value")
    let correctAnswer;
    let correctAnswerTwo;
    let correctAnswerArr = [];
    console.log(userInput2.value);
    const p = state.currentProblem;

    // Determining answer -> Turn this into a function!
    if (level == 1 || level == 3) {
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo;
      if (p.operator == "-") {
        if (p.numOne >= p.numTwo) {
          correctAnswer = p.numOne - p.numTwo;
        } else {
          correctAnswer = p.numTwo - p.numOne;
        }
      }
    }

    if (level == 1.02) {
      if (p.operator == "+") {
        correctAnswer = p.numOne + p.numTwo;
      }
      if (p.operator == "-") {
        correctAnswer = p.numOne - p.numTwo;
      }
    }

    if (level == 1.01 || level == 2.01 || level == 3.01) {
      if (p.operator == "x") correctAnswer = p.numThree * p.numFour;
      if (p.operator == "÷")
        correctAnswer = (p.numThree * p.numFour) / p.numThree;
    }

    if (level == 1.03) {
      if (p.operator == "+") {
        correctAnswer = p.numOne + p.numTwo;
      }
      if (p.operator == "-") {
        correctAnswer = p.numOne - p.numTwo;
      }
      if (p.operator == "x") correctAnswer = p.numThree * p.numFour;
      if (p.operator == "÷")
        correctAnswer = (p.numThree * p.numFour) / p.numThree;
    }

    if (level == 1.04) {
      if (p.option == "c" && p.operator == "+") {
        correctAnswer = "c-";
      }
      if (p.option == "c" && p.operator == "-") {
        correctAnswer = "c+";
      }
      if (p.option == "d") {
        correctAnswer = "d-";
      }
      if (p.option == "r" && p.operator == "+") {
        correctAnswer = "r+";
      }
      if (p.option == "r" && p.operator == "-") {
        correctAnswer = "r-";
      }
    }

    if (level == 1.05) {
      if (p.option == "c" && p.optionThree == "more") {
        correctAnswer = "c-";
      }
      if (p.option == "c" && p.optionThree == "less") {
        correctAnswer = "c+";
      }
      if (p.option == "d") {
        correctAnswer = "d-";
      }
      if (p.option == "r" && p.optionThree == "more") {
        correctAnswer = "r+";
      }
      if (p.option == "r" && p.optionThree == "less") {
        correctAnswer = "r-";
      }
    }

    if (level == 1.06) {
      if (p.optionFinal == "1") {
        if (p.operator == "+" && p.operatorTwo == "+") {
          correctAnswer = p.numOne + p.numTwo - p.numThree;
        }
        if (p.operator == "+" && p.operatorTwo == "-") {
          correctAnswer = p.numOne + p.numTwo - p.numThree;
        }
        if (p.operator == "-" && p.operatorTwo == "+") {
          correctAnswer = p.numOne - p.numTwo - p.numThree;
        }
        if (p.operator == "-" && p.operatorTwo == "-") {
          correctAnswer = p.numOne - p.numTwo - p.numThree;
        }
        if (correctAnswer < 0) {
          correctAnswer = correctAnswer * -1;
        }
      }
      if (p.optionFinal == "2") {
        if (p.operator == "+" && p.operatorTwo == "+") {
          correctAnswer = p.numOne + p.numTwo - p.numFour;
        }
        if (p.operator == "+" && p.operatorTwo == "-") {
          correctAnswer = p.numOne + p.numTwo + p.numFour;
        }
        if (p.operator == "-" && p.operatorTwo == "+") {
          correctAnswer = p.numOne - p.numTwo - p.numFour;
        }
        if (p.operator == "-" && p.operatorTwo == "-") {
          correctAnswer = p.numOne - p.numTwo + p.numFour;
        }
        if (correctAnswer < 0) {
          correctAnswer = correctAnswer * -1;
        }
      }
      if (p.optionFinal == "3") {
        if (p.operator == "+" && p.operatorTwo == "+") {
          correctAnswer = p.numThree + p.numFour - p.numOne;
        }
        if (p.operator == "+" && p.operatorTwo == "-") {
          correctAnswer = p.numThree - p.numFour - p.numOne;
        }
        if (p.operator == "-" && p.operatorTwo == "+") {
          correctAnswer = p.numThree + p.numFour - p.numOne;
        }
        if (p.operator == "-" && p.operatorTwo == "-") {
          correctAnswer = p.numThree - p.numFour - p.numOne;
        }
        if (correctAnswer < 0) {
          correctAnswer = correctAnswer * -1;
        }
      }
      if (p.optionFinal == "4") {
        if (p.operator == "+" && p.operatorTwo == "+") {
          correctAnswer = p.numThree + p.numFour - p.numTwo;
        }
        if (p.operator == "+" && p.operatorTwo == "-") {
          correctAnswer = p.numThree - p.numFour - p.numTwo;
        }
        if (p.operator == "-" && p.operatorTwo == "+") {
          correctAnswer = p.numThree + p.numFour + p.numTwo;
        }
        if (p.operator == "-" && p.operatorTwo == "-") {
          correctAnswer = p.numThree - p.numFour + p.numTwo;
        }
        if (correctAnswer < 0) {
          correctAnswer = correctAnswer * -1;
        }
      }
    }

    if (level == 1.07) {
      if (p.numOne > p.numThree) {
        correctAnswer = p.numOne - p.numThree;
      } else if (p.numThree > p.numOne && p.option == "2") {
        correctAnswer = p.numThree + p.numOne;
      } else {
        correctAnswer = p.numThree - p.numOne;
      }
    }

    if (level == 1.08) {
      if (p.choice == "division") correctAnswer = p.multiplier;
      if (p.choice == "multiply") correctAnswer = p.numOne;
    }

    if (level == 2) {
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo;
      if (p.operator == "-") {
        if (p.numOne >= p.numTwo) {
          correctAnswer = p.numOne - p.numTwo;
        } else {
          correctAnswer = p.numTwo - p.numOne;
        }
      }
    }

    if (level == 2.02) {
      if (p.place == "ones") correctAnswer = arr2[0];
      if (p.place == "tens") correctAnswer = arr2[1];
      if (p.place == "hundreds") correctAnswer = arr2[2];
      if (p.place == "thousands") correctAnswer = arr2[3];
      if (p.place == "ten thousands") correctAnswer = arr2[4];
      if (p.place == "hundred thousands") correctAnswer = arr2[5];
      if (p.place == "millions") correctAnswer = arr2[6];
    }

    if (level == 2.04) {
      correctAnswer = p.numOne;
    }

    if (level == 2.05) {
      if (p.evenOrOdd == "even") {
        if (p.landingNumber % 2 == 0) {
          console.log("Choice 1");
          correctAnswer = p.finalNumber;
        } else {
          console.log("Choice 2");
          correctAnswer = `${p.landingNumber} ${p.finalNumber}`;
          correctAnswerTwo = `${p.finalNumber}`;
        }
      }

      if (p.evenOrOdd == "odd") {
        if (p.landingNumber % 2 != 0) {
          console.log("Choice 3");
          correctAnswer = p.finalNumber;
        } else {
          console.log("Choice 4");
          correctAnswer = `${p.landingNumber} ${p.finalNumber}`;
          correctAnswerTwo = `${p.finalNumber}`;
        }
      }
    }

    if (level == 2.06) {
      correctAnswer = p.numTwo;
    }

    if (level == 2.07) {
      if (p.option == "1") {
        const a = p.numOne / p.numThree;
        const b = p.numOne / p.numFour;
        if (p.bigOrSmall == "1") {
          if (a > b) {
            correctAnswer = "2";
          } else {
            correctAnswer = "1";
          }
        }
        if (p.bigOrSmall == "2") {
          if (a > b) {
            correctAnswer = "1";
          } else {
            correctAnswer = "2";
          }
        }
      }
      if (p.option == "2") {
        const a = p.numFive / p.numTwo;
        const b = p.numSix / p.numTwo;
        if (p.bigOrSmall == "1") {
          if (a > b) {
            correctAnswer = "2";
          } else {
            correctAnswer = "1";
          }
        }
        if (p.bigOrSmall == "2") {
          if (a > b) {
            correctAnswer = "1";
          } else {
            correctAnswer = "2";
          }
        }
      }
    }

    if (level == 2.08) {
      if (p.operator == "+") {
        if (p.numTwo + p.numFour >= 60) {
          correctAnswer = `${p.numOne + p.numThree}${p.minHours}${
            p.numTwo + p.numFour
          }${p.minSeconds}=${p.numOne + p.numThree + 1}${p.minHours}${
            p.numTwo + p.numFour - 60
          }${p.minSeconds}`;
        } else if (p.numOne == p.numThree && p.numOne == 0) {
          correctAnswer = `${p.numTwo + p.numFour}${p.minSeconds}`;
        } else {
          correctAnswer = `${p.numOne + p.numThree}${p.minHours}${
            p.numTwo + p.numFour
          }${p.minSeconds}`;
        }
        // if (p.numOne == p.numThree && p.numOne == 0){
        //   correctAnswer =`${p.numTwo+p.numFour}${p.minSeconds}`
        // }
      }
      if (p.operator == "-") {
        if (p.numTwo - p.numFour < 0) {
          correctAnswer = `${p.numOne - 1}${p.minHours}${p.numTwo + 60}${
            p.minSeconds
          },${p.numOne - p.numThree - 1}${p.minHours}${
            p.numTwo + 60 - p.numFour
          }${p.minSeconds}`;
        } else {
          correctAnswer = `${p.numOne - p.numThree}${p.minHours}${
            p.numTwo - p.numFour
          }${p.minSeconds}`;
        }
        if (p.numOne == p.numThree) {
          correctAnswer = `${p.numTwo - p.numFour}${p.minSeconds}`;
        }
      }
    }

    if (level == 2.09) {
      let finalHours = p.timeHours;
      if (p.amOrPm == "pm" && p.timeHours < 12) {
        finalHours += 12;
      }
      if (p.amOrPm == "am" && p.timeHours == 12) {
        finalHours -= 12;
      }
      let totalMinutes = finalHours * 60 + p.timeMinutes;
      console.log(`Total minutes: ${totalMinutes}`);
      // total minutes = 24x60=1440
      // am range = 11x60+59=719
      // pm range = 780 to 1439
      let amOrPm2 = undefined;
      if (p.situation == "later") {
        if (p.roll == "mins") {
          let finalMinutes = totalMinutes + p.changeMinutes;
          console.log(`Final Minutes: ${finalMinutes}`);
          let hours = Math.floor(finalMinutes / 60);
          if (finalMinutes < 60) {
            hours = 12;
          }
          if (hours > 12 && hours < 25) {
            hours -= 12;
          }
          if (hours >= 25) {
            hours -= 24;
          }
          if (finalMinutes <= 719 || finalMinutes >= 1440) {
            amOrPm2 = "am";
          } else {
            amOrPm2 = "pm";
          }

          if (p.timeMinutes + p.changeMinutes == 0) {
            correctAnswer = `${hours}${amOrPm2}`;
          } else if (p.timeMinutes + p.changeMinutes == 60) {
            correctAnswer = `${p.timeHours}.60=${hours}${amOrPm2}`;
          } else if (
            p.timeMinutes + p.changeMinutes >= 60 &&
            p.timeMinutes + p.changeMinutes - 60 < 10
          ) {
            correctAnswer = `${p.timeHours}.${
              p.timeMinutes + p.changeMinutes
            }=${hours}.0${finalMinutes % 60}${amOrPm2}`;
          } else if (p.timeMinutes + p.changeMinutes >= 60) {
            correctAnswer = `${p.timeHours}.${
              p.timeMinutes + p.changeMinutes
            }=${hours}.${finalMinutes % 60}${amOrPm2}`;
          } else if (finalMinutes % 60 < 10) {
            correctAnswer = `${hours}.0${finalMinutes % 60}${amOrPm2}`;
          } else {
            correctAnswer = `${hours}.${finalMinutes % 60}${amOrPm2}`;
          }
        }
        if (p.roll == "hours") {
          let finalMinutes = totalMinutes + p.changeHours * 60;
          console.log(`Final Minutes: ${finalMinutes}`);
          let hours = Math.floor(finalMinutes / 60);
          if (hours > 12 && hours < 25) {
            hours -= 12;
          }
          if (hours >= 25) {
            hours -= 24;
          }
          if (finalMinutes <= 719 || finalMinutes >= 1440) {
            amOrPm2 = "am";
          } else {
            amOrPm2 = "pm";
          }

          if (finalMinutes % 60 == 0) {
            correctAnswer = `${hours}${amOrPm2}`;
          } else if (finalMinutes % 60 < 10) {
            correctAnswer = `${hours}.0${finalMinutes % 60}${amOrPm2}`;
          } else {
            correctAnswer = `${hours}.${finalMinutes % 60}${amOrPm2}`;
          }
        }
      }
      if (p.situation == "before") {
        if (p.roll == "mins") {
          let finalMinutes = totalMinutes - p.changeMinutes;
          if (finalMinutes <= 0) {
            finalMinutes += 1440;
          }
          console.log(`Final Minutes: ${finalMinutes}`);
          let hours = Math.floor(finalMinutes / 60);
          if (hours > 12 && hours < 25) {
            hours -= 12;
          }
          if (hours >= 25) {
            hours -= 24;
          }
          if (finalMinutes <= 719 || finalMinutes >= 1440) {
            amOrPm2 = "am";
          } else {
            amOrPm2 = "pm";
          }

          if (p.timeMinutes - p.changeMinutes == 0) {
            correctAnswer = `${hours}${amOrPm2}`;
          } else if (p.timeMinutes - p.changeMinutes < 0) {
            correctAnswer = `${hours}.${p.timeMinutes + 60},${hours}.${
              finalMinutes % 60
            }${amOrPm2}`;
          } else if (finalMinutes % 60 < 10) {
            correctAnswer = `${hours}.0${finalMinutes % 60}${amOrPm2}`;
          } else {
            correctAnswer = `${hours}.${finalMinutes % 60}${amOrPm2}`;
          }

          if (hours == 0) {
            correctAnswer = `12.${finalMinutes % 60}${amOrPm2}`;
          }
        }

        if (p.roll == "hours") {
          let finalMinutes = totalMinutes - p.changeHours * 60;
          if (finalMinutes <= 0) {
            finalMinutes += 1440;
          }
          console.log(`Final Minutes: ${finalMinutes}`);
          let hours = Math.floor(finalMinutes / 60);
          if (hours > 12 && hours < 25) {
            hours -= 12;
          }
          if (hours >= 25) {
            hours -= 24;
          }
          if (finalMinutes <= 719 || finalMinutes >= 1440) {
            amOrPm2 = "am";
          } else {
            amOrPm2 = "pm";
          }
          if (hours == 0) {
            hours = 12;
          }

          if (finalMinutes % 60 == 0) {
            correctAnswer = `${hours}${amOrPm2}`;
          } else if (finalMinutes % 60 < 10) {
            correctAnswer = `${hours}.0${finalMinutes % 60}${amOrPm2}`;
          } else {
            correctAnswer = `${hours}.${finalMinutes % 60}${amOrPm2}`;
          }
        }
      }
    }

    if (level == 2.1) {
      correctAnswer = `${p.hour}.${p.min.toString().padStart(2, "0")}`;
    }
    if (level == 3.02) {
      if (p.option == "1") {
        correctAnswer = p.numOne * p.numMultiTwo * p.numMulti;
      }
      if (p.option == "2") {
        if (p.numPlace == "tens") {
          correctAnswer = p.numOne * 10 * p.numMultiTwo;
        }
        if (p.numPlace == "hundreds") {
          correctAnswer = p.numOne * 100 * p.numMultiTwo;
        }
        if (p.numPlace == "thousands") {
          correctAnswer = p.numOne * 1000 * p.numMultiTwo;
        }
      }
      if (p.option == "3" || p.option == "4") {
        correctAnswer = p.numOne * p.numMultiTwo;
      }
    }

    if (level == 3.03 || level == 2.03 || level == 4.04 || level == 6.3) {
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo;
      if (p.operator == "-") {
        if (p.numOne >= p.numTwo) {
          correctAnswer = p.numOne - p.numTwo;
        } else {
          correctAnswer = p.numTwo - p.numOne;
        }
      }
      if (p.operator == "x") correctAnswer = p.numThree * p.numFour;
      if (p.operator == "÷")
        correctAnswer = (p.numThree * p.numFour) / p.numThree;
    }

    if (level == 3.04) {
      correctAnswer = p.numOne * p.numTwo;
    }

    if (level == 3.05) {
      if (
        p.unitMeasurement == "kg" ||
        p.unitMeasurement == "ℓ" ||
        p.unitMeasurement == "km"
      ) {
        correctAnswer = p.numOne * p.numTwo + p.numFour;
      } else {
        correctAnswer = p.numOne * p.numTwo + p.numThree;
      }
    }

    if (level == 3.06) {
      console.log(p.numOne, p.numTwo);
      p.remainder = p.numOne % p.numTwo;
      if (p.unitMeasurement == "$") {
        if (p.numOne % 10 == 0) {
          console.log(p.numTwo);
          correctAnswer = p.unitMeasurement + p.numOne / 100 + 0;
        } else {
          correctAnswer = p.unitMeasurement + p.numOne / 100;
        }
      } else if (p.unitMeasurement == "m") {
        correctAnswer =
          Math.floor(p.numOne / 100) +
          p.unitMeasurement +
          p.remainder +
          p.secondUnitMeasurement;
      } else if (p.unitMeasurement == "min") {
        correctAnswer =
          Math.floor(p.numOne / 60) +
          p.unitMeasurement +
          p.remainder +
          p.secondUnitMeasurement;
      } else {
        if (p.unitMeasurement == "ℓ") {
          correctAnswer =
            Math.floor(p.numOne / p.numTwo) + "L" + p.remainder + "ml";
        } else {
          correctAnswer =
            Math.floor(p.numOne / p.numTwo) +
            p.unitMeasurement +
            p.remainder +
            p.secondUnitMeasurement;
          console.log(`The correct answer is ${correctAnswer}`);
        }
      }
    }

    // ANSWER
    if (level == 3.07) {
      arr.sort(function (a, b) {
        return b - a;
      });
      let i = 0;
      let a = 0;
      commonMultipleArr.push(arr[0]);
      while (commonMultipleArr[i] % arr[1] != 0) {
        const something = arr[0] * (i + 2);
        commonMultipleArr.push(something);
        i++;
      }
      commonMultipleArrTwo.push(
        commonMultipleArr[commonMultipleArr.length - 1]
      );
      while (commonMultipleArrTwo[a] % arr[2] != 0) {
        const somethingTwo = commonMultipleArrTwo[0] * (a + 2);
        commonMultipleArrTwo.push(somethingTwo);
        a++;
      }
      if (commonMultipleArrTwo.length > 1) {
        if (commonMultipleArrTwo[0] == commonMultipleArrTwo[1]) {
          correctAnswer = commonMultipleArrTwo[0];
        } else {
          correctAnswer =
            commonMultipleArrTwo[0] +
            ", " +
            commonMultipleArrTwo[commonMultipleArrTwo.length - 1];
          correctAnswerTwo =
            commonMultipleArrTwo[commonMultipleArrTwo.length - 1];
        }
      } else {
        correctAnswer = commonMultipleArrTwo[0];
      }

      console.log(commonMultipleArrTwo);
    }

    if (level == 3.08) {
      if (p.amOrPmOne == "pm") {
        p.hoursOne += 12;
      }
      if (p.amOrPmTwo == "pm") {
        p.hoursTwo += 12;
      }
      if (p.minsTwo > p.minsOne) {
        if (p.hoursOne == p.hoursTwo) {
          correctAnswer = `${p.minsTwo - p.minsOne}mins`;
        } else if (p.minsTwo == 0) {
          correctAnswer = `${60 - p.minsOne}+${p.hoursTwo - p.hoursOne - 1}`;
        } else {
          correctAnswer = `${p.minsTwo - p.minsOne}mins+${
            p.hoursTwo - p.hoursOne
          }h`;
        }
      }
      if (p.minsTwo < p.minsOne) {
        if (p.hoursTwo - p.hoursOne == 1) {
          correctAnswer = `${60 - p.minsOne}mins+${p.minsTwo}mins`;
        } else {
          correctAnswer = `${60 - p.minsOne}mins+${
            p.hoursTwo - p.hoursOne - 1
          }h+${p.minsTwo}mins`;
        }
      }
      if (p.minsTwo == p.minsOne) {
        correctAnswer = `${p.hoursTwo - p.hoursOne}h`;
      }
    }

    if (level == 3.09) {
      for (let i = p.numLargest; i > 1; i--) {
        if (p.numOne % i == 0 && p.numTwo % i == 0) {
          p.numOne /= i;
          p.numTwo /= i;
          correctAnswer = p.numOne + "/" + p.numTwo;
        }
      }
      if (p.numOne == 1) {
        correctAnswer = p.numOne + "/" + p.numTwo;
      } else {
        correctAnswer = p.numOne + "/" + p.numTwo;
      }
    }

    if (level == 3.1) {
      if (p.option == "1") {
        correctAnswer = p.numTwo * p.numMulti;
      } else {
        correctAnswer = p.numOne * p.numMulti;
      }
    }

    if (level == 3.11) {
      // level 3.09
      if (p.optionFinal == "1") {
        for (let i = p.numLargest; i > 1; i--) {
          if (p.numOne % i == 0 && p.numTwo % i == 0) {
            p.numOne /= i;
            p.numTwo /= i;
            correctAnswer = p.numOne + "/" + p.numTwo;
          }
        }
        if (p.numOne == 1) {
          correctAnswer = p.numOne + "/" + p.numTwo;
        } else {
          correctAnswer = p.numOne + "/" + p.numTwo;
        }
      }
      // level 3.10
      if (p.optionFinal == "2") {
        if (p.option == "1") {
          correctAnswer = p.numTwo * p.numMulti;
        } else {
          correctAnswer = p.numOne * p.numMulti;
        }
      }
    }

    if (level == 3.12) {
      correctAnswer = p.count * p.side * p.side;
    }

    if (level == 3.13) {
      if (p.numThree > p.numTwo) {
        correctAnswer = `${p.numThree}n-${p.numThree - p.numTwo} ${
          p.numThree * p.numFour + (p.numTwo - p.numThree)
        }`;
      } else if (p.numThree == p.numTwo) {
        correctAnswer = `${p.numThree}n ${p.numThree * p.numFour}`;
      } else {
        correctAnswer = `${p.numThree}n+${p.numTwo - p.numThree} ${
          p.numThree * p.numFour + (p.numTwo - p.numThree)
        }`;
      }
    }

    if (level == 3.14) {
      correctAnswer =
        p.numFive +
        "x" +
        p.numFive +
        "=" +
        p.numFive * p.numFive +
        " " +
        (p.numFive + p.numSix);
    }

    if (level == 3.15) {
      let remainder = (p.position % arr.length) - 1;
      if (remainder < 0) {
        remainder = arr.length - 1;
      }
      console.log(remainder);
      correctAnswer = arr[remainder];
    }

    if (level == 3.16) {
      if (setting == 5) {
        correctAnswer = `${p.numOne + 1}x${p.numOne}/2`;
      }
      // level 3.12
      if (setting == 1) {
        correctAnswer = p.numOne + 1 + "x" + p.numOne + "/2";
      }
      // level 3.13
      if (setting == 2) {
        if (p.numThree > p.numTwo) {
          correctAnswer = `${p.numThree}n-${p.numThree - p.numTwo} ${
            p.numThree * p.numFour + (p.numTwo - p.numThree)
          }`;
        } else if (p.numThree == p.numTwo) {
          correctAnswer = `${p.numThree}n ${p.numThree * p.numFour}`;
        } else {
          correctAnswer = `${p.numThree}n+${p.numTwo - p.numThree} ${
            p.numThree * p.numFour + (p.numTwo - p.numThree)
          }`;
        }
      }
      // level 3.14
      if (setting == 3) {
        correctAnswer =
          p.numFive +
          "x" +
          p.numFive +
          "=" +
          p.numFive * p.numFive +
          " " +
          (p.numFive + p.numSix);
      }
      // level 3.15
      if (setting == 4) {
        if (p.question == "A") {
          let remainder = (p.position % arr.length) - 1;
          if (remainder < 0) {
            remainder = arr.length - 1;
          }
          console.log(remainder);
          correctAnswer = arr[remainder];
        }
        if (p.question == "B") {
          if (p.rollType == "A") {
            let sum = 0;
            let a = 0;
            for (let i = 0; i < p.position; i++) {
              sum += arr[a];
              a += 1;
              if (a == arr.length) a = 0;
            }
            correctAnswer = sum;
          }
          if (p.rollType == "B") {
            let count = 0;
            arr.forEach((item) => {
              if (item == p.alphabet) count += 1;
            });

            const remainder = p.position % arr.length;
            const sets = Math.floor(p.position / arr.length);
            let countTwo = 0;
            for (let i = 0; i < remainder; i++) {
              if (arr[i] == p.alphabet) countTwo += 1;
            }
            correctAnswer = sets * count + countTwo;
          }
        }
      }
    }

    if (level == 3.17) {
      if (p.arcAngle > 80 && p.arcAngle < 100) {
        if (p.arcAngle > 90) {
          p.arcAngle += +20;
        } else {
          p.arcAngle -= 20;
        }
      }
      if (p.acuteOrObtuse == "acute") {
        if (p.arcAngle < 90) {
          correctAnswer = "a";
        } else {
          correctAnswer = "b";
        }
      }
      if (p.acuteOrObtuse == "obtuse") {
        if (p.arcAngle < 90) {
          correctAnswer = "b";
        } else {
          correctAnswer = "a";
        }
      }
    }

    if (level == 3.18) {
      if (p.parallelOrPerpendicular == "parallel") {
        correctAnswer = p.labelGHI + p.labelJKL;
        correctAnswerTwo = p.labelJKL + p.labelGHI;
      } else {
        correctAnswer = p.labelMNO + p.labelPQR;
        correctAnswerTwo = p.labelPQR + p.labelMNO;
      }
    }

    if (level == 3.19) {
      // if (difficulty == 1 || (difficulty == 9 && p.rollx == 0)) {
      if (setting == 1) {
        if (p.shapeChoice == "square") {
          if (p.areaOrPerimeter == "area") {
            correctAnswer = p.squareSide * p.squareSide;
          }
          if (p.areaOrPerimeter == "perimeter") {
            correctAnswer = p.squareSide * 4;
          }
        }
        if (p.shapeChoice == "rectangle") {
          if (p.areaOrPerimeter == "area") {
            correctAnswer = p.rectLength * p.rectBreadth;
          }
          if (p.areaOrPerimeter == "perimeter") {
            correctAnswer = (p.rectLength + p.rectBreadth) * 2;
          }
        }
      }
      // if (difficulty == 2 || (difficulty == 9 && p.rollx == 1)) {
      if (setting == 2) {
        if (p.shapeChoice == "square") {
          correctAnswer = p.squareSide;
        }
        if (p.shapeChoice == "rectangle") {
          if (p.side == "breadth") {
            correctAnswer = p.rectBreadth;
          }
          if (p.side == "length") {
            correctAnswer = p.rectLength;
          }
        }
      }
    }

    if (level == 4.0) {
      for (let i = 1; i <= p.numOne / i; i++) {
        if (p.numOne % i == 0) {
          arr.push(`${i}x${p.numOne / i}`);
          // arr.push(p.numOne/i);
        }
      }
      console.log(arr);
      correctAnswer = arr.join(", ");
    }

    if (level == 4.01) {
      if (p.placeValue == "tens") {
        correctAnswer = Math.round(p.numOne / 10) * 10;
      }
      if (p.placeValue == "hundreds") {
        correctAnswer = Math.round(p.numOne / 100) * 100;
      }
      if (p.placeValue == "thousands") {
        correctAnswer = Math.round(p.numOne / 1000) * 1000;
      }
      if (p.placeValue == "ten thousands") {
        correctAnswer = Math.round(p.numOne / 10000) * 10000;
      }
    }
    if (level == 4.02) {
      correctAnswer = p.numOne;
    }
    if (level == 4.161) {
      if (p.placeValue == "thousandths") correctAnswer = arr2[0];
      if (p.placeValue == "hundredths") correctAnswer = arr2[1];
      if (p.placeValue == "tenths") correctAnswer = arr2[2];
      if (p.placeValue == "ones") correctAnswer = arr2[3];
      if (p.placeValue == "tens") correctAnswer = arr2[4];
      if (p.placeValue == "hundreds") correctAnswer = arr2[5];
      if (p.placeValue == "thousands") correctAnswer = arr2[6];
    }

    // if (level == 4.03) {
    //   if (p.placeValue == "Whole Number") {
    //     // correctAnswer = (Math.round(p.numFinal)).toString()
    //     correctAnswer = p.numFinal.toFixed();
    //   }
    //   if (p.placeValue == "1 decimal place" || p.placeValue == "tenth place") {
    //     p.ansFinal = Math.round(p.numFinal * 10000) / 10000;
    //     // if ((p.ansFinal*10)%10 == 0){
    //     //   correctAnswer = (p.ansFinal + ".0").toString()
    //     // } else {
    //     // correctAnswer = p.ansFinal.toString()
    //     // }
    //     correctAnswer = p.ansFinal.toFixed(1);
    //   }
    //   if (
    //     p.placeValue == "2 decimal place" ||
    //     p.placeValue == "hundredth place"
    //   ) {
    //     p.ansFinal = Math.round(p.numFinal * 10000) / 10000;
    //     // console.log(p.ansFinal)
    //     // if ((p.ansFinal*100)%(100) == 0){
    //     //   correctAnswer = (p.ansFinal + ".00").toString()
    //     // } else if ((p.ansFinal*100)%(10) == 0){
    //     //   correctAnswer = (p.ansFinal + "0").toString()
    //     // } else {
    //     // correctAnswer = p.ansFinal.toString()
    //     // }
    //     correctAnswer = p.ansFinal.toFixed(2);
    //   }
    //   decimalCheck(correctAnswer);
    // }

    if (level == 4.03) {
      if (setting == 1) {
        console.log(p.chosen, p.size);
        if (p.chosen == 0 && p.size == "Smaller") {
          correctAnswer = 1;
        }
        if (p.chosen == 1 && p.size == "Smaller") {
          correctAnswer = 2;
        }
        if (p.chosen == 0 && p.size == "Bigger") {
          correctAnswer = 2;
        }
        if (p.chosen == 1 && p.size == "Bigger") {
          correctAnswer = 1;
        }
        if (setting == 2) {
          console.log("Developing");
        }
      }
      if (setting == 2) {
        const deciOne = (p.numOne / p.denoOneUse).toFixed(3);
        const deciTwo = (p.numTwo / p.denoTwoUse).toFixed(3);
        let min = deciOne;
        let max = deciTwo;
        deciTwo < deciOne ? ([min, max] = [deciTwo, deciOne]) : null;
        if (p.size == "Smaller") {
          if (min == deciOne) correctAnswer = 1;
          if (min == deciTwo) correctAnswer = 2;
        }
        if (p.size == "Bigger") {
          if (max == deciOne) correctAnswer = 1;
          if (max == deciTwo) correctAnswer = 2;
        }
        console.log(min, max);
      }
    }
    if (level == 4.04) {
      if (setting == 1) {
        for (let i = p.numThree; i > 1; i--) {
          if (p.numTwo % i == 0 && p.numThree % i == 0) {
            p.numTwo /= i;
            p.numThree /= i;
          }
        }
        console.log(p.numThree, arr[0]);
        p.numFour = p.numOne * p.numThree + p.numTwo;
        if (p.numThree != arr[0]) {
          correctAnswer = `${p.numOne} ${p.numTwo}/${p.numThree}=${p.numFour}/${p.numThree}`;
        } else if (p.numTwo == 1) {
          p.numFour = p.numOne * p.numThree + p.numTwo;
          correctAnswer = p.numFour + "/" + p.numThree;
        } else {
          correctAnswer = p.numFour + "/" + p.numThree;
        }
      }
      if (setting == 2) {
        // level 4.10
        for (let i = p.numTwo; i > 1; i--) {
          if (p.numTwo % i == 0 && p.numThree % i == 0) {
            p.numTwo /= i;
            p.numThree /= i;
          }
        }
        if (p.numThree != arr[1]) {
          correctAnswer = `${p.numOne} ${arr[0]}/${arr[1]}=${p.numOne} ${
            p.numTwo % p.numThree
          }/${p.numThree}`;
        } else {
          correctAnswer =
            p.numOne + " " + (p.numTwo % p.numThree) + "/" + p.numThree;
        }
      }
    }
    if (level == 4.05) {
      if (setting == 1 || (setting == 9 && p.rollChoice == 1)) {
        correctAnswer = `${p.numMulti * p.numTwo}`;
      }
      if (setting == 2 || (setting == 9 && p.rollChoice == 2)) {
        correctAnswer = ((p.deno * p.numMulti) / p.deno) * p.nume;
      }
    }

    if (level == 4.06) {
      if (p.rollTypeClue == "11") {
        if (p.rollTypeQnSyn == "isof") {
          if (p.rollTypeQn11 == "1T") {
            correctAnswer = `${p.oneValue}/${p.oneValue + p.twoValue}`;
          } else {
            correctAnswer = `${p.oneValue + p.twoValue}/${p.oneValue}`;
          }
        }
        if (p.rollTypeQnSyn == "ofis") {
          if (p.rollTypeQn11 != "1T") {
            correctAnswer = `${p.oneValue}/${p.oneValue + p.twoValue}`;
          } else {
            correctAnswer = `${p.oneValue + p.twoValue}/${p.oneValue}`;
          }
        }
      }
      if (p.rollTypeClue == "1T") {
        if (p.rollTypeQnSyn == "isof") {
          if (p.rollTypeQn1T == "AB") {
            correctAnswer = `${p.oneValue}/${p.twoValue}`;
          } else {
            correctAnswer = `${p.twoValue}/${p.oneValue}`;
          }
        }
        if (p.rollTypeQnSyn == "ofis") {
          if (p.rollTypeQn1T == "AB") {
            correctAnswer = `${p.twoValue}/${p.oneValue}`;
          } else {
            correctAnswer = `${p.oneValue}/${p.twoValue}`;
          }
        }
      }
    }

    if (level == 4.07) {
      if (p.placeValue == "thousandths") correctAnswer = arr2[0];
      if (p.placeValue == "hundredths") correctAnswer = arr2[1];
      if (p.placeValue == "tenths") correctAnswer = arr2[2];
      if (p.placeValue == "ones") correctAnswer = arr2[3];
      if (p.placeValue == "tens") correctAnswer = arr2[4];
      if (p.placeValue == "hundreds") correctAnswer = arr2[5];
      if (p.placeValue == "thousands") correctAnswer = arr2[6];
    }

    if (level == 4.08) {
      correctAnswer = p.num.toFixed(p.pos);
    }

    if (level == 4.09) {
      if (p.numOne / p.numTwo < 1) {
        correctAnswer = `${p.numOne}/${p.numTwo}`;
      } else {
        correctAnswer =
          Math.floor(p.numOne / p.numTwo) +
          " " +
          (p.numOne % p.numTwo) +
          "/" +
          p.numTwo;
      }
    }

    if (level == 4.1) {
      if (p.operator == "x") {
        correctAnswer =
          Math.round((p.numOne / p.numTwo) * p.numThree * 10000) / 10000;
      } else {
        correctAnswer =
          Math.round((p.numOne / p.numTwo / p.numThree) * 10000) / 10000;
      }
    }

    if (level == 4.11) {
      if (setting == 1) {
        correctAnswer = p.sumOfNum * 1000;
        if (p.firstUnit == "m" || p.firstUnit == "$") {
          correctAnswer = p.sumOfNum * 100;
        }
        console.log(correctAnswer);
      }
      if (setting == 2) {
        correctAnswer = p.sumOfNum;
      }
      correctAnswer = accDecimal(correctAnswer);
      console.log(typeof correctAnswer);
    }

    if (level == 4.13) {
      console.log(p.type, p.hours);
      if (p.type == 24) {
        let time12hr = p.hours;
        if (p.hours > 12) time12hr = p.hours - 12;
        if (p.hours > 0 && p.hours < 12) {
          correctAnswer = `${time12hr}.${p.mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}am`;
        } else if (p.hours == 0) {
          correctAnswer = `12.${p.mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}am`;
        } else {
          correctAnswer = `${time12hr}.${p.mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}pm`;
        }
      }
      // ANSWER IN 24 HOUR CLOCK
      if (p.type == 12) {
        if (p.hours == 12) {
          correctAnswer = `00 ${p.mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}`;
        } else {
          correctAnswer = `${p.hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })} ${p.mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}`;
        }
      }
    }

    if (level == 4.14) {
      if (p.option == "r") {
        correctAnswer = "r";
      }
      if (p.option == "v") {
        correctAnswer = "v";
      }
      if (p.option == "f") {
        correctAnswer = "f";
      }
    }

    // if (level == 4.15) {
    //   let index = p.type[p.identity].indexOf(p.secondSelection);
    //   let oneUnit = undefined;
    //   if (index == 0) {
    //     oneUnit = p.value / p.numerator;
    //   }
    //   if (index == 1) {
    //     oneUnit = p.value / (p.denominator - p.numerator);
    //   }
    //   if (index == 2) {
    //     oneUnit = p.value / p.denominator;
    //   }
    //   if (p.secondSelection == 3) {
    //     oneUnit = p.value / p.differenceUnit;
    //   }
    //   console.log(oneUnit);
    //   correctAnswer = oneUnit * p.lastUnits;
    // }

    if (level == 4.15) {
      const columnArr = ["A", "B", "C", "D"];
      if (p.type == "repeat") {
        if (p.question == "columnRow") {
          let column = p.number % 4;
          column -= 1;
          if (column < 0) column = columnArr.length - 1;
          const row = Math.floor(p.number / 4);
          if (p.number % 4 == 0) {
            correctAnswer = `${columnArr[column]}, ${row}`;
            correctAnswerTwo = `${row}, ${columnArr[column]}`;
          } else {
            correctAnswer = `${columnArr[column]}, ${row + 1}`;
            correctAnswerTwo = `${row + 1}, ${columnArr[column]}`;
          }
        }
        if (p.question == "number") {
          correctAnswer = (p.row - 1) * 4 + columnArr.indexOf(p.column) + 1;
        }
      }
      if (p.type == "snake") {
        if (p.question == "columnRow") {
          // if (column < 0) column = columnArr.length - 1;

          let remainder = (p.number % 8) - 1;
          if (remainder < 0) remainder = 7;
          const columnArrSnake = ["A", "B", "C", "D", "D", "C", "B", "A"][
            remainder
          ];

          const row = Math.floor(p.number / 8) * 2;
          const left = p.number - row * 4;
          if (p.number % 8 == 0) {
            correctAnswer = `${columnArrSnake}, ${row}`;
            correctAnswerTwo = `${row}, ${columnArrSnake}`;
          } else if (left > 0 && left < 5) {
            correctAnswer = `${columnArrSnake}, ${row + 1}`;
            correctAnswerTwo = `${row + 1}, ${columnArrSnake}`;
          } else {
            correctAnswer = `${columnArrSnake}, ${row + 2}`;
            correctAnswerTwo = `${row + 2}, ${columnArrSnake}`;
          }
        }
        if (p.question == "number") {
          let base = Math.floor(p.row / 2) * 8;
          console.log("HERE!");

          // REMAINDER
          if (p.row % 2 != 0) {
            correctAnswer = base + columnArr.indexOf(p.column) + 1;
            // NO REMAINDER
          } else {
            correctAnswer = base - columnArr.indexOf(p.column);
          }
        }
      }
    }

    if (level == 4.17) {
      if (p.roll == 1) {
        if (p.compass == "north-west") {
          correctAnswer = arr2[0];
        }
        if (p.compass == "north") {
          correctAnswer = arr2[1];
        }
        if (p.compass == "north-east") {
          correctAnswer = arr2[2];
        }
        if (p.compass == "east") {
          correctAnswer = arr2[5];
        }
        if (p.compass == "south-east") {
          correctAnswer = arr2[8];
        }
        if (p.compass == "south") {
          correctAnswer = arr2[7];
        }
        if (p.compass == "south-west") {
          correctAnswer = arr2[6];
        }
        if (p.compass == "west") {
          correctAnswer = arr2[3];
        }
      } else {
        correctAnswer = arr2[4];
      }
    }

    if (level == 4.18) {
      correctAnswer = arr2[p.finalIndex];
    }

    if (level == 4.19) {
      if (p.shapeRoll == "Square") {
        if (p.squareRoll == 1) {
          correctAnswer = 45;
        }
        if (p.squareRoll == 2) {
          correctAnswer = 90;
        }
        if (p.squareRoll == 3) {
          correctAnswer = 360;
        }
      }
      if (p.shapeRoll == "Rectangle") {
        if (p.rectRoll == 1) {
          correctAnswer = 90;
        }
        if (p.rectRoll == 2) {
          correctAnswer = `90-${p.angleDegrees}`;
        }
        if (p.rectRoll == 3) {
          correctAnswer = 360;
        }
      }
      if (p.shapeRoll == "straight") {
        if (p.straightRoll == 1) {
          correctAnswer = 180;
        }
        if (p.straightRoll == 2) {
          correctAnswer = `180-${p.angleStraight}`;
        }
      }

      if (p.shapeRoll == "circle") {
        if (p.circleRoll == 1) {
          correctAnswer = 360;
        }
        if (p.circleRoll == 2) {
          correctAnswer = `360-${p.angleCircle}`;
        }
      }
    }

    if (level == 4.2) {
      if (p.rollType == 1) {
        correctAnswer = `(${p.lengthTotal}+${p.topOne})x2`;
        correctAnswerTwo = `(${p.topOne}+${p.lengthTotal})x2`;
        correctAnswerArr.push((p.lengthTotal + p.topOne) * 2);
      }
      if (p.rollType == 2) {
        correctAnswer = `${p.bigSquare}x4`;
        correctAnswerArr.push(p.bigSquare * 4);
      }
      if (p.rollType == 3) {
        correctAnswer = `(${p.rectangle}+${p.bigSquare})x2`;
        correctAnswerTwo = `(${p.bigSquare}+${p.rectangle})x2`;
        correctAnswerArr.push((p.bigSquare + p.rectange) * 2);
      }
    }

    if (level == 4.21) {
      const numSquareLength = Math.floor(p.length / p.dimension);
      const numSquareBreadth = Math.floor(p.breadth / p.dimension);
      const numSquareHeight = Math.floor(p.height / p.dimension);
      const totalSquare = numSquareLength * numSquareBreadth;
      const totalCube = numSquareLength * numSquareBreadth * numSquareHeight;
      if (setting == 1 || setting == 2) {
        correctAnswer = `${numSquareLength}x${numSquareBreadth}=${totalSquare}`;
      }
      if (setting == 3) {
        correctAnswer = `${numSquareLength}x${numSquareBreadth}x${numSquareHeight}=${totalCube}`;
      }
      if (setting == 4) {
        correctAnswer = `${Math.floor(
          p.length / (p.dimension * 2)
        )}x${Math.floor(p.breadth / (p.dimension * 2))}=${
          Math.floor(p.length / (p.dimension * 2)) *
          Math.floor(p.breadth / (p.dimension * 2))
        }`;
      }
      //RECTANGLES
      if (setting == 5) {
        function extraShapes(
          remainder1,
          remainder2,
          side1,
          side2,
          length,
          breadth
        ) {
          let A = 0;
          let B = 0;
          if (remainder1 >= side2) {
            const a = Math.floor(remainder1 / side2);
            const b = Math.floor(breadth / side1);
            A = a * b;
          }
          if (remainder2 >= side1) {
            const a = Math.floor(remainder2 / side1);
            const b = Math.floor(length / side2);
            B = a * b;
          }
          return A >= B ? A : B;
        }
        // One scenario
        const a = Math.floor(p.length / p.smallLength);
        const aR = p.length % p.smallLength;
        const b = Math.floor(p.breadth / p.smallBreadth);
        const bR = p.breadth % p.smallBreadth;
        const standardOne = a * b;
        const extraOne = extraShapes(
          aR,
          bR,
          p.smallLength,
          p.smallBreadth,
          p.length,
          p.breadth
        );
        const A = standardOne + extraOne;

        // Second scenario
        const c = Math.floor(p.breadth / p.smallLength);
        const cR = p.breadth % p.smallLength;
        const d = Math.floor(p.length / p.smallBreadth);
        const dR = p.length % p.smallBreadth;
        const standardTwo = c * d;
        const extraTwo = extraShapes(
          cR,
          dR,
          p.smallLength,
          p.smallBreadth,
          p.breadth,
          p.length
        );
        const B = standardTwo + extraTwo;

        if (A > B) {
          if (extraOne != 0) {
            console.log(`A`);
            correctAnswer = `${A}`;
          } else {
            console.log(`B`);
            correctAnswer = `${a}x${b}=${A}`;
            correctAnswerTwo = `${b}x${a}=${A}`;
          }
        } else {
          if (extraTwo != 0) {
            console.log(`C`);
            correctAnswer = `${B}`;
          } else {
            console.log(`D`);

            correctAnswer = `${c}x${d}=${B}`;
            correctAnswerTwo = `${d}x${c}=${B}`;
          }
        }
        if (A == B) {
          console.log(`E`);
          correctAnswerArr.push(`${A}`);
          correctAnswerArr.push(`${a}x${b}=${A}`);
          correctAnswerArr.push(`${b}x${a}=${A}`);
          correctAnswerArr.push(`${B}`);
          correctAnswerArr.push(`${c}x${d}=${B}`);
          correctAnswerArr.push(`${d}x${c}=${B}`);
        }
      }
    }

    // if (level == 4.22) {
    //   correctAnswer = `${p.numFour}x${p.numOne}+${p.numFour}x${p.numTwo}/${p.numThree}`;
    // }

    if (level == 4.22) {
      let countLayers = 1;
      if (p.layerTwo > 0) {
        countLayers += 1;
      }
      if (p.layerThree > 0) {
        countLayers += 1;
      }
      if (p.layerFour > 0) {
        countLayers += 1;
      }
      console.log("Layers " + countLayers);
      console.log(p.layerOne, p.layerTwo, p.layerThree, p.layerFour);
      correctAnswer = (p.layerOne + countLayers) * 2;
    }

    if (level == 4.23) {
      if (p.type == "statement") {
        if (p.question == "area") correctAnswer = p.area;
        if (p.question == "perimeter") correctAnswer = p.perimeter;
      }
      if (p.type == "figure") {
        if (p.question == "area") correctAnswer = p.area * (p.unitSentence + 1);
        if (p.question == "perimeter")
          correctAnswer = p.breadth * 2 + p.breadth * p.unitSentence * 4;
      }
    }

    if (level == 4.24) {
      if (p.rollTypeClue == "11") {
        if (p.rollTypeQnSyn == "isof") {
          if (p.rollTypeQn11 == "1T") {
            correctAnswer = `${p.oneValue}/${p.oneValue + p.twoValue}`;
          } else {
            correctAnswer = `${p.oneValue + p.twoValue}/${p.oneValue}`;
          }
        }
        if (p.rollTypeQnSyn == "ofis") {
          if (p.rollTypeQn11 != "1T") {
            correctAnswer = `${p.oneValue}/${p.oneValue + p.twoValue}`;
          } else {
            correctAnswer = `${p.oneValue + p.twoValue}/${p.oneValue}`;
          }
        }
      }
      if (p.rollTypeClue == "1T") {
        if (p.rollTypeQnSyn == "isof") {
          if (p.rollTypeQn1T == "AB") {
            correctAnswer = `${p.oneValue}/${p.twoValue}`;
          } else {
            correctAnswer = `${p.twoValue}/${p.oneValue}`;
          }
        }
        if (p.rollTypeQnSyn == "ofis") {
          if (p.rollTypeQn1T == "AB") {
            correctAnswer = `${p.twoValue}/${p.oneValue}`;
          } else {
            correctAnswer = `${p.oneValue}/${p.twoValue}`;
          }
        }
      }
    }

    if (level == 4.25) {
      if (p.question == "perimeter") {
        correctAnswer = `${p.length}x4`;
      }
      if (p.question == "AB") {
        correctAnswer = `${p.length * p.roll}/4`;
      }
    }

    if (level == 4.26) {
      if (p.version == 0) {
        correctAnswer = p.oneSideNoCorners * 4 + 4;
      }
      if (p.version == 1 || p.version == 3) {
        correctAnswer = p.oneSideNoCorners * 3 + 4;
      }
      if (p.version == 2) {
        correctAnswer = p.oneSideNoCorners + 2;
      }
    }

    // if (level == 5.0) {
    //   if (p.sidesBH == "base") {
    //     correctAnswer = `${p.labelABC}${p.labelGHI}`;
    //   } else if (p.sidesBH == "height") {
    //     correctAnswer = `${p.labelABC}${p.labelDEF}`;
    //   } else if (p.sidesBH == "base2") {
    //     correctAnswer = `${p.labelABC}${p.labelJKL}`;
    //   } else {
    //     correctAnswer = `${p.labelDEF}${p.labelGHI}`;
    //   }
    // }
    if (level == 5.0) {
      // plus and minus
      if (p.firstVar == "whole" && p.secondVar == "fake" && p.operator == "+") {
        correctAnswer = `${p.numOne}+${p.numThree}/${p.numFour}`;
      }
      if (p.firstVar == "fake" && p.secondVar == "fake" && p.operator == "+") {
        correctAnswer = `${p.numOne}/${p.numTwo}+${p.numThree}/${p.numFour}`;
      }
      if (p.firstVar == "whole" && p.secondVar == "fake" && p.operator == "-") {
        correctAnswer = `${p.numOne}-${p.numThree}/${p.numFour}`;
      }
      if (p.firstVar == "fake" && p.secondVar == "fake" && p.operator == "-") {
        correctAnswer = `${p.numOne}/${p.numTwo}-${p.numThree}/${p.numFour}`;
      }
      if (p.firstVar == "fake" && p.secondVar == "whole" && p.operator == "-") {
        // EXCEPTION
        correctAnswer = `${p.numOne}/${p.numTwo}-${p.numThree}/${p.numFour}`;
      }
      if (p.firstVar == "fake" && p.secondVar == "whole" && p.operator == "+") {
        correctAnswer = `${p.numOne}/${p.numTwo}+${p.numThree}`;
      }

      if (p.operator == "x") {
        if (p.firstVar == "fake" && p.secondVar == "whole") {
          // correctAnswer = `${p.numOne}/${p.numTwo}x${p.numThree}`;
          correctAnswer = `${p.numOne}/${p.numTwo}x${p.numThree}`;
        } else if (p.firstVar == "fake" && p.secondVar == "real") {
          correctAnswer = `${p.numOne}/${p.numTwo}x${p.numThree + p.numFour}/${
            p.numFour
          }`;
        } else if (p.firstVar == "whole" && p.secondVar == "real") {
          correctAnswer = `${p.numOne}x${p.numThree + p.numFour}/${p.numFour}`;
        } else {
          correctAnswer = `2`;
        }
      }
      if (p.operator == "/") {
        if (p.firstVar == "fake" && p.secondVar == "whole") {
          correctAnswer = `${p.numOne}/${p.numTwo}/${p.numThree}`;
        } else if (p.firstVar == "whole" && p.secondVar == "real") {
          correctAnswer = `${p.numOne}x${p.numFour - p.numThree}/${p.numFour}`;
        } else if (p.firstVar == "fake" && p.secondVar == "real") {
          correctAnswer = `${p.numOne}/${p.numTwo}x${p.numFour - p.numThree}/${
            p.numFour
          }`;
        } else {
          correctAnswer = `1`;
        }
      }
    }

    if (level == 5.01) {
      if (setting == 1) {
        if (p.version == 0) {
          const common = commonDeno(p.denoOne, p.denoTwo);
          const multiOne = common / p.denoOne;
          const multiTwo = common / p.denoTwo;
          correctAnswer = `${p.numOne * multiOne}/${common}+${
            p.numTwo * multiTwo
          }/${common}=${p.numOne * multiOne + p.numTwo * multiTwo}/${common}`;
        }
        if (p.version == 1) {
          const common = commonDeno(p.denoOne, p.denoTwo);
          const multiOne = common / p.denoOne;
          const newNumOne = p.numOne * multiOne;
          const multiTwo = common / p.denoTwo;
          const newNumTwo = p.numTwo * multiTwo;
          correctAnswer = `1-${newNumOne}/${common}-${newNumTwo}/${common}`;
        }
      }
      if (setting == 2) {
        const topNum = p.denoOne - p.numOne;
        if (p.question == 0) {
          correctAnswer = `${topNum}/${p.denoOne}x${p.remainderNum}/${p.remainderDeno}`;
        }
        if (p.question == 1) {
          correctAnswer = `${topNum}/${p.denoOne}x${
            p.remainderDeno - p.remainderNum
          }/${p.remainderDeno}`;
        }
      }
      if (setting == 3) {
        p.varA = p.numOne;
        p.varB = p.numTwo;
        p.varTotal = p.numOne + p.numTwo;

        if (p.letterBTotal == "A and B") {
          p.varB = p.numTwo - p.numOne;
          p.varTotal = p.numTwo;
        }

        if (p.letterAB == "A" && p.letterLeftRemoved == "left") {
          correctAnswer =
            p.varA +
            "/" +
            p.varTotal +
            "x" +
            (p.numFour - p.numThree) +
            "/" +
            p.numFour;
        }
        if (p.letterAB == "A" && p.letterLeftRemoved == "removed") {
          correctAnswer =
            p.varA + "/" + p.varTotal + "x" + p.numThree + "/" + p.numFour;
        }
        if (p.letterAB == "B" && p.letterLeftRemoved == "left") {
          correctAnswer =
            p.varB +
            "/" +
            p.varTotal +
            "x" +
            (p.numSix - p.numFive) +
            "/" +
            p.numSix;
        }
        if (p.letterAB == "B" && p.letterLeftRemoved == "removed") {
          correctAnswer =
            p.varB + "/" + p.varTotal + "x" + p.numFive + "/" + p.numSix;
        }
      }
    }

    if (level == 5.02) {
      correctAnswer = `${arr[0]}/${(arr[0] / p.numOne) * p.numTwo}A=${arr[0]}/${
        (arr[0] / p.numThree) * p.numFour
      }B`;
    }

    if (level == 5.03) {
      if (p.rollA == "decimal") {
        correctAnswer = accDecimal(p.numerator / (p.denominator / 100));
      }
      if (p.rollA == "fraction") {
        correctAnswer = `${p.numerator}/${p.denominator}x100`;
      }
      if (p.rollA == "percentage") {
        if (p.rollB == "fraction") {
          correctAnswer = `${p.percentageDisplay}/100`;
        }
        if (p.rollB == "decimal") {
          correctAnswer = `${accDecimal(p.percentageDisplay / 100)}`;
        }
        if (p.rollB == "ratio") {
          correctAnswer = `${p.percentageDisplay}:100`;
        }
      }
    }

    if (level == 5.04) {
      p.varA = p.numOne;
      p.varB = 100 - p.numOne;
      if (p.letterAB == "A" && p.letterChange == "increase") {
        correctAnswer = p.varA + "/100x" + (100 + p.numTwo);
      }
      if (p.letterAB == "A" && p.letterChange == "decrease") {
        correctAnswer = p.varA + "/100x" + (100 - p.numTwo);
      }
      if (p.letterAB == "A" && p.letterChange == "of") {
        correctAnswer = p.varA + "/100x" + (100 - p.numTwo);
      }
      if (p.letterAB == "B" && p.letterChangeTwo == "increase") {
        correctAnswer = p.varB + "/100x" + (100 + p.numThree);
      }
      if (p.letterAB == "B" && p.letterChangeTwo == "decrease") {
        correctAnswer = p.varB + "/100x" + (100 - p.numThree);
      }
      if (p.letterAB == "B" && p.letterChangeTwo == "of") {
        correctAnswer = p.varB + "/100x" + (100 - p.numThree);
      }
    }
    if (level == 5.05) {
      p.varA = p.numOne;
      p.varB = p.numTwo;
      if (p.letterBTotal == "A and B") {
        p.varB = p.numTwo - p.numOne;
      }
      if (p.letterAB == "A") {
        if (p.letterChange == "increase") {
          correctAnswer = `${p.varA}/100x${100 + p.numThree}`;
        }
        if (p.letterChange == "decrease" || p.letterChange == "of") {
          correctAnswer = `${p.varA}/100x${100 - p.numThree}`;
        }
      }
      if (p.letterAB == "B") {
        if (p.letterChangeTwo == "increase") {
          correctAnswer = `${p.varB}/100x${100 + p.numFour}`;
        }
        if (p.letterChangeTwo == "decrease" || p.letterChangeTwo == "of") {
          correctAnswer = `${p.varB}/100x${100 - p.numFour}`;
        }
      }
    }

    if (level == 5.06) {
      if (setting == 1) {
        if (p.sidesBH == "base") {
          correctAnswer = `${p.labelABC}${p.labelGHI}`;
        } else if (p.sidesBH == "height") {
          correctAnswer = `${p.labelABC}${p.labelDEF}`;
        } else if (p.sidesBH == "base2") {
          correctAnswer = `${p.labelABC}${p.labelJKL}`;
        } else {
          correctAnswer = `${p.labelDEF}${p.labelGHI}`;
        }
      }
      if (setting == 2) {
        if (p.question == "base") {
          correctAnswer = `${p.labelDEF}${p.labelGHI}`;
          correctAnswerTwo = `${p.labelGHI}${p.labelDEF}`;
        }
        if (p.question == "height") {
          correctAnswer = `${p.labelABC}${p.labelJKL}`;
          correctAnswerTwo = `${p.labelJKL}${p.labelABC}`;
        }
        if (p.question == "base2") {
          correctAnswer = `${p.labelABC}${p.labelJKL}`;
          correctAnswerTwo = `${p.labelJKL}${p.labelABC}`;
        }
        if (p.question == "height2") {
          correctAnswer = `${p.labelDEF}${p.labelGHI}`;
          correctAnswerTwo = `${p.labelGHI}${p.labelDEF}`;
        }
        if (p.question == "base3") {
          correctAnswer = `${p.labelABC}${p.labelMNO}`;
          correctAnswerTwo = `${p.labelMNO}${p.labelABC}`;
        }
        if (p.question == "height3") {
          correctAnswer = `${p.labelGHI}${p.labelJKL}`;
          correctAnswerTwo = `${p.labelJKL}${p.labelGHI}`;
        }
      }
    }

    if (level == 5.07) {
      if (p.roll == 1) {
        if (p.rightAngleRoll == 1) {
          correctAnswer = `90-${p.angleLabel}`;
        }
        if (p.rightAngleRoll == 2) {
          correctAnswer = `90-${p.angleLabel}`;
        }
      }
      if (p.roll == 2) {
        correctAnswer = 60;
      }
      if (p.roll == 3) {
        if (p.isosRoll == 1) {
          correctAnswer = `180-${p.isosAngle}x2`;
        }
        if (p.isosRoll == 2) {
          correctAnswer = `(180-${p.isosAngle2Label})/2`;
        }
      }
      if (p.roll == 4) {
        if (p.triRoll == 1) {
          correctAnswer = `180-${p.triLeftAngleD}-${p.triRightAngleD}`;
        }
        if (p.triRoll == 2) {
          correctAnswer = `180-${p.tri2LeftAngleD}-${p.tri2RightAngleD}`;
        }
        if (p.triRoll == 3) {
          correctAnswer = `180-${p.tri3LeftAngleD}-${p.tri3RightAngleD}`;
        }
      }
    }

    if (level == 5.08) {
      if (p.roll == "opposite") {
        correctAnswer = p.oppositeRotation;
      }
      if (p.roll == "corresponding") {
        if (p.corrRoll == "1" || p.corrRoll == "3" || p.corrRoll == "4") {
          correctAnswer = p.corrAngleDisplay;
        }
        if (p.corrRoll == "2") {
          correctAnswer = `180-${p.corrAngleDisplay}`;
        }
      }
    }

    if (level == 5.09) {
      correctAnswer = `${p.change}/${p.totalAmount}x100`;
    }

    if (level == 5.1) {
      if (p.rollShape == "parallelogram") {
        if (p.paraRoll == 1) {
          correctAnswer = `180-${p.paraAngleD}`;
        }
        if (p.paraRoll == 2) {
          correctAnswer = p.paraAngleD;
        }
      }
      if (p.rollShape == "rhombus") {
        if (p.rhombusRoll == 1) {
          correctAnswer = `180-${p.rhombusAngleD}`;
        }
        if (p.rhombusRoll == 2) {
          correctAnswer = p.rhombusAngleD;
        }
        if (p.rhombusRoll == 3) {
          correctAnswer = `(180-${p.rhombusAngleD})/2`;
        }
        if (p.rhombusRoll == 4) {
          correctAnswer = `${p.rhombusAngleD}/2`;
        }
        if (p.rhombusRoll == 5) {
          correctAnswer = `180-${p.rhombusAngleD / 2}x2`;
        }
      }
      if (p.rollShape == "trapezium") {
        if (p.trapRoll == 1) {
          correctAnswer = `180-${p.trapAngleD}`;
        }
        if (p.trapRoll == 2) {
          correctAnswer = `180-${p.trapAngleD2}`;
        }
      }
    }

    if (level == 5.11) {
      if (p.rollType == "discount" || p.rollType == "decrease") {
        if (p.rollType2 == "before") {
          correctAnswer = `${p.valueOne}/100x${100 - p.percentageOne}`;
        }
        if (p.rollType2 == "after") {
          correctAnswer = `${p.valueOne}/${100 - p.percentageOne}x100`;
        }
        if (p.rollType2 == "change") {
          correctAnswer = `${p.valueOne}/${100 - p.percentageOne}x${
            p.percentageOne
          }`;
        }
      }
      if (p.rollType == "GST") {
        if (p.rollType2 == "before") {
          correctAnswer = `${p.valueOne}/100x${100 + p.percentageTwo}`;
        }
        if (p.rollType2 == "after") {
          correctAnswer = `${p.valueOne}/${100 + p.percentageTwo}x100`;
        }
        if (p.rollType2 == "change") {
          correctAnswer = `${p.valueOne}/${100 + p.percentageTwo}x${
            p.percentageTwo
          }`;
        }
      }
      if (p.rollType == "increase") {
        if (p.rollType2 == "before") {
          correctAnswer = `${p.valueOne}/100x${100 + p.percentageOne}`;
        }
        if (p.rollType2 == "after") {
          correctAnswer = `${p.valueOne}/${100 + p.percentageOne}x100`;
        }
        if (p.rollType2 == "change") {
          correctAnswer = `${p.valueOne}/${100 + p.percentageTwo}x${
            p.percentageOne
          }`;
        }
      }
    }

    if (level == 5.12) {
      correctAnswer = p.length * p.breadth * p.height;
    }

    if (level == 5.13) {
      if (p.rollAnswer == "A") {
        correctAnswer = `${p.shadedArea}+${p.unshadedArea}x2`;
      }
      if (p.rollAnswer == "B") {
        correctAnswer = `${p.unshadedArea}x2`;
      }
    }

    if (level == 5.14) {
      if (p.roll == "up") {
        let totalBase = p.triX1 + p.triX2;
        let totalHeight = p.triY2;
        correctAnswer = `1/2x${totalBase}x${totalHeight}`;
      }
      if (p.roll == "down") {
        let totalBase = p.triX1 + p.triX2;
        let totalHeight = p.triY2;
        correctAnswer = `1/2x${totalBase}x${-totalHeight}`;
      }
      if (p.roll == "updown") {
        let totalBase = p.triX1 + p.triX2;
        let totalHeight = p.triY2 + p.triY3;
        correctAnswer = `1/2x${totalBase}x${totalHeight}`;
      }
      if (p.roll == "rectangle") {
        correctAnswer = `${p.triA}x2`;
      }
    }

    if (level == 5.15) {
      if (p.objectOneSF == p.objectOneV) {
        correctAnswer = `${p.objectOne}:${p.objectTwo}=${p.objectTwoV}:${p.objectOneV}`;
      } else {
        correctAnswer = `${p.objectOne}:${p.objectTwo}=${p.objectTwoV}:${p.objectOneV}=${p.objectTwoSF}:${p.objectOneSF}`;
      }
    }

    if (level == 5.16) {
      if (p.choice2 == "B") {
        correctAnswer = `${p.objectTwoV}/${p.objectOneV}=${
          p.objectTwoV / p.objectOneV
        }`;
      }
      if (p.choice2 == "S") {
        correctAnswer = `${p.objectTwoV}/${p.objectOneV}`;
      }
    }

    // if (level == 5.17) {
    //   let countLayers = 1;
    //   if (p.layerTwo > 0) {
    //     countLayers += 1;
    //   }
    //   if (p.layerThree > 0) {
    //     countLayers += 1;
    //   }
    //   if (p.layerFour > 0) {
    //     countLayers += 1;
    //   }
    //   console.log("Layers " + countLayers);
    //   console.log(p.layerOne, p.layerTwo, p.layerThree, p.layerFour);
    //   correctAnswer = (p.layerOne + countLayers) * 2;
    // }

    if (level == 5.17) {
      correctAnswer = p.answer;
    }

    if (level == 5.18) {
      if (p.choiceBC == "B" && p.choiceOne == "percentage") {
        if (p.situationA == "increased by") {
          correctAnswer = `${p.numThree}/${100 + p.percentageOne}x100`;
        } else {
          correctAnswer = `${p.numThree}/${100 - p.percentageOne}x100`;
        }
      }
      if (p.choiceBC == "B" && p.choiceOne == "fraction") {
        if (p.situationA == "increased by") {
          correctAnswer = `${p.numThree}/${p.denoOne + p.numOne}x${p.denoOne}`;
        } else {
          correctAnswer = `${p.numThree}/${p.denoOne - p.numOne}x${p.denoOne}`;
        }
      }
      if (p.choiceBC == "C" && p.choiceTwo == "percentage") {
        if (p.situationB == "increased by") {
          correctAnswer = `${p.denoThree}/${100 + p.percentageTwo}x100`;
        } else {
          correctAnswer = `${p.denoThree}/${100 - p.percentageTwo}x100`;
        }
      }
      if (p.choiceBC == "C" && p.choiceTwo == "fraction") {
        if (p.situationB == "increased by") {
          correctAnswer = `${p.denoThree}/${p.denoTwo + p.numTwo}x${p.denoTwo}`;
        } else {
          correctAnswer = `${p.denoThree}/${p.denoTwo - p.numTwo}x${p.denoTwo}`;
        }
      }
    }

    if (level == 6) {
      let num = p.numOne * p.denoTwo;
      let deno = p.denoOne * p.numTwo;
      console.log(num, deno);
      let whole = Math.floor(num / deno);
      let remainder = num % deno;
      if (whole == 0) {
        [num, deno] = simplify(num, deno);
        correctAnswer = `${num}/${deno}`;
      } else if (whole > 0 && remainder != 0) {
        [remainder, deno] = simplify(remainder, deno);
        correctAnswer = `${whole} ${remainder}/${deno}`;
      }
      if (remainder == 0) {
        correctAnswer = whole;
      }
    }
    if (level == 6.01) {
      if (setting == 1) {
        if (p.rollType == "area") {
          if (p.rollPi != "π") {
            correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}`;
          } else {
            correctAnswer = `pix${p.radius}x${p.radius}`;
          }
        }
        if (p.rollType == "circumference") {
          if (p.rollPi != "π") {
            correctAnswer = `2x${p.rollPi}x${p.radius}`;
            correctAnswerTwo = `${p.rollPi}x${p.radius * 2}`;
          } else {
            correctAnswer = `pix${p.radius * 2}`;
          }
        }
      }
      if (setting == 2) {
        if (p.rollType == "area") {
          if (p.rollPi != "π") {
            if (p.rollType2 == "semicircle") {
              correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}x1/2`;
            }
            if (p.rollType2 == "quadrant") {
              correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}x1/4`;
            }
            if (p.rollType2 == "others") {
              correctAnswer = `${p.rollPi}x${p.radius}x${p.radius}x${p.rollOthers}/360`;
            }
          } else {
            if (p.rollType2 == "semicircle") {
              correctAnswer = `pix${p.radius}x${p.radius}x1/2`;
            }
            if (p.rollType2 == "quadrant") {
              correctAnswer = `pix${p.radius}x${p.radius}x1/4`;
            }
            if (p.rollType2 == "others") {
              correctAnswer = `pix${p.radius}x${p.radius}x${p.rollOthers}/360`;
            }
          }
        }
        if (p.rollType == "circumference") {
          if (p.rollPi != "π") {
            if (p.rollType2 == "semicircle") {
              correctAnswer = `2x${p.rollPi}x${p.radius}x1/2+2x${p.radius}`;
              correctAnswerTwo = `2x${p.rollPi}x${p.radius}x1/2+${p.radius}x2`;
              correctAnswerArr.push(
                `${p.rollPi}x${p.radius * 2}x1/2+${p.radius}x2`
              );
              correctAnswerArr.push(
                `${p.rollPi}x${p.radius * 2}x1/2+2x${p.radius}`
              );
            }
            if (p.rollType2 == "quadrant") {
              correctAnswer = `2x${p.rollPi}x${p.radius}x1/4+2x${p.radius}`;
              correctAnswerTwo = `2x${p.rollPi}x${p.radius}x1/4+${p.radius}x2`;
              correctAnswerArr.push(
                `${p.rollPi}x${p.radius * 2}x1/4+${p.radius}x2`
              );
              correctAnswerArr.push(
                `${p.rollPi}x${p.radius * 2}x1/4+2x${p.radius}`
              );
            }
            if (p.rollType2 == "others") {
              correctAnswer = `2x${p.rollPi}x${p.radius}x${p.rollOthers}/360+2x${p.radius}`;
              correctAnswerTwo = `2x${p.rollPi}x${p.radius}x${p.rollOthers}/360+${p.radius}x2`;
              correctAnswerArr.push(
                `${p.rollPi}x${p.radius * 2}x${p.rollOthers}/360+2x${p.radius}`
              );
              correctAnswerArr.push(
                `${p.rollPi}x${p.radius * 2}x${p.rollOthers}/360+${p.radius}x2`
              );
            }
          } else {
            if (p.rollType2 == "semicircle") {
              correctAnswer = `2xpix${p.radius}x1/2+2x${p.radius}`;
              correctAnswerTwo = `2xpix${p.radius}x1/2+${p.radius}x2`;
              correctAnswerArr.push(`pix${p.radius * 2}x1/2+2x${p.radius}`);
              correctAnswerArr.push(`pix${p.radius * 2}x1/2+${p.radius}x2`);
            }
            if (p.rollType2 == "quadrant") {
              correctAnswer = `2xpix${p.radius}x1/4+2x${p.radius}`;
              correctAnswerTwo = `2xpix${p.radius}x1/4+${p.radius}x2`;
              correctAnswerArr.push(`pix${p.radius * 2}x1/4+2x${p.radius}`);
              correctAnswerArr.push(`pix${p.radius * 2}x1/4+${p.radius}x2`);
            }
            if (p.rollType2 == "others") {
              correctAnswer = `2xpix${p.radius}x${p.rollOthers}/360+2x${p.radius}`;
              correctAnswerTwo = `2xpix${p.radius}x${p.rollOthers}/360+${p.radius}x2`;
              correctAnswerArr = `pix${p.radius * 2}x${
                p.rollOthers
              }/360+p.radius}`;
              correctAnswerArr = `pix${p.radius * 2}x${p.rollOthers}/360+${
                p.radius
              }x2`;
            }
          }
        }
      }
    }

    if (level == 6.02) {
      if (p.rollType == "triangle") {
        correctAnswer = `1/2x${p.triangleSide}x${p.triangleSide / 2}`;
      }
      if (p.rollType == "radius") {
        correctAnswer = `pix${p.squareSideD}x${p.squareSideD}`;
      }
      if (p.rollType == "angle" && p.rollAngle == "a") {
        correctAnswer = `(180-${p.rotation2})/2`;
      }
      if (p.rollType == "angle" && p.rollAngle == "b") {
        correctAnswer = `180-${p.angleOther}x2`;
      }
      if (p.rollType == "square") {
        correctAnswer = p.radius / 10;
      }
      if (p.rollType == "square2") {
        correctAnswer = 2 * (p.radius2 / 20) * (p.radius2 / 20);
      }
    }

    if (level == 6.03) {
      if (
        (p.rollOne == "NA" || p.rollOne == "AN") &&
        (p.rollSym == "+" || p.rollSym == "-")
      ) {
        if (p.rollOne == "NA" && p.rollThree == 1) {
          correctAnswer = `${p.rollTwo}${p.rollSym}${p.rollAlp}`;
        } else if (p.rollOne == "AN" && p.rollTwo == 1) {
          correctAnswer = `${p.rollAlp}${p.rollSym}${p.rollThree}`;
        } else if (p.rollOne == "NA" && p.rollThree != 1) {
          correctAnswer = `${p.rollTwo}${p.rollSym}${p.rollThree}${p.rollAlp}`;
        } else if (p.rollOne == "AN" && p.rollTwo != 1) {
          correctAnswer = `${p.rollTwo}${p.rollAlp}${p.rollSym}${p.rollThree}`;
        }
      }

      if (p.rollOne == "AN" && p.rollSym == "÷") {
        if (p.rollTwo % p.rollThree == 0) {
          if (p.rollTwo == 1 && p.rollThree == 1) {
            correctAnswer`${p.rollAlp}`;
          } else if (p.rollThree == 1) {
            correctAnswer = `${p.rollTwo}${p.rollAlp}`;
          } else if (p.rollTwo == p.rollThree) {
            correctAnswer = `${p.rollAlp}`;
          } else {
            correctAnswer = `${p.rollTwo / p.rollThree}${p.rollAlp}`;
          }
        } else if (p.rollTwo == 1) {
          correctAnswer = `${p.rollAlp}/${p.rollThree}`;
        } else {
          correctAnswer = `${p.rollTwo}${p.rollAlp}/${p.rollThree}`;
        }
      }
      if (p.rollOne == "NA" && p.rollSym == "÷") {
        if (p.rollTwo == p.rollThree) {
          correctAnswer = `1/${p.rollAlp}`;
        } else if (p.rollTwo == 1 && p.rollThree > 1) {
          correctAnswer = `1/${p.rollThree}${p.rollAlp}`;
        } else if (p.rollTwo == 1) {
          correctAnswer = `${1}/${p.rollAlp}`;
        } else if (p.rollTwo % p.rollThree == 0) {
          correctAnswer = `${p.rollTwo / p.rollThree}/${p.rollAlp}`;
        } else {
          correctAnswer = `${p.rollTwo}/${p.rollThree}${p.rollAlp}`;
        }
      }

      if ((p.rollOne == "NA" || p.rollOne == "AN") && p.rollSym == "x") {
        if (p.rollTwo == 1 && p.rollThree == 1) {
          correctAnswer = `${p.rollAlp}`;
        } else {
          correctAnswer = `${p.rollTwo * p.rollThree}${p.rollAlp}`;
        }
      }

      if (p.rollOne == "AA") {
        if (p.rollSymTwo == "+") {
          correctAnswer = `${p.rollTwo + p.rollThree}${p.rollAlp}`;
        }
        if (p.rollSymTwo == "-") {
          correctAnswer = `${p.rollTwo - p.rollThree}${p.rollAlp}`;
          if (p.rollTwo - p.rollThree == 0) {
            correctAnswer = 0;
          }
          if (p.rollTwo - p.rollThree == -1) {
            correctAnswer = `-${p.rollAlp}`;
          }
          if (p.rollTwo - p.rollThree == 1) {
            correctAnswer = `${p.rollAlp}`;
          }
        }
      }
    }

    if (level == 6.05) {
      if (p.rollOne == "d") {
        correctAnswer = `${p.rollS}x${p.rollT}`;
        if (p.roll2 == "2" && p.rollUnits[p.roll][1] == "h") {
          correctAnswer = `${p.rollS}x${p.rollT}/60`;
        }
        if (p.roll2 == "2" && p.rollUnits[p.roll][1] == "s") {
          correctAnswer = `${p.rollS}x${p.rollT}x60`;
        }
      }
      if (p.rollOne == "s") {
        correctAnswer = `${p.distance}/${p.rollT}`;
      }
      if (p.rollOne == "t") {
        correctAnswer = `${p.distance}/${p.rollS}`;
      }
    }

    // if (level == 6.06) {
    //   // average speed whole journey
    //   if (p.roll == "A") {
    //     // correctAnswer = `(${p.speedB * p.timeB}+${p.speedC * p.timeC})/${
    //     //   p.timeB + p.timeC
    //     // }`;
    //     correctAnswer =
    //       (p.speedB * p.timeB + p.speedC * p.timeC) / (p.timeB + p.timeC);
    //   }
    //   // time between B to C
    //   if (p.roll == "B") {
    //     correctAnswer = `(${p.speedA * (p.timeB + p.timeC)}-${
    //       p.speedB * p.timeB
    //     })/${p.timeC}`;
    //     correctAnswer =
    //       (p.speedA * (p.timeB + p.timeC) - p.speedB * p.timeB) / p.timeC;
    //   }
    //   // speed between B to C
    //   if (p.roll == "C") {
    //     // correctAnswer = `(${p.speedA * p.timeA}-${p.speedB * p.timeB})/${
    //     //   p.speedC
    //     // }`;
    //     correctAnswer = (p.speedA * p.timeA - p.speedB * p.timeB) / p.speedC;
    //   }
    // }

    if (level == 6.07) {
      // normal
      if (p.roll == "A") {
        correctAnswer = `${p.distance}/(${p.speedA}+${p.speedB})`;
      }
      // natural
      if (p.roll == "B") {
        correctAnswer = `(${p.distance}-${p.speedA * p.timeA})/(${p.speedA}+${
          p.speedB
        })`;
      }
      // headstart
      if (p.roll == "C") {
        correctAnswer = `(${p.distance}-${p.speedA * p.timeA})/(${p.speedA}+${
          p.speedB
        })`;
      }
      // distance
      if (p.roll == "D") {
        correctAnswer = `(${p.speedA}+${p.speedB})x${p.timeA + p.timeB}`;
      }
    }

    if (level == 7) {
      if (p.operator == "+") correctAnswer = p.numOne + p.numTwo;
      if (p.operator == "-") correctAnswer = p.numOne - p.numTwo;
    }

    if (level == "calOne") {
      if (setting == 1 || setting == 3) {
        correctAnswer = p.numOne + p.numThree;
      }
      if (setting == 2 || setting == 4) {
        correctAnswer = p.numOne - p.numThree;
      }
      if (setting == 5 && p.version == "+") correctAnswer = p.numTwo;
      if (setting == 5 && p.version == "-") correctAnswer = p.numTwo;
      if (setting == 6) {
        if (p.identity == "D") correctAnswer = p.numTwo;
        if (p.identity == "C") correctAnswer = p.numOne;
      }
      if (setting == 7 || setting == 8) {
        correctAnswer = p.answer;
      }
      if (setting == 9) {
        correctAnswer = p.answer;
      }
    }
    if (level == "calTwo") {
      if (setting == 1 || setting == 3) {
        correctAnswer = p.numOne + p.numTwo;
      }
      if (setting == 2 || setting == 4) {
        correctAnswer = p.numOne - p.numTwo;
      }
      if (setting == 5) {
        correctAnswer = p.value;
      }
      if (setting == 6) {
        if (p.identity == "D") correctAnswer = p.numTwo;
        if (p.identity == "C") correctAnswer = p.numOne;
      }
      if (setting == 7 || setting == 8) {
        correctAnswer = p.answer;
      }
      if (setting == 9) {
        correctAnswer = p.answer;
      }
      if (setting == 10) {
        correctAnswer = p.start + p.eachInterval * p.arrow;
      }
      if (setting == 11) {
        if (p.beforeAfter == "before") {
          let totalTime = undefined;
          if (p.hoursMins == "hours") {
            totalTime = p.hours * 60 + p.mins + p.situationHours * 60;
          }
          if (p.hoursMins == "mins") {
            totalTime = p.hours * 60 + p.mins + p.situationMins;
          }
          let hours = Math.floor(totalTime / 60);
          let mins = totalTime % 60;
          console.log(totalTime, hours, mins);
          // let zone = "am";
          let zone = "am";
          zone = zoneOfDay(totalTime);
          hours = day12Hours(hours);

          correctAnswer = `${hours}.${mins}${zone}`;
          if (mins.toString().length == 1) {
            correctAnswer = `${hours}.0${mins}${zone}`;
          }
          if (mins.toString().length == 0) {
            correctAnswer = `${hours}${zone}`;
          }
        }
        if (p.beforeAfter == "after") {
          let totalTime = undefined;
          if (p.hoursMins == "hours") {
            totalTime = p.hours * 60 + p.mins - p.situationHours * 60;
          }
          if (p.hoursMins == "mins") {
            totalTime = p.hours * 60 + p.mins - p.situationMins;
          }
          if (totalTime < 0) {
            totalTime = totalTime + 24 * 60;
          }
          let hours = Math.floor(totalTime / 60);
          let mins = totalTime % 60;
          console.log(totalTime, hours, mins);

          let zone = "am";
          zone = zoneOfDay(totalTime);
          hours = day12Hours(hours);
          correctAnswer = `${hours}.${mins}${zone}`;
          if (mins.toString().length == 1) {
            correctAnswer = `${hours}.0${mins}${zone}`;
          }
          if (mins.toString().length == 0) {
            correctAnswer = `${hours}${zone}`;
          }
        }
      }

      // FRACTIONS: IDENTIFICATION
      if (setting == 12) {
        if (p.type == "black")
          correctAnswer = `${p.black}/${p.black + p.white}`;
        if (p.type == "white")
          correctAnswer = `${p.white}/${p.black + p.white}`;
      }
      if (setting == 13) {
        if (p.operator == "+") {
          correctAnswer = `${p.numeOne + p.numeTwo}/${p.deno}`;
          if (p.numeOne + p.numeTwo == p.deno) correctAnswer = 1;
        }
        if (p.operator == "-") {
          correctAnswer = `${p.numeOne - p.numeTwo}/${p.deno}`;
        }
      }
    }

    // ANSWERS
    if (level == "calThree") {
      if (setting == 1 || setting == 3) {
        correctAnswer = p.numOne + p.numTwo;
      }
      if (setting == 2 || setting == 4) {
        correctAnswer = p.numOne - p.numTwo;
      }
      if (setting == 5) {
        correctAnswer = p.value;
      }
      if (setting == 6) {
        if (p.identity == "D") correctAnswer = p.numTwo;
        if (p.identity == "C") correctAnswer = p.numOne;
      }
      if (setting == 7 || setting == 8) {
        correctAnswer = p.answer;
      }
      if (setting == 9) {
        correctAnswer = p.numOne * p.multiple;
      }
      // OVERLAPPING PLACE VALUE
      if (setting == 10) {
        let sumArr = [];
        for (let i = 0; i < p.sentenceArr.length; i++) {
          console.log(p.sentenceArr[i]);
          let num;

          if (p.sentenceArr[i].includes("ones")) {
            num = p.whole * 1;
          }
          if (p.sentenceArr[i].includes("tens")) {
            num = p.tens * 10;
          }
          if (p.sentenceArr[i].includes("hundreds")) {
            num = p.hundreds * 100;
          }
          sumArr.push(num);
        }
        let sum = 0;
        sumArr.map((item) => (sum += item * 1));
        correctAnswer = accDecimal(sum);
      }

      if (setting == 11) correctAnswer = p.multiplier;
      if (setting == 12) {
        if (p.question == "quotient") correctAnswer = p.multiplier;
        if (p.question == "remainder") correctAnswer = p.remainder;
        if (p.question == "both")
          correctAnswer = `${p.multiplier}r${p.remainder}`;
      }
      if (setting == 13) correctAnswer = p.replaced;
      if (setting == 14) {
        console.log(p.sums, p.numOne, p.version);

        if (p.version == 4 || p.version == 8) {
          if (p.numTwo < 0) {
            p.numTwo = p.numTwo * -1;
          }
          correctAnswer = p.numTwo;
        }

        if (
          p.version == 1 ||
          p.version == 3 ||
          p.version == 5 ||
          p.version == 7
        ) {
          correctAnswer = p.numTwo;
        }
        if (p.version == 2 || p.version == 6) {
          correctAnswer = p.sums + p.numOne;
        }
        if (p.blank == 1 || p.blank == 2) {
          correctAnswer = correctAnswer * p.sets;
        }
      }
      if (setting == 15) {
        correctAnswer = p.num;
      }

      // LEFT SIDE RIGHT SIDE
      if (setting == 16) {
        correctAnswer = p.answer;
      }

      // MULTIPLICATION AND DIVISION WHILE BREAKING UP CONVENIENT NUMBERS
      if (setting == 17) {
        if (p.operator == "x") {
          correctAnswer = p.numOne * p.numTwo;
        }
        if (p.operator == "÷") {
          correctAnswer = p.numTwo;
        }
      }
      if (setting == 18) {
        correctAnswer = p.start + p.eachInterval * p.arrow;
      }
      if (setting == 19) {
        if (p.beforeAfter == "before") {
          let totalTime = undefined;
          totalTime =
            (p.hours + p.situationHours) * 60 + (p.mins + p.situationMins);
          let hours = day12Hours(Math.floor(totalTime / 60));
          let mins = totalTime % 60;
          console.log(totalTime, hours, mins);
          let zone = "am";
          zone = zoneOfDay(totalTime);
          correctAnswer = `${hours}.${mins}${zone}`;
          if (mins.toString().length == 1) {
            correctAnswer = `${hours}.0${mins}${zone}`;
          }
          if (mins.toString().length == 0) {
            correctAnswer = `${hours}${zone}`;
          }
        }
        if (p.beforeAfter == "after") {
          let totalTime = undefined;
          totalTime =
            (p.hours - p.situationHours) * 60 + (p.mins - p.situationMins);
          if (totalTime < 0) {
            totalTime = totalTime + 24 * 60;
          }
          let hours = day12Hours(Math.floor(totalTime / 60));
          let mins = totalTime % 60;
          console.log(totalTime, hours, mins);
          let zone = "am";
          zone = zoneOfDay(totalTime);

          // if (hours > 12 && hours <= 24) {
          //   hours -= 12;
          //   // zone = "pm";
          // }
          // if (hours == 0) {
          //   hours = 12;
          // }
          // if (hours > 24) {
          //   hours -= 24;
          // }
          correctAnswer = `${hours}.${mins}${zone}`;
          if (mins.toString().length == 1) {
            correctAnswer = `${hours}.0${mins}${zone}`;
          }
          if (mins.toString().length == 0) {
            correctAnswer = `${hours}${zone}`;
          }
        }
      }

      // PART AND INTERVAL: CONVERSION
      if (setting == 20) {
        let answer = p.start + p.eachInterval * p.arrow;
        if (p.answerUnit == "g" || p.answerUnit == "m" || p.answerUnit == "ml")
          answer *= 1000;
        if (p.answerUnit == "cm") answer *= 100;

        correctAnswer = Math.floor(answer);
      }

      //MONEY: ADDITION SUBTRACTION AND MULTIPLICATION
      if (setting == 21) {
        if (p.symbol == "+") {
          correctAnswer = accDecimal((p.varA + p.varB) / 100);
        }
        if (p.symbol == "-") {
          correctAnswer = accDecimal((p.varA - p.varB) / 100);
        }
        if (p.symbol == "x") {
          correctAnswer = accDecimal((p.varA / 100) * p.varB);
        }
      }

      //FRACTIONS: SHAPE
      if (setting == 22) {
        let shaded = p.shaded;
        let unshaded = p.total - shaded;
        [shaded, unshaded] = simplify(shaded, unshaded);

        if (p.want == "shaded")
          correctAnswer = `${shaded}/${shaded + unshaded}`;
        if (p.want == "unshaded")
          correctAnswer = `${unshaded}/${shaded + unshaded}`;
        // }
      }

      // FRACTIONS: ADDITION AND SUBTRACTION
      if (setting == 23) {
        const commonDenoFind = commonDeno(p.denoOne, p.denoTwo);
        const newNumeOne = (commonDenoFind / p.denoOne) * p.numeOne;
        const newNumeTwo = (commonDenoFind / p.denoTwo) * p.numeTwo;
        if (p.operator == "+") {
          let finalNume = newNumeOne + newNumeTwo;
          let finalDeno = commonDenoFind;
          [finalNume, finalDeno] = simplify(finalNume, finalDeno);
          correctAnswer = `${finalNume}/${finalDeno}`;
        }
        if (p.operator == "-") {
          let finalNume = newNumeOne - newNumeTwo;
          let finalDeno = commonDenoFind;
          [finalNume, finalDeno] = simplify(finalNume, finalDeno);
          correctAnswer = `${finalNume}/${finalDeno}`;
        }
      }

      //FRACTIONS: EXPANSION AND SIMPLIFICATION
      if (setting == 24) {
        correctAnswer = p.answer;
      }

      // FRACTIONS: MID-POINT
      if (setting == 25) {
        [p.answerNume, p.answerDeno] = simplify(p.answerNume, p.answerDeno);
        correctAnswer = `${p.answerNume}/${p.answerDeno}`;
      }

      //GEOMETRY: AREA AND PERIMETER
      if (setting == 26) {
        if (p.rollx == 0) {
          if (p.shapeChoice == "square") {
            if (p.areaOrPerimeter == "area") {
              correctAnswer = p.squareSide * p.squareSide;
            }
            if (p.areaOrPerimeter == "perimeter") {
              correctAnswer = p.squareSide * 4;
            }
          }
          if (p.shapeChoice == "rectangle") {
            if (p.areaOrPerimeter == "area") {
              correctAnswer = p.rectLength * p.rectBreadth;
            }
            if (p.areaOrPerimeter == "perimeter") {
              correctAnswer = (p.rectLength + p.rectBreadth) * 2;
            }
          }
        }
        if (p.rollx == 1) {
          if (p.shapeChoice == "square") {
            correctAnswer = p.squareSide;
          }
          if (p.shapeChoice == "rectangle") {
            if (p.side == "breadth") {
              correctAnswer = p.rectBreadth;
            }
            if (p.side == "length") {
              correctAnswer = p.rectLength;
            }
          }
        }
      }
    }

    //ANSWER
    if (level == "calFour") {
      if (setting == 1) {
        correctAnswer = `${p.numOne}, ${p.numOne * p.multiple}`;
      }
      if (setting == 2) {
        correctAnswer = arr.join(", ");
      }
      if (setting == 3) {
        correctAnswer = arr3.join(", ");
      }
      if (setting == 4) {
        correctAnswer = p.numOne * p.numTwo;
      }
      // LEFT SIDE RIGHT SIDE
      if (setting == 5) {
        correctAnswer = p.answer;
      }
      //MULTIPLICATION IN SETS
      if (setting == 6) {
        console.log(p.sums, p.numOne, p.version);

        if (p.version == 4 || p.version == 8) {
          if (p.numTwo < 0) {
            p.numTwo = p.numTwo * -1;
          }
          correctAnswer = p.numTwo;
        }

        if (
          p.version == 1 ||
          p.version == 3 ||
          p.version == 5 ||
          p.version == 7
        ) {
          correctAnswer = p.numTwo;
        }
        if (p.version == 2 || p.version == 6) {
          correctAnswer = p.sums + p.numOne;
        }
        if (p.blank == 1 || p.blank == 2) {
          correctAnswer = correctAnswer * p.sets;
        }
      }

      //MULTIPLICATION IN SETS: FURTHER SPLITTING
      if (setting == 7) {
        correctAnswer = p.answer;
      }
      if (setting == 8) {
        let max = p.denoOne;
        let min = p.denoTwo;
        if (p.denoTwo > p.denoOne) [max, min] = [p.denoTwo, p.denoOne];
        let count = 1;
        let common = [min, max];
        let temp = max;
        while (temp % min != 0) {
          temp += max;
          count += 1;
          common.push(temp);
          console.log(common);
        }
        const multiOne = common[common.length - 1] / p.denoOne;
        const multiTwo = common[common.length - 1] / p.denoTwo;
        const totalWhole = p.wholeOne + p.wholeTwo;
        const totalNum = p.numOne * multiOne + p.numTwo * multiTwo;
        let totalDeno = p.denoOne * multiOne;
        const quotient = Math.floor(totalNum / totalDeno);
        let remainder = totalNum % totalDeno;
        const lastWhole = totalWhole + quotient;
        [remainder, totalDeno] = simplify(remainder, totalDeno);

        correctAnswer = `${lastWhole} ${remainder}/${totalDeno}`;
      }
      if (setting == 9) {
        let common = commonDeno(p.denoOne, p.denoTwo);
        console.log(common);
        const multiOne = common / p.denoOne;
        const multiTwo = common / p.denoTwo;
        const adjNumOne = p.wholeOne * common + multiOne * p.numOne;
        const adjNumTwo = p.wholeTwo * common + multiTwo * p.numTwo;
        const calNum = adjNumOne - adjNumTwo;
        const lastWhole = Math.floor(calNum / common);
        let remainder = calNum % common;
        [remainder, common] = simplify(remainder, common);
        correctAnswer = `${lastWhole} ${remainder}/${common}`;
        if (lastWhole == 0) {
          correctAnswer = `${remainder}/${common}`;
        }
      }

      //FRACTIONS: NUMBERLINE
      if (setting == 10) {
        [p.arrow, p.intervals] = simplify(p.arrow, p.intervals);
        correctAnswer = `${p.start} ${p.arrow}/${p.intervals}`;
      }

      // FRACTIONS: UNIT SENTENCE
      if (setting == 11) {
        let index = p.type[p.identity].indexOf(p.secondSelection);
        let oneUnit = undefined;
        if (index == 0) {
          oneUnit = p.value / p.numerator;
        }
        if (index == 1) {
          oneUnit = p.value / (p.denominator - p.numerator);
        }
        if (index == 2) {
          oneUnit = p.value / p.denominator;
        }
        if (p.secondSelection == 3) {
          oneUnit = p.value / p.differenceUnit;
        }
        console.log(oneUnit);
        correctAnswer = oneUnit * p.lastUnits;
      }

      // FRACTIONS: PARTS OF A FRACTION
      if (setting == 12) {
        correctAnswer = Math.round(
          (p.whole + p.remainder / p.deno) / (p.nume / p.deno)
        );
      }

      // FORM FRACTION

      if (setting == 13) {
        let big = p.biggerValue;
        if (p.bigUnit == "km" || p.bigUnit == "kg" || p.bigUnit == "ℓ") {
          big = p.biggerValue * 1000;
        }
        if (p.bigUnit == "m") {
          big = p.biggerValue * 100;
        }
        if (p.bigUnit == "hrs" || p.bigUnit == "mins") {
          big = p.biggerValue * 60;
        }
        let small = p.smallerValue;
        [small, big] = simplify(p.smallerValue, big);
        console.log(small, big);
        if (p.version == 0 || p.version == 3) correctAnswer = `${small}/${big}`;
        if (p.version == 1 || p.version == 2) correctAnswer = `${big}/${small}`;
      }
      // FRACTIONS: CONVERSION
      if (setting == 14) {
        let quotient;
        let remainder;
        let denominator;
        if (p.unitB == "mins" || p.unitB == "hrs") {
          quotient = Math.floor(p.value / 60);
          remainder = p.value % 60;
          denominator = 60;
          [remainder, denominator] = simplify(remainder, denominator);
          // correctAnswer = `${quotient} ${remainder}/${denominator}`;
        }
        if (p.unitB == "days") {
          quotient = Math.floor(p.value / 24);
          remainder = p.value % 24;
          denominator = 24;
          [remainder, denominator] = simplify(remainder, denominator);
          // correctAnswer = `${quotient} ${remainder}/${denominator}`;
        }
        if (p.unitB == "years") {
          quotient = Math.floor(p.value / 12);
          remainder = p.value % 12;
          denominator = 12;
          [remainder, denominator] = simplify(remainder, denominator);
          // correctAnswer = `${quotient} ${remainder}/${denominator}`;
        }
        correctAnswer = `${quotient} ${remainder}/${denominator}`;
      }

      if (setting == 15) {
        // correctAnswer =
        //   p.numOne / p.convenientNumOne + p.numTwo / p.convenientNumTwo;
        // decimalCheck(correctAnswer);
        let answer = [
          p.numOne / p.convenientNumOne + p.numTwo / p.convenientNumTwo,
        ];
        correctAnswer = accDecimal(answer[0]);
      }
      if (setting == 16) {
        correctAnswer = p.numOne - p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }

      // DECIMALS: OVERLAPPING PLACE VALUE
      if (setting == 17) {
        let sumArr = [];
        for (let i = 0; i < p.sentenceArr.length; i++) {
          console.log(p.sentenceArr[i]);
          let num;

          if (p.sentenceArr[i].includes("tens")) {
            console.log("1");
            num = p.tens * 10;
            // console.log(p.whole * 1);
          }
          if (p.sentenceArr[i].includes("hundreds")) {
            console.log("1");
            num = p.hundreds * 100;
            // console.log(p.whole * 1);
          }
          if (p.sentenceArr[i].includes("ones")) {
            console.log("1");
            num = p.ones * 1;
            // console.log(p.whole * 1);
          }
          if (p.sentenceArr[i].includes("tenth")) {
            console.log("2");
            num = p.tenth / 10;
            // console.log(p.tenth / 10);
            // correctAnswer += num;
          }
          if (p.sentenceArr[i].includes("hundredth")) {
            console.log("3");
            console.log(p.hundredth / 100);
            num = p.hundredth / 100;
          }
          sumArr.push(num);
        }
        let sum = 0;
        console.log(sumArr);
        sumArr.map((item) => (sum += item * 1));
        correctAnswer = accDecimal(sum);
        // }
      }

      if (setting == 18) {
        correctAnswer = p.numOne * p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (setting == 19) {
        correctAnswer = p.numOne * p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (setting == 20) {
        correctAnswer = p.numOne / p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (setting == 21) {
        correctAnswer = (p.numOne / p.numTwo).toFixed(p.roundOff);
      }
      if (setting == 22) {
        if (p.operator == "x") {
          correctAnswer = p.comparison * p.divisor;
          correctAnswer = accDecimal(correctAnswer);
        }
        if (p.operator == "÷") {
          correctAnswer = p.comparison / p.divisor;
          correctAnswer = accDecimal(correctAnswer);
        }
        decimalCheck(correctAnswer);
      }

      if (setting == 23) {
        correctAnswer = accDecimal(p.start + p.eachInterval * p.arrow);
      }
    }

    //ANSWERS
    if (level == "calFive") {
      if (setting == 0) {
        correctAnswer = p.answer;
      }
      if (setting == 1) {
        console.log(
          p.numeratorOne,
          p.denominatorOne,
          p.numeratorTwo,
          p.denominatorTwo
        );
        const totalNum = p.numeratorOne * p.numeratorTwo;
        let totalDeno = p.denominatorOne * p.denominatorTwo;
        const wholeNum = Math.floor(totalNum / totalDeno);
        let remainder = totalNum % totalDeno;
        [remainder, totalDeno] = simplify(remainder, totalDeno);
        if (wholeNum == 0) {
          correctAnswer = `${remainder}/${totalDeno}`;
        } else if (remainder == 0) {
          correctAnswer = wholeNum;
        } else {
          correctAnswer = `${wholeNum} ${remainder}/${totalDeno}`;
        }
      }
      if (setting == 2) {
        if (p.type == "mixed-whole") {
          let totalNum =
            (p.denominatorOne * p.wholeOne + p.numeratorOne) * p.wholeTwo;
          let totalDeno = p.denominatorOne;
          const wholeNum = Math.floor(totalNum / totalDeno);
          let remainder = totalNum % totalDeno;
          [remainder, totalDeno] = simplify(remainder, totalDeno);
          if (remainder == 0) {
            correctAnswer = wholeNum;
          } else {
            correctAnswer = `${wholeNum} ${remainder}/${totalDeno}`;
          }
        }
        if (p.type == "mixed-simple") {
          let totalNume =
            (p.denominatorOne * p.wholeOne + p.numeratorOne) * p.numeratorTwo;

          let totalDeno = p.denominatorOne * p.denominatorTwo;
          console.log(totalNume, totalDeno);
          let wholeNum = Math.floor(totalNume / totalDeno);
          let remainder = totalNume % totalDeno;
          [remainder, totalDeno] = simplify(remainder, totalDeno);
          correctAnswer = `${wholeNum} ${remainder}/${totalDeno}`;
          if (wholeNum == 0) {
            correctAnswer = `${remainder}/${totalDeno}`;
          }
          if (remainder == 0) {
            correctAnswer = `${wholeNum}`;
          }
        }
      }
      if (setting == 3) {
        let numerator =
          p.wholeOne * p.conversion +
          p.conversion * (p.numeratorOne / p.denominatorOne);

        correctAnswer = numerator;
      }
      if (setting == 4) {
        if (p.version == 0) {
          const total = p.partA + p.partB + p.partC;
          let num = undefined;
          let deno = undefined;
          if (p.choiceVar == "A") {
            if (p.choice == "left") {
              num = p.partA * (p.denoA - p.numA);
              deno = total * p.denoA;
            }
            if (p.choice == "removed") {
              num = p.partA * p.numA;
              deno = total * p.denoA;
            }
          }
          if (p.choiceVar == "B") {
            if (p.choice == "left") {
              num = p.partB * (p.denoB - p.numB);
              deno = total * p.denoB;
            }
            if (p.choice == "removed") {
              num = p.partB * p.numB;
              deno = total * p.denoB;
            }
          }
          if (p.choiceVar == "C") {
            if (p.choice == "left") {
              num = p.partC * (p.denoC - p.numC);
              deno = total * p.denoC;
            }
            if (p.choice == "removed") {
              num = p.partC * p.numC;
              deno = total * p.denoC;
            }
          }
          [num, deno] = simplify(num, deno);
          correctAnswer = `${num}/${deno}`;
        }
        if (p.version == 1) {
          if (p.versionOne == 0) {
            correctAnswer =
              (p.value / p.likeNumerator) *
              (p.likeDenominator - p.likeNumerator);
          }
          if (p.versionOne == 1) {
            correctAnswer = (p.value / p.likeNumerator) * p.finalNumTwo;
          }
        }
      }
      if (setting == 5) {
        if (p.version == 1 || p.version == 2) {
          const commonNum = commonDeno(p.numA, p.numB);
          const multiOne = commonNum / p.numA;
          const multiTwo = commonNum / p.numB;
          let unitA = p.denoA * multiOne;
          let unitB = p.denoB * multiTwo;
          [unitA, unitB] = simplify(unitA, unitB);
          correctAnswer = `${unitA}:${unitB}`;
        }
        if (p.version == 3) {
          const otherNumA = p.denoA - p.numA;
          const otherNumB = p.denoB - p.numB;
          const commonNum = commonDeno(otherNumA, otherNumB);
          const multiOne = commonNum / otherNumA;
          const multiTwo = commonNum / otherNumB;
          let lastA = p.denoA * multiOne;
          let lastB = p.denoB * multiTwo;
          [lastA, lastB] = simplify(lastA, lastB);
          correctAnswer = `${lastA}:${lastB}`;
        }
      }
      if (setting == 6) {
        const deno = commonDeno(p.denoA, p.denoB);
        const multiOne = deno / p.denoA;
        const multiTwo = deno / p.denoB;
        let removed = p.numA * multiOne + p.numB * multiTwo;
        let left = deno * 2 - removed;
        let total = deno * 2;
        if (p.choice == "removed") {
          [removed, total] = simplify(removed, total);
          correctAnswer = `${removed}/${total}`;
        }
        if (p.choice == "left") {
          [left, total] = simplify(left, total);
          correctAnswer = `${left}/${total}`;
        }
      }

      if (setting == 7) {
        // if (p.direction == "+") {
        //   correctAnswer = p.oneUnit * p.last_deno;
        // }
        correctAnswer = p.oneUnit * p.last_deno;
      }

      // AREA OF RIGHT ANGLED TRIANGLE
      if (setting == 8) {
        if (p.chosenHeight == "A") correctAnswer = (1 / 2) * p.base * p.height;
        if (p.chosenHeight == "B")
          correctAnswer = (1 / 2) * p.lengthAB * p.lengthSecondH;
        if (p.chosenHeight == "C")
          correctAnswer = (1 / 2) * p.lengthBC * p.lengthThirdH;
      }

      // AREA OF TRIANGLE
      if (setting == 9) {
        console.log(p.first, p.second, p.base, p.height);
        const onePart = (p.base * 2) / 4;
        const base = Math.abs(p.second - p.first) * onePart;
        correctAnswer = (1 / 2) * base * p.height;
      }

      //GEOMETRY: BIG - SMALL
      if (setting == 10) {
        const triangleA = (1 / 2) * p.pointAX * 6;
        const triangleB = (1 / 2) * (8 - p.pointAX) * p.pointBY;
        const triangleC = (1 / 2) * 8 * (6 - p.pointBY);
        const figure = 6 * 8;
        correctAnswer =
          (figure - (triangleA + triangleB + triangleC)) * p.side * p.side;
      }
      //VOLUME AND SURFACE AREA
      if (setting == 11) {
        if (p.type == 1) {
          if (p.question == "base area") correctAnswer = p.length * p.breadth;
          if (p.question == "top") correctAnswer = p.length * p.breadth;
          if (p.question == "front") correctAnswer = p.length * p.height;
          if (p.question == "side") correctAnswer = p.height * p.breadth;
        }
        if (p.type == 2) {
          if (p.question == "length") correctAnswer = p.length;
          if (p.question == "breadth") correctAnswer = p.breadth;
          if (p.question == "height") correctAnswer = p.height;
        }
      }

      // VOLUME: NUMERATOR WITH A VALUE
      if (setting == 12) {
        if (p.type == 1)
          correctAnswer =
            (p.length * p.breadth * p.height * p.numerator) / p.height;
        if (p.type == 2) {
          correctAnswer =
            (p.length * p.breadth * p.height * (p.height - p.numerator)) /
            p.height;
        }
        if (p.type == 3) {
          correctAnswer = p.length * p.breadth * p.height;
        }
        if (p.type == 4) {
          correctAnswer = p.height;
        }
      }

      //RATIO: SIMPLIFICATION AND EXPANSION
      if (setting == 13) {
        correctAnswer = p.answer;
      }

      //RATIO: SHAPES
      if (setting == 14) {
        let shaded = p.shaded;
        let unshaded = p.total - shaded;
        [shaded, unshaded] = simplify(shaded, unshaded);
        if (p.secondVar == "unshaded") correctAnswer = `${shaded}:${unshaded}`;
        if (p.secondVar == "total")
          correctAnswer = `${shaded}:${shaded + unshaded}`;

        // }
      }
      // RATIO: REPEATED IDENTITY
      if (setting == 15) {
        calArrQns = simplestForm(calArrQns);
        correctAnswer = `${calArrQns[5]}:${calArrQns[6]}:${calArrQns[8]}`;
      }

      // RATIO: IDENTICAL TOTAL
      if (setting == 16) {
        let totalA = p.ratioA + p.ratioB;
        let totalB = p.ratioC + p.ratioD;
        const commonTotal = commonDeno(totalA, totalB);
        const multiOne = commonTotal / totalA;
        const multiTwo = commonTotal / totalB;
        let newA = p.ratioA * multiOne;
        let newB = p.ratioB * multiOne;
        let newC = p.ratioC * multiTwo;
        let newD = p.ratioD * multiTwo;

        if (p.question == 1) {
          let newTotalA = newA + newC;
          let newTotalB = newB + newD;
          [newTotalA, newTotalB] = simplify(newTotalA, newTotalB);
          correctAnswer = `${newTotalA}:${newTotalB}`;
        }
        if (p.question == 2) {
          [newA, newC] = simplify(newA, newC);
          correctAnswer = `${newA}:${newC}`;
        }
        if (p.question == 3) {
          [newB, newD] = simplify(newB, newD);
          correctAnswer = `${newB}:${newD}`;
        }
      }

      //RATIO: WIPE ON WIPE OFF
      if (setting == 17) {
        correctAnswer = Math.abs(p.change);
        if (p.version == "difference") {
          const differenceAtFirst = Math.abs(p.shaded - p.unshaded);
          let shadedEnd = (p.shaded += p.change);
          let unshadedEnd = (p.unshaded += p.change);
          [shadedEnd, unshadedEnd] = simplify(shadedEnd, unshadedEnd);
          const differenceEnd = Math.abs(shadedEnd - unshadedEnd);
          const commonNum = commonDeno(differenceAtFirst, differenceEnd);
          correctAnswer =
            (commonNum / differenceAtFirst) * p.shaded -
            (commonNum / differenceEnd) * shadedEnd;
        }
      }

      if (setting == 18) {
        if (p.type == "part thereof") {
          correctAnswer = Math.ceil(p.duration / p.group) * p.rates;
        }
        if (p.type == "part thereafter") {
          correctAnswer = Math.floor(p.duration / p.group) * p.rates;
        }
      }

      if (setting == 19) {
        const capacity = p.length * p.breadth * p.height;
        const fill = (capacity / p.deno) * (p.deno - p.nume);
        const drain = (capacity / p.deno) * p.nume;
        if (p.netRate > 0) {
          console.log("Type 1");
          correctAnswer = fill / (p.netRate * 1000);
        }
        if (p.netRate < 0) {
          console.log("Type 2");
          correctAnswer = drain / Math.abs(p.netRate * 1000);
        }

        const str = correctAnswer.toString().split(".")[1];
        if (str) {
          if (str.length > 2) {
            correctAnswer = correctAnswer.toFixed(2) * 1;
          }
        }
      }

      //PERCENTAGE: PERCENTAGE OF
      if (setting == 20) {
        if (p.start == "fractions" || p.start == "decimals") {
          correctAnswer = `${accDecimal((p.nume / p.deno) * 100)}%`;
        }
        if (p.start == "percentage") {
          if (p.end == "fractions") {
            [p.nume, p.deno] = simplify(p.nume, p.deno);
            correctAnswer = `${p.nume}/${p.deno}`;
          }
          if (p.end == "decimals") {
            correctAnswer = `${accDecimal(p.nume / p.deno)}`;
          }
        }
      }
      //PERCENRAGE: PERCENTAGE CHANGE
      if (setting == 21) {
        const change = Math.abs(p.next - p.previous);
        if (p.version == "change")
          correctAnswer = `${accDecimal((change / p.previous) * 100)}%`;
        if (p.version == "percentage forward")
          correctAnswer = accDecimal((p.previous / 100) * (100 + p.change));
        if (p.version == "percentage back")
          correctAnswer = accDecimal((p.next / (100 + p.change)) * 100);
      }
      // PERCENTAGE: REPEATED IDENTITY
      if (setting == 22) {
        p.answer = simplestForm(p.answer);
        correctAnswer = p.answer.join(":");
      }

      // PERCENTAGE: REMAINDER CONCEPT
      if (setting == 23) {
        if (p.question == "percentage") {
          const remaining = 100 - p.percA;
          const itemTwoP = (remaining / 100) * p.percR;
          correctAnswer = itemTwoP;
        } else if (p.question == "percentage left") {
          const remaining = 100 - p.percA;
          const itemTwoP = (remaining / 100) * p.percR;
          correctAnswer = 100 - itemTwoP - p.percA;
        } else {
          correctAnswer = p.answer;
        }
      }
      // PERCENTAGE: SIMPLE AND FURTHER DISCOUNT
      if (setting == 24) {
        if (p.frontBack == "front") {
          if (p.moreDiscount == 0) {
            if (p.discountOrPrice == "price") {
              correctAnswer = (p.cost / 100) * (100 - p.simpleDiscount);
            }
            if (p.discountOrPrice == "discount") {
              correctAnswer = (p.cost / 100) * p.simpleDiscount;
            }
          }
          if (p.moreDiscount == 1) {
            const actualDiscount =
              ((100 - p.simpleDiscount) / 100) * p.furtherDiscount +
              p.simpleDiscount;
            if (p.discountOrPrice == "price") {
              correctAnswer = (p.cost / 100) * (100 - actualDiscount);
            }
            if (p.discountOrPrice == "discount") {
              correctAnswer = (p.cost / 100) * actualDiscount;
            }
          }
        }
        if (p.frontBack == "back") {
          if (p.moreDiscount == 0) {
            if (p.discountOrPrice == "price") {
              correctAnswer = (p.cost / (100 - p.simpleDiscount)) * 100;
            }
            if (p.discountOrPrice == "discount") {
              correctAnswer =
                (p.cost / (100 - p.simpleDiscount)) * p.simpleDiscount;
            }
          }
          if (p.moreDiscount == 1) {
            const actualDiscount =
              ((100 - p.simpleDiscount) / 100) * p.furtherDiscount +
              p.simpleDiscount;
            if (p.discountOrPrice == "price") {
              correctAnswer = (p.cost / (100 - actualDiscount)) * 100;
            }
            if (p.discountOrPrice == "discount") {
              correctAnswer =
                (p.cost / (100 - actualDiscount)) * actualDiscount;
            }
          }
        }
        correctAnswer = accDecimal(correctAnswer.toFixed(2));
      }

      if (setting == 25) correctAnswer = p.answer;

      //AVERAGE: TRIANGLE NUMBERS
      if (setting == 26) {
        if (p.type == "average") {
          console.log(p.start, p.end);
          const average = (p.end + p.start) / 2;
          const variables = p.end - p.start + 1;
          correctAnswer = average * variables;
        }
        if (p.type == "multiples") {
          correctAnswer =
            (((p.end + p.start) * (p.end - p.start + 1)) / 2) * p.multiple;
        }
      }
    }

    //ANSWERS
    if (level == "calFiveb") {
      // FRACTIONS: REMAINDER CONCEPT: BEFORE AND AFTER
      if (setting == 1) {
        correctAnswer = p.atFirstUnits * p.oneUnit;
      }
      // FRACTIONS: REMAINDER CONCEPT: UNDER THE SAME UNIT
      if (setting == 2) {
        if (p.chosen == "A")
          correctAnswer = p.quantityA + Math.floor(p.extraBought);
        if (p.chosen == "B")
          correctAnswer = p.quantityB + Math.floor(p.extraBought);
      }
      //FRACTIONS: OVERLAPPING MODEL
      if (setting == 3) {
        if (p.question == "A") correctAnswer = p.oneUnit * p.numeA;
        if (p.question == "B")
          correctAnswer = p.oneUnit * p.numeA + p.difference;
        if (p.question == "total") correctAnswer = p.oneUnit * p.denoA;
      }

      if (setting == 4) {
        correctAnswer = p.answer;
      }

      // AREA OF OBTUSE TRIANGLE
      if (setting == 5) {
        if (p.chosenHeight == "A") correctAnswer = (1 / 2) * p.base * p.height;
        if (p.chosenHeight == "B")
          correctAnswer = (1 / 2) * p.lengthAB * p.lengthSecondH;
        if (p.chosenHeight == "C")
          correctAnswer = (1 / 2) * p.lengthBC * p.lengthThirdH;
      }
      //GEOMETRY: AREA OF FIGURE: CUTTING
      if (setting == 6) {
        const baseA = p.valueA - p.valueB - p.adjust;
        const triangleA = (1 / 2) * baseA * p.valueA;
        const triangleB = (1 / 2) * p.valueB * (p.valueB + p.adjust);
        correctAnswer = triangleA + triangleB;
      }
      //GEOMETRY: MANIPULATION OF DIMENSION
      if (setting == 7) {
        correctAnswer = (1 / 2) * p.length * p.breadth;
      }
      if (setting == 8) {
        // if (p.label == 1) {
        const half = (1 / 2) * p.length * p.breadth;
        if (p.givenLabel == "A") correctAnswer = half - p.areaA;
        if (p.givenLabel == "B") correctAnswer = half - p.areaB;
        if (p.givenLabel == "C") correctAnswer = half - p.areaC;
        if (p.givenLabel == "D") correctAnswer = half - p.areaD;
        // }
      }
      // AREA OF FIGURE: DOUBLE UNITS
      if (setting == 9) {
        let pointDF = p.firstTriangleBase;
        let pointCF = p.length - p.firstTriangleBase;
        [pointDF, pointCF] = simplify(pointDF, pointCF);
        let pointBE = p.thirdTriangleHeight;
        let pointCE = p.breadth - p.thirdTriangleHeight;
        [pointBE, pointCE] = simplify(pointBE, pointCE);

        let firstTriangleNume = (pointDF * (pointBE + pointCE)) / 2;
        // let firstTriangleDeno = 2;
        let secondTriangleNume = (pointCF * pointCE) / 2;
        // let secondTriangleDeno = 2;
        let thirdTriangleNume = ((pointDF + pointCF) * pointBE) / 2;
        // let thirdTriangleDeno = 2;
        console.log(firstTriangleNume, secondTriangleNume, thirdTriangleNume);
        let totalTriangle =
          firstTriangleNume + secondTriangleNume + thirdTriangleNume;
        //GET RID OF DECIMALS *2
        let shaded =
          (pointDF + pointCF) * (pointBE + pointCE) * 2 - totalTriangle * 2;
        let area = (pointDF + pointCF) * (pointBE + pointCE) * 2;
        [shaded, area] = simplify(shaded, area);
        correctAnswer = `${shaded}/${area}`;
      }
      // RATIO: REPEATED GROUP
      if (setting == 10) {
        p.answer = simplestForm(p.answer);
        console.log(p.answer);
        // if (p.firstScene == "total" && p.secondScene == "total") {
        correctAnswer = `${p.answer[0]}:${p.answer[1]}:${p.answer[2]}`;
        // }
      }
      // RATIO: UNCHANGED OBJ
      if (setting == 11) {
        console.log(p.valueAFirst, p.valueBFirst, p.valueAEnd, p.valueBEnd);
        // if (p.question == "AF") correctAnswer = p.valueAFirst * p.multiplier;
        // if (p.question == "BF") correctAnswer = p.valueBFirst * p.multiplier;
        // if (p.question == "AE") correctAnswer = p.valueAEnd * p.multiplier;
        // if (p.question == "BE") correctAnswer = p.valueBEnd * p.multiplier;
        correctAnswer = p.answer;
      }
      // RATIO: UNCHANGED TOTAL
      if (setting == 12) {
        if (p.question == "AF") correctAnswer = p.valueAFirst * p.multiplier;
        if (p.question == "BF") correctAnswer = p.valueBFirst * p.multiplier;
        if (p.question == "AE") correctAnswer = p.valueAEnd * p.multiplier;
        if (p.question == "BE") correctAnswer = p.valueBEnd * p.multiplier;
      }
      // RATIO: UNCHANGED DIFFERENCE
      if (setting == 13) {
        if (p.question == "AF") correctAnswer = p.valueAFirst * p.multiplier;
        if (p.question == "BF") correctAnswer = p.valueBFirst * p.multiplier;
        if (p.question == "AE") correctAnswer = p.valueAEnd * p.multiplier;
        if (p.question == "BE") correctAnswer = p.valueBEnd * p.multiplier;
      }
      // RATIO: MANIPULATION IN UNITS
      if (setting == 14) {
        const commonNumber = commonDeno(p.denoA, p.denoB);
        let end_A = ((p.ratioA * (p.denoA - p.numeA)) / p.denoA) * commonNumber;
        let end_B = ((p.ratioB * (p.denoB - p.numeB)) / p.denoB) * commonNumber;
        [end_A, end_B] = simplify(end_A, end_B);
        correctAnswer = `${end_A}:${end_B}`;
      }
      // RATIO: REPEATED IDENTITY (GEOMETRY)
      if (setting == 15) {
        correctAnswer = p.answer;
      }
      if (setting == 16) {
        console.log(p.answer);
        // got to change to an array
        p.answer = p.answer.split(":");
        console.log(p.answer, typeof p.answer);
        p.answer = simplestForm(p.answer).join(":");
        correctAnswer = p.answer;
      }
      //PERCENTAGE: OVERLAPPING MODEL
      if (setting == 17) {
        if (p.question == "A") correctAnswer = p.oneUnit * p.numeA;
        if (p.question == "B")
          correctAnswer = p.oneUnit * p.numeA + p.difference;
        if (p.question == "total") correctAnswer = p.oneUnit * p.denoA;
      }
      // PERCENTAGE: GST, DISCOUNT AND SERVICE CHARGE
      if (setting == 18) {
        if (p.optionOne == "simple gst") {
          if (p.optionTwo == "gst") {
            correctAnswer = (p.value / 100) * p.gst;
          }
          if (p.optionTwo == "cost") {
            correctAnswer = (p.value / 100) * (100 + p.gst);
          }
        }
        if (p.optionOne == "service") {
          correctAnswer = p.value * 100;
        }
        if (p.optionOne == "discount gst") {
          if (p.optionThree == "final cost") {
            correctAnswer =
              (((p.value / 100) * (100 - p.discount)) / 100) *
              (100 + p.gst).toFixed(2);
          }
          if (p.optionThree == "initial cost") {
            correctAnswer = accDecimal(p.value);
          }
        }
        if (correctAnswer % 1 != 0) {
          console.log(p.value);
          correctAnswer = correctAnswer.toFixed(2);
        }
      }
      // PERCENTAG: IDENTICAL EFFECT
      if (setting == 19) correctAnswer = p.salary;
      if (setting == 20) {
        if (p.question == "at first") {
          correctAnswer = p.oldQuantity;
        }
        if (p.question == "in the end") {
          correctAnswer = p.oldQuantity + p.changeQuantity;
        }
      }
      //AVERAGE: CONSECUTIVE DAYS
      if (setting == 21) {
        correctAnswer = p.dayOne + p.increase * (p.chosen - 1);
      }

      //RATIO: MANIPULATION OF UNITS WITH VALUE
      if (setting == 22) {
        correctAnswer = p.total;
      }

      // PATTERN: CONTINUOUS PATTERN (SETS)
      if (setting == 23) {
        if (p.question == "pattern") correctAnswer = p.value;
        if (p.question == "number") correctAnswer = p.pattern;
      }

      // RATIO: UNIDENTICAL GROUP

      if (setting == 24) {
        if (p.question == "FM") {
          [p.A2, p.B1] = simplify(p.A2, p.B1);
          correctAnswer = `${p.A2}:${p.B1}`;
        }
        if (p.question == "FF") {
          [p.A2, p.B2] = simplify(p.A2, p.B2);
          correctAnswer = `${p.A2}:${p.B2}`;
        }
        if (p.question == "MF") {
          [p.A1, p.B2] = simplify(p.A1, p.B2);
          correctAnswer = `${p.A1}:${p.B2}`;
        }
        if (p.question == "MM") {
          [p.A1, p.B1] = simplify(p.A1, p.B1);
          correctAnswer = `${p.A1}:${p.B1}`;
        }
      }
    }

    //ANSWERS
    if (level == "calSix") {
      if (setting == 1) {
        let start = p.whole + p.numerator / p.denominator;
        if (p.type == "whole") start = p.whole;
        const object = p.numeratorTwo / p.denominatorTwo;
        const quotient = Math.floor(start / object);
        let remainder = start * p.denominatorTwo - p.numeratorTwo * quotient;
        console.log(start, object, quotient, remainder);
        if (p.question == "quotient") correctAnswer = quotient;
        if (p.question == "remainder") {
          [remainder, p.denominatorTwo] = simplify(remainder, p.denominatorTwo);
          correctAnswer = `${remainder}/${p.denominatorTwo}`;
          if (p.type == "simple fractions" || p.type == "mixed fractions") {
            // change to improper fraction
            const totalNume = p.whole * p.denominator + p.numerator;
            const comDeno = commonDeno(p.denominator, p.denominatorTwo);
            let newNumeOne = totalNume * (comDeno / p.denominator);
            let newNumeTwo = p.numeratorTwo * (comDeno / p.denominatorTwo);
            let leftNume = newNumeOne - newNumeTwo * quotient;
            let leftDeno = comDeno;
            [leftNume, leftDeno] = simplify(leftNume, leftDeno);
            correctAnswer = `${leftNume}/${leftDeno}`;
          }
        }
      }

      // FRACTIONS: NUMERTOR OF A VALUE
      if (setting == 2) {
        let nume = p.numeB * p.denoA * p.question;
        let deno = p.denoB * p.numeA;
        [nume, deno] = simplify(nume, deno);
        const whole = Math.floor(nume / deno);
        const remainder = nume % deno;
        if (remainder == 0) {
          correctAnswer = whole;
        } else if (whole == 0) {
          correctAnswer = `${nume}/${deno}`;
        } else {
          correctAnswer = `${whole} ${remainder}/${deno}`;
        }
      }
      // CIRCLES
      if (setting == 3) {
        if (p.type == "area") {
          let pi = 3.14;
          if (p.radius % 7 == 0) pi = 22 / 7;
          if (p.shapeArea == "quadrant") {
            correctAnswer = (0.25 * pi * p.radius * p.radius) / 100;
          }
          if (p.shapeArea == "semicircle") {
            correctAnswer = (0.5 * pi * p.radius * p.radius) / 100;
          }
          if (p.shapeArea == "segment") {
            correctAnswer =
              (0.25 * pi * p.radius * p.radius -
                (1 / 2) * p.radius * p.radius) /
              100;
          }
          if (p.shapeArea == "sharkfin") {
            correctAnswer =
              (p.radius * p.radius - 0.25 * pi * p.radius * p.radius) / 100;
          }
        }
        if (p.type == "perimeter") {
          let pi = 3.14;
          if (p.radius % 7 == 0) pi = 22 / 7;
          const circumference = 2 * pi * p.radius;
          console.log(pi, p.radius, circumference);
          if (p.shapePerimeter == "quadrant") {
            correctAnswer = 0.25 * circumference + p.radius * 2;
          }
          if (p.shapePerimeter == "semicircle") {
            correctAnswer = 0.5 * circumference + p.radius * 2;
          }
          if (p.shapePerimeter == "threeQuarterCircle") {
            correctAnswer = 0.75 * circumference + p.radius * 2;
          }
          correctAnswer /= 10;
        }
        correctAnswer = accDecimal(correctAnswer);
      }

      // CIRCLES: INNER SQUARE
      if (setting == 4) {
        if (p.given == "radius") {
          correctAnswer = 2 * p.radius * p.radius;
        }
        if (p.given == "square") {
          correctAnswer = p.radius;
        }
      }
      //CIRCLES: OTHERS
      if (setting == 5) {
        if (p.rollType == "triangle") {
          correctAnswer = ((1 / 2) * p.triangleSide * p.triangleSide) / 2;
        }
        if (p.rollType == "radius") {
          correctAnswer = 3.14 * p.squareSideD * p.squareSideD;
        }
        if (p.rollType == "angle" && p.rollAngle == "a") {
          correctAnswer = (180 - p.rotation2) / 2;
        }
        if (p.rollType == "angle" && p.rollAngle == "b") {
          correctAnswer = 180 - p.angleOther * 2;
        }
        if (p.rollType == "square") {
          correctAnswer = p.radius / 10;
        }
        if (p.rollType == "square2") {
          correctAnswer = 2 * (p.radius2 / 20) * (p.radius2 / 20);
        }
        correctAnswer = accDecimal(correctAnswer);
      }
      // SPEED: AVERAGE SPEED OF WHOLE JOURNEY
      if (setting == 6) {
        // average speed whole journey
        if (p.roll == "A") {
          correctAnswer =
            (p.speedB * p.timeB + p.speedC * p.timeC) / (p.timeB + p.timeC);
          console.log(correctAnswer);
          if (correctAnswer - Math.floor(correctAnswer) > 0) {
            const wholeNum = Math.floor(correctAnswer);
            let remainder = accDecimal(
              (correctAnswer - Math.floor(correctAnswer)) * (p.timeB + p.timeC)
            );
            let denominator = p.timeB + p.timeC;
            [remainder, denominator] = simplify(remainder, denominator);
            correctAnswer = `${wholeNum} ${remainder}/${denominator}`;
          }
        }
        // time between B to C
        if (p.roll == "B") {
          correctAnswer =
            (p.speedA * (p.timeB + p.timeC) - p.speedB * p.timeB) / p.timeC;
          console.log(correctAnswer);
          if (correctAnswer - Math.floor(correctAnswer) > 0) {
            const wholeNum = Math.floor(correctAnswer);
            let remainder = accDecimal(
              (correctAnswer - Math.floor(correctAnswer)) * p.timeC
            );
            let denominator = p.timeC;
            [remainder, denominator] = simplify(remainder, denominator);
            correctAnswer = `${wholeNum} ${remainder}/${denominator}`;
          }
        }
        // speed between B to C
        if (p.roll == "C") {
          correctAnswer = (p.speedA * p.timeA - p.speedB * p.timeB) / p.speedC;
          console.log(correctAnswer);
          if (correctAnswer - Math.floor(correctAnswer) > 0) {
            const wholeNum = Math.floor(correctAnswer);
            let remainder = accDecimal(
              (correctAnswer - Math.floor(correctAnswer)) * p.speedC
            );
            let denominator = p.speedC;
            [remainder, denominator] = simplify(remainder, denominator);
            correctAnswer = `${wholeNum} ${remainder}/${denominator}`;
          }
        }
      }
      // SPEED: MOVING APART
      if (setting == 7) {
        if (p.version == "A") {
          correctAnswer = p.distance;
        }
        if (p.version == "B") {
          correctAnswer = p.time;
        }
        if (p.version == "C") {
          correctAnswer = p.speedB;
        }
        if (p.version == "D") {
          correctAnswer = p.speedA;
        }
        if (p.version == "E") {
          if (p.which == "A") correctAnswer = p.speedA;
          if (p.which == "B") correctAnswer = p.speedB;
        }
      }

      //SPEED: DIFFERENCE IN SPEED (MID)
      if (setting == 8) {
        if (p.question == "A") correctAnswer = (p.speedA * p.time) / 60;
        if (p.question == "B") correctAnswer = (p.speedB * p.time) / 60;
        if (p.question == "total")
          correctAnswer = ((p.speedA + p.speedB) * p.time) / 60;
      }

      // SPEED: SURROGATE
      if (setting == 9) {
        if (p.question == "A") correctAnswer = p.speedA;
        if (p.question == "B") correctAnswer = p.speedB;
      }
      //PIE CHART
      if (setting == 10) {
        if (p.choice == "fraction") correctAnswer = p.fractions;
        if (p.choice == "decimal") correctAnswer = p.decimals;
        if (p.choice == "ratio") correctAnswer = p.ratio;
        if (p.choice == "percentage") correctAnswer = p.percentage;
        if (p.choice == "angle") correctAnswer = p.angles;
      }
    }
    // ANSWERS
    if (level == "calSixb") {
      //SPEED: MEET UP
      if (setting == 1) {
        if (p.roll == "A") {
          correctAnswer = p.distance / (p.speedA + p.speedB);
        }
        // natural
        if (p.roll == "B") {
          // correctAnswer = `(${p.distance}-${p.speedA * p.timeA})/(${p.speedA}+${
          //   p.speedB
          // })`;
          correctAnswer =
            (p.distance - p.timeA * p.speedA) / (p.speedA + p.speedB) + p.timeA;
        }
        // headstart
        if (p.roll == "C") {
          // correctAnswer = `(${p.distance}-${p.speedA * p.timeA})/(${p.speedA}+${
          //   p.speedB
          // })`;
          correctAnswer =
            (p.distance - p.speedA * p.timeA) / (p.speedA + p.speedB) + p.timeA;
        }

        // distance
        if (p.roll == "D") {
          // correctAnswer = `(${p.speedA}+${p.speedB})x${p.timeA + p.timeB}`;
          correctAnswer = (p.speedA + p.speedB) * (p.timeA + p.timeB);
        }
      }
      //SPEED: CATCH UP
      if (setting == 2) {
        if (p.roll == "A" || p.roll == "B") {
          // console.log(p.diffSpeed);
          correctAnswer = p.gap / p.diffSpeed;
        }
        if (p.roll == "C") {
          correctAnswer = p.gap;
        }
        if (p.roll == "D") {
          correctAnswer = p.speedB;
        }
        if (p.roll == "E") {
          correctAnswer = p.speedA;
        }
      }

      if (setting == 3) {
        if (p.type == "normalSpeedToTime") {
          const oneUnit = p.differenceTime / Math.abs(p.timeA - p.timeB);
          const actualTimeA = oneUnit * p.timeA;
          correctAnswer = (actualTimeA / 60) * p.speedA;
          if (correctAnswer % 1 != 0) {
            let remainder = (actualTimeA * p.speedA) % 60;
            let time = 60;
            let whole = (Math.floor(correctAnswer)[(remainder, time)] =
              simplify(remainder, time));
            correctAnswer = `${whole} ${remainder}/${time}`;
          }
        }
        if (p.type == "normalTimeToSpeed") {
          const oneUnit = p.differenceSpeed / Math.abs(p.speedA - p.speedB);
          console.log(`one unit is ${oneUnit}`);
          if (p.question == 1) {
            correctAnswer = (oneUnit * p.speedA * p.timeA) / 60;
            if (correctAnswer % 1 != 0) {
              let remainder = (oneUnit * p.speedA * p.timeA) % 60;
              let time = 60;
              let whole = (Math.floor(correctAnswer)[(remainder, time)] =
                simplify(remainder, time));
              correctAnswer = `${whole} ${remainder}/${time}`;
            }
          }
          if (p.question == 2) {
            correctAnswer = oneUnit * p.speedA;
          }
          if (p.question == 3) {
            correctAnswer = oneUnit * p.speedB;
          }
        }
        if (p.type == "meet up") {
          let speedAUnits;
          let speedBUnits;
          [speedBUnits, speedAUnits] = simplify(p.timeA, p.timeB);
          console.log(speedBUnits);
          const distance = speedAUnits * p.timeA;
          const meetUp = distance / (p.speedA + p.speedB);
          console.log(distance, meetUp);
          if (meetUp % 1 == 0) {
            correctAnswer = meetUp;
          } else {
            const quotient = Math.floor(meetUp);
            let remainder = distance % (p.speedA + p.speedB);
            let deno = p.speedA + p.speedB;
            [remainder, deno] = simplify(remainder, deno);
            correctAnswer = `${quotient} ${remainder}/${deno}`;
          }
        }
      }
      // VOLUME: GROUPING
      if (setting == 4) {
        if (p.question == "transfer") correctAnswer = p.answer;
        if (p.question == "finalA")
          correctAnswer = p.groups * p.finalHeightUnitA;
        if (p.question == "finalB")
          correctAnswer = p.groups * p.finalHeightUnitB;
      }

      // VOLUME: CATCH UP
      if (setting == 5) {
        const heightAPerMin = (p.tapA * 1000) / (p.lengthA * p.breadthA);
        const heightBPerMin = (p.tapB * 1000) / (p.lengthB * p.breadthB);
        const differenceHeight = Math.abs(p.waterLevelA - p.waterLevelB);
        const differenceHeightTap = Math.abs(heightAPerMin - heightBPerMin);
        const catchUpTime = differenceHeight / differenceHeightTap;

        if (p.question == "final height") {
          correctAnswer = catchUpTime;
        }
        if (p.question == "finalWaterLevel") {
          correctAnswer = p.waterLevelA + catchUpTime * heightAPerMin;
        }
        const str = correctAnswer.toString().split(".")[1];
        if (str) {
          if (str.length > 3) {
            correctAnswer = correctAnswer.toFixed(2);
          }
        }
      }
      // GEOMETRY: REPEATED IDENTITY
      if (setting == 6) {
        if (p.type == 1) {
          const rect = p.rectLength * p.rectBreadth;
          const triangle = (1 / 2) * p.triangleBase * p.rectLength;
          correctAnswer = Math.abs(rect - triangle);
        }
        if (p.type == 2) {
          correctAnswer = 0.5 * p.squareSides * p.squareSides;
        }
        if (p.type == 3 || p.type == 4) {
          const triangleA = 0.5 * p.triangleBase * p.squareSides;
          const triangleB = 0.5 * p.triangle2ndBase * p.squareSides;
          correctAnswer = triangleB - triangleA;
        }
      }

      // GEOMETRY: MANIPULATION OF DIMENSION: OVERLAPPING TRIANGLE

      if (setting == 7) {
        const overlappingArea = (1 / 2) * p.rectLength * p.rectBreadth;
        const unshaded = overlappingArea - p.quadrilateral;
        const figure = p.rectLength * p.rectBreadth;
        if (p.type == 1) {
          correctAnswer = figure - unshaded;
        }
      }
    }

    // heuristics Answer
    if (level == "heuOne") {
      if (setting == 1) {
        if (p.rollAB == "A" && p.rollVar == 0) {
          correctAnswer = `${p.numOne}-${p.numTwo}=${p.numOne - p.numTwo}`;
          correctAnswerTwo = p.numOne - p.numTwo;
        }
        if (p.rollAB == "A" && p.rollVar == 1) {
          correctAnswer = `${p.numOne}+${p.numTwo}=${p.numOne + p.numTwo}`;
          correctAnswerTwo = p.numOne + p.numTwo;
        }
        if (p.rollAB == "B" && p.rollVar == 0) {
          correctAnswer = `${p.numOne}+${p.numTwo}=${p.numOne + p.numTwo}`;
          correctAnswerTwo = p.numOne + p.numTwo;
        }
        if (p.rollAB == "B" && p.rollVar == 1) {
          correctAnswer = `${p.numOne}-${p.numTwo}=${p.numOne - p.numTwo}`;
          correctAnswerTwo = p.numOne - p.numTwo;
        }
      }

      if (setting == 2) {
        correctAnswer = p.numOne + p.numTwo;
      }

      if (setting == 3) {
        if (p.rollChoice == 0) {
          correctAnswer = p.numTwo;
        }
        if (p.rollChoice == 1) {
          correctAnswer = p.numOne;
        }
      }

      if (setting == 4) {
        correctAnswer = Math.abs(p.numOne - p.numTwo);
      }

      if (setting == 5) {
        if (p.rollLineThree == "A") {
          correctAnswer = p.varA;
        }
        if (p.rollLineThree == "B") {
          correctAnswer = p.varB;
        }
        if (p.rollLineThree == "total") {
          correctAnswer = p.total;
        }
      }
    }
    // answers
    if (level == "heuTwo") {
      if (setting == 1) {
        let interval = p.distance / (p.indexTwo - p.indexOne);
        correctAnswer = `${p.indexTwo + 1}-${p.indexOne + 1}=${
          p.indexTwo - p.indexOne
        }\n${p.distance}/${p.indexTwo - p.indexOne}=${interval}\n${
          p.indexFour + 1
        }-${p.indexThree + 1}=${p.indexFour - p.indexThree}\n${interval}x${
          p.indexFour - p.indexThree
        }=${p.rollDistance * (p.indexFour - p.indexThree)}`;
        correctAnswerTwo = p.rollDistance * (p.indexFour - p.indexThree);
      }
      if (setting == 2) {
        correctAnswer = `${p.numOne}-${p.numTwo}=${p.numOne - p.numTwo}\n${
          p.numOne - p.numTwo
        }/2=${(p.numOne - p.numTwo) / 2}`;
        correctAnswerTwo = (p.numOne - p.numTwo) / 2;
      }
      if (setting == 3) {
        correctAnswer = `${p.difference}x2=${p.difference * 2}`;
        correctAnswerTwo = p.difference * 2;
      }
      if (setting == 4) {
        if (p.version == 1 || p.version == 2) {
          const intervals = p.twoPos + 6 - (p.onePos + 1);
          const lineOne = `${p.twoPos + 6}-${p.onePos + 1}=${intervals}`;
          const lineTwo = `${intervals}-1=${intervals - 1}`;
          correctAnswer = `${lineOne}\n${lineTwo}`;
          correctAnswerTwo = intervals - 1;
        }
        if (p.version == 3) {
          const intervals = p.between + 1;
          const total = p.onePos + 1 + intervals;
          let conclusion = "";
          if (total == 1) {
            conclusion = `${total}st`;
          } else if (total == 2) {
            conclusion = `${total}nd`;
          } else if (total == 3) {
            conclusion = `${total}rd`;
          } else {
            conclusion = `${total}th`;
          }
          correctAnswer = `${p.between}+1=${intervals}\n${intervals}+${
            p.onePos + 1
          }=${total}\n${conclusion}`;
          correctAnswerTwo = conclusion;
        }
      }
    }

    // answers
    if (level == "heuTwob") {
      if (
        setting == 1 ||
        (setting == 9 && p.rollz == 1) ||
        (range == 1 && p.rollz == 1)
      ) {
        if (p.rollAB == "A" && p.rollVar == 0) {
          correctAnswer = p.numOne - p.numTwo;
        }
        if (p.rollAB == "A" && p.rollVar == 1) {
          correctAnswer = p.numOne + p.numTwo;
        }
        if (p.rollAB == "B" && p.rollVar == 0) {
          correctAnswer = p.numOne + p.numTwo;
        }
        if (p.rollAB == "B" && p.rollVar == 1) {
          correctAnswer = p.numOne - p.numTwo;
        }
      }

      if (
        setting == 2 ||
        (setting == 9 && p.rollz == 2) ||
        (range == 1 && p.rollz == 2)
      ) {
        correctAnswer = p.numOne + p.numTwo;
      }

      if (
        setting == 3 ||
        (setting == 9 && p.rollz == 3) ||
        (range == 1 && p.rollz == 3)
      ) {
        if (p.rollChoice == 0) {
          correctAnswer = p.numTwo;
        }
        if (p.rollChoice == 1) {
          correctAnswer = p.numOne;
        }
      }

      if (
        setting == 4 ||
        (setting == 9 && p.rollz == 4) ||
        (range == 1 && p.rollz == 4)
      ) {
        correctAnswer = Math.abs(p.numOne - p.numTwo);
      }

      if (
        setting == 5 ||
        (setting == 9 && p.rollz == 5) ||
        (range == 1 && p.rollz == 5)
      ) {
        if (p.rollLineThree == "A") {
          correctAnswer = p.varA;
        }
        if (p.rollLineThree == "B") {
          correctAnswer = p.varB;
        }
        if (p.rollLineThree == "total") {
          correctAnswer = p.total;
        }
      }

      if (
        setting == 6 ||
        (setting == 9 && p.rollz == 6) ||
        (range == 1 && p.rollz == 6)
      ) {
        correctAnswer = p.each * p.packets + p.left;
      }

      if (setting == 7) {
        if (p.type == 0 || p.type == 2) correctAnswer = p.eachUnit;
        if (p.type == 1) correctAnswer = p.units;
      }

      if (setting == 8) {
        const valueA = p.oneUnit * p.unitA;
        const valueB = p.oneUnit * p.unitB;
        const valueAEnd = valueA + p.situationA;
        const valueBEnd = valueB + p.situationB;
        const diffEnd = valueAEnd - valueBEnd;
        if (p.type == "unit") {
          if (p.choice == "A") correctAnswer = p.oneUnit * p.unitA;
          if (p.choice == "B") correctAnswer = p.oneUnit * p.unitB;
        }
        if (p.type == "diff") {
          correctAnswer = Math.abs(diffEnd);
        }
      }
    }

    //  answer
    if (level == "heuThree") {
      if (
        setting == 1 ||
        (setting == 9 && p.rollz == 1) ||
        (range == 1 && p.rollz == 1)
      ) {
        let difference = Math.abs(p.numOne - p.numTwo);
        let adjustment = undefined;
        if (p.rollAnswer == 0) {
          if (p.numOne > p.numTwo) {
            adjustment = p.numOne + p.numTwo + difference;
          } else {
            adjustment = p.numOne + p.numTwo - difference;
          }
        }
        if (p.rollAnswer == 1) {
          if (p.numOne > p.numTwo) {
            adjustment = p.numOne + p.numTwo - difference;
          } else {
            adjustment = p.numOne + p.numTwo + difference;
          }
        }
        if (p.rollAnswer == 0) {
          correctAnswer = `${p.numOne + p.numTwo}${
            p.numOne > p.numTwo ? "+" : "-"
          }${Math.abs(p.numOne - p.numTwo)}=${adjustment}\n${adjustment}/2=${
            p.numOne
          }`;
          correctAnswerTwo = p.numOne;
        }
        if (p.rollAnswer == 1) {
          correctAnswer = `${p.numOne + p.numTwo}${
            p.numOne < p.numTwo ? "+" : "-"
          }${Math.abs(p.numOne - p.numTwo)}=${adjustment}\n${adjustment}/2=${
            p.numTwo
          }`;
          correctAnswerTwo = p.numTwo;
        }
      }
      if (
        setting == 2 ||
        (setting == 9 && p.rollz == 2) ||
        (range == 1 && p.rollz == 2)
      ) {
        let smallDifference = p.legTwo - p.legOne;
        let totalAnimal = p.numOne + p.numTwo;
        if (p.rollQn == "A") {
          let bigDifference = p.legTwo * totalAnimal - p.total;
          correctAnswer = `${totalAnimal}x${p.legTwo}=${
            totalAnimal * p.legTwo
          }\n${p.legTwo * totalAnimal}-${p.total}=${bigDifference}\n${
            p.legTwo
          }-${
            p.legOne
          }=${smallDifference}\n${bigDifference}/${smallDifference}=${
            p.numOne
          }`;
          correctAnswerTwo = p.numOne;
        }
        if (p.rollQn == "B") {
          let bigDifference = p.total - totalAnimal * p.legOne;
          correctAnswer = `${totalAnimal}x${p.legOne}=${
            totalAnimal * p.legOne
          }\n${p.total}-${totalAnimal * p.legOne}=${bigDifference}\n${
            p.legTwo
          }-${
            p.legOne
          }=${smallDifference}\n${bigDifference}/${smallDifference}=${
            p.numTwo
          }`;
          correctAnswerTwo = p.numTwo;
        }
      }

      if (
        setting == 3 ||
        (setting == 9 && p.rollz == 3) ||
        (range == 1 && p.rollz == 3)
      ) {
        let unitOne = p.unitSentence * p.objectOneX;
        let unitTwo = p.objectTwoX;
        let totalUnit = unitOne + unitTwo;
        let oneUnit = p.totalValue / totalUnit;
        if (p.rollQn == "B") {
          correctAnswer = `${p.objectOneX}x${p.unitSentence}=${unitOne}\n${p.objectTwoX}x1=${unitTwo}\n${unitOne}+${unitTwo}=${totalUnit}\n${p.totalValue}/${totalUnit}=${oneUnit}`;
          correctAnswerTwo = oneUnit;
        } else {
          correctAnswer = `${p.objectOneX}x${p.unitSentence}=${unitOne}\n${
            p.objectTwoX
          }x1=${unitTwo}\n${unitOne}+${unitTwo}=${totalUnit}\n${
            p.totalValue
          }/${totalUnit}=${oneUnit}\n${oneUnit}x${p.unitSentence}=${
            oneUnit * p.unitSentence
          }`;
          correctAnswerTwo = oneUnit * p.unitSentence;
        }
      }

      if (
        setting == 4 ||
        (setting == 9 && p.rollz == 4) ||
        (range == 1 && p.rollz == 4)
      ) {
        let adjustment = undefined;
        let newTotal = undefined;

        let firstLine = undefined;
        if (p.rollQn == "A") {
          adjustment = p.objectTwoQ * p.difference;
          firstLine = `${p.objectTwoQ}x${p.difference}=${adjustment}`;
        }
        if (p.rollQn == "B") {
          adjustment = p.objectOneQ * p.difference;
          firstLine = `${p.objectOneQ}x${p.difference}=${adjustment}`;
        }

        let secondLine = undefined;
        if (p.rollQn == "A" && p.objectOneV > p.objectTwoV) {
          newTotal = p.totalValue + adjustment;
          secondLine = `${p.totalValue}+${adjustment}=${newTotal}`;
        }
        if (p.rollQn == "A" && p.objectOneV < p.objectTwoV) {
          newTotal = p.totalValue - adjustment;
          secondLine = `${p.totalValue}-${adjustment}=${newTotal}`;
        }
        if (p.rollQn == "B" && p.objectOneV < p.objectTwoV) {
          newTotal = p.totalValue + adjustment;
          secondLine = `${p.totalValue}+${adjustment}=${newTotal}`;
        }
        if (p.rollQn == "B" && p.objectOneV > p.objectTwoV) {
          newTotal = p.totalValue - adjustment;
          secondLine = `${p.totalValue}-${adjustment}=${newTotal}`;
        }

        let totalUnit = p.objectOneQ + p.objectTwoQ;
        let thirdLine = `${p.objectOneQ}+${p.objectTwoQ}=${totalUnit}`;
        let oneUnit = newTotal / totalUnit;
        let fourthLine = `${newTotal}/${totalUnit}=${oneUnit}`;

        correctAnswer = `${firstLine}\n${secondLine}\n${thirdLine}\n${fourthLine}`;
        correctAnswerTwo = oneUnit;
      }

      if (
        setting == 5 ||
        (setting == 9 && p.rollz == 5) ||
        (range == 1 && p.rollz == 5)
      ) {
        let oneSet = p.objectOneV + p.objectTwoV;
        let totalSets = p.total / oneSet;
        let totalValueOne = totalSets * p.objectOneV;
        let totalValueTwo = totalSets * p.objectTwoV;

        if (p.rollQn2 == "many") {
          correctAnswer = `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${p.total}/${oneSet}=${totalSets}`;
          correctAnswerTwo = totalSets;
        }

        if (p.rollQn2 == "what") {
          if (p.rollQn == "A") {
            correctAnswer = `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectOneV}=${totalValueOne}`;
            correctAnswerTwo = totalValueOne;
          }
          if (p.rollQn == "B") {
            correctAnswer = `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectTwoV}=${totalValueTwo}`;
            correctAnswerTwo = totalValueTwo;
          }
        }

        if (p.rollQn2 == "total") {
          correctAnswer = `${p.objectOneV}+${p.objectTwoV}=${oneSet}\n${
            p.total
          }/${oneSet}=${totalSets}\n${totalSets}x2=${totalSets * 2}`;
          correctAnswerTwo = totalSets * 2;
        }
      }

      if (
        setting == 6 ||
        (setting == 9 && p.rollz == 6) ||
        (range == 1 && p.rollz == 6)
      ) {
        if (p.rollQn == "A") {
          correctAnswer = `${p.total}/${p.objectV}=${Math.floor(
            p.total / p.objectV
          )}r${p.total % p.objectV}\n${Math.floor(p.total / p.objectV)}`;
          correctAnswerTwo = Math.floor(p.total / p.objectV);
        }
        if (p.rollQn == "B") {
          correctAnswer = `${p.total}/${p.objectV}=${Math.floor(
            p.total / p.objectV
          )}r${p.total % p.objectV}\n${Math.floor(p.total / p.objectV) + 1}`;
          correctAnswerTwo = Math.floor(p.total / p.objectV) + 1;
        }
      }

      if (
        setting == 7 ||
        (setting == 9 && p.rollz == 7) ||
        (range == 1 && p.rollz == 7)
      ) {
        let newDifference = undefined;
        if (p.transfer == "A" && p.difference < 0) {
          newDifference = Math.abs(p.difference) + p.transferV * 2;
          correctAnswer = `${Math.abs(p.difference)}+${p.transferV}+${
            p.transferV
          }=${newDifference}`;
        }
        if (p.transfer == "A" && p.difference > 0) {
          newDifference = Math.abs(p.difference) - p.transferV * 2;
          correctAnswer = `${Math.abs(p.difference)}-${p.transferV}-${
            p.transferV
          }=${newDifference}`;
        }
        if (p.transfer == "B" && p.difference < 0) {
          newDifference = Math.abs(p.difference) - p.transferV * 2;
          correctAnswer = `${Math.abs(p.difference)}-${p.transferV}-${
            p.transferV
          }=${newDifference}`;
        }
        if (p.transfer == "B" && p.difference > 0) {
          newDifference = Math.abs(p.difference) + p.transferV * 2;
          correctAnswer = `${Math.abs(p.difference)}+${p.transferV}+${
            p.transferV
          }=${newDifference}`;
        }
        correctAnswerTwo = newDifference;
      }

      if (
        setting == 8 ||
        (setting == 9 && p.rollz == 8) ||
        (range == 1 && p.rollz == 8)
      ) {
        if (p.options == "A") {
          let packetBought = p.value / p.cost;
          let sets = Math.floor(packetBought / p.min);
          let setsR = packetBought % p.min;
          let lineTwo = undefined;
          if (setsR == 0) {
            lineTwo = `${packetBought}/${p.min}=${sets}`;
          } else {
            lineTwo = `${packetBought}/${p.min}=${sets}r${setsR}`;
          }
          let totalPacket = packetBought + sets;
          let lineThree = `${packetBought}+${sets}=${totalPacket}`;
          if (sets == 0) {
            correctAnswer = `${p.value}/${p.cost}=${packetBought}\n${lineTwo}`;
            correctAnswerTwo = sets;
          } else {
            correctAnswer = `${p.value}/${p.cost}=${packetBought}\n${lineTwo}\n${sets}x1=${sets}\n${lineThree}`;
            correctAnswerTwo = totalPacket;
          }
        }

        if (p.options == "B") {
          let discountSets = Math.floor(p.value / p.min);
          let setsR = p.value % p.min;
          let lineOne = undefined;
          if (setsR == 0) {
            lineOne = `${p.value}/${p.min}=${discountSets}`;
          } else {
            lineOne = `${p.value}/${p.min}=${discountSets}r${setsR}`;
          }
          let valueDiscounts = discountSets * p.discount;
          let totalCost = p.value * p.cost;
          let actualCost = totalCost - valueDiscounts;
          correctAnswer = `${lineOne}\n${discountSets}x${p.discount}=${valueDiscounts}\n${p.value}x${p.cost}=${totalCost}\n${totalCost}-${valueDiscounts}=${actualCost}`;
          correctAnswerTwo = actualCost;
        }
      }
    }

    // answers

    if (level == "heuThreeb") {
      // 1. REPEATED IDENTITY
      if (
        setting == 1 ||
        (setting == 9 && p.rollz == 1) ||
        (range == 1 && p.rollz == 1)
      ) {
        if (p.compA == "unit" && p.compB == "unit") {
          if (p.find == "A") correctAnswer = p.arrUnit[4] * p.oneUnit;
          if (p.find == "B") correctAnswer = p.arrUnit[5] * p.oneUnit;
          if (p.find == "C") correctAnswer = p.arrUnit[6] * p.oneUnit;
        } else {
          if (p.find == "A") correctAnswer = p.valueA;
          if (p.find == "B") correctAnswer = p.valueB;
          if (p.find == "C") correctAnswer = p.valueC;
        }
      }
      // 2.
      if (
        setting == 2 ||
        (setting == 9 && p.rollz == 2) ||
        (range == 1 && p.rollz == 2)
      ) {
        let difference = undefined;

        if (p.situationOne > 0 && p.situationTwo > 0) {
          difference = p.situationOne - p.situationTwo;
        }
        if (p.situationOne < 0 && p.situationTwo < 0) {
          difference = Math.abs(p.situationTwo - p.situationOne);
        }
        if (
          (p.situationOne < 0 && p.situationTwo < 0) ||
          (p.situationOne > 0 && p.situationTwo > 0)
        ) {
          if (p.oneOrTwo == "One" && p.firstOrEnd == "in the end") {
            correctAnswer =
              (difference / (p.unitSentence - 1)) * p.unitSentence;
          } else if (p.oneOrTwo == "Two" && p.firstOrEnd == "in the end") {
            correctAnswer = difference / (p.unitSentence - 1);
          } else {
            correctAnswer =
              difference / (p.unitSentence - 1) + p.situationTwo * -1;
          }
        } else {
          if (p.situationOne > 0) {
            if (p.firstOrEnd == "in the end") {
              if (p.oneOrTwo == "One") {
                correctAnswer =
                  ((p.situationOne - p.situationTwo) / (p.unitSentence - 1)) *
                  p.unitSentence;
              }
              if (p.oneOrTwo == "Two") {
                correctAnswer =
                  (p.situationOne - p.situationTwo) / (p.unitSentence - 1);
              }
            } else {
              correctAnswer =
                (p.situationOne - p.situationTwo) / (p.unitSentence - 1) -
                p.situationTwo;
            }
          }
          if (p.situationOne < 0) {
            if (p.firstOrEnd == "in the end") {
              if (p.oneOrTwo == "One") {
                correctAnswer =
                  (-p.situationOne + p.situationTwo) / (p.unitSentence - 1);
              }
              if (p.oneOrTwo == "Two") {
                correctAnswer =
                  ((-p.situationOne + p.situationTwo) / (p.unitSentence - 1)) *
                  p.unitSentence;
              }
            } else {
              correctAnswer =
                (-p.situationOne + p.situationTwo) / (p.unitSentence - 1) -
                p.situationOne;
            }
          }
        }
      }

      if (
        setting == 3 ||
        (setting == 9 && p.roll == 3) ||
        (range == 1 && p.rollz == 3)
      ) {
        let difference = undefined;
        let oneUnit = undefined;
        if (p.situationOne > 0 && p.situationTwo > 0) {
          difference = p.situationTwo - p.situationOne;
          oneUnit = difference / (p.unitSentence - 1);
          if (p.firstOrEnd == "in the end") {
            if (p.oneOrTwo == "One") {
              correctAnswer = oneUnit * p.unitSentence + p.situationOne;
            }
            if (p.oneOrTwo == "Two") {
              correctAnswer = oneUnit + p.situationTwo;
            }
          }
          if (p.firstOrEnd == "at first") {
            if (p.oneOrTwo == "One") {
              correctAnswer = oneUnit + p.situationTwo - p.situationOne;
            }
            if (p.oneOrTwo == "Two") {
              correctAnswer = oneUnit + p.situationTwo - p.situationTwo;
            }
          }
        } else if (p.situationOne < 0 && p.situationTwo < 0) {
          difference = -1 * p.situationOne - p.situationTwo * -1;
          oneUnit = difference / (p.unitSentence - 1);
          if (p.firstOrEnd == "in the end") {
            if (p.oneOrTwo == "One") {
              correctAnswer = oneUnit * p.unitSentence + p.situationOne;
            }
            if (p.oneOrTwo == "Two") {
              correctAnswer = oneUnit + p.situationTwo;
            }
          }
          if (p.firstOrEnd == "at first") {
            if (p.oneOrTwo == "One") {
              correctAnswer = oneUnit * p.unitSentence;
            }
            if (p.oneOrTwo == "Two") {
              correctAnswer = oneUnit;
            }
          }
        } else {
          difference = Math.abs(p.situationOne) + Math.abs(p.situationTwo);
          oneUnit = difference / (p.unitSentence - 1);
          if (p.firstOrEnd == "at first") {
            if (p.oneOrTwo == "One") {
              correctAnswer = oneUnit * p.unitSentence;
            }
            if (p.oneOrTwo == "Two") {
              correctAnswer = oneUnit;
            }
          }
          if (p.firstOrEnd == "in the end") {
            if (p.oneOrTwo == "One") {
              correctAnswer = oneUnit * p.unitSentence + p.situationOne;
            }
            if (p.oneOrTwo == "Two") {
              correctAnswer = oneUnit + p.situationTwo;
            }
          }
        }
        while (correctAnswer <= 0) {
          updateCalc();
          return console.log("negative answer detected");
        }
      }

      if (
        setting == 4 ||
        (setting == 9 && p.rollz == 4) ||
        (range == 1 && p.rollz == 4)
      ) {
        if (p.answer == "A") {
          correctAnswer = p.startOne;
        }
        if (p.answer == "B") {
          correctAnswer = p.startTwo;
        }
        if (p.answer == "total") {
          correctAnswer = p.startOne + p.startTwo;
        }
        if (p.answer == "other") {
          if (p.othersLast == "A") {
            correctAnswer = p.endTwo;
          }
          if (p.othersLast == "B") {
            correctAnswer = p.endOne;
          }
        }
      }
      //WORKING BACKWARDS STRAIGHTLINE
      if (
        setting == 5 ||
        (setting == 9 && p.rollz == 5) ||
        (range == 1 && p.rollz == 5)
      ) {
        correctAnswer = p.num;
      }
    }
    // answer
    if (level == "heuFour") {
      if (
        setting == 1 ||
        (setting == 9 && p.rollz == 1) ||
        (range == 1 && p.rollz == 1)
      ) {
        let firstLine = undefined;
        let bigDiff = undefined;
        let newObjectOneS = Math.abs(p.objectOneS);
        let newObjectTwoS = Math.abs(p.objectTwoS);

        if (p.objectOneS <= 0 && p.objectTwoS <= 0) {
          bigDiff = newObjectTwoS - newObjectOneS;
          firstLine = `${newObjectTwoS}-${newObjectOneS}=${bigDiff}`;
        } else if (p.objectOneS >= 0 && p.objectTwoS >= 0) {
          bigDiff = p.objectOneS - p.objectTwoS;
          firstLine = `${p.objectOneS}-${p.objectTwoS}=${bigDiff}`;
        } else {
          bigDiff = newObjectOneS + newObjectTwoS;
          firstLine = `${newObjectOneS}+${newObjectTwoS}=${bigDiff}`;
        }

        let smallDiff = p.objectTwoQ - p.objectOneQ;

        if (p.rollQn == "price") {
          correctAnswer = `${firstLine}\n${p.objectTwoQ}-${p.objectOneQ}=${smallDiff}\n${bigDiff}/${smallDiff}=${p.price}`;
          correctAnswerTwo = p.price;
        }
        if (p.rollQn == "total") {
          correctAnswer = `${firstLine}\n${p.objectTwoQ}-${
            p.objectOneQ
          }=${smallDiff}\n${bigDiff}/${smallDiff}=${p.price}\n${p.objectOneQ}x${
            p.price
          }${p.objectOneS >= 0 ? "+" : "-"}${newObjectOneS}=${p.totalValue}`;
          correctAnswerTwo = p.totalValue;
        }
      }

      if (
        setting == 2 ||
        (setting == 9 && p.rollz == 2) ||
        (range == 1 && p.rollz == 2)
      ) {
        // let symbol = p.situationOne > 0 ? "+" : "-"
        // let bigDifference = undefined
        // let smallDifference = p.sceneTwo-p.sceneOne
        // let firstLine = `${p.situationOne}+${Math.abs(p.situationTwo)}=${p.situationOne+Math.abs(p.situationTwo)}`

        // if (p.situationOne >= 0 && p.situationTwo >= 0 || p.situationOne < 0 && p.situationTwo < 0){
        //   let one = Math.abs(p.situationOne)
        //   let two = Math.abs(p.situationTwo)
        //   // p.situationOne = Math.abs(p.situationOne)
        //   // p.situationTwo = Math.abs(p.situationTwo)
        //   if (two > one){
        //     firstLine = `${Math.abs(two)}-${Math.abs(one)}=${Math.abs(two)-one}`
        //     bigDifference = two-one
        //   } else {
        //     firstLine = `${Math.abs(one)}-${Math.abs(two)}=${one-two}`
        //     bigDifference = Math.abs(one) - Math.abs(two)
        //   }
        // } else {
        //   if (p.situationOne == 0 || p.situationOne < 0 ){
        //     // symbol = "-"
        //     bigDifference = Math.abs(p.situationOne) + Math.abs(p.situationTwo)
        //   } else {
        //     // symbol = "+"
        //     bigDifference = Math.abs(p.situationOne) + Math.abs(p.situationTwo)
        //   }
        // }
        let bigDifference = Math.abs(p.situationOne) + Math.abs(p.situationTwo);
        let firstLine = `${Math.abs(p.situationOne)}+${Math.abs(
          p.situationTwo
        )}=${bigDifference}`;

        if (
          (p.situationOneW == "an excess" && p.situationTwoW == "an excess") ||
          (p.situationTwoW == "short" && p.situationOneW == "short")
        ) {
          bigDifference = Math.abs(p.situationTwo) - Math.abs(p.situationOne);
          firstLine = `${Math.abs(p.situationTwo)}-${Math.abs(
            p.situationOne
          )}=${bigDifference}`;
        }

        let smallDifference = p.sceneTwo - p.sceneOne;
        let secondLine = `${p.sceneTwo}-${p.sceneOne}=${smallDifference}`;

        let groups = bigDifference / smallDifference;
        let thirdLine = `${bigDifference}/${smallDifference}=${groups}`;

        // if (p.rollAnswer == 1){
        //   correctAnswer =
        //   `${firstLine}\n${p.sceneTwo}-${p.sceneOne}=${smallDifference}\n${bigDifference}/${smallDifference}=${p.numberOfStudents}`
        // }
        // if (p.rollAnswer == 2){
        //   correctAnswer =
        //   `${firstLine}\n${p.sceneTwo}-${p.sceneOne}=${smallDifference}\n${bigDifference}/${smallDifference}=${p.numberOfStudents}\n${p.numberOfStudents}x${p.sceneOne}${symbol}${Math.abs(p.situationOne)}=${p.numberOfStuff}`
        // }
        if (p.rollAnswer == 1) {
          correctAnswer = `${firstLine}\n${secondLine}\n${thirdLine}`;
          correctAnswerTwo = groups;
        }

        let total = groups * p.sceneOne - Math.abs(p.situationOne);
        let fourthLine = `${groups}x${p.sceneOne}-${Math.abs(
          p.situationOne
        )}=${total}`;
        if (p.situationOneW == "an excess") {
          total = groups * p.sceneOne + Math.abs(p.situationOne);
          fourthLine = `${groups}x${p.sceneOne}+${Math.abs(
            p.situationOne
          )}=${total}`;
        }

        if (p.rollAnswer == 2) {
          correctAnswer = `${firstLine}\n${secondLine}\n${thirdLine}\n${fourthLine}`;
          correctAnswerTwo = total;
        }
      }

      if (
        setting == 3 ||
        (setting == 9 && p.rollz == 3) ||
        (range == 1 && p.rollz == 3)
      ) {
        let extraWork = p.remainingPeople * p.giveUp;
        let eachPerson = extraWork / p.absentPeople;
        let totalWork = eachPerson * p.peopleAtFirst;
        if (p.rollQn == "A") {
          correctAnswer = `${p.peopleAtFirst}-${p.absentPeople}=${p.remainingPeople}\n${p.remainingPeople}x${p.giveUp}=${extraWork}\n${extraWork}/${p.absentPeople}=${eachPerson}`;
          correctAnswerTwo = eachPerson;
        }
        if (p.rollQn == "B") {
          correctAnswer = `${p.peopleAtFirst}-${p.absentPeople}=${p.remainingPeople}\n${p.remainingPeople}x${p.giveUp}=${extraWork}\n${extraWork}/${p.absentPeople}=${eachPerson}\n${p.peopleAtFirst}x${eachPerson}=${totalWork}`;
          correctAnswerTwo = totalWork;
        }
      }

      if (
        setting == 4 ||
        (setting == 9 && p.rollz == 4) ||
        (range == 1 && p.rollz == 4)
      ) {
        let difference = p.groupTwo - p.groupOne;
        let eachUnit = difference / (p.unitSentence - 1);
        let objectOne = p.groupOne - eachUnit;
        let unitDifference = p.unitSentence - 1;
        correctAnswer = `${p.groupTwo}-${p.groupOne}=${difference}\n${
          p.unitSentence
        }-1=${unitDifference}\n${difference}/${
          p.unitSentence - 1
        }=${eachUnit}\n${p.groupOne}-${eachUnit}=${objectOne}`;
        correctAnswerTwo = objectOne;
      }

      if (
        setting == 5 ||
        (setting == 9 && p.rollz == 5) ||
        (range == 1 && p.rollz == 5)
      ) {
        let setOne = p.objectOneV * p.objectOneUnit;
        let setTwo = p.objectTwoV * p.objectTwoUnit;
        let oneSet =
          p.objectOneV * p.objectOneUnit + p.objectTwoV * p.objectTwoUnit;
        let totalSets = p.total / oneSet;
        let oneQuantity = totalSets * p.objectOneUnit;
        let twoQuantity = totalSets * p.objectTwoUnit;
        let totalValueOne = oneQuantity * p.objectOneV;
        let totalValueTwo = twoQuantity * p.objectTwoV;
        let groupQuantity = p.objectOneUnit + p.objectTwoUnit;

        if (p.rollQn2 == "many") {
          if (p.rollQn == "A") {
            correctAnswer = `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectOneUnit}=${oneQuantity}`;
            correctAnswerTwo = oneQuantity;
          }
          if (p.rollQn == "B") {
            correctAnswer = `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectTwoUnit}=${twoQuantity}`;
            correctAnswerTwo = twoQuantity;
          }
        }

        if (p.rollQn2 == "what") {
          if (p.rollQn == "A") {
            correctAnswer = `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectOneUnit}=${oneQuantity}\n${oneQuantity}x${p.objectOneV}=${totalValueOne}`;
            correctAnswerTwo = totalValueOne;
          }
          if (p.rollQn == "B") {
            correctAnswer = `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${p.objectTwoUnit}x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${p.total}/${oneSet}=${totalSets}\n${totalSets}x${p.objectTwoUnit}=${twoQuantity}\n${twoQuantity}x${p.objectTwoV}=${totalValueTwo}`;
            correctAnswerTwo = totalValueTwo;
          }
        }

        if (p.rollQn2 == "total") {
          correctAnswer = `${p.objectOneUnit}x${p.objectOneV}=${setOne}\n${
            p.objectTwoUnit
          }x${p.objectTwoV}=${setTwo}\n${setOne}+${setTwo}=${oneSet}\n${
            p.total
          }/${oneSet}=${totalSets}\n${p.objectOneUnit}+${
            p.objectTwoUnit
          }=${groupQuantity}\n${totalSets}x${groupQuantity}=${
            totalSets * groupQuantity
          }`;
          correctAnswerTwo = totalSets * groupQuantity;
        }
      }

      if (
        setting == 6 ||
        (setting == 9 && p.rollz == 6) ||
        (range == 1 && p.rollz == 6)
      ) {
        let sets = Math.floor(p.total / (p.objectTwoQ + 1));
        let remainder = p.total % (p.objectTwoQ + 1);
        if (remainder == 0) {
          if (p.rollQn == "A") {
            correctAnswer = `${p.objectTwoQ}+1=${p.objectTwoQ + 1}\n${
              p.total
            }/${p.objectTwoQ + 1}=${sets}`;
            correctAnswerTwo = sets;
          }
          if (p.rollQn == "B") {
            correctAnswer = `${p.objectTwoQ}+1=${p.objectTwoQ + 1}\n${
              p.total
            }/${p.objectTwoQ + 1}=${sets}\n${sets}x${p.objectTwoQ}=${
              sets * p.objectTwoQ
            }`;
            correctAnswerTwo = sets * p.objectTwoQ;
          }
        } else if (remainder == 1) {
          if (p.rollQn == "A") {
            correctAnswer = `${p.objectTwoQ}+1=${p.objectTwoQ + 1}\n${
              p.total
            }/${p.objectTwoQ + 1}=${sets}r1\n${sets}+1=${sets + 1}`;
            correctAnswerTwo = sets + 1;
          }
          if (p.rollQn == "B") {
            correctAnswer = `${p.objectTwoQ}+1=${p.objectTwoQ + 1}\n${
              p.total
            }/${p.objectTwoQ + 1}=${sets}r1\n${sets}x${p.objectTwoQ}=${
              sets * p.objectTwoQ
            }`;
            correctAnswerTwo = sets * p.objectTwoQ;
          }
        } else {
          if (p.rollQn == "A") {
            correctAnswer = `${p.objectTwoQ}+1=${p.objectTwoQ + 1}\n${
              p.total
            }/${p.objectTwoQ + 1}=${sets}r${remainder}\n${sets}+1=${sets + 1}`;
            correctAnswerTwo = sets + 1;
          }
          if (p.rollQn == "B") {
            correctAnswer = `${p.objectTwoQ}+1=${p.objectTwoQ + 1}\n${
              p.total
            }/${p.objectTwoQ + 1}=${sets}r${remainder}\n${sets}x${
              p.objectTwoQ
            }+${remainder - 1}=${sets * p.objectTwoQ + remainder - 1}`;
            correctAnswerTwo = sets * p.objectTwoQ + remainder - 1;
          }
        }
      }

      if (
        setting == 7 ||
        (setting == 9 && p.rollz == 7) ||
        (range == 1 && p.rollz == 7)
      ) {
        let firstLine = `x${p.groupOne} +${p.leftOne}`;
        let secondLine = p.arrFirstNum.join(", ");
        let thirdLine = `x${p.groupTwo} +${p.leftTwo}`;
        let fourthLine = p.arrSecondNum.join(", ");
        correctAnswer = `${firstLine}\n${secondLine}\n${thirdLine}\n${fourthLine}\n${
          p.arrFirstNum[p.arrFirstNum.length - 1]
        }`;
        correctAnswerTwo = p.arrFirstNum[p.arrFirstNum.length - 1];
      }
    }
    //ANSWERS
    if (level == "heuFourb") {
      if (setting == 1) {
        const common = commonDeno(p.numOne, p.numTwo);
        correctAnswer = common * (p.timesNum + 1);
        if (p.version == 1) {
          let str = correctAnswer.toString();
          if (str.length == 1 && str.startsWith("1")) {
            correctAnswer = `${correctAnswer}st`;
          } else if (str.length == 1 && str.startsWith("2")) {
            correctAnswer = `${correctAnswer}nd`;
          } else if (str.length == 1 && str.startsWith("3")) {
            correctAnswer = `${correctAnswer}rd`;
          } else if (
            str.length == 2 &&
            !str.startsWith("2") &&
            str.endsWith("1")
          ) {
            correctAnswer = `${correctAnswer}st`;
          } else if (
            str.length == 2 &&
            !str.startsWith("1") &&
            str.endsWith("2")
          ) {
            correctAnswer = `${correctAnswer}nd`;
          } else if (
            str.length == 2 &&
            !str.startsWith("1") &&
            str.endsWith("3")
          ) {
            correctAnswer = `${correctAnswer}rd`;
          } else if (str.length == 3 && str[1] != 1 && str.endsWith("1")) {
            correctAnswer = `${correctAnswer}st`;
          } else if (str.length == 3 && str[1] != 1 && str.endsWith("2")) {
            correctAnswer = `${correctAnswer}nd`;
          } else if (str.length == 3 && str[1] != 1 && str.endsWith("3")) {
            correctAnswer = `${correctAnswer}rd`;
          } else {
            correctAnswer = `${correctAnswer}th`;
          }
        }
        if (p.version == 2) {
          correctAnswer = common;
        }
      }
      if (setting == 2) {
        const commonFactorsArr = commonFactors(p.numOne, p.numTwo);
        const bags = commonFactorsArr[commonFactorsArr.length - 1];
        if (p.version == 0)
          correctAnswer = commonFactorsArr[commonFactorsArr.length - 1];
        if (p.version == 1) correctAnswer = p.numOne / bags;
        if (p.version == 2) correctAnswer = p.numTwo / bags;
        if (p.version == 3) correctAnswer = p.numOne / bags + p.numTwo / bags;
      }

      //UNCHANGED DIFFERENCE
      if (setting == 3) {
        if (p.type == "norm") {
          if (p.question == "AE") {
            correctAnswer = p.valueOneUnit * p.unitA;
          }
          if (p.question == "BE") {
            correctAnswer = p.valueOneUnit * p.unitB;
          }
          if (p.question == "change") {
            correctAnswer = p.situationValue;
          }
        }
        if (p.type == "age") {
          const ageDiff = p.numA - p.numB;
          const unitDiff = p.unitA - p.unitB;
          const oneUnit = ageDiff / unitDiff;
          const fatherEnd = oneUnit * p.unitA;
          const childEnd = oneUnit * p.unitB;
          const change = childEnd - p.numB;
          correctAnswer = Math.abs(childEnd - p.numB);
          if (p.ageType == "diff") {
            console.log(p.numA, p.numB, fatherEnd, childEnd, change);
            correctAnswer = childEnd - change;
          }
        }
      }
      // UNCHANGED TOTAL
      if (setting == 4) {
        if (p.version == "valueFirst") {
          if (p.question == "AF") correctAnswer = p.valueAFirst;
          if (p.question == "AE") correctAnswer = p.valueAEnd;
          if (p.question == "BF") correctAnswer = p.valueBFirst;
          if (p.question == "BE") correctAnswer = p.valueBEnd;
        }
        //LAZINESS
        if (p.version == "valueEnd") {
          const total = p.valueAFirst + p.valueBFirst;
          const oneUnit = total / (p.unitA + p.unitB);

          if (p.question == "AF") correctAnswer = oneUnit * p.unitA;
          if (p.question == "AE")
            correctAnswer = oneUnit * p.unitA - p.transfer;
          if (p.question == "BF") correctAnswer = oneUnit * p.unitB;
          if (p.question == "BE")
            correctAnswer = oneUnit * p.unitB + p.transfer;
        }
      }
      //SIMULTANEOUS EQUATION
      if (setting == 5) {
        if (p.choose == "boys") correctAnswer = p.varB * p.unitB;
        if (p.choose == "girls") correctAnswer = p.varA * p.unitA;
      }
      //INTERNAL TRANSFER: DOUBLE EFFECT
      if (setting == 6) {
        correctAnswer = Math.abs(p.transfer);
      }

      if (setting == 7) {
        if (p.question == "A") correctAnswer = p.valueA * p.denoA;
        if (p.question == "B") correctAnswer = p.valueB * p.denoB;
      }
    }
    // Answers
    if (level == "heuFive") {
      if (
        setting == 1 ||
        (setting == 9 && p.rollz == 1) ||
        (range == 1 && p.rollz == 1)
      ) {
        let firstSentence = undefined;
        if (p.difference > 0) {
          firstSentence = `${p.difference}x${p.quantityOne}=${p.adjustment}`;
        }
        if (p.difference < 0) {
          firstSentence = `${-p.difference}x${p.quantityTwo}=${p.adjustment}`;
        }

        let secondSentence = undefined;
        secondSentence = `${p.total}-${p.adjustment}=${p.adjustedTotal}`;

        let thirdSentence = `${p.quantityOne}+${p.quantityTwo}=${p.groupTotal}`;

        let fourthSentence = `${p.adjustedTotal}/${p.groupTotal}=${p.group}`;

        if (p.choice == "girls") {
          if (p.difference > 0) {
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${
              p.group
            }+${p.difference}=${p.group + p.difference}`;
            correctAnswerTwo = p.group + p.difference;
          } else {
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`;
            correctAnswerTwo = p.group;
          }
        }
        if (p.choice == "boys") {
          if (p.difference > 0) {
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`;
            correctAnswerTwo = p.group;
          } else {
            correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${
              p.group
            }+${-p.difference}=${p.group - p.difference}`;
            correctAnswerTwo = p.group - p.difference;
          }
        }
      }

      if (
        setting == 2 ||
        (setting == 9 && p.rollz == 2) ||
        (range == 1 && p.rollz == 2)
      ) {
        let firstSentence = `${p.questions}x${p.marks}=${p.allRight}`;
        let secondSentence = `${p.allRight}-${p.total}=${p.bDifference}`;
        let thirdSentence = `${p.marks}+${p.deduct}=${p.sDifference}`;
        let fourthSentence = `${p.bDifference}/${p.sDifference}=${p.wrong}`;
        let fifthSentence = `${p.questions}-${p.wrong}=${p.correct}`;
        if (p.choice == "wrong") {
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`;
          correctAnswerTwo = p.wrong;
        } else {
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${fifthSentence}`;
          correctAnswerTwo = p.correct;
        }
      }

      if (
        setting == 3 ||
        (setting == 9 && p.rollz == 3) ||
        (range == 1 && p.rollz == 3)
      ) {
        let firstSentence = undefined;
        let allTotal = undefined;
        if (p.totalOne > p.totalTwo) {
          allTotal = p.total * p.chosenOneQ;
          firstSentence = `${p.total}x${p.chosenOneQ}=${allTotal}`;
        }
        if (p.totalTwo > p.totalOne) {
          allTotal = p.total * p.chosenTwoQ;
          firstSentence = `${p.total}x${p.chosenTwoQ}=${allTotal}`;
        }
        let bDifference = allTotal - Math.abs(p.difference);
        let secondSentence = `${allTotal}-${Math.abs(
          p.difference
        )}=${bDifference}`;

        let sDifference = p.chosenOneQ + p.chosenTwoQ;
        let thirdSentence = `${p.chosenOneQ}+${p.chosenTwoQ}=${sDifference}`;

        let fourthSentence = `${bDifference}/${sDifference}=${
          bDifference / sDifference
        }`;

        let fifthSentence = `${p.total}-${p.chosenOneN}=${p.chosenTwoN}`;
        let sixthSentence = `${p.total}-${p.chosenTwoN}=${p.chosenOneN}`;

        if (p.choice == 0 && p.difference < 0) {
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`;
          correctAnswerTwo = bDifference / sDifference;
        }
        if (p.choice == 0 && p.difference > 0) {
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${sixthSentence}`;
          correctAnswerTwo = p.chosenOneN;
        }
        if (p.choice == 1 && p.difference < 0) {
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}\n${fifthSentence}`;
          correctAnswerTwo = p.chosenTwoN;
        }
        if (p.choice == 1 && p.difference > 0) {
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`;
          correctAnswerTwo = bDifference / sDifference;
        }
      }

      if (
        setting == 4 ||
        (setting == 9 && p.rollz == 4) ||
        (range == 1 && p.rollz == 4)
      ) {
        let firstSentence = undefined;
        if (p.objectOneV > p.objectTwoV) {
          firstSentence = `${p.objectOneV}-${p.objectTwoV}=${p.sDifference}`;
        } else {
          firstSentence = `${p.objectTwoV}-${p.objectOneV}=${p.sDifference}`;
        }
        let groups = p.bDifference / p.sDifference;
        let secondSentence = `${p.bDifference}/${p.sDifference}=${groups}`;

        if (p.choice == 0 || p.choice == 1) {
          correctAnswer = `${firstSentence}\n${secondSentence}`;
          correctAnswerTwo = groups;
        }

        let thirdSentence = undefined;
        let quantityT = groups * 2;
        if (p.choice == 2) {
          thirdSentence = `${groups}x2=${quantityT}`;
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}`;
          correctAnswerTwo = quantityT;
        }
        if (p.choice == 3) {
          let objectOneT = groups * p.objectOneV;
          thirdSentence = `${groups}x${p.objectOneV}=${objectOneT}`;
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}`;
          correctAnswerTwo = objectOneT;
        }
        if (p.choice == 4) {
          let objectTwoT = groups * p.objectTwoV;
          thirdSentence = `${groups}x${p.objectTwoV}=${objectTwoT}`;
          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}`;
          correctAnswerTwo = objectTwoT;
        }
        if (p.choice == 5) {
          let groupValue = p.objectOneV + p.objectTwoV;
          thirdSentence = `${p.objectOneV}+${p.objectTwoV}=${groupValue}`;
          let fourthSentence = `${groups}x${groupValue}=${groupValue * groups}`;

          correctAnswer = `${firstSentence}\n${secondSentence}\n${thirdSentence}\n${fourthSentence}`;
          correctAnswerTwo = groupValue * groups;
        }
      }

      if (
        setting == 5 ||
        (setting == 9 && p.rollz == 5) ||
        (range == 1 && p.rollz == 5)
      ) {
        correctAnswer = `${p.objectOneQ}${p.objectOneC[0]}=${p.objectTwoQ}${p.objectTwoC[0]}\n${p.objectOneFQ}${p.objectOneC[0]}=${p.objectTwoAV}${p.objectTwoC[0]}\n${p.objectTwoAV}${p.objectTwoC[0]}+${p.objectTwoFQ}${p.objectTwoC[0]}=${p.objectTwoLQ}${p.objectTwoC[0]}\n${p.total}/${p.objectTwoLQ}=${p.oneUnit}`;
        correctAnswerTwo = p.oneUnit;
      }
      if (
        setting == 6 ||
        (setting == 9 && p.rollz == 6) ||
        (range == 1 && p.rollz == 6)
      ) {
        correctAnswer = `${p.people}x${p.people - 1}/2=${
          (p.people * (p.people - 1)) / 2
        }`;
        correctAnswerTwo = (p.people * (p.people - 1)) / 2;
      }
      if (
        setting == 7 ||
        (setting == 9 && p.rollz == 7) ||
        (range == 1 && p.rollz == 7)
      ) {
        if (p.version == 1) {
          let quantityOneGroup = p.set + p.bonus;
          let lineZero = `${p.set}+${p.bonus}=${quantityOneGroup}`;
          let lineOne = `${p.set}x${p.cost}=${p.oneGroupCost}`;
          let lineTwo = `${p.totalCost}/${p.oneGroupCost}=${p.quotient}r${
            p.remainder * p.cost
          }`;
          let lineThree = `${p.remainder * p.cost}/${p.cost}=${p.remainder}`;
          let lineFour = `${p.quotient}x${quantityOneGroup}+${p.remainder}=${p.totalItems}`;
          correctAnswer = `${lineZero}\n${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;
          correctAnswerTwo = p.totalItems;
        }
      }
      if (setting == 8) {
        const totalAQuantity = p.varAQuan * p.groups;
        const totalBQuantity = p.varBQuan * p.groups;
        if (p.question == "quantityA") {
          correctAnswerTwo = totalAQuantity;
          correctAnswer = totalAQuantity;
        }
        if (p.question == "quantityB") {
          correctAnswerTwo = totalBQuantity;
          correctAnswer = totalBQuantity;
        }
        if (p.question == "valueA") {
          correctAnswerTwo = totalAQuantity * p.varAValue;
          correctAnswer = totalAQuantity * p.varAValue;
        }
        if (p.question == "valueB") {
          correctAnswerTwo = totalBQuantity * p.varBValue;
          correctAnswer = totalBQuantity * p.varBValue;
        }
        if (p.question == "totalQuantity") {
          correctAnswerTwo = totalAQuantity + totalBQuantity;
          correctAnswer = totalAQuantity + totalBQuantity;
        }
        if (p.question == "totalValue") {
          correctAnswerTwo =
            totalAQuantity * p.varAValue + totalBQuantity * p.varBValue;
          correctAnswer =
            totalAQuantity * p.varAValue + totalBQuantity * p.varBValue;
        }
      }
    }
    // ANSWERS
    if (level == "heuFiveb") {
      if (setting == 1 || setting == 2) {
        correctAnswer = p.answer;
      }
      //WORKING BACKWARDS TYPE 3 (INDEPENDENT)
      if (setting == 3) {
        let position = undefined;
        if (p.choose == "A") position = p.first;
        if (p.choose == "B") position = p.second;
        if (p.choose == "C") position = p.third;
        if (p.choose == "D") position = p.fourth;
        const workingBackwardsT3Answer = (
          position,
          oneUnit,
          increase,
          decrease,
          times,
          divide
        ) => {
          console.log("here i am!");
          console.log(position, oneUnit, increase, decrease, times, divide);

          if (position == "-") {
            return oneUnit * times + decrease;
          }
          if (position == "+") {
            return oneUnit * times - increase;
          }
          if (position == "x") {
            return oneUnit;
          }
          if (position == "/") {
            return oneUnit * divide * times;
          }
        };

        correctAnswer = workingBackwardsT3Answer(
          position,
          p.unit,
          p.increase,
          p.decrease,
          p.times,
          p.divide
        );
      }
      // EITHER OR
      if (setting == 4) {
        // if (p.version == 0) {
        correctAnswer = Math.abs(
          p.second - ((p.third / p.quanA) * p.quanB + p.fourth)
        );
        // }
      }

      // UNCHANGED TOTAL (IF)
      if (setting == 5) {
        if (p.question == "A") correctAnswer = p.valueA;
        if (p.question == "B") correctAnswer = p.valueB;
      }

      if (setting == 6) {
        const allA = p.valueA * p.totalQuantity;
        const bigDiff = p.totalValue - allA;
        const smallDiff = p.valueB - p.valueA;
        const QB = bigDiff / smallDiff;
        let AB = p.totalQuantity - QB;
        correctAnswer = `${AB}/${p.totalQuantity}`;
      }

      if (setting == 7) {
        correctAnswer = p.oneUnit * p.newUnitA[0] - p.firstSituation;
      }
    }
    //ANSWERS
    if (level == "heuSix") {
      // LOWEST COMMON TIME
      if (setting == 1) {
        if (p.type == "merge") {
          let theCommonDeno = commonDeno(p.timeA, p.timeB);
          const multiA = theCommonDeno / p.timeA;
          const multiB = theCommonDeno / p.timeB;
          let total = multiA + multiB;
          correctAnswer = theCommonDeno / total;
          if (theCommonDeno % total != 0) {
            const quotient = Math.floor(theCommonDeno / total);
            let remainder = theCommonDeno % total;
            [remainder, total] = simplify(remainder, total);
            if (quotient == 0) {
              correctAnswer = `${remainder}/${total}`;
            }
            if (quotient > 0) {
              correctAnswer = `${quotient} ${remainder}/${total}`;
            }
          }
        }

        if (p.type == "split") {
          let theCommonMultiple = commonDeno(p.total, p.timeA);
          const multiTotal = theCommonMultiple / p.total;
          const multiB = theCommonMultiple / p.timeA;
          let quantityB = multiTotal - multiB;
          if (quantityB == 1) {
            correctAnswer = theCommonMultiple;
          }
          if (quantityB > 1) {
            const quotient = Math.floor(theCommonMultiple / quantityB);
            let remainder = theCommonMultiple % quantityB;
            [remainder, theCommonMultiple] = simplify(
              remainder,
              theCommonMultiple
            );

            correctAnswer = `${quotient} ${remainder}/${quantityB}`;
            if (remainder == 0) correctAnswer = `${quotient}`;
          }
        }
      }
      // CYCLES
      if (setting == 2) {
        if (p.version == 0 || p.version == 1) {
          correctAnswer = (p.duration / p.people) * p.active;
        }
        if (p.version == 2) {
          correctAnswer = (p.duration / p.people) * p.active * p.courts;
        }
      }
      // REPEATED IDENTITY TYPE 3
      if (setting == 3) {
        let commonDenominator = commonDeno(p.denoA, p.denoB);
        const multiplierA = commonDenominator / p.denoA;
        const multiplierB = commonDenominator / p.denoB;
        let bOnly = (p.denoA - p.numeA) * multiplierA;
        let both = p.numeB * multiplierB - bOnly;
        [both, commonDenominator] = simplify(both, commonDenominator);
        correctAnswer = `${both}/${commonDenominator}`;
      }

      //SNAKE AND LADDER
      if (setting == 4) {
        if (p.version == "human") {
          correctAnswer = (p.sets + 1) * p.pTime;
        }
        if (p.version == "snail") {
          correctAnswer = p.sets * (p.pTime + p.nTime) + p.pTime;
        }
      }

      // CAUSE AND EFFECT
      if (setting == 5) {
        console.log("Here " + p.type);

        if (p.type == "ran") {
          correctAnswer = p.flightTotal * p.ran;
        }
        if (p.type == "walked") {
          correctAnswer = p.flightTotal * (p.ran + p.walk);
        }
      }

      //IDENTICAL EFFECT: DISCOUNT
      if (setting == 6) {
        correctAnswer = p.discount;
      }
    }

    // ANSWERS
    if (level == "heuSixb") {
      //SIMULTANEOUS EQUATION ( PARTS AND UNITS) TYPE 1
      if (setting == 1) {
        if (p.question == "AF") correctAnswer = p.unitsA * p.multiplier;
        if (p.question == "BF") correctAnswer = p.unitsB * p.multiplier;
        if (p.question == "AE")
          correctAnswer = p.unitsA * p.multiplier + p.situationA;
        if (p.question == "BE")
          correctAnswer = p.unitsB * p.multiplier + p.situationB;
      }
      //IDENTICAL QUANTITY WITH DIFFERENCE TYPE 3
      if (setting == 2) {
        correctAnswer = `${Math.abs(p.personATotal - p.personBTotal)}, ${
          p.packets
        }`;
      }

      // MORE THAN / LESS THAN
      if (setting == 3) {
        if (p.question == "A") correctAnswer = p.varA;
        if (p.question == "B") correctAnswer = p.varB;
      }

      //USING IT ALL
      if (setting == 4) {
        correctAnswer = p.answer;
      }
      //IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 1 MULTIPLES
      if (setting == 5) {
        if (p.question == "VA") correctAnswer = p.priceA;
        if (p.question == "VB") correctAnswer = p.priceB;
        if (p.question == "QA") correctAnswer = p.quantityA * p.groups;
        if (p.question == "QB") correctAnswer = p.quantityB * p.groups;
      }
      if (setting == 6) {
        const valueA = accDecimal((p.priceA * p.quantityA) / 100);
        const valueB = accDecimal((p.priceB * p.quantityB) / 100);
        if (p.question == "VA") correctAnswer = valueA;
        if (p.question == "VB") correctAnswer = valueB;
        if (p.question == "QA") correctAnswer = p.quantityA;
        if (p.question == "QB") correctAnswer = p.quantityB;
        if (p.question == "T") correctAnswer = valueA + valueB;
      }

      if (setting == 7) {
        if (p.version == "money") {
          const commonQuantity = commonDeno(p.quantityA, p.quantityB);
          console.log("Money, 1 group: " + commonQuantity);
          if (p.question == "VA")
            correctAnswer =
              ((p.groups * commonQuantity) / p.quantityA) * p.priceA;
          if (p.question == "VB")
            correctAnswer =
              ((p.groups * commonQuantity) / p.quantityB) * p.priceB;
          if (p.question == "QA") correctAnswer = p.groups * commonQuantity;
          if (p.question == "QB") correctAnswer = p.groups * commonQuantity;
          // if (p.question == "T") correctAnswer = valueA + valueB;
          correctAnswer = accDecimal(correctAnswer);
        }
        if (p.version == "distance") {
          const commonDistance = commonDeno(p.priceA, p.priceB);
          const totalFlagA =
            (commonDistance / p.priceA) * p.quantityA * p.groups;
          const totalFlagB =
            (commonDistance / p.priceB) * p.quantityB * p.groups;
          if (p.question == "QA") correctAnswer = totalFlagA;
          if (p.question == "QB") correctAnswer = totalFlagB;
          if (p.question == "VA" || p.question == "VB")
            correctAnswer = commonDistance * p.groups;
        }
      }

      if (setting == 8) {
        // const A = p.valueA * p.denoA;
        // const B = p.valueB * p.denoB;
        // if (p.question == "A") correctAnswer = A;
        // if (p.question == "B") correctAnswer = B;
        if (p.question == "A") correctAnswer = p.valueA;
        if (p.question == "B") correctAnswer = p.valueB;
      }
    }
    if (mulLevel == "multiples") {
      correctAnswer = p.numFive * (multiplesArr.length - 1);
    }

    console.log(correctAnswer, userInput.value);
    console.log(typeof correctAnswer, typeof userInput.value);

    // adjust to uppercase
    const levelToCaps = [3.18, 4.17, 4.18, 5.02, 5.06];
    if (levelToCaps.includes(level) || (level == 3.16 && p.optionFinal == 4)) {
      userInput.value = userInput.value.toUpperCase();
    }
    //  adjust to lowercase
    const levelToLower = [1.04, 1.05];
    if (levelToLower.includes(level)) {
      userInput.value = userInput.value.toLowerCase();
    }

    //MARK HERE
    if (
      userInput.value.trim() == correctAnswer ||
      userInput2.value.trim() == correctAnswer ||
      userInput.value.trim() == correctAnswerTwo ||
      userInput2.value.trim() == correctAnswerTwo ||
      permutationAnswer(userInput2.value, correctAnswer) ==
        "From permutation: Correct" ||
      correctAnswerArr.includes(userInput.value.trim()) ||
      correctAnswerArr.includes(userInput2.value.trim())
    ) {
      // WHEN CORRECT
      console.log("correct");
      //HIDE HELP
      document.querySelector(".help-btn").classList.add("hidden");
      //RESTART QUESTION TIME
      clearInterval(questionTime);
      questionTimer();
      // EXTRA PRACTICE CHECK

      regen = 0;
      questionsCorrectArr.push(setting);
      const extra = cutOffCheck(level, setting, questionSecs);
      if (extra) {
        if (!extraPracticeArr.includes(extra)) {
          extraPracticeArr.push(extra);
        } else {
          console.log("Already Exist");
        }
      }
      console.log(`Extra Practice Needed: ${extraPracticeArr}`);

      skipGlobalUpdateProblem = 0;
      state.score++;
      accumulatedScore++;
      console.log(accumulatedScore);

      summaryPush("✅");
      ctx.clearRect(0, 0, 1000, 1000);
      if (mulLevel == "multiples") {
        multiplesArr.push(userInput.value);
        state.score = multiplesArr.length - 1;
        helpMe.textContent = multiplesArr.slice(1);
      }
      if (hardcore == 1 && state.mistake > 0) {
        currentScore.textContent = `${state.score} (${accumulatedScore})`;
      } else {
        currentScore.textContent = state.score;
      }
      currentScore.classList.add("animate-right");
      setTimeout(() => currentScore.classList.remove("animate-right"), 331);
      state.numSix++;
      arr.length = 0;
      arr2.length = 0;
      calArrQns.length = 0;
      if (level == 4.18) {
        arr2 = ["B", "C", "F", "I", "H", "G", "D", "A"];
      }
      arr3.length = 0;
      console.log(arr, arr2, arr3);
      commonMultipleArr.length = 0;
      commonMultipleArrTwo.length = 0;
      console.log(arr, commonMultipleArr, commonMultipleArrTwo);
      ctx.clearRect(0, 0, 400, 275);
      if (level == 2.02 || level == 2.05 || level == 4.07) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        arr2.length = 0;
        console.log("Array reset", arr, arr2);
      }
      if (level == 2.06) {
        arr.length = 0;
        arr2.length = 0;
      }
      if (level == 3.15 || level == 3.16) {
        arr2.length = 0;
      }
      if (level == 4.17) {
        arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        arr2.length = 0;
        arr3.length = 0;
      }
      if (level == 4.18) {
        arr = ["A", "B", "C", "D", "O", "F", "G", "H", "I"];
      }

      // remove help me text
      const removeHelpMe = [
        1.01,
        3.04,
        3.05,
        3.06,
        4.02,
        4.06,
        // 4.07,
        4.11,
        4.26,
        6.05,
        "heuThree",
        "heuThreeb",
        "heuFour",
        "heuFive",
        "heuFiveb",
        "heuSix",
      ];

      //CALCULATIONS
      if (level == "calThree") {
        // if (setting == 14) {
        displayProblem.style.fontSize = "revert";
        displayProblem.style.textAlign = "revert";
        // }
      }

      if (removeHelpMe.includes(level)) helpMe.textContent = "";

      reviewAnswer.classList.add("hidden");
      if (state.score != scoreNeeded) {
        console.log("new questions generated");
        updateProblems(level, state, setting, regen);
      }
    } else {
      // WHEN INCORRECT
      console.log("incorrect");

      helpList(level);
      document
        .querySelector(".help-btn")
        .addEventListener("click", function () {
          console.log("Seeking help");
          helpMeFunc(level, state, setting);
        });
      state.mistake++;
      summaryPush("❌");

      //EXTRA PRACTICE
      if (
        level.toString().startsWith("cal") ||
        level.toString().startsWith("heu")
      ) {
        if (!extraPracticeArr.includes(setting)) extraPracticeArr.push(setting);
        console.log(`Extra Practice Needed: ${extraPracticeArr}`);
      }

      reviewCount = 1;
      reviewAnswer.classList.remove("hidden");
      state.correctAnswer = correctAnswer;

      if (hardcore == 1) {
        state.score = 0;
        currentScore.innerHTML = `${state.score} (${accumulatedScore})`;
        console.log("test");
      } else if (easy == 1 || mulLevel == "multiples") {
        console.log("Easy Mode");
        currentScore.textContent = state.score;
      } else {
        if (state.score > 0 && state.score < 11) {
          state.score = state.score - 1;
        }
        if (state.score >= 11 && state.score < 21) {
          state.score = state.score - 2;
        }
        if (state.score >= 21 && state.score < 30) {
          state.score = state.score - 3;
        }
        if (state.score >= 31 && state.score < 40) {
          state.score = state.score - 4;
        }
        if (state.score >= 41 && state.score < 50) {
          state.score = state.score - 5;
        }
        currentScore.textContent = state.score;
      }

      currentMistake.textContent = state.mistake;
      currentMistake.classList.add("animate-wrong");
      setTimeout(() => currentMistake.classList.remove("animate-wrong"), 331);
      mainContainer.classList.add("animate-wrong-container");
      setTimeout(
        () => mainContainer.classList.remove("animate-wrong-container"),
        331
      );
      const levelDoNotClear = [
        "heuOne",
        "heuTwo",
        "heuThree",
        "heuFour",
        "heuFive",
        "heuSix",
        "heuSixb",
        "heuTwob",
        "calOne",
        "calTwo",
        "calThree",
        "calFour",
        "calFive",
        "calSix",
        "calSixb",
      ];
      const levelDoNotClearNum = [
        2.05, 2.09, 2.08, 2.09, 3.09, 3.12, 3.13, 3.14, 3.16, 4.0, 4.03, 5.11,
        6.01,
      ];
      if (
        !levelDoNotClearNum.includes(level) &&
        !levelDoNotClear.includes(level)
      ) {
        console.log("DO NOT CLEAR");
        userInput.value = "";
        userInput2.value = "";
      }
      if (level == 4.0) {
        arr.length = 0;
      }

      let allHeuArray = [
        "heuTwo",
        "heuTwob",
        "heuThree",
        "heuThreeb",
        "heuFour",
        "heuFive",
        "heuFiveb",
        "heuSix",
      ];

      // HEURISTICS
      if (allHeuArray.includes(level)) {
        console.log(`Heurisics: ${level} incorrect.`);
        // HEURISTICS ASSIST AREA

        // / adds question back into array if wrong
        if (!heuArr.includes(p.rollz)) {
          heuArr.push(p.rollz);
          console.log(heuArr);
        }
      }
      // adds cal back into array if wrong
      if (attempt == 1) {
        if (!calArr.includes(setting)) {
          calArr.push(setting);
          console.log(`Incorrect, try setting ${setting} again!`);
          console.log(calArr);
        }
      } else {
        calArr.push(setting);
        console.log(calArr);
      }
    }
  }
}

// Step 1: generate number
export function genNumbers(max) {
  return Math.floor(Math.random() * max);
}
//////////////////////////// SET VALUES //////////////////////////////
// Step 2: Generate Problem
export function genProblems(level, regen) {
  if (level == 1.0) {
    return {
      numOne: genNumbers(5) + 1,
      numTwo: genNumbers(5) + 1,
      operator: ["+", "-"][genNumbers(2)],
    };
  }

  if (level == 1.01) {
    return {
      numThree: genNumbers(5) + 1,
      numFour: genNumbers(4) + 1,
      operator: ["x", "÷"][genNumbers(2)],
    };
  }

  if (level == 1.02) {
    return {
      numOne: genNumbers(10) + 5,
      numTwo: genNumbers(4) + 5,
      operator: ["+", "-"][genNumbers(2)],
    };
  }

  if (level == 1.03) {
    return {
      numOne: genNumbers(10) + 5,
      numTwo: genNumbers(4) + 5,
      numThree: genNumbers(5) + 1,
      numFour: genNumbers(4) + 1,
      operator: ["+", "-", "x", "÷"][genNumbers(4)],
    };
  }

  if (level == 1.04) {
    return {
      numOne: genNumbers(99) + 1,
      numTwo: genNumbers(99) + 1,
      numThree: genNumbers(99) + 1,
      option: ["c", "d", "r"][genNumbers(3)],
      optionTwo: ["1", "2"][genNumbers(2)],
      operator: ["+", "-"][genNumbers(2)],
    };
  }

  if (level == 1.05) {
    return {
      numOne: genNumbers(99) + 1,
      numTwo: genNumbers(99) + 1,
      numThree: genNumbers(99) + 1,
      option: ["c", "d", "r"][genNumbers(3)],
      optionTwo: ["1", "2"][genNumbers(2)],
      optionThree: ["more", "less"][genNumbers(2)],
    };
  }

  if (level == 1.06) {
    return {
      numOne: genNumbers(9) + 1,
      numTwo: genNumbers(9) + 1,
      numThree: genNumbers(9) + 1,
      numFour: genNumbers(9) + 1,
      numTotal: 0,
      numDiff: 0,
      operator: ["+", "-"][genNumbers(2)],
      operatorTwo: ["+", "-"][genNumbers(2)],
      optionFinal: ["4", "3", "2", "1"][genNumbers(4)],
    };
  }

  if (level == 1.07) {
    return {
      numOne: genNumbers(9) + 1,
      numTwo: genNumbers(98) + 1,
      numThree: genNumbers(9) + 1,
      option: ["1", "2"][genNumbers(2)],
    };
  }

  if (level == 1.08) {
    return {
      choice: ["multiply", "division"][genNumbers(2)],
      objects: ["unit", "item", "mass", "volume", "length"][genNumbers(5)],
      quantity: genNumbers(4) + 2,
      numOne: undefined,
      multiplier: genNumbers(4) + 2,
      item1: ["apple", "toy", "pear", "sweet"][genNumbers(4)],
      item2: ["bag", "packet", "group"][genNumbers(3)],
      itemMass: ["bag", "watermelon", "dog", "stone", "coin", "seed"][
        genNumbers(5)
      ],
      itemVolume: ["raindrop", "bowl", "container"][genNumbers(3)],
      itemLength: ["string", "rope", "wire"][genNumbers(3)],
    };
  }

  if (level == 2.0) {
    return {
      numOne: genNumbers(40) + 10,
      numTwo: genNumbers(40) + 10,
      operator: ["+", "-"][genNumbers(2)],
    };
  }

  if (level == 2.01) {
    return {
      numThree: genNumbers(5) + 1,
      numFour: genNumbers(5) + 5,
      operator: ["x", "÷"][genNumbers(2)],
    };
  }

  if (level == 2.02) {
    // setting = calArrAll(5, calArr, setting, 9);
    // setting = checkRange(setting, calArr, skipArr);
    return {
      totalNumber: 0,
      holdingNumber: undefined,
      place: undefined,
    };
  }

  if (level == 2.03) {
    return {
      numOne: genNumbers(40) + 10,
      numTwo: genNumbers(40) + 10,
      numThree: genNumbers(5) + 1,
      numFour: genNumbers(5) + 5,
      operator: ["+", "-", "x", "÷"][genNumbers(4)],
    };
  }

  if (level == 2.04) {
    return {
      figure: ["🏀", "⚽️", "🏈", "🎾", "🍎", "🍏", "🌭"][genNumbers(7)],
      repeat: [2, 3][genNumbers(2)],
      operator: ["x", "+"][genNumbers(2)],
      numOne: genNumbers(4) + 2,
    };
  }

  if (level == 2.05) {
    return {
      choice: ["smallest", "greatest"][genNumbers(2)],
      landingNumber: undefined,
      finalNumber: undefined,
      evenOrOdd: ["even", "odd"][genNumbers(2)],
    };
  }

  if (level == 2.06) {
    return {
      figure: ["🏀", "⚽️", "🏈", "🎾", "🍎", "🍏", "🌭"][genNumbers(7)],
      figureTwo: ["🏀", "⚽️", "🏈", "🎾", "🍎", "🍏", "🌭"][genNumbers(7)],
      operator: "+",
      numOne: genNumbers(9) + 2,
      numTwo: genNumbers(5) + 1,
    };
  }

  if (level == 2.07) {
    return {
      numOne: genNumbers(5) + 1,
      numThree: genNumbers(4) + 5,
      numFour: genNumbers(4) + 5,
      numTwo: genNumbers(10) + 6,
      numFive: genNumbers(5) + 1,
      numSix: genNumbers(5) + 1,
      option: ["1", "2"][genNumbers(2)],
      bigOrSmall: ["1", "2"][genNumbers(2)],
    };
  }

  if (level == 2.08) {
    return {
      operator: ["-", "+"][genNumbers(2)],
      minHours: ["mins", "h"][genNumbers(2)],
      minSeconds: undefined,
      numOne: genNumbers(10),
      numTwo: genNumbers(60) + 1,
      numThree: genNumbers(10),
      numFour: genNumbers(60) + 1,
    };
  }

  if (level == 2.09) {
    return {
      timeHours: genNumbers(24) + 1,
      timeMinutes: genNumbers(60),
      changeHours: genNumbers(6) + 1,
      changeMinutes: genNumbers(55) + 5,
      roll: ["hours", "mins"][genNumbers(2)],
      situation: ["later", "before"][genNumbers(2)],
      amOrPm: undefined,
    };
  }

  if (level == 2.1) {
    return {
      hour: genNumbers(12) + 1,
      min: genNumbers(60),
    };
  }

  if (level == 3.0) {
    return {
      numOne: genNumbers(150) + 100,
      numTwo: genNumbers(150) + 100,
      operator: ["+", "-"][genNumbers(2)],
    };
  }

  if (level == 3.01) {
    return {
      numThree: genNumbers(6) + 5,
      numFour: genNumbers(6) + 5,
      operator: ["x", "÷"][genNumbers(2)],
    };
  }

  if (level == 3.02) {
    return {
      numOne: genNumbers(97) + 2,
      numMulti: [10, 100, 100][genNumbers(3)],
      numMultiTwo: [1, 10][genNumbers(2)],
      numPlace: ["tens", "hundreds", "thousands"][genNumbers(3)],
      operator: ["x", "÷"][genNumbers(2)],
      option: ["1", "2", "3", "4"][genNumbers(4)],
    };
  }

  if (level == 3.03) {
    return {
      numOne: genNumbers(150) + 100,
      numTwo: genNumbers(150) + 100,
      numThree: genNumbers(6) + 5,
      numFour: genNumbers(6) + 5,
      operator: ["+", "-", "x", "÷"][genNumbers(4)],
    };
  }

  if (level == 3.04) {
    return {
      numOne: genNumbers(10) + 1,
      numTwo: 1000,
      unitMeasurement: ["min", "$", "m", "kg", "km", "ℓ"][genNumbers(6)],
      secondUnitMeasurement: 0,
    };
  }

  if (level == 3.05) {
    return {
      numOne: genNumbers(10) + 1,
      numTwo: 1000,
      numThree: genNumbers(99) + 1,
      numFour: genNumbers(1000) + 1,
      numFive: genNumbers(58) + 1,
      unitMeasurement: ["min", "$", "m", "kg", "km", "ℓ"][genNumbers(6)],
      option: ["1", "2"][genNumbers(2)],
      secondUnitMeasurement: 0,
    };
  }

  if (level == 3.06) {
    return {
      numOne: genNumbers(10) + 1,
      numTwo: 1000,
      numThree: genNumbers(99) + 1,
      numFour: genNumbers(1000) + 1,
      numFive: genNumbers(58) + 1,
      unitMeasurement: ["kg", "km", "ℓ", "$", "m", "min"][genNumbers(6)],
      option: ["1", "2"][genNumbers(2)],
      secondUnitMeasurement: 0,
      remainder: 0,
    };
  }

  if (level == 3.07) {
    return {
      numOne: genNumbers(5) + 1,
      numTwo: genNumbers(4) + 2,
      numThree: genNumbers(5) + 1,
    };
  }

  if (level == 3.08) {
    return {
      hoursOne: genNumbers(24) + 1,
      minsOne: genNumbers(60),
      hoursTwo: genNumbers(24) + 1,
      minsTwo: genNumbers(60),
      amOrPmOne: "pm",
      amOrPmTwo: "pm",
    };
  }

  if (level == 3.09) {
    return {
      numOne: genNumbers(9) + 1,
      numTwo: genNumbers(9) + 2,
      numMulti: genNumbers(6) + 2,
      numLargest: 0,
    };
  }

  if (level == 3.1) {
    return {
      numOne: genNumbers(9) + 1,
      numTwo: genNumbers(9) + 2,
      numMulti: genNumbers(6) + 2,
      numLargest: 0,
      option: ["1", "2"][genNumbers(2)],
    };
  }

  if (level == 3.11) {
    return {
      numOne: genNumbers(9) + 1,
      numTwo: genNumbers(9) + 2,
      numMulti: genNumbers(6) + 2,
      numLargest: 0,
      option: ["1", "2"][genNumbers(2)],
      optionFinal: ["1", "2"][genNumbers(2)],
    };
  }

  if (level == 3.12) {
    return {
      length: genNumbers(4) + 4,
      breadth: genNumbers(3) + 4,
      side: genNumbers(2) + 1,
      count: undefined,
    };
  }

  if (level == 3.13) {
    return {
      numTwo: genNumbers(10) + 1,
      numThree: genNumbers(5) + 2,
      numFour: genNumbers(5) + 5,
    };
  }

  if (level == 3.14) {
    return {
      numFive: genNumbers(8) + 5,
      numSix: [-1, 1, 2][genNumbers(3)],
    };
  }

  if (level == 3.15) {
    return {
      rollType: ["A", "B"][genNumbers(2)],
      rollA: undefined,
      rollB: undefined,
      rollTimes: genNumbers(3) + 3,
      position: genNumbers(30) + 20,
    };
  }

  if (level == 3.16) {
    setting = calArrAll(5, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);
    console.log(state.global);
    if (setting == 1 || setting == 5) {
      return {
        numOne: genNumbers(94) + 7,
      };
    }
    if (setting == 2) {
      return {
        numTwo: genNumbers(10) + 1,
        numThree: genNumbers(5) + 2,
        numFour: genNumbers(5) + 5,
      };
    }
    if (setting == 3) {
      return {
        numFive: genNumbers(8) + 5,
        numSix: [-1, 1, 2][genNumbers(3)],
      };
    }
    if (setting == 4) {
      return {
        rollType: ["A", "B"][genNumbers(2)],
        rollA: undefined,
        rollB: undefined,
        rollTimes: genNumbers(3) + 3,
        position: genNumbers(30) + 20,
        question: ["A", "B"][genNumbers(2)],
        alphabet: undefined,
      };
    }
  }

  if (level == 3.17) {
    return {
      arcAngle: genNumbers(140) + 20,
      acuteOrObtuse: ["acute", "obtuse"][genNumbers(2)],
      roll: [1, 2][genNumbers(2)],
    };
  }

  if (level == 3.18) {
    return {
      // pointX1: genNumbers(70)+30,
      pointY1: genNumbers(80) + 20,

      // pointX2: genNumbers(3),
      pointY2: genNumbers(80) + 20,

      pointY3: genNumbers(80) + 20,

      rotation1: genNumbers(360),
      rotation2: [90, 270][genNumbers(2)],
      translateX: genNumbers(100) - 50,
      translateY: genNumbers(100) - 50,

      translateX2: genNumbers(100) - 50,
      translateY2: genNumbers(100) - 50,

      translateX3: genNumbers(100) - 50,
      translateY3: genNumbers(100) - 50,

      labelABC: ["A", "B", "C"][genNumbers(3)],
      labelDEF: ["D", "E", "F"][genNumbers(3)],
      labelGHI: ["G", "H", "I"][genNumbers(3)],
      labelJKL: ["J", "K", "L"][genNumbers(3)],
      labelMNO: ["M", "N", "O"][genNumbers(3)],
      labelPQR: ["P", "Q", "R"][genNumbers(3)],

      roll: [1, 2][genNumbers(3)],

      parallelOrPerpendicular: ["parallel", "perpendicular"][genNumbers(2)],
    };
  }

  if (level == 3.19) {
    // if (difficulty != 1 && difficulty != 2 && difficulty != 9) {
    //   difficulty = 9;
    // }
    setting = calArrAll(2, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);
    console.log(difficulty);
    return {
      shapeChoice: ["rectangle", "square"][genNumbers(2)],
      squareCoord: genNumbers(50) + 30,

      rectLengthCoord: genNumbers(5) * 10 + 50,
      rectBreadthCoord: genNumbers(5) * 10 + 10,

      squareSide: genNumbers(12) + 2,
      rectLength: undefined,
      rectBreadth: undefined,

      unitMeasurement: ["cm", "m", "km"][genNumbers(3)],
      areaOrPerimeter: ["area", "perimeter"][genNumbers(2)],

      side: ["length", "breadth"][genNumbers(2)],
      area: undefined,
      perimeter: undefined,
      rollx: genNumbers(2),
    };
  }

  if (level == 4.0) {
    return {
      numOne: genNumbers(58) + 3,
    };
  }

  if (level == 4.01) {
    return {
      numOne: genNumbers(99998) + 100,
      placeValue: ["tens", "hundreds", "thousands", "ten thousands"][
        genNumbers(4)
      ],
    };
  }

  if (level == 4.02) {
    return {
      placeValue: ["tens", "hundreds", "thousands"][genNumbers(3)],
      numOne: genNumbers(99998) + 1,
      choice: ["Smallest", "Largest"][genNumbers(2)],
    };
  }

  if (level == 4.03) {
    if (setting != 1 && setting != 2 && setting != 9) setting = 9;
    setting = calArrAll(2, calArr, setting, 9);
    if (setting == 1) {
      const one = genNumbers(10) + 3;
      const two = genNumbers(10) + 3;
      return {
        chosen: genNumbers(2),
        numOne: genNumbers(one - 1) + 1,
        denoOne: one,
        numTwo: genNumbers(two - 1) + 1,
        denoTwo: two,
        size: ["Smaller", "Bigger"][genNumbers(2)],
      };
    }
    if (setting == 2) {
      const denoOne = genNumbers(7) + 4;
      const denoTwo = genNumbers(7) + 4;
      return {
        numOne: denoOne - 1,
        denoOneUse: denoOne,
        numTwo: denoTwo - 1,
        denoTwoUse: denoTwo,
        size: ["Smaller", "Bigger"][genNumbers(2)],
      };
    }
  }
  if (level == 4.04) {
    setting = calArrAll(2, calArr, setting, 9);
    if (setting == 1) {
      return {
        numOne: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 2,
        numThree: genNumbers(10) + 2,
        numFour: 0,
      };
    }

    if (setting == 2) {
      return {
        numOne: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 2,
        numThree: genNumbers(10) + 2,
        numFour: 0,
      };
    }
    // return {
    //   numOne: genNumbers(9) + 1,
    //   numTwo: genNumbers(9) + 2,
    //   numThree: genNumbers(10) + 2,
    //   numFour: 0,
    //   optionFinal: ["1", "2"][genNumbers(2)],
    // };
  }

  if (level == 4.05) {
    let roll = undefined;

    if ((setting != 1 && setting != 2) || isNaN(setting)) {
      setting = 9;
    }

    if (setting == 9) {
      roll = genNumbers(2) + 1;
    }

    if (setting == 1 || (setting == 9 && roll == 1)) {
      return {
        rollChoice: 1,
        numOne: genNumbers(8) + 1,
        numTwo: genNumbers(8) + 2,
        numMulti: genNumbers(8) + 2,
      };
    }
    if (setting == 2 || (setting == 9 && roll == 2)) {
      return {
        rollChoice: 2,
        nume: genNumbers(8) + 1,
        deno: genNumbers(8) + 2,
        numMulti: genNumbers(8) + 2,
      };
    }
  }

  if (level == 4.06) {
    return {
      objectOne: ["A", "B", "C"][genNumbers(3)],
      objectTwo: ["X", "Y", "Z"][genNumbers(3)],
      oneValue: genNumbers(5) + 1,
      twoValue: genNumbers(5) + 1,
      rollTypeClue: ["11", "1T"][genNumbers(2)],
      rollTypeQnSyn: ["isof", "ofis"][genNumbers(2)],
      rollTypeQn1T: ["AB", "BA"][genNumbers(2)],
      rollTypeQn11: ["1T", "T1"][genNumbers(2)],
    };
  }

  if (level == 4.07) {
    return {
      holdingNumber: 0,
      finalNumber: 0,
      totalNumber: 0,
      placeValue: [
        "ones",
        "tens",
        "hundreds",
        "thousands",
        "tenths",
        "hundredths",
        "thousandths",
      ][genNumbers(7)],
    };
  }
  if (level == 4.08) {
    let position = genNumbers(3);
    return {
      pos: position,
      wholeNum: genNumbers(999) + 1,
      decOne: genNumbers(9) + 1,
      decTwo: genNumbers(9) + 1,
      decThree: genNumbers(9) + 1,
      placeValue: [
        ["whole Number", "whole Number"],
        ["1 decimal place", "tenth place"],
        ["2 decimal place", "hundredth place"],
        // ["3 decimal place", "thousandth place"],
      ][position][genNumbers(2)],
      num: undefined,
    };
  }
  if (level == 4.09) {
    return {
      numOne: genNumbers(999) + 1,
      numTwo: [10, 100, 1000][genNumbers(3)],
    };
  }

  if (level == 4.1) {
    return {
      numOne: genNumbers(999) + 1,
      numTwo: [1, 10, 100][genNumbers(3)],
      numThree: [10, 100, 1000][genNumbers(3)],
      operator: ["x", "÷"][genNumbers(2)],
    };
  }

  if (level == 4.11) {
    //Bigger unit to smaller unit
    setting = calArrAll(2, calArr, setting, 9);
    if (setting == 1) {
      return {
        wholeNum: [0, 1][genNumbers(2)] * (genNumbers(99 - 1) + 1),
        deciOne: ([0, 1][genNumbers(2)] * (genNumbers(10) + 1)) / 10,
        deciTwo: ([0, 1][genNumbers(2)] * (genNumbers(10) + 1)) / 100,
        deciThree: ([0, 1][genNumbers(2)] * (genNumbers(10) + 1)) / 1000,
        sumOfNum: undefined,
        unitMeasurementPair: [
          ["m", "cm"],
          ["$", "¢"],
          ["ℓ", "ml"],
          ["km", "m"],
          ["kg", "g"],
        ][genNumbers(5)],
        firstUnit: undefined,
        secondUnit: undefined,
      };
    }
    //Smaller unit to bigger unit
    if (setting == 2) {
      return {
        wholeNum: [0, 1][genNumbers(2)] * (genNumbers(99 - 1) + 1),
        deciOne: ([0, 1][genNumbers(2)] * (genNumbers(10) + 1)) / 10,
        deciTwo: ([0, 1][genNumbers(2)] * (genNumbers(10) + 1)) / 100,
        deciThree: ([0, 1][genNumbers(2)] * (genNumbers(10) + 1)) / 1000,
        sumOfNum: undefined,
        unitMeasurementPair: [
          ["m", "cm"],
          ["$", "¢"],
          ["ℓ", "ml"],
          ["km", "m"],
          ["kg", "g"],
        ][genNumbers(5)],
        firstUnit: undefined,
        secondUnit: undefined,
      };
    }
  }

  if (level == 4.13) {
    return {
      type: [12, 24][genNumbers(2)],
      hours: genNumbers(24),
      // hours: [0, 12][genNumbers(2)],
      mins: genNumbers(60),
    };
  }

  if (level == 4.14) {
    return {
      numOne: genNumbers(8),
      numTwo: genNumbers(8) + 1,
      numThree: genNumbers(8) + 1,
      numFour: genNumbers(999999) + 1,
      unitMeasurement: ["m", "ℓ", "km", "kg"][genNumbers(4)],
      option: ["r", "f", "v"][genNumbers(3)],
      optionTwo: genNumbers(2) + 1,
    };
  }

  //POSITION PATTERN
  if (level == 4.15) {
    return {
      start: 1,
      columns: genNumbers(4) + 1,
      type: ["repeat", "snake"][genNumbers(2)],
      question: ["number", "columnRow"][genNumbers(2)],
      column: ["A", "B", "C", "D"][genNumbers(4)],
      row: genNumbers(5) + 10,
      number: genNumbers(50) + 50,
    };
  }

  if (level == 4.17) {
    return {
      choice: ["A", "B", "C", "D", "E", "F", "G", "H", "I"][genNumbers(9)],
      compass: [
        "north",
        "north-east",
        "east",
        "south-east",
        "south",
        "south-west",
        "west",
        "north-west",
      ][genNumbers(8)],
      roll: [1, 2][genNumbers(2)],
    };
  }

  if (level == 4.18) {
    return {
      choice: ["A", "B", "C", "D", "F", "G", "H", "I"][genNumbers(8)],
      roll: [2, 1][genNumbers(2)],
      angleTurn: (genNumbers(8) + 1) * 45,
      direction: ["clockwise", "anti-clockwise"][genNumbers(2)],
      finalIndex: undefined,
    };
  }

  if (level == 4.19) {
    return {
      // square
      coordSquare: genNumbers(70) + 70,
      squareRoll: [1, 2, 3][genNumbers(3)],

      coordRect1: genNumbers(70) + 70,
      coordRect2: genNumbers(50) + 80,
      rectRoll: [1, 2, 3][genNumbers(3)],
      angle: undefined,
      angleDegrees: undefined,

      angleStraight: genNumbers(160) + 10,
      straightRoll: [1, 2][genNumbers(2)],

      angleCircle: genNumbers(340) + 10,
      circleRoll: [2, 1][genNumbers(2)],

      shapeRoll: ["circle", "straight", "Rectangle", "Square"][genNumbers(4)],
    };
  }

  if (level == 4.2) {
    return {
      rollType: [3, 2, 1][genNumbers(3)],

      lengthTotal: undefined,
      topOne: (genNumbers(4) + 7) * 20,
      topTwo: undefined,
      sideOne: (genNumbers(5) + 2) * 20,
      sideTwo: undefined,

      smallSquare: genNumbers(4) + 2 * 10,
      bigSquare: (genNumbers(5) + 12) * 10,

      rectangle: (genNumbers(5) + 12) * 20,
    };
  }

  if (level == 4.21) {
    setting = calArrAll(5, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);
    return {
      rollType: undefined,
      dimension: genNumbers(3) + 2,
      length: undefined,
      breadth: undefined,
      height: undefined,
      smallBreadth: undefined,
      smallLength: undefined,
    };
  }

  if (level == 4.22) {
    return {
      layerOne: genNumbers(4) + 2,
      layerTwo: undefined,
      layerThree: undefined,
      layerFour: undefined,
    };
  }

  if (level == 4.23) {
    return {
      type: ["statement", "figure"][genNumbers(2)],
      breadth: genNumbers(5) + 1,
      unitSentence: genNumbers(3) + 2,
      question: ["area", "perimeter"][genNumbers(2)],
      quantity: genNumbers(3) + 2,
      area: undefined,
      perimeter: undefined,
    };
  }

  if (level == 4.24) {
    return {
      objectOne: ["A", "B", "C"][genNumbers(3)],
      objectTwo: ["X", "Y", "Z"][genNumbers(3)],
      oneValue: genNumbers(5) + 1,
      twoValue: genNumbers(5) + 1,
      rollTypeClue: ["11", "1T"][genNumbers(2)],
      rollTypeQnSyn: ["isof", "ofis"][genNumbers(2)],
      rollTypeQn1T: ["AB", "BA"][genNumbers(2)],
      rollTypeQn11: ["1T", "T1"][genNumbers(2)],
    };
  }

  if (level == 4.25) {
    return {
      squareOne: (genNumbers(10) + 1) * 10,
      squareTwo: (genNumbers(10) + 1) * 10,
      squareThree: (genNumbers(10) + 1) * 10,
      squareFour: (genNumbers(10) + 1) * 10,
      roll: [2, 3, 4][genNumbers(3)],
      length: undefined,
      question: ["perimeter", "AB"][genNumbers(2)],
    };
  }

  if (level == 4.26) {
    return {
      oneSideNoCorners: genNumbers(10) + 2,
      version: genNumbers(3),
    };
  }
  // if (level == 5.0) {
  //   return {
  //     pointX1: genNumbers(70) + 50,
  //     pointY1: genNumbers(40) + 40,
  //     // pointX2: genNumbers(3),
  //     // pointY2: genNumbers(4),
  //     rotation: genNumbers(360),
  //     translateX: genNumbers(200) + 100,
  //     translateY: genNumbers(40) + 137.5,
  //     labelABC: ["A", "B", "C"][genNumbers(3)],
  //     labelDEF: ["D", "E", "F"][genNumbers(3)],
  //     labelGHI: ["G", "H", "I"][genNumbers(3)],
  //     labelJKL: ["J", "K", "L"][genNumbers(3)],
  //     sidesBH: ["base", "height", "base2", "height2"][genNumbers(4)],
  //   };
  // }

  if (level == 5.0) {
    return {
      numOne: genNumbers(5) + 1,
      numTwo: genNumbers(5) + 2,
      numThree: genNumbers(5) + 2,
      numFour: genNumbers(5) + 3,
      firstVar: ["whole", "fake"][genNumbers(2)],
      secondVar: ["real", "fake", "whole"][genNumbers(3)],
      object: genNumbers(3),
      groups: [
        ["water", "L"],
        ["snacks", "kg"],
        ["cloth", "m"],
      ],
      operator: ["x", "/", "+", "-"][genNumbers(4)],
      firstPerson: ["Anton", "Grady", "Emma", "Aria"][genNumbers(4)],
      otherPerson: ["Tom", "Henry", "Kim", "Jane"][genNumbers(4)],
    };
  }

  if (level == 5.01) {
    setting = calArrAll(3, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);
    if (setting == 1) {
      const total = genNumbers(5) + 5;
      return {
        // version: genNumbers(2),
        version: 1,
        numOne: genNumbers(total) + 1,
        denoOne: total,
        numTwo: genNumbers(total) + 1,
        denoTwo: total,
        identity: ["A", "B"][genNumbers(2)],
        ref: ["shaded", "unshaded"][genNumbers(2)],
        refColor: ["red", "blue", "green", "yellow"][genNumbers(4)],
      };
    }
    if (setting == 2) {
      const total = genNumbers(4) + 2;
      const num = genNumbers(total) + 1;
      const remainder = (total - num) * (genNumbers(3) + 1);
      return {
        numOne: num,
        denoOne: total,
        remainderDeno: remainder,
        remainderNum: genNumbers(remainder) + 1,
        identity: ["A", "B"][genNumbers(2)],
        refColor: ["red", "blue", "green", "yellow"][genNumbers(4)],
        question: genNumbers(2),
      };
    }
    if (setting == 3) {
      return {
        numOne: genNumbers(5) + 1,
        numTwo: genNumbers(5) + 6,
        numThree: genNumbers(5) + 1,
        numFour: genNumbers(5) + 6,
        numFive: genNumbers(5) + 1,
        numSix: genNumbers(5) + 6,
        varA: 0,
        varB: 0,
        varTotal: 0,
        letterBTotal: ["B", "A and B"][genNumbers(2)],
        letterAB: ["A", "B"][genNumbers(2)],
        letterLeftRemoved: ["left", "removed"][genNumbers(2)],
      };
    }
  }

  if (level == 5.02) {
    return {
      numOne: genNumbers(5) + 1,
      numTwo: genNumbers(5) + 1,
      numThree: genNumbers(5) + 1,
      numFour: genNumbers(5) + 1,
      sentenceChoice: ["is equal to", "the same as", "="][genNumbers(3)],
    };
  }

  if (level == 5.03) {
    return {
      numerator: genNumbers(10) + 1,
      denominator: [10, 100, 1000][genNumbers(3)],
      rollA: ["fraction", "decimal", "percentage"][genNumbers(3)],
      rollB: ["fraction", "decimal", "ratio"][genNumbers(3)],
      percentageDisplay: undefined,
    };
  }

  if (level == 5.04) {
    return {
      numOne: (genNumbers(10) + 1) * 5,
      numTwo: (genNumbers(18) + 1) * 5,
      numThree: (genNumbers(18) + 1) * 5,
      varA: 0,
      varB: 0,
      letterChange: ["increase", "decrease", "of"][genNumbers(3)],
      letterChangeTwo: ["increase", "decrease", "of"][genNumbers(3)],
      letterAB: ["A", "B"][genNumbers(2)],
    };
  }

  if (level == 5.05) {
    return {
      numOne: genNumbers(5) + 1,
      numTwo: genNumbers(5) + 6,
      numThree: (genNumbers(18) + 1) * 5,
      numFour: (genNumbers(18) + 1) * 5,
      varA: 0,
      varB: 0,
      letterBTotal: ["B", "A and B"][genNumbers(2)],
      letterChange: ["increase", "decrease", "of"][genNumbers(3)],
      letterChangeTwo: ["increase", "decrease", "of"][genNumbers(3)],
      letterAB: ["A", "B"][genNumbers(2)],
      option: [":", "/"][genNumbers(2)],
    };
  }

  if (level == 5.06) {
    setting = calArrAll(2, calArr, setting, 2);
    setting = checkRange(setting, calArr, skipArr);
    if (setting == 1) {
      return {
        pointX1: genNumbers(70) + 50,
        pointY1: genNumbers(40) + 40,
        // pointX2: genNumbers(3),
        // pointY2: genNumbers(4),
        rotation: genNumbers(360),
        translateX: genNumbers(200) + 100,
        translateY: genNumbers(40) + 137.5,
        labelABC: ["A", "B", "C"][genNumbers(3)],
        labelDEF: ["D", "E", "F"][genNumbers(3)],
        labelGHI: ["G", "H", "I"][genNumbers(3)],
        labelJKL: ["J", "K", "L"][genNumbers(3)],
        sidesBH: ["base", "height", "base2", "height2"][genNumbers(4)],
      };
    }
    if (setting == 2) {
      canvas.setAttribute("height", "300px");
      return {
        // triangle A
        triA1y: genNumbers(40) + 40,

        triA2y: undefined,

        triA3x: genNumbers(40) + 40,
        triA3y: undefined,

        // triangle B

        triB2y: undefined,
        triB3x: undefined,
        triB3y: undefined,

        labelABC: ["A", "B", "C"][genNumbers(3)],
        labelDEF: ["D", "E", "F"][genNumbers(3)],
        labelGHI: ["G", "H", "I"][genNumbers(3)],
        labelJKL: ["J", "K", "L"][genNumbers(3)],
        labelMNO: ["M", "P", "O"][genNumbers(3)],

        question: ["base", "height", "base2", "height2", "base3", "height3"][
          genNumbers(6)
        ],

        rotation: genNumbers(360),
      };
    }
  }

  if (level == 5.07) {
    return {
      roll: [3, 2, 1][genNumbers(3)],

      rightAngleTriX1: -(genNumbers(4) + 3) * 15,
      rightAngleTriX2: (genNumbers(4) + 3) * 20,
      rightAngleTriY: -(genNumbers(5) + 2) * 20,
      rightAngleRoll: [1, 2][genNumbers(2)],
      angleLabel: undefined,

      equiAngleTriX: (genNumbers(4) + 3) * 15,

      isosTriX: (genNumbers(4) + 4) * 12,
      isosAngle: (genNumbers(5) + 3) * 9,
      isosRoll: [2, 1][genNumbers(2)],
      isosAngle2Label: undefined,

      triRoll: [3, 2, 1][genNumbers(3)],
      triAx: (genNumbers(4) + 3) * 20,
      triBx: (genNumbers(4) + 3) * 20,
      triCx: (genNumbers(14) - 7) * 15,
      triCy: (genNumbers(4) + 4) * 15,
      triLeftAngleD: undefined,
      triRightAngleD: undefined,

      triDx: (genNumbers(5) + 1) * 5,
      tri2LeftAngleD: undefined,
      tri2RightAndleD: undefined,
      tri3LeftAngleD: undefined,
      tri3RightAndleD: undefined,
    };
  }

  if (level == 5.08) {
    return {
      roll: ["corresponding", "opposite"][genNumbers(2)],
      oppositeRotation: [genNumbers(120) + 30],
      finalRotation: [genNumbers(180) - 90],

      corrRoll: [4, 3, 2, 1][genNumbers(4)],
      correspondingTranslateY: (genNumbers(12) + 8) * 5,
      corrAngleDisplay: undefined,
    };
  }

  if (level == 5.09) {
    return {
      roll: ["discount", "increase", "decrease"][genNumbers(3)],
      rollChange: [1, 2][genNumbers(2)],
      change: genNumbers(10) + 1,
      totalAmount: genNumbers(10) + 10,
    };
  }

  if (level == 5.1) {
    return {
      rollShape: ["trapezium", "rhombus", "parallelogram"][genNumbers(3)],
      paraLength: (genNumbers(4) + 8) * 10,
      paraBreadth: (genNumbers(5) + 5) * 9,
      paraAngleD: undefined,
      paraRoll: [2, 1][genNumbers(2)],

      rhombusSide: (genNumbers(5) + 5) * 15,
      rhombusAngleD: undefined,
      rhombusRoll: [5, 4, 3, 2, 1][genNumbers(5)],

      trapLengthL: (genNumbers(4) + 8) * 10,
      trapLengthB: (genNumbers(4) + 8) * 10,
      trapTop: (genNumbers(4) + 8) * 10,
      trapAngleD: undefined,
      trapAngleD2: undefined,
      trapRoll: [2, 1][genNumbers(2)],
    };
  }

  if (level == 5.11) {
    return {
      rollType: ["decrease", "increase", "GST", "discount"][genNumbers(1)],
      rollType2: ["before", "after", "change"][genNumbers(3)],
      percentageOne: (genNumbers(9) + 1) * 10,
      valueOne: genNumbers(900) + 100,
      percentageTwo: genNumbers(2) + 7,
    };
  }

  if (level == 5.12) {
    return {
      // roll: undefined,
      // volume: undefined,
      // pointA: (genNumbers(5) + 1) * 20,
      // pointB: (genNumbers(5) + 1) * 20,
      // pointC: (genNumbers(6) + 5) * 10,
      // pointD: (genNumbers(6) + 5) * 10,
      length: (genNumbers(6) + 2) * 5,
      breadth: (genNumbers(4) + 2) * 5,
      height: (genNumbers(6) + 2) * 5,
      question: undefined,
      shape: ["cube", "cuboid"][genNumbers(2)],
    };
  }

  if (level == 5.13) {
    return {
      rollAnswer: ["A", "B"][genNumbers(2)],
      shadedArea: undefined,
      unshadedArea: undefined,
      rollShape: ["triangle", "rectangle", "square"][genNumbers(3)],
      squareSide: (genNumbers(10) + 5) * 10,

      rectLength: (genNumbers(20) + 10) * 10,
      rectBreadth: (genNumbers(5) + 5) * 10,

      triBase: (genNumbers(20) + 10) * 10,
      triHeight: (genNumbers(5) + 5) * 10,
    };
  }

  if (level == 5.14) {
    return {
      // roll: ["rectangle", "updown", "down", "up"][genNumbers(4)],
      roll: ["rectangle", "down", "up"][genNumbers(3)],
      triX1: (genNumbers(5) + 5) * 20,

      triX2: (genNumbers(5) + 5) * 10,
      triY2: (genNumbers(5) + 5) * 15,

      triX2: (genNumbers(5) + 5) * 10,
      triY3: (genNumbers(5) + 5) * 5,

      rectL: (genNumbers(5) + 5) * 20,
      rectB: (genNumbers(5) + 5) * 15,
      rectO: (genNumbers(4) + 1) * 20,
      triA: undefined,
    };
  }

  if (level == 5.15) {
    return {
      objectOne: ["A", "B", "C"][genNumbers(3)],
      objectTwo: ["X", "Y", "Z"][genNumbers(3)],
      objectOneV: genNumbers(50) + 1,
      objectTwoV: genNumbers(50) + 1,
      objectOneSF: undefined,
      objectTwoSF: undefined,
    };
  }

  if (level == 5.16) {
    return {
      unit: ["kg", "g", "ml", "m", "cm"][genNumbers(5)],
      objectOneV: genNumbers(5) + 2,
      objectTwoV: undefined,
      choice: ["A", "B"][genNumbers(2)],
      choice2: ["B", "S"][genNumbers(2)],
    };
  }

  // if (level == 5.17) {
  //   return {
  //     layerOne: genNumbers(4) + 2,
  //     layerTwo: undefined,
  //     layerThree: undefined,
  //     layerFour: undefined,
  //   };
  // }

  // AVERAGE: SIMPLE
  if (level == 5.17) {
    return {
      version: genNumbers(2),
      // version: 1,
      variables: genNumbers(5) + 2,
      answer: undefined,
    };
  }

  if (level == 5.18) {
    return {
      percentageOne: (genNumbers(18) + 1) * 5,
      percentageTwo: (genNumbers(18) + 1) * 5,
      percentageThree: (genNumbers(18) + 1) * 5,
      ratioOne: genNumbers(10) + 1,
      ratioTwo: genNumbers(10) + 1,
      ratioThree: genNumbers(10) + 1,
      numOne: genNumbers(10) + 1,
      denoOne: genNumbers(10) + 1,
      numTwo: genNumbers(10) + 1,
      denoTwo: genNumbers(10) + 1,
      numThree: genNumbers(10) + 1,
      denoThree: genNumbers(10) + 1,
      choiceOne: ["percentage", "fraction"][genNumbers(2)],
      choiceTwo: ["percentage", "fraction"][genNumbers(2)],
      choiceThree: ["ratio", "fraction"][genNumbers(2)],
      choiceBC: ["B", "C"][genNumbers(2)],
      sentenceA: 0,
      sentenceB: 0,
      sentenceC: 0,
      sentenceD: 0,
      situationA: ["used", "increased by"][genNumbers(2)],
      situationB: ["used", "increased by"][genNumbers(2)],
    };
  }

  if (level == 6) {
    return {
      numOne: genNumbers(10) + 1,
      denoOne: genNumbers(10) + 1,
      numTwo: genNumbers(10) + 1,
      denoTwo: genNumbers(10) + 1,
    };
  }

  if (level == 6.01) {
    setting = calArrAll(2, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);
    return {
      rollType: ["area", "circumference"][genNumbers(2)],
      rollRD: ["r", "d"][genNumbers(2)],
      rollPi: ["3.14", "22/7", "π"][genNumbers(3)],
      radius: (genNumbers(5) + 6) * 9,

      rollType2: ["others", "quadrant", "semicircle"][genNumbers(1)],
      rollOthers: genNumbers(270) + 45,
      arcAngle: undefined,
    };
  }

  if (level == 6.02) {
    return {
      rotation: genNumbers(7) * 45,
      rollType: ["square2", "square", "angle", "radius", "triangle"][
        genNumbers(5)
      ],
      triangleSide: (genNumbers(6) + 5) * 10,

      radius: (genNumbers(4) + 6) * 10,
      squareSideD: undefined,
      radius2: (genNumbers(4) + 2) * 20,

      rollAngle: ["a", "b"][genNumbers(2)],
      rotation2: genNumbers(90) + 44,
      angleOther: undefined,
    };
  }

  if (level == 6.03) {
    return {
      rollOne: ["AN", "NA", "AA"][genNumbers(3)],
      rollTwo: genNumbers(9) + 1,
      rollThree: genNumbers(5) + 1,
      rollAlp: ["a", "b", "c", "y", "z", "i"][genNumbers(6)],
      rollSym: ["x", "÷", "+", "-"][genNumbers(4)],
      rollSymTwo: ["+", "-"][genNumbers(2)],
    };
  }

  if (level == 6.05) {
    return {
      rollOne: ["t", "s", "d"][genNumbers(3)],
      roll: genNumbers(2),
      roll2: genNumbers(2) + 1,
      rollUnits: [
        ["km", "h", "min"],
        ["m", "s", "min"],
      ],
      rollT: genNumbers(10) + 5,
      rollS: genNumbers(10) + 5,
      distance: undefined,
      identity: ["he", "she"][genNumbers(2)],
    };
  }

  if (level == 6.07) {
    return {
      roll: ["D", "A", "B", "C"][genNumbers(4)],
      distance: undefined,
      speedA: genNumbers(5) + 5,
      timeA: genNumbers(8) + 2,
      speedB: genNumbers(5) + 5,
      timeB: genNumbers(8) + 2,
    };
  }

  if (level == 7) {
    return {
      numOne: genNumbers(10) - 4,
      numTwo: genNumbers(11),
      operator: ["+", "-"][genNumbers(2)],
    };
  }

  // function calArrAll(max, arr, setting, maxSetting) {
  //   console.log(maxSetting);
  //   if (setting == maxSetting || state.global == 1) {
  //     state.global = 1;

  //     if (!arr.length) {
  //       for (let i = 1; i < max + 1; i++) {
  //         arr.push(i);
  //       }
  //     }
  //     setting = arr[genNumbers(arr.length)];
  //     arr.splice(arr.indexOf(setting), 1);
  //     console.log(
  //       `Setting: ${setting} chosen. The remaining settings in calculation arr is ${arr}`
  //     );
  //   }
  //   return setting;
  // }

  // function checkRange(setting, arr) {
  //   if (state.global != 1) {
  //     // console.log(typeof setting);
  //     // let str = setting.split("");

  //     // console.log(str);
  //     // str.forEach((el) => {
  //     //   calRange.push(el);
  //     // });
  //     // console.log(calRange);
  //     // if (typeof setting == "string") {
  //     //   console.log(setting.length);
  //     //   if (setting.length > 1) str = setting.split("-");
  //     //   // console.log(str);
  //     // state.min = str[0] * 1;
  //     // state.max = str[1] * 1;
  //     // }
  //     calRange.push(setting);
  //     console.log(calRange);
  //     // if ((calRange[0] * 1) % 1 != 0) {
  //     //   state.min = calRange[0].split("-")[0] * 1;
  //     //   state.max = calRange[0].split("-")[1] * 1;
  //     // }
  //     if (calRange[0].includes("-")) {
  //       console.log("Range Detected!");
  //       state.min = calRange[0].split("-")[0] * 1;
  //       state.max = calRange[0].split("-")[1] * 1;
  //       console.log(state.min, state.max);
  //       if (!arr.length) {
  //         scoreNeeded = arr.length;
  //         scoreNeededCl.textContent = scoreNeeded;
  //         console.log("push push push!");
  //         for (let i = state.min; i < state.max + 1; i++) {
  //           arr.push(i);
  //         }
  //       }
  //       setting = arr[genNumbers(arr.length)];
  //       const chosen = arr.splice(arr.indexOf(setting), 1);
  //       console.log(chosen, arr);
  //     }
  //   }
  //   return setting;
  // }

  if (level == "calOne") {
    // setting = calArrAll(8, calArr, setting, 99, level);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      8,
      calArr,
      setting,
      99,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    console.log(setting);
    if (setting == 1) {
      let ones = genNumbers(10);
      return {
        roll: undefined,
        numOne: (genNumbers(4) + 1) * 10,
        numTwo: ones,
        numThree: (genNumbers(5) + 1) * 10,
        numFour: genNumbers(9 - ones),
        setting: 1,
      };
    }
    if (setting == 2) {
      let ones = genNumbers(9) + 1;
      let tens = genNumbers(9) + 1;
      return {
        roll: undefined,
        numOne: tens * 10,
        numTwo: ones * 1,
        numThree: (genNumbers(tens) + 1) * 10,
        numFour: (genNumbers(ones) + 1) * 1,
        setting: 2,
      };
    }
    if (setting == 3) {
      return {
        roll: undefined,
        numOne: (genNumbers(5) + 1) * 10,
        numTwo: genNumbers(10),
        numThree: (genNumbers(5) + 1) * 10,
        numFour: genNumbers(10),
        setting: 3,
      };
    }
    if (setting == 4) {
      let ones = genNumbers(10);
      let tens = genNumbers(8) + 2;
      return {
        roll: undefined,
        numOne: tens * 10,
        numTwo: genNumbers(ones),
        numThree: genNumbers(tens) * 10,
        numFour: ones,
        setting: 4,
      };
    }
    if (setting == 5) {
      return {
        version: ["+", "-"][genNumbers(2)],
        numOne: genNumbers(10),
        numTwo: genNumbers(10),
        numThree: undefined,
        numFour: genNumbers(10),
        rowOneValue: undefined,
        rowTwoValue: undefined,
        answerValue: undefined,
        setting: 5,
      };
    }
    if (setting == 6) {
      return {
        roll: undefined,
        operator: ["+", "-"][genNumbers(2)],
        identity: ["C", "D"][genNumbers(2)],
        numOne: genNumbers(90) + 10,
        numTwo: genNumbers(90) + 10,
        setting: 6,
      };
    }
    if (setting == 7) {
      return {
        roll: undefined,
        startNum: genNumbers(100) + 1,
        difference: genNumbers(41) - 20,
        position: genNumbers(6),
        answer: undefined,
        setting: 7,
      };
    }
    if (setting == 8) {
      return {
        roll: undefined,
        startNum: genNumbers(100) + 1,
        diffOne: genNumbers(41) - 20,
        diffTwo: genNumbers(41) - 20,
        position: genNumbers(6),
        answer: undefined,
        setting: 8,
      };
    }
    // LEFT SIDE RIGHT SIDE
    if (setting == 9) {
      return {
        limit: 20,
        multiMin: 2,
        multiMax: 5,
        setting: 9,
      };
    }
  }

  //SETTINGS
  if (level == "calTwo") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(8, calArr);
    // }
    // setting = calArrAll(13, calArr, setting, 99, level);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      13,
      calArr,
      setting,
      99,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    if (setting == 1) {
      let hundreds = genNumbers(9) + 1;
      let tens = genNumbers(9) + 1;
      let ones = genNumbers(9) + 1;
      return {
        setting: 1,
        numOne: hundreds * 100 + tens * 10 + ones,
        numTwo:
          (genNumbers(hundreds) + 1) * 100 +
          (genNumbers(tens) + 1) * 10 +
          genNumbers(ones) +
          1,
      };
    }
    if (setting == 2) {
      let hundreds = genNumbers(9) + 1;
      let tens = genNumbers(9) + 1;
      let ones = genNumbers(9) + 1;
      return {
        setting: 2,
        numOne: hundreds * 100 + tens * 10 + ones,
        numTwo:
          (genNumbers(hundreds) + 1) * 100 +
          (genNumbers(tens) + 1) * 10 +
          genNumbers(ones) +
          1,
      };
    }
    if (setting == 3) {
      let ones = genNumbers(10);
      return {
        setting: 3,
        numOne: (genNumbers(9) + 1) * 100 + (genNumbers(9) + 1) * 10 + ones,
        numTwo:
          (genNumbers(9) + 1) * 100 +
          (genNumbers(9) + 1) * 10 +
          (genNumbers(9) + 1 + (10 - ones)),
      };
    }
    if (setting == 4) {
      let ones = genNumbers(10);
      let tens = genNumbers(10);
      let hundreds = genNumbers(9) + 1;
      return {
        setting: 4,
        numOne: hundreds * 100 + tens * 10 + ones * 1,
        numTwo:
          genNumbers(hundreds) * 100 + genNumbers(10) * 10 + genNumbers(10) * 1,
      };
    }
    if (setting == 5) {
      return {
        setting: 5,
        operator: ["+", "-"][genNumbers(2)],
        numOne: genNumbers(899) + 100,
        numTwo: genNumbers(899) + 100,
        value: undefined,
        rowOne: undefined,
        rowTwo: undefined,
      };
    }
    if (setting == 6) {
      return {
        setting: 6,
        operator: ["+", "-"][genNumbers(2)],
        identity: ["C", "D"][genNumbers(2)],
        numOne: genNumbers(999) + 1,
        numTwo: genNumbers(999) + 1,
      };
    }
    if (setting == 7) {
      return {
        setting: 7,
        startNum: genNumbers(500) + 500,
        difference: genNumbers(200) - 100,
        position: genNumbers(6),
        answer: undefined,
      };
    }
    if (setting == 8) {
      return {
        setting: 8,
        roll: undefined,
        startNum: genNumbers(500) + 500,
        diffOne: genNumbers(200) - 100,
        diffTwo: genNumbers(200) - 100,
        position: genNumbers(6),
        answer: undefined,
      };
    }
    // LEFT SIDE RIGHT SIDE
    if (setting == 9) {
      return {
        setting: 9,
        limit: 50,
        multiMin: 2,
        multiMax: 5,
      };
    }
    // PARTS AND INTERVALS
    if (setting == 10) {
      const gen_intervals = [2, 4, 5][genNumbers(3)];
      return {
        setting: 10,
        start: genNumbers(599) + 100,
        intervals: gen_intervals,
        eachInterval: genNumbers(9) + 2,
        end: undefined,
        arrow: genNumbers(gen_intervals - 1) + 1,
      };
    }

    // TIME: TIMELINE
    if (setting == 11) {
      return {
        setting: 11,
        hours: genNumbers(24),
        mins: genNumbers(60),
        hoursMins: ["hours", "mins"][genNumbers(2)],
        situationHours: genNumbers(6) + 1,
        situationMins: genNumbers(60 - 1) + 1,
        beforeAfter: ["before", "after"][genNumbers(2)],
      };
    }
    // FRACTIONS: IDENTIFICATION
    if (setting == 12) {
      return {
        setting: 12,
        row: genNumbers(3) + 1,
        column: genNumbers(3) + 3,
        type: ["black", "white"][genNumbers(2)],
        black: undefined,
        white: undefined,
      };
    }
    //FRACTIONS: ADDITION AND SUBTRACTION
    if (setting == 13) {
      const gen_deno = genNumbers(9) + 3;
      const gen_diff = genNumbers(gen_deno - 1) + 1;
      return {
        setting: 13,
        deno: gen_deno,
        numeOne: genNumbers(gen_diff - 1) + 1,
        numeTwo: gen_diff,
        operator: ["+", "-"][genNumbers(2)],
      };
    }
  }

  //----> SETTINGS!
  if (level == "calThree") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(6, calArr);
    // }
    setting = calArrAll(
      26,
      calArr,
      setting,
      99,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    if (setting == 1) {
      let thousands = genNumbers(9) + 1;
      let hundreds = genNumbers(9) + 1;
      let tens = genNumbers(9) + 1;
      let ones = genNumbers(9) + 1;
      return {
        setting: 1,
        numOne: thousands * 1000 + hundreds * 100 + tens * 10 + ones,
        numTwo:
          (genNumbers(thousands) + 1) * 100 +
          (genNumbers(hundreds) + 1) * 100 +
          (genNumbers(tens) + 1) * 10 +
          genNumbers(ones) +
          1,
      };
    }
    if (setting == 2) {
      let thousands = genNumbers(9) + 1;
      let hundreds = genNumbers(9) + 1;
      let tens = genNumbers(9) + 1;
      let ones = genNumbers(9) + 1;
      return {
        setting: 2,
        numOne: thousands * 1000 + hundreds * 100 + tens * 10 + ones,
        numTwo:
          (genNumbers(thousands) + 1) * 1000 +
          (genNumbers(hundreds) + 1) * 100 +
          (genNumbers(tens) + 1) * 10 +
          genNumbers(ones) +
          1,
      };
    }
    if (setting == 3) {
      let ones = genNumbers(10);
      return {
        setting: 3,
        numOne:
          (genNumbers(9) + 1) * 1000 +
          (genNumbers(9) + 1) * 100 +
          (genNumbers(9) + 1) * 10 +
          ones,
        numTwo:
          (genNumbers(9) + 1) * 1000 +
          (genNumbers(9) + 1) * 100 +
          (genNumbers(9) + 1) * 10 +
          (genNumbers(9) + 1 + (10 - ones)),
      };
    }
    if (setting == 4) {
      return {
        setting: 4,
        numOne: (genNumbers(9) + 1) * 1000 + genNumbers(999),
        numTwo: (genNumbers(9) + 1) * 1000 + genNumbers(999),
      };
    }
    if (setting == 5) {
      return {
        setting: 5,
        operator: ["-", "+", "-"][genNumbers(0)],
        numOne: genNumbers(8999) + 1000,
        numTwo: genNumbers(8999) + 1000,
        value: undefined,
        rowOne: undefined,
        rowTwo: undefined,
      };
    }
    if (setting == 6) {
      return {
        setting: 6,
        operator: ["+", "-"][genNumbers(2)],
        identity: ["C", "D"][genNumbers(2)],
        numOne: genNumbers(9999) + 1,
        numTwo: genNumbers(9999) + 1,
      };
    }
    if (setting == 7) {
      return {
        setting: 7,
        startNum: genNumbers(5000) + 5000,
        difference: genNumbers(2000) - 1000,
        position: genNumbers(6),
        answer: undefined,
      };
    }
    if (setting == 8) {
      return {
        setting: 8,
        startNum: genNumbers(5000) + 5000,
        diffOne: genNumbers(2000) - 1000,
        diffTwo: genNumbers(2000) - 1000,
        position: genNumbers(6),
        answer: undefined,
      };
    }
    if (setting == 9) {
      return {
        setting: 9,
        numOne: genNumbers(899) + 100,
        multiple: genNumbers(8) + 2,
      };
    }

    if (setting == 10) {
      return {
        setting: 10,
        whole: genNumbers(99) + 1,
        tens: genNumbers(99) + 1,
        hundreds: genNumbers(99) + 1,
        sentenceArr: [],
      };
    }

    if (setting == 11) {
      let num = genNumbers(7) + 3;
      return {
        setting: 11,
        divisor: num,
        multiplier: genNumbers(1100) + 11,
        remainder: genNumbers(num),
        question: ["quotient", "remainder", "both"][genNumbers(3)],
      };
    }
    if (setting == 12) {
      let num = genNumbers(7) + 3;
      return {
        setting: 12,
        divisor: num,
        multiplier: genNumbers(1100) + 11,
        remainder: genNumbers(num),
        question: ["quotient", "remainder", "both"][genNumbers(3)],
      };
    }

    if (setting == 13) {
      return {
        setting: 13,
        num: undefined,
        multiplier: genNumbers(8) + 2,
        replaced: undefined,
      };
    }
    // Multiplication in sets
    if (setting == 14) {
      displayProblem.style.fontSize = "1.5em";
      const sum = genNumbers(5) + 1;
      const genNumOne = genNumbers(5) + 1;
      return {
        setting: 14,
        sums: sum,
        sets: genNumbers(89) + 10,
        numOne: genNumOne,
        numTwo: sum - genNumOne,
        version: undefined,
        blank: genNumbers(3),
      };
    }

    if (setting == 15) {
      const gen_divisor = genNumbers(8) + 2;
      return {
        setting: 15,
        divisor: gen_divisor,
        quotient: genNumbers(989) + 10,
        remainder: genNumbers(gen_divisor - 1) + 1,
        num: undefined,
      };
    }

    // LEFT SIDE RIGHT SIDE
    if (setting == 16) {
      return {
        setting: 16,
        // symbolOne: ["+", "-", "x", "/"][genNumbers(1)],
        // symbolTwo: ["+", "-", "x", "/"][genNumbers(1)],
        // numOne: undefined,
        // numTwo: undefined,
        // numThree: undefined,
        // numFour: undefined,
        // leftRight: ["left", "right"][genNumbers(1)],
        limit: 10000,
        multiMin: 6,
        multiMax: 9,
      };
    }
    // MULTIPLICATION AND DIVISION WHILE BREAKING UP CONVENIENT NUMBERS
    if (setting == 17) {
      return {
        setting: 17,
        operator: ["x", "÷"][genNumbers(2)],
        numOne: genNumbers(7) + 2,
        numTwo: genNumbers(7) + 2,
        convenientOne: [1, 10, 100][genNumbers(3)],
        convenientTwo: [10, 100][genNumbers(2)],
      };
    }
    // PARTS AND INTERVALS
    if (setting == 18) {
      const gen_intervals = [5, 8, 10][genNumbers(3)];
      return {
        setting: 18,
        start: genNumbers(5999) + 1000,
        intervals: gen_intervals,
        eachInterval: genNumbers(99) + 10,
        end: undefined,
        arrow: genNumbers(gen_intervals - 1) + 1,
      };
    }
    if (setting == 19) {
      return {
        setting: 19,
        hours: genNumbers(24),
        mins: genNumbers(60),
        situationHours: genNumbers(6) + 1,
        situationMins: genNumbers(60 - 1) + 1,
        beforeAfter: ["before", "after"][genNumbers(2)],
      };
    }

    // PARTS AND INTERVALS
    if (setting == 20) {
      const gen_intervals = [2, 4, 5, 8, 10][genNumbers(5)];
      return {
        setting: 20,
        start: 0,
        intervals: gen_intervals,
        unit: ["kg", "ℓ", "m", "km"][genNumbers(4)],
        answerUnit: undefined,
        eachInterval: undefined,
        end: undefined,
        arrow: genNumbers(gen_intervals - 1) + 1,
      };
    }

    // MONEY: ADDITION AND SUBTRACTION
    if (setting == 21) {
      return {
        setting: 21,
        varA: genNumbers(10000 - 100) + 100,
        varB: genNumbers(10000 - 100) + 100,
        symbol: ["+", "-", "x"][genNumbers(3)],
      };
    }

    //FRACTION: SHAPES
    if (setting == 22) {
      return {
        setting: 22,
        shapes: ["square", "triangle", "rectangle", "circle"][genNumbers(4)],
        shaded: undefined,
        total: undefined,
        secondVar: ["total"][genNumbers(1)],
        want: ["shaded", "unshaded"][genNumbers(2)],
        bigY: (genNumbers(5) + 10) * 10,
      };
    }

    // FRACTIONS: ADDITION AND SUBTRACTION
    if (setting == 23) {
      const gen_denoOne = genNumbers(9) + 2;
      const gen_denoTwo = genNumbers(8) + 3;
      return {
        setting: 23,
        denoOne: gen_denoOne,
        numeOne: genNumbers(gen_denoOne - 1) + 1,
        denoTwo: gen_denoTwo,
        numeTwo: genNumbers(gen_denoTwo - 1) + 1,
        operator: ["+", "-"][genNumbers(2)],
      };
    }
    // FRACTIONS: EXPAND AND SIMPLIFICATION
    if (setting == 24) {
      const gen_deno = genNumbers(5) + 3;
      const gen_nume = genNumbers(gen_deno - 2) + 2;
      return {
        setting: 24,
        oriNume: gen_nume,
        oriDeno: gen_deno,
        mulOne: genNumbers(5) + 2,
        mulTwo: genNumbers(5) + 2,
        replace: genNumbers(4) + 1,
        answer: undefined,
      };
    }
    // FRACTIONS: MID POINT
    if (setting == 25) {
      const gen_denoOne = genNumbers(7) + 4;
      const gen_denoTwo = genNumbers(gen_denoOne - 2) + 2;
      return {
        setting: 25,
        denoOne: gen_denoOne,
        numeOne: Math.ceil((genNumbers(gen_denoOne - 1) + 1) / 2),
        denoTwo: gen_denoTwo,
        numeTwo: Math.ceil((genNumbers(gen_denoTwo - 1) + 1) / 2),
        answerNume: undefined,
        answerDeno: undefined,
      };
    }

    // GEOMETRY: AREA AND PERIMETER
    if (setting == 26) {
      return {
        setting: 26,
        shapeChoice: ["rectangle", "square"][genNumbers(2)],
        squareCoord: genNumbers(50) + 30,

        rectLengthCoord: genNumbers(5) * 10 + 50,
        rectBreadthCoord: genNumbers(5) * 10 + 10,

        squareSide: genNumbers(12) + 2,
        rectLength: undefined,
        rectBreadth: undefined,

        unitMeasurement: ["cm", "m", "km"][genNumbers(3)],
        areaOrPerimeter: ["area", "perimeter"][genNumbers(2)],

        side: ["length", "breadth"][genNumbers(2)],
        area: undefined,
        perimeter: undefined,
        rollx: genNumbers(2),
      };
    }
  }

  if (level == "calFour") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(6, calArr);
    // }
    setting = calArrAll(
      23,
      calArr,
      setting,
      99,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    // setting = calArrAll(23, calArr, setting, 99);
    // setting = checkRange(setting, calArr, skipArr);
    if (setting == 1) {
      let number = genNumbers(8) + 2;
      return {
        setting: 1,
        numOne: number,
        numTwo: genNumbers(number) + 2,
        commonMultiple: undefined,
        nextMultiples: undefined,
        multiple: genNumbers(7) + 2,
      };
    }
    if (setting == 2) {
      return {
        setting: 2,
        numOne: genNumbers(30) + 6,
      };
    }
    if (setting == 3) {
      let num = genNumbers(30) + 6;
      return {
        setting: 3,
        numOne: genNumbers(30) + 6,
        numTwo: genNumbers(num) + 5,
      };
    }
    if (setting == 4) {
      return {
        setting: 4,
        numOne: genNumbers(900) + 100,
        numTwo: genNumbers(89) + 10,
      };
    }
    // LEFT SIDE RIGHT SIDE
    if (setting == 5) {
      return {
        setting: 5,
        limit: 100000,
        multiMin: 6,
        multiMax: 10,
      };
    }

    // Multiplication in sets
    if (setting == 6) {
      const sum = genNumbers(89) + 10;
      const genNumOne = genNumbers(50) + 10;
      return {
        setting: 6,
        sums: sum,
        sets: genNumbers(89) + 10,
        numOne: genNumOne,
        numTwo: sum - genNumOne,
        version: undefined,
        blank: genNumbers(3),
      };
    }

    //MULTIPLICATION IN SETS: FURTHER BREAKING
    if (setting == 7) {
      return {
        setting: 7,
        multiple: genNumbers(30) + 5,
        sets: genNumbers(30) + 10,
        adjustment: (genNumbers(20) + 2) * [1, -1][genNumbers(2)],
        factor: undefined,
        answer: undefined,
      };
    }
    if (setting == 8) {
      return {
        setting: 8,
        wholeOne: genNumbers(9) + 1,
        numOne: genNumbers(9) + 1,
        denoOne: genNumbers(9) + 1,
        wholeTwo: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 1,
        denoTwo: genNumbers(9) + 1,
      };
    }
    if (setting == 9) {
      return {
        setting: 9,
        wholeOne: genNumbers(9) + 1,
        numOne: genNumbers(9) + 1,
        denoOne: genNumbers(9) + 1,
        wholeTwo: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 1,
        denoTwo: genNumbers(9) + 1,
      };
    }

    //FRACTIONS: NUMBERLINE
    if (setting == 10) {
      const gen_intervals = genNumbers(10) + 2;
      // const gen_eachIntervals = [0.1, 0.01, 0.2, 0.02, 0.5, 0.05][
      //   genNumbers(6)
      // ];
      return {
        setting: 10,
        start: genNumbers(10) + 1,
        intervals: gen_intervals,
        eachInterval: 1 / gen_intervals,
        end: undefined,
        arrow: genNumbers(gen_intervals - 1) + 1,
      };
    }

    // FRACTIONS: UNIT SENTENCE
    if (setting == 11) {
      return {
        setting: 11,
        // numerator: genNumbers(9)+1,
        // denominator: genNumbers(9)+1,
        numerator: genNumbers(9) + 1,
        denominator: genNumbers(9) + 1,
        firstSelection: genNumbers(2),
        secondSelection: genNumbers(4),
        // secondSelection: 3,
        lastSelection: genNumbers(3),
        firstUnit: undefined,
        secondUnit: undefined,
        totalUnit: undefined,
        differenceUnit: undefined,
        lastUnits: undefined,
        identity: genNumbers(4),
        // identity: 1,
        value: undefined,
        type: [
          ["boys", "girls", "pupils"],
          ["green marbles", "blue marbles", "total marbles"],
          ["saved", "spent", "total money"],
          ["spent", "left", "total money"],
        ],
      };
    }

    // FRACTIONS: PARTS OF A FRACTION
    if (setting == 12) {
      const gen_deno = genNumbers(5) + 2;
      return {
        setting: 12,
        deno: gen_deno,
        nume: genNumbers(gen_deno - 1) + 1,
        multiplier: genNumbers(10) + 5,
        whole: undefined,
        remainder: undefined,
      };
    }

    // FORM FRACTIONS
    if (setting == 13) {
      const position = genNumbers(6);
      return {
        setting: 13,
        smallUnit: ["cm", "m", "ml", "g", "mins", "secs"][position],
        bigUnit: ["m", "km", "ℓ", "kg", "hrs", "mins"][position],
        smallerValue: genNumbers(10) + 1,
        biggerValue: genNumbers(10) + 10,
        version: [0, 3][genNumbers(2)],
      };
    }

    // FRACTIONS: CONVERSION
    if (setting == 14) {
      const position = genNumbers(4);
      return {
        setting: 14,
        unitA: ["secs", "mins", "hrs", "month"][position],
        unitB: ["mins", "hrs", "days", "years"][position],
        value: genNumbers(24) + 60,
      };
    }
    //DECIMALS
    if (setting == 15) {
      return {
        setting: 15,
        numOne: genNumbers(999) + 1,
        convenientNumOne: [1, 10, 100][genNumbers(3)],
        numTwo: genNumbers(999) + 1,
        convenientNumTwo: [10, 100][genNumbers(2)],
      };
    }
    if (setting == 16) {
      return {
        setting: 16,
        numOne: genNumbers(999) + 1,
        convenientNumOne: [1, 10, 100][genNumbers(3)],
        numTwo: genNumbers(999) + 1,
        convenientNumTwo: [10, 100][genNumbers(2)],
      };
    }

    // DECIMALS: OVERLAPPING PLACE VALUE
    if (setting == 17) {
      return {
        setting: 17,
        ones: genNumbers(99) + 1,
        tens: genNumbers(99) + 1,
        hundreds: genNumbers(99) + 1,
        tenth: genNumbers(99) + 1,
        hundredth: genNumbers(99) + 1,
        sentenceArr: [],
      };
    }

    if (setting == 18) {
      return {
        setting: 18,
        numOne: genNumbers(999) + 1,
        convenientNumOne: [10, 100, 1000][genNumbers(3)],
        numTwo: genNumbers(8) + 2,
      };
    }
    if (setting == 19) {
      return {
        setting: 19,
        numOne: genNumbers(999) + 1,
        convenientNumOne: [10, 100, 1000][genNumbers(3)],
        numTwo: genNumbers(89) + 11,
      };
    }
    if (setting == 20) {
      return {
        setting: 20,
        numOne: genNumbers(7) + 2,
        multiplier: genNumbers(989) + 11,
        divisor: [10, 100, 1000][genNumbers(3)],
      };
    }
    if (setting == 21) {
      return {
        setting: 21,
        numOne: genNumbers(10) + 1,
        numTwo: [3, 7, 9, 11][genNumbers(4)],
        roundOff: genNumbers(3) + 1,
      };
    }
    if (setting == 22) {
      return {
        setting: 22,
        operator: ["x", "÷"][genNumbers(2)],
        numOne: undefined,
        multiOne: [10, 100][genNumbers(2)],
        numTwo: genNumbers(7) + 2,
        multiTwo: [10, 100, 100][genNumbers(3)],
        divisor: undefined,
        comparison: undefined,
      };
    }

    //  DECIMALS: PARTS AND INTERVALS
    if (setting == 23) {
      const gen_intervals = [5, 8, 10][genNumbers(3)];
      const gen_eachIntervals = [0.1, 0.01, 0.2, 0.02, 0.5, 0.05][
        genNumbers(6)
      ];
      return {
        setting: 23,
        start: genNumbers(100) + 1 + gen_eachIntervals * genNumbers(10) + 1,
        intervals: gen_intervals,
        eachInterval: gen_eachIntervals,
        end: undefined,
        arrow: genNumbers(gen_intervals - 1) + 1,
      };
    }
  }

  //SETTINGS
  if (level == "calFive") {
    // setting = calArrAll(26, calArr, setting, 99);
    // setting = checkRange(setting, calArr, skipArr);

    setting = calArrAll(
      26,
      calArr,
      setting,
      99,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    if (setting == 0) {
      return {
        setting: 0,
        arrSymbol: ["+", "-", "*", "/"],
        // arrSymbol: ["+", "-"],
        arrBrackets: ["(", ")"],
        arrConstructor: [],
        answer: undefined,
      };
    }
    if (setting == 1) {
      console.log("setting 1");
      return {
        setting: 1,
        numeratorOne: genNumbers(10) + 1,
        denominatorOne: genNumbers(10) + 1,
        numeratorTwo: genNumbers(10) + 1,
        denominatorTwo: genNumbers(10) + 1,
      };
    }
    if (setting == 2) {
      return {
        setting: 2,
        type: ["mixed-simple", "mixed-whole"][genNumbers(2)],
        wholeOne: genNumbers(4) + 2,
        numeratorOne: genNumbers(10) + 1,
        denominatorOne: genNumbers(10 - 1) + 2,
        wholeTwo: genNumbers(9) + 2,
        numeratorTwo: genNumbers(10) + 1,
        denominatorTwo: genNumbers(10 - 1) + 2,
      };
    }
    if (setting == 3) {
      let positions = genNumbers(6);
      return {
        setting: 3,
        unitsMeasurement: ["m ", "L ", "kg ", "h ", "min ", "km "][positions],
        unitsPair: ["cm", "ml", "g", "mins", "secs", "m"][positions],
        conversion: [100, 1000, 1000, 60, 60, 1000][positions],
        wholeOne: genNumbers(4) + 2,
        numeratorOne: genNumbers(10) + 1,
        denominatorOne: [2, 5, 8, 10, 20, 50, 100, 125][genNumbers(8)],
      };
    }
    if (setting == 4) {
      const Aparts = genNumbers(4) + 2;
      const Bparts = genNumbers(4) + 2;
      const Cparts = genNumbers(4) + 2;
      const A = genNumbers(9) + 2;
      const B = genNumbers(9) + 2;
      const C = genNumbers(9) + 2;
      const ANum = genNumbers(A - 1) + 1;
      const BNum = genNumbers(B - 1) + 1;
      const CNum = genNumbers(C - 1) + 1;

      return {
        setting: 4,
        version: [0, 1][genNumbers(2)],
        partA: Aparts,
        partB: Bparts,
        partC: Cparts,
        denoA: A,
        denoB: B,
        denoC: C,
        numA: ANum,
        numB: BNum,
        numC: CNum,
        choiceVar: ["A", "B", "C"][genNumbers(3)],
        choice: ["left", "removed"][genNumbers(2)],
        objects: ["sweets", "toys", "games"][genNumbers(3)],
        objectsTwo: ["flowers", "fruits", "chocolates"][genNumbers(3)],
        finalNumTwo: undefined,
        finalDenoTwo: undefined,
        likeNumerator: undefined,
        likeDenominator: undefined,
        value: undefined,
        spent: undefined,
        versionOne: [0, 1, 1][genNumbers(3)],
      };
    }
    // FRACTIONS: Identical Numerator
    if (setting == 5) {
      const A = genNumbers(9) + 2;
      const B = genNumbers(9) + 2;
      const ANum = genNumbers(A - 1) + 1;
      const BNum = genNumbers(B - 1) + 1;
      return {
        setting: 5,
        denoA: A,
        denoB: B,
        numA: ANum,
        numB: BNum,
        version: [1, 2, 3][genNumbers(3)],
        colors: ["red", "blue", "green", "yellow", "pink", "blue", "orange"][
          genNumbers(7)
        ],
        choice: ["left", "removed"][genNumbers(2)],
      };
    }
    // FRACTIONS: UNLIKE FRACTIONS WITH PERMISSION

    if (setting == 6) {
      const A = genNumbers(9) + 2;
      const B = genNumbers(9) + 2;
      return {
        setting: 6,
        numA: genNumbers(A - 1) + 1,
        denoA: A,
        numB: genNumbers(B - 1) + 1,
        denoB: B,
        choice: ["left", "removed"][genNumbers(2)],
      };
    }

    // FRACTION: BEFORE AND AFTER LIKE FRACTIONS
    if (setting == 7) {
      const gen_denoOne = genNumbers(10 - 2) + 2;
      const gen_denoTwo = genNumbers(10 - 2) + 2;
      return {
        setting: 7,
        person: ["A", "B", "C"][genNumbers(3)],
        denoOne: gen_denoOne,
        numeOne: genNumbers(gen_denoOne - 1) + 1,
        denoTwo: gen_denoTwo,
        numeTwo: genNumbers(gen_denoTwo - 1) + 1,
        situation: genNumbers(899) + 10,
        direction: ["+", "-"][genNumbers(2)],
        // direction: "-",
        oneUnit: undefined,
        last_deno: undefined,
        version: genNumbers(2),
        // version: 1,
      };
    }

    // GEOMETRY: AREA OF RIGHT ANGLED TRIANGLE
    if (setting == 8) {
      return {
        setting: 8,
        base: genNumbers(10) + 5,
        height: genNumbers(3) + 5,
        chosenHeight: ["A", "B", "C"][genNumbers(3)],
        lengthAB: undefined,
        lengthSecondH: undefined,
        lengthBC: undefined,
        lengthThirdH: undefined,
      };
    }

    if (setting == 9) {
      const posOne = genNumbers(5);
      const posTwo = genNumbers(5);
      return {
        setting: 9,
        base: (genNumbers(5) + 4) * 4,
        height: genNumbers(2) * 10 + 30,
        first: posOne,
        second: posTwo,
        pointOne: ["B", "C", "D", "E", "F"][posOne],
        pointTwo: ["B", "C", "D", "E", "F"][posTwo],
      };
    }
    // GEOMETRY: BIG - SMALL
    if (setting == 10) {
      // const gen_triangleATwoX = genNumbers(10) + 1;
      // const gen_triangleAThreeY = genNumbers(10) + 1;
      return {
        setting: 10,
        // triangleATwo: [gen_triangleATwoX, 0],
        // triangleAThree: [0, gen_triangleAThreeY],
        pointAX: genNumbers(7) + 1,
        pointBY: genNumbers(5) + 1,
        side: genNumbers(3) + 1,
      };
    }
    //VOLUME AND SURFACE AREA
    if (setting == 11) {
      return {
        setting: 11,
        // length: genNumbers(10) + 10,
        // breadth: genNumbers(10) + 10,
        // height: genNumbers(10) + 10,
        length: (genNumbers(6) + 2) * 5,
        breadth: (genNumbers(4) + 2) * 5,
        height: (genNumbers(5) + 2) * 5,
        type: [1, 2][genNumbers(2)],
      };
    }
    // VOLUME: NUMERATOR WITH A VALUE
    if (setting == 12) {
      const gen_height = (genNumbers(10) + 2) * 5;
      return {
        setting: 12,
        length: (genNumbers(6) + 2) * 5,
        breadth: (genNumbers(4) + 2) * 5,
        height: gen_height,
        numerator: genNumbers(gen_height - 1) + 1,
        type: [4, 3, 2, 1][genNumbers(4)],
      };
    }
    // RATIO: SIMPLIFICATION AND EXPANSION
    if (setting == 13) {
      return {
        setting: 13,
        numA: genNumbers(9) + 1,
        numB: genNumbers(9) + 1,
        numC: genNumbers(9) + 1,
        process: ["up", "down", "updown"][genNumbers(3)],
        ratioArr: undefined,
        answer: undefined,
      };
    }
    //REPEATED IDENTITY: SHAPES
    if (setting == 14) {
      return {
        setting: 14,
        shapes: ["square", "triangle", "rectangle", "circle"][genNumbers(4)],
        shaded: undefined,
        total: undefined,
        secondVar: ["unshaded", "total"][genNumbers(2)],
        want: "shaded",
        bigY: (genNumbers(5) + 10) * 10,
      };
    }
    //repeated identity [Ratio]
    if (setting == 15) {
      const arrSomething = ["books", "homeworks", "pencils", "pens"];
      return {
        setting: 15,
        something: arrSomething[genNumbers(arrSomething.length)],
        personOne: ["Liam", "Noah", "Oliver", "Elijah", "Jake"][genNumbers(5)],
        personTwo: ["Olivia", "Emma", "Charlotte", "Amelia", "Camila"][
          genNumbers(5)
        ],
        repeatedId: undefined,
        personThree: ["Theodore", "Harper", "Luna", "Jack", "Ella"][
          genNumbers(5)
        ],
        unitOne: genNumbers(5) + 2,
        unitTwo: genNumbers(5) + 2,
        unitThree: genNumbers(5) + 2,
        unitFour: genNumbers(5) + 2,
        firstSentence: ["unit", "ratio"][genNumbers(2)],
        secondSentence: ["unit", "ratio"][genNumbers(2)],
      };
    }

    // RATIO: IDENTICAL TOTAL
    if (setting == 16) {
      const genObjects = genNumbers(3);
      return {
        setting: 16,
        position: genObjects,
        objects: [
          ["girls", "boys"],
          ["males", "females"],
          ["chocolates", "sweets"],
        ][genObjects],
        ratioA: genNumbers(5) + 1,
        ratioB: genNumbers(5) + 1,
        ratioC: genNumbers(5) + 1,
        ratioD: genNumbers(5) + 1,
        question: [1, 2, 3][genNumbers(3)],
      };
    }

    // RATIO: WIPE ON WIPE OFF
    if (setting == 17) {
      return {
        setting: 17,
        version: ["difference", "total", "object"][genNumbers(3)],
        length: genNumbers(5) + 5,
        breadth: genNumbers(2) + 3,
        change: genNumbers(16) - 8,
        shaded: undefined,
        unshaded: undefined,
      };
    }

    // RATES: PARTTHEREOF & PARTTHEREAFTER
    if (setting == 18) {
      return {
        setting: 18,
        startHour: genNumbers(5) + 1,
        startMins: genNumbers(60 - 1) + 1,
        duration: genNumbers(60) + 61,
        rates: genNumbers(5) + 1,
        group: [5, 10, 30][genNumbers(3)],
        type: ["part thereof", "part thereafter"][genNumbers(2)],
      };
    }

    // RATES: TAPS
    if (setting == 19) {
      const gen_height = genNumbers(4) + 2;
      return {
        setting: 19,
        length: genNumbers(20) + 10,
        breadth: genNumbers(20) + 10,
        height: gen_height * (genNumbers(5) + 2),
        deno: gen_height,
        nume: genNumbers(gen_height - 1) + 1,
        netRate: undefined,
      };
    }

    // PERCENTAGE: PERCENTAGE OF
    if (setting == 20) {
      const gen_deno = [2, 4, 5, 8, 10, 20, 50, 100, 1000][genNumbers(9)];
      // const position = genNumbers(6);
      return {
        setting: 20,
        start: ["fractions", "decimals", "percentage"][genNumbers(3)],
        end: ["fractions", "decimals"][genNumbers(2)],
        deno: gen_deno,
        nume: genNumbers(gen_deno - 1) + 1,
        // smallUnit: ["cm", "m", "ml", "g", "mins", "secs"][position],
        // bigUnit: ["m", "km", "ℓ", "kg", "hrs", "mins"][position],
        // unitsVersion: genNumbers(4),
      };
    }
    // PERCENTAGE: PERCENTAGE CHANGE
    if (setting == 21) {
      return {
        setting: 21,
        previous: (genNumbers(20) + 1) * 5,
        next: (genNumbers(20) + 1) * 5,
        version: ["percentage back", "percentage forward", "change"][
          genNumbers(3)
        ],
        change: (genNumbers(9) + 1) * 10,
      };
    }
    // REPEATED IDENTITY PERCENTAGE
    if (setting == 22) {
      let A = (genNumbers(18) + 1) * 5;
      return {
        setting: 22,
        varA: A,
        choice: ["B", "total"][genNumbers(2)],
        varB: (genNumbers(12) + 1) * 5,
        // choiceTwo: ["A", "B"][genNumbers(2)],
        varC: undefined,
        answer: undefined,
      };
    }

    //PERCENTAGE: REMAINDER CONCEPT
    if (setting == 23) {
      return {
        setting: 23,
        percA: (genNumbers(20 - 1) + 1) * 5,
        itemOne: ["toys", "chocolates", "food"][genNumbers(3)],
        percR: (genNumbers(20 - 1) + 1) * 5,
        itemTwo: ["sweets", "candy", "erasers"][genNumbers(3)],
        question: [
          "percentage left",
          "percentage",
          "amount left",
          "firstItem",
          "secondItem",
        ][genNumbers(5)],
        answer: undefined,
      };
    }
    // PERCENTAGE: SIMPLE AND FURTHER DISCOUNT
    if (setting == 24) {
      return {
        setting: 24,
        person: ["A", "B", "C"][genNumbers(3)],
        cost: genNumbers(899) + 100,
        frontBack: ["back", "front", "back"][genNumbers(1)],
        discountOrPrice: ["discount", "price"][genNumbers(2)],
        moreDiscount: genNumbers(2),
        simpleDiscount: (genNumbers(10 - 1) + 1) * 5,
        furtherDiscount: (genNumbers(10 - 1) + 1) * 5,
      };
    }

    //AVERAGE:INTERNAL CHANGE
    if (setting == 25) {
      return {
        setting: 25,
        version: genNumbers(3),
        // version: 2,
        numOne: genNumbers(25) + 25,
        numTwo: genNumbers(25) + 25,
        numThree: genNumbers(25) + 25,
        choice: ["A", "B", "C"][genNumbers(3)],
        situation: genNumbers(50) - 25,
        answer: undefined,
      };
    }

    //AVERAGE: TRIANGLE NUMBERS
    if (setting == 26) {
      const gen_start = genNumbers(90) + 10;
      const range = genNumbers(500) + 100;
      return {
        setting: 26,
        type: ["average", "multiples"][genNumbers(2)],
        start: gen_start,
        end: gen_start + range,
        multiple: genNumbers(11) + 2,
      };
    }
  }

  //SETTINGS
  if (level == "calFiveb") {
    if (regen > 20) {
      console.log("⭐️Regen activated!⭐️");
      skipGlobalUpdateProblem = 0;
      //   calArr.pop()
      // normalDisplay();
      setting = 10;
      console.log("Whats the regen?");
    } else {
      // setting = calArrAll(23, calArr, setting, 99);
      // setting = checkRange(setting, calArr, skipArr);
      setting = calArrAll(
        23,
        calArr,
        setting,
        99,
        level,
        state,
        skipGlobalUpdateProblem
      );
      setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    }

    //REMAINDER CONCEPT: BEFORE AND AFTER

    if (setting == 1) {
      const gen_denoA = genNumbers(6) + 2;
      const gen_denoB = genNumbers(6) + 2;
      return {
        setting: 1,
        denoA: gen_denoA,
        numeA: genNumbers(gen_denoA - 1) + 1,
        denoB: gen_denoB,
        numeB: genNumbers(gen_denoB - 1) + 1,
        end: ["the same", "the twice", "the thrice"][genNumbers(3)],
        oneUnit: genNumbers(200) + 100,
        atFirstUnits: undefined,
        value: undefined,
      };
    }

    //REMAINDER CONCEPT: UNDER THE SAME UNIT
    if (setting == 2) {
      const gen_denoA = genNumbers(6) + 2;
      const gen_denoB = genNumbers(6) + 2;
      const gen_objPosition = genNumbers(2);
      const gen_unitA = genNumbers(4) + 2;
      return {
        setting: 2,
        objectA: ["pens", "shirts"][gen_objPosition],
        objectB: ["pencils", "pants"][gen_objPosition],
        unitA: gen_unitA,
        unitB: genNumbers(gen_unitA - 1) + 1,
        quantityA: genNumbers(5) + 2,
        quantityB: genNumbers(5) + 2,
        denoA: gen_denoA,
        numeA: genNumbers(gen_denoA - 1) + 1,
        denoB: gen_denoB,
        numeB: genNumbers(gen_denoB - 1) + 1,
        chosen: ["A", "B"][genNumbers(2)],
        extraBought: undefined,
      };
    }

    //FRACTIONS: OVERLAPPING MODEL
    if (setting == 3) {
      const gen_deno = (genNumbers(2) + 3) * 2;
      return {
        setting: 3,
        question: ["A", "B", "total"][genNumbers(3)],
        denoA: gen_deno,
        numeA: genNumbers(gen_deno / 2 - 1) + 1,
        difference: [-1, 1][genNumbers(2)] * (genNumbers(50) + 10),
        // remaining: undefined,
        oneUnit: genNumbers(90) + 10,
        // answer: undefined,
      };
    }

    // IDENTICAL NUMERATOR TYPE 2
    if (setting == 4) {
      const denominator = genNumbers(6) + 2;
      const numerator = genNumbers(denominator - 1) + 1;
      const denominatorTwo = genNumbers(10) + 2;
      return {
        setting: 4,
        person: ["Jonathan", "Javen", "Jeremy"][genNumbers(3)],
        deno: denominator,
        nume: numerator,
        numOne: undefined,
        denoTwo: denominatorTwo,
        numeTwo: genNumbers(denominatorTwo - 1) + 1,
        answer: undefined,
        version: [1, 0][genNumbers(2)],
        somethingElse: ["toys", "sweets", "games", "pens"][genNumbers(4)],
      };
    }

    // GEOMETRY: OBTUSE TRIANGLE
    if (setting == 5) {
      return {
        setting: 5,
        base: genNumbers(9) + 5,
        height: genNumbers(3) + 5,
        chosenHeight: ["A", "B", "C"][genNumbers(3)],
        lengthAB: undefined,
        lengthSecondH: undefined,
        lengthBC: undefined,
        lengthThirdH: undefined,
      };
    }
    //GEOMETRY: AREA OF FIGURE: CUTTING
    if (setting == 6) {
      const gen_squareA = genNumbers(50) + 100;
      return {
        setting: 6,
        squareA: gen_squareA,
        squareB: genNumbers(gen_squareA - 10) + 10,
        valueA: undefined,
        valueB: undefined,
        adjust: 0,
      };
    }

    // GEOMETRY: MANIPULATION OF DIMENSION
    if (setting == 7) {
      const gen_length = (genNumbers(10) + 10) * 4;
      return {
        setting: 7,
        type: [2, 1][genNumbers(2)],
        length: gen_length,
        breadth: (gen_length / 4) * 3,
      };
    }

    // GEOMETRY: MANIPULATION OF DIMENSION LEVEL 2
    if (setting == 8) {
      const gen_length = (genNumbers(10) + 10) * 4;
      return {
        setting: 8,
        // part: ["A", "B", "C", "D"][genNumbers(4)],
        label: [2, 1, 2][genNumbers(1)],
        givenLabel: ["A", "B", "C", "D"][genNumbers(4)],
        findPart: undefined,
        length: gen_length,
        breadth: (gen_length / 4) * 3,
        areaA: undefined,
        areaB: undefined,
        areaC: undefined,
        areaD: undefined,
      };
    }
    // AREA OF FIGURE: DIFFERENT UNITS
    if (setting == 9) {
      const gen_length = genNumbers(5) + 10;
      const gen_breadth = genNumbers(gen_length - 8) + 8;
      return {
        setting: 9,
        length: gen_length,
        breadth: gen_breadth,
        firstTriangleBase: genNumbers(gen_length - 3) + 3,
        thirdTriangleHeight: genNumbers(gen_breadth - 3) + 3,
      };
    }
    // REPEATED GROUP RATIO
    if (setting == 10) {
      let A = genNumbers(10) + 1;
      return {
        setting: 10,
        varA: A,
        firstScene: ["B and C", "total"][genNumbers(2)],
        varB: genNumbers(9) + 1,
        secondScene: ["C", "total"][genNumbers(2)],
        varC: genNumbers(9) + 1,
        answer: [],
      };
    }

    if (setting == 11) {
      // console.log("Unchanged Object");
      return {
        setting: 11,
        object: ["sweets", "toys", "books"][genNumbers(3)],
        valueAFirst: genNumbers(40) + 10,
        valueBFirst: genNumbers(40) + 10,
        multiplier: genNumbers(5) + 2,
        happensTo: ["A", "B"][genNumbers(2)],
        valueAEnd: genNumbers(40) + 10,
        valueBEnd: genNumbers(40) + 10,
        question: ["AF", "BF", "AE", "BE"][genNumbers(4)],
        answer: undefined,
      };
    }

    if (setting == 12) {
      // console.log("Unchanged Total");
      const valueA = (genNumbers(40) + 10) * 5;
      const valueB = (genNumbers(40) + 10) * 5;
      return {
        setting: 12,
        object: ["sweets", "toys", "books"][genNumbers(3)],
        valueAFirst: valueA,
        valueBFirst: valueB,
        situationA: genNumbers(valueA) * [-1, 1][genNumbers(2)],
        situationB: genNumbers(valueB) * [-1, 1][genNumbers(2)],
        // multiplier: genNumbers(5) + 2,
        multiplier: 1,
        valueAEnd: undefined,
        valueBEnd: undefined,
        question: ["AF", "BF", "AE", "BE"][genNumbers(4)],
      };
    }

    //RATIO: UNCHANGED DIFFERENCE
    if (setting == 13) {
      // console.log("Unchanged Difference");
      const valueA = genNumbers(50) + 5;
      const valueB = genNumbers(50) + 5;
      let minValue = 0;
      valueA > valueB ? (minValue = valueA) : (minValue = valueB);
      return {
        setting: 13,
        object: ["sweets", "toys", "books"][genNumbers(3)],
        valueAFirst: valueA,
        valueBFirst: valueB,
        situation: genNumbers(minValue) * [-1, 1][genNumbers(2)],
        // multiplier: genNumbers(5) + 2,
        multiplier: 1,
        valueAEnd: undefined,
        valueBEnd: undefined,
        question: ["AF", "BF", "AE", "BE"][genNumbers(4)],
      };
    }
    // RATIO: MANIPULATION IN UNITS
    if (setting == 14) {
      const gen_A = genNumbers(5) + 2;
      const gen_B = genNumbers(5) + 2;
      const genDeno_A = [genNumbers(gen_A - 2) + 2, gen_A * 2][genNumbers(2)];
      const genDeno_B = [genNumbers(gen_B - 2) + 2, gen_A * 2][genNumbers(2)];
      return {
        setting: 14,
        ratioA: gen_A,
        ratioB: gen_B,
        numeA: genNumbers(genDeno_A - 1) + 1,
        denoA: genDeno_A,
        numeB: genNumbers(genDeno_B - 1) + 1,
        denoB: genDeno_B,
      };
    }

    // REPEATED IDENTITY (GEOMETRY)
    if (setting == 15) {
      return {
        setting: 15,
        rectLength: genNumbers(5) + 5,
        rectBreadth: genNumbers(5) + 5,
        secRectLength: genNumbers(5) + 5,
        secRectBreadth: genNumbers(5) + 5,
        triangleBase: genNumbers(5) + 5,
        triangleHeight: genNumbers(5) + 5,
        answer: undefined,
      };
    }
    //PERCETAGE: REPEATED GROUP
    if (setting == 16) {
      return {
        setting: 16,
        percA: (genNumbers(20) + 1) * 5,
        firstSentence: ["B and C", "the total"][genNumbers(2)],
        percB: (genNumbers(20) + 1) * 5,
        secondSentence: ["C", "the total"][genNumbers(2)],
        answer: undefined,
      };
    }

    //PERCENTAGE: OVERLAPPING MODEL
    if (setting == 17) {
      const gen_deno = 10;
      return {
        setting: 17,
        question: ["A", "B", "total"][genNumbers(3)],
        denoA: gen_deno,
        numeA: genNumbers(gen_deno / 2 - 1) + 1,
        difference: genNumbers(100) - 50 + 10,
        // remaining: undefined,
        oneUnit: genNumbers(90) + 10,
        // answer: undefined,
      };
    }

    // PERCENTAGE: GST AND SERVICE CHARGE
    if (setting == 18) {
      return {
        setting: 18,
        person: ["A", "B", "C"][genNumbers(3)],
        optionOne: ["discount gst", "service", "simple gst"][genNumbers(3)],
        value: genNumbers(8999) + 1000,
        gst: 8,
        optionTwo: ["gst", "cost"][genNumbers(2)],
        discount: (genNumbers(10) + 1) * 5,
        optionThree: ["final cost", "initial cost"][genNumbers(2)],
      };
    }
    // PERCENTAGE: IDENTICAL EFFECT
    if (setting == 19) {
      return {
        setting: 19,
        saves: (genNumbers(8) + 1) * 5,
        change: [(genNumbers(4) + 1) * 5, -(genNumbers(4) + 1) * 5][
          genNumbers(2)
        ],
        salary: genNumbers(5000) + 5000,
      };
    }
    if (setting == 20) {
      return {
        setting: 20,
        oldQuantity: genNumbers(6) + 3,
        oldAverage: genNumbers(40) + 10,
        // newAverage: genNumbers(40) + 10,
        average: genNumbers(40) + 10,
        // sitAverage: genNumbers(40) + 10,
        changeQuantity: genNumbers(6) - 3,
        situation: undefined,
        question: ["at first", "in the end"][genNumbers(2)],
      };
    }
    //AVERAGE: CONSECUTIVE DAYS
    if (setting == 21) {
      return {
        setting: 21,
        dayOne: genNumbers(20) + 5,
        days: genNumbers(5) + 5,
        total: undefined,
        chosen: undefined,
        increase: genNumbers(5) + 3,
      };
    }

    //RATIO: MANIPULATION OF UNITS WITH VALUE
    if (setting == 22) {
      const gen_unitA = genNumbers(10) + 2;
      const gen_unitB = genNumbers(10) + 2;
      return {
        setting: 22,
        unitA: gen_unitA,
        unitB: gen_unitB,
        situationA: [-1, 1][genNumbers(2)] * (gen_unitA - 1),
        situationB: [-1, 1][genNumbers(2)] * (gen_unitB - 1),
        situation: ["A", "B"][genNumbers(2)],
        valueA: [-1, 1][genNumbers(2)] * (genNumbers(899) + 100),
        valueB: [-1, 1][genNumbers(2)] * (genNumbers(899) + 100),
        total: undefined,
        end: undefined,
      };
    }

    // PATTERN: CONTINUOUS PATTERN (SETS)
    if (setting == 23) {
      return {
        setting: 23,
        start: genNumbers(8) + 2,
        first: genNumbers(5) + 1,
        second: undefined,
        secondDiff: genNumbers(4) + 1,
        pattern: genNumbers(50) + 50,
        question: ["pattern", "number"][genNumbers(2)],
        value: undefined,
        totalA: undefined,
        totalB: undefined,
      };
    }

    // RATIO: UNIDENTICAL GROUP
    if (setting == 24) {
      return {
        setting: 24,
        A1: genNumbers(5) + 1,
        A2: genNumbers(5) + 1,
        B1: genNumbers(5) + 1,
        B2: genNumbers(5) + 1,
        multiples: genNumbers(4) + 2,
        question: ["FM", "FF", "MF", "MM"][genNumbers(4)],
      };
    }
  }
  //SETTINGS
  if (level == "calSix") {
    if (regen > 20) {
      console.log("⭐️Regen activated!⭐️");
      skipGlobalUpdateProblem = 0;
      //   calArr.pop()
      // normalDisplay();
      setting = 1;
    } else {
      // setting = calArrAll(10, calArr, setting, 99);
      // setting = checkRange(setting, calArr, skipArr);
      setting = calArrAll(
        10,
        calArr,
        setting,
        99,
        level,
        state,
        skipGlobalUpdateProblem
      );
      setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    }

    if (setting == 1) {
      console.log("Finding Remainder");
      const genDeno = genNumbers(9) + 2;
      const genDenoTwo = genNumbers(9) + 2;
      return {
        setting: 1,
        type: ["whole", "simple fractions", "mixed fractions"][genNumbers(3)],
        whole: genNumbers(10) + 1,
        numerator: genNumbers(genDeno - 1) + 1,
        denominator: genDeno,
        numeratorTwo: genNumbers(genDenoTwo - 2) + 2,
        denominatorTwo: genDenoTwo,
        question: ["quotient", "remainder"][genNumbers(2)],
      };
    }
    // FRACTIONS: NUMERTOR OF A VALUE
    if (setting == 2) {
      const gen_denoA = genNumbers(9) + 2;
      const gen_denoB = genNumbers(9) + 2;
      return {
        setting: 2,
        denoA: gen_denoA,
        numeA: genNumbers(gen_denoA - 1) + 1,
        denoB: gen_denoB,
        numeB: genNumbers(gen_denoB - 1) + 1,
        unit: ["kg", "ℓ"][genNumbers(2)],
        question: genNumbers(10) + 1,
      };
    }
    // CIRCLES: AREA AND PERIMETER
    if (setting == 3) {
      return {
        setting: 3,
        radius: (genNumbers(7) + 5) * 10,
        // radius: 70,
        type: ["perimeter", "area"][genNumbers(2)],
        shapeArea: [
          "quadrant",
          "sharkfin",
          "segment",
          "semicircle",
          "quadrant",
        ][genNumbers(5)],
        shapePerimeter: [
          "quadrant",
          "threeQuarterCircle",
          "semicircle",
          "quadrant",
        ][genNumbers(4)],
        rotate: (genNumbers(360) * Math.PI) / 180,
        // rotate: (135 * Math.PI) / 180,
      };
    }

    // CIRCLES: INNER SQUARE

    if (setting == 4) {
      return {
        setting: 4,
        given: ["square", "radius"][genNumbers(2)],
        radius: genNumbers(10) + 5,
        // pi: 3.14,
      };
    }
    //CIRCLES: OTHERS
    if (setting == 5) {
      return {
        setting: 5,
        rotation: genNumbers(7) * 45,
        rollType: ["square2", "square", "angle", "radius", "triangle"][
          genNumbers(5)
        ],
        triangleSide: (genNumbers(6) + 5) * 10,

        radius: (genNumbers(4) + 6) * 10,
        squareSideD: undefined,
        radius2: (genNumbers(4) + 2) * 20,

        rollAngle: ["a", "b"][genNumbers(2)],
        rotation2: genNumbers(90) + 44,
        angleOther: undefined,
      };
    }
    //AVERAGE SPEED OF WHOLE JOURNEY
    if (setting == 6) {
      return {
        setting: 6,
        roll: ["A", "B", "C"][genNumbers(2)],
        speedA: genNumbers(5) + 2,
        timeA: genNumbers(5) + 2,
        distanceA: genNumbers(5) + 2,
        speedB: genNumbers(5) + 2,
        timeB: genNumbers(5) + 2,
        distanceB: genNumbers(5) + 2,
        speedC: genNumbers(5) + 2,
        timeC: genNumbers(5) + 2,
        distanceC: genNumbers(5) + 2,
        timeUnits: ["s", "min", "h"][genNumbers(3)],
        gender: ["he", "she"][genNumbers(2)],
      };
    }
    // SPEED: MOVING APART

    if (setting == 7) {
      return {
        setting: 7,
        version: ["E", "D", "C", "B", "A"][genNumbers(5)],
        which: ["A", "B"][genNumbers(2)],
        speedA: genNumbers(10) + 5,
        time: genNumbers(14) + 2,
        speedB: genNumbers(10) + 5,
        distance: undefined,
      };
    }

    //SPEED: DIFFERENCE IN SPEED (MID)
    if (setting == 8) {
      return {
        setting: 8,
        type: ["A", "B", "C"][genNumbers(3)],
        speedA: genNumbers(50) + 50,
        diffSpeed: [-1, 1][genNumbers(2)] * (genNumbers(10) + 20),
        speedB: undefined,
        time: (genNumbers(10) + 1) * 15,
        question: ["A", "B", "total"][genNumbers(3)],
      };
    }

    // SPEED: SURROGATE
    if (setting == 9) {
      return {
        setting: 9,
        speedA: (genNumbers(5) + 5) * 10,
        speedB: undefined,
        diffSpeed: (genNumbers(2) + 1) * 10,
        timeA: (genNumbers(10) + 1) * 15,
        question: "A",
      };
    }

    // PIECHART
    if (setting == 10) {
      return {
        setting: 10,
        fractions: (genNumbers(10) + 1) * 4,
        decimals: (genNumbers(10) + 1) * 4,
        ratio: (genNumbers(10) + 1) * 4,
        percentage: (genNumbers(10) + 1) * 4,
        angles: (genNumbers(10) + 1) * 4,
        choice: ["fraction", "decimal", "ratio", "percentage", "angle"][
          genNumbers(5)
        ],
      };
    }
  }

  // SETTINGS
  if (level == "calSixb") {
    if (regen > 20) {
      console.log("⭐️Regen activated!⭐️");
      skipGlobalUpdateProblem = 0;
      //   calArr.pop()
      setting = 1;
      console.log("Whats the regen?");
    } else {
      setting = calArrAll(
        7,
        calArr,
        setting,
        99,
        level,
        state,
        skipGlobalUpdateProblem
      );
      setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    }

    //MEET UP
    if (setting == 1) {
      return {
        setting: 1,
        roll: ["D", "A", "B", "C"][genNumbers(4)],
        distance: undefined,
        speedA: genNumbers(5) + 5,
        timeA: genNumbers(8) + 2,
        speedB: genNumbers(5) + 5,
        timeB: genNumbers(8) + 2,
      };
    }
    // CATCH UP
    if (setting == 2) {
      const genSpeedB = genNumbers(10) + 5;
      return {
        setting: 2,
        roll: ["E", "D", "C", "B", "A"][genNumbers(5)],
        gap: undefined,
        speedA: genNumbers(genSpeedB) + 1,
        timeA: genNumbers(8) + 2,
        speedB: genSpeedB,
        timeB: genNumbers(8) + 2,
        diffSpeed: undefined,
      };
    }
    if (setting == 3) {
      return {
        setting: 3,
        type: ["meet up", "normalTimeToSpeed", "normalSpeedToTime"][
          genNumbers(3)
        ],
        question: [1, 2, 3][genNumbers(3)],
        // type: ["normalSpeedToTime", "meet up", "catch up"][genNumbers(1)],
        speedA: (genNumbers(9) + 2) * 10,
        speedB: (genNumbers(9) + 2) * 10,
        timeA: (genNumbers(12 - 1) + 1) * 5,
        timeB: (genNumbers(12 - 1) + 1) * 5,
        differenceTime: undefined,
        differenceSpeed: undefined,
      };
    }
    // VOLUME: GROUPING
    if (setting == 4) {
      const gen_heightA = genNumbers(30) + 10;
      const gen_heightB = genNumbers(30) + 10;
      return {
        setting: 4,
        lengthA: genNumbers(30) + 10,
        breadthA: genNumbers(30) + 10,
        addHeightA: genNumbers(20) + 1,
        waterLevelA: genNumbers(gen_heightA - 5) + 5,
        lengthB: genNumbers(30) + 10,
        breadthB: genNumbers(30) + 10,
        addHeightB: genNumbers(20) + 1,
        waterLevelB: genNumbers(gen_heightB - 5) + 5,
        finalHeightUnitA: genNumbers(4) + 1,
        finalHeightUnitB: 1,
        groups: genNumbers(5) + 3,
        answer: undefined,
        question: ["finalA", "finalB", "transfer"][genNumbers(3)],
      };
    }

    //VOLUME: CATCH UP
    if (setting == 5) {
      const gen_lengthA = (genNumbers(10) + 1) * 10;
      const gen_breadthA = (genNumbers(10) + 1) * 10;
      const gen_heightA = (genNumbers(10) + 1) * 10;

      const gen_lengthB = (genNumbers(10) + 1) * 10;
      const gen_breadthB = (genNumbers(10) + 1) * 10;
      const gen_heightB = (genNumbers(10) + 1) * 10;
      return {
        setting: 5,
        lengthA: gen_lengthA,
        breadthA: gen_breadthA,
        heightA: gen_heightA,
        waterLevelA: genNumbers(gen_heightA - 1) + 1,
        lengthB: gen_lengthB,
        breadthB: gen_breadthB,
        heightB: gen_heightB,
        waterLevelB: genNumbers(gen_heightB - 1) + 1,
        tapA: (gen_lengthA * gen_breadthA * (genNumbers(5) + 1)) / 1000,
        tapB: (gen_lengthB * gen_breadthB * (genNumbers(5) + 1)) / 1000,
        question: ["finalWaterLevel", "final height"][genNumbers(1)],
      };
    }
    // GEOMETRY: REPEATED IDENTITY
    if (setting == 6) {
      return {
        setting: 6,
        type: [4, 3, 2, 1][genNumbers(4)],
        squareSides: genNumbers(2) + 13,
        rectLength: genNumbers(2) + 10,
        rectBreadth: genNumbers(2) + 3,
        triangleBase: genNumbers(4) + 5,
        triangle2ndBase: genNumbers(2) + 9,
      };
    }

    //GEOMETRY: MANIPULATION OF DIMENSION: OVERLAPPING AREA
    if (setting == 7) {
      const gen_length = (genNumbers(20) + 20) * 4;
      return {
        setting: 7,
        type: [1][genNumbers(1)],
        rectLength: gen_length,
        rectBreadth: (gen_length / 4) * 3,
        quadrilateral: undefined,
      };
    }
  }
  // heuristics value
  // setting
  if (level == "heuOne") {
    setting = calArrAll(
      5,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    if (setting == 1) {
      return {
        roll: [
          ["more", "less", "ml"],
          ["greater", "smaller", ""],
          ["taller", "shorter", "cm"],
          ["longer", "shorter", "m"],
          ["heavier", "lighter", "kg"],
        ],
        rollPosition: genNumbers(5),
        rollAB: ["A", "B"][genNumbers(2)],
        rollVar: [0, 1][genNumbers(2)],
        numOne: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 1,
        setting: 1,
      };
    }
    if (setting == 2) {
      return {
        type: [1, 2][genNumbers(2)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(90) + 10,
        numTwo: genNumbers(90) + 10,
        setting: 2,
      };
    }

    if (setting == 3) {
      return {
        type: [1, 2][genNumbers(2)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(90) + 10,
        numTwo: genNumbers(90) + 10,
        numTotal: undefined,
        rollChoice: genNumbers(2),
        setting: 3,
      };
    }

    if (setting == 4) {
      return {
        rollz: 4,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(90) + 10,
        numTwo: genNumbers(90) + 10,
        numTotal: undefined,
        rollChoice: genNumbers(2),
        rollChoice2: ["A", "B"][genNumbers(2)],
        rollChoice3: genNumbers(2),
        setting: 4,
      };
    }

    if (setting == 5) {
      return {
        rollz: 5,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        unitSentence: genNumbers(5) + 2,
        total: undefined,
        varA: undefined,
        varB: undefined,
        rollLineTwo: ["A", "B", "total"][genNumbers(3)],
        rollLineThree: ["A", "B", "total"][genNumbers(3)],
        setting: 5,
      };
    }
  }
  if (level == "heuTwo") {
    setting = calArrAll(
      4,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    console.log(setting);
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    console.log(setting);
    if (setting == 1) {
      return {
        rollObject: ["tree", "lamppost", "fire hydrant"][genNumbers(3)],
        rollPositionTwoArr: ["4th", "5th", "6th"],
        rollPositionOneArr: ["1st", "2nd", "3rd"],
        positionOne: undefined,
        positionTwo: undefined,
        positionThree: undefined,
        positionFour: undefined,
        rollDistance: genNumbers(4) + 2,
        indexOne: undefined,
        indexTwo: undefined,
        indexThree: undefined,
        indexFour: undefined,
        intervals: undefined,
        distance: undefined,
        rollz: 1,
        setting: 1,
      };
    }
    if (setting == 2) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numTwo: genNumbers(5) + 5,
        numOne: undefined,
        rollz: 2,
        setting: 2,
      };
    }

    if (setting == 3) {
      return {
        objectOne: ["B", "C", "D"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        difference: genNumbers(5) + 1,
        rollz: 3,
        setting: 3,
      };
    }

    // WORKING SETTING
    if (setting == 4) {
      let genOnePos = genNumbers(5);
      let genTwoPos = genNumbers(5);
      return {
        version: genNumbers(3) + 1,
        onePos: genOnePos,
        twoPos: genTwoPos,
        positionOne: ["1st", "2nd", "3rd", "4th", "5th"][genOnePos],
        positionTwo: ["6th", "7th", "8th", "9th", "10th"][genTwoPos],
        objectOne: ["B", "C", "D"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        between: genNumbers(5) + 5,
        rollz: 4,
        setting: 4,
      };
    }
  }
  // settings
  if (level == "heuTwob") {
    setting = calArrAll(
      8,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    if (setting == 1) {
      return {
        rollx: [
          ["more", "less", "ml"],
          ["greater", "smaller", ""],
          ["taller", "shorter", "cm"],
          ["longer", "shorter", "m"],
          ["heavier", "lighter", "kg"],
        ],
        rollz: 1,
        rollPosition: genNumbers(5),
        rollAB: ["A", "B"][genNumbers(2)],
        rollVar: [0, 1][genNumbers(2)],
        numOne: genNumbers(400) + 100,
        numTwo: genNumbers(400) + 100,
        setting: 1,
      };
    }

    if (setting == 2) {
      return {
        type: [1, 2][genNumbers(2)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(400) + 100,
        numTwo: genNumbers(400) + 100,
        setting: 2,
      };
    }

    if (setting == 3) {
      return {
        type: [1, 2][genNumbers(2)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(400) + 100,
        numTwo: genNumbers(400) + 100,
        numTotal: undefined,
        rollChoice: genNumbers(2),
        setting: 3,
      };
    }

    if (setting == 4) {
      return {
        rollz: 4,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(400) + 100,
        numTwo: genNumbers(400) + 100,
        numTotal: undefined,
        rollChoice: genNumbers(2),
        rollChoice2: ["A", "B"][genNumbers(2)],
        rollChoice3: genNumbers(2),
        setting: 4,
      };
    }

    if (setting == 5) {
      return {
        rollz: 5,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        unitSentence: genNumbers(9) + 2,
        total: undefined,
        varA: undefined,
        varB: undefined,
        rollLineTwo: ["A", "B", "total"][genNumbers(3)],
        rollLineThree: ["A", "B", "total"][genNumbers(3)],
        setting: 5,
      };
    }
    //  PARTS OF A WHOLE ( UNITARY )
    if (setting == 6) {
      const perPacket = genNumbers(3) + 2;
      return {
        rollz: 6,
        each: perPacket,
        packets: genNumbers(5) + 2,
        left: genNumbers(perPacket - 1) + 1,
        setting: 6,
      };
    }

    //WHOLE AND PARTS (UNITARY)
    if (setting == 7) {
      return {
        eachUnit: genNumbers(5) + 2,
        units: genNumbers(3) + 2,
        situation: genNumbers(10) + 10,
        type: genNumbers(3),
        setting: 7,
      };
    }

    //COMPARISON : SITUATIONAL
    if (setting == 8) {
      return {
        type: ["unit", "diff"][genNumbers(2)],
        unitA: genNumbers(5) + 2,
        unitB: 1,
        oneUnit: genNumbers(9) + 2,
        situationA: genNumbers(50) - 25,
        situationB: genNumbers(10) - 5,
        choice: ["A", "B"][genNumbers(2)],
        setting: 8,
      };
    }
  }
  // setting
  if (level == "heuThree") {
    setting = calArrAll(
      8,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    if (setting == 1) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: (genNumbers(5) + 1) * 2,
        numTwo: (genNumbers(5) + 1) * 2,
        rollAnswer: genNumbers(2),
        setting: 1,
      };
    }
    if (setting == 2) {
      return {
        objects: [
          ["chickens", "dogs", "2", "4"],
          ["ducks", "spiders", "2", "8"],
          ["sheeps", "spiders", "4", "8"],
          ["motorcycles", "tricycle", "2", "3"],
          ["bicycle", "cars", "2", "4"],
        ],
        rollObj: genNumbers(4),
        numOne: genNumbers(5) + 1,
        numTwo: genNumbers(5) + 1,
        rollAnswer: genNumbers(2),
        difference: undefined,
        objectOne: undefined,
        objectTwo: undefined,
        legOne: undefined,
        legTwo: undefined,
        setting: 2,
        total: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
      };
    }
    if (setting == 3) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        multipler: genNumbers(3) + 2,
        unitSentence: genNumbers(3) + 2,
        objectOneX: genNumbers(4) + 2,
        objectTwoX: genNumbers(4) + 2,
        totalValue: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
        setting: 3,
      };
    }
    if (setting == 4) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectOneQ: genNumbers(4) + 2,
        objectTwoQ: genNumbers(4) + 2,
        objectOneV: genNumbers(4) + 2,
        objectTwoV: genNumbers(4) + 2,
        totalValue: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
        setting: 4,
        difference: undefined,
      };
    }

    if (setting == 5) {
      return {
        unitMeasurement: ["kg", "g", "ml", "ℓ"][genNumbers(4)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectOneV: genNumbers(3) + 2,
        objectTwoV: genNumbers(3) + 2,
        total: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
        rollQn2: ["many", "what", "total"][genNumbers(3)],
        setting: 5,
      };
    }

    if (setting == 6) {
      return {
        setting: 6,
        rollObject: genNumbers(4),
        objects: [
          ["car", "cars"],
          ["bus", "buses"],
          ["bottle", "bottles of water"],
          ["packet", "packets"],
        ],
        objectV: undefined,
        total: genNumbers(30) + 20,
        each: genNumbers(5) + 5,
        rollQn: ["A", "B"][genNumbers(2)],
      };
    }

    if (setting == 7) {
      return {
        setting: 7,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        difference: (genNumbers(20) - 10) * 2,
        transfer: ["A", "B"][genNumbers(2)],
        transferV: genNumbers(10) + 1,
      };
    }

    if (setting == 8) {
      return {
        setting: 8,
        options: ["B", "A"][genNumbers(2)],
        value: undefined,
        cost: genNumbers(4) + 2,
        min: genNumbers(4) + 2,
        discount: undefined,
      };
    }
  }
  // setting
  if (level == "heuThreeb") {
    setting = calArrAll(
      5,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    if (setting == 1) {
      return {
        compA: ["unit", "comp"][genNumbers(2)],
        compB: ["unit", "comp"][genNumbers(2)],
        unitA: genNumbers(3) + 2,
        valueA: genNumbers(20) + 10,
        unitB: genNumbers(3) + 2,
        valueB: genNumbers(20) + 10,
        // unitC: genNumbers(3) + 2,
        valueC: genNumbers(20) + 10,
        find: ["A", "B", "C"][genNumbers(3)],
        arrUnit: [],
        oneUnit: genNumbers(9) + 2,
        setting: 1,
      };
    }

    if (setting == 2) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        unitSentence: genNumbers(4) + 2,
        situationOne: genNumbers(100) - 50,
        situationTwo: genNumbers(100) - 50,
        // situationOne: genNumbers(50)-100,
        // situationTwo: genNumbers(50)-100,
        oneOrTwo: ["One", "Two"][genNumbers(2)],
        firstOrEnd: ["at first", "in the end"][genNumbers(2)],
        setting: 2,
      };
    }

    if (setting == 3) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        unitSentence: genNumbers(4) + 2,
        // situationOne: genNumbers(200) - 100,
        // situationTwo: genNumbers(200) - 100,
        situationOne: genNumbers(100) - 200,
        situationTwo: genNumbers(100) + 100,
        // situationOne: genNumbers(100) + 100,
        // situationTwo: genNumbers(100) + 100,
        oneOrTwo: ["One", "Two"][genNumbers(2)],
        firstOrEnd: ["at first", "in the end"][genNumbers(2)],
        setting: 3,
      };
    }

    if (setting == 4) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        unitSentence: genNumbers(4) + 2,
        startOne: undefined,
        startTwo: undefined,
        situationOne: [-1, 1][genNumbers(2)],
        situationTwo: [-1, 1][genNumbers(2)],
        endOne: undefined,
        endTwo: undefined,
        oneOrTwo: ["One", "Two"][genNumbers(2)],
        answer: undefined,
        setting: 4,
        othersLast: undefined,
      };
    }
    // WORKING BACKWARDS: STRAIGHTLINE
    if (setting == 5) {
      return {
        num: genNumbers(1000) + 2,
        setting: 5,
        sitPlus: genNumbers(100) + 1,
        sitMinus: genNumbers(100) + 1,
        sitTimes: genNumbers(5) + 2,
        sitDivide: genNumbers(5) + 2,
      };
    }
  }
  // setting

  if (level == "heuFour") {
    // setting = calArrAll(7, calArr, setting, 9);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      7,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    if (setting == 1) {
      return {
        setting: 1,
        objects: ["stationeries", "cards", "toys", "games"][genNumbers(4)],
        label: ["he", "she"][genNumbers(2)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectOneQ: genNumbers(4) + 2,
        objectTwoQ: genNumbers(8) + 2,
        price: genNumbers(5) + 5,
        totalValue: (genNumbers(9) + 1) * 10,
        rollAnswer: genNumbers(2) + 1,
        objectOneS: undefined,
        objectTwoS: undefined,
        rollType: ["A", "B"][genNumbers(2)],
        rollQn: ["total", "price"][genNumbers(2)],
      };
    }

    if (setting == 2) {
      return {
        numberOfStudents: genNumbers(8) + 2,
        numberOfStuff: genNumbers(20) + 10,
        sceneOne: genNumbers(4) + 1,
        sceneTwo: undefined,
        situationOne: undefined,
        situationTwo: undefined,
        rollAnswer: genNumbers(2) + 1,
        situationOneW: "short",
        situationTwoW: "short",
        setting: 2,
      };
    }

    if (setting == 3) {
      return {
        peopleAtFirst: genNumbers(8) + 3,
        absentPeople: undefined,
        remainingPeople: undefined,
        giveUp: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
        setting: 3,
      };
    }

    if (setting == 4) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectThree: undefined,
        groupOne: genNumbers(20) + 5,
        groupTwo: undefined,
        unitSentence: genNumbers(4) + 3,
        setting: 4,
      };
    }

    if (setting == 5) {
      return {
        unitMeasurement: ["kg", "g", "ml", "ℓ"][genNumbers(4)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectOneV: genNumbers(3) + 2,
        objectTwoV: genNumbers(3) + 2,
        objectOneUnit: genNumbers(3) + 1,
        objectTwoUnit: genNumbers(3) + 1,
        total: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
        rollQn2: ["many", "what", "total"][genNumbers(3)],
        setting: 5,
      };
    }

    if (setting == 6) {
      return {
        setting: 6,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectTwoQ: genNumbers(3) + 2,
        total: genNumbers(45) + 5,
        rollQn: ["A", "B"][genNumbers(2)],
      };
    }

    if (setting == 7) {
      return {
        setting: 7,
        objects: ["sweets", "chocolates", "candies"][genNumbers(3)],
        total: genNumbers(90) + 10,
        groupOne: genNumbers(8) + 2,
        leftOne: undefined,
        groupTwo: genNumbers(8) + 2,
        leftTwo: undefined,
        min: undefined,
        max: undefined,
        arrFirstNum: [],
        arrSecondNum: [],
      };
    }
  }
  //SETTINGS
  if (level == "heuFourb") {
    // setting = calArrAll(7, calArr, setting, 9);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      7,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    if (setting == 1) {
      const arrObj = ["sweets", "bags"];
      const arrPerson = ["Liam", "Olivia", "Emma", "Noah", "Amelia", "Elijah"];
      const genTimesNum = genNumbers(5);
      const genFirstPosition = genNumbers(arrPerson.length);
      const genSecondPosition = genNumbers(arrPerson.length);
      return {
        version: genNumbers(3),
        arrGender: ["his", "her", "her", "his", "her", "his"],
        object: arrObj[arrObj.length],
        firstPosition: genFirstPosition,
        secondPosition: genSecondPosition,
        personOne: arrPerson[genFirstPosition],
        personTwo: arrPerson[genSecondPosition],
        numOne: genNumbers(7) + 2,
        numTwo: genNumbers(7) + 2,
        timesNum: genTimesNum,
        times: ["1st", "2nd", "3rd", "4th", "5th"][genTimesNum],
        setting: 1,
      };
    }
    if (setting == 2) {
      return {
        version: genNumbers(4),
        numOne: genNumbers(50) + 4,
        numTwo: genNumbers(50) + 4,
        setting: 2,
      };
    }

    //UNCHANGED DIFFERENCE
    if (setting == 3) {
      const genValueOneUnit = genNumbers(900) + 100;
      // const genB = genNumbers(1000 - 100) + 100;
      return {
        type: ["age", "norm"][genNumbers(2)],
        ageType: ["diff", "norm"][genNumbers(2)],
        numA: undefined,
        numB: undefined,
        valueOneUnit: genNumbers(900) + 100,
        unitA: genNumbers(5) + 1,
        unitB: [genNumbers(5) + 2, 1][genNumbers(1)],
        situation: [-1, 1][genNumbers(2)],
        situationValue: genNumbers(genValueOneUnit),
        question: ["AE", "BE", "change"][genNumbers(3)],
        setting: 3,
      };
    }

    //UNCHANGED TOTAL
    if (setting == 4) {
      const genTransfer = genNumbers(800) + 200;
      const genOneUnit = genNumbers(500) + 100;
      return {
        type: ["A", "B"][genNumbers(2)],
        version: ["valueEnd", "valueFirst"][genNumbers(2)],
        question: ["AF", "AE", "BF", "BE"][genNumbers(4)],
        unitA: genNumbers(5) + 2,
        unitB: [1, genNumbers(5) + 2][genNumbers(1)],
        valueAEnd: undefined,
        valueBEnd: undefined,
        valueAFirst: undefined,
        valueBFirst: undefined,
        transfer: genNumbers(genOneUnit - 100) + 100,
        valueOneUnit: genOneUnit,
        setting: 4,
      };
    }

    // SIMULTANEOUS EQUATION
    if (setting == 5) {
      const genVarA = genNumbers(5) + 2;
      const genVarB = genNumbers(5) + 2;
      return {
        varA: genVarA,
        sceneAOne: genNumbers(genVarA - 1) + 1,
        sceneATwo: genNumbers(genVarA - 1) + 1,
        varB: genVarB,
        sceneBOne: genNumbers(genVarB - 1) + 1,
        sceneBTwo: genNumbers(genVarB - 1) + 1,
        unitA: genNumbers(50) + 10,
        unitB: genNumbers(50) + 10,
        type: ["A", "B"][genNumbers(2)],
        choose: ["boys", "girls"][genNumbers(2)],
        setting: 5,
      };
    }

    //INTERNAL TRANSFER: DOUBLE EFFECT
    if (setting == 6) {
      return {
        varA: (genNumbers(1000) + 100) * 2,
        varB: (genNumbers(1000) + 100) * 2,
        transfer: undefined,
        unitA: genNumbers(5) + 1,
        unitB: genNumbers(5) + 1,
        version: ["more than half", "more than diff"][genNumbers(2)],
        setting: 6,
      };
    }
    //FRACTION: UNDER THE SAME UNIT: DIFFERENCE
    if (setting == 7) {
      const gen_denoA = genNumbers(3) + 3;
      const gen_denoB = genNumbers(3) + 3;
      return {
        denoA: gen_denoA,
        numeA: genNumbers(gen_denoA) + 1,
        valueA: genNumbers(200) + 50,
        denoB: gen_denoB,
        numeB: genNumbers(gen_denoB) + 1,
        valueB: genNumbers(200) + 50,
        type: ["before", "after"][genNumbers(2)],
        question: ["A", "B"][genNumbers(2)],
        setting: 7,
      };
    }
  }
  // Stats
  if (level == "heuFive") {
    // setting = calArrAll(8, calArr, setting, 9);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      8,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    if (setting == 1) {
      return {
        setting: 1,
        quantityOne: genNumbers(10) + 1,
        quantityTwo: genNumbers(10) + 1,
        difference: genNumbers(10) - 5,
        total: genNumbers(100) + 50,
        choice: ["boys", "girls"][genNumbers(2)],
        adjustment: undefined,
        groupTotal: undefined,
        group: undefined,
      };
    }

    if (setting == 2) {
      return {
        setting: 2,
        marks: genNumbers(5) + 2,
        deduct: genNumbers(5) + 1,
        questions: (genNumbers(5) + 1) * 10,
        rightQ: undefined,
        total: undefined,
        choice: ["correct", "wrong"][genNumbers(2)],
        allRight: undefined,
        bDifference: undefined,
        sDifference: undefined,
        wrong: undefined,
        correct: undefined,
      };
    }

    if (setting == 3) {
      return {
        setting: 3,
        objects: [
          ["ducks", "dogs", "2", "4", "legs"],
          ["dogs", "spiders", "4", "8", "legs"],
          ["3-legged stools", "4-legged chairs", "3", "4", "legs"],
          ["motorcycles", "cars", "2", "4", "wheels"],
          ["birds", "dragonflies", "2", "4", "wings"],
        ],
        chosenOne: undefined,
        chosenOneQ: undefined,
        chosenOneN: genNumbers(9) + 2,
        totalOne: undefined,
        chosenTwo: undefined,
        chosenTwoQ: undefined,
        chosenTwoN: genNumbers(9) + 2,
        totalTwo: undefined,
        total: undefined,
        variableName: undefined,
        choice: genNumbers(2),
        difference: undefined,
      };
    }

    if (setting == 4) {
      return {
        setting: 4,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectOneV: genNumbers(10) + 2,
        objectTwoV: genNumbers(10) + 2,
        sDifference: undefined,
        bDifference: undefined,
        choice: genNumbers(6),
      };
    }

    if (setting == 5) {
      return {
        setting: 5,
        objects: [
          ["apples", "oranges", "orange"],
          ["small bottles", "large bottles", "large bottle"],
          ["shirts", "pants", "pant"],
          ["wallets", "bells", "bell"],
          ["glasses", "jugs", "jug"],
        ],
        position: genNumbers(5),
        objectOneC: undefined,
        objectTwoC: undefined,
        objectOneQ: genNumbers(9) + 2,
        objectTwoQ: genNumbers(4) + 2,
        objectOneV: undefined,
        objectTwoV: undefined,
        objectOneM: genNumbers(4) + 2,
        objectTwoM: genNumbers(4) + 2,
        objectOneFQ: undefined,
        objectTwoFQ: undefined,
        objectTwoAV: undefined,
        objectTwoLQ: undefined,
        total: undefined,
        oneUnit: genNumbers(9) + 2,
      };
    }

    if (setting == 6) {
      return {
        setting: 6,
        people: genNumbers(10) + 5,
        location: ["party", "gathering", "picnic"][genNumbers(3)],
        type: genNumbers(2),
      };
    }

    if (setting == 7) {
      return {
        setting: 7,
        version: genNumbers(0) + 1,
        dice: genNumbers(3),
        cost: genNumbers(8) + 2,
        set: genNumbers(5) + 2,
        bonus: genNumbers(5) + 1,
        groups: ["packets of snacks", "bags of apples", "boxes of cookies"],
        groups2: ["packet", "bag", "box"],
        totalItems: genNumbers(40) + 10,
        quotient: undefined,
        remainder: undefined,
        oneGroup: undefined,
        totalCost: undefined,
        oneGroupCost: undefined,
      };
    }
    // DIFFERENT QUANTITY WITH DIFFERENCE
    if (setting == 8) {
      return {
        setting: 8,
        varAQuan: genNumbers(4) + 2,
        varBQuan: genNumbers(4) + 1,
        varAValue: genNumbers(10) + 5,
        varBValue: genNumbers(10) + 5,
        groups: genNumbers(20) + 5,
        question: [
          "quantityA",
          "valueA",
          "quantityB",
          "valueB",
          "totalQuantity",
          "totalValue",
        ][genNumbers(6)],
      };
    }
  }
  // SETTINGS
  if (level == "heuFiveb") {
    if (regen > 20) {
      console.log("⭐️Regen activated!⭐️");
      skipGlobalUpdateProblem = 0;

      setting = 1;
      console.log("Whats the regen?");
    } else {
      setting = calArrAll(
        7,
        calArr,
        setting,
        9,
        level,
        state,
        skipGlobalUpdateProblem
      );
      setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    }

    if (setting == 1) {
      const gen_denoOne = genNumbers(4) + 2;
      const gen_denoTwo = genNumbers(4) + 2;
      const gen_denoThree = genNumbers(4) + 2;
      const situation = ["+", "-"][genNumbers(2)];
      return {
        setting: 1,
        denoOne: gen_denoOne,
        situationOne: situation,
        denoTwo: gen_denoTwo,
        situationTwo: situation,
        denoThree: gen_denoThree,
        situationThree: situation,
        numeOne: genNumbers(gen_denoOne - 1) + 1,
        numeTwo: genNumbers(gen_denoTwo - 1) + 1,
        numeThree: genNumbers(gen_denoThree - 1) + 1,
        numOne: genNumbers(899) + 100,
        numTwo: genNumbers(899) + 100,
        numThree: genNumbers(899) + 100,
        numLast: genNumbers(899) + 100,
        answer: undefined,
      };
    }
    if (setting == 2) {
      const gen_denoOne = genNumbers(4) + 2;
      const gen_denoTwo = genNumbers(4) + 2;
      const gen_denoThree = genNumbers(4) + 2;
      return {
        denoOne: gen_denoOne,
        denoTwo: gen_denoTwo,
        denoThree: gen_denoThree,
        numeOne: genNumbers(gen_denoOne - 1) + 1,
        numeTwo: genNumbers(gen_denoTwo - 1) + 1,
        numeThree: genNumbers(gen_denoThree - 1) + 1,
        total: (genNumbers(1000) + 99) * 3,
        answer: undefined,
        setting: 2,
      };
    }

    if (setting == 3) {
      return {
        total: undefined,
        increase: genNumbers(30) + 1,
        decrease: genNumbers(30) + 1,
        times: genNumbers(5 - 2) + 2,
        divide: genNumbers(5 - 2) + 2,
        choose: ["A", "B", "C", "D"][genNumbers(4)],
        unit: undefined,
        first: undefined,
        second: undefined,
        third: undefined,
        fourth: undefined,
        setting: 3,
      };
    }
    // EITHER OR
    if (setting == 4) {
      const position = genNumbers(4);
      const multiplier = genNumbers(5) + 4;
      return {
        version: position,
        varA: ["adult", "big books", "erasers", "pears"][position],
        varB: ["children", "small books", "pens", "apples"][position],
        quanA: genNumbers(5) + 2,
        quanB: genNumbers(5) + 1,
        multiplierA: multiplier,
        multiplierB: genNumbers(multiplier - 2) + 2,
        second: undefined,
        third: undefined,
        fourth: genNumbers(5) + 2,
        setting: 4,
      };
    }

    // UNCHANGED TOTAL (IF)
    if (setting == 5) {
      return {
        valueA: (genNumbers(9) + 1) * 5,
        valueB: (genNumbers(9) + 1) * 5,
        question: ["A", "B"][genNumbers(2)],
        setting: 5,
      };
    }

    // SUPPOSITION (RATIO)
    if (setting == 6) {
      return {
        valueA: genNumbers(5) + 1,
        quantityA: genNumbers(5) + 1,
        valueB: genNumbers(5) + 1,
        quantityB: genNumbers(5) + 1,
        totalValue: undefined,
        totalQuantity: undefined,
        setting: 6,
      };
    }

    //RATIO: CONTINUOUS
    if (setting == 7) {
      return {
        firstSituation: genNumbers(500) - 250,
        firstUnitA: genNumbers(10) + 1,
        firstUnitB: genNumbers(10) + 1,
        secondSituation: genNumbers(500) - 250,
        secondUnitA: genNumbers(10) + 1,
        secondUnitB: genNumbers(10) + 1,
        oneUnit: genNumbers(100) + 1,
        newUnitA: undefined,
        newUnitB: undefined,
        setting: 7,
      };
    }
  }

  //SETTINGS
  if (level == "heuSix") {
    // setting = calArrAll(6, calArr, setting, 9);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      6,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    // LOWEST COMMON TIME
    if (setting == 1) {
      return {
        type: ["merge", "split"][genNumbers(2)],
        version: ["paint", "tap"][genNumbers(2)],
        timeA: genNumbers(10) + 1,
        timeB: genNumbers(10) + 1,
        total: undefined,
        setting: 1,
      };
    }

    // CYCLE

    if (setting == 2) {
      const genPeople = genNumbers(10) + 5;
      return {
        startHour: genNumbers(11) + 1,
        startMins: genNumbers(60 - 1) + 1,
        duration: genNumbers(120) + 30,
        people: genPeople,
        courts: genNumbers(1) + 2,
        active: genNumbers(3) + 2,
        version: genNumbers(3),
        setting: 2,
        // version: 2,
      };
    }
    // REPEATED IDENTITY TYPE 3
    if (setting == 3) {
      const gen_denoA = genNumbers(5) + 3;
      const gen_denoB = genNumbers(5) + 3;
      return {
        actA: ["basketball", "soccer", "skating"][genNumbers(3)],
        actB: ["drawing", "dancing", "acting"][genNumbers(3)],
        numeA: Math.ceil(gen_denoA / 2),
        denoA: gen_denoA,
        numeB: Math.ceil(gen_denoB / 2),
        denoB: gen_denoB,
        question: ["Both"][genNumbers(1)],
        setting: 3,
      };
    }
    //SNAKE AND LADDER
    if (setting == 4) {
      const gen_positive = genNumbers(9) + 2;
      return {
        positive: gen_positive,
        pTime: genNumbers(5) + 2,
        negative: genNumbers(gen_positive - 1) + 1,
        nTime: genNumbers(5) + 2,
        sets: genNumbers(10) + 5,
        version: ["snail", "human"][genNumbers(2)],
        setting: 4,
      };
    }

    // CAUSE AND EFFECT
    if (setting == 5) {
      const total = genNumbers(20) + 20;
      return {
        type: ["ran"][genNumbers(1)],
        flightTotal: total,
        ran: genNumbers(2) + 1,
        walk: genNumbers(3) + 1,
        walkFirstSet: genNumbers(total - 2) + 2,
        walkSecondSet: genNumbers(total - 2) + 2,
        setting: 5,
      };
    }
    // IDENTICAL EFFECT: DISCOUNT
    if (setting == 6) {
      return {
        originalA: genNumbers(999) + 100,
        originalB: genNumbers(999) + 100,
        discount: (genNumbers(10) + 1) * 5,
        setting: 6,
      };
    }
  }

  if (level == "heuSixb") {
    // setting = calArrAll(8, calArr, setting, 9);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      8,
      calArr,
      setting,
      9,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);

    // SIMULTANEOUS EQUATION (PARTS AND UNITS) TYPE 1
    if (setting == 1) {
      return {
        setting: 1,
        multiplier: genNumbers(10) + 2,
        unitsA: genNumbers(10) + 1,
        unitsB: genNumbers(10) + 1,
        situationA: undefined,
        situationB: undefined,
        question: ["AF", "BF", "AE", "BE"][genNumbers(4)],
      };
    }
    //IDENTICAL QUANTITY WITH DIFFERENCE TYPE 3
    if (setting == 2) {
      const gen_large = genNumbers(20) + 30;
      const gen_packets = genNumbers(40) + 10;
      return {
        large: gen_large,
        small: genNumbers(gen_large - 15) + 15,
        packets: gen_packets,
        personASmallSheets: genNumbers(gen_packets - 5) + 5,
        personBSmallSheets: genNumbers(gen_packets - 5) + 5,
        personALargeSheets: undefined,
        personBLargeSheets: undefined,
        personATotal: undefined,
        personBTotal: undefined,
        setting: 2,
      };
    }

    //MORE THAN / LESS THAN
    if (setting == 3) {
      const gen_denoA = genNumbers(5) + 2;
      const gen_denoB = genNumbers(5) + 2;
      return {
        numeA: genNumbers(gen_denoA - 1) + 1,
        denoA: gen_denoA,
        numeB: genNumbers(gen_denoB - 1) + 1,
        denoB: gen_denoB,
        unitOne: genNumbers(90) + 10,
        varAMul: genNumbers(10) + 10,
        varBMul: genNumbers(10) + 10,
        varA: undefined,
        varB: undefined,
        backEnd: ["diff", "total"][genNumbers(2)],
        question: ["A", "B"][genNumbers(2)],
        setting: 3,
      };
    }
    // USING IT ALL
    if (setting == 4) {
      return {
        unitAF: genNumbers(5) + 1,
        unitBF: genNumbers(5) + 1,
        unitAS: genNumbers(5) + 1,
        unitBS: genNumbers(5) + 1,
        // unitAFirst: genNumbers(5)+1,
        // unitBFirst: genNumbers((5)+1,
        // unitASecond: genNumbers(5)+1,
        // unitBSecond: genNumbers(5)+1,
        amountLeftFirst: genNumbers(500) + 100,
        amountLeftSecond: genNumbers(500) + 100,
        question: ["A", "B"][genNumbers(2)],
        answer: undefined,
        setting: 4,
      };
    }

    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 1 MULTIPLES
    if (setting == 5) {
      return {
        quantityA: [1, genNumbers(5) + 2][genNumbers(2)],
        quantityB: genNumbers(5) + 2,
        priceA: accDecimal((genNumbers(9) + 2) / 10),
        priceB: accDecimal((genNumbers(9) + 2) / 10),
        groups: genNumbers(89) + 10,
        question: ["VA", "VB", "QA", "QB"][genNumbers(4)],
        setting: 5,
      };
    }

    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 1 DIFFERENCE
    if (setting == 6) {
      return {
        quantityA: genNumbers(90) + 10,
        quantityB: genNumbers(90) + 10,
        priceA: [10, 20, 50, 100][genNumbers(4)],
        priceB: [10, 20, 50, 100][genNumbers(4)],
        situation: genNumbers(2),
        situationQuantity: genNumbers(5) + 5,
        // groups: genNumbers(89) + 10,
        question: ["VA", "VB", "QA", "QB", "T"][genNumbers(5)],
        setting: 6,
      };
    }
    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 2 SETS
    if (setting == 7) {
      return {
        version: ["money", "distance"][genNumbers(2)],
        quantityA: genNumbers(5) + 2,
        quantityB: genNumbers(5) + 2,
        priceA: accDecimal((genNumbers(9) + 2) / 10),
        priceB: accDecimal((genNumbers(9) + 2) / 10),
        groups: genNumbers(89) + 10,
        // groups: genNumbers(89) + 10,
        question: ["VA", "VB", "QA", "QB", "T"][genNumbers(5)],
        type: ["diff", "total"][genNumbers(2)],
        question: ["QA", "QB", "VA", "VB"][genNumbers(4)],
        setting: 7,
      };
    }

    // MORE THAN LESS THAN (NUMERATOR)
    if (setting == 8) {
      // const gen_denoA = genNumbers(5) + 3;
      // const gen_denoB = genNumbers(5) + 3;
      return {
        // numeA: genNumbers(gen_denoA - 1) + 1,
        // denoA: gen_denoA,
        // numeB: genNumbers(gen_denoB - 1) + 1,
        // denoB: gen_denoB,
        // situationA: genNumbers(gen_denoA - 1) + 1,
        // situationB: genNumbers(gen_denoB - 1) + 1,
        // deno_situationA: gen_denoA,
        // deno_situationB: gen_denoB,
        // valueA: genNumbers(500) + 50,
        // valueB: genNumbers(500) + 50,
        question: ["A", "B"][genNumbers(2)],
        valueA: genNumbers(5000) + 1000,
        valueB: genNumbers(5000) + 1000,
        denoA: undefined,
        denoB: undefined,
        numeA: undefined,
        numeB: undefined,
        setting: 8,
      };
    }
  }

  if (level == "1 times table") {
    return {
      numFive: 1,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "2 times table") {
    return {
      numFive: 2,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "3 times table") {
    return {
      numFive: 3,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "4 times table") {
    return {
      numFive: 4,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "5 times table") {
    return {
      numFive: 5,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "6 times table") {
    return {
      numFive: 6,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "7 times table") {
    return {
      numFive: 7,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "8 times table") {
    return {
      numFive: 8,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "9 times table") {
    return {
      numFive: 9,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "10 times table") {
    return {
      numFive: 10,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "11 times table") {
    return {
      numFive: 11,
      operator: ["x"][genNumbers(1)],
    };
  }

  if (level == "12 times table") {
    return {
      numFive: 12,
      operator: ["x"][genNumbers(1)],
    };
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
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
      arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.18":
      level = 4.18;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      arr = ["A", "B", "C", "D", "O", "F", "G", "H", "I"];
      arr2 = ["B", "C", "F", "I", "H", "G", "D", "A"];
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
      setting = prompt("1. Right-angled Triangle\n2. Obtuse-triangle", 2);
      if (setting != 1 && setting != 2) {
        setting = 2;
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
      simpleFractionDisplay();
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
