let setTime = 3;

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
import { helpMeFunc } from "./helpMe.js";

// let user = document.querySelector("#userName").textContent || "";
// if (user == "") {
//   user = prompt("Please enter your name.\n 3 to 20 characters.", "Player");
//   // console.log(typeof user);
//   while (user == null || user.length < 2) {
//     user = prompt("Please enter your name.\n 3 to 20 characters.", "Player");
//   }
//   document.querySelector("#userName").textContent = user;
// }
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
const instructions = document.querySelector(".instructions");
const hardcoreMode = document.querySelector(".hardcore-mode");
const easyMode = document.querySelector(".easy-mode");
const reviewAnswer = document.querySelector(".fa-hire-a-helper");
const inputBoxCl = document.querySelector(".input-box");
const optionsBox = document.querySelector(".optionsBox");
const calculator = document.createElement("div");
// calculator.innerHTML = `id="calculator"`;
// calculator.innerHTML = `<i class="fa-solid fa-calculator hidden"></i>`;
// ourForm.prepend(calculator);
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

// WORKING AND CALCULATION DISPLAY
const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
const workingAnswer = document.querySelector(".workingAnswer");
const operator = document.querySelector(".operator");

const firstCanvas = document.querySelector(".first-canvas");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const mouse = {
  x: undefined,
  y: undefined,
};

function angles(x1, y1, x2, y2) {
  let dy = y2 - y1;
  let dx = x2 - x1;
  let theta = Math.atan2(dy, dx);
  theta *= 180 / Math.PI;
  return theta;
}

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

let noAnswer = 0;
let reviewCount = 0;
let level = 0;
let player = 1;
let levelArr = [];
let arr = [];
let arr2 = [];
let arr3 = [];
let heuArr = [];
let calArr = [];
let calArrQns = [];
let calRange = [];
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

function normalDisplay() {
  wholeNumberContainer.classList.remove("hidden");
  firstCanvas.classList.add("hidden");
  fractionsContainer.classList.add("hidden");
  workingContainer.classList.add("hidden");
  fractionsContainerTwo.classList.add("hidden");
  displayProblem.style.fontSize = "18px";
  displayProblem.style.textAlign = "left";
}
function drawingDisplay() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, 1000, 1000);
  firstCanvas.classList.remove("hidden");
  wholeNumberContainer.classList.add("hidden");
  fractionsContainer.classList.add("hidden");
  fractionsContainerTwo.classList.add("hidden");
  workingContainer.classList.add("hidden");
}
function simpleFractionDisplay() {
  fractionsContainer.classList.remove("hidden");
  wholeNumberContainer.classList.add("hidden");
  firstCanvas.classList.add("hidden");
  workingContainer.classList.add("hidden");
  fractionsContainerTwo.classList.add("hidden");
}
function mixedFractionDisplay() {
  fractionsContainer.classList.add("hidden");
  wholeNumberContainer.classList.add("hidden");
  firstCanvas.classList.add("hidden");
  workingContainer.classList.add("hidden");
  fractionsContainerTwo.classList.remove("hidden");
}
function workingDisplay() {
  fractionsContainer.classList.add("hidden");
  fractionsContainerTwo.classList.add("hidden");
  wholeNumberContainer.classList.add("hidden");
  firstCanvas.classList.add("hidden");
  workingContainer.classList.remove("hidden");
}
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
      updateProblems();
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

      const now = new Date();
      const duration = now - startTime;
      console.log(duration);
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
  instructions.innerHTML = "";
  document.querySelector("#user-input").setAttribute("type", "number");
  document.querySelector("#user-input").setAttribute("step", "1");
  displayProblem.style.fontSize = "50px";
  instructions.style.fontSize = "revert";
  userInput.style.width = "175px";
  document.querySelector("#user-input").style.marginTop = "0";
  document.querySelector("#user-input").setAttribute("max", "99999");
  canvas.setAttribute("height", "275px");
  displayProblem.style.margin = "30px 0";
  displayProblem.style.textAlign = "center";
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
  state.global = 0;
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

function calArrAll(max, arr, setting, maxSetting, level) {
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

const updateCalc = function () {
  skipGlobalUpdateProblem = 1;
  regen += 1;
  console.log(`Regen: ${regen}`);
  console.log(
    `Updating! skipGlobalUpdateProblem set to ${skipGlobalUpdateProblem}`
  );
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, 400, 275);

  updateProblems();

  // return skipGlobalUpdateProblem;
};

function checkRange(setting, arr, skipArr) {
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
        // REMOVE FROM EXTRA
        if (extraPracticeArr.includes(setting)) {
          const index = calArr.indexOf(setting);
          extraPracticeArr.splice(index, 1);
        }
        setting = calArr[genNumbers(calArr.length)];

        questionSecs = 0;
        updateCalc();
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
function updateProblems() {
  state.currentProblem = state.drawProblem = genProblems();
  // state.drawProblem = genProblems()

  const p = state.currentProblem;

  // generating display -> Turn this into a function!
  if (level == 1 || level == 3) {
    if (p.numOne >= p.numTwo) {
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
    } else {
      displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`;
    }
  }

  if (level == 1.02) {
    if (state.score < 11) {
      console.log(`state score: ${state.score}`);
      helpMe.innerHTML = `
    01 02 03 04 05 06 07 08 09 10</br>
    11 12 13 14 15 16 17 18 19 20
    `;
    } else {
      helpMe.innerHTML = "";
    }

    if (p.numOne <= 9) p.operator = "+";
    if (p.numOne > 9) p.operator = "-";
    displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
  }

  if (level == 1.03) {
    if (p.operator == "x") {
      displayProblem.innerHTML = `${p.numThree} ${p.operator} ${p.numFour}`;
    } else if (p.operator == "÷") {
      displayProblem.innerHTML = `${p.numThree * p.numFour} ${p.operator} ${
        p.numThree
      }`;
    } else if (p.numOne <= 9) {
      p.operator = "+";
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
    } else if (p.numOne > 9) {
      p.operator = "-";
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
    }
  }

  if (level == 1.04) {
    if (p.option == "c") {
      if (p.operator == "+" && p.numTwo > p.numThree) {
        [p.numThree, p.numTwo] = [p.numTwo, p.numThree];
      }
      if (p.optionTwo == "1") {
        displayProblem.innerHTML = `___ ${p.operator} ${p.numTwo} = ${p.numThree}`;
      }
      if (p.optionTwo == "2") {
        displayProblem.innerHTML = `${p.numThree} = ___ ${p.operator} ${p.numTwo}`;
      }
    }
    if (p.option == "d") {
      console.log(p.numOne, p.numThree);
      if (p.operator == "-" && p.numThree > p.numOne) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne];
      }
      if (p.operator == "+" && p.numOne > p.numThree) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne];
      }
      if (p.optionTwo == "1") {
        displayProblem.innerHTML = `${p.numOne} ${p.operator} ___ = ${p.numThree}`;
      }
      if (p.optionTwo == "2") {
        displayProblem.innerHTML = `${p.numThree} = ${p.numOne} ${p.operator} ___`;
      }
    }
    if (p.option == "r") {
      if (p.operator == "-" && p.numThree > p.numOne) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne];
      }
      if (p.optionTwo == "1") {
        displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numThree} = ___`;
      }
      if (p.optionTwo == "2") {
        displayProblem.innerHTML = `___ = ${p.numOne} ${p.operator} ${p.numThree}`;
      }
    }
  }

  if (level == 1.05) {
    if (p.option == "c") {
      if (p.optionTwo == "1") {
        displayProblem.innerHTML = `${p.numTwo} ${p.optionThree} than _____ is ${p.numThree}.`;
      }
      if (p.optionTwo == "2") {
        displayProblem.innerHTML = `${p.numThree} is ${p.numTwo} ${p.optionThree} than _____.`;
      }
    }
    if (p.option == "d") {
      console.log("difference");
      if (p.optionTwo == "1") {
        displayProblem.innerHTML = `${p.numThree} is _____ ${p.optionThree} than ${p.numTwo}.`;
      }
      if (p.optionTwo == "2") {
        displayProblem.innerHTML = `${p.numThree} is _____ ${p.optionThree} than ${p.numTwo}.`;
      }
    }
    if (p.option == "r") {
      console.log("result");
      if (p.optionTwo == "1") {
        displayProblem.innerHTML = `${p.numTwo} ${p.optionThree} than ${p.numOne} is _____.	`;
      }
      if (p.optionTwo == "2") {
        displayProblem.innerHTML = `${p.numTwo} ${p.optionThree} than ${p.numOne} is _____.`;
      }
    }
  }

  if (level == 1.06) {
    if (p.optionFinal == "1") {
      arr = [p.numOne, p.numTwo];
      if (p.numTwo > p.numOne) {
        [p.numTwo, p.numOne] = arr;
      }
      p.numTotal = p.numOne + p.numTwo;
      p.numDiff = p.numOne - p.numTwo;
      if (p.operator == "+" && p.numTotal > p.numThree) {
        p.operatorTwo = "+";
      }
      if (p.operator == "+" && p.numTotal < p.numThree) {
        p.operatorTwo = "-";
      }
      if (p.operator == "-" && p.numDiff < p.numThree) {
        p.operatorTwo = "-";
      }
      if (p.operator == "-" && p.numDiff > p.numThree) {
        p.operatorTwo = "+";
      }
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo} = ${p.numThree} ${p.operatorTwo} ___`;
    }
    if (p.optionFinal == "2") {
      arr = [p.numOne, p.numTwo];
      if (p.numTwo > p.numOne) {
        [p.numTwo, p.numOne] = arr;
      }
      p.numTotal = p.numOne + p.numTwo;
      p.numDiff = p.numOne - p.numTwo;
      if (p.operator == "+" && p.numTotal > p.numFour) {
        p.operatorTwo = "+";
      }
      if (p.operator == "+" && p.numTotal < p.numFour) {
        p.operatorTwo = "-";
      }
      if (p.operator == "-" && p.numDiff < p.numFour) {
        p.operatorTwo = "-";
      }
      if (p.operator == "-" && p.numDiff > p.numFour) {
        p.operatorTwo = "+";
      }
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo} = ___ ${p.operatorTwo} ${p.numFour}`;
    }
    if (p.optionFinal == "3") {
      arr = [p.numThree, p.numFour];
      if (p.numFour > p.numThree) {
        [p.numFour, p.numThree] = arr;
      }
      p.numTotal = p.numThree + p.numFour;
      p.numDiff = p.numThree - p.numFour;
      if (p.operatorTwo == "+" && p.numTotal > p.numOne) {
        p.operator = "+";
      }
      if (p.operatorTwo == "+" && p.numTotal < p.numOne) {
        p.operator = "-";
      }
      if (p.operatorTwo == "-" && p.numDiff < p.numOne) {
        p.operator = "-";
      }
      if (p.operatorTwo == "-" && p.numDiff > p.numOne) {
        p.operator = "+";
      }
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ___ = ${p.numThree} ${p.operatorTwo} ${p.numFour}`;
    }
    if (p.optionFinal == "4") {
      arr = [p.numThree, p.numFour];
      if (p.numFour > p.numThree) {
        [p.numFour, p.numThree] = arr;
      }
      p.numTotal = p.numThree + p.numFour;
      p.numDiff = p.numThree - p.numFour;
      if (p.operatorTwo == "+" && p.numTotal > p.numTwo) {
        p.operator = "+";
      }
      if (p.operatorTwo == "+" && p.numTotal < p.numTwo) {
        p.operator = "-";
      }
      if (p.operatorTwo == "-" && p.numDiff < p.numTwo) {
        p.operator = "-";
      }
      if (p.operatorTwo == "-" && p.numDiff > p.numTwo) {
        p.operator = "+";
      }
      displayProblem.innerHTML = `___ ${p.operator} ${p.numTwo} = ${p.numThree} ${p.operatorTwo} ${p.numFour}`;
    }
  }

  if (level == 1.07) {
    if (p.numOne == p.numThree) {
      p.numOne += 1;
    }
    console.log(p.numOne, p.numThree);
    if (p.numOne > p.numThree) {
      if (p.numThree == 1) {
        if (p.option == "1") {
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} + ${p.numTwo} x ___
          `;
        }
        if (p.option == "2") {
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} x ___ + ${p.numTwo}
          `;
        }
      } else {
        if (p.option == "1") {
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} x ${p.numThree} + ${p.numTwo} x ___
          `;
        }
        if (p.option == "2") {
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} = ${p.numTwo} x ___ + ${p.numTwo} x ${p.numThree}
          `;
        }
      }
    }

    if (p.numOne < p.numThree) {
      if (p.option == "1") {
        if (p.numThree == 1) {
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} =  ${p.numThree} - ____ x ${p.numTwo}
          `;
        } else {
          displayProblem.textContent = `
        ${p.numOne} x ${p.numTwo} = ${p.numThree} x ${p.numTwo} - ____ x ${p.numTwo}
        `;
        }
      }
      if (p.option == "2") {
        if (p.numThree == 1) {
          displayProblem.textContent = `
          ${p.numOne} x ${p.numTwo} =  ____ x ${p.numTwo} - ${p.numThree}
          `;
        } else {
          displayProblem.textContent = `
        ${p.numOne} x ${p.numTwo} = ____ x ${p.numTwo} - ${p.numThree} x ${p.numTwo}
        `;
        }
      }
    }
  }

  if (level == 1.08) {
    p.numOne = p.quantity * p.multiplier;
    let massUnits = ["g", "kg"][genNumbers(2)];
    if (
      p.itemMass == "stone" ||
      p.itemMass == "watermelon" ||
      p.itemMass == "dog" ||
      p.itemMass == "bag"
    ) {
      massUnits = "kg";
    } else {
      massUnits = "g";
    }
    let volumeUnits = ["ml", "ℓ"][genNumbers(2)];
    if (p.itemVolume == "raindrop") {
      volumeUnits = "ml";
    } else {
      volumeUnits = "ℓ";
    }
    let lengthUnits = ["m", "cm"][genNumbers(2)];
    if (p.itemLength == "string") lengthUnits = "cm";
    if (p.itemLength == "rope") lengthUnits = "m";
    if (p.choice == "division") {
      if (p.objects == "unit") {
        displayProblem.innerHTML = `
          ${p.quantity} ${p.objects}s = ${p.numOne}</br>
          1 ${p.objects} = ?
        `;
      }
      if (p.objects == "item") {
        let count = genNumbers(2) + 1;
        if (count == 1) {
          displayProblem.innerHTML = `
            ${p.quantity} ${p.item1}s = $${p.numOne}</br>
            1 ${p.item1} = ?
          `;
        }
        if (count == 2) {
          displayProblem.innerHTML = `
            ${p.quantity} ${p.item2}s = $${p.numOne}</br>
            1 ${p.item2} = ?
          `;
        }
      }
      if (p.objects == "mass") {
        displayProblem.innerHTML = `
          ${p.quantity} ${p.itemMass}s = ${p.numOne} ${massUnits}</br>
          1 ${p.itemMass} = ?
        `;
      }
      if (p.objects == "volume") {
        displayProblem.innerHTML = `
          ${p.quantity} ${p.itemVolume}s = ${p.numOne} ${volumeUnits}</br>
          1 ${p.itemVolume} = ?
        `;
      }
      if (p.objects == "length") {
        displayProblem.innerHTML = `
          ${p.quantity} ${p.itemLength}s = ${p.numOne} ${lengthUnits}</br>
          1 ${p.itemLength} = ?
        `;
      }
    }
    if (p.choice == "multiply") {
      if (p.objects == "unit") {
        displayProblem.innerHTML =
          // `
          //   ${p.quantity} ${p.objects}s = ${p.numOne}</br>
          //   1 ${p.objects} = ?
          // `
          `
        1 ${p.objects} = ${p.multiplier}</br>
        ${p.quantity} ${p.objects}s = ?</br>
      `;
      }
      if (p.objects == "item") {
        let count = genNumbers(2) + 1;
        if (count == 1) {
          displayProblem.innerHTML =
            // `
            //   ${p.quantity} ${p.item1}s = $${p.numOne}</br>
            //   1 ${p.item1} = ?
            // `
            `
          1 ${p.item1} = $${p.multiplier}</br>
          ${p.quantity} ${p.item1}s = ?</br>
        `;
        }
        if (count == 2) {
          displayProblem.innerHTML =
            // `
            //   ${p.quantity} ${p.item2}s = $${p.numOne}</br>
            //   1 ${p.item2} = ?
            // `
            `
          1 ${p.item2} = ${p.multiplier}</br>
          ${p.quantity} ${p.item2}s = ?</br>
        `;
        }
      }
      if (p.objects == "mass") {
        displayProblem.innerHTML = `
          1 ${p.itemMass} = ${p.multiplier} ${massUnits}</br>
          ${p.quantity} ${p.itemMass}s = ?</br>        
        `;
      }
      if (p.objects == "volume") {
        displayProblem.innerHTML = `
          1 ${p.itemVolume} = ${p.multiplier} ${volumeUnits}</br>
          ${p.quantity} ${p.itemVolume}s = ?</br>
        
        `;
      }
      if (p.objects == "length") {
        displayProblem.innerHTML = `
          1 ${p.itemLength} = ${p.multiplier} ${lengthUnits}</br>
          ${p.quantity} ${p.itemLength}s = ?</br>
          
        `;
      }
    }
  }

  if (level == 1.01 || level == 2.01 || level == 3.01) {
    if (p.operator == "x")
      displayProblem.innerHTML = `${p.numThree} ${p.operator} ${p.numFour}`;
    if (p.operator == "÷")
      displayProblem.innerHTML = `${p.numThree * p.numFour} ${p.operator} ${
        p.numThree
      }`;
  }

  if (level == 2) {
    if (p.numOne >= p.numTwo) {
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
    } else {
      displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`;
    }
  }
  if (level == 2.02) {
    if (digit < 3) {
      digit = 3;
    }
    if (digit > 7) {
      digit = 7;
    }
    for (let i = 0; i < digit; i++) {
      const chosenNumber = arr[genNumbers(arr.length - 1)];
      arr2.push(chosenNumber);
      const index = arr.indexOf(chosenNumber);
      arr.splice(index, 1);
    }
    p.place = [
      "ones",
      "tens",
      "hundreds",
      "thousands",
      "ten thousands",
      "hundred thousands",
      "millions",
    ][genNumbers(arr2.length)];

    if (arr2[0] == 0) {
      [arr2[0], arr2[1]] = [arr2[1], arr2[0]];
    }
    let b = 1;
    for (let a = 0; a < arr2.length; a++) {
      p.holdingNumber = arr2[a] * b;
      b = b * 10;
      p.totalNumber += p.holdingNumber;
    }

    displayProblem.innerHTML = `
    Which digit is in the</br>
    <u>${p.place}</u> place? <br>
    ${p.totalNumber.toLocaleString("en-US")}
    `;
  }

  if (level == 2.04) {
    if (p.operator == "x") {
      p.repeat = 2;
    }
    let value = p.numOne;
    for (let i = 0; i < p.repeat; i++) {
      arr.push(p.figure);
      arr.push(p.operator);
    }
    arr.pop();

    for (let i = 0; i < p.repeat - 1; i++) {
      if (p.operator == "x") {
        value *= p.numOne;
      }
      if (p.operator == "+") {
        value += p.numOne;
      }
    }

    displayProblem.innerHTML = `${arr.join(" ")} = ${value}`;
  }

  if (level == 2.05) {
    if (digit < 3) {
      digit = 3;
    }
    if (digit > 7) {
      digit = 7;
    }

    // counting odd or even in array
    let oddEvenCount = [0, 0];
    for (let i = arr2.length; arr2.length < digit; i++) {
      const chosenNumber = arr[genNumbers(arr.length - 1)];
      arr2.push(chosenNumber);
      const index = arr.indexOf(chosenNumber);
      arr.splice(index, 1);
      console.log(arr, arr2);
    }
    console.log(oddEvenCount[0], oddEvenCount[1]);

    // checking if all are odd or even
    for (let b = 0; b < arr2.length; b++) {
      if (arr2[b] % 2 == 0) {
        oddEvenCount[1]++;
      } else {
        oddEvenCount[0]++;
      }
    }

    let changeFirstArray = 0;
    if (p.evenOrOdd == "odd" && oddEvenCount[0] == 0) {
      console.log("choice 1");
      changeFirstArray = arr2[0] + 1;
      arr2.shift();
      console.log(arr2);
      arr2.push(changeFirstArray);
      console.log(arr2);
    }
    if (p.evenOrOdd == "even" && oddEvenCount[1] == 0) {
      console.log("choice 2");
      changeFirstArray = arr2[0] + 1;
      arr2.shift();
      console.log(arr2);
      arr2.push(changeFirstArray);
      console.log(arr2);
    }

    displayProblem.innerHTML = `
    Form the <u>${p.choice}</u> ${p.evenOrOdd} number using</br>
    ${arr2}
    `;
    if (p.choice == "smallest") {
      arr2.sort(function (a, b) {
        return a - b;
      });
      if (arr2[0] == 0) {
        [arr2[1], arr2[0]] = [arr2[0], arr2[1]];
      }
    }
    if (p.choice == "greatest") {
      arr2.sort(function (a, b) {
        return b - a;
      });
    }
    console.log(arr2, p.evenOrOdd);
    p.landingNumber = arr2.join("");

    let a = 1;
    if (p.evenOrOdd == "even") {
      if (p.landingNumber % 2 == 0) {
        p.finalNumber = p.landingNumber;
      } else {
        // do until true
        while (arr2[arr2.length - a] % 2 != 0) {
          a++;
        }
        const lastDigit = arr2[arr2.length - a];
        arr2.push(arr2.splice(arr2.indexOf(lastDigit), 1));
      }
    }
    if (p.evenOrOdd == "odd") {
      if (p.landingNumber % 2 != 0) {
        p.finalNumber = p.landingNumber;
      } else {
        // do until true
        while (arr2[arr2.length - a] % 2 == 0) {
          a++;
        }
        const lastDigit = arr2[arr2.length - a];
        arr2.push(arr2.splice(arr2.indexOf(lastDigit), 1));
      }
    }
    if (arr2[0] == 0) {
      console.log("first digit still Zero");
      [arr2[0], arr2[1]] = [arr2[1], arr2[0]];
    }

    p.finalNumber = arr2.join("");
    console.log(p.finalNumber);
  }

  if (level == 2.06) {
    arr.push(p.figure);
    while (arr[0] == p.figureTwo) {
      p.figureTwo = ["🏀", "⚽️", "🏈", "🎾", "🍎", "🍏", "🌭"][genNumbers(7)];
    }
    while (p.numTwo > p.numOne || p.numOne == p.numTwo) {
      p.numTwo = genNumbers(5) + 1;
    }
    arr.push(p.figureTwo);
    let repeat = genNumbers(2) + 2;
    let repeatTwo = genNumbers(2) + 2;
    if ((repeat = repeatTwo)) {
      repeat -= 1;
    }
    for (let i = 0; i < repeat; i++) {
      arr2.push(arr[0]);
    }
    for (let i = 0; i < repeatTwo; i++) {
      arr2.push(arr[1]);
    }
    let count = 0;
    if (repeat > repeatTwo) {
      count = repeatTwo;
    } else {
      count = repeat;
    }
    console.log(p.numOne, count, p.numTwo);
    displayProblem.innerHTML = `
    ${arr2.join("+")} = ${p.numOne * count + p.numTwo}</br>
    ${arr[0]}+${arr[1]} = ${p.numOne}</br>
    ${arr[1]} = ?
    `;
  }

  if (level == 2.07) {
    if (p.bigOrSmall == "1") {
      fractionChoice.innerHTML = "Smaller";
    } else {
      fractionChoice.innerHTML = "Larger";
    }

    if (p.numFive == p.numSix) {
      p.numSix = p.numSix + 1;
    }
    if (p.numThree == p.numFour) {
      p.numFour = p.numFour + 1;
    }

    if (p.option == "1") {
      numeratorOne.innerHTML = `${p.numOne}`;
      numeratorTwo.innerHTML = `${p.numOne}`;
      denominatorOne.innerHTML = `${p.numThree}`;
      denominatorTwo.innerHTML = `${p.numFour}`;
    }
    if (p.option == "2") {
      numeratorOne.innerHTML = `${p.numFive}`;
      numeratorTwo.innerHTML = `${p.numSix}`;
      denominatorOne.innerHTML = `${p.numTwo}`;
      denominatorTwo.innerHTML = `${p.numTwo}`;
    }
  }

  if (level == 2.08) {
    if (p.operator == "-") {
      if (p.numOne < p.numThree) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne];
      }
      if (p.numOne == p.numThree && p.numTwo < p.numFour) {
        [p.numTwo, p.numFour] = [p.numFour, p.numTwo];
      }
    }
    helpMe.textContent = "";
    if (p.operator == "-" && p.numTwo < p.numFour && state.score < 11) {
      helpMe.textContent = "Borrowed,final answer";
    }
    if (p.operator == "+" && p.numTwo + p.numFour >= 60 && state.score < 11) {
      helpMe.textContent = "Overflow=final answer";
    }

    if (p.minHours == "mins") {
      p.minSeconds = "secs";
    } else {
      p.minSeconds = "mins";
    }
    displayProblem.innerHTML = `${p.numOne} ${p.minHours} ${p.numTwo} ${p.minSeconds} ${p.operator} ${p.numThree} ${p.minHours} ${p.numFour} ${p.minSeconds} =`;
  }

  if (level == 2.09) {
    ctx.save();

    if (p.timeHours > 12) {
      p.timeHours -= 12;
      p.amOrPm = "pm";
    } else {
      p.amOrPm = "am";
    }

    ctx.save();
    const xStart = -150;
    const yStart = 0;
    const xEnd = 160;
    const yEnd = 0;
    ctx.font = "1.2em serif";
    ctx.translate(200, 137.5);
    // horizontal line
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    // arrowhead
    ctx.beginPath();
    ctx.moveTo(160, 0);
    ctx.lineTo(150, -10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(160, 0);
    ctx.lineTo(150, 10);
    ctx.stroke();

    // start label
    ctx.beginPath();
    ctx.moveTo(-150, 15);
    ctx.lineTo(-150, -15);
    ctx.stroke();
    if (p.situation == "later") {
      if (p.timeMinutes < 10) {
        ctx.fillText(`${p.timeHours}.0${p.timeMinutes} ${p.amOrPm}`, -163, -17);
      } else {
        ctx.fillText(`${p.timeHours}.${p.timeMinutes} ${p.amOrPm}`, -163, -17);
      }
      ctx.fillText(`?`, 135, -20);
    }

    if (p.situation == "before") {
      if (p.timeMinutes < 10) {
        ctx.fillText(`${p.timeHours}.0${p.timeMinutes} ${p.amOrPm}`, 118, -17);
      } else {
        ctx.fillText(`${p.timeHours}.${p.timeMinutes} ${p.amOrPm}`, 118, -17);
      }
      ctx.fillText(`?`, -155, -20);
    }

    // end label
    ctx.beginPath();
    ctx.moveTo(140, 15);
    ctx.lineTo(140, -15);
    ctx.stroke();
    if (p.situation == "later") {
      if (p.roll == "mins") {
        ctx.fillText(`${p.changeMinutes}mins ${p.situation}`, -50, -10);
      }
      if (p.roll == "hours")
        ctx.fillText(`${p.changeHours}hours ${p.situation}`, -50, -10);
    }
    if (p.situation == "before") {
      if (p.roll == "mins") {
        ctx.fillText(`${p.changeMinutes}mins ${p.situation}`, -50, -10);
      }
      if (p.roll == "hours") {
        ctx.fillText(`${p.changeHours}hours ${p.situation}`, -50, -10);
      }
    }

    if (state.score < 11 || state.mistake > 5) {
      ctx.fillText("am: 1 2 3 4 5 6 7 8 9 10 11 12", -115, -100);
      ctx.fillText("pm: 12 11 10 9 8 7 6 5 4 3 2 1", -115, -80);
    }

    if (
      state.mistake > 10 &&
      p.situation == "later" &&
      p.roll == "mins" &&
      p.timeMinutes + p.changeMinutes >= 60 &&
      state.score < 11
    ) {
      ctx.fillText("Overflow", -55, -60);
    }
    if (
      state.mistake > 10 &&
      p.situation == "before" &&
      p.roll == "mins" &&
      p.timeMinutes - p.changeMinutes < 0 &&
      state.score < 11
    ) {
      ctx.fillText("Insufficient", -55, -60);
    }
    ctx.restore();

    ctx.restore();
  }

  if (level == 2.03 || level == 3.03 || level == 4.04 || level == 6.3) {
    console.log(p.operator);
    if (p.operator == "x")
      displayProblem.innerHTML = `${p.numThree} ${p.operator} ${p.numFour}`;
    if (p.operator == "+")
      displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
    if (p.operator == "-") {
      if (p.numOne >= p.numTwo) {
        displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
      } else {
        displayProblem.innerHTML = `${p.numTwo} ${p.operator} ${p.numOne}`;
      }
    }
    if (p.operator == "÷")
      displayProblem.innerHTML = `${p.numThree * p.numFour} ${p.operator} ${
        p.numThree
      }`;
  }
  if (level == 3.02) {
    if (p.option == "1") {
      displayProblem.textContent = `${p.numOne} x ${
        p.numMulti * p.numMultiTwo
      } = `;
    }
    if (p.option == "2") {
      displayProblem.textContent = `${p.numOne * p.numMultiTwo} ${
        p.numPlace
      } = `;
    }
    if (p.option == "3") {
      displayProblem.textContent = `${
        p.numOne * p.numMulti * p.numMultiTwo
      } ÷ ${p.numMulti} = `;
    }
    if (p.option == "4") {
      if (p.numPlace == "tens") {
        displayProblem.textContent = `${
          p.numOne * 10 * p.numMultiTwo
        } = _____ ${p.numPlace}`;
      }
      if (p.numPlace == "hundreds") {
        displayProblem.textContent = `${
          p.numOne * 100 * p.numMultiTwo
        } = _____ ${p.numPlace}`;
      }
      if (p.numPlace == "thousands") {
        displayProblem.textContent = `${
          p.numOne * 1000 * p.numMultiTwo
        } = _____ ${p.numPlace}`;
      }
    }
  }

  if (level == 3.04) {
    console.log(p.unitMeasurement);
    p.numTwo = 1000;
    if (p.unitMeasurement == "min") {
      p.numTwo = 60;
      p.secondUnitMeasurement = "secs";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`;
    }
    if (p.unitMeasurement == "$") {
      p.numTwo = 100;
      p.secondUnitMeasurement = "¢";
      displayProblem.innerHTML = `${p.unitMeasurement}${p.numOne} =`;
    }
    if (p.unitMeasurement == "m") {
      p.numTwo = 100;
      p.secondUnitMeasurement = "cm";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`;
    }
    if (p.unitMeasurement == "km") {
      p.secondUnitMeasurement = "m";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`;
    }
    if (p.unitMeasurement == "ℓ") {
      p.secondUnitMeasurement = "mℓ";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`;
    }
    if (p.unitMeasurement == "kg") {
      p.secondUnitMeasurement = "g";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} =`;
    }
    secondUnitMeasurement.textContent = p.secondUnitMeasurement;
  }

  if (level == 3.05) {
    p.numTwo = 1000;
    if (p.unitMeasurement == "$") {
      p.numTwo = 100;
      p.secondUnitMeasurement = "¢";
      p.numFive = Math.round((p.numOne + p.numThree / 100) * 100) / 100;
      console.log(p.numThree);
      if (p.numThree % 10 == 0 && p.numThree != 100) {
        displayProblem.innerHTML = `${p.unitMeasurement}${p.numFive}0`;
      } else {
        displayProblem.innerHTML = `${p.unitMeasurement}${p.numFive}`;
      }
    } else if (p.unitMeasurement == "m") {
      p.numTwo = 100;
      p.secondUnitMeasurement = "cm";
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement} =`;
    } else if (p.unitMeasurement == "min") {
      p.secondUnitMeasurement = "secs";
      p.numTwo = 60;
      p.numThree = p.numFive;
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement} =`;
    } else {
      if (p.option == "2") {
        p.numFour = p.numThree;
      }
      if (p.unitMeasurement == "km") {
        p.secondUnitMeasurement = "m";
      }
      if (p.unitMeasurement == "ℓ") {
        p.secondUnitMeasurement = "mℓ";
      }
      if (p.unitMeasurement == "kg") {
        p.secondUnitMeasurement = "g";
      }
      displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numFour} ${p.secondUnitMeasurement} =`;
    }
    secondUnitMeasurement.textContent = p.secondUnitMeasurement;
  }

  if (level == 3.06) {
    p.numTwo = 1000;
    if (p.unitMeasurement == "$") {
      p.numTwo = 100;
      p.secondUnitMeasurement = "¢";
      p.numOne = p.numOne * p.numTwo + p.numThree;
      displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
    } else if (p.unitMeasurement == "m") {
      p.numTwo = 100;
      p.secondUnitMeasurement = "cm";
      p.numOne = p.numOne * p.numTwo + p.numThree;
      displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
    } else if (p.unitMeasurement == "min") {
      p.numTwo = 60;
      p.secondUnitMeasurement = "s";
      p.numOne = p.numOne * p.numTwo + p.numFive;
      displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
    } else {
      if (p.option == "2") {
        p.numFour = p.numThree;
      }
      p.numOne = p.numOne * 1000 + p.numFour;
      if (p.unitMeasurement == "km") {
        p.secondUnitMeasurement = "m";
      }
      if (p.unitMeasurement == "ℓ") {
        p.secondUnitMeasurement = "mℓ";
      }
      if (p.unitMeasurement == "kg") {
        p.secondUnitMeasurement = "g";
      }
      displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
    }
    //displaying second unit of measurement
    if (p.unitMeasurement == "$") {
      secondUnitMeasurement.textContent = `${p.unitMeasurement}`;
    } else {
      if (p.unitMeasurement == "ℓ") {
        p.unitMeasurement = "L";
        p.secondUnitMeasurement = "ml";
      }
      secondUnitMeasurement.textContent = `${p.unitMeasurement}, ${p.secondUnitMeasurement}`;
    }
  }

  if (level == 3.07) {
    if (p.numOne == p.numTwo && p.numTwo == p.numThree) {
      p.numOne = p.numOne + 1;
    }
    arr.push(p.numOne, p.numTwo, p.numThree);
    displayProblem.innerHTML = `${p.numOne} , ${p.numTwo} , ${p.numThree}`;
  }

  if (level == 3.08) {
    if (p.hoursOne > p.hoursTwo) {
      [p.hoursOne, p.hoursTwo] = [p.hoursTwo, p.hoursOne];
    }
    if (p.amOrPmOne < 12) {
      p.amOrPmOne = "am";
    }
    if (p.amOrPmTwo < 12) {
      p.amOrPmTwo = "am";
    }
    if (p.hoursOne > 12) {
      p.hoursOne -= 12;
    }
    if (p.hoursTwo > 12) {
      p.hoursTwo -= 12;
    }
    if (p.hoursOne > p.hoursTwo) {
      [p.hoursOne, p.hoursTwo] = [p.hoursTwo, p.hoursOne];
    }
    // swap mins if hours same
    if (p.hoursOne == p.hoursTwo && p.minsOne > p.minsTwo) {
      [p.minsOne, p.minsTwo] = [p.minsTwo, p.minsOne];
    }

    ctx.save();
    ctx.save();
    ctx.font = "1em serif";
    if (p.minsOne < 10 && p.minsTwo < 10) {
      if (p.minsOne == 0 && p.minsTwo == 0) {
        ctx.fillText(
          `What is the duration between ${p.hoursOne} ${p.amOrPmOne} and ${p.hoursTwo} ${p.amOrPmTwo}`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `What is the duration between ${p.hoursOne}.0${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.0${p.minsTwo} ${p.amOrPmTwo}`,
          20,
          20
        );
      }
    } else if (p.minsOne < 10) {
      if (p.minsOne == 0) {
        ctx.fillText(
          `What is the duration between ${p.hoursOne} ${p.amOrPmOne} and ${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `What is the duration between ${p.hoursOne}.0${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`,
          20,
          20
        );
      }
    } else if (p.minsTwo < 10) {
      if (p.minsTwo == 0) {
        ctx.fillText(
          `What is the duration between ${p.hoursOne}.${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo} ${p.amOrPmTwo}`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `What is the duration between ${p.hoursOne}.${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.0${p.minsTwo} ${p.amOrPmTwo}`,
          20,
          20
        );
      }
    } else {
      ctx.fillText(
        `What is the duration between ${p.hoursOne}.${p.minsOne} ${p.amOrPmOne} and ${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`,
        20,
        20
      );
    }
    ctx.restore();

    ctx.save();
    const xStart = -150;
    const yStart = 0;
    const xEnd = 160;
    const yEnd = 0;
    ctx.font = "1.2em serif";
    ctx.translate(200, 137.5);
    // horizontal line
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    // arrowhead
    ctx.beginPath();
    ctx.moveTo(160, 0);
    ctx.lineTo(150, -10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(160, 0);
    ctx.lineTo(150, 10);
    ctx.stroke();

    // start label
    ctx.beginPath();
    ctx.moveTo(-150, 15);
    ctx.lineTo(-150, -15);
    ctx.stroke();
    if (p.minsOne < 10) {
      ctx.fillText(`${p.hoursOne}.0${p.minsOne} ${p.amOrPmOne}`, -163, -17);
    } else {
      ctx.fillText(`${p.hoursOne}.${p.minsOne} ${p.amOrPmOne}`, -163, -17);
    }

    // end label
    ctx.beginPath();
    ctx.moveTo(140, 15);
    ctx.lineTo(140, -15);
    ctx.stroke();
    if (p.minsTwo < 10) {
      ctx.fillText(`${p.hoursTwo}.0${p.minsTwo} ${p.amOrPmTwo}`, 120, -17);
    } else {
      ctx.fillText(`${p.hoursTwo}.${p.minsTwo} ${p.amOrPmTwo}`, 120, -17);
    }

    ctx.save();
    ctx.strokeStyle = "red";
    if (p.minsTwo > p.minsOne) {
      const totalTime =
        (p.hoursTwo - p.hoursOne) * 60 + (p.minsTwo - p.minsOne);
      const perPixel = totalTime / 290;
      const xHelp = perPixel * (p.minsTwo - p.minsOne);

      ctx.beginPath();
      ctx.moveTo(xStart + xHelp, 10);
      ctx.lineTo(xStart + xHelp, -10);
      ctx.stroke();
    }
    if (p.minsTwo < p.minsOne) {
      const totalTime =
        (p.hoursTwo - p.hoursOne - 1) * 60 + (60 - p.minsOne) + p.minsTwo;
      const perPixel = totalTime / 290;
      const xHelp = perPixel * (60 - p.minsOne);

      ctx.beginPath();
      ctx.moveTo(xStart + xHelp, 10);
      ctx.lineTo(xStart + xHelp, -10);
      ctx.stroke();

      const xHelp2 = perPixel * (totalTime - p.minsTwo);
      ctx.beginPath();
      ctx.moveTo(xStart + xHelp2, 10);
      ctx.lineTo(xStart + xHelp2, -10);
      ctx.stroke();
    }
    ctx.restore();

    ctx.restore();

    ctx.restore();
  }

  if (level == 3.09) {
    threeWholeNumber.textContent = "";
    threeNumerator.textContent = "?";
    threeDenominator.textContent = "?";
    if (p.numOne >= p.numTwo) {
      p.numOne = p.numOne - 1 - (p.numOne - p.numTwo);
    }
    twoWholeNumber.textContent = "";
    twoNumerator.textContent = p.numOne * p.numMulti;
    twoDenominator.textContent = p.numTwo * p.numMulti;
    p.numLargest = p.numTwo * p.numMulti;
  }

  if (level == 3.1) {
    if (p.numOne >= p.numTwo) {
      p.numOne = p.numOne - 1 - (p.numOne - p.numTwo);
    }
    for (let i = p.numTwo; i > 1; i--) {
      if (p.numOne % i == 0 && p.numTwo % i == 0) {
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    threeWholeNumber.textContent = "";
    twoWholeNumber.textContent = "";
    twoNumerator.textContent = p.numOne;
    twoDenominator.textContent = p.numTwo;

    if (p.option == "1") {
      threeNumerator.textContent = p.numOne * p.numMulti;
      threeDenominator.textContent = "?";
    } else {
      threeNumerator.textContent = "?";
      threeDenominator.textContent = p.numTwo * p.numMulti;
    }
  }
  if (level == 3.11) {
    // Level 3.10
    if (p.optionFinal == "1") {
      threeWholeNumber.textContent = "";
      threeNumerator.textContent = "?";
      threeDenominator.textContent = "?";
      if (p.numOne >= p.numTwo) {
        p.numOne = p.numOne - 1 - (p.numOne - p.numTwo);
      }
      twoWholeNumber.textContent = "";
      twoNumerator.textContent = p.numOne * p.numMulti;
      twoDenominator.textContent = p.numTwo * p.numMulti;
      p.numLargest = p.numTwo * p.numMulti;
    }
    // Level 3.11
    if (p.optionFinal == "2") {
      if (p.numOne >= p.numTwo) {
        p.numOne = p.numOne - 1 - (p.numOne - p.numTwo);
      }
      for (let i = p.numTwo; i > 1; i--) {
        if (p.numOne % i == 0 && p.numTwo % i == 0) {
          p.numOne /= i;
          p.numTwo /= i;
        }
      }
      threeWholeNumber.textContent = "";
      twoWholeNumber.textContent = "";
      twoNumerator.textContent = p.numOne;
      twoDenominator.textContent = p.numTwo;

      if (p.option == "1") {
        threeNumerator.textContent = p.numOne * p.numMulti;
        threeDenominator.textContent = "?";
      } else {
        threeNumerator.textContent = "?";
        threeDenominator.textContent = p.numTwo * p.numMulti;
      }
    }
  }

  if (level == 3.12) {
    drawingDisplay();
    // displayProblem.innerHTML = `
    // Pattern 1: 1</br>
    // Pattern 2: 3</br>
    // Pattern 3: 6</br>
    // Pattern 4: 10</br>
    // ...</br>
    // Pattern ${p.numOne}: ?
    // `;

    p.count = drawSquares(p.length, p.breadth, 30, p.side);
    drawGrid(p.length, p.breadth, 30);
    if (p.count == "Error") return updateCalc();
  }

  if (level == 3.13) {
    displayProblem.innerHTML = `
    Pattern 1: ${p.numTwo}</br>
    Pattern 2: ${p.numTwo + p.numThree}</br>
    Pattern 3: ${p.numTwo + p.numThree * 2}</br>
    ...</br>
    Pattern ${p.numFour}: ?
    `;
  }

  if (level == 3.14) {
    displayProblem.innerHTML = `
    Pattern 1: 1</br>
    Pattern 2: 4</br>
    Pattern 3: 9</br>
    ...</br>
    Pattern ${p.numFive}: ?</br>
    Pattern ?: ${(p.numFive + p.numSix) * (p.numFive + p.numSix)}
    `;
  }

  if (level == 3.15) {
    if (p.rollType == "A") {
      for (let i = 0; i < p.rollTimes; i++) {
        p.rollA = genNumbers(5);
        arr.push(p.rollA);
      }
      while (arr[2] == arr[1] && arr[2] == arr[0]) {
        arr.pop(arr[3]);
        arr.push(genNumbers(5));
      }
    }
    if (p.rollType == "B") {
      for (let i = 0; i < p.rollTimes; i++) {
        p.rollB = ["A", "B", "C", "D", "E"][genNumbers(5)];
        arr.push(p.rollB);
      }
      while (arr[2] == arr[1] && arr[2] == arr[0]) {
        arr.pop(arr[2]);
        p.rollB = ["A", "B", "C", "D", "E"][genNumbers(5)];
        arr.push(p.rollB);
      }
    }
    console.log(arr);
    for (let i = 0; arr2.length < 13; i++) {
      arr2.push(arr[i % p.rollTimes]);
    }
    console.log(arr2);
    arr2.push("...");
    displayProblem.innerHTML = `
    What is in position ${p.position}?</br>
    ${arr2.toString()}
    `;
  }

  if (level == 3.16) {
    // // level 3.12
    // if (p.optionFinal == 5) {
    //   displayProblem.innerHTML = `1 + 2 + 3 ... ... + ${p.numOne - 2} + ${
    //     p.numOne - 1
    //   } + ${p.numOne}</br> = ?`;
    // }
    // if (p.optionFinal == 1) {
    //   displayProblem.innerHTML = `
    //   Pattern 1: 1</br>
    //   Pattern 2: 3</br>
    //   Pattern 3: 6</br>
    //   Pattern 4: 10</br>
    //   ...</br>
    //   Pattern ${p.numOne}: ?
    //   `;
    // }
    // // level 3.13
    // if (p.optionFinal == 2) {
    //   displayProblem.innerHTML = `
    //   Pattern 1: ${p.numTwo}</br>
    //   Pattern 2: ${p.numTwo + p.numThree}</br>
    //   Pattern 3: ${p.numTwo + p.numThree * 2}</br>
    //   ...</br>
    //   Pattern ${p.numFour}: ?
    //   `;
    // }
    // // level 3.14
    // if (p.optionFinal == 3) {
    //   displayProblem.innerHTML = `
    //   Pattern 1: 1</br>
    //   Pattern 2: 4</br>
    //   Pattern 3: 9</br>
    //   ...</br>
    //   Pattern ${p.numFive}: ?</br>
    //   Pattern ?: ${(p.numFive + p.numSix) * (p.numFive + p.numSix)}
    //   `;
    // }
    // // level 3.15
    // if (p.optionFinal == 4) {
    //   if (p.rollType == "A") {
    //     for (let i = 0; i < p.rollTimes; i++) {
    //       p.rollA = genNumbers(5);
    //       arr.push(p.rollA);
    //     }
    //     while (arr[2] == arr[1] && arr[2] == arr[0]) {
    //       arr.pop(arr[3]);
    //       arr.push(genNumbers(5));
    //     }
    //   }
    //   if (p.rollType == "B") {
    //     for (let i = 0; i < p.rollTimes; i++) {
    //       p.rollB = ["A", "B", "C", "D", "E"][genNumbers(5)];
    //       arr.push(p.rollB);
    //     }
    //     while (arr[2] == arr[1] && arr[2] == arr[0]) {
    //       arr.pop(arr[2]);
    //       p.rollB = ["A", "B", "C", "D", "E"][genNumbers(5)];
    //       arr.push(p.rollB);
    //     }
    //   }
    //   console.log(arr);
    //   for (let i = 0; arr2.length < 13; i++) {
    //     arr2.push(arr[i % p.rollTimes]);
    //   }
    //   console.log(arr2);
    //   arr2.push("...");
    //   displayProblem.innerHTML = `
    //   What is in position ${p.position}?</br>
    //   ${arr2.toString()}
    //   `;
    // }
    // level 3.12
    console.log(setting);
    if (setting == 5) {
      displayProblem.innerHTML = `1 + 2 + 3 ... ... + ${p.numOne - 2} + ${
        p.numOne - 1
      } + ${p.numOne}</br> = ?`;
    }
    if (setting == 1) {
      displayProblem.innerHTML = `
      Pattern 1: 1</br>
      Pattern 2: 3</br>
      Pattern 3: 6</br>
      Pattern 4: 10</br>
      ...</br>
      Pattern ${p.numOne}: ?
      `;
    }
    // level 3.13
    if (setting == 2) {
      displayProblem.innerHTML = `
      Pattern 1: ${p.numTwo}</br>
      Pattern 2: ${p.numTwo + p.numThree}</br>
      Pattern 3: ${p.numTwo + p.numThree * 2}</br>
      ...</br>
      Pattern ${p.numFour}: ?
      `;
    }
    // level 3.14
    if (setting == 3) {
      displayProblem.innerHTML = `
      Pattern 1: 1</br>
      Pattern 2: 4</br>
      Pattern 3: 9</br>
      ...</br>
      Pattern ${p.numFive}: ?</br>
      Pattern ?: ${(p.numFive + p.numSix) * (p.numFive + p.numSix)}
      `;
    }
    // level 3.15
    if (setting == 4) {
      if (p.rollType == "A") {
        for (let i = 0; i < p.rollTimes; i++) {
          p.rollA = genNumbers(5);
          arr.push(p.rollA);
        }
        while (arr[2] == arr[1] && arr[2] == arr[0]) {
          arr.pop(arr[3]);
          arr.push(genNumbers(5));
        }
      }
      if (p.rollType == "B") {
        for (let i = 0; i < p.rollTimes; i++) {
          p.rollB = ["A", "B", "C", "D", "E"][genNumbers(5)];
          arr.push(p.rollB);
        }
        while (arr[2] == arr[1] && arr[2] == arr[0]) {
          arr.pop(arr[2]);
          p.rollB = ["A", "B", "C", "D", "E"][genNumbers(5)];
          arr.push(p.rollB);
        }
      }
      console.log(arr);
      for (let i = 0; arr2.length < 13; i++) {
        arr2.push(arr[i % p.rollTimes]);
      }
      console.log(arr2);
      arr2.push("...");
      displayProblem.innerHTML = `
      What is in position ${p.position}?</br>
      ${arr2.toString()}
      `;
    }
  }

  if (level == 3.17) {
    ctx.save();
    ctx.font = "1em serif";
    let arcAngleRad = (p.arcAngle * Math.PI) / 180;
    ctx.fillText(`Which angle is ${p.acuteOrObtuse}?`, 30, 20);
    ctx.translate(200, 187.5);

    // Draw baseline
    (ctx.strokeStyle = "black"), (ctx.lineWidth = 3);
    ctx.beginPath();
    ctx.moveTo(-100, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();

    // Draw arc1
    (ctx.strokeStyle = "yellow"), ctx.beginPath();
    ctx.arc(0, 0, 75, 1 * Math.PI, (1 + p.arcAngle / 180) * Math.PI);
    ctx.stroke();

    ctx.fillText("a", -90, -10);
    ctx.fillText("b", 75, -10);

    // Draw arc1
    (ctx.strokeStyle = "orange"), ctx.beginPath();
    ctx.arc(0, 0, 70, (1 + p.arcAngle / 180) * Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.rotate(arcAngleRad);
    ctx.beginPath();
    (ctx.strokeStyle = "black"), (ctx.lineWidth = 3);
    ctx.moveTo(0, 0);
    ctx.lineTo(-100, 0);
    ctx.stroke();
    ctx.restore();
  }

  if (level == 3.18) {
    ctx.font = "1em serif";
    ctx.save();

    if (p.parallelorPerpendicular == "parallel") {
      if (p.roll == 1) {
        ctx.fillText(
          `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`,
          20,
          20
        );
      }
      // if ( p.roll == 1){
      //   ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}?`, 20, 20)
      // } else {
      //   ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}?`, 20, 20)
      // }
    } else {
      if (p.roll == 1) {
        ctx.fillText(
          `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`,
          20,
          20
        );
      }
      // if ( p.roll == 1){
      //   ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}?`, 20, 20)
      // } else {
      // ctx.fillText(`Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}?`, 20, 20)
      // }
    }

    ctx.translate(200, 137.5);
    ctx.font = "20px serif";
    // First Line
    ctx.translate(p.translateX, p.translateY);
    ctx.rotate((p.rotation1 * Math.PI) / 180);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.pointY1);
    ctx.stroke();
    ctx.fillText(p.labelABC, -5, 0);
    ctx.fillText(p.labelDEF, -5, p.pointY1 + 10);

    ctx.save();
    // Second Line (parallel line)
    console.log(p.translateX2, p.translateY2);
    if (p.translateX2 < 10 && p.translateX2 > -10) {
      p.translateX2 = ["-", "+"][genNumbers(2)] + 20;
    }
    if (p.translateY2 < 10 && p.translateY2 > -10) {
      p.translateY2 = ["-", "+"][genNumbers(2)] + 20;
    }
    console.log(p.translateX2, p.translateY2);

    ctx.translate(p.translateX2, p.translateY2);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.pointY2);
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.fillText(p.labelGHI, -5, -5);
    ctx.fillText(p.labelJKL, -5, p.pointY2 + 20);

    ctx.restore();
    // Third Line (perpendicular)
    ctx.translate(p.translateX3, p.translateY3);
    ctx.rotate((p.rotation2 * Math.PI) / 180);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, p.pointY3);
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.fillText(p.labelMNO, -5, -5);
    ctx.fillText(p.labelPQR, -5, p.pointY3 + 20);

    ctx.restore();
  }

  if (level == 3.19) {
    ctx.font = "1em serif";
    ctx.save();

    if (difficulty == 1 || (difficulty == 9 && p.rollx == 0)) {
      ctx.fillText(
        `Find the ${p.areaOrPerimeter} of the ${p.shapeChoice}.`,
        20,
        40
      );
      ctx.translate(200, 137.5);
      ctx.fillStyle = "orange";
      ctx.strokeStyle = "grey";
      ctx.lineWidth = 5;

      if (p.shapeChoice == "square") {
        ctx.beginPath();
        ctx.rect(
          -p.squareCoord,
          -p.squareCoord,
          p.squareCoord * 2,
          p.squareCoord * 2
        );
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.fillText(
          `${p.squareSide} ${p.unitMeasurement}`,
          -15,
          -p.squareCoord - 10
        );
      }

      if (p.shapeChoice == "rectangle") {
        p.rectLength = p.rectLengthCoord / 10;
        p.rectBreadth = p.rectBreadthCoord / 10;
        ctx.beginPath();
        ctx.rect(
          -p.rectLengthCoord,
          -p.rectBreadthCoord,
          p.rectLengthCoord * 2,
          p.rectBreadthCoord * 2
        );
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.fillText(
          `${p.rectBreadth} ${p.unitMeasurement}`,
          p.rectLengthCoord + 5,
          0 + 2
        );
        ctx.fillText(
          `${p.rectLength} ${p.unitMeasurement}`,
          -15,
          -p.rectBreadthCoord - 10
        );
      }
    }

    if (difficulty == 2 || (difficulty == 9 && p.rollx == 1)) {
      ctx.fillText(
        `Find the ${
          p.shapeChoice == "rectangle" ? p.side : "length of each side"
        } of the ${p.shapeChoice}.`,
        20,
        40
      );
      ctx.translate(200, 137.5);
      ctx.fillStyle = "orange";
      ctx.strokeStyle = "grey";
      ctx.lineWidth = 5;

      if (p.shapeChoice == "square") {
        ctx.beginPath();
        ctx.rect(
          -p.squareCoord,
          -p.squareCoord,
          p.squareCoord * 2,
          p.squareCoord * 2
        );
        ctx.stroke();
        ctx.fill();

        ctx.save();
        p.area = p.squareSide * p.squareSide;
        p.perimeter = p.squareSide * 4;
        ctx.fillStyle = "black";
        ctx.translate(-200, -137.5);
        ctx.fillText(
          `The ${p.areaOrPerimeter} of the ${p.shapeChoice} is ${
            p.areaOrPerimeter == "area"
              ? `${p.area} ${p.unitMeasurement}2.`
              : `${p.perimeter} ${p.unitMeasurement}.`
          } `,
          20,
          60
        );
        ctx.restore();

        // ctx.fillStyle = "black"
        // ctx.fillText(`${p.squareSide} ${p.unitMeasurement}`, -15, -p.squareCoord-10)
      }

      if (p.shapeChoice == "rectangle") {
        p.rectLength = p.rectLengthCoord / 10;
        p.rectBreadth = p.rectBreadthCoord / 10;
        p.area = p.rectLength * p.rectBreadth;
        p.perimeter = (p.rectLength + p.rectBreadth) * 2;
        ctx.beginPath();
        ctx.rect(
          -p.rectLengthCoord,
          -p.rectBreadthCoord,
          p.rectLengthCoord * 2,
          p.rectBreadthCoord * 2
        );
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "black";
        if (p.side == "breadth") {
          ctx.fillText(
            `${p.rectLength} ${p.unitMeasurement}`,
            -15,
            -p.rectBreadthCoord - 10
          );
        }
        if (p.side == "length") {
          ctx.fillText(
            `${p.rectBreadth} ${p.unitMeasurement}`,
            p.rectLengthCoord + 5,
            0 + 2
          );
        }

        ctx.save();
        ctx.translate(-200, -137.5);
        ctx.fillText(
          `The ${p.areaOrPerimeter} of the ${p.shapeChoice} is ${
            p.areaOrPerimeter == "area"
              ? `${p.area} ${p.unitMeasurement}2.`
              : `${p.perimeter} ${p.unitMeasurement}.`
          } `,
          20,
          60
        );
        ctx.restore();
      }
    }

    ctx.restore();
  }

  if (level == 4.0) {
    let arrayExclude = [3, 4, 5, 7, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
    // while (p.numOne == 17 || p.numOne == 19 || p.numOne == 23 || p.numOne == 29 || p.numOne == 31 || p.numOne == 37 || p.numOne == 41 || p.numOne == 43 || p.numOne == 47 || p.numOne == 53 || p.numOne == 59){
    //   console.log("while loop")

    // }
    while (arrayExclude.includes(p.numOne)) {
      console.log("reroll");
      p.numOne = genNumbers(60) + 2;
    }

    displayProblem.innerHTML = `List the factors of</br> 
    ${p.numOne}
    `;
  }

  if (level == 4.01) {
    if (p.value == "thousands" && p.numOne > 1000) {
      p.numOne = p.numOne + 1000;
    }
    if (p.value == "ten thousands" && p.numOne > 10000) {
      p.numOne = p.numOne + 10000;
    }
    displayProblem.innerHTML = `${p.numOne} ≈ `;
    helpMe.textContent = `${p.placeValue}`;
  }

  if (level == 4.02) {
    for (let i = 0; i < 7; i++) {
      const chosenNumber = arr[genNumbers(arr.length - 1)];
      arr2.push(chosenNumber);
      const index = arr.indexOf(chosenNumber);
      arr.splice(index, 1);
    }
    console.log(arr, arr2);
    if (arr2[arr2.length - 1] == 0) {
      [arr2[arr2.length - 1], arr2[1]] = [arr2[1], arr2[arr2.length - 1]];
    }

    let b = 0.001;
    for (let a = 0; a < arr2.length; a++) {
      p.holdingNumber = arr2[a] * b;
      b = b * 10;
      p.totalNumber += p.holdingNumber;
    }

    displayProblem.innerHTML = `
    Which digit is in the</br>
    <u>${p.placeValue}</u> place? <br>
    ${p.totalNumber.toLocaleString("en-US")}
    `;
  }

  // if (level == 4.03) {
  //   if (p.numOne % 10 == 0) {
  //     p.numOne += 1;
  //   }
  //   if (p.placeValue == "Whole Number") {
  //     p.numTwo = [10, 100, 1000][genNumbers(3)];
  //   }
  //   if (p.placeValue == "1 decimal place" || p.placeValue == "tenth place") {
  //     p.numTwo = [100, 1000][genNumbers(2)];
  //   }
  //   if (
  //     p.placeValue == "2 decimal place" ||
  //     p.placeValue == "hundredth place"
  //   ) {
  //     p.numTwo = 1000;
  //   }
  //   // p.numFinal = Math.floor((p.numOne / (p.numTwo * 1)) * p.numTwo) / p.numTwo;
  //   p.numFinal = p.numOne / p.numTwo;

  //   while (p.numFinal > 1000) {
  //     p.numFinal -= 1000;
  //   }
  //   console.log(p.numOne, p.numTwo, p.numFinal);
  //   helpMe.textContent = `${p.placeValue}`;
  //   displayProblem.textContent = `${p.numFinal} ≈ `;
  // }
  if (level == 4.03) {
    helpMe.textContent = `${p.placeValue}`;
    let activateOne = genNumbers(2);
    let activateTwo = genNumbers(2);
    let activateThree = genNumbers(2);
    p.wholeNum = p.wholeNum * genNumbers(2);
    if (p.pos == 0) {
      activateOne = 1;
      p.wholeNum = genNumbers(999) + 1;
    }
    if (p.pos == 1) activateTwo = 1;
    if (p.pos == 2) activateThree = 1;
    p.decOne = p.decOne * activateOne;
    p.decTwo = p.decTwo * activateTwo;
    p.decThree = p.decThree * activateThree;
    //bug?
    if (p.decTwo == 5) p.decTwo += 1;
    if (p.decThree == 5) p.decThree += 1;

    // p.num = p.wholeNum + p.decOne + p.decTwo + p.decThree;
    // const displayDec = accDecimal(p.num);
    console.log(p.num, p.wholeNum, p.decOne, p.decTwo, p.decThree);
    // console.log(`Display: ${displayDec}`);
    p.num = `${p.wholeNum}.${p.decOne}${p.decTwo}${p.decThree}`;
    console.log(typeof p.num);
    p.num = p.num * 1;
    console.log(typeof p.num);
    if (p.num < 1) p.num += 1;
    displayProblem.textContent = `${accDecimal(p.num)} ≈ ?`;
  }
  if (level == 4.04) {
    if (p.numOne % 10 == 0) {
      p.numOne += p.numOne + 1;
    }
    displayProblem.textContent = `${accDecimal(p.numOne) / p.numTwo} =`;
  }

  if (level == 4.05) {
    if (p.numOne == 1000) {
      p.numThree = 10;
    }
    if (p.numOne / p.numTwo <= 10) {
      p.numThree = 10;
    }

    if (p.numTwo == 1 || (p.numOne / p.numTwo) % 1 == 0) {
      p.operator = "÷";
    }
    displayProblem.innerHTML = `${p.numOne / p.numTwo} ${p.operator} ${
      p.numThree
    }`;
  }

  // if (level == 4.06) {
  //   if (
  //     (p.unitMeasurement == "m" || p.unitMeasurement == "$") &&
  //     p.option == "2"
  //   ) {
  //     p.numOne = p.numSix;
  //   }
  //   if (p.unitMeasurement == "m") {
  //     p.secondUnitMeasurement = "cm";
  //     displayProblem.innerHTML = `${p.numOne + p.numThree / 100} ${
  //       p.unitMeasurement
  //     }`;
  //   }
  //   if (p.unitMeasurement == "$") {
  //     p.secondUnitMeasurement = "¢";
  //     if (p.numThree % 10 == 0) {
  //       displayProblem.innerHTML = ` ${p.unitMeasurement}${
  //         p.numOne + p.numThree / 100
  //       }0`;
  //     } else {
  //       displayProblem.innerHTML = ` ${p.unitMeasurement}${
  //         p.numOne + p.numThree / 100
  //       }`;
  //     }
  //   }

  //   if (
  //     (p.unitMeasurement == "ℓ" ||
  //       p.unitMeasurement == "kg" ||
  //       p.unitMeasurement == "kg") &&
  //     p.option == "2"
  //   ) {
  //     p.numTwo = p.numSix;
  //   }
  //   if (p.unitMeasurement == "ℓ") {
  //     p.secondUnitMeasurement = "ml";
  //     displayProblem.innerHTML = `${
  //       p.numOne + Math.floor((p.numTwo / 1000) * 1000) / 1000
  //     } ${p.unitMeasurement}`;
  //   }
  //   if (p.unitMeasurement == "km") {
  //     p.secondUnitMeasurement = "m";
  //     displayProblem.innerHTML = `${
  //       p.numOne + Math.floor((p.numTwo / 1000) * 1000) / 1000
  //     } ${p.unitMeasurement}`;
  //   }
  //   if (p.unitMeasurement == "kg") {
  //     p.secondUnitMeasurement = "g";
  //     displayProblem.innerHTML = `${
  //       p.numOne + Math.floor((p.numTwo / 1000) * 1000) / 1000
  //     } ${p.unitMeasurement}`;
  //   }
  //   secondUnitMeasurement.textContent = `${p.secondUnitMeasurement}`;
  // }

  // if (level == 4.07) {
  //   if (
  //     (p.unitMeasurement == "m" || p.unitMeasurement == "$") &&
  //     p.option == "2"
  //   ) {
  //     p.numOne = p.numFive;
  //   }
  //   if (
  //     (p.unitMeasurement == "m" || p.unitMeasurement == "$") &&
  //     p.optionTwo == "2"
  //   ) {
  //     p.numThree = p.numFour;
  //   }
  //   if (p.unitMeasurement == "m") {
  //     p.secondUnitMeasurement = "cm";
  //     displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement}`;
  //   }
  //   if (p.unitMeasurement == "$") {
  //     p.secondUnitMeasurement = "¢";
  //     displayProblem.innerHTML = `${p.numOne * 100 + p.numThree}${
  //       p.secondUnitMeasurement
  //     }`;
  //   }

  //   if (
  //     (p.unitMeasurement == "ℓ" ||
  //       p.unitMeasurement == "kg" ||
  //       p.unitMeasurement == "kg") &&
  //     p.option == "2"
  //   ) {
  //     p.numTwo = p.numSix;
  //   }
  //   if (
  //     (p.unitMeasurement == "ℓ" ||
  //       p.unitMeasurement == "kg" ||
  //       p.unitMeasurement == "kg") &&
  //     p.optionTwo == "2"
  //   ) {
  //     p.numOne = p.numFive;
  //   }
  //   if (p.unitMeasurement == "ℓ") {
  //     p.secondUnitMeasurement = "ml";
  //     displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`;
  //   }
  //   if (p.unitMeasurement == "km") {
  //     p.secondUnitMeasurement = "m";
  //     displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`;
  //   }
  //   if (p.unitMeasurement == "kg") {
  //     p.secondUnitMeasurement = "g";
  //     displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`;
  //   }
  //   secondUnitMeasurement.textContent = `${p.unitMeasurement}`;
  // }

  // if (level == 4.08) {
  //   // level 4.06
  //   if (p.optionFinal == "1") {
  //     if (
  //       (p.unitMeasurement == "m" || p.unitMeasurement == "$") &&
  //       p.option == "2"
  //     ) {
  //       p.numOne = p.numSix;
  //     }
  //     if (p.unitMeasurement == "m") {
  //       p.secondUnitMeasurement = "cm";
  //       displayProblem.innerHTML = `${p.numOne + p.numThree / 100} ${
  //         p.unitMeasurement
  //       }`;
  //     }
  //     if (p.unitMeasurement == "$") {
  //       p.secondUnitMeasurement = "¢";
  //       if (p.numThree % 10 == 0) {
  //         displayProblem.innerHTML = ` ${p.unitMeasurement}${
  //           p.numOne + p.numThree / 100
  //         }0`;
  //       } else {
  //         displayProblem.innerHTML = ` ${p.unitMeasurement}${
  //           p.numOne + p.numThree / 100
  //         }`;
  //       }
  //     }

  //     if (
  //       (p.unitMeasurement == "ℓ" ||
  //         p.unitMeasurement == "kg" ||
  //         p.unitMeasurement == "kg") &&
  //       p.option == "2"
  //     ) {
  //       p.numTwo = p.numSix;
  //     }
  //     if (p.unitMeasurement == "ℓ") {
  //       p.secondUnitMeasurement = "ml";
  //       displayProblem.innerHTML = `${
  //         p.numOne + Math.floor((p.numTwo / 1000) * 1000) / 1000
  //       } ${p.unitMeasurement}`;
  //     }
  //     if (p.unitMeasurement == "km") {
  //       p.secondUnitMeasurement = "m";
  //       displayProblem.innerHTML = `${
  //         p.numOne + Math.floor((p.numTwo / 1000) * 1000) / 1000
  //       } ${p.unitMeasurement}`;
  //     }
  //     if (p.unitMeasurement == "kg") {
  //       p.secondUnitMeasurement = "g";
  //       displayProblem.innerHTML = `${
  //         p.numOne + Math.floor((p.numTwo / 1000) * 1000) / 1000
  //       } ${p.unitMeasurement}`;
  //     }
  //     secondUnitMeasurement.textContent = `${p.secondUnitMeasurement}`;
  //   }
  //   // level 4.07
  //   if (p.optionFinal == "2") {
  //     if (
  //       (p.unitMeasurement == "m" || p.unitMeasurement == "$") &&
  //       p.option == "2"
  //     ) {
  //       p.numOne = p.numFive;
  //     }
  //     if (
  //       (p.unitMeasurement == "m" || p.unitMeasurement == "$") &&
  //       p.optionTwo == "2"
  //     ) {
  //       p.numThree = p.numFour;
  //     }
  //     if (p.unitMeasurement == "m") {
  //       p.secondUnitMeasurement = "cm";
  //       displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numThree} ${p.secondUnitMeasurement}`;
  //     }
  //     if (p.unitMeasurement == "$") {
  //       p.secondUnitMeasurement = "¢";
  //       displayProblem.innerHTML = `${p.numOne * 100 + p.numThree}${
  //         p.secondUnitMeasurement
  //       }`;
  //     }

  //     if (
  //       (p.unitMeasurement == "ℓ" ||
  //         p.unitMeasurement == "kg" ||
  //         p.unitMeasurement == "kg") &&
  //       p.option == "2"
  //     ) {
  //       p.numTwo = p.numSix;
  //     }
  //     if (
  //       (p.unitMeasurement == "ℓ" ||
  //         p.unitMeasurement == "kg" ||
  //         p.unitMeasurement == "kg") &&
  //       p.optionTwo == "2"
  //     ) {
  //       p.numOne = p.numFive;
  //     }
  //     if (p.unitMeasurement == "ℓ") {
  //       p.secondUnitMeasurement = "ml";
  //       displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`;
  //     }
  //     if (p.unitMeasurement == "km") {
  //       p.secondUnitMeasurement = "m";
  //       displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`;
  //     }
  //     if (p.unitMeasurement == "kg") {
  //       p.secondUnitMeasurement = "g";
  //       displayProblem.innerHTML = `${p.numOne} ${p.unitMeasurement} ${p.numTwo}${p.secondUnitMeasurement}`;
  //     }
  //     secondUnitMeasurement.textContent = `${p.unitMeasurement}`;
  //   }
  // }

  if (level == 4.08) {
    if (p.wholeNum == 0 && p.deciOne == 0 && p.deciTwo == 0 && p.deciThree == 0)
      return updateCalc();
    if (p.deciOne == 0 && p.deciTwo == 0) p.deciTwo += 0.01;
    p.firstUnit = p.unitMeasurementPair[0];
    p.secondUnit = p.unitMeasurementPair[1];
    if (p.firstUnit == "m" || p.firstUnit == "$") p.deciThree = 0;
    console.log(p.wholeNum, p.deciOne, p.deciTwo, p.deciThree);
    p.sumOfNum = p.wholeNum + p.deciOne + p.deciTwo + p.deciThree;
    console.log(p.sumOfNum);
    p.sumOfNum = accDecimal(p.wholeNum + p.deciOne + p.deciTwo + p.deciThree);

    if (setting == 1) {
      displayProblem.textContent = `${p.sumOfNum} ${p.firstUnit}  = ? ${p.secondUnit} `;
      if (p.firstUnit == "$") {
        displayProblem.textContent = `${p.firstUnit} ${p.sumOfNum.toFixed(
          2
        )} = ? ${p.secondUnit} `;
      }
    }
    if (setting == 2) {
      let question = p.sumOfNum * 1000;
      if (p.firstUnit == "m" || p.firstUnit == "$") {
        question = p.sumOfNum * 100;
      }
      question = accDecimal(question);
      displayProblem.textContent = `${question} ${p.secondUnit} = ? ${p.firstUnit}`;
      if (p.firstUnit == "$") {
        // if (p.deciTwo != 0) {
        //   displayProblem.textContent = `${question.toFixed(2)} ${
        //     p.secondUnit
        //   } = $ ?`;
        // } else {
        //   displayProblem.textContent = `${question} ${p.secondUnit} = $ ?`;
        // }
        displayProblem.textContent = `${accDecimal(question)} ${
          p.secondUnit
        } = $ ?`;
      }
    }
  }
  if (level == 4.1) {
    if (setting == 1) {
      const halfOne = Math.floor(p.denoOne / 2);
      const halfTwo = Math.floor(p.denoTwo / 2);
      //left side less than half
      if (p.chosen == 0) {
        p.numOne = genNumbers(halfOne) + 1;
        p.numTwo = genNumbers(halfTwo) + Math.round(p.denoTwo / 2);
      }
      if (p.chosen == 1) {
        p.numTwo = genNumbers(halfTwo) + 1;
        p.numOne = genNumbers(halfOne) + Math.round(p.denoOne / 2);
      }
      if (p.numOne == p.numTwo && p.denoOne == p.denoTwo) return updateCalc();
      if (p.denoOne / 2 == p.numOne && p.denoTwo / 2 == p.numTwo)
        return updateCalc();
      numeratorOne.textContent = p.numOne;
      denominatorOne.textContent = p.denoOne;
      numeratorTwo.textContent = p.numTwo;
      denominatorTwo.textContent = p.denoTwo;
      fractionChoice.textContent = p.size;
    }
    if (setting == 2) {
      if (p.denoOneUse == p.denoTwoUse) return updateCalc();
      numeratorOne.textContent = p.numOne;
      denominatorOne.textContent = p.denoOneUse;
      numeratorTwo.textContent = p.numTwo;
      denominatorTwo.textContent = p.denoTwoUse;
      fractionChoice.textContent = p.size;
    }
  }

  if (level == 4.11) {
    // level 4.09
    // if (p.optionFinal == "1") {
    //   threeWholeNumber.textContent = "";
    //   threeNumerator.textContent = "?";
    //   threeDenominator.textContent = "?";
    //   if (p.numTwo >= p.numThree) {
    //     p.numTwo = p.numTwo - 1 - (p.numTwo - p.numThree);
    //   }
    //   twoWholeNumber.textContent = p.numOne;
    //   twoNumerator.textContent = p.numTwo;
    //   twoDenominator.textContent = p.numThree;
    //   arr.push(p.numThree);
    // }
    // // level 4.11
    // if (p.optionFinal == "2") {
    //   threeWholeNumber.textContent = "?";
    //   threeNumerator.textContent = "?";
    //   threeDenominator.textContent = "?";
    //   if (p.numTwo >= p.numThree) {
    //     p.numTwo = p.numTwo - 1 - (p.numTwo - p.numThree);
    //   }
    //   twoWholeNumber.textContent = "";
    //   arr.push(p.numTwo);
    //   p.numTwo = p.numOne * p.numThree + p.numTwo;
    //   twoNumerator.textContent = p.numTwo;
    //   twoDenominator.textContent = p.numThree;
    //   arr.push(p.numThree);
    // }
    if (setting == 1) {
      threeWholeNumber.textContent = "";
      threeNumerator.textContent = "?";
      threeDenominator.textContent = "?";
      if (p.numTwo >= p.numThree) {
        p.numTwo = p.numTwo - 1 - (p.numTwo - p.numThree);
      }
      twoWholeNumber.textContent = p.numOne;
      twoNumerator.textContent = p.numTwo;
      twoDenominator.textContent = p.numThree;
      arr.push(p.numThree);
    }
    if (setting == 2) {
      threeWholeNumber.textContent = "?";
      threeNumerator.textContent = "?";
      threeDenominator.textContent = "?";
      if (p.numTwo >= p.numThree) {
        p.numTwo = p.numTwo - 1 - (p.numTwo - p.numThree);
      }
      twoWholeNumber.textContent = "";
      arr.push(p.numTwo);
      p.numTwo = p.numOne * p.numThree + p.numTwo;
      twoNumerator.textContent = p.numTwo;
      twoDenominator.textContent = p.numThree;
      arr.push(p.numThree);
    }
  }

  if (level == 4.12) {
    if (setting == 1 || (setting == 9 && p.rollChoice == 1)) {
      if (p.numOne == p.numTwo) {
        p.numOne += 1;
      }
      if (p.numOne > p.numTwo) {
        [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
      }
      for (let i = p.numTwo; i > 1; i--) {
        if (p.numOne % i == 0 && p.numTwo % i == 0) {
          p.numOne /= i;
          p.numTwo /= i;
        }
      }
      displayProblem.innerHTML = `${p.numOne}/${p.numTwo} of a number is ${
        p.numOne * p.numMulti
      }.<br>
      What is the number?`;
    }
    if (setting == 2 || (setting == 9 && p.rollChoice == 2)) {
      while (p.nume == p.deno) {
        p.nume = genNumbers(8) + 1;
      }
      let biggest = p.nume;
      if (p.deno > p.nume) {
        biggest = p.deno;
      }
      for (let i = 2; i < biggest; i++) {
        if (p.nume % i == 0 && p.deno % i == 0) {
          p.nume /= i;
          p.deno /= i;
        }
      }

      let value = p.deno * p.numMulti;
      displayProblem.innerHTML = `
      ${p.nume}/${p.deno} of ${value} is ?</br>
      What is that value?
      `;
    }
  }

  // if (level == 4.13) {
  //   if (p.numOne == p.numTwo) {
  //     p.numOne += 1;
  //   }
  //   if (p.numOne > p.numTwo) {
  //     [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
  //   }
  //   for (let i = p.numTwo; i > 1; i--) {
  //     if (p.numOne % i == 0 && p.numTwo % i == 0) {
  //       p.numOne /= i;
  //       p.numTwo /= i;
  //     }
  //   }
  //   displayProblem.innerHTML = `
  //   A has ${p.numTwo * p.numMulti} of something.</br>
  //   A used ${p.numOne}/${p.numTwo} of it.</br>
  //   How much did A ${p.options}?
  //   `;
  // }
  if (level == 4.13) {
    if (p.type == 24) {
      displayProblem.innerHTML = `
      What is the time below in 12 hour clock?</p>
    ${p.hours.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })} ${p.mins.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
    `;
    }
    if (p.type == 12) {
      let time12hr = p.hours;
      if (p.hours > 12) {
        time12hr = p.hours - 12;
        displayProblem.innerHTML = `
        What is the time below in 24 hour clock?</p>
      ${time12hr}.${p.mins.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })} p.m`;
      } else {
        if (p.hours == 0) time12hr = 12;
        displayProblem.innerHTML = `
        What is the time below in 24 hour clock?</p>
      ${time12hr}.${p.mins.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })} a.m
    `;
      }
    }
    console.log(p.hours);
  }
  if (level == 4.14) {
    if (p.numTwo == p.numThree) {
      p.numTwo += 1;
    }
    if (p.numTwo > p.numThree) {
      [p.numThree, p.numTwo] = [p.numTwo, p.numThree];
    }
    for (let i = p.numThree; i > 1; i--) {
      if (p.numTwo % i == 0 && p.numThree % i == 0) {
        p.numThree /= i;
        p.numTwo /= i;
      }
    }

    if (p.option == "v") {
      console.log(p.option);
      if (p.optionTwo == 1) {
        equalSymbol.innerHTML = "";
      }
      if (p.optionTwo == 2) {
        equalSymbol.innerHTML = p.unitMeasurement;
      }
      twoNumerator.classList.remove("line");
      twoWholeNumber.textContent = p.numFour;
      twoNumerator.textContent = "";
      twoDenominator.textContent = "";
      fractionsContainerTwo.style.margin = "50px";
    }

    if (p.option == "r") {
      fractionsContainerTwo.style.margin = "0 25px 15px";
      twoNumerator.classList.add("line");
      if (p.numOne == 0) {
        twoWholeNumber.textContent = "";
      } else {
        twoWholeNumber.textContent = p.numOne;
      }
      twoNumerator.textContent = p.numTwo;
      twoDenominator.textContent = p.numThree;
      equalSymbol.innerHTML = "";
    }
    if (p.option == "f") {
      fractionsContainerTwo.style.margin = "0 25px 15px";
      twoNumerator.classList.add("line");
      if (p.numOne == 0) {
        twoWholeNumber.textContent = "";
      } else {
        twoWholeNumber.textContent = p.numOne;
      }
      twoNumerator.textContent = p.numTwo;
      twoDenominator.textContent = p.numThree;
      equalSymbol.innerHTML = p.unitMeasurement;
    }
  }

  if (level == 4.15) {
    // content

    while (p.numerator == p.denominator) {
      p.numerator = genNumbers(9) + 1;
      p.denominator = genNumbers(9) + 1;
    }

    if (p.numerator > p.denominator) {
      [p.numerator, p.denominator] = swap(p.numerator, p.denominator);
    }

    [p.numerator, p.denominator] = simplify(p.numerator, p.denominator);
    console.log(p.numerator, p.denominator);

    p.firstUnit = p.numerator;
    p.secondUnit = p.denominator - p.numerator;
    p.totalUnit = p.denominator;
    p.differenceUnit = Math.abs(p.numerator - p.secondUnit);

    if (p.firstUnit == p.secondUnit) {
      console.log("Updated");
      return updateProblems();
    }
    if (p.secondSelection == 3) {
      p.identity = genNumbers(2);
    }
    // let second = type[identity][p.secondSelection]
    while (p.lastSelection == p.secondSelection)
      p.lastSelection = [genNumbers(3)];

    let last = p.type[p.identity][p.lastSelection];
    if (p.lastSelection == 0) p.lastUnits = p.firstUnit;
    if (p.lastSelection == 1) p.lastUnits = p.secondUnit;
    if (p.lastSelection == 2) p.lastUnits = p.totalUnit;

    if (p.secondSelection == 0) {
      p.value = p.firstUnit * (genNumbers(5) + 5);
    } else if (p.secondSelection == 1) {
      p.value = p.secondUnit * (genNumbers(5) + 5);
    } else if (p.secondSelection == 2) {
      p.value = p.totalUnit * (genNumbers(5) + 5);
    } else {
      p.value = p.differenceUnit * (genNumbers(5) + 5);
    }
    if (p.secondSelection != 3) {
      p.secondSelection = p.type[p.identity][p.secondSelection];
    }
    console.log(`First Selection: ${p.firstSelection}, ${p.numerator} units`);
    console.log(`Second Selection: ${p.secondSelection}, ${p.value}`);
    console.log(`Last Selection: ${p.lastSelection}, ${p.denominator}`);

    if ((p.identity == 0 || p.identity == 1) && p.secondSelection != 3) {
      displayProblem.innerHTML = `
     ${p.firstSelection == 0 ? p.firstUnit : p.secondUnit}/${
        p.denominator
      } of the ${p.type[p.identity][2]} are ${
        p.type[p.identity][p.firstSelection]
      }.</br>
     There are ${p.value} ${p.secondSelection}.</br>
     How many ${last} are there?
    `;
    } else if ((p.identity == 2 || p.identity == 3) && p.secondSelection != 3) {
      displayProblem.innerHTML = `
     ${p.firstSelection == 0 ? p.firstUnit : p.secondUnit}/${
        p.denominator
      } of the ${p.type[p.identity][2]} was ${
        p.type[p.identity][p.firstSelection]
      }.</br>
     ${
       p.secondSelection == "total money"
         ? `There were $${p.value} at first.`
         : `$${p.value} was ${p.secondSelection}.`
     }</br>
     ${
       p.lastSelection == 2
         ? `How much were there at first?`
         : `How much was ${last}?`
     }
    `;
    } else if ((p.identity == 0 || p.identity == 1) && p.secondSelection == 3) {
      console.log("here");
      displayProblem.innerHTML = `
       ${p.firstSelection == 0 ? p.firstUnit : p.secondUnit}/${
        p.denominator
      } of the ${p.type[p.identity][2]} are ${
        p.type[p.identity][p.firstSelection]
      }.</br>
       There are ${p.value} ${p.firstUnit > p.secondUnit ? "more" : "less"} ${
        p.type[p.identity][0]
      } than ${p.type[p.identity][1]} </br>
       How many ${last} are there?
      `;
    } else {
      return updateProblems();
    }
  }

  if (level == 4.16) {
    if (p.placeValue == "tens" && p.numOne < 100) {
      while (p.numOne > 100) {
        p.numOne += 10;
      }
    }
    if (p.placeValue == "hundreds" && p.numOne < 1000) {
      while (p.numOne > 1000) {
        p.numOne += 100;
      }
    }
    if (p.placeValue == "thousands" && p.numOne < 10000) {
      while (p.numOne > 10000) {
        p.numOne += 1000;
      }
    }

    if (p.placeValue == "tens") {
      p.numOne = Math.round(p.numOne / 10) * 10;
    }
    if (p.placeValue == "hundreds") {
      p.numOne = Math.round(p.numOne / 100) * 100;
    }
    if (p.placeValue == "thousands") {
      p.numOne = Math.round(p.numOne / 1000) * 1000;
    }

    displayProblem.innerHTML = `
    <u>${p.choice}</u> value before rounding off to the</br> 
    <u>${p.placeValue}</u> place?</br>
    <br>
    _______ ≈ ${p.numOne}`;

    if (p.choice == "Smallest") {
      if (p.placeValue == "tens") {
        p.numOne = p.numOne - 10 + 5;
      }
      if (p.placeValue == "hundreds") {
        p.numOne = p.numOne - 100 + 50;
      }
      if (p.placeValue == "thousands") {
        p.numOne = p.numOne - 1000 + 500;
      }
    }
    if (p.choice == "Largest") {
      if (p.placeValue == "tens") {
        p.numOne = p.numOne + 4;
      }
      if (p.placeValue == "hundreds") {
        p.numOne = p.numOne + 49;
      }
      if (p.placeValue == "thousands") {
        p.numOne = p.numOne + 499;
      }
    }
  }

  if (level == 4.17) {
    const gridX = 380;
    const gridY = 210;
    ctx.save();
    // vertical grid
    for (let i = 0; i < gridX; i += 30) {
      ctx.setLineDash([1, 1]);
      ctx.beginPath();
      ctx.moveTo(20 + i, 30);
      ctx.lineTo(20 + i, gridY);
      ctx.stroke();
    }
    // horizontal grid
    for (let i = 0; i < gridY; i += 30) {
      ctx.setLineDash([1, 1]);
      ctx.beginPath();
      ctx.moveTo(20, 30 + i);
      ctx.lineTo(gridX, 30 + i);
      ctx.stroke();
    }

    while (arr.length > 0) {
      const chosenAlp = arr[genNumbers(arr.length - 1)];
      const index = arr.indexOf(chosenAlp);
      arr2.push(chosenAlp);
      arr.splice(index, 1);
      console.log(arr, arr2);
    }

    ctx.font = "1em serif";

    arr3.push(arr2[1]);
    arr3.push(arr2[2]);
    arr3.push(arr2[5]);
    arr3.push(arr2[8]);
    arr3.push(arr2[7]);
    arr3.push(arr2[6]);
    arr3.push(arr2[3]);
    arr3.push(arr2[0]);
    console.log(arr3);

    if (p.roll == 1) {
      ctx.fillText(`_____ is ${p.compass} of ${arr2[4]}`, 20, 20);
    } else {
      let a = 0;
      for (let i = 0; i < arr3.length; i++) {
        if (p.compass == compassArr[a]) {
          p.choice = arr3[a];
        }
        a++;
      }
      ctx.fillText(`${p.choice} is ${p.compass} of _____`, 20, 20);
    }

    ctx.save();

    ctx.translate(200, 137.5);
    // fill in text
    ctx.font = "1.5em serif";
    let a = 0;
    ctx.fillStyle = "red";
    const alignmentX = -7;
    const alignmentY = -11;
    for (let i = -60; i <= 60; i += 60) {
      ctx.fillText(`${arr2[a]}`, i + alignmentX, -60 + alignmentY);
      ctx.fillText(`${arr2[3 + a]}`, i + alignmentX, 0 + alignmentY);
      ctx.fillText(`${arr2[6 + a]}`, i + alignmentX, 60 + alignmentY);
      a++;
    }

    ctx.restore();

    ctx.restore();
  }

  if (level == 4.18) {
    console.log(arr2);
    const gridX = 380;
    const gridY = 210;
    ctx.font = "1em serif";
    if (p.roll == 1) {
      if (p.angleTurn == 180 || p.angleTurn == 360) {
        ctx.fillText(
          `Person O facing ${p.choice}, turn ${p.angleTurn}°.`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `Person O facing ${p.choice}, turn ${p.angleTurn}° ${p.direction}.`,
          20,
          20
        );
      }
      ctx.fillText(`Now facing ___?`, 20, 40);
    } else {
      if (p.angleTurn == 180 || p.angleTurn == 360) {
        ctx.fillText(
          `After turning ${p.angleTurn}°, person O is facing ${p.choice}`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `After turning ${p.angleTurn}° ${p.direction}, person O is facing ${p.choice}`,
          20,
          20
        );
      }
      ctx.fillText(`Facing Point ___ at first?`, 20, 40);
    }

    ctx.save();
    ctx.translate(200, 137.5);

    ctx.save();
    // horizontal
    ctx.setLineDash([1, 1]);
    ctx.beginPath();
    ctx.moveTo(-60, 0);
    ctx.lineTo(60, 0);
    ctx.stroke();

    // vertical
    ctx.setLineDash([1, 1]);
    ctx.beginPath();
    ctx.moveTo(0, -60);
    ctx.lineTo(0, 60);
    ctx.stroke();

    // diagonal from left
    ctx.setLineDash([1, 1]);
    ctx.beginPath();
    ctx.moveTo(-60, -60);
    ctx.lineTo(60, 60);
    ctx.stroke();

    // diagonal from right
    ctx.setLineDash([1, 1]);
    ctx.beginPath();
    ctx.moveTo(60, -60);
    ctx.lineTo(-60, 60);
    ctx.stroke();

    ctx.restore();

    ctx.save();

    // fill in text
    ctx.font = "1.5em serif";
    let a = 0;
    ctx.fillStyle = "red";
    const alignmentX = -8;
    const alignmentY = 7;
    for (let i = -60; i <= 60; i += 60) {
      ctx.fillText(`${arr[a]}`, i + alignmentX, -60 + alignmentY);
      ctx.fillText(`${arr[3 + a]}`, i + alignmentX, 0 + alignmentY);
      ctx.fillText(`${arr[6 + a]}`, i + alignmentX, 60 + alignmentY);
      a++;
    }

    ctx.restore();

    ctx.restore();

    const index = arr2.indexOf(p.choice);

    if (p.roll == 1) {
      if (p.direction == "anti-clockwise") {
        p.angleTurn = 360 - p.angleTurn;
      }
      const intervalsTurned = p.angleTurn / 45;
      p.finalIndex = index + intervalsTurned;
      if (p.finalIndex == 8) {
        p.finalIndex = 0;
      }
      if (p.finalIndex > 8) {
        p.finalIndex -= 8;
      }
    } else {
      if (p.direction == "anti-clockwise") {
        p.angleTurn = 360 - p.angleTurn;
      }
      const intervalsTurned = p.angleTurn / 45;
      p.finalIndex = index - intervalsTurned;
      if (p.finalIndex == 8) {
        p.finalIndex = 0;
      }
      if (p.finalIndex < 0) {
        p.finalIndex += 8;
      }
    }
  }

  if (level == 4.19) {
    ctx.font = "1em serif";
    ctx.save();
    // square
    if (p.shapeRoll == "Square") {
      if (p.squareRoll == 1 || p.squareRoll == 2) {
        ctx.fillText(`What is ∠a.`, 20, 20);
      } else {
        ctx.fillText(`What is the total angle of the Square?`, 20, 20);
      }
      ctx.translate(200, 137.5);
      const squareCoord2 = p.coordSquare / 2;
      ctx.beginPath();
      ctx.rect(
        -squareCoord2,
        -squareCoord2,
        squareCoord2 * 2,
        squareCoord2 * 2
      );
      ctx.stroke();

      if (p.squareRoll == 1) {
        ctx.beginPath();
        ctx.moveTo(-squareCoord2, squareCoord2);
        ctx.lineTo(squareCoord2, -squareCoord2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          -squareCoord2,
          squareCoord2,
          20,
          (315 * Math.PI) / 180,
          2 * Math.PI
        );
        ctx.stroke();

        ctx.font = "1em serif";
        ctx.fillText(`a`, -squareCoord2 + 20, squareCoord2 - 5);
      }

      if (p.squareRoll == 2) {
        ctx.beginPath();
        ctx.rect(-squareCoord2, squareCoord2 - 10, 10, 10);
        ctx.stroke();
        ctx.font = "1em serif";
        ctx.fillText(`a`, -squareCoord2 + 15, squareCoord2 - 5);
      }
    }

    if (p.shapeRoll == "Rectangle") {
      if (p.rectRoll == 1) {
        ctx.fillText(`What is ∠b.`, 20, 20);
      }
      if (p.rectRoll == 2) {
        ctx.fillText(`Find ∠b.`, 20, 20);
      }
      if (p.rectRoll == 3) {
        ctx.fillText(`What is the total angle of the Rectangle?`, 20, 20);
      }

      let rectLength = genNumbers(50) + 50;
      let rectBreadth = rectLength * (((genNumbers(15) + 7) * 10) / 100);
      let rectHypo = Math.sqrt(
        rectLength * rectLength + rectBreadth * rectBreadth
      );
      p.angle = Math.asin(rectBreadth / rectHypo);
      p.angleDegrees = Math.round((p.angle * 180) / Math.PI);

      console.log(rectLength, rectBreadth, rectHypo, p.angle, p.angleDegrees);
      ctx.translate(200, 137.5);
      ctx.beginPath();
      ctx.rect(-p.coordRect1 / 2, p.coordRect2 / 2, rectLength, -rectBreadth);
      ctx.stroke();

      if (p.rectRoll == 1) {
        ctx.beginPath();
        ctx.rect(-p.coordRect1 / 2, p.coordRect2 / 2, 10, -10);
        ctx.stroke();

        ctx.fillText(`b`, -p.coordRect1 / 2 + 15, p.coordRect2 / 2 - 5);
      }

      if (p.rectRoll == 2) {
        ctx.beginPath();
        ctx.moveTo(-p.coordRect1 / 2, p.coordRect2 / 2);
        ctx.lineTo(
          -p.coordRect1 / 2 + rectLength,
          p.coordRect2 / 2 - rectBreadth
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          -p.coordRect1 / 2,
          p.coordRect2 / 2,
          10,
          ((360 - p.angleDegrees) * Math.PI) / 180,
          2 * Math.PI
        );
        ctx.stroke();

        ctx.font = "1em serif";
        ctx.fillText(
          `${p.angleDegrees}°`,
          -p.coordRect1 / 2 + 15,
          p.coordRect2 / 2 - 5
        );

        ctx.save();
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(
          -p.coordRect1 / 2,
          p.coordRect2 / 2,
          8,
          1.5 * Math.PI,
          ((360 - p.angleDegrees) * Math.PI) / 180
        );
        ctx.fill();
        ctx.restore();

        ctx.fillText(`b`, -p.coordRect1 / 2, p.coordRect2 / 2 - 15);
      }
    }
    if (p.shapeRoll == "straight") {
      ctx.save();
      ctx.translate(200, 137.5);
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.restore();
      if (p.straightRoll == 1) {
        ctx.fillText(`What is the angle on a straight line?`, 20, 20);
      }
      if (p.straightRoll == 2) {
        ctx.fillText(`Find ∠c`, 20, 20);
      }

      ctx.translate(200, 137.5);

      ctx.beginPath();
      ctx.moveTo(-150, 0);
      ctx.lineTo(150, 0);
      ctx.stroke();

      if (p.straightRoll == 2) {
        ctx.save();
        ctx.rotate((-p.angleStraight * Math.PI) / 180);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        ctx.restore();

        ctx.arc(
          0,
          0,
          10,
          ((360 - p.angleStraight) * Math.PI) / 180,
          2 * Math.PI
        );
        ctx.stroke();
        if (p.angleStraight < 20) {
          ctx.fillText(`${p.angleStraight}°`, 90, -1);
        } else {
          ctx.fillText(`${p.angleStraight}°`, 10, -5);
        }

        ctx.arc(
          0,
          0,
          15,
          1 * Math.PI,
          ((360 - p.angleStraight) * Math.PI) / 180
        );
        ctx.stroke();
        ctx.fillText(`c`, -30, -1);
      }
    }

    if (p.shapeRoll == "circle") {
      ctx.save();
      ctx.translate(200, 137.5);
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.restore();
      if (p.circleRoll == 1) {
        ctx.fillText(`What is the angle of a full circle?`, 20, 20);
      }
      if (p.circleRoll == 2) {
        ctx.fillText(`Find ∠d`, 20, 20);
      }

      ctx.save();
      ctx.translate(200, 137.5);
      if (p.circleRoll == "1") {
        ctx.beginPath();
        ctx.arc(0, 0, 110, 0, 2 * Math.PI);
        ctx.stroke();
      }
      if (p.circleRoll == "2") {
        ctx.beginPath();
        ctx.arc(0, 0, 20, (p.angleCircle * Math.PI) / 180, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();

        ctx.save();
        ctx.rotate((p.angleCircle * Math.PI) / 180);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, (p.angleCircle * Math.PI) / 180);
        ctx.stroke();

        ctx.fillText(`${p.angleCircle}`, 25, 12);
        if (p.angleCircle > 340) {
          ctx.fillText(`d`, 100, -1);
        } else {
          ctx.fillText(`d`, 25, -3);
        }
      }
      ctx.restore();
    }
    ctx.restore();
  }

  if (level == 4.2) {
    ctx.save();
    ctx.font = "1em serif";
    ctx.fillText("What is the perimeter of the figure?", 20, 20);
    ctx.translate(30, 240);

    if (p.rollType == 1) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -p.topOne);
      ctx.lineTo(p.topOne, -p.topOne);
      ctx.lineTo(p.topOne, -p.sideOne);
      ctx.lineTo(p.topOne + p.sideOne, -p.sideOne);
      ctx.lineTo(p.topOne + p.sideOne, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([3, 3]);
      ctx.lineTo(p.topOne, -p.sideOne);
      ctx.lineTo(p.topOne, 0);
      ctx.stroke();
      ctx.restore();

      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(-5, -p.topOne);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-10, -10);
      ctx.lineTo(-5, 0);
      ctx.lineTo(0, -10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-10, -p.topOne + 10);
      ctx.lineTo(-5, -p.topOne);
      ctx.lineTo(0, -p.topOne + 10);
      ctx.stroke();

      ctx.fillText(`${p.topOne} cm`, 5, -p.topOne / 2);

      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(p.topOne + p.sideOne, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(0, 5);
      ctx.lineTo(10, 10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p.topOne + p.sideOne - 10, 0);
      ctx.lineTo(p.topOne + p.sideOne, 5);
      ctx.lineTo(p.topOne + p.sideOne - 10, 10);
      ctx.stroke();

      p.lengthTotal = p.topOne + p.sideOne;
      ctx.fillText(`${p.lengthTotal} cm`, p.lengthTotal / 2 - 10, -3);
    }

    if (p.rollType == 2) {
      ctx.translate(100, -50);
      ctx.beginPath();
      // 1
      ctx.moveTo(p.smallSquare, 0);
      // 2
      ctx.lineTo(p.smallSquare, -p.smallSquare);
      // 3
      ctx.lineTo(0, -p.smallSquare);
      // 4
      ctx.lineTo(0, -p.bigSquare + p.smallSquare);
      // 5
      ctx.lineTo(p.smallSquare, -p.bigSquare + p.smallSquare);
      // 6
      ctx.lineTo(p.smallSquare, -p.bigSquare);
      // 7
      ctx.lineTo(p.bigSquare - p.smallSquare, -p.bigSquare);
      // 8
      ctx.lineTo(p.bigSquare - p.smallSquare, -p.bigSquare + p.smallSquare);
      // 9
      ctx.lineTo(p.bigSquare, -p.bigSquare + p.smallSquare);
      // 10
      ctx.lineTo(p.bigSquare, -p.smallSquare);
      // 11
      ctx.lineTo(p.bigSquare - p.smallSquare, -p.smallSquare);
      // 12
      ctx.lineTo(p.bigSquare - p.smallSquare, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(-5, -p.bigSquare);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-10, -10);
      ctx.lineTo(-5, 0);
      ctx.lineTo(0, -10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-10, -p.bigSquare + 10);
      ctx.lineTo(-5, -p.bigSquare);
      ctx.lineTo(0, -p.bigSquare + 10);
      ctx.stroke();

      ctx.fillText(`${p.bigSquare} cm`, -55, -p.bigSquare / 2);

      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(p.bigSquare, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(0, 5);
      ctx.lineTo(10, 10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p.bigSquare - 10, 0);
      ctx.lineTo(p.bigSquare, 5);
      ctx.lineTo(p.bigSquare - 10, 10);
      ctx.stroke();
      ctx.fillText(`${p.bigSquare} cm`, p.bigSquare / 2 - 20, +22);
    }

    if (p.rollType == 3) {
      ctx.translate(30, -50);
      ctx.beginPath();
      // 1
      ctx.moveTo(p.smallSquare, 0);
      // 2
      ctx.lineTo(p.smallSquare, -p.smallSquare);
      // 3
      ctx.lineTo(0, -p.smallSquare);
      // 4
      ctx.lineTo(0, -p.bigSquare + p.smallSquare);
      // 5
      ctx.lineTo(p.smallSquare, -p.bigSquare + p.smallSquare);
      // 6
      ctx.lineTo(p.smallSquare, -p.bigSquare);
      // 7
      ctx.lineTo(p.rectangle - p.smallSquare, -p.bigSquare);
      // 8
      ctx.lineTo(p.rectangle - p.smallSquare, -p.bigSquare + p.smallSquare);
      // 9
      ctx.lineTo(p.rectangle, -p.bigSquare + p.smallSquare);
      // 10
      ctx.lineTo(p.rectangle, -p.smallSquare);
      // 11
      ctx.lineTo(p.rectangle - p.smallSquare, -p.smallSquare);
      // 12
      ctx.lineTo(p.rectangle - p.smallSquare, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(-5, -p.bigSquare);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-10, -10);
      ctx.lineTo(-5, 0);
      ctx.lineTo(0, -10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-10, -p.bigSquare + 10);
      ctx.lineTo(-5, -p.bigSquare);
      ctx.lineTo(0, -p.bigSquare + 10);
      ctx.stroke();

      ctx.fillText(`${p.bigSquare} cm`, 0, -p.bigSquare / 2);

      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(p.rectangle, 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(0, 5);
      ctx.lineTo(10, 10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p.rectangle - 10, 0);
      ctx.lineTo(p.rectangle, 5);
      ctx.lineTo(p.rectangle - 10, 10);
      ctx.stroke();
      ctx.fillText(`${p.rectangle} cm`, p.rectangle / 2 - 20, +22);
    }
    ctx.restore();
  }

  if (level == 4.21) {
    if (difficulty > 4) {
      difficulty = 4;
    }
    if (difficulty == 4) {
      p.rollType = genNumbers(4);
    }

    if ((p.rollType > 2 && difficulty == 4) || difficulty >= 2) {
      calculatorSymbol.classList.remove("hidden");
    } else {
      calculatorSymbol.classList.add("hidden");
    }

    p.length =
      (genNumbers(10) + 1) * p.dimension + (genNumbers(p.dimension) + 1);
    p.breadth = (genNumbers(10) + 1) * p.dimension + genNumbers(p.dimension);
    p.height = (genNumbers(10) + 1) * p.dimension + genNumbers(p.dimension);
    console.log(p.dimension, p.length, p.breadth, p.height);

    if (
      difficulty == 0 ||
      difficulty == 1 ||
      p.rollType == 0 ||
      p.rollType == 1
    ) {
      p.length =
        (genNumbers(10) + 1) * p.dimension +
        (genNumbers(p.dimension) + 1) * difficulty;
      p.breadth =
        (genNumbers(10) + 1) * p.dimension +
        genNumbers(p.dimension) * difficulty;
      displayProblem.innerHTML = `
      How many ${p.dimension} cm <u>squares</u> can be cut out from a rectangle with a dimension of </br>
      ${p.length} cm by ${p.breadth} cm?
      `;
    }
    if (difficulty == 2 || p.rollType == 2) {
      displayProblem.innerHTML = `
      How many ${p.dimension} cm <u>cubes</u> can be cut out from a cuboid with a dimension of </br>
      ${p.length} cm by ${p.breadth} cm by ${p.height}cm?
      `;
    }
    if (difficulty == 3 || p.rollType == 3) {
      p.dimension = genNumbers(5) + 1;
      p.length =
        ((genNumbers(10) + 1) * p.dimension + (genNumbers(p.dimension) + 1)) *
        2;
      p.breadth =
        ((genNumbers(10) + 1) * p.dimension + genNumbers(p.dimension)) * 2;
      displayProblem.innerHTML = `
      How many <u>circles</u> with a radius of ${p.dimension} cm can be cut out from a rectangle with a dimension of </br>
      ${p.length} cm by ${p.breadth} cm?
      `;
    }
  }

  // if (level == 4.22) {
  //   for (let i = p.numThree; i > 1; i--) {
  //     if (p.numTwo % i == 0 && p.numThree % i == 0) {
  //       p.numTwo /= i;
  //       p.numThree /= i;
  //     }
  //   }
  //   console.log(p.options);
  //   if (p.options == 1) {
  //     twoNumerator.classList.add("line");
  //     twoWholeNumber.textContent = p.numOne;
  //     twoNumerator.textContent = p.numTwo;
  //     twoDenominator.textContent = p.numThree;
  //     equalSymbol.textContent = "x";
  //     threeWholeNumber.textContent = p.numFour;
  //     threeNumerator.textContent = "";
  //     threeDenominator.textContent = "";
  //     threeNumerator.classList.remove("line");
  //   }
  //   if (p.options == 2) {
  //     threeNumerator.classList.add("line");
  //     threeWholeNumber.textContent = p.numOne;
  //     threeNumerator.textContent = p.numTwo;
  //     threeDenominator.textContent = p.numThree;
  //     equalSymbol.textContent = "x";
  //     twoWholeNumber.textContent = p.numFour;
  //     twoNumerator.textContent = "";
  //     twoDenominator.textContent = "";
  //     twoNumerator.classList.remove("line");
  //   }
  // }
  if (level == 4.22) {
    ctx.save();
    ctx.font = "1em serif";
    // ctx.stroke();
    let side = 40;
    ctx.fillText("What is the perimeter of the figure?", 20, 20);
    ctx.translate((400 - p.layerOne * side) / 2, 50);
    // layer 1
    ctx.save();
    let firstTranslate = genNumbers(side);
    ctx.translate(firstTranslate, 0);
    if (p.layerOne >= 1) {
      ctx.strokeRect(0, 0, side, side);
    }
    if (p.layerOne >= 2) {
      ctx.strokeRect(side, 0, side, side);
    }
    if (p.layerOne >= 3) {
      ctx.strokeRect(side * 2, 0, side, side);
    }
    if (p.layerOne >= 4) {
      ctx.strokeRect(side * 3, 0, side, side);
    }
    if (p.layerOne == 5) {
      ctx.strokeRect(side * 4, 0, side, side);
    }

    ctx.restore();
    // layer 2
    ctx.save();
    let secondTranslate = firstTranslate + genNumbers(side);
    p.layerTwo = genNumbers(p.layerOne);
    while (p.layerTwo == 0) {
      p.layerTwo = genNumbers(p.layerOne);
    }
    ctx.translate(secondTranslate, 0);
    if (p.layerTwo >= 1) {
      ctx.strokeRect(0, side, side, side);
    }
    if (p.layerTwo >= 2) {
      ctx.strokeRect(side, side, side, side);
    }
    if (p.layerTwo >= 3) {
      ctx.strokeRect(side * 2, side, side, side);
    }
    if (p.layerTwo >= 4) {
      ctx.strokeRect(side * 3, side, side, side);
    }
    ctx.restore();
    // layer 3
    ctx.save();
    let thirdTranslate = secondTranslate + genNumbers(side);
    p.layerThree = genNumbers(p.layerTwo);
    ctx.translate(thirdTranslate, 0);
    if (p.layerThree >= 1) {
      ctx.strokeRect(0, side * 2, side, side);
    }
    if (p.layerThree >= 2) {
      ctx.strokeRect(side, side * 2, side, side);
    }
    if (p.layerThree >= 3) {
      ctx.strokeRect(side * 2, side * 2, side, side);
    }
    if (p.layerThree >= 4) {
      ctx.strokeRect(side * 3, side * 2, side, side);
    }
    ctx.restore();
    // layer 4
    let fourthTranslate = thirdTranslate + genNumbers(side);
    p.layerFour = genNumbers(p.layerThree);
    ctx.save();
    ctx.translate(fourthTranslate, 0);
    if (p.layerFour >= 1) {
      ctx.strokeRect(0, side * 3, side, side);
    }
    if (p.layerFour >= 2) {
      ctx.strokeRect(side, side * 3, side, side);
    }
    if (p.layerFour >= 3) {
      ctx.strokeRect(side * 2, side * 3, side, side);
    }
    if (p.layerFour >= 4) {
      ctx.strokeRect(side * 3, side * 3, side, side);
    }
    ctx.restore();
    ctx.restore();
  }

  // DISPLAY
  //PARALLEL OVERLAPPING
  if (level == 4.23) {
    if (p.type == "statement") {
      const length = p.breadth * p.unitSentence;
      p.area = p.breadth * length;
      p.perimeter = (p.breadth + length) * 2;
      normalDisplay();
      displayProblem.innerHTML = `The length of a rectangle is ${p.unitSentence} times the breadth.</p>
      `;
      if (p.question == "area") {
        const html = `
        The perimeter of the rectangle is ${p.perimeter} cm.</p>
        What is the area?
        `;
        displayProblem.insertAdjacentHTML("beforeend", html);
      } else {
        const html = `
        The area of the rectangle is ${p.area} cm<sup>2</sup>.</p>
        What is the perimeter?
        `;
        displayProblem.insertAdjacentHTML("beforeend", html);
      }
    }
    if (p.type == "figure") {
      drawingDisplay();
      p.breadth = genNumbers(2) + 3;
      const height = 90 + p.breadth + p.breadth * 10 * p.unitSentence + 80;
      if (height > 275) {
        canvas.setAttribute("height", height);
      } else {
        canvas.setAttribute("height", "275px");
      }

      const length = p.breadth * p.unitSentence;
      p.area = p.breadth * length;
      p.perimeter = (p.breadth + length) * 2;

      parallelOverlapping(p.breadth, p.unitSentence, p.question);
    }
  }

  if (level == 4.24) {
    if (p.oneValue == p.twoValue) {
      p.twoValue += 1;
    }
    if (p.rollTypeClue == "11") {
      if (p.rollTypeQnSyn == "isof") {
        displayProblem.innerHTML = `
      ${p.objectOne} is ${p.oneValue}/${p.twoValue} of ${p.objectTwo}.</br>
      What fraction is ${
        p.rollTypeQn11 == "1T"
          ? `${p.objectOne} of ${p.objectOne} and ${p.objectTwo}.`
          : `${p.objectOne} and ${p.objectTwo} of ${p.objectOne}.`
      }
      `;
      }
      if (p.rollTypeQnSyn == "ofis") {
        displayProblem.innerHTML = `
        ${p.objectOne} is ${p.oneValue}/${p.twoValue} of ${p.objectTwo}.</br>
        What fraction of ${
          p.rollTypeQn11 == "1T"
            ? `${p.objectOne} is ${p.objectOne} and ${p.objectTwo}.`
            : `${p.objectOne} and ${p.objectTwo} is ${p.objectOne}.`
        }
        `;
      }
    }
    if (p.rollTypeClue == "1T") {
      if (p.rollTypeQnSyn == "isof") {
        displayProblem.innerHTML = `
        ${p.objectOne} is ${p.oneValue}/${p.twoValue + p.oneValue} of ${
          p.objectOne
        } and ${p.objectTwo}.</br>
        What fraction is ${
          p.rollTypeQn1T == "AB"
            ? `${p.objectOne} of ${p.objectTwo}.`
            : `${p.objectTwo} of ${p.objectOne}.`
        }
        `;
      }
      if (p.rollTypeQnSyn == "ofis") {
        displayProblem.innerHTML = `
        ${p.objectOne} is ${p.oneValue}/${p.twoValue + p.oneValue} of ${
          p.objectOne
        } and ${p.objectTwo}.</br>
        What fraction of ${
          p.rollTypeQn1T == "AB"
            ? `${p.objectOne} is ${p.objectTwo}.`
            : `${p.objectTwo} is ${p.objectOne}.`
        }
        `;
      }
    }
  }

  if (level == 4.25) {
    let a = [-1, 1][genNumbers(2)];

    let maxLength = [p.squareOne, p.squareTwo, p.squareThree, p.squareFour];

    // arrange descending
    maxLength.sort(function (a, b) {
      return b - a;
    });

    let canvasHeight = `${(maxLength[0] * 2 + 55 + 30).toString()}px`;
    canvas.setAttribute("height", canvasHeight);

    ctx.save();
    if (p.roll == 2) {
      p.length = p.squareOne + p.squareTwo;
    }
    if (p.roll == 3) {
      p.length = p.squareOne + p.squareTwo + p.squareThree;
    }
    if (p.roll == 4) {
      p.length = p.squareOne + p.squareTwo + p.squareThree + p.squareFour;
    }
    ctx.font = "1em serif";

    if (p.question == "perimeter") {
      ctx.fillText(`The length of AB is ${p.length} cm.`, 15, 15);
      ctx.fillText(`What is the perimeter of the figure?`, 15, 35);
    }
    if (p.question == "AB") {
      ctx.fillText(
        `The perimeter of the figure is ${p.length * p.roll} cm.`,
        15,
        15
      );
      ctx.fillText(`What is the length of AB?`, 15, 35);
    }
    ctx.fillText(`The figure is made up of ${p.roll} squares.`, 15, 55);

    if (p.roll == 2) {
      ctx.translate(
        (400 - p.squareOne - p.squareTwo) / 2,
        55 + maxLength[0] + 10
      );
    }
    if (p.roll == 3) {
      ctx.translate(
        (400 - p.squareOne - p.squareTwo - p.squareThree) / 2,
        55 + maxLength[0] + 10
      );
    }
    if (p.roll == 4) {
      ctx.translate(
        (400 - p.squareOne - p.squareTwo - p.squareThree - p.squareFour) / 2,
        55 + maxLength[0] + 10
      );
    }

    ctx.beginPath();
    ctx.arc(0, 0, 2, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 0, p.squareOne, a * p.squareOne);
    ctx.stroke();
    ctx.fillText("A", -15, 3);

    if (p.roll > 1) {
      ctx.beginPath();
      ctx.rect(p.squareOne, 0, p.squareTwo, a * -1 * p.squareTwo);
      ctx.stroke();
      if (p.roll == 2) {
        ctx.fillText("B", p.squareOne + p.squareTwo + 3, 3);
      }
    }

    if (p.roll > 2) {
      ctx.beginPath();
      ctx.rect(p.squareOne + p.squareTwo, 0, p.squareThree, a * p.squareThree);
      ctx.stroke();
      if (p.roll == 3) {
        ctx.fillText("B", p.squareOne + p.squareTwo + p.squareThree + 3, 3);
      }
    }

    if (p.roll > 3) {
      ctx.beginPath();
      ctx.rect(
        p.squareOne + p.squareTwo + p.squareThree,
        0,
        p.squareFour,
        a * -1 * p.squareFour
      );
      ctx.stroke();
      if (p.roll == 4) {
        ctx.fillText(
          "B",
          p.squareOne + p.squareTwo + p.squareThree + p.squareFour + 3,
          3
        );
      }
    }

    ctx.restore();
  }

  if (level == 4.26) {
    if (((p.oneSideNoCorners + 2) * 4) % 4 != 0) return updateCalc();
    let objects = ["chairs", "boxes", "tables"][genNumbers(3)];
    if (p.version == 0) {
      displayProblem.innerHTML = `
      There are ${p.oneSideNoCorners + 2} ${objects} on 1 side of a square.</p>
      How many ${objects} would be needed to form a full square?</p>
      
      `;
    }
    if (p.version == 1) {
      displayProblem.innerHTML = `
      There are ${p.oneSideNoCorners + 2} ${objects} on 1 side of a square.</p>
      How many ${objects} would be needed to form 3 sides of a square?</p>
      
      `;
    }
    if (p.version == 2) {
      let fullSquare = p.oneSideNoCorners * 4 + 4;
      displayProblem.innerHTML = `
        ${fullSquare} ${objects} is used to form 4 sides of a square.</p>
        How many ${objects} would be needed to form 1 side of the square?</p>
        
        `;
    }
    if (p.version == 3) {
      let fullSquare = p.oneSideNoCorners * 4 + 4;
      displayProblem.innerHTML = `
      ${fullSquare} ${objects} is used to form 4 sides of a square.</p>
      How many ${objects} would be needed to form 3 sides of the square?</p>
      
      `;
    }
  }
  // if (level == 5.0) {
  //   let alignXText = 15;
  //   ctx.font = "1em serif";
  //   ctx.save();

  //   if (p.sidesBH == "base") {
  //     ctx.fillText(
  //       `The ${p.sidesBH} = ${p.labelABC}${p.labelDEF}, find the height.`,
  //       alignXText,
  //       20
  //     );
  //   } else if (p.sidesBH == "height") {
  //     ctx.fillText(
  //       `The ${p.sidesBH} = ${p.labelABC}${p.labelGHI}, find the base.`,
  //       alignXText,
  //       20
  //     );
  //   } else if (p.sidesBH == "base2") {
  //     ctx.fillText(
  //       `The base = ${p.labelDEF}${p.labelGHI}, find the height.`,
  //       alignXText,
  //       20
  //     );
  //   } else {
  //     ctx.fillText(
  //       `The height = ${p.labelABC}${p.labelJKL}, find the base.`,
  //       alignXText,
  //       20
  //     );
  //   }
  //   ctx.fillText(
  //     `${p.labelABC}${p.labelDEF}, ${p.labelABC}${p.labelGHI}, ${p.labelABC}${p.labelJKL} or ${p.labelDEF}${p.labelGHI}`,
  //     alignXText,
  //     40
  //   );

  //   ctx.translate(p.translateX, p.translateY);
  //   ctx.rotate((p.rotation * Math.PI) / 180);
  //   // label
  //   ctx.fillStyle = "black";
  //   ctx.fillText(p.labelABC, -10, 0);
  //   ctx.fillText(p.labelDEF, -10, p.pointY1 + 10);
  //   ctx.fillText(p.labelGHI, p.pointX1, 0);

  //   // triangle
  //   ctx.fillStyle = "orange";
  //   ctx.strokeStyle = "grey";
  //   ctx.lineWidth = 2;
  //   ctx.beginPath();
  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(0, p.pointY1);
  //   ctx.lineTo(p.pointX1, 0);
  //   ctx.closePath();
  //   ctx.fill();
  //   ctx.stroke();
  //   ctx.restore();

  //   ctx.save();
  //   ctx.translate(p.translateX, p.translateY);
  //   ctx.rotate((p.rotation * Math.PI) / 180);
  //   let areaOfTriangle = (p.pointX1 * p.pointY1 * 1) / 2;
  //   let hypotenuse = Math.sqrt(p.pointX1 * p.pointX1 + p.pointY1 * p.pointY1);
  //   let otherHeight = (areaOfTriangle * 2) / hypotenuse;
  //   let otherAngle = Math.acos(p.pointY1 / hypotenuse);

  //   ctx.rotate(otherAngle);
  //   console.log(areaOfTriangle, hypotenuse, otherHeight, otherAngle);
  //   ctx.strokeStyle = "grey";
  //   ctx.setLineDash([1, 1]);
  //   ctx.lineWidth = 3;
  //   ctx.beginPath();
  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(otherHeight, 0);
  //   ctx.stroke();

  //   ctx.fillStyle = "black";
  //   ctx.fillText(p.labelJKL, otherHeight + 3, 3);

  //   ctx.restore();
  // }

  if (level == 5.0) {
    let object = p.groups[p.object][0];
    let measurement = p.groups[p.object][1];

    // first line
    if (p.firstVar == "whole" && p.secondVar == "whole") {
      return updateProblems();
    }
    if (
      (p.firstVar == "whole" && p.secondVar == "real" && p.operator == "+") ||
      (p.firstVar == "whole" && p.secondVar == "real" && p.operator == "-")
    ) {
      return updateProblems();
    }
    if (
      (p.firstVar == "fake" && p.secondVar == "real" && p.operator == "+") ||
      (p.firstVar == "fake" && p.secondVar == "real" && p.operator == "-")
    ) {
      return updateProblems();
    }
    if (
      (p.firstVar == "fake" && p.secondVar == "fake" && p.operator == "x") ||
      (p.firstVar == "fake" && p.secondVar == "fake" && p.operator == "/")
    ) {
      return updateProblems();
    }
    if (
      (p.firstVar == "whole" && p.secondVar == "fake" && p.operator == "x") ||
      (p.firstVar == "whole" && p.secondVar == "fake" && p.operator == "/")
    ) {
      return updateProblems();
    }
    if (p.numThree > p.numFour) {
      [p.numThree, p.numFour] = [p.numFour, p.numThree];
    }
    if (p.numOne > p.numTwo) {
      [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
    }
    if (p.numThree == p.numFour) {
      p.numFour += 1;
    }
    if (p.numOne == p.numTwo) {
      p.numTwo += 1;
    }
    let lineOne = "";
    [p.numThree, p.numFour] = simplify(p.numThree, p.numFour);
    [p.numOne, p.numTwo] = simplify(p.numOne, p.numTwo);
    let positive = ["bought", "received"][genNumbers(2)];
    let negative = ["sold", "gave away", "threw away"][genNumbers(3)];
    if (p.firstVar == "whole")
      lineOne = `${p.firstPerson} has ${p.numOne} ${measurement} of ${object}.`;
    if (p.firstVar == "fake") {
      if (p.numOne == p.numTwo) {
        return updateProblems();
      }
      lineOne = `${p.firstPerson} has ${p.numOne}/${p.numTwo} ${measurement} of ${object}.`;
    }
    let firstGender = "She";
    if (p.firstPerson == "Anton" || p.firstPerson == "Grady")
      firstGender = "He";
    // second line
    let lineTwo = "";
    // if fake
    // whole number fake +
    if (p.secondVar == "fake" && p.operator == "+")
      lineTwo = `${firstGender} ${positive} another ${p.numThree} ${measurement}.`;
    // whole number fake -
    if (p.secondVar == "fake" && p.operator == "-")
      lineTwo = `${firstGender} ${negative} ${p.numThree} ${measurement} of ${object}.`;
    // fraction fake +
    if (p.secondVar == "fake" && p.operator == "+")
      lineTwo = `${firstGender} ${positive} another ${p.numThree}/${p.numFour} ${measurement}.`;
    // fraction fake -
    if (p.secondVar == "fake" && p.operator == "-")
      lineTwo = `${firstGender} ${negative} ${p.numThree}/${p.numFour} ${measurement} of ${object}.`;
    if (p.secondVar == "whole" && p.operator == "+")
      lineTwo = `${firstGender} ${positive} ${p.numThree} ${measurement} of ${object}.`;
    if (p.secondVar == "whole" && p.operator == "-")
      // EXCEPTION -> instead of whole number, change to fraction
      lineTwo = `${firstGender} ${negative} ${p.numThree}/${p.numFour} ${measurement} of ${object}.`;

    // Whole number fake x
    // if (p.secondVar == "fake" && p.operator == "x")
    if (p.secondVar == "whole" && p.operator == "x") {
      if (p.numThree == 1) {
        p.numThree += 1;
      }
      lineTwo = `${p.otherPerson} has ${p.numThree} times of that.`;
    }
    // Whole number fake /
    // if (p.secondVar == "fake" && p.operator == "/")
    if (p.secondVar == "whole" && p.operator == "/") {
      if (p.numThree == 1) {
        p.numThree += 1;
      }
      lineTwo = `${firstGender} has ${p.numThree} times of ${p.otherPerson}.`;
    }
    // if real
    if (p.secondVar == "real" && p.operator == "x")
      lineTwo = `${firstGender} ${positive} another ${p.numThree}/${p.numFour} of it.`;
    if (p.secondVar == "real" && p.operator == "/")
      lineTwo = `${firstGender} ${negative} ${p.numThree}/${p.numFour} of it.`;
    // if (p.secondVar == "real" && p.operator == "x")
    //   lineTwo = `He/she bought/received another ${p.numThree}/${p.numFour} of it.`;
    // if (p.secondVar == "real" && p.operator == "/")
    //   lineTwo = `He/she sold/gave away ${p.numThree}/${p.numFour} of it.`;
    // if fake
    if (p.secondVar == "fake" && p.operator == "/") {
      console.log("Updated");
      return updateProblems();
    }
    // Last line
    let lineThree = "";
    if (
      (p.secondVar == "whole" && p.operator == "/") ||
      (p.secondVar == "whole" && p.operator == "x")
    ) {
      lineThree = `How many does the ${p.otherPerson} have?`;
    } else {
      lineThree = `How much does ${firstGender.toLowerCase()} have in the end?`;
    }
    console.log(p.firstVar, p.secondVar, p.operator);
    // Display the problem
    displayProblem.innerHTML = `${lineOne}</p>${lineTwo}</p>${lineThree}`;
  }
  if (level == 5.01) {
    if (setting == 1) {
      [p.numOne, p.denoOne] = simplify(p.numOne, p.denoOne);
      [p.numTwo, p.denoTwo] = simplify(p.numTwo, p.denoTwo);
      console.log("This is Level 5.01.1");
      // PLUS
      if (p.version == 0) {
        if (p.numOne + p.numTwo >= p.denoOne) return updateCalc();
        displayProblem.innerHTML = `
      ${p.numOne}/${p.denoOne} of ${p.identity} is ${p.ref}.</p>
      ${p.numTwo}/${p.denoTwo} of ${p.identity} is ${p.ref}.</p>
      What fraction of of ${p.identity} is ${
          p.ref == "shaded" ? "unshaded" : "shaded"
        }?
      `;
      }
      // MINUS
      if (p.version == 1) {
        if (p.numOne + p.numTwo >= p.denoOne) return updateCalc();
        const colorArr = ["red", "blue", "green", "yellow"];
        let refColor2 = colorArr[genNumbers(4)];
        while (refColor2 == p.refColor) {
          refColor2 = colorArr[genNumbers(4)];
        }
        let refColor3 = colorArr[genNumbers(4)];
        while (refColor3 == refColor2 || refColor3 == p.refColor) {
          refColor3 = colorArr[genNumbers(4)];
        }
        if (p.denoTwo == p.numTwo || p.numOne == p.denoOne) return updateCalc();
        displayProblem.innerHTML = `
      ${p.numOne}/${p.denoOne} of ${p.identity} is ${p.refColor}.</p>
      ${p.numTwo}/${p.denoTwo} of ${p.identity} is ${refColor2}.</p>
      The rest of ${p.identity} is ${refColor3}.</p>
      What fraction of of ${p.identity} is ${refColor3}?
      `;
      }
    }
    if (setting == 2) {
      console.log("This is Level 5.01.2");
      if (p.numOne == p.denoOne) return updateCalc();
      if (p.remainderNum >= p.remainderDeno) return updateCalc();
      [p.numOne, p.denoOne] = simplify(p.numOne, p.denoOne);
      [p.remainderNum, p.remainderDeno] = simplify(
        p.remainderNum,
        p.remainderDeno
      );
      let colorArr = ["red", "blue", "green", "yellow"];
      let refColor2 = colorArr[genNumbers(4)];
      while (refColor2 == p.refColor) {
        refColor2 = colorArr[genNumbers(4)];
      }
      let refColor3 = colorArr[genNumbers(4)];
      while (refColor3 == refColor2 || refColor3 == p.refColor) {
        refColor3 = colorArr[genNumbers(4)];
      }

      displayProblem.innerHTML = `
      ${p.numOne}/${p.denoOne} of ${p.identity} is ${p.refColor}.</p>
      ${p.remainderNum}/${p.remainderDeno} of the remainder is ${refColor2}.</p>
      The rest are ${refColor3}.</p>
      What fraction of ${p.identity} are ${
        p.question == 0 ? refColor2 : refColor3
      }.
      `;
    }
    if (setting == 3) {
      for (let i = p.numTwo; i > 1; i--) {
        if (p.numOne % i == 0 && p.numTwo % i == 0) {
          p.numOne /= i;
          p.numTwo /= i;
        }
      }
      for (let i = p.numFour; i > 1; i--) {
        if (p.numThree % i == 0 && p.numFour % i == 0) {
          p.numThree /= i;
          p.numFour /= i;
        }
      }
      for (let i = p.numSix; i > 1; i--) {
        if (p.numFive % i == 0 && p.numSix % i == 0) {
          p.numFive /= i;
          p.numSix /= i;
        }
      }
      displayProblem.innerHTML = `A is ${p.numOne}/${p.numTwo} of ${p.letterBTotal}.</br>
    ${p.numThree}/${p.numFour} of A was removed.</br>
    ${p.numFive}/${p.numSix} of B was removed.</br>
    What fraction of the total was ${p.letterAB} ${p.letterLeftRemoved}?`;
    }
  }

  if (level == 5.02) {
    if (p.numThree == p.numFour) {
      p.numFour = p.numThree + [1, 2][genNumbers(2)];
    }
    if (p.numOne == p.numTwo) {
      p.numTwo = p.numOne + [1, 2][genNumbers(2)];
    }
    if (p.numOne == p.numThree) {
      p.numOne += 1;
    }
    if (p.numOne > p.numThree) {
      [p.numOne, p.numThree] = [p.numThree, p.numOne];
    }

    arr.push(p.numOne, p.numThree);
    arr.sort(function (a, b) {
      return b - a;
    });
    let i = 1;
    while (arr[0] % arr[arr.length - 1] != 0) {
      console.log(arr, i);
      i++;
      arr.unshift(p.numThree * i);
    }
    displayProblem.innerHTML = `
    ${p.numOne}/${p.numTwo} of A ${p.sentenceChoice} ${p.numThree}/${p.numFour} of B.
    `;
  }

  if (level == 5.03) {
    if (p.numerator == p.denominator) {
      p.numerator -= 1;
    }
    console.log(p.numerator, p.denominator, p.numerator / p.denominator);
    p.percentageDisplay = p.numerator / (p.denominator / 100);

    if (p.percentageDisplay % 1 != 0) {
      console.log(p.percentageDisplay);
    }

    if (p.rollA == "fraction") {
      displayProblem.innerHTML = `${p.numerator}/${p.denominator} = ___ %`;
    }
    if (p.rollA == "decimal") {
      displayProblem.innerHTML = `${p.numerator / p.denominator} = ___ %`;
    }

    if (p.rollA == "percentage") {
      displayProblem.innerHTML = `
        Convert to ${p.rollB}</br>
        ${p.percentageDisplay}% = ____`;
    }
  }

  if (level == 5.04) {
    if (p.letterChange == "of" && p.letterChangeTwo != "of") {
      displayProblem.innerHTML = `A is ${p.numOne}% of A and B.</br>
      ${p.numTwo}% of A was removed.</br>
      B ${p.letterChangeTwo} by ${p.numThree}%.</br>
      What percentage of the total is ${p.letterAB} in the end?`;
    } else if (p.letterChange != "of" && p.letterChangeTwo == "of") {
      displayProblem.innerHTML = `A is ${p.numOne}% of A and B.</br>
      A ${p.letterChange} by ${p.numTwo}%.</br>
      ${p.numThree}% of B was removed.</br>
      What percentage of the total is ${p.letterAB} in the end?`;
    } else if (p.letterChange == "of" && p.letterChangeTwo == "of") {
      displayProblem.innerHTML = `A is ${p.numOne}% of A and B.</br>
      ${p.numTwo}% of A was removed.</br>
      ${p.numThree}% of B was removed.</br>
      What percentage of the total is ${p.letterAB} in the end?`;
    } else {
      displayProblem.innerHTML = `A is ${p.numOne}% of A and B.</br>
      A ${p.letterChange} by ${p.numTwo}%.</br>
      B ${p.letterChangeTwo} by ${p.numThree}%.</br>
      What percentage of the total is ${p.letterAB} in the end?`;
    }
  }
  if (level == 5.05) {
    for (let i = p.numTwo; i > 1; i--) {
      if (p.numOne % i == 0 && p.numTwo % i == 0) {
        p.numOne /= i;
        p.numTwo /= i;
      }
    }
    if (p.letterChange == "of" && p.letterChangeTwo == "of") {
      displayProblem.innerHTML = `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      ${p.numThree}% ${p.letterChange} A was removed.</br>
      ${p.numFour}% ${p.letterChangeTwo} B was removed.</br>
      What is ${p.letterAB} in the end?`;
    }
    if (p.letterChange == "of" && p.letterChangeTwo != "of") {
      displayProblem.innerHTML = `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      ${p.numThree}% ${p.letterChange} A was removed.</br>
      B ${p.letterChangeTwo} by ${p.numFour}%.</br>
      What is ${p.letterAB} in the end?`;
    }
    if (p.letterChange != "of" && p.letterChangeTwo == "of") {
      displayProblem.innerHTML = `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      A ${p.letterChange} by ${p.numThree}%.</br>
      ${p.numFour}% ${p.letterChangeTwo} B was removed.</br>
      What is ${p.letterAB} in the end?`;
    }
    if (p.letterChange != "of" && p.letterChangeTwo != "of") {
      displayProblem.innerHTML = `A is ${p.numOne}${p.option}${p.numTwo} of ${p.letterBTotal}.</br>
      A ${p.letterChange} by ${p.numThree}%.</br>
      B ${p.letterChangeTwo} by ${p.numFour}%.</br>
      What is ${p.letterAB} in the end?`;
    }
  }

  if (level == 5.06) {
    if (choice == 1) {
      let alignXText = 15;
      ctx.font = "1em serif";
      ctx.save();

      if (p.sidesBH == "base") {
        ctx.fillText(
          `The ${p.sidesBH} = ${p.labelABC}${p.labelDEF}, find the height.`,
          alignXText,
          20
        );
      } else if (p.sidesBH == "height") {
        ctx.fillText(
          `The ${p.sidesBH} = ${p.labelABC}${p.labelGHI}, find the base.`,
          alignXText,
          20
        );
      } else if (p.sidesBH == "base2") {
        ctx.fillText(
          `The base = ${p.labelDEF}${p.labelGHI}, find the height.`,
          alignXText,
          20
        );
      } else {
        ctx.fillText(
          `The height = ${p.labelABC}${p.labelJKL}, find the base.`,
          alignXText,
          20
        );
      }
      ctx.fillText(
        `${p.labelABC}${p.labelDEF}, ${p.labelABC}${p.labelGHI}, ${p.labelABC}${p.labelJKL} or ${p.labelDEF}${p.labelGHI}`,
        alignXText,
        40
      );

      ctx.translate(p.translateX, p.translateY);
      ctx.rotate((p.rotation * Math.PI) / 180);
      // label
      ctx.fillStyle = "black";
      ctx.fillText(p.labelABC, -10, 0);
      ctx.fillText(p.labelDEF, -10, p.pointY1 + 10);
      ctx.fillText(p.labelGHI, p.pointX1, 0);

      // triangle
      ctx.fillStyle = "orange";
      ctx.strokeStyle = "grey";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, p.pointY1);
      ctx.lineTo(p.pointX1, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(p.translateX, p.translateY);
      ctx.rotate((p.rotation * Math.PI) / 180);
      let areaOfTriangle = (p.pointX1 * p.pointY1 * 1) / 2;
      let hypotenuse = Math.sqrt(p.pointX1 * p.pointX1 + p.pointY1 * p.pointY1);
      let otherHeight = (areaOfTriangle * 2) / hypotenuse;
      let otherAngle = Math.acos(p.pointY1 / hypotenuse);

      ctx.rotate(otherAngle);
      console.log(areaOfTriangle, hypotenuse, otherHeight, otherAngle);
      ctx.strokeStyle = "grey";
      ctx.setLineDash([1, 1]);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(otherHeight, 0);
      ctx.stroke();

      ctx.fillStyle = "black";
      ctx.fillText(p.labelJKL, otherHeight + 3, 3);

      ctx.restore();
    }

    if (choice == 2) {
      ctx.save();
      ctx.font = "1em serif";

      if (p.question == "base") {
        ctx.fillText(
          `The ${p.question} of the triangle is ${p.labelABC}${p.labelJKL}. What is its height?`,
          20,
          20
        );
      } else if (p.question == "height") {
        ctx.fillText(
          `The ${p.question} of the triangle is ${p.labelDEF}${p.labelGHI}. What is its base?`,
          20,
          20
        );
      } else if (p.question == "base2") {
        ctx.fillText(
          `The base of the triangle is ${p.labelDEF}${p.labelGHI}. What is its height?`,
          20,
          20
        );
      } else if (p.question == "height2") {
        ctx.fillText(
          `The height of the triangle is ${p.labelABC}${p.labelJKL}. What is its base?`,
          20,
          20
        );
      } else if (p.question == "base3") {
        ctx.fillText(
          `The base of the triangle is ${p.labelGHI}${p.labelJKL}. What is its height?`,
          20,
          20
        );
      } else {
        ctx.fillText(
          `The height of the triangle is ${p.labelABC}${p.labelMNO}. What is its base?`,
          20,
          20
        );
      }

      // ctx.fillText(`${p.labelABC}${p.labelDEF}, ${p.labelGHI}${p.labelJKL}, ${p.labelABC}${p.labelJKL}, ${p.labelDEF}${p.labelGHI}, ${p.labelABC}${p.labelGHI}, ${p.labelABC}${p.labelMNO}, ${p.labelGHI}${p.labelJKL}`, 20, 40)
      ctx.translate(200, 150);
      ctx.rotate((p.rotation * Math.PI) / 180);
      // triangle A
      p.triA2y = p.triA1y + genNumbers(20) + 10;
      p.triA3y = p.triA2y;
      ctx.setLineDash([2, 2]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, p.triA1y);
      ctx.lineTo(0, p.triA2y);
      ctx.lineTo(p.triA3x, p.triA3y);
      ctx.closePath();
      ctx.stroke();

      const lengthHypo = Math.sqrt(p.triA2y * p.triA2y + p.triA3x * p.triA3x);
      const angleB = Math.acos(p.triA2y / lengthHypo);
      const otherLine = Math.sin(angleB) * p.triA1y;
      const otherRotation =
        (90 * Math.PI) / 180 - angleB + (180 * Math.PI) / 180;
      console.log(otherLine);

      ctx.save();
      ctx.setLineDash([2, 2]);
      ctx.translate(0, p.triA1y);
      ctx.rotate(otherRotation);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, otherLine);
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fillText(`${p.labelMNO}`, 0 - 5, otherLine + 15);
      ctx.restore();

      // triangle B
      ctx.fillStyle = "orange";
      ctx.setLineDash([]);
      p.triB2y = p.triA1y;
      p.triB3x = p.triA3x;
      p.triB3y = p.triA3y;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, p.triA1y);
      ctx.lineTo(p.triB3x, p.triB3y);
      ctx.closePath();
      // ctx.fill()
      ctx.stroke();

      ctx.fillStyle = "red";
      ctx.fillText(p.labelABC, 0 - 13, p.triA1y);
      ctx.fillText(p.labelDEF, 0 - 13, p.triA2y + 10);
      ctx.fillText(p.labelGHI, p.triA3x + 5, p.triA3y + 10);
      ctx.fillText(p.labelJKL, 0 - 10, -3);

      ctx.restore();
    }
  }

  if (level == 5.07) {
    ctx.save();
    console.log(p.roll);
    ctx.font = "1em serif";
    if (p.roll == 1) {
      // right angle triangle
      if (-p.rightAngleTriX1 == p.rightAngleTriX2) {
        p.rightAngleTriX1 -= 10;
      }
      ctx.fillText(`Below is a Right-Angled Triangle.`, 40, 20);
      ctx.fillText(`Find ∠a.`, 40, 40);
      ctx.translate(200, 137.5);
      ctx.beginPath();
      ctx.moveTo(p.rightAngleTriX1, 0);
      ctx.lineTo(p.rightAngleTriX2, 0);
      let base = p.rightAngleTriX2 - p.rightAngleTriX1;
      let height = -p.rightAngleTriY;
      let hypo = Math.sqrt(height * height + base * base);
      let angle = Math.atan(height / base);
      p.angleLabel = Math.round((angle * 180) / Math.PI);

      // right angle on the left
      if (p.rightAngleRoll == 1) {
        ctx.lineTo(p.rightAngleTriX1, p.rightAngleTriY);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(p.rightAngleTriX1, 0, 7, -7);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(p.rightAngleTriX2, 0, 15, 1 * Math.PI, angle + 1 * Math.PI);
        ctx.stroke();
        ctx.fillText(`${p.angleLabel}°`, p.rightAngleTriX2 - 35, -1);

        ctx.beginPath();
        ctx.arc(p.rightAngleTriX1, p.rightAngleTriY, 10, angle, 0.5 * Math.PI);
        ctx.stroke();
        ctx.fillText("a", p.rightAngleTriX1 + 3, p.rightAngleTriY + 20);
      }
      // right angle on the right
      if (p.rightAngleRoll == 2) {
        ctx.lineTo(p.rightAngleTriX2, p.rightAngleTriY);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(p.rightAngleTriX2, 0, -7, -7);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          p.rightAngleTriX1,
          0,
          15,
          0,
          (2 - angle / Math.PI) * Math.PI,
          true
        );
        ctx.stroke();
        ctx.fillText(`${p.angleLabel}°`, p.rightAngleTriX1 + 15, -1);

        ctx.beginPath();
        ctx.arc(
          p.rightAngleTriX2,
          p.rightAngleTriY,
          10,
          0.5 * Math.PI,
          1 * Math.PI - angle
        );
        ctx.stroke();
        ctx.fillText("a", p.rightAngleTriX2 - 10, p.rightAngleTriY + 20);
      }
    }
    if (p.roll == 2) {
      ctx.fillText("Below is a Equilateral Triangle.", 20, 20);
      ctx.fillText("What is ∠e?", 20, 40);

      ctx.translate(200, 137.5);
      ctx.translate(0, 20);
      ctx.beginPath();
      ctx.moveTo(-p.equiAngleTriX, 0);
      ctx.lineTo(p.equiAngleTriX, 0);
      let equiMid = p.equiAngleTriX;
      let equiAngle = (60 * Math.PI) / 180;
      let equiHeight = Math.tan(equiAngle) * equiMid;
      console.log(equiMid, equiAngle, equiHeight);
      ctx.lineTo(0, -equiHeight);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(-p.equiAngleTriX, 0, 15, 2 * Math.PI - equiAngle, 2 * Math.PI);
      ctx.stroke();
      ctx.fillText("∠e", -p.equiAngleTriX + 20, -5);

      ctx.save();
      ctx.rotate((90 * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(-p.equiAngleTriX / 2, -equiHeight / 2);
      ctx.rotate((30 * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(p.equiAngleTriX / 2, -equiHeight / 2);
      ctx.rotate((330 * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();
    }

    if (p.roll == 3) {
      ctx.fillText("Below is a Isosceles Triangle.", 20, 20);
      ctx.fillText("What is ∠i?", 20, 40);

      ctx.translate(200, 137.5);
      ctx.translate(0, 40);
      ctx.beginPath();
      ctx.moveTo(-p.isosTriX, 0);
      ctx.lineTo(p.isosTriX, 0);
      if (p.isosAngle == 45) {
        p.isosAngle += 5;
      }
      let isosMid = p.isosTriX;
      // convert to rad
      let isosAngle = (p.isosAngle * Math.PI) / 180;
      let isosHeight = Math.tan(isosAngle) * isosMid;
      console.log(isosMid, isosAngle, isosHeight, (isosAngle * Math.PI) / 180);
      ctx.lineTo(0, -isosHeight);
      ctx.closePath();
      ctx.stroke();

      let isosAngle2R = (0.5 * Math.PI - isosAngle) * 2;
      let isosAngle2D = (isosAngle2R * 180) / Math.PI;
      p.isosAngle2Label = Math.floor(isosAngle2D);

      ctx.save();
      ctx.translate(-p.isosTriX / 2, -isosHeight / 2);
      ctx.rotate(0.5 * Math.PI - isosAngle);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(p.isosTriX / 2, -isosHeight / 2);
      ctx.rotate(-(0.5 * Math.PI - isosAngle));
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      if (p.isosRoll == 1) {
        // angle at top find bottom left
        console.log("choice 1");
        ctx.beginPath();
        ctx.arc(-p.isosTriX, 0, 15, 2 * Math.PI - isosAngle, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText("i", -1, -isosHeight + 30);

        ctx.beginPath();
        ctx.arc(
          0,
          -isosHeight,
          15,
          isosAngle,
          1 * Math.PI - isosAngle * 2 + isosAngle
        );
        ctx.stroke();
        ctx.fillText(`${p.isosAngle}°`, -p.isosTriX + 20, -2);
      }

      if (p.isosRoll == 2) {
        // angle at bottom find top
        console.log("choice 2");
        ctx.beginPath();
        ctx.arc(
          0,
          -isosHeight,
          15,
          isosAngle,
          1 * Math.PI - isosAngle * 2 + isosAngle
        );
        ctx.stroke();
        ctx.fillText("i", -p.isosTriX + 20, 0 - 2);

        ctx.beginPath();
        ctx.arc(-p.isosTriX, 0, 15, 2 * Math.PI - isosAngle, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(`${p.isosAngle2Label}°`, -5, -isosHeight + 30);
      }
    }
    if (p.roll == 4) {
      ctx.fillText(`Find ∠b`, 20, 20);
      ctx.translate(200, 137.5);
      ctx.translate(0, 40);
      let triHeight = p.triCy;

      // right angled triangle
      if (p.triRoll == 1) {
        ctx.beginPath();
        ctx.moveTo(-p.triAx, 0);
        ctx.lineTo(p.triBx, 0);
        p.triCx = genNumbers(p.triAx + p.triAx) - p.triAx;
        ctx.lineTo(p.triCx, -p.triCy);
        ctx.closePath();
        ctx.stroke();

        let triLeftAdj = undefined;
        if (p.triCx < 0) {
          triLeftAdj = p.triAx - -p.triCx;
        } else {
          triLeftAdj = p.triAx + p.triCx;
        }
        let triLeftAngleR = Math.atan(triHeight / triLeftAdj);
        p.triLeftAngleD = Math.floor((triLeftAngleR * 180) / Math.PI);
        console.log(p.triCx, triHeight, triLeftAngleR, p.triLeftAngleD);

        // left arc
        ctx.beginPath();
        ctx.arc(-p.triAx, 0, 15, 2 * Math.PI - triLeftAngleR, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(`${p.triLeftAngleD}°`, -p.triAx + 20, 0 - 3);

        // left arc
        let triRightAdj = p.triAx + p.triBx - triLeftAdj;
        let triRightAngleR = Math.atan(triHeight / triRightAdj);
        p.triRightAngleD = Math.floor((triRightAngleR * 180) / Math.PI);

        ctx.beginPath();
        ctx.arc(p.triBx, 0, 15, 1 * Math.PI, 1 * Math.PI + triRightAngleR);
        ctx.stroke();
        ctx.fillText(`${p.triRightAngleD}°`, p.triBx - 35, 0 - 3);

        // answer arc
        ctx.beginPath();
        ctx.arc(
          p.triCx,
          -p.triCy,
          15,
          triRightAngleR,
          1 * Math.PI - triLeftAngleR
        );
        ctx.stroke();
        ctx.fillText(`b`, p.triCx, -p.triCy + 25);
      }
      if (p.triRoll == 2) {
        ctx.beginPath();
        ctx.moveTo(-p.triAx, 0);
        ctx.lineTo(p.triBx, 0);
        ctx.lineTo(-p.triAx - p.triDx, -p.triCy);
        ctx.closePath();
        ctx.stroke();

        // left arc
        let tri2LeftAdj = p.triDx;
        let tri2LeftAngleR = 1 * Math.PI - Math.atan(triHeight / tri2LeftAdj);
        p.tri2LeftAngleD = Math.floor((tri2LeftAngleR * 180) / Math.PI);

        ctx.beginPath();
        ctx.arc(-p.triAx, 0, 15, 2 * Math.PI - tri2LeftAngleR, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(`${p.tri2LeftAngleD}°`, -p.triAx + 20, 0 - 3);

        // right arc
        let tri2RightAdj = p.triAx + p.triDx + p.triBx;
        let tri2RightAngleR = Math.atan(triHeight / tri2RightAdj);
        p.tri2RightAngleD = Math.floor((tri2RightAngleR * 180) / Math.PI);

        ctx.beginPath();
        ctx.arc(p.triBx, 0, 15, 1 * Math.PI, 1 * Math.PI + tri2RightAngleR);
        ctx.stroke();
        ctx.fillText(`${p.tri2RightAngleD}°`, p.triBx - 35, 0 - 3);

        // answer arc
        ctx.beginPath();
        ctx.arc(
          -p.triAx - p.triDx,
          -p.triCy,
          15,
          tri2RightAngleR,
          1 * Math.PI - tri2LeftAngleR
        );
        ctx.stroke();
        ctx.fillText(`b`, -p.triAx - p.triDx + 20, -p.triCy + 20);
      }

      if (p.triRoll == 3) {
        ctx.beginPath();
        ctx.moveTo(-p.triAx, 0);
        ctx.lineTo(p.triBx, 0);
        ctx.lineTo(p.triBx + p.triDx, -p.triCy);
        ctx.closePath();
        ctx.stroke();

        // right arc
        let tri3RightAdj = p.triDx;
        let tri3RightAngleR = 1 * Math.PI - Math.atan(triHeight / tri3RightAdj);
        p.tri3RightAngleD = Math.floor((tri3RightAngleR * 180) / Math.PI);

        ctx.beginPath();
        ctx.arc(p.triBx, 0, 15, 1 * Math.PI, 1 * Math.PI + tri3RightAngleR);
        ctx.stroke();
        ctx.fillText(`${p.tri3RightAngleD}°`, p.triBx - 40, 0 - 3);

        // left arc
        let tri3LeftAdj = p.triAx + p.triDx + p.triBx;
        let tri3LeftAngleR = Math.atan(triHeight / tri3LeftAdj);
        p.tri3LeftAngleD = Math.floor((tri3LeftAngleR * 180) / Math.PI);

        ctx.beginPath();
        ctx.arc(-p.triAx, 0, 15, 2 * Math.PI - tri3LeftAngleR, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(`${p.tri3LeftAngleD}°`, -p.triAx + 25, 0 - 3);

        // answer arc
        ctx.beginPath();
        ctx.arc(
          p.triBx + p.triDx,
          -p.triCy,
          15,
          tri3RightAngleR,
          1 * Math.PI - tri3LeftAngleR
        );
        ctx.stroke();
        ctx.fillText(`b`, p.triBx + p.triDx - 20, -p.triCy + 20);
      }
    }
    ctx.restore();
  }

  if (level == 5.08) {
    ctx.save();
    ctx.font = "1em serif";
    if (p.roll == "opposite") {
      ctx.fillText("What is ∠a?", 20, 20);
    }
    if (p.roll == "corresponding") {
      ctx.fillText("What is ∠c?", 20, 20);
    }

    ctx.translate(200, 137.5);

    if (p.roll == "opposite") {
      ctx.save();

      ctx.rotate((p.finalRotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(-150, 0);
      ctx.lineTo(150, 0);
      ctx.stroke();

      ctx.save();
      ctx.rotate((p.oppositeRotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(-150, 0);
      ctx.lineTo(150, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, (p.oppositeRotation * Math.PI) / 180);
      ctx.stroke();
      ctx.rotate(((p.oppositeRotation / 2) * Math.PI) / 180);
      ctx.fillText(`${p.oppositeRotation}°`, 25, 5);
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        15,
        1 * Math.PI,
        1 * Math.PI + (p.oppositeRotation * Math.PI) / 180
      );
      ctx.stroke();
      ctx.rotate(((p.oppositeRotation / 2) * Math.PI) / 180);
      ctx.fillText("a", -26, 0);
      ctx.restore();
      ctx.restore();
    }

    if (p.roll == "corresponding") {
      ctx.save;
      // ctx.rotate(p.finalRotation*Math.PI/180)
      // first horizontal line
      ctx.translate(0, 50);
      ctx.beginPath();
      ctx.moveTo(-150, 0);
      ctx.lineTo(150, 0);
      ctx.stroke();

      // second horizontal line
      ctx.save();
      ctx.translate(0, -60);
      ctx.beginPath();
      ctx.moveTo(-150, 0);
      ctx.lineTo(150, 0);
      ctx.stroke();

      ctx.restore();

      // Intersect
      let linePointX = genNumbers(200) - 100;
      let adjustX = genNumbers(60) - 30;

      ctx.beginPath();
      ctx.moveTo(linePointX + adjustX, 0);
      ctx.lineTo(linePointX - adjustX, -60);
      ctx.stroke();

      let parallelAdjust = genNumbers(10) + 25;
      ctx.beginPath();
      ctx.moveTo(linePointX + adjustX - 10 - parallelAdjust, -10);
      ctx.lineTo(linePointX + adjustX - parallelAdjust, 0);
      ctx.lineTo(linePointX + adjustX - 10 - parallelAdjust, 10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(linePointX - adjustX - 10 - parallelAdjust, -70);
      ctx.lineTo(linePointX - adjustX - parallelAdjust, -60);
      ctx.lineTo(linePointX - adjustX - 10 - parallelAdjust, -50);
      ctx.stroke();

      // first arc
      let corrAngle = angles(
        linePointX + adjustX,
        0,
        linePointX - adjustX,
        -60
      );
      console.log(corrAngle);
      p.corrAngleDisplay = Math.abs(Math.floor(corrAngle));
      if (p.corrRoll != 4) {
        ctx.beginPath();
        ctx.arc(
          linePointX + adjustX,
          0,
          15,
          2 * Math.PI + (corrAngle * Math.PI) / 180,
          2 * Math.PI
        );
        ctx.stroke();

        ctx.fillText(`${p.corrAngleDisplay}°`, linePointX + adjustX + 20, -1);
      }

      // longer intersect
      ctx.save();
      ctx.translate(linePointX + adjustX, 0);
      ctx.rotate((corrAngle * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(-60, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
      ctx.restore();

      if (p.corrRoll == 1) {
        ctx.beginPath();
        ctx.arc(
          linePointX - adjustX,
          -60,
          15,
          1 * Math.PI + (corrAngle * Math.PI) / 180,
          1 * Math.PI
        );
        ctx.stroke();
        ctx.fillText(`c`, linePointX - adjustX - 28, -60 + 9);
      }
      if (p.corrRoll == 2) {
        ctx.beginPath();
        ctx.arc(
          linePointX - adjustX,
          -60,
          15,
          0,
          1 * Math.PI + (corrAngle * Math.PI) / 180
        );
        ctx.stroke();
        ctx.fillText(`c`, linePointX - adjustX + 21, -60 + 9);
      }
      if (p.corrRoll == 3 || p.corrRoll == 4) {
        // ctx.translate(0, -60)
        ctx.beginPath();
        ctx.arc(
          linePointX - adjustX,
          -60,
          15,
          2 * Math.PI + (corrAngle * Math.PI) / 180,
          2 * Math.PI
        );
        ctx.stroke();
        if (p.corrRoll == 3) {
          ctx.fillText(`c`, linePointX - adjustX + 21, -60 - 1);
        }
        if (p.corrRoll == 4) {
          ctx.fillText(
            `${p.corrAngleDisplay}°`,
            linePointX - adjustX + 21,
            -60 - 1
          );

          ctx.beginPath();
          ctx.arc(
            linePointX - adjustX,
            -60,
            15,
            1 * Math.PI + (corrAngle * Math.PI) / 180,
            1 * Math.PI
          );
          ctx.stroke();

          ctx.fillText(`c`, linePointX - adjustX - 25, -50);
        }
      }
      ctx.restore();
    }
    ctx.restore();
  }

  if (level == 5.09) {
    console.log(p.roll, p.rollChange);
    if (p.roll == "discount") {
      if (p.rollChange == 1) {
        displayProblem.innerHTML = `
        The discount of $${p.change} was given to an item that cost $${p.totalAmount}.</br>
        What percentage discount is given?
        `;
      }
      if (p.rollChange == 2) {
        displayProblem.innerHTML = `
        An item cost $${p.totalAmount - p.change} after a $${
          p.change
        } discount was given.</br>
        What percentage discount is given?
        `;
      }
    }
    if (p.roll == "increase") {
      if (p.rollChange == 1) {
        displayProblem.innerHTML = `
       Something ${p.roll} by ${p.change} and was ${p.totalAmount} at first.</br>
       What is the percentage ${p.roll}?
        `;
      }
      if (p.rollChange == 2) {
        displayProblem.innerHTML = `
       Something ${p.roll} by ${p.change} and became ${
          p.totalAmount + p.change
        }.</br>
       What is the percentage ${p.roll}?
        `;
      }
    }
    if (p.roll == "decrease") {
      if (p.rollChange == 1) {
        displayProblem.innerHTML = `
       Something ${p.roll} by ${p.change} and was ${p.totalAmount} at first.</br>
       What is the percentage ${p.roll}?
        `;
      }
      if (p.rollChange == 2) {
        displayProblem.innerHTML = `
        Something ${p.roll} by ${p.change} and became ${
          p.totalAmount - p.change
        }.</br>
        What is the percentage ${p.roll}?
         `;
      }
    }
  }

  if (level == 5.1) {
    ctx.save();
    ctx.font = "1em serif";
    if (p.rollShape == "parallelogram") {
      ctx.fillText(`What is ∠p?`, 20, 20);
    }
    if (p.rollShape == "rhombus") {
      ctx.fillText(`What is ∠r?`, 20, 20);
    }
    if (p.rollShape == "trapezium") {
      ctx.fillText(`What is ∠t?`, 20, 20);
    }

    ctx.translate(200, 137.5);

    if (p.rollShape == "parallelogram") {
      let adjustX = genNumbers(40) - 20;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-p.paraLength, 0);
      ctx.lineTo(-p.paraLength + adjustX, -p.paraBreadth);
      ctx.lineTo(p.paraLength + adjustX, -p.paraBreadth);
      ctx.lineTo(p.paraLength, 0);
      ctx.closePath();
      ctx.stroke();

      let paraAngle = angles(
        -p.paraLength,
        0,
        -p.paraLength + adjustX,
        -p.paraBreadth
      );
      let paraAngleR = (paraAngle * Math.PI) / 180;
      p.paraAngleD = Math.abs(Math.floor(paraAngle));
      console.log(paraAngle, p.paraAngleD);

      ctx.beginPath();
      ctx.arc(-p.paraLength, 0, 15, 2 * Math.PI + paraAngleR, 2 * Math.PI);
      ctx.stroke();
      ctx.fillText(`${p.paraAngleD}°`, -p.paraLength + 20, 0 - 3);

      if (p.paraRoll == 1) {
        ctx.beginPath();
        ctx.arc(
          -p.paraLength + adjustX,
          -p.paraBreadth,
          15,
          0,
          1 * Math.PI + paraAngleR
        );
        ctx.stroke();
        ctx.fillText(`p`, -p.paraLength + adjustX + 20, -p.paraBreadth + 10);
      }

      if (p.paraRoll == 2) {
        ctx.beginPath();
        ctx.arc(
          p.paraLength + adjustX,
          -p.paraBreadth,
          15,
          1 * Math.PI + paraAngleR,
          1 * Math.PI
        );
        ctx.stroke();
        ctx.fillText(`p`, p.paraLength + adjustX - 25, -p.paraBreadth + 10);
      }
    }
    if (p.rollShape == "rhombus") {
      let adjustX = (genNumbers(10) - 5) * 9;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-p.rhombusSide / 2, 0);
      ctx.lineTo(-p.rhombusSide / 2 + adjustX, -p.rhombusSide);
      ctx.lineTo(p.rhombusSide / 2 + adjustX, -p.rhombusSide);
      ctx.lineTo(p.rhombusSide / 2, 0);
      ctx.closePath();
      ctx.stroke();

      let rhombusAngle = angles(
        -p.rhombusSide / 2,
        0,
        -p.rhombusSide / 2 + adjustX,
        -p.rhombusSide
      );
      let rhombusAngleR = (rhombusAngle * Math.PI) / 180;
      p.rhombusAngleD = Math.abs(Math.floor(rhombusAngle));
      console.log(rhombusAngle, rhombusAngleR, p.rhombusAngleD);

      ctx.save();
      ctx.translate(
        (-p.rhombusSide / 2 + (-p.rhombusSide / 2 + adjustX)) / 2,
        (0 - p.rhombusSide) / 2
      );
      ctx.rotate(rhombusAngleR - 0.5 * Math.PI);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(
        (-p.rhombusSide / 2 + adjustX + p.rhombusSide / 2 + adjustX) / 2,
        -p.rhombusSide
      );
      ctx.rotate(rhombusAngleR);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(
        (p.rhombusSide / 2 + adjustX + p.rhombusSide / 2) / 2,
        -p.rhombusSide / 2
      );
      ctx.rotate(rhombusAngleR - 0.5 * Math.PI);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(0, 0);
      ctx.rotate(rhombusAngleR);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      if (p.rhombusRoll != 5) {
        ctx.beginPath();
        ctx.arc(
          -p.rhombusSide / 2,
          0,
          15,
          2 * Math.PI + rhombusAngleR,
          2 * Math.PI
        );
        ctx.stroke();
        ctx.fillText(`${p.rhombusAngleD}°`, -p.rhombusSide / 2 + 20, -2);
      }

      if (p.rhombusRoll == 1) {
        ctx.beginPath();
        ctx.arc(
          -p.rhombusSide / 2 + adjustX,
          -p.rhombusSide,
          15,
          0,
          1 * Math.PI + rhombusAngleR
        );
        ctx.stroke();
        ctx.fillText(
          `r`,
          -p.rhombusSide / 2 + adjustX + 20,
          -p.rhombusSide + 10
        );
      }

      if (p.rhombusRoll == 2) {
        ctx.beginPath();
        ctx.arc(
          p.rhombusSide / 2 + adjustX,
          -p.rhombusSide,
          15,
          1 * Math.PI + rhombusAngleR,
          1 * Math.PI
        );
        ctx.stroke();
        ctx.fillText(
          `r`,
          p.rhombusSide / 2 + adjustX - 30,
          -p.rhombusSide + 10
        );
      }

      if (p.rhombusRoll == 3) {
        ctx.beginPath();
        ctx.moveTo(-p.rhombusSide / 2 + adjustX, -p.rhombusSide);
        ctx.lineTo(p.rhombusSide / 2, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          -p.rhombusSide / 2 + adjustX,
          -p.rhombusSide,
          15,
          (1 * Math.PI + rhombusAngleR) / 2,
          1 * Math.PI + rhombusAngleR
        );
        ctx.stroke();
        ctx.fillText(
          `r`,
          -p.rhombusSide / 2 + adjustX + 5,
          -p.rhombusSide + 23
        );
      }

      if (p.rhombusRoll == 4) {
        ctx.beginPath();
        ctx.moveTo(-p.rhombusSide / 2, 0);
        ctx.lineTo(p.rhombusSide / 2 + adjustX, -p.rhombusSide);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          -p.rhombusSide / 2,
          0,
          20,
          2 * Math.PI + rhombusAngleR,
          2 * Math.PI + rhombusAngleR / 2
        );
        ctx.stroke();
        ctx.fillText(`r`, -p.rhombusSide / 2 + 6, -22);
      }
      if (p.rhombusRoll == 5) {
        ctx.beginPath();
        ctx.moveTo(-p.rhombusSide / 2, 0);
        ctx.lineTo(p.rhombusSide / 2 + adjustX, -p.rhombusSide);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          -p.rhombusSide / 2,
          0,
          20,
          2 * Math.PI + rhombusAngleR,
          2 * Math.PI + rhombusAngleR / 2
        );
        ctx.stroke();
        ctx.fillText(`${p.rhombusAngleD / 2}°`, -p.rhombusSide / 2 + 6, -22);

        ctx.beginPath();
        ctx.arc(
          -p.rhombusSide / 2 + adjustX,
          -p.rhombusSide,
          15,
          0,
          1 * Math.PI + rhombusAngleR
        );
        ctx.stroke();
        ctx.fillText(
          `r`,
          -p.rhombusSide / 2 + adjustX + 17,
          -p.rhombusSide + 20
        );
      }
    }
    if (p.rollShape == "trapezium") {
      let adjustX = (genNumbers(10) - 5) * 9;
      let adjustX2 = (genNumbers(10) - 5) * 9;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-p.trapLengthL, 0);
      ctx.lineTo(-p.trapLengthL + adjustX, -p.trapTop);
      ctx.lineTo(p.trapLengthB + adjustX2, -p.trapTop);
      // ctx.lineTo(p.trapLengthB, 0)
      ctx.closePath();
      ctx.stroke();

      ctx.save();
      ctx.translate(
        (-p.trapLengthL + adjustX + p.trapLengthB + adjustX2) / 2,
        -p.trapTop
      );
      ctx.beginPath();
      ctx.moveTo(-5, -5);
      ctx.lineTo(0, 0);
      ctx.lineTo(-5, 5);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(-p.trapLengthL / 2, 0);
      ctx.beginPath();
      ctx.moveTo(-5, -5);
      ctx.lineTo(0, 0);
      ctx.lineTo(-5, 5);
      ctx.stroke();
      ctx.restore();

      let trapAngle = angles(
        -p.trapLengthL,
        0,
        -p.trapLengthL + adjustX,
        -p.trapTop
      );
      let trapAngleR = (trapAngle * Math.PI) / 180;
      p.trapAngleD = Math.abs(Math.floor(trapAngle));
      console.log(trapAngle, trapAngleR, p.trapAngleD);

      if (p.trapRoll == 1) {
        ctx.beginPath();
        ctx.arc(-p.trapLengthL, 0, 15, 2 * Math.PI + trapAngleR, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(`${p.trapAngleD}°`, -p.trapLengthL + 20, -1);

        ctx.beginPath();
        ctx.arc(
          -p.trapLengthL + adjustX,
          -p.trapTop,
          15,
          0,
          1 * Math.PI + trapAngleR
        );
        ctx.stroke();
        ctx.fillText(`t`, -p.trapLengthL + adjustX + 20, -p.trapTop + 11);
      }

      let trapAngle2 = angles(0, 0, p.trapLengthB + adjustX2, -p.trapTop) + 180;
      let trapAngleR2 = (trapAngle2 * Math.PI) / 180;
      p.trapAngleD2 = Math.abs(Math.floor(trapAngle2));
      console.log(trapAngle2, trapAngleR2, p.trapAngleD2);

      if (p.trapRoll == 2) {
        ctx.beginPath();
        ctx.arc(0, 0, 15, 1 * Math.PI, 1 * Math.PI + trapAngleR2);
        ctx.stroke();
        ctx.fillText(`${p.trapAngleD2}°`, 0 - 45, -2);

        ctx.beginPath();
        ctx.arc(
          p.trapLengthB + adjustX2,
          -p.trapTop,
          15,
          trapAngleR2,
          1 * Math.PI
        );
        ctx.stroke();
        ctx.fillText(`t`, p.trapLengthB + adjustX2 - 30, -p.trapTop + 11);
      }
    }
    ctx.restore();
  }

  if (level == 5.11) {
    if (p.rollType == "discount") {
      if (p.rollType2 == "before") {
        displayProblem.innerHTML = `
        A discount of ${p.percentageOne}% is given to an item that cost $${p.valueOne}.
        What is the price of the item after discount?
        `;
      }
      if (p.rollType2 == "after") {
        displayProblem.innerHTML = `
        A discount of ${p.percentageOne}% is given to an item.</br> 
        After discount, the item now cost $${p.valueOne}.</br> 
        What is the price of the item before discount?
        `;
      }
      if (p.rollType2 == "change") {
        displayProblem.innerHTML = `
        A discount of ${p.percentageOne}% is given to an item.</br> 
        After discount, the item now cost $${p.valueOne}.</br> 
        What is the amount of discount given?
        `;
      }
    }
    if (p.rollType == "GST") {
      if (p.rollType2 == "before") {
        displayProblem.innerHTML = `
        A ${p.percentageTwo}% GST is charged to an item that cost $${p.valueOne}.
        What is the final amount for the item?
        `;
      }
      if (p.rollType2 == "after") {
        displayProblem.innerHTML = `
        A ${p.percentageTwo}% GST is charged to an item.</br>
        The final cost of the item is $${p.valueOne}.</br> 
        What is the price of the item before GST?
        `;
      }
      if (p.rollType2 == "change") {
        displayProblem.innerHTML = `
        A ${p.percentageTwo}% GST is charged to an item.</br> 
        The final cost of the item is $${p.valueOne}.</br> 
        What is the amount for the GST?
        `;
      }
    }
    if (p.rollType == "increase") {
      if (p.rollType2 == "before") {
        displayProblem.innerHTML = `
        An item cost $${p.valueOne} at first.<br>
        Its value has now increased by ${p.percentageOne}%.<br>
        What is the value of the item now?
        `;
      }
      if (p.rollType2 == "after") {
        displayProblem.innerHTML = `
       The value of an item increased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the item at first?
        `;
      }
      if (p.rollType2 == "change") {
        displayProblem.innerHTML = `
       The value of an item increased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the increase?
        `;
      }
    }
    if (p.rollType == "decrease") {
      if (p.rollType2 == "before") {
        displayProblem.innerHTML = `
        An item cost $${p.valueOne} at first.</br>
        Its value has now decreased by ${p.percentageOne}%.</br>
        What is the value of the item now?
        `;
      }
      if (p.rollType2 == "after") {
        displayProblem.innerHTML = `
       The value of an item decreased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the item at first?
        `;
      }
      if (p.rollType2 == "change") {
        displayProblem.innerHTML = `
       The value of an item decreased by ${p.percentageOne}%.</br>
       It now cost $${p.valueOne}.</br>
       What is the value of the decrease?
        `;
      }
    }
  }

  if (level == 5.12) {
    drawingDisplay();
    // ctx.save();

    if (p.shape == "cube") {
      p.length = (genNumbers(2) + 1) * 5;
      p.breadth = p.height = p.length;
    }
    if (p.length == p.breadth && p.breadth == p.height) {
      p.shape == "cube";
    }
    p.question = `What is the volume of the ${p.shape}?`;

    const height = 60 + p.height * 5 + ((p.height * 5) / 3) * 2 + 10;
    if (height > 275) {
      canvas.setAttribute("height", height);
    } else {
      canvas.setAttribute("height", 275);
      // ctx.save();
      // ctx.translate(50, 0);
      // ctx.restore();
    }

    draw3d.cuboid(
      400,
      275,
      p.length * 5,
      p.breadth * 5,
      p.height * 5,
      p.question
    );
    // ctx.save();
    // let finalDifficulty = difficulty;
    // if (difficulty >= 2) {
    //   finalDifficulty = 3;
    // }
    // if (difficulty >= 3) {
    //   finalDifficulty = 4;
    // }
    // difficulty = Number(difficulty);
    // p.roll = ["v", "h", "l", "b", "ba"][genNumbers(finalDifficulty + 1)];
    // console.log(p.roll);
    // ctx.font = "1em serif";
    // p.volume = p.pointA * (p.pointA + p.pointC) * p.pointB;
    // p.volumeDisplay = (
    //   p.pointA *
    //   (p.pointA + p.pointC) *
    //   p.pointB
    // ).toLocaleString("en-US");
    // if (p.roll == "v") {
    //   ctx.fillText(`Find the volume of the Cuboid`, 20, 20);
    // }
    // if (p.roll == "h") {
    //   ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Height`, 20, 20);
    // }
    // if (p.roll == "b") {
    //   ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Breadth`, 20, 20);
    // }
    // if (p.roll == "l") {
    //   ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Length`, 20, 20);
    // }
    // if (p.roll == "ba") {
    //   ctx.fillText(
    //     `Volume = ${p.volumeDisplay} ml. Find the Base Area`,
    //     20,
    //     20
    //   );
    // }

    // ctx.translate(125, 230);
    // let a = p.pointA;
    // let b = -p.pointB;
    // let c = p.pointC;
    // let d = -p.pointD;

    // drawCuboid(a, b, c, d);

    // if (p.roll == "v") {
    //   ctx.fillText(a, a / 2 - 10, +15);
    //   ctx.fillText(a + c, a + c / 2 + 10, 0 + d / 2);
    //   ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    // }
    // if (p.roll == "h") {
    //   ctx.fillText(a, a / 2 - 10, +15);
    //   ctx.fillText(a + c, a + c / 2 + 10, 0 + d / 2);
    //   ctx.fillText("?", a + c + 5, b + d - b / 2 + 5);
    // }
    // if (p.roll == "b") {
    //   ctx.fillText(a, a / 2 - 10, +15);
    //   ctx.fillText("?", a + c / 2 + 10, 0 + d / 2);
    //   ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    // }
    // if (p.roll == "l") {
    //   ctx.fillText("?", a / 2 - 10, +15);
    //   ctx.fillText(a + c, a + c / 2 + 10, 0 + d / 2);
    //   ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    // }
    // if (p.roll == "ba") {
    //   ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    // }

    // ctx.restore();
  }

  if (level == 5.13) {
    ctx.save();
    ctx.font = "1em serif";
    if (p.rollAnswer == "A") {
      ctx.fillText(`These are identical ${p.rollShape}s.`, 20, 20);
      ctx.fillText(` What is the area of the figure?`, 20, 40);
    }
    if (p.rollAnswer == "B") {
      ctx.fillText(`These are identical ${p.rollShape}.`, 20, 20);
      ctx.fillText(`What is the area of the unshaded parts?`, 20, 40);
    }

    let x = 100;
    let y = 50;
    let x2 = genNumbers(10) + 20;
    let y2 = genNumbers(10) + 20;

    if (p.rollShape == "square") {
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.rect(0, 0, p.squareSide, p.squareSide);
      ctx.stroke();

      // text
      p.shadedArea = (p.squareSide - x2) * (p.squareSide - y2);
      p.shadedArea = Math.floor(p.shadedArea / 100);
      p.unshadedArea = p.squareSide * p.squareSide - p.shadedArea;
      p.unshadedArea = Math.floor(p.unshadedArea / 100);
      ctx.fillText(p.unshadedArea, 0 + 5, 0 + 20);

      ctx.translate(x2, y2);
      ctx.beginPath();
      ctx.rect(0, 0, p.squareSide, p.squareSide);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(0, 0, p.squareSide - x2, p.squareSide - y2);
      ctx.fill();

      // text
      ctx.save();
      ctx.fillStyle = "white";
      ctx.fillText(p.shadedArea, 0 + 5, 0 + 20);
      ctx.restore();
    }

    if (p.rollShape == "rectangle") {
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.rect(0, 0, p.rectLength, p.rectBreadth);
      ctx.stroke();

      // text
      p.shadedArea = (p.rectLength - x2) * (p.rectBreadth - y2);
      p.shadedArea = Math.floor(p.shadedArea / 100);
      p.unshadedArea = p.rectLength * p.rectBreadth - p.shadedArea;
      p.unshadedArea = Math.floor(p.unshadedArea / 100);
      ctx.fillText(p.unshadedArea, 0 + 5, 0 + 20);

      ctx.translate(x2, y2);
      ctx.beginPath();
      ctx.rect(0, 0, p.rectLength, p.rectBreadth);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(0, 0, p.rectLength - x2, p.rectBreadth - y2);
      ctx.fill();

      // text
      ctx.save();
      ctx.fillStyle = "white";
      ctx.fillText(p.shadedArea, 0 + 5, 0 + 20);
      ctx.restore();
    }

    if (p.rollShape == "triangle") {
      ctx.translate(x - 30, y);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.triBase, 0);
      ctx.lineTo(p.triBase, p.triHeight);
      ctx.closePath();
      ctx.stroke();

      let m = p.triHeight / p.triBase;
      let c = y2 / m;
      ctx.beginPath();
      ctx.moveTo(p.triBase, y2);
      ctx.lineTo(p.triBase, p.triHeight);
      ctx.lineTo(c, y2);
      ctx.fill();

      //  text
      p.shadedArea = (1 / 2) * (p.triBase - c) * (p.triHeight - y2);
      p.shadedArea = Math.floor(p.shadedArea / 100);
      p.unshadedArea = (1 / 2) * p.triBase * p.triHeight;
      p.unshadedArea = Math.floor(p.unshadedArea / 100);
      ctx.fillText(p.unshadedArea, p.triBase - 30, 0 + 20);

      // text
      ctx.save();
      ctx.fillStyle = "white";
      ctx.fillText(p.shadedArea, p.triBase - 20, y2 + 16);
      ctx.restore();

      ctx.translate(x2, y2);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.triBase, 0);
      ctx.lineTo(p.triBase, p.triHeight);
      ctx.closePath();
      ctx.stroke();
    }
    ctx.restore();
  }

  if (level == 5.14) {
    ctx.save();
    ctx.font = "1em serif";
    ctx.fillText(`Find the area of the figure.`, 20, 20);

    if (p.roll == "up" || p.roll == "down") {
      if (p.roll == "up") {
        ctx.translate(50, 200);
        drawHorizontalLine(0, 0, p.triX1 + p.triX2, 5);
        ctx.fillText(`${p.triX1 + p.triX2}`, (p.triX1 + p.triX2) / 2 - 15, 20);

        drawVerticalLine(p.triX1 + p.triX2, -p.triY2, p.triY2, 5);
        ctx.fillText(`${p.triY2}`, p.triX1 + p.triX2 + 5 + 3, -p.triY2 / 2);
      }
      if (p.roll == "down") {
        ctx.translate(50, 50);
        p.triY2 = p.triY2 * -1;
        drawHorizontalLine(0, 0, p.triX1 + p.triX2, -5);
        ctx.fillText(`${p.triX1 + p.triX2}`, (p.triX1 + p.triX2) / 2 - 15, -10);

        drawVerticalLine(p.triX1 + p.triX2, 0, -p.triY2, 5);
        ctx.fillText(`${-p.triY2}`, p.triX1 + p.triX2 + 5 + 3, -p.triY2 / 2);
      }
      // draw triangle
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.triX1, 0);
      ctx.lineTo(p.triX2, -p.triY2);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p.triX1, 0);
      ctx.lineTo(p.triX1 + p.triX2, 0);
      ctx.lineTo(p.triX2 + genNumbers(150) + 5, -p.triY2);
      ctx.closePath();
      ctx.stroke();

      // horizontal line
      // ctx.beginPath()
      // ctx.moveTo(0, 5)
      // ctx.lineTo(p.triX1+p.triX2, 5)
      // ctx.stroke()

      // ctx.fillText(`${p.triX1+p.triX2}`, (p.triX1+p.triX2)/2-15, 20)

      // ctx.beginPath()
      // ctx.moveTo(5, 0)
      // ctx.lineTo(0, 5)
      // ctx.lineTo(5, 10)
      // ctx.stroke()

      // ctx.beginPath()
      // ctx.moveTo(p.triX1+p.triX2-5, 0)
      // ctx.lineTo(p.triX1+p.triX2, 5)
      // ctx.lineTo(p.triX1+p.triX2-5, 10)
      // ctx.stroke()

      // vertical line

      // ctx.beginPath()
      // ctx.moveTo(p.triX1+p.triX2+5, 0)
      // ctx.lineTo(p.triX1+p.triX2+5, -p.triY2)
      // ctx.stroke()

      // ctx.fillText(`${p.triY2}`, (p.triX1+p.triX2+5)+3,-p.triY2/2)

      // ctx.beginPath()
      // ctx.moveTo(p.triX1+p.triX2, -5)
      // ctx.lineTo(p.triX1+p.triX2+5, 0)
      // ctx.lineTo(p.triX1+p.triX2+10, -5)
      // ctx.stroke()

      // ctx.beginPath()
      // ctx.moveTo(p.triX1+p.triX2, -p.triY2+5)
      // ctx.lineTo(p.triX1+p.triX2+5, -p.triY2)
      // ctx.lineTo(p.triX1+p.triX2+10, -p.triY2+5)
      // ctx.stroke()
    }
    if (p.roll == "updown") {
      ctx.translate(50, 175);
      drawHorizontalLine(0, 0, p.triX1 + p.triX2, 5);
      ctx.fillText(`${p.triX1 + p.triX2}`, (p.triX1 + p.triX2) / 2 - 15, 20);

      drawVerticalLine(p.triX1 + p.triX2, -p.triY2, p.triY2 + p.triY3, 10);
      ctx.fillText(
        `${p.triY2 + p.triY3}`,
        p.triX1 + p.triX2 + 5 + 5,
        -p.triY2 / 2
      );

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.triX1, 0);
      ctx.lineTo(p.triX2, -p.triY2);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p.triX1, 0);
      ctx.lineTo(p.triX1 + p.triX2, 0);
      ctx.lineTo(p.triX2 + genNumbers(150) + 5, p.triY3);
      ctx.closePath();
      ctx.stroke();
    }

    if (p.roll == "rectangle") {
      let centralize = (400 - p.rectL) / 2;
      ctx.translate(centralize, 100);
      ctx.beginPath();
      ctx.rect(0, 0, p.rectL, p.rectB);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.rectO, p.rectB);
      ctx.lineTo(p.rectL, 0);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.fillStyle = "white";
      p.triA = (1 / 2) * p.rectL * p.rectB;
      ctx.fillText(`${p.triA}cm2`, p.rectL / 2 - 30, 20);
      ctx.restore();
    }

    ctx.restore();
  }

  if (level == 5.15) {
    let syntext = genNumbers(2);
    let largestValue = 0;
    while (p.objectOneV == p.objectTwoV) {
      p.objectOneV = (genNumbers(10) + 1) * 10;
    }
    if (p.objectOneV > p.objectTwoV) {
      largestValue = p.objectOneV;
    } else {
      largestValue = p.objectTwoV;
    }
    p.objectOneSF = p.objectOneV;
    p.objectTwoSF = p.objectTwoV;
    for (let i = 2; i <= largestValue; i++) {
      while (p.objectOneSF % i == 0 && p.objectTwoSF % i == 0) {
        p.objectOneSF /= i;
        p.objectTwoSF /= i;
        console.log(i);
      }
    }

    displayProblem.innerHTML = `
    ${p.objectOneV}% of ${p.objectOne} ${syntext == 0 ? "=" : "is equal to"} ${
      p.objectTwoV
    }% of ${p.objectTwo}
    `;
  }

  if (level == 5.16) {
    if (p.choice2 == "B") {
      p.objectTwoV = p.objectOneV * (genNumbers(5) + 2);
    }
    if (p.choice2 == "S") {
      p.objectTwoV = p.objectOneV;
      p.objectOneV = p.objectOneV * (genNumbers(5) + 2);
    }
    let gender = ["girls", "boys"][genNumbers(2)];
    if (p.choice == "A") {
      displayProblem.innerHTML = `
      ${p.objectOneV} ${gender} shared ${p.objectTwoV} ${
        p.unit
      } of something.</br>
      How much ${p.unit} did each ${gender == "girls" ? "girl" : "boy"} receive?
      `;
    }
    if (p.choice == "B") {
      displayProblem.innerHTML = `
      ${p.objectTwoV} ${p.unit} of something was shared among ${
        p.objectOneV
      } ${gender}.</br>
      How much ${p.unit} did each ${gender == "girls" ? "girl" : "boy"} receive?
      `;
    }
  }

  // if (level == 5.17) {
  //   ctx.save();
  //   ctx.font = "1em serif";
  //   ctx.stroke();
  //   let side = 40;
  //   ctx.fillText("What is the perimeter of the figure?", 20, 20);
  //   ctx.translate((400 - p.layerOne * side) / 2, 50);
  //   // layer 1
  //   ctx.save();
  //   let firstTranslate = genNumbers(side);
  //   ctx.translate(firstTranslate, 0);
  //   if (p.layerOne >= 1) {
  //     ctx.strokeRect(0, 0, side, side);
  //   }
  //   if (p.layerOne >= 2) {
  //     ctx.strokeRect(side, 0, side, side);
  //   }
  //   if (p.layerOne >= 3) {
  //     ctx.strokeRect(side * 2, 0, side, side);
  //   }
  //   if (p.layerOne >= 4) {
  //     ctx.strokeRect(side * 3, 0, side, side);
  //   }
  //   if (p.layerOne == 5) {
  //     ctx.strokeRect(side * 4, 0, side, side);
  //   }

  //   ctx.restore();
  //   // layer 2
  //   ctx.save();
  //   let secondTranslate = firstTranslate + genNumbers(side);
  //   p.layerTwo = genNumbers(p.layerOne);
  //   while (p.layerTwo == 0) {
  //     p.layerTwo = genNumbers(p.layerOne);
  //   }
  //   ctx.translate(secondTranslate, 0);
  //   if (p.layerTwo >= 1) {
  //     ctx.strokeRect(0, side, side, side);
  //   }
  //   if (p.layerTwo >= 2) {
  //     ctx.strokeRect(side, side, side, side);
  //   }
  //   if (p.layerTwo >= 3) {
  //     ctx.strokeRect(side * 2, side, side, side);
  //   }
  //   if (p.layerTwo >= 4) {
  //     ctx.strokeRect(side * 3, side, side, side);
  //   }
  //   ctx.restore();
  //   // layer 3
  //   ctx.save();
  //   let thirdTranslate = secondTranslate + genNumbers(side);
  //   p.layerThree = genNumbers(p.layerTwo);
  //   ctx.translate(thirdTranslate, 0);
  //   if (p.layerThree >= 1) {
  //     ctx.strokeRect(0, side * 2, side, side);
  //   }
  //   if (p.layerThree >= 2) {
  //     ctx.strokeRect(side, side * 2, side, side);
  //   }
  //   if (p.layerThree >= 3) {
  //     ctx.strokeRect(side * 2, side * 2, side, side);
  //   }
  //   if (p.layerThree >= 4) {
  //     ctx.strokeRect(side * 3, side * 2, side, side);
  //   }
  //   ctx.restore();
  //   // layer 4
  //   let fourthTranslate = thirdTranslate + genNumbers(side);
  //   p.layerFour = genNumbers(p.layerThree);
  //   ctx.save();
  //   ctx.translate(fourthTranslate, 0);
  //   if (p.layerFour >= 1) {
  //     ctx.strokeRect(0, side * 3, side, side);
  //   }
  //   if (p.layerFour >= 2) {
  //     ctx.strokeRect(side, side * 3, side, side);
  //   }
  //   if (p.layerFour >= 3) {
  //     ctx.strokeRect(side * 2, side * 3, side, side);
  //   }
  //   if (p.layerFour >= 4) {
  //     ctx.strokeRect(side * 3, side * 3, side, side);
  //   }
  //   ctx.restore();
  // }
  //AVERAGE: SIMPLE
  if (level == 5.17) {
    calculatorSymbol.classList.remove("hidden");
    normalDisplay();

    const averageList = [];
    for (let i = 0; i < p.variables; i++) {
      const zero = genNumbers(5);
      if (zero == 0 && !averageList.includes(0)) {
        averageList.push(0);
      } else {
        averageList.push(genNumbers(50) + 1);
      }
    }
    const sum = averageList.reduce(function (a, b) {
      return a + b;
    });
    const average = sum / averageList.length;
    // console.log(p.answer.toString().split(".")[1].length > 3);
    if (average % 1 != 0) {
      if (average.toString().split(".")[1].length > 3) return updateCalc();
    }
    // if (p.answer.toString().split(".")[1].length > 3) return updateCalc();
    if (p.version == 0) {
      p.answer = average;
      displayProblem.innerHTML = `
  Find the average of: </p>${averageList.join(", ")}
  `;
    }
    if (p.version == 1) {
      const unknownNum = averageList[genNumbers(averageList.length)];
      console.log(unknownNum, averageList);
      p.answer = unknownNum;
      let str = averageList.join(", ");
      console.log(str);
      str = str.replace(unknownNum, "? ");
      displayProblem.innerHTML = `
    Find the missing number.</p>
    The average of the following numbers is ${sum / averageList.length}.</p>
    ${str}
    `;
    }
  }
  if (level == 6.0) {
    if (
      p.numOne == p.denoOne ||
      p.numTwo == p.denoTwo ||
      p.numThree == p.denoThree
    ) {
      p.denoOne += 1;
      p.denoTwo += 1;
      p.denoThree += 1;
    }
    if (p.numOne > p.denoOne) {
      [p.numOne, p.denoOne] = [p.denoOne, p.numOne];
    }
    if (p.numTwo > p.denoTwo) {
      [p.numTwo, p.denoTwo] = [p.denoTwo, p.numTwo];
    }
    if (p.numThree > p.denoThree) {
      [p.numThree, p.denoThree] = [p.denoThree, p.numThree];
    }

    for (let a = p.denoOne; a > 1; a--) {
      if (p.numOne % a == 0 && p.denoOne % a == 0) {
        p.numOne /= a;
        p.denoOne /= a;
      }
    }
    for (let b = p.denoTwo; b > 1; b--) {
      if (p.numOne % b == 0 && p.denoOne % b == 0) {
        p.numOne /= b;
        p.denoOne /= b;
      }
    }
    for (let c = p.denoThree; c > 1; c--) {
      if (p.numThree % c == 0 && p.denoThree % c == 0) {
        p.numThree /= c;
        p.denoThree /= c;
      }
    }

    if (p.choiceOne == "percentage") {
      p.sentenceA = `B ${p.situationA} ${p.percentageOne}%.`;
    }
    if (p.choiceOne == "fraction") {
      p.sentenceA = `B ${p.situationA} ${p.numOne}/${p.denoOne}.`;
    }
    if (p.choiceTwo == "percentage") {
      p.sentenceB = `C ${p.situationB} ${p.percentageTwo}%.`;
    }
    if (p.choiceTwo == "fraction") {
      p.sentenceB = `C ${p.situationB} ${p.numTwo}/${p.denoTwo}.`;
    }
    if (p.choiceThree == "ratio") {
      p.sentenceC = `The ratio of B to C is now, ${p.numThree}:${p.denoThree}.`;
    }
    if (p.choiceThree == "fraction") {
      p.sentenceC = `B is ${p.numThree}/${p.denoThree} of C in the end.`;
    }
    p.sentenceD = `What is ${p.choiceBC} at first?`;
    displayProblem.innerHTML = `
    ${p.sentenceA}</br>
    ${p.sentenceB}</br>
    ${p.sentenceC}</br>
    ${p.sentenceD}
    `;
  }
  if (level == 6.01) {
    if (difficulty <= 0) {
      difficulty = 0;
    } else {
      difficulty = 1;
    }
    ctx.save();
    ctx.font = "1em serif";
    if (difficulty == 0) {
      if (p.rollType == "area") {
        ctx.fillText(`Find the ${p.rollType} of the Circle`, 20, 20);
      }
      if (p.rollType == "circumference") {
        ctx.fillText(`Find the ${p.rollType} of the Circle`, 20, 20);
      }
      if (p.rollPi != "π") {
        ctx.fillText(`π = ${p.rollPi}`, 20, 40);
      }
      ctx.translate(200, 137.5);

      ctx.fillStyle = "orange";
      ctx.beginPath();
      ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

      // center
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(0, 0, 1, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

      if (p.rollRD == "r") {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.radius, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(5, -5);
        ctx.lineTo(0, 0);
        ctx.lineTo(5, 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(p.radius - 5, -5);
        ctx.lineTo(p.radius, 0);
        ctx.lineTo(p.radius - 5, 5);
        ctx.stroke();

        ctx.fillText(`${p.radius}cm`, 0 + 10, -3);
      }

      if (p.rollRD == "d") {
        ctx.beginPath();
        ctx.moveTo(-p.radius, 0);
        ctx.lineTo(p.radius, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-p.radius + 5, -5);
        ctx.lineTo(-p.radius, 0);
        ctx.lineTo(-p.radius + 5, 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(p.radius - 5, -5);
        ctx.lineTo(p.radius, 0);
        ctx.lineTo(p.radius - 5, 5);
        ctx.stroke();

        ctx.fillText(`${p.radius * 2}cm`, 0 - 10, -3);
      }
    }
    if (difficulty == 1) {
      if (p.rollType == "area") {
        ctx.fillText(`Find the ${p.rollType} of the figure`, 20, 20);
      }
      if (p.rollType == "circumference") {
        ctx.fillText(`Find the ${p.rollType} of the figure`, 20, 20);
      }
      if (p.rollPi != "π") {
        ctx.fillText(`π = ${p.rollPi}`, 20, 40);
      }
      ctx.translate(200, 137.5);
      if (p.rollType2 == "semicircle") {
        p.arcAngle = (180 * Math.PI) / 180;
      }
      if (p.rollType2 == "quadrant") {
        p.arcAngle = (90 * Math.PI) / 180;
      }
      if (p.rollType2 == "others") {
        p.arcAngle = (p.rollOthers * Math.PI) / 180;
      }

      if (p.rollType2 == "others" || p.rollType2 == "quadrant") {
        p.rollRD = "r";
      }
      ctx.save();
      ctx.fillStyle = "orange";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, p.radius, 2 * Math.PI - p.arcAngle, 2 * Math.PI);
      ctx.lineTo(0, 0);
      ctx.stroke();
      ctx.fill();
      ctx.restore();

      if (p.rollType2 == "others") {
        ctx.beginPath();
        ctx.arc(0, 0, 10, 2 * Math.PI - p.arcAngle, 2 * Math.PI);
        ctx.stroke();
        if (
          p.rollType2 == "quadrant" ||
          (p.rollType2 == "others" && p.rollOthers <= 90)
        ) {
          ctx.fillText(`${p.rollOthers}°`, +5, -10);
        } else if (
          p.rollType2 == "semicircle" ||
          (p.rollType2 == "others" && p.rollOthers > 90 && p.rollOthers <= 180)
        ) {
          ctx.fillText(`${p.rollOthers}°`, -10, -10);
        } else {
          ctx.fillText(`${p.rollOthers}°`, -50, +2);
        }
      }

      // center
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(0, 0, 1, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

      if (p.rollRD == "r") {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.radius, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(5, -5);
        ctx.lineTo(0, 0);
        ctx.lineTo(5, 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(p.radius - 5, -5);
        ctx.lineTo(p.radius, 0);
        ctx.lineTo(p.radius - 5, 5);
        ctx.stroke();

        ctx.fillText(`${p.radius}cm`, 0 + 10, -3);
      }

      if (p.rollRD == "d") {
        ctx.beginPath();
        ctx.moveTo(-p.radius, 0);
        ctx.lineTo(p.radius, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-p.radius + 5, -5);
        ctx.lineTo(-p.radius, 0);
        ctx.lineTo(-p.radius + 5, 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(p.radius - 5, -5);
        ctx.lineTo(p.radius, 0);
        ctx.lineTo(p.radius - 5, 5);
        ctx.stroke();

        ctx.fillText(`${p.radius * 2}cm`, 0 - 10, -3);
      }
    }
    ctx.restore();
  }

  if (level == 6.02) {
    ctx.save();
    let x = 200;
    let y = 137.5;
    ctx.font = "1em serif";
    if (p.rollType == "triangle") {
      ctx.fillText(`What is the area of the isosceles Triangle?`, 20, 20);
    }
    if (p.rollType == "radius") {
      ctx.fillText(`What is the area of the Circle?`, 20, 20);
    }
    if (p.rollType == "angle") {
      ctx.fillText(`Find ∠${p.rollAngle}.`, 20, 20);
    }
    if (p.rollType == "square") {
      ctx.fillText(`Find the radius of the circle.`, 20, 20);
    }
    if (p.rollType == "square2") {
      ctx.fillText(`Find the area of the square.`, 20, 20);
    }

    if (p.rollType == "triangle") {
      ctx.translate(200, 137.5);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, p.triangleSide);
      ctx.lineTo(p.triangleSide, 0);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, p.triangleSide + 5);
      ctx.lineTo(p.triangleSide + 5, 0);
      ctx.stroke();

      ctx.fillText(
        `${p.triangleSide}`,
        (p.triangleSide + 5) / 2 + 10,
        (p.triangleSide + 5) / 2 + 10
      );
      ctx.beginPath();
      ctx.moveTo(p.triangleSide, 0);
      ctx.lineTo(p.triangleSide + 5, 0);
      ctx.lineTo(p.triangleSide + 5, 5);
      ctx.stroke();

      ctx.save();
      ctx.translate(0, p.triangleSide / 2);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.lineTo(5, 0);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(p.triangleSide / 2, 0);
      ctx.beginPath();
      ctx.moveTo(0, -5);
      ctx.lineTo(0, 5);
      ctx.stroke();
      ctx.restore();

      ctx.beginPath();
      ctx.moveTo(0, p.triangleSide);
      ctx.lineTo(0, p.triangleSide + 5);
      ctx.lineTo(0 + 5, p.triangleSide + 5);
      ctx.stroke();
    }

    if (p.rollType == "radius") {
      ctx.translate(x, y);

      let squareSide = Math.sqrt((1 / 2) * p.radius * p.radius);
      p.squareSideD = Math.floor(squareSide);
      ctx.beginPath();
      ctx.arc(0, 0, 2, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(0, 0, squareSide, -squareSide);
      ctx.stroke();

      // diagonal line
      ctx.save();
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(0, -squareSide);
      ctx.lineTo(squareSide, 0);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(3, -squareSide + 6);
      ctx.lineTo(0, -squareSide);
      ctx.lineTo(6, -squareSide + 3);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(squareSide - 3, -6);
      ctx.lineTo(squareSide, 0);
      ctx.lineTo(squareSide - 6, -3);
      ctx.stroke();

      ctx.fillText(
        `${p.squareSideD}`,
        squareSide / 2 - 20,
        -squareSide / 2 + 10
      );
      ctx.restore();
    }

    if (p.rollType == "angle") {
      // if (p.rotation == p.rotation2){
      //   p.rotation -= 30
      // }
      // if (p.rotation > p.rotation2){
      //   [p.rotation, p.rotation2] = [p.rotation2, p.rotation]
      // }
      // p.netRotation = p.rotation2-p.rotation

      console.log(p.rotation2);
      p.angleOther = (180 - p.rotation2) / 2;
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 2, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.radius, 0);
      ctx.stroke();

      ctx.save();
      ctx.rotate((p.rotation2 * Math.PI) / 180);
      ctx.lineTo(p.radius, 0);
      ctx.restore();
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, (p.rotation2 * Math.PI) / 180);
      ctx.stroke();
      if (p.rollAngle == "a") {
        ctx.fillText(`${p.rotation2}°`, 10, 12);
      }
      if (p.rollAngle == "b") {
        ctx.fillText(`b`, 10, 12);
      }

      ctx.save();
      ctx.translate(p.radius, 0);
      ctx.beginPath();
      ctx.arc(0, 0, 10, ((180 - p.angleOther) * Math.PI) / 180, 1 * Math.PI);
      ctx.stroke();
      if (p.rollAngle == "a") {
        ctx.fillText(`a`, -20, 10);
      }
      if (p.rollAngle == "b") {
        if (p.angleOther % 1 != 0) {
          ctx.fillText(`${p.angleOther}°`, 1, 3);
        } else {
          ctx.fillText(`${p.angleOther}°`, -35, 11);
        }
      }
      ctx.restore();
    }
    if (p.rollType == "square") {
      let squareSide = Math.sqrt((1 / 2) * p.radius * p.radius);
      ctx.fillText(
        `Area of the square is ${(((p.radius / 10) * p.radius) / 10) * 2}cm2.`,
        20,
        40
      );
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 2, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.rect(-squareSide, squareSide, squareSide * 2, -squareSide * 2);
      ctx.stroke();

      ctx.save();
      ctx.rotate(((genNumbers(6) - 2) * 45 * Math.PI) / 180);
      drawHorizontalLine(0, 0, p.radius, 0);
      ctx.fillText(`?`, p.radius / 2, 5);
      ctx.restore();
    }
    if (p.rollType == "square2") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.arc(0, 0, 1, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(-p.radius2, -p.radius2, p.radius2 * 2, p.radius2 * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.radius2, p.radius2);
      ctx.stroke();

      // arrow head
      ctx.beginPath();
      ctx.moveTo(10, 3);
      ctx.lineTo(0, 0);
      ctx.lineTo(3, 10);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p.radius2 - 11, p.radius2 - 6);
      ctx.lineTo(p.radius2, p.radius2);
      ctx.lineTo(p.radius2 - 6, p.radius2 - 11);
      ctx.stroke();

      ctx.fillText(`${p.radius2 / 20} cm`, p.radius2 / 2, p.radius2 / 2);

      ctx.restore();
    }

    ctx.restore();
  }

  if (level == 6.03) {
    console.log(p.rollOne, p.rollTwo, p.rollThree);
    if (p.rollOne == "AN") {
      displayProblem.textContent = `${p.rollTwo}${p.rollAlp} ${p.rollSym} ${p.rollThree}`;
      if (p.rollTwo == 1) {
        displayProblem.textContent = `${p.rollAlp} ${p.rollSym} ${p.rollThree}`;
      }
    }
    if (p.rollOne == "AA") {
      const displayFirst = `${p.rollTwo}${p.rollAlp}`;
      const displaySecond = `${p.rollSymTwo} ${p.rollThree}${p.rollAlp}`;
      displayProblem.textContent = `${displayFirst} ${p.rollSymTwo} ${displaySecond}`;
    }
    if (p.rollOne == "NA") {
      displayProblem.textContent = `${p.rollTwo} ${p.rollSym} ${p.rollThree}${p.rollAlp}`;
      if (p.rollThree == 1) {
        displayProblem.textContent = `${p.rollTwo} ${p.rollSym} ${p.rollAlp}`;
      }
    }
    if (p.rollOne == "AA") {
      displayProblem.textContent = `${p.rollTwo}${p.rollAlp} ${p.rollSymTwo} ${p.rollThree}${p.rollAlp}`;
      if (p.rollTwo == 1) {
        displayProblem.textContent = `${p.rollAlp} ${p.rollSymTwo} ${p.rollThree}${p.rollAlp}`;
      }
      if (p.rollThree == 1) {
        displayProblem.textContent = `${p.rollTwo}${p.rollAlp} ${p.rollSymTwo} ${p.rollAlp}`;
      }
      if (p.rollTwo == 1 && p.rollThree == 1) {
        displayProblem.textContent = `${p.rollAlp} ${p.rollSymTwo} ${p.rollAlp}`;
      }
    }
  }

  if (level == 6.05) {
    if (p.rollOne == "d") {
      console.log(p.roll2);
      let time = p.roll2 == 2 ? p.rollUnits[p.roll][2] : p.rollUnits[p.roll][1];
      displayProblem.innerHTML = `
      Someone travels from point A to B, </br>
      at ${p.rollS} ${p.rollUnits[p.roll][0]}/${p.rollUnits[p.roll][1]} for ${
        p.rollT
      } ${time}</br>
      What is the distance between A and B? 
      `;
    }
    if (p.rollOne == "s") {
      p.distance = p.rollS * p.rollT;
      displayProblem.innerHTML = `
      Someone travels from point A to B,</br>
      which is ${p.distance} ${p.rollUnits[p.roll][0]} apart, in ${p.rollT} ${
        p.rollUnits[p.roll][1]
      }.</br>
      How fast did ${p.identity} travel?
      `;
    }
    if (p.rollOne == "t") {
      p.distance = p.rollS * p.rollT;
      displayProblem.innerHTML = `
      Someone travels from point A to B which is ${p.distance} ${
        p.rollUnits[p.roll][0]
      } apart, </br>
      at ${p.rollS} ${p.rollUnits[p.roll][0]}/${p.rollUnits[p.roll][1]}  .</br>
      How long did ${p.identity} take?
      `;
    }
  }

  if (level == 6.06) {
    if (p.roll == "A") {
      displayProblem.innerHTML = `
      Someone moved from</br>
      A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB}${p.timeUnits},</br>
      then </br>
      B to C at ${p.speedC} units/${p.timeUnits} for ${p.timeC}${p.timeUnits}.</br>
      Whats the average speed of the whole journey?

      `;
    }
    if (p.roll == "B") {
      p.speedA = Math.ceil(
        (p.speedB * p.timeB + p.speedC * p.timeC) / (p.timeB + p.timeC)
      );
      displayProblem.innerHTML = `
      Someone moved from</br>
      A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB} ${p.timeUnits},</br>
      then from B to C in ${p.timeC} ${p.timeUnits}.</br>
      ${p.gender} travelled at ${p.speedA} units/${p.timeUnits} for the whole journey.</br>
      At what speed did ${p.gender} travel between B to C?

      `;
    }
    if (p.roll == "C") {
      p.speedA = Math.ceil(
        (p.speedB * p.timeB + p.speedC * p.timeC) / (p.timeB + p.timeC)
      );
      p.timeA = p.timeB + p.timeC;
      displayProblem.innerHTML = `
      Someone moved from</br>
      A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB} ${p.timeUnits},</br>
      then from B to C in ${p.speedC} units/${p.timeUnits}.</br>
      ${p.gender} travelled at ${p.speedA} units/${p.timeUnits} for ${p.timeA} ${p.timeUnits} the whole journey.</br>
      At what long did ${p.gender} take to travel between B to C?

      `;
    }
  }

  if (level == 6.07) {
    p.distance = p.speedA * p.timeA + p.speedB * p.timeB;
    // normal
    if (p.roll == "A") {
      displayProblem.innerHTML = `
      The distance between A and B is ${p.distance} units. </br>
      A moves at ${p.speedA} units/sec. </br>
      B moves at ${p.speedB} units/sec.  </br>
      How long did it take both to meet?

      `;
    }
    if (p.roll == "B") {
      // Natural
      displayProblem.innerHTML = `
      The distance between A and B is ${p.distance} units. </br>
      A travels ${p.speedA * p.timeA} units at ${p.speedA} units/sec. </br>
      B then sets off at ${p.speedB} units/sec.  </br>
      How long did it take both to meet?

      `;
    }
    if (p.roll == "C") {
      // Head Start
      displayProblem.innerHTML = `
      The distance between A and B is ${p.distance} units. </br>
      A sets off first at ${p.speedA} units/sec for ${p.timeA}secs. </br>
      B then sets off at ${p.speedB} units/sec.  </br>
      How long did it take both to meet?

      `;
    }
    if (p.roll == "D") {
      // Finding Distance
      displayProblem.innerHTML = `
       A and B are moving towards each other at the same time. </br>
       A moves at ${p.speedA} units/sec. </br>
       B moves at ${p.speedB} units/sec.  </br>
      It took ${p.timeA + p.timeB} secs to meet up.</br>
      How far apart are they?

      `;
    }
  }

  if (level == 7) {
    displayProblem.innerHTML = `${p.numOne} ${p.operator} ${p.numTwo}`;
  }

  // WORKING CALCULATION DISPLAY
  if (level == "calOne") {
    //WORKING DISPLAY
    if (
      setting == 1 ||
      setting == 2 ||
      setting == 3 ||
      setting == 4 ||
      setting == 5 ||
      setting == 6
    ) {
      wholeNumberContainer.classList.add("hidden");
      workingContainer.classList.remove("hidden");
    }
    // NORMAL DISPLAY7
    if (setting == 7 || setting == 8 || setting == 9) {
      displayProblem.style.fontSize = "24px";
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
    }
    if (setting == 1) {
      p.numOne = p.numOne + p.numTwo;
      p.numThree = p.numThree + p.numFour;
      if (p.numOne < p.numThree) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne];
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numThree;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }
    if (setting == 2) {
      p.numOne = p.numOne + p.numTwo;
      p.numThree = p.numThree + p.numFour;
      if (p.numOne == p.numThree) {
        skipGlobalUpdateProblem = 1;
        return updateProblems();
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numThree;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (setting == 3) {
      if (p.numTwo + p.numFour < 10) {
        skipGlobalUpdateProblem = 1;
        return updateProblems();
      }
      p.numOne = p.numOne + p.numTwo;
      p.numThree = p.numThree + p.numFour;
      if (p.numOne < p.numThree) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne];
      }
      if (p.numOne + p.numThree > 100) {
        skipGlobalUpdateProblem = 1;
        return updateProblems();
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numThree;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }
    if (setting == 4) {
      p.numOne = p.numOne + p.numTwo;
      p.numThree = p.numThree + p.numFour;
      if (p.numOne % 10 == 0 && p.numThree % 10 == 0) {
        skipGlobalUpdateProblem = 1;
        return updateProblems();
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numThree;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }

    if (setting == 5) {
      if (p.numOne == p.numTwo || p.numFour == p.numTwo) {
        skipGlobalUpdateProblem = 1;
        return updateProblems();
      }
      if (p.version == "+") {
        p.numOne = genNumbers(4) + 1;
        p.numTwo = genNumbers(4) + 1;
        if (p.numOne == p.numTwo || p.numFour == p.numTwo) {
          skipGlobalUpdateProblem = 1;
          return updateProblems();
        }
        p.rowOneValue = p.numOne * 10 + p.numTwo;
        p.rowTwoValue = p.numTwo * 10 + p.numFour;
        p.answerValue = p.rowOneValue + p.rowTwoValue;
        let rowOne = `${p.numOne.toString()}?`;
        let rowTwo = "?" + p.numFour.toString();
        console.log(rowOne, rowTwo);
        firstNum.textContent = rowOne;
        secondNum.textContent = rowTwo;
        operator.textContent = "+";
        workingAnswer.textContent = p.answerValue;
      }
      if (p.version == "-") {
        if (p.numOne == p.numTwo || p.numFour == p.numTwo) {
          skipGlobalUpdateProblem = 1;
          return updateProblems();
        }
        p.rowOneValue = p.numOne * 10 + p.numTwo;
        p.rowTwoValue = p.numTwo * 10 + p.numFour;
        if (p.rowTwoValue > p.rowOneValue) {
          [p.rowTwoValue, p.rowOneValue] = [p.rowOneValue, p.rowTwoValue];
        }
        p.answerValue = p.rowOneValue - p.rowTwoValue;
        let rowOne = p.rowOneValue.toString();
        let rowTwo = p.rowTwoValue.toString();
        console.log(rowOne, rowTwo);
        rowOne = rowOne.replace(p.numTwo.toString(), "?");
        rowTwo = rowTwo.replace(p.numTwo.toString(), "?");
        console.log(rowOne, rowTwo);
        firstNum.textContent = rowOne;
        secondNum.textContent = rowTwo;
        operator.textContent = "-";
        workingAnswer.textContent = p.answerValue;
      }
    }
    if (setting == 6) {
      if (p.operator == "+") {
        operator.textContent = p.operator;
        while (p.numOne + p.numTwo > 100) {
          if (p.numOne > 20) {
            p.numOne -= 10;
          } else {
            p.numTwo -= 10;
          }
        }
        console.log(p.numOne.toString().length, p.numTwo.toString().length);
        if (p.identity == "C") {
          firstNum.textContent = "?".repeat(p.numOne.toString().length);
          secondNum.textContent = p.numTwo;
          workingAnswer.textContent = p.numOne + p.numTwo;
        }
        if (p.identity == "D") {
          firstNum.textContent = p.numOne;
          secondNum.textContent = "?".repeat(p.numTwo.toString().length);
          workingAnswer.textContent = p.numOne + p.numTwo;
        }
      }
      if (p.operator == "-") {
        operator.textContent = p.operator;
        if (p.numTwo > p.numOne) {
          [p.numTwo, p.numOne] = [p.numOne, p.numTwo];
        }
        console.log(p.numOne.toString().length, p.numTwo.toString().length);
        if (p.identity == "C") {
          firstNum.textContent = "?".repeat(p.numOne.toString().length);
          secondNum.textContent = p.numTwo;
          workingAnswer.textContent = p.numOne - p.numTwo;
        }
        if (p.identity == "D") {
          firstNum.textContent = p.numOne;
          secondNum.textContent = "?".repeat(p.numTwo.toString().length);
          workingAnswer.textContent = p.numOne - p.numTwo;
        }
      }
      console.log(p.numOne, p.numTwo);
    }
    if (setting == 7) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        p.startNum += p.difference;
      }
      if (arr[5] > 100 || arr[5] < 0 || p.difference == 0) {
        arr = [];
        skipGlobalUpdateProblem = 1;
        return updateProblems();
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }
    if (setting == 8) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        i++;
        p.startNum += p.diffOne;
        arr.push(p.startNum);
        p.startNum += p.diffTwo;
      }
      if (arr[5] > 100 || arr[5] < 0 || p.diffOne == 0 || p.diffTwo == 0) {
        console.log(arr[5]);
        arr = [];
        skipGlobalUpdateProblem = 1;
        return updateProblems();
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }
    if (setting == 9) {
      let leftSide = resultSide(p.limit, p.multiMin, p.multiMax);
      let rightSide = blankSide(
        leftSide.result,
        p.limit,
        p.multiMin,
        p.multiMax
      );
      // console.log(rightSide);
      if (rightSide == "Error" || leftSide == "Error") {
        console.log("Error");
        return updateCalc();
      }

      let tempStatementArr =
        genNumbers(2) == 0
          ? `${leftSide.statementArr} = ${rightSide.statementArr}`
          : `${rightSide.statementArr} = ${leftSide.statementArr}`;

      p.answer = rightSide.answer;
      displayProblem.innerHTML = tempStatementArr;
    }
  }

  if (level == "calTwo") {
    //DRAWING DISPLAY
    if (setting == 10) {
      drawingDisplay();
    }
    //WORKING DISPLAY
    if (
      setting == 1 ||
      setting == 2 ||
      setting == 3 ||
      setting == 4 ||
      setting == 5 ||
      setting == 6
    ) {
      workingDisplay();
    }
    // NORMAL DISPLAY
    if (setting == 7 || setting == 8 || setting == 9 || setting == 11) {
      displayProblem.style.fontSize = "24px";
      normalDisplay();
      if (setting == 9) {
        displayProblem.style.fontSize = "20px";
        displayProblem.style.textAlign = "left";
      }
    }

    if (setting == 1) {
      const numOneStr = p.numOne.toString();
      let numTwoStr = p.numTwo.toString();
      // if (countA != countB) {
      //   numTwoStr.padStart(countA, "0");
      // }
      // console.log(numTwoStr);
      for (let i = 0; i < numOneStr.length; i++) {
        console.log(numOneStr[i] * 1 + numTwoStr[i] * 1);
        if (numOneStr[i] * 1 + numTwoStr[i] * 1 >= 10) {
          skipGlobalUpdateProblem = 1;
          return updateProblems();
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }
    if (setting == 2) {
      // if (p.numTwo > p.numOne) {
      //   [p.numTwo, p.numOne] = [p.numOne, p.numTwo];
      // }
      const numOneStr = p.numOne.toString();
      let numTwoStr = p.numTwo.toString();
      // if (countA != countB) {
      //   numTwoStr.padStart(countA, "0");
      // }
      // console.log(numTwoStr);
      for (let i = 0; i < numOneStr.length; i++) {
        if (numOneStr[i] * 1 - numTwoStr[i] * 1 < 0) {
          skipGlobalUpdateProblem = 1;
          return updateProblems();
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (setting == 3) {
      while (p.numOne + p.numTwo >= 1000) {
        if (p.numOne > p.numTwo) p.numOne -= 100;
        if (p.numTwo > p.numOne) p.numTwo -= 100;
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }

    if (setting == 4) {
      const arr = p.numOne.toString().split("");
      const arr2 = p.numTwo.toString().split("");
      for (let i = 0; i < 5; i++) {
        if (arr[i] - arr2[i] < 0) {
          break;
        }
        if (i == 4) {
          // updateProblem = 1;
          return updateProblems();
        }
      }
      console.log(arr, arr2);
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (setting == 5) {
      let arrOne = [];
      let arrTwo = [];
      arrOne = p.numOne.toString().split("");
      arrTwo = p.numTwo.toString().split("");
      let join = [...arrOne, ...arrTwo];
      let unique = [...new Set(join)];
      let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(unique, list);
      unique.forEach((el) => {
        console.log(el);
        let index = list.indexOf(el * 1);
        list.splice(index, 1);
      });
      console.log(list);

      p.value = list[genNumbers(list.length)];
      let arrOneStr = arrOne.join("");
      let arrTwoStr = arrTwo.join("");
      console.log("Old: " + p.numOne, p.numTwo);
      let replaceOne = genNumbers(arrOne.length);
      let replaceTwo = genNumbers(arrTwo.length);
      console.log(replaceOne, replaceTwo);
      // if (replaceOne == replaceTwo) {
      //   console.log("Same position");
      //   return updateCalc();
      // }
      arrOneStr = arrOneStr.replace(arrOne[replaceOne], p.value);
      arrTwoStr = arrTwoStr.replace(arrTwo[replaceTwo], p.value);
      p.numOne = arrOneStr * 1;
      p.numTwo = arrTwoStr * 1;
      console.log("New: " + p.numOne, p.numTwo);
      console.log(arrOneStr, arrTwoStr);
      p.rowOne = arrOneStr.replace(p.value, "?");
      p.rowTwo = arrTwoStr.replace(p.value, "?");
      const checkOneArr = p.rowOne.split("");
      const checkTwoArr = p.rowTwo.split("");
      for (let i = 0; i < checkOneArr.length; i++) {
        if (checkOneArr[i] == "?") {
          if (checkOneArr[i] == checkTwoArr[i]) {
            console.log("Final check, still in same position");
            return updateCalc();
          }
        }
      }
      console.log(checkOneArr, checkTwoArr);
      firstNum.textContent = p.rowOne;
      secondNum.textContent = p.rowTwo;
      operator.textContent = p.operator;
      if (p.operator == "-") {
        if (p.numOne - p.numTwo < 0 || p.numTwo > p.numOne) {
          return updateCalc();
        }
        workingAnswer.textContent = p.numOne - p.numTwo;
      }
      if (p.operator == "+") {
        if (p.numOne + p.numTwo > 1000) {
          return updateCalc();
        }
        workingAnswer.textContent = p.numOne + p.numTwo;
      }
    }
    if (setting == 6) {
      if (p.operator == "+") {
        operator.textContent = p.operator;
        while (p.numOne + p.numTwo > 1000) {
          if (p.numOne > 200) {
            p.numOne -= 100;
          } else {
            p.numTwo -= 100;
          }
        }
        console.log(p.numOne.toString().length, p.numTwo.toString().length);
        if (p.identity == "C") {
          firstNum.textContent = "?".repeat(p.numOne.toString().length);
          secondNum.textContent = p.numTwo;
          workingAnswer.textContent = p.numOne + p.numTwo;
        }
        if (p.identity == "D") {
          firstNum.textContent = p.numOne;
          secondNum.textContent = "?".repeat(p.numTwo.toString().length);
          workingAnswer.textContent = p.numOne + p.numTwo;
        }
      }
      if (p.operator == "-") {
        operator.textContent = p.operator;
        if (p.numTwo > p.numOne) {
          [p.numTwo, p.numOne] = [p.numOne, p.numTwo];
        }
        console.log(p.numOne.toString().length, p.numTwo.toString().length);
        if (p.identity == "C") {
          firstNum.textContent = "?".repeat(p.numOne.toString().length);
          secondNum.textContent = p.numTwo;
          workingAnswer.textContent = p.numOne - p.numTwo;
        }
        if (p.identity == "D") {
          firstNum.textContent = p.numOne;
          secondNum.textContent = "?".repeat(p.numTwo.toString().length);
          workingAnswer.textContent = p.numOne - p.numTwo;
        }
      }
      console.log(p.numOne, p.numTwo);
    }

    if (setting == 7) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        p.startNum += p.difference;
      }
      if (arr[5] > 1000 || arr[5] < 0 || p.difference == 0) {
        arr = [];
        return updateCalc();
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }

    if (setting == 8) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        i++;
        p.startNum += p.diffOne;
        arr.push(p.startNum);
        p.startNum += p.diffTwo;
      }
      if (arr[5] > 1000 || arr[5] < 0 || p.diffOne == 0 || p.diffTwo == 0) {
        console.log(arr[5]);
        arr = [];
        return updateCalc();
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }
    // LEFT SIDE RIGHT SIDE
    if (setting == 9) {
      let leftSide = resultSide(p.limit, p.multiMin, p.multiMax);

      // console.log(leftSide);
      // let leftSide = blankSide(
      //   eval(leftSide),
      //   p.limit,
      //   p.multiMin,
      //   p.multiMax
      // ).join(" ");

      let rightSide = blankSide(
        leftSide.result,
        p.limit,
        p.multiMin,
        p.multiMax
      );
      // console.log(rightSide);
      if (rightSide == "Error" || leftSide == "Error") {
        console.log("Error");
        return updateCalc();
      }

      let tempStatementArr =
        genNumbers(2) == 0
          ? `${leftSide.statementArr} = ${rightSide.statementArr}`
          : `${rightSide.statementArr} = ${leftSide.statementArr}`;

      p.answer = rightSide.answer;
      displayProblem.innerHTML = tempStatementArr;
    }
    if (setting == 10) {
      drawIntervals(p.start, p.intervals, p.eachInterval, p.arrow);
      // const largeIntervals = 20;
      // const adjustment = 10;
      // ctx.save();
      // ctx.font = "1em serif";
      // ctx.translate(50, 100);
      // //BEGIN
      // ctx.beginPath();
      // ctx.moveTo(0, -largeIntervals);
      // ctx.fillText(`${p.start}`, -adjustment, -largeIntervals - adjustment);
      // ctx.lineTo(0, largeIntervals);
      // ctx.stroke();

      // //END
      // p.end = p.start + p.eachInterval * p.intervals;
      // ctx.beginPath();
      // ctx.moveTo(300, -largeIntervals);
      // ctx.fillText(`${p.end}`, 300 - adjustment, -largeIntervals - adjustment);
      // ctx.lineTo(300, largeIntervals);
      // ctx.stroke();

      // //START ARROW
      // ctx.beginPath();
      // ctx.moveTo(-10, 0);
      // ctx.lineTo(325, 0);
      // ctx.stroke();

      // //SMALLER INTERVALS
      // for (let i = 1; i < p.intervals; i++) {
      //   const intervalAway = 300 / p.intervals;
      //   // const largeIntervals = 20;
      //   ctx.beginPath();
      //   ctx.moveTo(0 + intervalAway * i, -largeIntervals / 2);
      //   ctx.lineTo(0 + intervalAway * i, largeIntervals / 2);
      //   ctx.stroke();

      //   //DOWNARROW
      //   if (i == p.arrow) {
      //     console.log(p.arrow);
      //     ctx.fillText(`?`, 0 + intervalAway * i - 3, -15);
      //   }
      // }
    }

    //TIME: TIMELINE
    if (setting == 11) {
      console.log(`Hours at first: ${p.hours}, Minutes at first: ${p.mins}`);
      let zone = "am";
      let timeHours = p.hours;
      let totalTime = p.hours * 60;
      zone = zoneOfDay(totalTime);

      if (p.beforeAfter == "before") {
        timeHours = day12Hours(timeHours);
        let minText = p.mins;
        minText = minText.toString();
        if (minText.length == 1) {
          minText = `0${minText}`;
        }
        displayProblem.innerHTML = `
        Something started at ${timeHours}.${minText} ${zone}.</p>
        It lasted for ${
          p.hoursMins == "hours"
            ? `${p.situationHours} h`
            : `${p.situationMins} mins`
        }.</p>
        What time did it end?</p>
        `;
      }
      if (p.beforeAfter == "after") {
        // zone = zoneOfDay(totalTime);
        timeHours = day12Hours(timeHours);
        let minText = p.mins;
        minText = minText.toString();
        if (minText.length == 1) {
          minText = `0${minText}`;
        }
        displayProblem.innerHTML = `
        Something ended at ${timeHours}.${minText} ${zone}.</p>
        It lasted for ${
          p.hoursMins == "hours"
            ? `${p.situationHours} h`
            : `${p.situationMins} mins`
        }.</p>
        What time did it start?</p>
        `;
      }
    }
    // FRACTIONS: IDENTIFICATION
    if (setting == 12) {
      normalDisplay();
      displayProblem.innerHTML = `<p class="mb-2">What fraction of the figure is ${p.type}?</br>`;
      let fractArr = [];
      let unshaded = 0;
      let shaded = 0;
      for (let x = 0; x < p.row; x++) {
        for (let i = 0; i < p.column; i++) {
          if (genNumbers(2) == 0) {
            fractArr.push("⬜️");
            // fractArr.push("?");
            unshaded += 1;
          } else {
            fractArr.push("⬛️");
            shaded += 1;
          }
        }
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `<p class="center">${fractArr.join(" ")}</p>`
        );
        fractArr = [];
      }
      p.black = shaded;
      p.white = unshaded;
      // console.log(fractArr);
    }
    // FRACTIONS: ADDITION AND SUBTRACTION
    if (setting == 13) {
      simpleFractionDisplay();
      denominatorOne.classList.remove("hidden");
      fractionsLine.classList.remove("hidden");
      fractionsWholeNum.textContent = "";
      if (p.operator == "+") {
        while (p.numeOne + p.numeTwo > p.deno) {
          if (p.numeOne >= p.numeTwo) {
            p.numeOne -= 1;
            console.log(`Minus numeratorOne!`);
          }
          if (p.numeOne <= p.numeTwo) {
            p.numeTwo -= 1;
            console.log(`Minus numeratorOne!`);
          }
        }
        numeratorOne.textContent = p.numeOne;
        numeratorTwo.textContent = p.numeTwo;
        denominatorOne.textContent = p.deno;
        denominatorTwo.textContent = p.deno;
      }

      if (p.operator == "-") {
        p.numeOne = genNumbers(p.deno) + 1;
        if (p.numeOne == p.numeTwo && p.numeOne != p.deno) p.numeOne += 1;
        if (p.numeTwo > p.numeOne)
          [p.numeOne, p.numeTwo] = [p.numeTwo, p.numeOne];
        numeratorOne.textContent = p.numeOne;
        numeratorTwo.textContent = p.numeTwo;
        denominatorOne.textContent = p.deno;
        denominatorTwo.textContent = p.deno;
        if (p.numeOne == p.deno) {
          fractionsWholeNum.textContent = 1;
          numeratorOne.textContent = "";
          denominatorOne.classList.add("hidden");
          // denominatorTwo.textContent = "";
          fractionsLine.classList.add("hidden");
        }
      }
      fractionsOperator.textContent = p.operator;
      fractionChoice.textContent = "Solve:";
    }
  }

  //DISPLAY
  if (level == "calThree") {
    // WORKING DISPLAY
    if (
      setting == 1 ||
      setting == 2 ||
      setting == 3 ||
      setting == 4 ||
      setting == 5 ||
      setting == 6 ||
      setting == 9 ||
      setting == 13
    ) {
      workingDisplay();
    }
    // NORMAL DISPLAY
    if (
      setting == 7 ||
      setting == 8 ||
      setting == 11 ||
      setting == 12 ||
      setting == 14 ||
      setting == 15 ||
      setting == 16 ||
      setting == 17 ||
      setting == 19 ||
      setting == 21
    ) {
      normalDisplay();

      if (setting == 16 || setting == 19) {
        displayProblem.style.fontSize = "20px";
        displayProblem.style.textAlign = "left";
      }
    }
    // FRACTIONS DISPLAY
    if (setting == 20 || setting == 21) {
      simpleFractionDisplay();
    }

    if (setting == 18) {
      drawingDisplay();
    }
    if (setting == 1) {
      const numOneStr = p.numOne.toString();
      let numTwoStr = p.numTwo.toString();
      // if (countA != countB) {
      //   numTwoStr.padStart(countA, "0");
      // }
      // console.log(numTwoStr);
      for (let i = 0; i < numOneStr.length; i++) {
        console.log(numOneStr[i] * 1 + numTwoStr[i] * 1);
        if (numOneStr[i] * 1 + numTwoStr[i] * 1 >= 10) {
          skipGlobalUpdateProblem = 1;
          return updateProblems();
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }
    if (setting == 2) {
      // if (p.numTwo > p.numOne) {
      //   [p.numTwo, p.numOne] = [p.numOne, p.numTwo];
      // }
      const numOneStr = p.numOne.toString();
      let numTwoStr = p.numTwo.toString();
      // if (countA != countB) {
      //   numTwoStr.padStart(countA, "0");
      // }
      // console.log(numTwoStr);
      for (let i = 0; i < numOneStr.length; i++) {
        if (numOneStr[i] * 1 - numTwoStr[i] * 1 < 0) {
          return updateProblems();
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (setting == 3) {
      while (p.numOne + p.numTwo >= 10000) {
        if (p.numOne > p.numTwo) p.numOne -= 1000;
        if (p.numTwo > p.numOne) p.numTwo -= 1000;
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }

    if (setting == 4) {
      if (p.numTwo > p.numOne) {
        [p.numTwo, p.numOne] = [p.numOne, p.numTwo];
      }
      const numOneArr = p.numOne.toString().split("");
      const numTwoArr = p.numTwo.toString().split("");
      for (let i = 0; i < numOneArr.length; i++) {
        if (numOneArr[i] - numTwoArr[i] < 0) {
          break;
        }
        if (numOneArr.length == i) {
          return updateCalc();
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }

    if (setting == 5) {
      let arrOne = p.numOne.toString().split("");
      let arrTwo = p.numTwo.toString().split("");
      let join = [...arrOne, ...arrTwo];
      let unique = [...new Set(join)];
      let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(unique, list);
      unique.forEach((el) => {
        console.log(el);
        let index = list.indexOf(el * 1);
        list.splice(index, 1);
      });
      console.log(list);

      p.value = list[genNumbers(list.length)];
      let arrOneStr = arrOne.join("");
      let arrTwoStr = arrTwo.join("");
      console.log("Old: " + p.numOne, p.numTwo);
      let replaceOne = genNumbers(arrOne.length);
      let replaceTwo = genNumbers(arrTwo.length);
      if (replaceOne == replaceTwo) return updateCalc();
      arrOneStr = arrOneStr.replace(arrOne[replaceOne], p.value);
      arrTwoStr = arrTwoStr.replace(arrTwo[replaceTwo], p.value);
      p.numOne = arrOneStr * 1;
      p.numTwo = arrTwoStr * 1;
      console.log("New: " + p.numOne, p.numTwo);
      console.log(arrOneStr, arrTwoStr);
      p.rowOne = arrOneStr.replace(p.value, "?");
      p.rowTwo = arrTwoStr.replace(p.value, "?");
      const checkOneArr = p.rowOne.split("");
      const checkTwoArr = p.rowTwo.split("");
      for (let i = 0; i < checkOneArr.length; i++) {
        if (checkOneArr[i] == "?") {
          if (checkOneArr[i] == checkTwoArr[i]) {
            console.log("Final check, still in same position");
            return updateCalc();
          }
        }
      }
      firstNum.textContent = p.rowOne;
      secondNum.textContent = p.rowTwo;
      operator.textContent = p.operator;
      if (p.operator == "-") {
        if (p.numOne - p.numTwo < 0 || p.numTwo > p.numOne) {
          return updateCalc();
        }
        let numOneArr = p.rowOne.split("");
        let numTwoArr = p.rowTwo.split("");
        const indexOne = numOneArr.indexOf("?");
        const indexTwo = numTwoArr.indexOf("?");
        console.log(numOneArr, numTwoArr, indexOne, indexTwo);
        workingAnswer.textContent = p.numOne - p.numTwo;
        if (indexOne == indexTwo && workingAnswer.split("")[indexTwo] == 0)
          return updateCalc();
      }
      if (p.operator == "+") {
        if (p.numOne + p.numTwo > 10000) {
          return updateCalc();
        }
        workingAnswer.textContent = p.numOne + p.numTwo;
      }
    }

    if (setting == 6) {
      if (p.operator == "+") {
        operator.textContent = p.operator;
        while (p.numOne + p.numTwo > 10000) {
          if (p.numOne > 2000) {
            p.numOne -= 1000;
          } else {
            p.numTwo -= 1000;
          }
        }
        console.log(p.numOne.toString().length, p.numTwo.toString().length);
        if (p.identity == "C") {
          firstNum.textContent = "?".repeat(p.numOne.toString().length);
          secondNum.textContent = p.numTwo;
          workingAnswer.textContent = p.numOne + p.numTwo;
        }
        if (p.identity == "D") {
          firstNum.textContent = p.numOne;
          secondNum.textContent = "?".repeat(p.numTwo.toString().length);
          workingAnswer.textContent = p.numOne + p.numTwo;
        }
      }
      if (p.operator == "-") {
        operator.textContent = p.operator;
        if (p.numTwo > p.numOne) {
          [p.numTwo, p.numOne] = [p.numOne, p.numTwo];
        }
        console.log(p.numOne.toString().length, p.numTwo.toString().length);
        if (p.identity == "C") {
          firstNum.textContent = "?".repeat(p.numOne.toString().length);
          secondNum.textContent = p.numTwo;
          workingAnswer.textContent = p.numOne - p.numTwo;
        }
        if (p.identity == "D") {
          firstNum.textContent = p.numOne;
          secondNum.textContent = "?".repeat(p.numTwo.toString().length);
          workingAnswer.textContent = p.numOne - p.numTwo;
        }
      }
      console.log(p.numOne, p.numTwo);
    }

    if (setting == 7) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        p.startNum += p.difference;
      }
      if (arr[5] > 10000 || arr[5] < 0 || p.difference == 0) {
        arr = [];
        return updateCalc();
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }

    if (setting == 8) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        i++;
        p.startNum += p.diffOne;
        arr.push(p.startNum);
        p.startNum += p.diffTwo;
      }
      if (arr[5] > 10000 || arr[5] < 0 || p.diffOne == 0 || p.diffTwo == 0) {
        console.log(arr[5]);
        arr = [];
        return updateCalc();
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }

    if (setting == 9) {
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.multiple;
      operator.textContent = "x";
      workingAnswer.textContent = "?";
    }

    // OVERLAPPING PLACE VALUE
    if (setting == 10) {
      normalDisplay();
      displayProblem.style.fontSize = "1em";
      let overlappingArr = [
        `${p.whole} ones`,
        `${p.tens} tens`,
        `${p.hundreds} hundreds`,
      ];
      for (let i = 2; i > 0; i--) {
        const include = genNumbers(2);
        if (include == 1) {
          p.sentenceArr.push(overlappingArr[i]);
        }
      }
      if (p.sentenceArr.length < 2) {
        console.log("Empty 🥲");
        return updateCalc();
      }
      console.log(p.sentenceArr);
      displayProblem.innerHTML = `
      Find the value of:</p>
      ${p.sentenceArr.join(", ")}.`;
    }

    if (setting == 11) {
      let num = p.multiplier * p.divisor;
      displayProblem.innerHTML = `${num} ÷ ${p.divisor} = ?`;
    }

    if (setting == 12) {
      let num = p.multiplier * p.divisor + p.remainder;
      if (p.remainder == 0) return updateCalc();
      displayProblem.innerHTML = `${num} ÷ ${p.divisor} = ?`;
    }
    if (setting == 13) {
      let num = genUniqNum(3);
      let str = num.toString();
      console.log(str);
      const position = genNumbers(str.length);
      const replaceNum = str[position];
      p.replaced = replaceNum;
      str = str.replace(replaceNum, "?");
      firstNum.textContent = str;
      operator.textContent = "x";
      secondNum.textContent = p.multiplier;
      workingAnswer.textContent = num * p.multiplier;
    }

    if (setting == 14) {
      let arrOne = [p.sets, "x", p.sums];
      let arrTwo = [p.sets, "x", p.numOne];
      let arrThree = [p.sets, "x", "?"];
      genNumbers[2] == 0
        ? ([arrOne[0], arrOne[2]] = [arrOne[2], arrOne[0]])
        : null;
      arrOne = arrOne.join(" ");
      genNumbers[2] == 0
        ? ([arrTwo[0], arrTwo[2]] = [arrTwo[2], arrTwo[0]])
        : null;
      arrTwo = arrTwo.join(" ");
      genNumbers[2] == 0
        ? ([arrThree[0], arrThree[2]] = [arrThree[2], arrThree[0]])
        : null;
      arrThree = arrThree.join(" ");
      let arrDisplay = [arrOne];
      const equalPosition = [0, 2][genNumbers(2)];
      arrDisplay.splice(equalPosition, 0, "=");
      if (equalPosition == 0) {
        // console.log(p.sums, p.numOne);
        let tempLeft = [];
        if (genNumbers(2) == 0) {
          tempLeft = [arrThree, arrTwo];
          if (p.sums > p.numOne) {
            tempLeft.splice(1, 0, "+");
            p.version = 1;
          }
          if (p.sums <= p.numOne) {
            tempLeft.splice(1, 0, "-");
            p.version = 2;
          }
          if (p.blank == 1 || p.blank == 2) {
            tempLeft[0] = "_____";
          }
          tempLeft = tempLeft.join(" ");
        } else {
          tempLeft = [arrTwo, arrThree];
          if (p.sums > p.numOne) {
            tempLeft.splice(1, 0, "+");
            p.version = 3;
          }
          if (p.sums <= p.numOne) {
            tempLeft.splice(1, 0, "-");
            p.version = 4;
          }
          if (p.blank == 1 || p.blank == 2) {
            tempLeft[2] = "_____";
          }
          tempLeft = tempLeft.join(" ");
        }
        arrDisplay.unshift(tempLeft);
      }
      if (equalPosition == 2) {
        let tempRight = [];
        if (genNumbers(2) == 0) {
          tempRight = [arrThree, arrTwo];
          if (p.sums > p.numOne) {
            tempRight.splice(1, 0, "+");
            p.version = 5;
          }
          if (p.sums <= p.numOne) {
            tempRight.splice(1, 0, "-");
            p.version = 6;
          }
          if (p.blank == 1 || p.blank == 2) tempRight[0] = "_____";
          tempRight = tempRight.join(" ");
        } else {
          tempRight = [arrTwo, arrThree];
          if (p.sums > p.numOne) {
            tempRight.splice(1, 0, "+");
            p.version = 7;
          }
          if (p.sums <= p.numOne) {
            tempRight.splice(1, 0, "-");
            p.version = 8;
          }
          if (p.blank == 1 || p.blank == 2) tempRight[2] = "_____";
          tempRight = tempRight.join(" ");
        }
        arrDisplay.push(tempRight);
      }
      arrDisplay = arrDisplay.join(" ");
      displayProblem.textContent = `${arrDisplay}`;
    }

    if (setting == 15) {
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      p.num = p.quotient * p.divisor + p.remainder;
      const version = genNumbers(2);
      if (version == 0) {
        displayProblem.innerHTML = `
      A number when divided by ${p.divisor}, returns ${p.quotient} as its quotient with a remainder of ${p.remainder}.</p>
      What is the original number?</p>
      
      `;
      }
      if (version == 1) {
        displayProblem.innerHTML = `
        A number has a quotient of ${p.quotient} and has ${p.remainder} as its remainder when divided by ${p.divisor}.</p>
        What is the original number?
        `;
      }
    }

    // LEFT SIDE RIGHT SIDE
    if (setting == 16) {
      let leftSide = resultSide(p.limit, p.multiMin, p.multiMax);

      // console.log(leftSide);
      // let leftSide = blankSide(
      //   eval(leftSide),
      //   p.limit,
      //   p.multiMin,
      //   p.multiMax
      // ).join(" ");

      let rightSide = blankSide(
        leftSide.result,
        p.limit,
        p.multiMin,
        p.multiMax
      );
      // console.log(rightSide);
      if (rightSide == "Error" || leftSide == "Error") {
        console.log("Error");
        return updateCalc();
      }

      let tempStatementArr =
        genNumbers(2) == 0
          ? `${leftSide.statementArr} = ${rightSide.statementArr}`
          : `${rightSide.statementArr} = ${leftSide.statementArr}`;

      p.answer = rightSide.answer;
      displayProblem.innerHTML = tempStatementArr;
    }
    // MULTIPLICATION AND DIVISION WHILE BREAKING UP CONVENIENT NUMBERS
    if (setting == 17) {
      p.numOne = p.numOne * p.convenientOne;
      p.numTwo = p.numTwo * p.convenientTwo;
      if (p.numOne * p.numTwo > 10000) return updateCalc();
      if (p.operator == "x") {
        displayProblem.innerHTML = `
        ${p.numOne} x ${p.numTwo} = ?
        `;
      }
      if (p.operator == "÷") {
        if (p.numOne < 10) {
          p.numOne *= 10;
        }
        const answer = p.numOne * p.numTwo;
        if (p.numOne * p.numTwo > 10000) return updateCalc();
        displayProblem.innerHTML = `
        ${answer} ÷ ${p.numOne} = ?`;
      }
    }

    if (setting == 18) {
      drawIntervals(p.start, p.intervals, p.eachInterval, p.arrow);
    }

    if (setting == 19) {
      normalDisplay();
      let zone = "a.m";
      let totalTime = p.hours * 60;
      zone = zoneOfDay(totalTime);
      if (p.beforeAfter == "before") {
        // let timeHours = p.hours;
        let hourText = day12Hours(p.hours);
        let minText = p.mins;
        minText = minText.toString();
        if (minText.length == 1) {
          minText = `0${minText}`;
        }
        displayProblem.innerHTML = `
        Something started at ${hourText}.${minText} ${zone}</p>
        It lasted for ${p.situationHours} h ${p.situationMins} mins.</p>
        What time did it end?</p>
        `;
      }
      if (p.beforeAfter == "after") {
        // let timeHours = p.hours;
        let hourText = day12Hours(p.hours);
        let minText = p.mins;
        minText = minText.toString();
        if (minText.length == 1) {
          minText = `0${minText}`;
        }
        displayProblem.innerHTML = `
        Something ended at ${hourText}.${minText} ${zone}</p>
        It lasted for ${p.situationHours} h ${p.situationMins} mins.</p>
        What time did it start?</p>
        `;
      }
    }
    // MONEY: ADDITION AND SUBTRACTION
    if (setting == 20) {
      normalDisplay();

      if (p.symbol == "+" || p.symbol == "-") {
        if (p.symbol == "-") {
          if (p.varA < p.varB) [p.varA, p.varB] = [p.varB, p.varA];
        }
        let displayBType = ["dollars", "cents"][genNumbers(2)];

        if (displayBType == "dollars") {
          displayProblem.innerHTML = `${p.varA}¢ ${p.symbol} $${(
            p.varB / 100
          ).toFixed(2)} = $ ?
          `;
        }
        if (displayBType == "cents") {
          displayProblem.innerHTML = `${p.varA}¢ ${p.symbol} ${p.varB} ¢ = $ ?
          `;
        }
      }

      if (p.symbol == "x") {
        p.varB = genNumbers(8) + 2;
        displayProblem.innerHTML = `
        $${(p.varA / 100).toFixed(2)} x ${p.varB} = $ ?
        `;
      }
    }
    //FRACTIONS: SHAPES
    if (setting == 21) {
      drawingDisplay();
      drawForFraction(state, "fraction");
      // console.log(mediumColumn, smallRow, p.shaded, p.total);
    }

    // FRACTIONS: ADDITION AND SUBTRACTION
    if (setting == 22) {
      simpleFractionDisplay();
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      if (p.denoOne == p.denoTwo) return updateCalc();
      if (p.operator == "+") {
        if (p.numeOne / p.denoOne + p.numeTwo / p.denoTwo >= 1)
          return updateCalc();
        numeratorOne.textContent = p.numeOne;
        denominatorOne.textContent = p.denoOne;
        numeratorTwo.textContent = p.numeTwo;
        denominatorTwo.textContent = p.denoTwo;
      }
      if (p.operator == "-") {
        if (p.numeOne / p.denoOne < p.numeTwo / p.denoTwo) {
          [p.numeOne, p.numeTwo] = [p.numeTwo, p.numeOne];
          [p.denoOne, p.denoTwo] = [p.denoTwo, p.denoOne];
        }
        numeratorOne.textContent = p.numeOne;
        denominatorOne.textContent = p.denoOne;
        numeratorTwo.textContent = p.numeTwo;
        denominatorTwo.textContent = p.denoTwo;
      }
      fractionsOperator.textContent = p.operator;
      fractionChoice.textContent = "Solve:";
    }

    //FRACTIONS: EXPANSION AND SIMPLIFICATION
    if (setting == 23) {
      simpleFractionDisplay();
      [p.oriNume, p.oriDeno] = simplify(p.oriNume, p.oriDeno);
      if (p.mulOne == p.mulTwo) p.mulTwo += 1;
      const firstNume = p.oriNume * p.mulOne;
      const firstDeno = p.oriDeno * p.mulOne;
      const secondNume = p.oriNume * p.mulTwo;
      const secondDeno = p.oriDeno * p.mulTwo;
      if (p.mulTwo > p.mulOne) {
        if (p.mulTwo % p.mulOne == 0) return updateCalc();
      } else {
        if (p.mulOne % p.mulTwo == 0) return updateCalc();
      }
      numeratorOne.textContent = firstNume;
      denominatorOne.textContent = firstDeno;
      numeratorTwo.textContent = secondNume;
      denominatorTwo.textContent = secondDeno;
      fractionsOperator.textContent = "=";
      fractionChoice.textContent = "Find the missing number";
      if (p.replace == "1") {
        numeratorOne.textContent = "?";
        p.answer = firstNume;
      }
      if (p.replace == "2") {
        numeratorTwo.textContent = "?";
        p.answer = secondNume;
      }
      if (p.replace == "3") {
        denominatorOne.textContent = "?";
        p.answer = firstDeno;
      }
      if (p.replace == "4") {
        denominatorTwo.textContent = "?";
        p.answer = secondDeno;
      }
    }
  }

  if (level == "calFour") {
    console.log(setting);
    // WORKING DISPLAY
    if (setting == 4) {
      wholeNumberContainer.classList.add("hidden");
      workingContainer.classList.remove("hidden");
      fractionsContainerTwo.classList.add("hidden");
    }

    // NORMAL DISPLAY

    if ([1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15].includes(setting * 1)) {
      displayProblem.style.fontSize = "20px";
      wholeNumberContainer.classList.remove("hidden");
      fractionsContainerTwo.classList.add("hidden");
      workingContainer.classList.add("hidden");
    }
    //MIXED FRACTIONS DISPLAY
    if (setting == 6 || setting == 7) {
      wholeNumberContainer.classList.add("hidden");
      workingContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      equalSymbolTwo.classList.remove("hidden");
    }
    if (setting != 6 && setting != 7) {
      equalSymbolTwo.classList.add("hidden");
      equalSymbol.textContent = "=";
    }
    if (setting == 1) {
      if (p.numOne == p.numTwo) {
        return updateProblems();
      }
      let multiplePos = [
        "",
        "",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
      ][p.multiple];

      // START CHANGE DISPLAY
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
      // END CHANGE DISPLAY
      let holdingNum = p.numOne;
      displayProblem.innerHTML = `
      What is the first common multiple of ${p.numOne} and ${p.numTwo}?</p>
      What is its ${multiplePos} common multiple?
      `;
      while (holdingNum % p.numTwo != 0) {
        holdingNum += p.numOne;
      }
      p.numOne = holdingNum;
    }
    if (setting == 2) {
      // START CHANGE DISPLAY
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
      // END CHANGE DISPLAY
      let exclude = [7, 11, 13, 17, 19, 23, 29, 31];
      if (exclude.includes(p.numOne)) {
        console.log("Prime number detected!");
        return updateProblems();
      }
      for (let i = 1; i <= p.numOne; i++) {
        if (p.numOne % i == 0) {
          arr.push(i);
        }
      }
      displayProblem.innerHTML = `
      What are the factors of ${p.numOne}?</p>
      <i>List in ascending order.</i>`;
    }
    if (setting == 3) {
      // START CHANGE DISPLAY
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
      // END CHANGE DISPLAY
      let exclude = [7, 11, 13, 17, 19, 23, 29, 31];
      if (
        exclude.includes(p.numOne) ||
        exclude.includes(p.numTwo) ||
        p.numOne == p.numTwo
      ) {
        // console.log("Prime number detected!");
        return updateCalc();
      }
      console.log(p.numOne, p.numTwo);
      for (let i = 1; i <= p.numOne; i++) {
        if (p.numOne % i == 0) {
          arr.push(i);
        }
      }
      for (let i = 1; i <= p.numTwo; i++) {
        if (p.numTwo % i == 0) {
          arr2.push(i);
        }
      }
      console.log(arr, arr2);
      if (arr.length <= arr2.length) {
        arr.forEach((el) => {
          if (arr2.includes(el)) {
            arr3.push(el);
            console.log(el, arr3);
          }
        });
      } else {
        arr2.forEach((el) => {
          if (arr.includes(el)) {
            arr3.push(el);
            console.log(el, arr3);
          }
        });
      }
      if (arr3.length < 3) {
        arr.length = 0;
        arr2.length = 0;
        arr3.length = 0;
        return updateCalc();
      }
      displayProblem.innerHTML = `
      What is/are the common factors of ${p.numOne} and ${p.numTwo}?</p>
      <i>List in ascending order.</i>`;
    }
    if (setting == 4) {
      if (p.numOne % 10 == 0) {
        p.numOne += 1;
      }
      if (p.numTwo % 10 == 0) {
        p.numTwo += 1;
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "x";
      workingAnswer.textContent = "?";
    }

    // LEFT SIDE RIGHT SIDE
    if (setting == 5) {
      let leftSide = resultSide(p.limit, p.multiMin, p.multiMax);
      let rightSide = blankSide(
        leftSide.result,
        p.limit,
        p.multiMin,
        p.multiMax
      );
      // console.log(rightSide);
      if (rightSide == "Error" || leftSide == "Error") {
        console.log("Error");
        return updateCalc();
      }

      let tempStatementArr =
        genNumbers(2) == 0
          ? `${leftSide.statementArr} = ${rightSide.statementArr}`
          : `${rightSide.statementArr} = ${leftSide.statementArr}`;

      p.answer = rightSide.answer;
      displayProblem.innerHTML = tempStatementArr;
    }

    if (setting == 6) {
      if (p.numOne > p.denoOne) [p.numOne, p.denoOne] = [p.denoOne, p.numOne];
      if (p.numOne == p.denoOne) p.denoOne += 1;
      if (p.numTwo > p.denoTwo) [p.numTwo, p.denoTwo] = [p.denoTwo, p.numTwo];
      if (p.numTwo == p.denoTwo) p.denoTwo += 1;
      if (p.denoOne == p.denoTwo) p.denoTwo += 1;
      [p.numOne, p.denoOne] = simplify(p.numOne, p.denoOne);
      [p.numTwo, p.denoTwo] = simplify(p.numTwo, p.denoTwo);
      if (p.denoOne == p.denoTwo) p.denoTwo += 1;
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numOne;
      twoDenominator.textContent = p.denoOne;
      threeWholeNumber.textContent = p.wholeTwo;
      threeNumerator.textContent = p.numTwo;
      threeDenominator.textContent = p.denoTwo;
      equalSymbol.textContent = "+";
    }
    if (setting == 7) {
      if (p.wholeTwo > p.wholeOne)
        [p.wholeOne, p.wholeTwo] = [p.wholeTwo, p.wholeOne];
      if (p.wholeOne == p.wholeTwo) p.wholeOne += 1;
      if (p.numOne > p.denoOne) [p.numOne, p.denoOne] = [p.denoOne, p.numOne];
      if (p.numOne == p.denoOne) p.denoOne += 1;
      if (p.numTwo > p.denoTwo) [p.numTwo, p.denoTwo] = [p.denoTwo, p.numTwo];
      if (p.numTwo == p.denoTwo) p.denoTwo += 1;
      if (p.denoOne == p.denoTwo) p.denoTwo += 1;
      console.log(p.numOne, p.denoOne, p.numTwo, p.denoTwo);
      [p.numOne, p.denoOne] = simplify(p.numOne, p.denoOne);
      [p.numTwo, p.denoTwo] = simplify(p.numTwo, p.denoTwo);
      if (p.denoOne == p.denoTwo) return updateCalc();
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numOne;
      twoDenominator.textContent = p.denoOne;
      threeWholeNumber.textContent = p.wholeTwo;
      threeNumerator.textContent = p.numTwo;
      threeDenominator.textContent = p.denoTwo;
      equalSymbol.textContent = "-";
    }

    // FRACTIONS: UNIT SENTENCE
    if (setting == 8) {
      normalDisplay();
      // content

      while (p.numerator == p.denominator) {
        p.numerator = genNumbers(9) + 1;
        p.denominator = genNumbers(9) + 1;
      }

      if (p.numerator > p.denominator) {
        [p.numerator, p.denominator] = swap(p.numerator, p.denominator);
      }

      [p.numerator, p.denominator] = simplify(p.numerator, p.denominator);
      console.log(p.numerator, p.denominator);

      p.firstUnit = p.numerator;
      p.secondUnit = p.denominator - p.numerator;
      p.totalUnit = p.denominator;
      p.differenceUnit = Math.abs(p.numerator - p.secondUnit);

      if (p.firstUnit == p.secondUnit) {
        console.log("Updated");
        return updateProblems();
      }
      if (p.secondSelection == 3) {
        p.identity = genNumbers(2);
      }
      // let second = type[identity][p.secondSelection]
      while (p.lastSelection == p.secondSelection)
        p.lastSelection = [genNumbers(3)];

      let last = p.type[p.identity][p.lastSelection];
      if (p.lastSelection == 0) p.lastUnits = p.firstUnit;
      if (p.lastSelection == 1) p.lastUnits = p.secondUnit;
      if (p.lastSelection == 2) p.lastUnits = p.totalUnit;

      if (p.secondSelection == 0) {
        p.value = p.firstUnit * (genNumbers(5) + 5);
      } else if (p.secondSelection == 1) {
        p.value = p.secondUnit * (genNumbers(5) + 5);
      } else if (p.secondSelection == 2) {
        p.value = p.totalUnit * (genNumbers(5) + 5);
      } else {
        p.value = p.differenceUnit * (genNumbers(5) + 5);
      }
      if (p.secondSelection != 3) {
        p.secondSelection = p.type[p.identity][p.secondSelection];
      }
      console.log(`First Selection: ${p.firstSelection}, ${p.numerator} units`);
      console.log(`Second Selection: ${p.secondSelection}, ${p.value}`);
      console.log(`Last Selection: ${p.lastSelection}, ${p.denominator}`);

      if ((p.identity == 0 || p.identity == 1) && p.secondSelection != 3) {
        displayProblem.innerHTML = `
     ${p.firstSelection == 0 ? p.firstUnit : p.secondUnit}/${
          p.denominator
        } of the ${p.type[p.identity][2]} are ${
          p.type[p.identity][p.firstSelection]
        }.</br>
     There are ${p.value} ${p.secondSelection}.</br>
     How many ${last} are there?
    `;
      } else if (
        (p.identity == 2 || p.identity == 3) &&
        p.secondSelection != 3
      ) {
        displayProblem.innerHTML = `
     ${p.firstSelection == 0 ? p.firstUnit : p.secondUnit}/${
          p.denominator
        } of the ${p.type[p.identity][2]} was ${
          p.type[p.identity][p.firstSelection]
        }.</br>
     ${
       p.secondSelection == "total money"
         ? `There were $${p.value} at first.`
         : `$${p.value} was ${p.secondSelection}.`
     }</br>
     ${
       p.lastSelection == 2
         ? `How much were there at first?`
         : `How much was ${last}?`
     }
    `;
      } else if (
        (p.identity == 0 || p.identity == 1) &&
        p.secondSelection == 3
      ) {
        console.log("here");
        displayProblem.innerHTML = `
       ${p.firstSelection == 0 ? p.firstUnit : p.secondUnit}/${
          p.denominator
        } of the ${p.type[p.identity][2]} are ${
          p.type[p.identity][p.firstSelection]
        }.</br>
       There are ${p.value} ${p.firstUnit > p.secondUnit ? "more" : "less"} ${
          p.type[p.identity][0]
        } than ${p.type[p.identity][1]} </br>
       How many ${last} are there?
      `;
      } else {
        return updateProblems();
      }
    }

    //FORM FRACTIONS
    if (setting == 9) {
      normalDisplay();
      if (p.version == 0) {
        displayProblem.innerHTML = `
        What fraction is ${p.smallerValue} ${p.smallUnit} of ${p.biggerValue} ${p.bigUnit}?
        `;
      }
      if (p.version == 1) {
        displayProblem.innerHTML = `
        What fraction is ${p.biggerValue} ${p.bigUnit} of ${p.smallerValue} ${p.smallUnit}?
        `;
      }
      if (p.version == 2) {
        displayProblem.innerHTML = `
        What fraction of ${p.smallerValue} ${p.smallUnit} is ${p.biggerValue} ${p.bigUnit}?
        `;
      }
      if (p.version == 3) {
        displayProblem.innerHTML = `
        What fraction of ${p.biggerValue} ${p.bigUnit} is ${p.smallerValue} ${p.smallUnit}?
        `;
      }
    }
    // FRACTIONS: CONVERSION
    if (setting == 10) {
      normalDisplay();
      if ((p.unitB == "mins" || p.unitB == "hrs") && p.value % 60 == 0) {
        return updateCalc();
      }
      if (p.unitB == "days" && p.value % 24 == 0) {
        return updateCalc();
      }
      if (p.unitB == "years" && p.value % 12 == 0) {
        return updateCalc();
      }
      displayProblem.innerHTML = `
      Express ${p.value} ${p.unitA} in ${p.unitB} in the form of fraction.</br>
      Give your answer it its simplest form. 
      `;
    }

    //DECIMALS
    if (setting == 11) {
      console.log("The current setting is: " + setting);
      const oneDisplay = p.numOne / p.convenientNumOne;
      const twoDisplay = p.numTwo / p.convenientNumTwo;
      displayProblem.innerHTML = `
      ${oneDisplay} + ${twoDisplay} = ?`;
      decimalCheck(oneDisplay);
      decimalCheck(twoDisplay);
    }

    if (setting == 12) {
      console.log("The current setting is: " + setting);
      p.numOne = p.numOne / p.convenientNumOne;
      p.numTwo = p.numTwo / p.convenientNumTwo;
      if (p.numTwo > p.numOne) [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
      displayProblem.innerHTML = `
      ${p.numOne} - ${p.numTwo} = ?`;
      decimalCheck(p.numOne);
      decimalCheck(p.numTwo);
    }

    // DECIMALS: OVERLAPPING PLACE VALUE
    if (setting == 13) {
      normalDisplay();
      let overlappingArr = [
        `${p.hundreds} hundreds`,
        `${p.tens} tens`,
        `${p.ones} ones`,
        `${p.tenth} tenth`,
        `${p.hundredth} hundredth`,
      ];
      for (let i = 0; i < 5; i++) {
        const include = genNumbers(2);
        if (include == 1) {
          p.sentenceArr.push(overlappingArr[i]);
        }
      }
      if (p.sentenceArr.length < 3) {
        console.log("Empty 🥲");
        return updateCalc();
      }
      console.log(p.sentenceArr);
      displayProblem.innerHTML = `
      Find the value of:</p>
      ${p.sentenceArr.join(", ")}.`;
    }

    if (setting == 14) {
      normalDisplay();
      p.numOne = p.numOne / p.convenientNumOne;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
      ${p.numOne} x ${p.numTwo} = ?`;
      decimalCheck(p.numOne * p.numTwo);
    }
    if (setting == 15) {
      normalDisplay();
      p.numOne = p.numOne / p.convenientNumOne;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
      ${p.numOne} x ${p.numTwo} = ?`;
    }
    if (setting == 16) {
      normalDisplay();
      p.numTwo = p.numOne;
      p.numOne = (p.numOne * p.multiplier) / p.divisor;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
      ${p.numOne} ÷ ${p.numTwo} = ?`;
      decimalCheck(p.numOne / p.numTwo);
    }
    if (setting == 17) {
      normalDisplay();
      // START CHANGE DISPLAY
      if (p.numOne == p.numTwo) {
        return updateCalc();
      }
      [p.numOne, p.numTwo] = simplify(p.numOne, p.numTwo);
      if (p.numTwo == 1) return updateCalc();
      // END CHANGE DISPLAY
      if (genNumbers(2) == 0) {
        displayProblem.innerHTML = `
      ${p.numOne}/${p.numTwo} ≈ ?</p>
      Round off your answer to ${p.roundOff} decimal place.
      `;
      } else {
        displayProblem.innerHTML = ` Divide
            ${p.numOne} by ${p.numTwo}.</p>
            Round off your answer to ${p.roundOff} decimal place.
            `;
      }
    }
    if (setting == 18) {
      normalDisplay();
      p.numOne = p.numTwo * (genNumbers(99) + 2);
      if (p.operator == "x") {
        p.comparison = p.numOne * p.multiOne;
        let placeValue = p.multiTwo.toString().split().length;
        p.divisor = p.numTwo / p.multiTwo.toFixed(placeValue);
      }
      if (p.operator == "÷") {
        let placeValue = p.multiOne.toString().split().length;
        p.comparison = p.numOne / p.multiOne.toFixed(placeValue);
        p.divisor = p.numTwo * p.multiTwo;
      }
      displayProblem.innerHTML = `
      ${p.comparison} ${p.operator} ${p.divisor} = ?
      `;
    }
    if (setting == 19) {
      normalDisplay();
      let arrOne = [p.sets, "x", p.sums];
      let arrTwo = [p.sets, "x", p.numOne];
      let arrThree = [p.sets, "x", "?"];
      genNumbers[2] == 0
        ? ([arrOne[0], arrOne[2]] = [arrOne[2], arrOne[0]])
        : null;
      arrOne = arrOne.join(" ");
      genNumbers[2] == 0
        ? ([arrTwo[0], arrTwo[2]] = [arrTwo[2], arrTwo[0]])
        : null;
      arrTwo = arrTwo.join(" ");
      genNumbers[2] == 0
        ? ([arrThree[0], arrThree[2]] = [arrThree[2], arrThree[0]])
        : null;
      arrThree = arrThree.join(" ");
      let arrDisplay = [arrOne];
      const equalPosition = [0, 2][genNumbers(2)];
      arrDisplay.splice(equalPosition, 0, "=");
      if (equalPosition == 0) {
        // console.log(p.sums, p.numOne);
        let tempLeft = [];
        if (genNumbers(2) == 0) {
          tempLeft = [arrThree, arrTwo];
          if (p.sums > p.numOne) {
            tempLeft.splice(1, 0, "+");
            p.version = 1;
          }
          if (p.sums <= p.numOne) {
            tempLeft.splice(1, 0, "-");
            p.version = 2;
          }
          if (p.blank == 1 || p.blank == 2) {
            tempLeft[0] = "_____";
          }
          tempLeft = tempLeft.join(" ");
        } else {
          tempLeft = [arrTwo, arrThree];
          if (p.sums > p.numOne) {
            tempLeft.splice(1, 0, "+");
            p.version = 3;
          }
          if (p.sums <= p.numOne) {
            tempLeft.splice(1, 0, "-");
            p.version = 4;
          }
          if (p.blank == 1 || p.blank == 2) {
            tempLeft[2] = "_____";
          }
          tempLeft = tempLeft.join(" ");
        }
        arrDisplay.unshift(tempLeft);
      }
      if (equalPosition == 2) {
        let tempRight = [];
        if (genNumbers(2) == 0) {
          tempRight = [arrThree, arrTwo];
          if (p.sums > p.numOne) {
            tempRight.splice(1, 0, "+");
            p.version = 5;
          }
          if (p.sums <= p.numOne) {
            tempRight.splice(1, 0, "-");
            p.version = 6;
          }
          if (p.blank == 1 || p.blank == 2) tempRight[0] = "_____";
          tempRight = tempRight.join(" ");
        } else {
          tempRight = [arrTwo, arrThree];
          if (p.sums > p.numOne) {
            tempRight.splice(1, 0, "+");
            p.version = 7;
          }
          if (p.sums <= p.numOne) {
            tempRight.splice(1, 0, "-");
            p.version = 8;
          }
          if (p.blank == 1 || p.blank == 2) tempRight[2] = "_____";
          tempRight = tempRight.join(" ");
        }
        arrDisplay.push(tempRight);
      }
      arrDisplay = arrDisplay.join(" ");
      displayProblem.textContent = `${arrDisplay}`;
    }

    // DECIMALS: PARTS AND INTERVAL

    if (setting == 20) {
      drawingDisplay();
      drawIntervals(p.start, p.intervals, p.eachInterval, p.arrow);
    }
  }
  // DISPLAY
  if (level == "calFive") {
    //ALLOW CALCULATOR

    const calculatorNotAllowed = [0, 1, 2, 3, 19, 20];
    if (calculatorNotAllowed.includes(setting * 1)) {
      calculatorSymbol.classList.add("hidden");
      // calculatorSymbol.
    } else {
      calculatorSymbol.classList.remove("hidden");
    }

    // if (
    //   [
    //     0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    //     23, 25, 26, 27, 28, 29, 30,
    //   ].includes(setting * 1)
    // ) {
    //   displayProblem.style.textAlign = "left";
    //   displayProblem.style.fontSize = "18px";
    // }

    if (setting != 3) {
      threeNumerator.classList.remove("hidden");
      threeDenominator.classList.remove("hidden");
    }
    if (setting == 3) {
      threeWholeNumber.classList.remove("hidden");
    }

    if (setting == 0) {
      normalDisplay();
      for (let i = 0; i < 5; i++) {
        if (p.arrConstructor.length == 0) {
          p.arrConstructor.push(genNumbers(50) * 2);
        } else {
          p.arrConstructor.push(genNumbers(100 - 1) + 1);
        }
        if (p.arrConstructor[p.arrConstructor.length - 3] == "/") {
          console.log(p.arrConstructor);
          p.arrConstructor.pop();
          console.log(p.arrConstructor);
        }
        const equation = p.arrConstructor.join(" ");
        console.log(equation);
        if (equation < 0) return updateCalc();
        let symbolChoice = p.arrSymbol[genNumbers(p.arrSymbol.length)];
        if (symbolChoice == "/") {
          // const value = eval(p.arrConstructor.join(""));
          const value = p.arrConstructor[p.arrConstructor.length - 1];
          console.log(value);
          if (value <= 0) return updateCalc();
          let arrFactor = [];
          for (let i = 2; i <= value; i++) {
            if (value % i == 0) {
              arrFactor.push(i);
            }
          }
          console.log(arrFactor);
          p.arrConstructor.push(symbolChoice);
          if (arrFactor.length < 4) return updateCalc();
          const factor = arrFactor[genNumbers(arrFactor.length / 2 - 1) + 1];
          p.arrConstructor.push(factor);
        } else {
          p.arrConstructor.push(symbolChoice);
        }
        let index = p.arrSymbol.indexOf(symbolChoice);
        p.arrSymbol.splice(index, 1);
        console.log(`${p.arrSymbol} remaining`);
        console.log(p.arrConstructor);
      }
      p.arrConstructor.pop();
      console.log(p.arrConstructor);
      // inserting brackets
      const bracketSymbols = ["+", "-", "*"];
      const chosenSymbol = bracketSymbols[genNumbers(3)];
      const indexSymbol = p.arrConstructor.indexOf(chosenSymbol);
      bracketSymbols.splice(bracketSymbols.indexOf(chosenSymbol), 1);
      p.arrConstructor.splice(indexSymbol - 1, 0, "(");
      let chosenSymbolTwo = bracketSymbols[genNumbers(2)];
      let indexSymbolTwo = p.arrConstructor.indexOf(chosenSymbolTwo);
      // while (indexSymbolTwo < indexSymbol) {
      //   chosenSymbolTwo = bracketSymbols[genNumbers(2)];
      //   indexSymbolTwo = p.arrConstructor.indexOf(chosenSymbolTwo);
      // }
      if (indexSymbolTwo < indexSymbol) return updateCalc();
      p.arrConstructor.splice(indexSymbolTwo + 2, 0, ")");
      // console.log(p.arrConstructor.join(""));
      // console.log(eval(p.arrConstructor.join("")));
      // console.log(eval(p.arrConstructor.toString()));
      // if (eval(p.arrConstructor.toString()) <= 0) {
      //   console.log("IT TURNED NEGATIVE?!");
      //   return updateCalc();
      // }

      if (eval(p.arrConstructor.join(" ")) <= 0) {
        console.log("IT TURNED NEGATIVE?!");
        return updateCalc();
      }
      if (
        p.arrConstructor[0] == "(" &&
        p.arrConstructor[p.arrConstructor.length - 1] == ")"
      ) {
        p.arrConstructor.pop();
        p.arrConstructor.shift();
      }
      //Evaluting number statement
      // console.log(p.arrConstructor.join(""));
      p.answer = eval(p.arrConstructor.join(""));
      console.log(p.answer);
      if (p.answer <= 0 || p.answer % 1 != 0) return updateCalc();
      // console.log(p.answer);
      const replaceTimes = p.arrConstructor.join(" ").replace("*", "x");
      const final = replaceTimes.replace("/", "÷");
      const statement = ["Solve", "Evaluate", "Simplify"][genNumbers(3)];
      displayProblem.innerHTML = `${statement}:</p>${final}`;
    }

    if (setting == 1) {
      simpleFractionDisplay();
      const common = genNumbers(2);
      if (common == 1) {
        console.log("common");
        let commonNumbers = [10, 100, 1000];
        let commonPairs = [2, 5, 8, 25, 50, 100];
        const numOrDeno = ["num", "deno"][genNumbers(2)];
        const leftOrRightOne = ["L", "R"][genNumbers(2)];
        const leftOrRightTwo = ["L", "R"][genNumbers(2)];
        if (numOrDeno == "num") {
          if (leftOrRightOne == "L") {
            p.numeratorOne = commonNumbers[genNumbers(commonNumbers.length)];
            numeratorOne.textContent = p.numeratorOne;
            numeratorTwo.textContent = p.numeratorTwo;
          }
          if (leftOrRightOne == "R") {
            p.numeratorTwo = commonNumbers[genNumbers(commonNumbers.length)];
            numeratorTwo.textContent = p.numeratorTwo;
            numeratorOne.textContent = p.numeratorOne;
          }
          if (leftOrRightTwo == "L") {
            p.denominatorOne = commonPairs[genNumbers(commonPairs.length)];
            denominatorOne.textContent = p.denominatorOne;
            denominatorTwo.textContent = p.denominatorTwo;
          }
          if (leftOrRightTwo == "R") {
            p.denominatorTwo = commonPairs[genNumbers(commonPairs.length)];
            denominatorTwo.textContent = p.denominatorTwo;
            denominatorOne.textContent = p.denominatorOne;
          }
        }
        if (numOrDeno == "deno") {
          if (leftOrRightOne == "L") {
            p.denominatorOne = commonNumbers[genNumbers(commonNumbers.length)];
            denominatorOne.textContent = p.denominatorOne;
            denominatorTwo.textContent = p.denominatorTwo;
          }
          if (leftOrRightOne == "R") {
            p.denominatorTwo = commonNumbers[genNumbers(commonNumbers.length)];
            denominatorTwo.textContent = p.denominatorTwo;
            denominatorOne.textContent = p.denominatorOne;
          }
          if (leftOrRightTwo == "L") {
            p.numeratorOne = commonPairs[genNumbers(commonPairs.length)];
            numeratorOne.textContent = p.numeratorOne;
            numeratorTwo.textContent = p.numeratorTwo;
          }
          if (leftOrRightTwo == "R") {
            p.numeratorTwo = commonPairs[genNumbers(commonPairs.length)];
            numeratorTwo.textContent = p.numeratorTwo;
            numeratorOne.textContent = p.numeratorOne;
          }
        }
        console.log("End");
      } else {
        if (
          p.numeratorOne == p.denominatorOne ||
          p.numeratorTwo == p.denominatorTwo
        ) {
          return updateProblems();
        }
        numeratorOne.textContent = p.numeratorOne;
        denominatorOne.textContent = p.denominatorOne;
        numeratorTwo.textContent = p.numeratorTwo;
        denominatorTwo.textContent = p.denominatorTwo;
      }
      fractionsOperator.textContent = "x";
      fractionChoice.textContent = "";
    }

    if (setting == 2) {
      mixedFractionDisplay();
      if (p.numeratorOne == p.denominatorOne) {
        return updateProblems();
      }
      [p.numeratorOne, p.denominatorOne] = simplify(
        p.numeratorOne,
        p.denominatorOne
      );
      if (p.numeratorOne > p.denominatorOne)
        [p.numeratorOne, p.denominatorOne] = [p.denominatorOne, p.numeratorOne];
      if (p.type == "mixed-whole") {
        threeNumerator.classList.add("hidden");
        threeDenominator.classList.add("hidden");
        threeWholeNumber.classList.remove("hidden");

        twoWholeNumber.textContent = p.wholeOne;
        twoNumerator.textContent = p.numeratorOne;
        twoDenominator.textContent = p.denominatorOne;
        threeWholeNumber.textContent = p.wholeTwo;
      }
      if (p.type == "mixed-simple") {
        threeNumerator.classList.remove("hidden");
        threeDenominator.classList.remove("hidden");
        threeWholeNumber.classList.add("hidden");
        if (p.numeratorTwo == p.denominatorTwo) p.numeratorTwo -= 1;
        [p.numeratorTwo, p.denominatorTwo] = simplify(
          p.numeratorTwo,
          p.denominatorTwo
        );
        if (p.numeratorTwo > p.denominatorTwo) {
          [p.numeratorTwo, p.denominatorTwo] = [
            p.denominatorTwo,
            p.numeratorTwo,
          ];
        }

        threeNumerator.textContent = p.numeratorTwo;
        threeDenominator.textContent = p.denominatorTwo;
      }
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numeratorOne;
      twoDenominator.textContent = p.denominatorOne;
      equalSymbol.textContent = "x";
    }
    if (setting == 3) {
      mixedFractionDisplay();
      displayTwoFractions.style.fontSize = "30px";
      displayTwoFractions.style.marginBottom = "50px";
      threeNumerator.classList.add("hidden");
      threeDenominator.classList.add("hidden");
      if (p.numeratorOne == p.denominatorOne) {
        return updateCalc();
      }
      // [p.numeratorOne, p.denominatorOne] = simplify(
      //   p.numeratorOne,
      //   p.denominatorOne
      // );

      if (p.unitsMeasurement == "min " || p.unitsMeasurement == "h ") {
        p.denominatorOne = [2, 5, 6, 10, 12, 15, 30, 60][genNumbers(8)];
      }
      if (p.numeratorOne > p.denominatorOne) {
        p.wholeOne += Math.floor(p.numeratorOne / p.denominatorOne);
        p.numeratorOne = p.numeratorOne % p.denominatorOne;
      }
      [p.numeratorOne, p.denominatorOne] = simplify(
        p.numeratorOne,
        p.denominatorOne
      );
      if (p.numeratorOne == 0) return updateCalc();

      // fractionsUnitOfMeasurement.textContent = p.unitsMeasurement;
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numeratorOne;
      twoDenominator.textContent = p.denominatorOne;
      equalSymbol.textContent = `${p.unitsMeasurement} =`;
      threeWholeNumber.textContent = `? ${p.unitsPair}`;
    }
    // FRACTIONS: REMAINDER CONCEPT
    if (setting == 4) {
      normalDisplay();
      if (p.version == 0) {
        [p.numA, p.denoA] = simplify(p.numA, p.denoA);
        [p.numB, p.denoB] = simplify(p.numB, p.denoB);
        [p.numC, p.denoC] = simplify(p.numC, p.denoC);
        displayProblem.innerHTML = `
      There are 3 variables: A, B and C.</p>
      A has ${p.partA} units, B has ${p.partB} units, C has ${
          p.partC
        } units.</p>
      ${p.numA}/${p.denoA} of A is removed.</p>
      ${p.numB}/${p.denoB} of B is removed.</p>
      ${p.numC}/${p.denoC} of C is removed.</p>
      What fraction of the total from ${p.choiceVar} ${
          p.choice == "left" ? `is ${p.choice}` : `was ${p.choice}`
        }?
      `;
      }
      if (p.version == 1) {
        if (p.partA > p.denoA) [p.partA, p.denoA] = [p.denoA, p.partA];
        if (p.partB > p.denoB) [p.partB, p.denoB] = [p.denoB, p.partB];
        if (p.partA == p.denoA) p.denoA += 1;
        if (p.partB == p.denoB) p.denoB += 1;
        [p.partA, p.denoA] = simplify(p.partA, p.denoA);
        [p.partB, p.denoB] = simplify(p.partB, p.denoB);
        //after applying remainder concept
        let newNumerator = (p.denoA - p.partA) * p.partB;
        let newDenominator = p.denoA * p.denoB;
        [newNumerator, newDenominator] = simplify(newNumerator, newDenominator);
        //Finding common denominator
        const commonDenominator = commonDeno(p.denoA, newDenominator);
        const multiOne = commonDenominator / p.denoA;
        const multiTwo = commonDenominator / newDenominator;
        // changing first fraction
        const finalNumOne = p.partA * multiOne;
        const finalDenoOne = p.denoA * multiOne;
        // changing remainder concept
        p.finalNumTwo = newNumerator * multiTwo;
        p.finalDenoTwo = newDenominator * multiTwo;
        // Numerator of the value
        p.likeNumerator = finalNumOne + p.finalNumTwo;
        p.likeDenominator = finalDenoOne;
        p.value = p.likeNumerator * (genNumbers(99) + 100);
        const position = genNumbers(2);
        const gender = ["he", "she"][position];
        const genderTwo = ["his", "her"][position];
        displayProblem.innerHTML = `
        Person ${p.choiceVar} used ${p.partA}/${
          p.denoA
        } of ${genderTwo} money to buy ${p.objects}.</p>
        ${gender[0].toUpperCase() + gender.slice(1)} spent another ${p.partB}/${
          p.denoB
        } of the remainder on ${p.objectsTwo}.</p>
        $${p.value.toLocaleString("en-US")} was spent.</p>
        `;
        if (p.versionOne == 0) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `How much does Person ${p.choiceVar} have left?`
          );
        }
        if (p.versionOne == 1) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `How much does Person ${p.choiceVar} spend on ${p.objectsTwo}?`
          );
        }
      }
    }
    //FRACTIONS: IDENTICAL NUMERATOR
    if (setting == 5) {
      normalDisplay();

      // return console.log("test");
      [p.numA, p.denoA] = simplify(p.numA, p.denoA);
      [p.numB, p.denoB] = simplify(p.numB, p.denoB);
      if (p.numA == p.numB && p.denoA == p.denoB) p.denoB += 1;
      if (p.version == 1) {
        displayProblem.innerHTML = `
      ${p.numA}/${p.denoA} of A is ${
          genNumbers(2) == 0 ? "the same as" : "equal to"
        } ${p.numB}/${p.denoB} of B.</p>
      What is the ratio of A : B?
      `;
      }
      if (p.version == 2) {
        displayProblem.innerHTML = `
      ${p.numA}/${p.denoA} of A are ${p.colors}.</p>
      ${p.numB}/${p.denoB} of B are ${p.colors}.</p>
      A and B have the same number of ${p.colors}.</p>
      What is the ratio of A : B?
      `;
      }
      if (p.version == 3) {
        displayProblem.innerHTML = `
        ${p.numA}/${p.denoA} of A were ${p.choice}.</p>
        ${p.numB}/${p.denoB} of B were ${p.choice}.</p>
        A and B has the same amount ${
          p.choice == "left" ? "removed" : "left"
        }.</p>
        What is the ratio of A : B at first?
        `;
      }
    }
    if (setting == 6) {
      normalDisplay();
      [p.numA, p.denoA] = simplify(p.numA, p.denoA);
      [p.numB, p.denoB] = simplify(p.numB, p.denoB);
      displayProblem.innerHTML = `
      A and B are the same.</p>
      ${p.numA}/${p.denoA} of A was removed.</p>
      ${p.numB}/${p.denoB} of B was removed.</p>
      What fraction of the total ${
        p.choice == "left" ? "is left" : "was removed"
      }? 
      `;
    }

    // FRACTIONS: BEFORE AND AFTER LIKE FRACTIONS
    if (setting == 7) {
      normalDisplay();
      const gender = genNumbers(2) == 0 ? "he" : "she";
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      if (p.numeOne == p.numeTwo && p.denoOne == p.denoTwo) return updateCalc();

      p.last_deno = commonDeno(p.denoOne, p.denoTwo);
      const mulOne = p.last_deno / p.denoOne;
      const mulTwo = p.last_deno / p.denoTwo;
      const new_numeOne = mulOne * p.numeOne;
      const new_numeTwo = mulTwo * p.numeTwo;

      if (p.direction == "+" && p.version == 0) {
        const firstFraction = p.numeOne / p.denoOne;
        const secondFraction = p.numeTwo / p.denoTwo;
        if (secondFraction <= firstFraction) return updateCalc();
        const valueUnit = p.last_deno - new_numeOne - new_numeTwo;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        if (p.numeTwo / p.denoTwo + p.numeOne / p.denoOne >= 1)
          return updateCalc();
        displayProblem.innerHTML = `
      Person ${p.person} wanted to buy something, but only had ${p.numeOne}/${p.denoOne} of the amount.</p>
      After receiving another $${p.situation}, ${gender} is still short of ${p.numeTwo}/${p.denoTwo}.</p>
      How much is the item?
      `;
      }
      if (p.direction == "+" && p.version == 1) {
        // if (p.numeTwo / p.denoTwo <= p.numeOne / p.denOne) return updateCalc();
        const valueUnit = p.last_deno + new_numeTwo - new_numeOne;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        displayProblem.innerHTML = `
      Person ${p.person} wanted to buy something, but only had ${p.numeOne}/${p.denoOne} of the cost.</p>
      After receiving another $${p.situation}, ${gender} has an extra of ${p.numeTwo}/${p.denoTwo} of the cost.</p>
      How much is the item?
      `;
      }
      if (p.direction == "-" && p.version == 0) {
        if (p.numeTwo / p.denoTwo >= p.numeOne / p.denoOne) return updateCalc();
        const valueUnit = new_numeOne - new_numeTwo;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        displayProblem.innerHTML = `
      Person ${p.person} gave away some of ${
          gender == "she" ? "her" : "his"
        } money and had ${p.numeOne}/${p.denoOne} of it left.</p>
      ${gender} then spent another $${p.situation}, and now has ${p.numeTwo}/${
          p.denoTwo
        } of it left.</p>
      How much did ${gender} have at first?
      `;
      }
      if (p.direction == "-" && p.version == 1) {
        if (p.numeTwo / p.denoTwo >= p.numeOne / p.denoOne) return updateCalc();
        const valueUnit = new_numeOne - new_numeTwo;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        displayProblem.innerHTML = `
      Person ${p.person} gave away ${p.denoOne - p.numeOne}/${p.denoOne} of ${
          gender == "she" ? "her" : "his"
        } money.</p>
      ${gender} then spent another $${p.situation}, and now has ${p.numeTwo}/${
          p.denoTwo
        } of it left.</p>
      How much did ${gender} have at first?
      `;
      }
    }

    // GEOMETRY: AREA OF RIGHT ANGLED TRIANGLE
    if (setting == 8) {
      drawingDisplay();
      ctx.font = "1em serif";
      ctx.save();
      const y = fillTextSplit(
        "Find the area of the triangle.\nUsing the dotted line as either the base or height."
      );
      ctx.translate(0, y);

      const height = p.height * 20;
      const base = p.base * 20;
      ctx.translate((400 - base) / 2, height);

      ctx.save();
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(base, 0);
      const Bx = genNumbers(base - 50);
      ctx.lineTo(Bx, -height);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
      const coordAx = 0;
      const coordAy = 0;
      const coordBx = Bx;
      const coordBy = -height;
      const coordCx = base;
      const coordCy = 0;

      console.log("A = " + coordAx + ", " + coordAy);
      console.log("B = " + coordBx + ", " + coordBy);
      console.log("C = " + coordCx + ", " + coordCy);

      ctx.fillText(
        `${p.base} cm`,
        (coordCx + coordAx) / 2,
        (coordCy + coordAy) / 2 + 14
      );

      const distanceAB = Math.floor(
        Math.sqrt((coordBy * -1 - coordAy) ** 2 + (coordBx - coordAx) ** 2) / 20
      );
      ctx.fillText(
        `${distanceAB} cm`,
        (coordBx + coordAx) / 2 - 35,
        (coordBy + coordAy) / 2
      );
      const distanceBC = Math.floor(
        Math.sqrt((coordCy * -1 - coordBy) ** 2 + (coordCx - coordBx) ** 2) / 20
      );
      ctx.fillText(
        `${distanceBC} cm`,
        (coordBx + coordCx) / 2 + 15,
        -(-coordBy + coordCy) / 2
      );

      // HEIGHTS
      if (p.chosenHeight == "A") {
        console.log("A");
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(coordBx, coordBy);
        ctx.lineTo(coordBx, 0);
        ctx.stroke();
        ctx.restore();

        ctx.fillText(`${-coordBy / 20} cm`, coordBx + 10, coordBy / 2 + 10);
        if (-coordBy / 20 == distanceAB) {
          return updateCalc();
        }
      }
      //x1, y1, x2, y2
      function findPerpendicularIntersection(line, point) {
        // Get the slope of the line.

        const gradientA = (line.y2 - line.y1) / (line.x2 - line.x1);
        console.log("Gradient of first line is " + gradientA);

        // const m = (line[2] - line[0]) / (line[3] - line[1]);
        // Calculate the slope of the perpendicular line.
        const gradientB = -1 / gradientA;
        console.log("Gradient of second line is " + gradientB);
        // Calculate the y-coordinate of the perpendicular line at the point.
        //y = mx + c
        // c = y - mx
        const yInterceptA = line.y1 - gradientA * line.x1;
        console.log("First intercept is " + yInterceptA);
        // const yInterceptB = line[3] - gradientB * line[2];
        const yInterceptB = point.y - gradientB * point.x;

        console.log("Second intercept is " + yInterceptB);
        // Calculate the x-coordinate of the intersection point.
        const x = (yInterceptB - yInterceptA) / (gradientA - gradientB);

        // Return the coordinates of the intersection point.
        const y = gradientA * x + yInterceptA;
        return { x, y };
      }

      if (p.chosenHeight == "B") {
        console.log("B");
        const lineAB = {
          x1: 0,
          y1: 0,
          x2: coordBx,
          y2: -coordBy,
        };
        const pointC = {
          x: coordCx,
          y: 0,
        };
        const intersectionAB = findPerpendicularIntersection(lineAB, pointC);
        console.log(intersectionAB);
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(intersectionAB.x, -intersectionAB.y);
        ctx.lineTo(coordCx, 0);
        // ctx.closePath();
        ctx.stroke();
        ctx.restore();

        let lengthSecondHeight = Math.sqrt(
          (intersectionAB.y - pointC.y) ** 2 +
            (intersectionAB.x - pointC.x) ** 2
        );
        console.log(Math.floor(lengthSecondHeight / 20));
        lengthSecondHeight = Math.floor(lengthSecondHeight / 20);

        ctx.fillText(
          `${lengthSecondHeight} cm`,
          (intersectionAB.x + pointC.x) / 2 + 5,
          (-intersectionAB.y + pointC.y) / 2 - 5
        );
        p.lengthSecondH = lengthSecondHeight;
        p.lengthAB = distanceAB;
        if (distanceBC <= lengthSecondHeight) {
          console.log("Obtuse Triangle");
          return updateCalc();
        }
      }

      if (p.chosenHeight == "C") {
        // THIRD PERPENDICULAR LINE
        console.log("C");
        const lineBC = {
          x1: coordBx,
          y1: coordBy,
          x2: coordCx,
          y2: 0,
        };
        const pointA = {
          x: 0,
          y: 0,
        };
        const intersectionBC = findPerpendicularIntersection(lineBC, pointA);
        console.log(intersectionBC);
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(intersectionBC.x, intersectionBC.y);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.restore();

        let lengthThirdHeight = Math.sqrt(
          (intersectionBC.y - pointA.y) ** 2 +
            (intersectionBC.x - pointA.x) ** 2
        );
        console.log(Math.floor(lengthThirdHeight / 20));
        lengthThirdHeight = Math.floor(lengthThirdHeight / 20);

        ctx.fillText(
          `${lengthThirdHeight} cm`,
          (intersectionBC.x + pointA.x) / 2,
          (intersectionBC.y + pointA.y) / 2 + 10
        );
        p.lengthThirdH = lengthThirdHeight;
        p.lengthBC = distanceBC;
        if (lengthThirdHeight >= distanceBC) {
          console.log("Too long");
          return updateCalc();
        }
      }

      ctx.restore();
    }

    // AREA OF TRIANGLES
    if (setting == 9) {
      drawingDisplay();
      while (p.pointTwo == p.pointOne) {
        p.second = genNumbers(5);
        p.pointTwo = ["B", "C", "D", "E", "F"][p.second];
      }
      drawTriangle(p.base * 4, p.height * 4, p.pointOne, p.pointTwo);
    }

    //VOLUME AND SURFACE AREA
    if (setting == 10) {
      drawingDisplay();
      // ctx.save();
      const height = 60 + p.height * 5 + ((p.height * 5) / 3) * 2 + 10;
      if (height > 275) {
        canvas.setAttribute("height", height);
      } else {
        canvas.setAttribute("height", 275);
      }

      p.question = draw3d.cuboidSurfaceArea(
        400,
        275,
        p.length * 5,
        p.breadth * 5,
        p.height * 5,
        p.type
      );
      // ctx.restore();
    }

    // VOLUME: NUMERATOR WITH A VALUE
    if (setting == 11) {
      drawingDisplay();

      const height = 60 + p.height * 5 + ((p.height * 5) / 3) * 2 + 10;
      if (height > 275) {
        canvas.setAttribute("height", height);
      } else {
        canvas.setAttribute("height", 275);
        // ctx.save();
        // ctx.translate(50, 0);
        // ctx.restore();
      }

      const check = draw3d.cuboidWaterLevel(
        400,
        275,
        p.length * 5,
        p.breadth * 5,
        p.height * 5,
        p.numerator * 5,
        p.type
      );
      if (check == "Error") return updateCalc();
    }
    // RATIO: SIMPLIFICATION AND EXPANSION
    if (setting == 12) {
      normalDisplay();
      p.ratioArr = [];
      const quantity = genNumbers(2) + 2;
      if (quantity == 2) {
        p.ratioArr.push(p.numA, p.numB);
      } else {
        p.ratioArr.push(p.numA, p.numB, p.numC);
      }
      if ([...new Set(p.ratioArr)].length != quantity) {
        console.log("Same value");
        return updateCalc();
      }
      if (p.process == "up") {
        const multiA = genNumbers(3) + 2;
        let equalArr = p.ratioArr.map((i) => i * multiA);
        const replace = genNumbers(quantity);
        p.answer = equalArr[replace];
        equalArr[replace] = "?";
        displayProblem.innerHTML = `Find the missing number.<br><p class="center">${p.ratioArr.join(
          " : "
        )} = ${equalArr.join(" : ")}</p>`;
      }

      if (p.process == "down") {
        const multiA = genNumbers(3) + 2;
        let equalArr = p.ratioArr.map((i) => i * multiA);
        const replace = genNumbers(quantity);
        p.answer = p.ratioArr[replace];
        p.ratioArr[replace] = "?";
        displayProblem.innerHTML = `Find the missing number.<br><p class="center">${equalArr.join(
          " : "
        )} = ${p.ratioArr.join(" : ")}</p>`;
      }

      if (p.process == "updown") {
        const multiA = [2, 6, 8][genNumbers(3)];
        const multiB = [3, 5, 7][genNumbers(3)];
        // while (multiA == multiB) {
        //   multiB = genNumbers(3) + 2;
        // }
        let equalArr = p.ratioArr.map((i) => i * multiA);
        let equalArrB = p.ratioArr.map((i) => i * multiB);
        const replace = genNumbers(quantity);
        p.answer = equalArrB[replace];
        equalArrB[replace] = "?";
        displayProblem.innerHTML = `Find the missing number.<br><p class="center">${equalArr.join(
          " : "
        )} = ${equalArrB.join(" : ")}</p>`;
      }
    }
    //RATIO: SHAPES
    if (setting == 13) {
      drawingDisplay();
      drawForFraction(state, "ratio");
      // console.log(mediumColumn, smallRow, p.shaded, p.total);
      if (p.shaded == 0) {
        ctx.restore();
        return updateCalc();
      }
      ctx.restore(); //1st
    }
    // RATIO: REPEATED IDENTITY
    if (setting == 14) {
      normalDisplay();
      let lineOne = "";
      if (p.firstSentence == "unit") {
        p.unitTwo = 1;
        lineOne = `
        ${p.personOne} has ${p.unitOne} times as many ${p.something} as ${p.personTwo}.</p>
        `;
      }
      if (p.firstSentence == "ratio") {
        if (p.unitOne == p.unitTwo) p.unitTwo += 1;
        [p.unitOne, p.unitTwo] = simplify(p.unitOne, p.unitTwo);
        lineOne = `
        ${p.personOne}'s ratio of ${p.something} is ${p.unitOne}:${p.unitTwo} to ${p.personTwo}.</p>
        `;
      }
      const position = genNumbers(2);
      p.repeatedId = [p.personOne, p.personTwo][position];
      let lineTwo = "";
      if (p.secondSentence == "unit") {
        p.unitFour = 1;
        lineTwo = `
        ${p.repeatedId} has ${p.unitThree} times as many ${p.something} as ${p.personThree}.</p>
        `;
      }
      if (p.secondSentence == "ratio") {
        if (p.unitThree == p.unitFour) p.unitFour += 1;
        [p.unitThree, p.unitFour] = simplify(p.unitThree, p.unitFour);
        lineTwo = `
        ${p.repeatedId}'s ratio of ${p.something} is ${p.unitThree}:${p.unitFour} to ${p.personThree}.</p>
        `;
      }
      calArrQns.push(p.unitOne);
      calArrQns.push(p.unitTwo);
      position == 0 ? calArrQns.push(p.unitOne) : calArrQns.push(p.unitTwo);
      calArrQns.push(p.unitThree);
      calArrQns.push(p.unitFour);
      if (calArrQns[3] == calArrQns[4]) {
        calArrQns = [];
        return updateCalc();
      }

      let i = 0;
      let count = 1;
      while ((calArrQns[2] + i) % calArrQns[3] != 0) {
        i += calArrQns[2];
        count += 1;
        console.log(i, count);
      }
      calArrQns.push(calArrQns[0] * count);
      calArrQns.push(calArrQns[1] * count);
      const multiTwo = (calArrQns[2] * count) / calArrQns[3];
      calArrQns.push(calArrQns[3] * multiTwo);
      calArrQns.push(calArrQns[4] * multiTwo);
      const lineThree = `What is the ratio of ${p.personOne} to ${p.personTwo} to ${p.personThree}?`;

      displayProblem.innerHTML = `
      ${lineOne}</p>
      ${lineTwo}</p>
      ${lineThree}
      `;
    }
    // RATIO: IDENTICAL TOTAL
    if (setting == 15) {
      normalDisplay();
      console.log(p.objects);
      const objectA = p.objects[0];
      const objectB = p.objects[1];
      [p.ratioA, p.ratioB] = simplify(p.ratioA, p.ratioB);
      [p.ratioC, p.ratioD] = simplify(p.ratioC, p.ratioD);
      if (((p.ratioA == p.ratioB) == p.ratioC) == p.ratioD) return updateCalc();
      if (manipulation > 0 && p.ratioA + p.ratioB == p.ratioC + p.ratioD) {
        console.log("Manipulated!");
        return updateCalc();
      }
      if (p.ratioA + p.ratioB == p.ratioC + p.ratioD) manipulation += 1;
      displayProblem.innerHTML = `
      Group A and B have ${
        p.position == 2
          ? "the same chocolates and sweets"
          : "the same number of people"
      }.</p>
      Group A is made up of ${objectA} and ${objectB} in the ratio of ${
        p.ratioA
      } : ${p.ratioB}.</p>
      Group B is made up of ${objectA} and ${objectB} in the ratio of ${
        p.ratioC
      } : ${p.ratioD}.</p>
      
      `;
      if (p.question == 1) {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What is the ratio of total ${objectA} to ${objectB}?`
        );
      }
      if (p.question == 2) {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What is the ratio of ${objectA} in A to the ratio of ${objectA} in B?`
        );
      }
      if (p.question == 3) {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What is the ratio of ${objectB} in A to the ratio of ${objectB} in B?`
        );
      }
    }

    // RATIO: WIPE ON WIPE OFF
    if (setting == 16) {
      normalDisplay();
      // displayProblem.innerHTML = `
      // How many more dark squares have to be added for the ratio to be ???`;
      displayProblem.innerHTML = ``;
      let lengthArr = [];
      let shaded = 0;
      let unshaded = 0;
      for (let x = 0; x < p.breadth; x++) {
        for (let i = 0; i < p.length; i++) {
          let generate = ["shaded", "unshaded"][genNumbers(2)];
          if (generate == "shaded") {
            lengthArr.push("◼️");
            shaded += 1;
          }
          if (generate == "unshaded") {
            lengthArr.push("◻️");
            unshaded += 1;
          }
        }
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `<p class="center">${lengthArr.join(" ")}`
        );
        lengthArr = [];
      }
      console.log("Shaded: " + shaded, "Unshaded: " + unshaded);
      p.shaded = shaded;
      p.unshaded = unshaded;
      let difference = "added";

      //UNCHANGED TOTAL
      if (p.version == "total") {
        p.change = Math.abs(p.change);
      }
      if (p.change == 0) {
        p.change = [-1, 1][genNumbers(2)] * (genNumbers(8) + 1);
      }
      if (p.change < 0) {
        difference = "removed";
      }
      let shadedEnd = (shaded += p.change);

      let unshadedEnd = unshaded;
      if (p.version == "total") {
        unshadedEnd = unshaded += p.change * -1;
      }

      if (p.version == "difference") {
        if (p.change == 0) {
          p.change = [-1, 1][genNumbers(2)] * (genNumbers(8) + 1);
        }
        shadedEnd = shaded += p.change;
        unshadedEnd = unshaded += p.change;
        if (shadedEnd == unshadedEnd || shadedEnd <= 0 || unshaded <= 0) {
          return updateCalc();
        }
      }

      [shadedEnd, unshadedEnd] = simplify(shadedEnd, unshadedEnd);
      if (unshadedEnd == unshaded) {
        console.log("No change in ratio for unshaded");
        return updateCalc();
      }
      //UNCHANGED DIFFERENCE
      if (p.version == "difference") {
        displayProblem.insertAdjacentHTML(
          "afterbegin",
          `How many equal number of white or black squares have to be ${difference} for the ratio of the black to white squares to be ${shadedEnd}:${unshadedEnd}?`
        );
      }
      //UNCHANGED OBJ
      if (p.version == "object") {
        displayProblem.insertAdjacentHTML(
          "afterbegin",
          `How many black squares have to be ${difference} for the ratio of the black to white squares to be ${shadedEnd}:${unshadedEnd}?`
        );
      }
      //UNCHANGED TOTAL
      if (p.version == "total") {
        displayProblem.insertAdjacentHTML(
          "afterbegin",
          `How many white squares have to be replaced with black squares for the ratio of the black to white squares to be ${shadedEnd}:${unshadedEnd}?`
        );
      }
    }
    //PART THEREOF & PART THEREAFTER
    if (setting == 17) {
      normalDisplay();
      const durationHours = Math.floor(p.duration / 60);
      const durationMins = p.duration % 60;
      let endHours = p.startHour + durationHours;
      let endMins = p.startMins + durationMins;
      while (endMins >= 60) {
        endMins -= 60;
        endHours += 1;
      }
      displayProblem.innerHTML = `
      <ul>The rates are as follows:
        <li>$${p.rates} every ${p.group} minutes or ${p.type}</li>
      </ul>
      How much does it cost from ${p.startHour}.${p.startMins
        .toString()
        .padStart(2, "0")}pm until ${endHours}:${endMins
        .toString()
        .padStart(2, "0")}p.m.
      `;
    }
    // RATES: TAPS
    if (setting == 18) {
      normalDisplay();
      [p.nume, p.deno] = simplify(p.nume, p.deno);
      let lineOne = `The dimensions of a container is ${p.length} cm, ${p.breadth} cm, ${p.height} cm.`;
      if ((p.length == p.breadth) == p.height) {
        lineOne = `The container is a cube with side ${p.length} cm.`;
      }
      if (p.length == p.breadth) {
        lineOne = `The container has a square base of side ${p.length} cm and height of ${p.height} cm.`;
      }
      const tapARate = genNumbers(10) - 5;
      const tapBRate = genNumbers(10) - 5;
      let rateASentence = "";
      if (tapARate > 0)
        rateASentence = `Tap A fills at a rate of ${tapARate}ℓ per min.</p>`;
      if (tapARate < 0)
        rateASentence = `Tap A drains at a rate of ${Math.abs(
          tapARate
        )}ℓ per min.</p>`;
      let rateBSentence = "";
      if (tapBRate > 0)
        rateBSentence = `Tap B fills at a rate of ${tapBRate}ℓ per min.</p>`;
      if (tapBRate < 0)
        rateBSentence = `Tap B drains at a rate of ${Math.abs(
          tapBRate
        )}ℓ per min.</p>`;
      p.netRate = tapARate + tapBRate;
      if (tapARate > 0 && tapBRate > 0) p.netRate = tapARate + tapBRate;
      if (tapARate < 0 && tapBRate < 0) p.netRate = tapARate + tapBRate;
      if ((tapARate < 0 && tapBRate > 0) || (tapARate > 0 && tapBRate < 0))
        p.netRate = tapARate + tapBRate;
      console.log(p.netRate);
      let questionSent = "";
      if (p.netRate == 0) {
        console.log("Net rate is zero");
        return updateCalc();
      }
      if (p.netRate > 0) {
        questionSent = "How many mins does it take to fill up the container?";
      }
      if (p.netRate < 0) {
        questionSent = "How many mins does it take to drain the container?";
      }
      displayProblem.innerHTML = `${lineOne}</p>
      It is ${p.nume}/${p.deno} filled.</p>
      ${rateASentence}
      ${rateBSentence}
      ${questionSent}</p>
      <i>Round your answer to 2 decimal places if needed.</i>
      `;
    }

    // PERCENTAGE: PERCENTAGE OF
    if (setting == 19) {
      normalDisplay();
      const statement = genNumbers(2);
      if (p.start == "fractions") {
        if (statement == 0) {
          displayProblem.innerHTML = `What is the percentage of ${p.nume}/${p.deno}?`;
        } else {
          displayProblem.innerHTML = `What is ${p.nume}/${p.deno} in percentage?`;
        }
      }

      if (p.start == "decimals") {
        displayProblem.innerHTML = `What is ${accDecimal(
          p.nume / p.deno
        )} in percentage?`;
      }

      if (p.start == "percentage") {
        if (p.end == "fractions") {
          displayProblem.innerHTML = `What is ${accDecimal(
            (p.nume / p.deno) * 100
          )}% in fractions?`;
        }
        if (p.end == "decimals") {
          displayProblem.innerHTML = `What is ${accDecimal(
            (p.nume / p.deno) * 100
          )}% in decimals?`;
        }
      }
      if (p.start == "fractions" || p.start == "decimals") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "<p><i>Include percentage symbol in the answer.</i></p>"
        );
      }
    }
    // PERCENTAGE: PERCENTAGE CHANGE
    if (setting == 20) {
      normalDisplay();

      if (p.version == "change") {
        if (p.previous == p.next) p.next += 5;
        const diff = p.previous > p.next ? "decrease" : "increase";
        const change = Math.abs(p.next - p.previous);
        if (
          accDecimal((change / p.previous) * 100)
            .toString()
            .split(".")[1]
        ) {
          console.log("not whole");
          return updateCalc();
        }
        displayProblem.innerHTML = `What is the percentage ${diff} from ${p.previous} to ${p.next}?</p>
        <p><i>Include percentage symbol in the answer.</i></p>
        `;
      }
      if (p.change == 0) p.change = 10;
      if (p.version == "percentage forward") {
        let answer = accDecimal((p.previous / 100) * (100 + p.change));
        if (answer.toString().split(".")[1]) {
          console.log("not whole");
          return updateCalc();
        }
        const diff = p.change > 0 ? "increased by" : "decreased by";
        displayProblem.innerHTML = `
        What is the value if ${p.previous} ${diff} ${Math.abs(p.change)}%?
        `;
      }
      if (p.version == "percentage back") {
        let answer = accDecimal((p.next / (100 + p.change)) * 100);
        if (answer.toString().split(".")[1].length > 2) {
          console.log("recurring");
          return updateCalc();
        }
        const diff = p.change > 0 ? "increased by" : "decreased by";
        displayProblem.innerHTML = `
        What is value of a number at first after it ${diff} ${Math.abs(
          p.change
        )}% and became ${p.next}?
        `;
      }
    }
    // REPEATED IDENTITY PERCENTAGE
    if (setting == 21) {
      normalDisplay();
      let lineOne = undefined;
      let tempArr = [];
      if (p.choice == "B") {
        lineOne = `A is ${p.varA}% of B.`;
        tempArr.push(p.varA, 100);
      } else {
        lineOne = `A is ${p.varA}% of A and B.`;
        tempArr.push(p.varA, 100 - p.varA);
      }
      // console.log(`A: ${p.varA}, B: ${tempArr[1]}`);
      [tempArr[0], tempArr[1]] = simplify(tempArr[0], tempArr[1]);
      // console.log(`A: ${tempArr[0]}, B: ${tempArr[1]}`);
      const lineTwo = `B is ${p.varB}% of C.`;
      let tempArr2 = [];
      tempArr2.push(p.varB, 100);
      [tempArr2[0], tempArr2[1]] = simplify(tempArr2[0], tempArr2[1]);
      // console.log(`B: ${tempArr2[0]}, C: ${tempArr2[1]}`);
      const theCommonDeno = commonDeno(tempArr[1], tempArr2[0]);
      if (theCommonDeno > 100) return updateCalc();
      // console.log(theCommonDeno);
      const multiOne = theCommonDeno / tempArr[1];
      const multiTwo = theCommonDeno / tempArr2[0];
      p.answer = [tempArr[0] * multiOne, theCommonDeno, tempArr2[1] * multiTwo];

      displayProblem.innerHTML = `
      ${lineOne}</p>
      ${lineTwo}</p>
      What is the ratio of A:B:C?`;
    }

    // PERCENTAGE: REMAINDER CONCEPT
    if (setting == 22) {
      normalDisplay();
      displayProblem.innerHTML = `
      Person A spent ${p.percA}% of his money on ${p.itemOne}.</p>
      He then spent another ${p.percR}% of his remaining money on ${p.itemTwo}.</p>
      `;
      if (p.question == "percentage") {
        const remaining = 100 - p.percA;
        const itemTwoP = (remaining / 100) * p.percR;
        if (itemTwoP % 1 != 0) return updateCalc();
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What percentage of his money did he spend on ${p.itemTwo}?`
        );
      }
      if (p.question == "percentage left") {
        const remaining = 100 - p.percA;
        const itemTwoP = (remaining / 100) * p.percR;
        if (itemTwoP % 1 != 0) return updateCalc();
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What percentage of his money did he have left?`
        );
      }
      if (
        p.question == "amount left" ||
        p.question == "firstItem" ||
        p.question == "secondItem"
      ) {
        const remaining = 100 - p.percA;
        const itemTwoP = (remaining / 100) * p.percR;
        if (itemTwoP % 1 != 0) return updateCalc();
        const spentP = (genNumbers(99) + 10) * (p.percA + itemTwoP);
        const onePercent = spentP / (p.percA + itemTwoP);
        const leftAmount = onePercent * (100 - itemTwoP - p.percA);

        if (p.question == "amount left") {
          p.answer = leftAmount;
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `He spent $${spentP.toLocaleString("en-US")}.</p>
          How much does he have left?`
          );
        }
        if (p.question == "firstItem") {
          p.answer = onePercent * p.percA;
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `He spent $${spentP.toLocaleString("en-US")}.</p>
          How much did he spend on ${p.itemOne}?`
          );
        }
        if (p.question == "secondItem") {
          p.answer = onePercent * itemTwoP;
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `He spent $${spentP.toLocaleString("en-US")}.</p>
            How much did he spend on ${p.itemTwo}?`
          );
        }
      }
    }
    // PERCENTAGE: SIMPLE AND FURTHER DISCOUNT
    if (setting == 23) {
      normalDisplay();
      if (p.frontBack == "front") {
        if (p.moreDiscount == 0) {
          displayProblem.innerHTML = `
      Person ${p.person} wanted to buy something which cost $${p.cost}.</p>
      As the item was on sale, he was given a discount of ${p.simpleDiscount}%.</p>
      `;
        }
        if (p.moreDiscount == 1) {
          displayProblem.innerHTML = `
      Person ${p.person} wanted to buy something which cost $${p.cost}.</p>
      As the item was on sale, he was given a discount of ${
        p.simpleDiscount
      }%.</p>
      Since Person ${p.person} is also a member, he is given ${
            genNumbers(2) == 0 ? "a further discount" : "an additional discount"
          } of ${p.furtherDiscount}%.</p>
      `;
        }
        if (p.discountOrPrice == "price") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "How much does the item cost now?"
          );
        }
        if (p.discountOrPrice == "discount") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "How much discount was given?"
          );
        }
      }
      if (p.frontBack == "back") {
        if (p.moreDiscount == 0) {
          displayProblem.innerHTML = `
          Person ${p.person} bought something which was on ${p.simpleDiscount}% discount.</p>
          He paid $${p.cost} for it.</p>
          `;
        }
        if (p.moreDiscount == 1) {
          displayProblem.innerHTML = `
          Person ${p.person} bought something which was on ${
            p.simpleDiscount
          }% discount.</p>
          As he is a member, he was given ${
            genNumbers(2) == 0 ? "an additional discount" : "a further discount"
          } of ${p.furtherDiscount}%.</p>
          He paid $${p.cost} for it.</p>
          `;
        }
        if (p.discountOrPrice == "price") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "How much did the item cost at first?"
          );
        }
        if (p.discountOrPrice == "discount") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "How much discount did he receive?"
          );
        }
      }
      displayProblem.insertAdjacentHTML(
        "beforeend",
        `<p><i>Round your answer to 2 decimal places if needed.</i>`
      );
    }

    //AVERAGE: INTERNAL CHANGE
    if (setting == 24) {
      normalDisplay();
      const oldAverage = (p.numOne + p.numTwo + p.numThree) / 3;
      if (oldAverage % 1 != 0) {
        if (oldAverage.toString().split(".")[1].length > 3) return updateCalc();
      }
      const newAverage = (p.numOne + p.numTwo + p.numThree + p.situation) / 3;
      if (newAverage % 1 != 0) {
        if (newAverage.toString().split(".")[1].length > 3) return updateCalc();
      }
      if (p.version == 0) {
        p.answer = newAverage;
        displayProblem.innerHTML = `
      Person A has ${p.numOne}.</p>
      Person B has ${p.numTwo}.</p>
      Person C has ${p.numThree}.</p>
      Person ${p.choice} ${
          p.situation > 0 ? "increased" : "decreased"
        } by ${Math.abs(p.situation)}.</p>
      What is the new average?</p>
      `;
      }
      if (p.version == 1) {
        p.answer = p.numThree;
        displayProblem.innerHTML = `
      There are 3 people in a group.</p>
      The average at first was ${oldAverage}.</p>
      Something happened to Person C.</p>
      Person C became ${p.numThree + p.situation} in the end.</p>
      The average became ${newAverage}.</p>
      What was Person C at first?
      `;
      }
      if (p.version == 2) {
        p.answer = p.numThree + p.situation;
        displayProblem.innerHTML = `
      There are 3 people in a group.</p>
      The average at first was ${oldAverage}.</p>
      Something happened to Person C.</p>
      Person C was ${p.numThree} at first.</p>
      The average became ${newAverage}.</p>
      What is Person C in the end?
      `;
      }
    }

    //AVERAGE: TRIANGLE NUMBER
    if (setting == 25) {
      normalDisplay();
      console.log(p.start, p.end);
      const strArr = [];
      if (p.type == "average") {
        let begin = p.start;
        for (let i = 0; i < 3; i++) {
          strArr.push(begin);
          begin += 1;
        }
        strArr.push("...");
        for (let i = 2; i >= 0; i--) {
          strArr.push(p.end - i);
        }

        displayProblem.innerHTML = `
        Find the sum of: </p>
        ${strArr.join(" + ")}
        `;
      }
      if (p.type == "multiples") {
        p.start = 1;
        p.end = genNumbers(10) + 10;
        let begin = p.start * p.multiple;
        let end = p.end * p.multiple;
        for (let i = 0; i < 3; i++) {
          strArr.push(begin);
          begin += p.multiple;
        }
        strArr.push("...");
        for (let i = 2; i >= 0; i--) {
          strArr.push(end - i * p.multiple);
        }

        displayProblem.innerHTML = `
        Find the sum of: </p>
        ${strArr.join(" + ")}
        `;
      }
    }
  }

  //DISPLAY
  if (level == "calFiveb") {
    calculatorSymbol.classList.remove("hidden");

    //REMAINDER CONCEPT: BEFORE AND AFTER
    if (setting == 1) {
      normalDisplay();
      [p.denoA, p.numeA] = simplify(p.denoA, p.numeA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      let numeL = (p.denoA - p.numeA) * (p.denoB - p.numeB);
      let numeD = p.denoA * p.denoB;
      console.log(`${numeL}/${numeD}`);
      [numeL, numeD] = simplify(numeL, numeD);
      const denominator = commonDeno(p.denoA, numeD);
      console.log(commonDeno(p.denoA, numeD));
      const multiplierA = denominator / p.denoA;
      const multiplierL = denominator / numeD;
      const newNumeL = multiplierL * numeL;
      console.log(`${numeL}/${denominator}`);
      let finalDeno = denominator;
      if (p.end == "the twice") finalDeno *= 2;
      if (p.end == "the thrice") finalDeno *= 3;
      const difference = finalDeno - newNumeL;
      console.log(`${difference} Units`);
      p.value = difference * p.oneUnit;
      p.atFirstUnits = denominator;

      const person = girlNames[genNumbers(girlNames.length)];
      // let endSituation;
      // if (p.end == "same") {
      //   endSituation = "the same amount she had at first.";
      // }
      // if (p.end == "twice the") {
      //   endSituation = "twice the amount she had at first.";
      // }
      // if (p.end == "thrice the") {
      //   endSituation = "thrice the amount she had at first.";
      // }
      displayProblem.innerHTML = `
      ${person} spent ${p.numeA}/${p.denoA} of her money on something.</br>
      She then spent ${p.numeB}/${p.denoB} ${
        genNumbers(2) == 0 ? "of the remainder" : "of the amount left"
      } on something else.</br>
      Her mother gave her another $${p.value} so she now has ${
        p.end
      } amount she had at first.</br>
      How much did ${person} have at first?

      
      `;
    }
    //REMAINDER CONCEPT: UNDER THE SAME UNIT
    if (setting == 2) {
      normalDisplay();
      const person = boyNames[genNumbers(boyNames.length)];
      [p.denoA, p.numeA] = simplify(p.denoA, p.numeA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      [p.unitA, p.unitB] = simplify(p.unitA, p.unitB);

      const totalUnits = p.quantityA * p.unitA + p.quantityB * p.unitB;

      if (totalUnits % p.numeA != 0) {
        console.log("ugly Units");
        return updateCalc();
      }
      // console.log(p.unitA, p.quantityA, p.unitB, p.quantityB);
      // console.log(totalUnits);

      const oneTopNume = totalUnits / p.numeA;
      if (oneTopNume % 1 != 0) {
        console.log("ugly Units");
        return updateCalc();
      }
      const oneTopOtherNume = oneTopNume * (p.denoA - p.numeA);
      console.log(oneTopOtherNume);
      const oneBottomNume = oneTopOtherNume / p.denoB;
      if (oneBottomNume % 1 != 0) {
        console.log("ugly Units");
        return updateCalc();
      }
      const numberOfExtraUnitsUsed = oneBottomNume * p.numeB;
      // console.log(`${numberOfExtraUnitsUsed} extra units`);
      if (p.chosen == "A") p.extraBought = numberOfExtraUnitsUsed / p.unitA;
      if (p.chosen == "B") p.extraBought = numberOfExtraUnitsUsed / p.unitB;

      // console.log(p.extraBought);
      if (p.extraBought <= 0) {
        console.log("No extra bought");
        return updateCalc();
      }
      displayProblem.innerHTML = `
      A ${p.objectA.slice(0, p.objectA.length - 1)} costs ${p.unitA}/${
        p.unitB
      } of a ${p.objectB.slice(0, p.objectB.length - 1)}.</br>
      ${person} bought ${p.quantityA} ${p.objectA} and ${p.quantityB} ${
        p.objectB
      }  with ${p.numeA}/${p.denoA} of his money.</br>
      He then bought ${p.extraBought % 1 != 0 ? "as many" : "more"} ${
        p.chosen == "A" ? p.objectA : p.objectB
      } with ${p.numeB}/${p.denoB} of his remaining money.</br>
      How many ${
        p.chosen == "A" ? p.objectA : p.objectB
      } did he have in the end?
      `;
    }
    // FRACTIONS: OVERLAPPING MODEL
    if (setting == 3) {
      normalDisplay();
      const stuff = ["pens", "pencils", "erasers", "stamps"][genNumbers(4)];
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(girlNames.length)];
      let personC = boyNames[genNumbers(boyNames.length)];
      while (personC == personA) {
        personC = boyNames[genNumbers(boyNames.length)];
      }
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      if (p.denoA == 2) p.denoA += 1;
      const totalValue = p.oneUnit * p.denoA;
      const personAValue = p.oneUnit * p.numeA;
      const personBValue = personAValue + p.difference;
      while (personBValue <= 0) {
        p.difference = [-1, 1][genNumbers(2)] * genNumbers(50) + 10;
        personBValue + p.difference;
      }
      const personCValue = totalValue - personAValue - personBValue;

      displayProblem.innerHTML = `
  ${personA} took ${p.numeA}/${p.denoA} of the ${stuff}.</br>
  ${personB} took ${Math.abs(p.difference)} ${
        p.difference > 0 ? "more" : "less"
      } ${stuff} than ${personA}.</br>
  ${personC} took the remaining ${personCValue} ${stuff}.</br>
  `;
      if (p.question == "A")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How many ${stuff} did ${personA} take?`
        );
      if (p.question == "B")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How many ${stuff} did ${personB} take?`
        );
      if (p.question == "total")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How many ${stuff} were there at first?`
        );
    }
    //IDENTICAL NUMERATOR (TYPE 2)
    if (setting == 4) {
      normalDisplay();
      [p.nume, p.deno] = simplify(p.nume, p.deno);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      const commonNumber = commonDeno(p.deno - p.nume, p.numeTwo);
      const multiOne = commonNumber / (p.deno - p.nume);
      const multiTwo = commonNumber / p.numeTwo;
      const newDenoOne = p.deno * multiOne;
      const newDenoTwo = p.denoTwo * multiTwo;
      console.log(commonNumber, multiOne, multiTwo, newDenoOne, newDenoTwo);
      if (newDenoOne >= newDenoTwo) return updateCalc();
      p.numOne = (genNumbers(10) + 2) * (newDenoTwo - newDenoOne);

      displayProblem.innerHTML = `
      ${p.person} ${genNumbers(2) == 0 ? "used" : "spent"} $${
        p.numOne
      } on something.</p>
      He then ${genNumbers(2) == 0 ? "used" : "spent"} another ${p.nume}/${
        p.deno
      } of ${genNumbers(2) == 0 ? "the remainder" : "the amount left"} on ${
        p.somethingElse
      }.</p>
      He is left with ${p.numeTwo}/${p.denoTwo} of ${
        genNumbers(2) == 0 ? "what he has at first" : "the total"
      }.</p>
      `;
      if (p.version == 0) {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How much does he have at first?"
        );
        p.answer = (p.numOne / (newDenoTwo - newDenoOne)) * newDenoTwo;
      }
      if (p.version == 1) {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How much did he spend on ${p.somethingElse}?`
        );
        p.answer = (p.numOne / (newDenoTwo - newDenoOne)) * (p.nume * multiOne);
      }
    }
    // GEOMETRY: AREA OF RIGHT ANGLED TRIANGLE
    if (setting == 5) {
      drawingDisplay();
      ctx.font = "1em serif";
      ctx.save();
      const y = fillTextSplit(
        "Using the dotted line as a base or height.\nFind the area of the triangle."
      );
      ctx.translate(0, y);

      const height = p.height * 20;
      const base = p.base * 20;
      ctx.translate((400 - base) / 2, height);

      ctx.save();
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(base, 0);
      const Bx = [-(genNumbers(50) + 10), genNumbers(40) + base][genNumbers(2)];
      ctx.lineTo(Bx, -height);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
      const coordAx = 0;
      const coordAy = 0;
      const coordBx = Bx;
      const coordBy = -height;
      const coordCx = base;
      const coordCy = 0;

      console.log("A = " + coordAx + ", " + coordAy);
      console.log("B = " + coordBx + ", " + coordBy);
      console.log("C = " + coordCx + ", " + coordCy);

      if (coordBx == coordCx) {
        console.log("To infinity and beyond!");
        return updateCalc();
      }
      ctx.fillText(
        `${p.base} cm`,
        (coordCx + coordAx) / 2,
        (coordCy + coordAy) / 2 + 14
      );

      const distanceAB = Math.floor(
        Math.sqrt((coordBy * -1 - coordAy) ** 2 + (coordBx - coordAx) ** 2) / 20
      );
      ctx.fillText(
        `${distanceAB} cm`,
        (coordBx + coordAx) / 2 - 35,
        (coordBy + coordAy) / 2
      );
      const distanceBC = Math.floor(
        Math.sqrt((coordCy * -1 - coordBy) ** 2 + (coordCx - coordBx) ** 2) / 20
      );
      ctx.fillText(
        `${distanceBC} cm`,
        (coordBx + coordCx) / 2 + 15,
        -(-coordBy + coordCy) / 2
      );

      // HEIGHTS
      if (p.chosenHeight == "A") {
        console.log("A");
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(coordBx, coordBy);
        ctx.lineTo(coordBx, 0);
        ctx.stroke();

        ctx.fillText(`${-coordBy / 20} cm`, coordBx + 10, coordBy / 2 + 10);
        ctx.restore();
        if (distanceBC == -coordBy / 20) {
          console.log("Ugly");
          return updateCalc();
        }
        if (distanceAB == -coordBy / 20) {
          console.log("Ugly");
          return updateCalc();
        }
      }
      //x1, y1, x2, y2
      function findPerpendicularIntersection(line, point) {
        // Get the slope of the line.

        const gradientA = (line.y2 - line.y1) / (line.x2 - line.x1);
        console.log("Gradient of first line is " + gradientA);

        // const m = (line[2] - line[0]) / (line[3] - line[1]);
        // Calculate the slope of the perpendicular line.
        const gradientB = -1 / gradientA;
        console.log("Gradient of second line is " + gradientB);
        // Calculate the y-coordinate of the perpendicular line at the point.
        //y = mx + c
        // c = y - mx
        const yInterceptA = line.y1 - gradientA * line.x1;
        console.log("First intercept is " + yInterceptA);
        // const yInterceptB = line[3] - gradientB * line[2];
        const yInterceptB = point.y - gradientB * point.x;

        console.log("Second intercept is " + yInterceptB);
        // Calculate the x-coordinate of the intersection point.
        const x = (yInterceptB - yInterceptA) / (gradientA - gradientB);

        // Return the coordinates of the intersection point.
        const y = gradientA * x + yInterceptA;
        return { x, y };
      }

      if (p.chosenHeight == "B") {
        console.log("B");
        const lineAB = {
          x1: 0,
          y1: 0,
          x2: coordBx,
          y2: -coordBy,
        };
        const pointC = {
          x: coordCx,
          y: 0,
        };
        const intersectionAB = findPerpendicularIntersection(lineAB, pointC);
        console.log(intersectionAB);
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(intersectionAB.x, -intersectionAB.y);
        ctx.lineTo(coordCx, 0);
        // ctx.closePath();
        ctx.stroke();

        let lengthSecondHeight = Math.sqrt(
          (intersectionAB.y - pointC.y) ** 2 +
            (intersectionAB.x - pointC.x) ** 2
        );
        console.log(Math.floor(lengthSecondHeight / 20));
        lengthSecondHeight = Math.floor(lengthSecondHeight / 20);

        ctx.fillText(
          `${lengthSecondHeight} cm`,
          (intersectionAB.x + pointC.x) / 2 + 5,
          (-intersectionAB.y + pointC.y) / 2 + 10
        );
        p.lengthSecondH = lengthSecondHeight;
        p.lengthAB = distanceAB;
        ctx.restore();
        if (lengthSecondHeight >= p.base) {
          return updateCalc();
        }
      }

      if (p.chosenHeight == "C") {
        // THIRD PERPENDICULAR LINE
        console.log("C");
        const lineBC = {
          x1: coordBx,
          y1: coordBy,
          x2: coordCx,
          y2: 0,
        };
        const pointA = {
          x: 0,
          y: 0,
        };
        const intersectionBC = findPerpendicularIntersection(lineBC, pointA);
        console.log(intersectionBC);
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(intersectionBC.x, intersectionBC.y);
        ctx.lineTo(0, 0);
        ctx.stroke();

        let lengthThirdHeight = Math.sqrt(
          (intersectionBC.y - pointA.y) ** 2 +
            (intersectionBC.x - pointA.x) ** 2
        );
        console.log(Math.floor(lengthThirdHeight / 20));
        lengthThirdHeight = Math.floor(lengthThirdHeight / 20);

        ctx.fillText(
          `${lengthThirdHeight} cm`,
          (intersectionBC.x + pointA.x) / 2,
          (intersectionBC.y + pointA.y) / 2 + 20
        );
        ctx.restore();
        p.lengthThirdH = lengthThirdHeight;
        p.lengthBC = distanceBC;
        if (lengthThirdHeight >= p.base) {
          return updateCalc();
        }
      }

      ctx.restore();
    }
    // GEOMETRY: AREA OF FIGURE : CUTTING
    if (setting == 6) {
      drawingDisplay();
      ctx.save(); //1st
      const y = fillTextSplit(
        "The figure below is made up of 2 squares.\nFind the area of the shaded part."
      );
      ctx.font = "1em serif";
      ctx.translate(0, y + 10);
      p.valueA = Math.ceil(p.squareA / 10);
      p.valueB = Math.ceil(p.squareB / 10);
      // 1) FIRST SQUARE
      ctx.translate((400 - (p.squareA + p.squareB)) / 2, 0);
      ctx.beginPath();
      ctx.rect(0, 0, p.squareA, p.squareA);
      ctx.stroke();
      ctx.fillText(`${p.valueA} cm`, -50, p.squareA / 2);

      // 3) FIRST SHADED TRIANGLE
      ctx.save(); //2nd
      ctx.strokeStyle = "grey";
      ctx.fillStyle = "grey";
      const adjustY = [0, genNumbers(10) + 10][genNumbers(2)];

      ctx.beginPath();
      ctx.moveTo(p.squareA, p.squareA);
      ctx.lineTo(0, 0);
      ctx.lineTo(p.squareA, adjustY + p.squareB);
      // ctx.closePath();
      ctx.stroke();
      ctx.fill();

      //5: LABEL ADJUST
      if (adjustY != 0) {
        ctx.save(); //3rd
        ctx.fillStyle = "black";
        p.adjust = Math.ceil(adjustY / 10);
        ctx.fillText(`${p.adjust} cm`, p.squareA + 10, adjustY / 2);
        ctx.restore(); //3rd
        if (p.valueA <= p.valueB + p.adjust) {
          ctx.restore();
          ctx.restore();
          return updateCalc();
        }
      }

      //4 ) SECOND SHADED TRIANGLE
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.squareA + p.squareB, adjustY + p.squareB);
      ctx.lineTo(p.squareA, adjustY + p.squareB);
      ctx.stroke();
      // ctx.closePath();
      ctx.fill();
      ctx.restore(); // 2nd

      // 2) SECOND SQUARE
      ctx.translate(p.squareA, adjustY);
      ctx.beginPath();
      ctx.rect(0, 0, p.squareB, p.squareB);
      ctx.stroke();
      ctx.fillText(`${p.valueB} cm`, p.squareB + 5, p.squareB / 2);
      ctx.restore(); // 1st
    }

    //GEOMETRY: MANIPULATION OF DIMENSION
    if (setting == 7) {
      drawingDisplay();
      const y = fillTextSplit(
        `Find the area of the ${
          genNumbers(2) == 1 ? "shaded" : "unshaded"
        } part.`
      );
      ctx.save();
      ctx.font = "1em serif";
      // 1) DRAW RECTANGLE
      ctx.translate(0, y);
      ctx.translate((400 - 240) / 2, 0);
      ctx.beginPath();
      ctx.rect(0, 0, 240, 180);
      ctx.stroke();

      // 2) LABEL RECTANGLE
      ctx.fillText(`${p.breadth} cm`, -50, 180 / 2);
      ctx.fillText(`${p.length} cm`, 240 / 2 - 10, 180 + 15);

      //3) DRAW LINES IN THE RECTANGLE
      const firstX = genNumbers(240 / 3 - 50) + 50;
      const secondX = genNumbers(240 - firstX) + firstX;
      const thirdX = genNumbers(240 - secondX) + secondX;

      if (p.type == 1) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(firstX, 180);
        ctx.lineTo(240, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      }
      if (p.type == 2) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(firstX, 180);
        ctx.lineTo(secondX, 0);
        ctx.lineTo(thirdX, 180);
        ctx.lineTo(240, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      }

      ctx.restore();
    }

    //GEOMETRY: MANIPULATION OF DIMENSION LEVEL 2
    if (setting == 8) {
      drawingDisplay();
      // if (p.label == 1) {
      if (p.givenLabel == "A") p.findPart = "C";
      if (p.givenLabel == "B") p.findPart = "D";
      if (p.givenLabel == "C") p.findPart = "A";
      if (p.givenLabel == "D") p.findPart = "B";
      // }
      const y = fillTextSplit(`Find the area of the ${p.findPart}`);
      ctx.save();
      ctx.font = "1em serif";
      // 1) DRAW RECTANGLE
      ctx.translate(0, y);
      ctx.translate((400 - 240) / 2, 0);
      ctx.beginPath();
      ctx.rect(0, 0, 240, 180);
      ctx.stroke();

      // 2) LABEL RECTANGLE
      if (p.label == 1) {
        ctx.fillText(`${p.breadth} cm`, -50, 180 / 2);
        ctx.fillText(`${p.length} cm`, 240 / 2 - 10, 180 + 15);
      }

      //3) DRAW TRIANGLES IN THE RECTANGLE
      const x1 = genNumbers(80) + 80;
      const y1 = genNumbers(60) + 60;

      // 2) I) LABEL <- NEED COORDINATES FROM (3)
      const figure = p.length * p.breadth;
      const half = figure / 2;
      p.areaA = Math.floor((half * y1) / 180);
      p.areaC = half - p.areaA;
      p.areaB = Math.floor((half * x1) / 240);
      p.areaD = half - p.areaB;
      if (p.label == 1) {
        if (p.givenLabel == "A") {
          ctx.fillText(`${p.areaA} cm2`, x1 - 30, (y1 - 0) / 2);
          ctx.fillText(`C`, x1 - 30, (180 + y1) / 2);
        }
        if (p.givenLabel == "B") {
          ctx.fillText(`${p.areaB} cm2`, (240 + x1) / 2 - 10, y1 + 5);
          ctx.fillText(`D`, x1 / 2, y1 + 5);
        }
        if (p.givenLabel == "C") {
          ctx.fillText(`${p.areaC} cm2`, x1 - 30, (180 + y1) / 2);
          ctx.fillText(`A`, x1 - 30, (y1 - 0) / 2);
        }
        if (p.givenLabel == "D") {
          ctx.fillText(`${p.areaD} cm2`, x1 / 2, y1 + 5);
          ctx.fillText(`B`, (240 + x1) / 2, y1 + 5);
        }
      }
      if (p.label == 2) {
        // ctx.fillText(`${p.areaA} cm2`, x1 - 30, (y1 - 0) / 2);
        // ctx.fillText(`${p.areaB} cm2`, (240 + x1) / 2 - 10, y1 + 5);
        // ctx.fillText(`${p.areaC} cm2`, x1 - 30, (180 - y1) / 2);
        // ctx.fillText(`${p.areaD} cm2`, x1 / 2, y1 + 5);
        if (p.givenLabel == "A") {
          ctx.fillText(`${p.areaA} cm2`, x1 - 30, (y1 - 0) / 2);
          ctx.fillText(`${p.areaB} cm2`, (240 + x1) / 2 - 10, y1 + 5);
          ctx.fillText(`C`, x1 - 30, (180 + y1) / 2);
          ctx.fillText(`${p.areaD} cm2`, x1 / 2 - 5, y1 + 5);
        }
        if (p.givenLabel == "B") {
          ctx.fillText(`${p.areaA} cm2`, x1 - 30, (y1 - 0) / 2);
          ctx.fillText(`${p.areaB} cm2`, (240 + x1) / 2 - 10, y1 + 5);
          ctx.fillText(`${p.areaC} cm2`, x1 - 30, (180 + y1) / 2);
          ctx.fillText(`D`, x1 / 2, y1 + 5);
        }
        if (p.givenLabel == "C") {
          ctx.fillText(`A`, x1 - 30, (y1 - 0) / 2);
          ctx.fillText(`${p.areaB} cm2`, (240 + x1) / 2 - 10, y1 + 5);
          ctx.fillText(`${p.areaC} cm2`, x1 - 30, (180 + y1) / 2);
          ctx.fillText(`${p.areaD} cm2`, x1 / 2 - 5, y1 + 5);
        }
        if (p.givenLabel == "D") {
          ctx.fillText(`${p.areaA} cm2`, x1 - 30, (y1 - 0) / 2);
          ctx.fillText(`B`, (240 + x1) / 2, y1 + 5);
          ctx.fillText(`${p.areaC} cm2`, x1 - 30, (180 + y1) / 2);
          ctx.fillText(`${p.areaD} cm2`, x1 / 2 - 5, y1 + 5);
        }
      }
      // ctx.fillText(`${areaA} cm2`, x1 - 30, y1 - 50);
      // ctx.fillText(`${areaB} cm2`, x1 + 50, y1 + 5);
      // ctx.fillText(`${areaC} cm2`, x1 - 30, y1 + 50);
      // ctx.fillText(`${areaD} cm2`, x1 - 80, y1 + 5);

      // 3) I) FIRST TRIANGLE
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(x1, y1);
      ctx.lineTo(240, 0);
      ctx.closePath();
      ctx.stroke();

      // 3) II) SECOND TRIANGLE
      ctx.beginPath();
      ctx.moveTo(0, 180);
      ctx.lineTo(x1, y1);
      ctx.lineTo(240, 180);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
    }
    // AREA OF FIGURE: DIFFERENT UNITS
    if (setting == 9) {
      drawingDisplay();
      ctx.save();
      ctx.font = "1em serif";

      let pointDF = p.firstTriangleBase;
      let pointCF = p.length - p.firstTriangleBase;
      [pointDF, pointCF] = simplify(pointDF, pointCF);
      if (pointDF == p.firstTriangleBase) {
        console.log("Couldnt simplify 1.");
        ctx.restore();
        return updateCalc();
      }
      let pointBE = p.thirdTriangleHeight;
      let pointCE = p.breadth - p.thirdTriangleHeight;
      [pointBE, pointCE] = simplify(pointBE, pointCE);
      if (pointBE == p.thirdTriangleHeight) {
        console.log("Couldnt simplify 2.");
        ctx.restore();
        return updateCalc();
      }
      console.log(pointDF, pointCF);
      const choiceFirst = genNumbers(3);
      if (choiceFirst == 0) {
        ctx.fillText(`Point DF is ${pointDF}/${pointCF} CF.`, 20, 20);
      } else if (choiceFirst == 1) {
        ctx.fillText(`Point DF is ${pointDF} : ${pointCF} to CF.`, 20, 20);
      } else {
        ctx.fillText(
          `Point DF is ${pointDF} : ${pointCF + pointDF} to CD.`,
          20,
          20
        );
      }

      console.log(pointBE, pointCE);
      const choiceSecond = genNumbers(3);
      if (choiceSecond == 0) {
        ctx.fillText(`Point BE is ${pointBE}/${pointCE} CE.`, 20, 40);
      } else if (choiceSecond == 1) {
        ctx.fillText(`Point BE is ${pointBE} : ${pointCE} to CE.`, 20, 40);
      } else {
        ctx.fillText(
          `Point BE is ${pointBE} : ${pointCE + pointBE} to BC.`,
          20,
          40
        );
      }
      const multipler = 10;
      ctx.fillText(
        `What is the fraction of the figure is the shaded part?`,
        20,
        60 + p.breadth * multipler + 50
      );
      // let pointBE = p.thirdTriangleHeight;
      // let pointCE = p.breadth - p.thirdTriangleHeight;

      ctx.fillStyle = "grey";
      ctx.translate((400 - p.length * multipler) / 2, 60);
      ctx.beginPath();
      ctx.rect(0, 0, p.length * multipler, p.breadth * multipler);
      ctx.stroke();
      ctx.fill();
      ctx.fillStyle = "black";
      ctx.fillText(`A`, -10, -3);
      ctx.fillText(`B`, p.length * multipler, -3);
      ctx.fillText(`C`, p.length * multipler, p.breadth * multipler + 10);
      ctx.fillText(`D`, -10, p.breadth * multipler + 10);

      // FIRST TRIANGLE
      ctx.fillStyle = "white";
      // const firstTriangleBase = genNumbers((p.length - 5) * multipler);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.firstTriangleBase * multipler, p.breadth * multipler);
      ctx.lineTo(0, p.breadth * multipler);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      // ctx.fillStyle = "black";
      // ctx.fillText(`A`, 5, p.breadth * multipler - 3);

      // SECOND TRIANGLE
      ctx.fillStyle = "white";
      // const thirdTriangleHeight = (genNumbers(p.breadth - 5) + 5) * multipler;
      ctx.beginPath();
      ctx.moveTo(p.firstTriangleBase * multipler, p.breadth * multipler);
      ctx.lineTo(p.length * multipler, p.breadth * multipler);
      ctx.lineTo(p.length * multipler, p.thirdTriangleHeight * multipler);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      // ctx.fillStyle = "black";
      // ctx.fillText(`B`, p.length * multipler - 15, p.breadth * multipler - 3);

      // THIRD TRIANGLE
      // const thirdTriangleHeight = (genNumbers(p.breadth - 5) + 5) * multipler;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.length * multipler, 0);
      ctx.lineTo(p.length * multipler, p.thirdTriangleHeight * multipler);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.fillText(
        `E`,
        p.length * multipler + 1,
        p.thirdTriangleHeight * multipler + 5
      );
      ctx.fillText(
        `F`,
        p.firstTriangleBase * multipler - 5,
        p.breadth * multipler + 13
      );

      ctx.restore();
    }

    //  REPEATED GROUP RATIO
    if (setting == 10) {
      normalDisplay();
      let total = p.varA + p.varB + p.varC;
      let firstTotal = undefined;
      let secondTotal = undefined;
      p.answer = [p.varA, p.varB, p.varC];

      if (p.firstScene == "total" && p.secondScene == "total") {
        [p.varA, firstTotal] = simplify(p.varA, total);
        [p.varB, secondTotal] = simplify(p.varB, total);
        if (firstTotal == secondTotal) return updateCalc();
        console.log(`Scene One = ${p.varA}, ${p.varB}, ${p.varC}`);
        // p.answer = [finalA, finalB, finalC];

        displayProblem.innerHTML = `
        A is ${p.varA} : ${
          p.firstScene == "B and C" ? p.varB + p.varC : firstTotal
        } of the ${p.firstScene}.</p>
        B is ${p.varB} : ${
          p.secondScene == "C" ? p.varC : secondTotal
        } of the ${p.secondScene}.</p>
        What is the ratio of A : B : C?</p>
        `;
      }

      if (p.firstScene == "B and C" && p.secondScene == "total") {
        let sceneOne = p.varB + p.varC;
        [p.varA, sceneOne] = simplify(p.varA, sceneOne);
        [p.varB, secondTotal] = simplify(p.varB, total);
        displayProblem.innerHTML = `
        A is ${p.varA} : ${sceneOne} of ${p.firstScene}.</p>
        B is ${p.varB} : ${secondTotal} of the ${p.secondScene}.</p>
        What is the ratio of A : B : C?</p>
        `;
      }
      if (p.firstScene == "B and C" && p.secondScene == "C") {
        let sceneOne = p.varB + p.varC;
        [p.varA, sceneOne] = simplify(p.varA, sceneOne);
        [p.varB, p.varC] = simplify(p.varB, p.varC);
        displayProblem.innerHTML = `
        A is ${p.varA} : ${sceneOne} of ${p.firstScene}.</p>
        B is ${p.varB} : ${p.varC} of ${p.secondScene}.</p>
        What is the ratio of A : B : C?</p>
        `;
      }
      if (p.firstScene == "total" && p.secondScene == "C") {
        [p.varA, firstTotal] = simplify(p.varA, total);
        [p.varB, p.varC] = simplify(p.varB, p.varC);
        displayProblem.innerHTML = `
        A is ${p.varA} : ${firstTotal} of the ${p.firstScene}.</p>
        B is ${p.varB} : ${p.varC} of ${p.secondScene}.</p>
        What is the ratio of A : B : C?</p>
        `;
      }
    }
    //RATIO: UNCHANGED OBJECT
    if (setting == 11) {
      normalDisplay();
      let unitAF = "";
      let unitBF = "";
      let unitAE = "";
      let unitBE = "";
      let value = "";
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      if (p.valueAFirst == unitAF || p.valueBFirst == unitBF) {
        return updateCalc();
      }
      if (p.happensTo == "A") {
        [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBFirst);
      }
      if (p.happensTo == "B") {
        [unitAE, unitBE] = simplify(p.valueAFirst, p.valueBEnd);
      }
      if (p.valueAEnd == unitAE || p.valueBEnd == unitBF) {
        return updateCalc();
      }
      // LINE ONE
      let lineOne = genNumbers(4);
      if (lineOne == 0) {
        lineOne = `The ratio of A : B is ${unitAF} : ${unitBF} at first.`;
      }
      if (lineOne == 1) {
        lineOne = `A is ${unitAF}/${unitBF} of B at first.`;
      }
      if (lineOne == 2) {
        lineOne = `The ratio of A to A and B is ${unitAF} : ${
          unitAF + unitBF
        } at first.`;
      }
      if (lineOne == 3) {
        lineOne = ` A is ${unitAF}/${unitAF + unitBF} of the total at first.`;
      }
      // LINE TWO

      let lineTwo = "";
      let positive = ["received", "bought"][genNumbers(2)];
      let negative = ["sold away", "gave away"][genNumbers(2)];

      if (p.happensTo == "A") {
        if (p.valueAEnd - p.valueAFirst == 0) {
          return updateCalc();
        }
        if (unitAF == unitAE || unitBF == unitBE) {
          console.log("Units are already the same");
          return updateCalc();
        }
        if (p.valueAEnd - p.valueAFirst > 0) {
          lineTwo = `A ${positive} another ${
            Math.abs(p.valueAEnd - p.valueAFirst) * p.multiplier
          } ${p.object}.`;
          value = Math.abs(p.valueAEnd - p.valueAFirst) * p.multiplier;
        } else {
          lineTwo = `A ${negative} ${
            Math.abs(p.valueAEnd - p.valueAFirst) * p.multiplier
          } ${p.object}.`;
          value = Math.abs(p.valueAEnd - p.valueAFirst) * p.multiplier;
        }
      }
      if (p.happensTo == "B") {
        if (p.valueBEnd - p.valueBFirst == 0) {
          return updateCalc();
        }
        if (p.valueBEnd - p.valueBFirst > 0) {
          lineTwo = `B ${positive} another ${
            Math.abs(p.valueBEnd - p.valueBFirst) * p.multiplier
          } ${p.object}.`;
          value = Math.abs(p.valueBEnd - p.valueBFirst) * p.multiplier;
        } else {
          lineTwo = `B ${negative} ${
            Math.abs(p.valueBEnd - p.valueBFirst) * p.multiplier
          } ${p.object}.`;
          value = Math.abs(p.valueBEnd - p.valueBFirst) * p.multiplier;
        }
      }

      if (unitAF >= 15 || unitAE > 15 || unitAE > 15 || unitBE > 15) {
        console.log("Units are too big");
        return updateCalc();
      }

      // LINE THREE
      let lineThree = genNumbers(4);
      if (lineThree == 0) {
        lineThree = `The ratio of A : B in the end is ${unitAE} : ${unitBE}.`;
      }
      if (lineThree == 1) {
        lineThree = `A became ${unitAE}/${unitBE} of B.`;
      }
      if (lineThree == 2) {
        lineThree = `The ratio of A to the total is ${unitAE} : ${
          unitAE + unitBE
        } in the end.`;
      }
      if (lineThree == 3) {
        lineThree = `A became ${unitAE}/${unitAE + unitBE} of the total.`;
      }

      //LINE FOUR
      let lineFour = "";
      console.log(p.situation, p.question);
      if (p.happensTo == "A") {
        if (p.question == "BF" || p.question == "BE") {
          lineFour = "What is the value of B?";
        }
        if (p.question == "AF") {
          lineFour = "What is A at first?";
        }
        if (p.question == "AE") {
          lineFour = "What is A in the end?";
        }
      }
      if (p.happensTo == "B") {
        if (p.question == "AF" || p.question == "AE") {
          lineFour = "What is the value of A?";
        }
        if (p.question == "BF") {
          lineFour = "What is B at first?";
        }
        if (p.question == "BE") {
          lineFour = "What is B in the end?";
        }
      }
      let commonUnit = undefined;
      let newAF = undefined;
      let newAE = undefined;
      let newBF = undefined;
      let newBE = undefined;
      console.log(unitAF, unitBF, unitAE, unitBE);

      let oneUnit = undefined;
      if (p.happensTo == "B") {
        commonUnit = commonDeno(unitAF, unitAE);
        newAF = newAE = commonUnit;
        const sceneOne = commonUnit / unitAF;
        newBF = sceneOne * unitBF;
        const sceneTwo = commonUnit / unitAE;
        newBE = sceneTwo * unitBE;
        console.log(sceneOne, sceneTwo);
        oneUnit = value / Math.abs(newBF - newBE);
        if (p.question == "AF" || p.question == "AE") {
          p.answer = newAE * oneUnit;
        }
        if (p.question == "BF") p.answer = newBF * oneUnit;
        if (p.question == "BE") p.answer = newBE * oneUnit;
      }
      if (p.happensTo == "A") {
        commonUnit = commonDeno(unitBF, unitBE);
        newBF = newBE = commonUnit;
        const sceneOne = commonUnit / unitBF;
        newAF = sceneOne * unitAF;
        const sceneTwo = commonUnit / unitBE;
        newAE = sceneTwo * unitAE;
        console.log(sceneOne, sceneTwo);
        oneUnit = value / Math.abs(newAF - newAE);
        if (p.question == "BF" || p.question == "BE") {
          p.answer = newBE * oneUnit;
        }
        if (p.question == "AF") p.answer = newAF * oneUnit;
        if (p.question == "AE") p.answer = newAE * oneUnit;
      }

      console.log(commonUnit, newAF, newBF, newAE, newBE, value, oneUnit);
      displayProblem.innerHTML = `
      ${lineOne}</p>
      ${lineTwo}</p>
      ${lineThree}</p>
      ${lineFour}
      `;
    }
    // RATIO: UNCHANGED TOTAL
    if (setting == 12) {
      normalDisplay();
      let unitAF = "";
      let unitBF = "";
      let unitAE = "";
      let unitBE = "";

      // LINE TWO
      let happensTo = ["A", "A"][genNumbers(2)];
      let lineTwo = "";
      let direction = "";
      // let direction = ["transferred", "received"][genNumbers(2)];
      if (p.situationA == 0 || p.situationB == 0) {
        return updateCalc();
      }
      if (happensTo == "A") {
        if (p.situationA > 0) {
          p.valueAEnd = p.valueAFirst + p.situationA;
          p.valueBEnd = p.valueBFirst - p.situationA;
          lineTwo = `A received another ${
            Math.abs(p.situationA) * p.multiplier
          } ${p.object} from B.`;
        }
        if (p.situationA < 0) {
          p.valueAEnd = p.valueAFirst + p.situationA;
          p.valueBEnd = p.valueBFirst - p.situationA;
          lineTwo = `A transferred ${Math.abs(p.situationA) * p.multiplier} ${
            p.object
          } to B.`;
        }
      }
      if (happensTo == "B") {
        if (p.situationB > 0) {
          p.valueAEnd = p.valueAFirst - p.situationB;
          p.valueBEnd = p.valueBFirst + p.situationB;
          lineTwo = `B received another ${
            Math.abs(p.situationB) * p.multiplier
          } ${p.object} from A.`;
        }
        if (p.situationB < 0) {
          p.valueAEnd = p.valueAFirst - p.situationB;
          p.valueBEnd = p.valueBFirst + p.situationB;
          lineTwo = `B transferred ${Math.abs(p.situationB) * p.multiplier} ${
            p.object
          } to A.`;
        }
      }
      if (p.valueAEnd == 0 || p.valueBEnd == 0) {
        return updateCalc();
      }
      console.log(p.valueAFirst, p.valueBFirst, p.valueAEnd, p.valueBEnd);

      // PREP
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBEnd);
      if (p.valueAFirst == unitAF || p.valueAEnd == unitAE) {
        console.log("Values unable to be simplified");
        return updateCalc();
      }

      if (unitAF + unitBF == unitAE + unitBE) {
        console.log("Total units is already the same.");
        return updateCalc();
      }
      if (unitAF >= 15 || unitAE > 15 || unitAE > 15 || unitBE > 15) {
        console.log("Units are too big");
        return updateCalc();
      }
      // LINE ONE
      let lineOne = genNumbers(4);
      if (lineOne == 0) {
        lineOne = `The ratio of A : B is ${unitAF} : ${unitBF} at first.`;
      }
      if (lineOne == 1) {
        lineOne = ` A  is ${unitAF}/${unitBF} of B at first.`;
      }
      if (lineOne == 2) {
        lineOne = ` A  is ${unitAF}/${unitAF + unitBF} of the total at first.`;
      }
      if (lineOne == 3) {
        lineOne = `The ratio of A to the total is ${unitAF}:${
          unitAF + unitBF
        } at first.`;
      }

      // LINE THREE
      let lineThree = genNumbers(2);
      if (lineThree == 0) {
        lineThree = `
              The ratio of A : B in the end is ${unitAE} : ${unitBE}.`;
      }

      if (unitAF < 1 || unitAE < 1 || unitBF < 1 || unitBE < 1) {
        console.log("Negative units");
        return updateCalc();
      }
      if (lineThree == 1) {
        lineThree = `
              A is ${unitAE}/${unitBE} of B in the end.`;
      }
      // LINE FOUR
      let lineFour = "";
      if (p.question == "AF")
        lineFour = `How many ${p.object} does A have at first?`;
      if (p.question == "BF")
        lineFour = `How many ${p.object} does B have at first?`;
      if (p.question == "AE")
        lineFour = `How many ${p.object} does A have in the end?`;
      if (p.question == "BE")
        lineFour = `How many ${p.object} does B have in the end?`;

      displayProblem.innerHTML = `
      ${lineOne}</p>
      ${lineTwo}</p>
      ${lineThree}</p>
      ${lineFour}`;
    }
    //RATIO: UNCHANGED DIFFERENCE
    if (setting == 13) {
      normalDisplay();
      let unitAF = "";
      let unitBF = "";
      let unitAE = "";
      let unitBE = "";

      p.valueAEnd = p.valueAFirst + p.situation;
      p.valueBEnd = p.valueBFirst + p.situation;
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBEnd);
      if (unitAF > 20 || unitBF > 20 || unitAE > 20 || unitBE > 20) {
        console.log("Units are too big");
        return updateCalc();
      }
      if (unitAF <= 0 || unitBF <= 0 || unitAE <= 0 || unitBE <= 0) {
        console.log("Units are too Small");
        return updateCalc();
      }
      if (((unitAF == unitBF) == unitAE) == unitBE) return updateCalc();
      if (p.valueAFirst == unitAF || p.valueAEnd == unitAE) {
        return updateCalc();
      }

      // LINE ONE
      let lineOne = genNumbers(4);
      if (lineOne == 0) {
        lineOne = `The ratio of A : B is ${unitAF}:${unitBF}.`;
      }
      if (lineOne == 1) {
        lineOne = `A is ${unitAF}/${unitBF} of B .`;
      }
      if (lineOne == 2) {
        lineOne = `The ratio of A to the total is ${unitAF}:${
          unitAF + unitBF
        }.`;
      }
      if (lineOne == 3) {
        lineOne = `A is ${unitAF}/${unitAF + unitBF} of the total.`;
      }

      // LINE TWO
      let lineTwo = "";
      let positive = ["bought another", "increased by", "received another"][
        genNumbers(3)
      ];
      let negative = ["sold away", "decreased by", "removed"][genNumbers(3)];
      if (p.situation < 0) {
        lineTwo = `Both ${negative} ${Math.abs(p.situation)} ${p.object}.`;
      } else {
        lineTwo = `Both ${positive} ${p.situation} ${p.object}.`;
      }

      // LINE THREE

      [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBEnd);

      if (Math.abs(unitAF - unitBF) == Math.abs(unitAE - unitBE)) {
        console.log("Difference is already the same.");
        return updateCalc();
      }
      let lineThree = genNumbers(4);
      if (lineThree == 0) {
        lineThree = `The ratio of A:B in the end is ${unitAE}:${unitBE}.`;
      }
      if (lineThree == 1) {
        lineThree = `A is ${unitAE}/${unitBE} of B in the end.`;
      }
      if (lineThree == 2) {
        lineThree = `The ratio of A to A and B in the end is ${unitAE}:${
          unitAE + unitBE
        }.`;
      }
      if (lineThree == 3) {
        lineThree = `A is ${unitAE}/${
          unitAE + unitBE
        } of the total in the end.`;
      }

      // LINE FOUR
      let lineFour = "";
      if (p.question == "AF")
        lineFour = `How many ${p.object} does A have at first?`;
      if (p.question == "BF")
        lineFour = `How many ${p.object} does B have at first?`;
      if (p.question == "AE")
        lineFour = `How many ${p.object} does A have in the end?`;
      if (p.question == "BE")
        lineFour = `How many ${p.object} does B have in the end?`;

      // EXCECUTE
      displayProblem.innerHTML = `
      ${lineOne}</p>
      ${lineTwo}</p>
      ${lineThree}</p>
      ${lineFour}
      `;
    }
    // RATIO: MANIPULATION IN UNITS
    if (setting == 14) {
      normalDisplay();
      [p.ratioA, p.ratioB] = simplify(p.ratioA, p.ratioB);
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      if (p.numeA > p.denoA) [p.numeA, p.denoA] = [p.denoA, p.numeA];
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      if (p.numeB > p.denoB) [p.numeB, p.denoB] = [p.denoB, p.numeB];

      displayProblem.innerHTML = `
      The ratio of A : B is ${p.ratioA} : ${p.ratioB}.</p>
      ${p.numeA}/${p.denoA} of A was removed.</p>
      ${p.numeB}/${p.denoB} of B was removed.</p>
      What is the ratio of A : B in the end?

      `;
    }
    // REPEATED IDENTITY GEOMETRY
    if (setting == 15) {
      drawingDisplay();
      const heightNeeded = 140 + p.rectBreadth * 10 + p.triangleHeight * 10;
      if (heightNeeded > 275) {
        canvas.setAttribute("height", heightNeeded + 20);
      } else {
        canvas.setAttribute("height", 275);
      }

      ctx.clearRect(0, 0, 400, 275);
      ctx.save();
      const xFirst = p.rectLength * 10;
      const yFirst = p.rectBreadth * 10;
      ctx.beginPath();
      ctx.rect(20, 140, p.rectLength * 10, p.rectBreadth * 10);
      ctx.stroke();
      const firstArea = xFirst * yFirst;
      console.log(firstArea);

      ctx.save();

      const secondShape = ["rectangle", "square", "triangle"][genNumbers(3)];
      let xOverLapStart = undefined;
      let yOverLapStart = undefined;
      let overLappingArea = undefined;
      let secondArea = undefined;
      let unshadedFirst = undefined;
      let unshadedSecond = undefined;
      //NEXT SHAPE
      if (secondShape == "square") {
        p.secRectBreadth = p.secRectLength;
      }
      if (p.secRecLength == p.secRectBreadth) secondShape = "square";
      ctx.translate(20, 140);
      if (secondShape == "rectangle" || secondShape == "square") {
        xOverLapStart = xFirst / 2 + genNumbers(xFirst / 2) - 10;
        yOverLapStart = yFirst / 2 + genNumbers(yFirst / 2) - 10;
        ctx.translate(xOverLapStart, yOverLapStart);

        //OVERLAPPING
        const lengthOverLapping = xFirst - xOverLapStart;
        const BreadthOverLapping = yFirst - yOverLapStart;
        overLappingArea = lengthOverLapping * BreadthOverLapping;
        console.log(overLappingArea);

        ctx.save();
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.rect(0, 0, lengthOverLapping, BreadthOverLapping);
        // ctx.stroke();
        ctx.fill();
        ctx.restore();

        //DRAW 2ND SHAPE
        ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(p.triangleBase * 10, 0);
        // ctx.lineTo(0, p.triangleHeight * 10);
        // ctx.closePath();
        ctx.rect(0, 0, p.secRectLength * 10, p.secRectBreadth * 10);
        ctx.stroke();
        secondArea = p.secRectLength * 10 * p.secRectBreadth * 10;
        console.log(secondArea);
        // if (lengthOverLapping * 2 > p.triangleBase * 10) {
        //   console.log("Overlapping figure is too big");
        //   return updateCalc();
        // }
      }
      if (secondShape == "triangle") {
        xOverLapStart = xFirst / 2 + genNumbers(xFirst / 2) - 10;
        yOverLapStart = yFirst / 2 + genNumbers(yFirst / 2) - 10;
        ctx.translate(xOverLapStart, yOverLapStart);

        //OVERLAPPING
        const lengthOverLapping = xFirst - xOverLapStart;
        const breathOverLapping = yFirst - yOverLapStart;
        overLappingArea = lengthOverLapping * breathOverLapping;
        console.log(overLappingArea);

        ctx.save();
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.rect(0, 0, lengthOverLapping, breathOverLapping);
        // ctx.stroke();
        ctx.fill();
        ctx.restore();

        //DRAW 2ND SHAPE
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.triangleBase * 10, 0);
        ctx.lineTo(0, p.triangleHeight * 10);
        ctx.closePath();
        ctx.stroke();
        secondArea = 0.5 * p.triangleBase * 10 * p.triangleHeight * 10;
        console.log(secondArea);
        if (lengthOverLapping * 2 > p.triangleBase * 10) {
          console.log("Overlapping figure is too big");
          return updateCalc();
        }
      }

      ctx.restore();

      ctx.restore();

      //QUESTION
      ctx.save();
      ctx.translate(10, 20);
      ctx.font = "1em serif";
      unshadedFirst = firstArea - overLappingArea;
      unshadedSecond = secondArea - overLappingArea;
      let overFirst = overLappingArea;
      let overSecond = overLappingArea;
      [unshadedFirst, overFirst] = simplify(unshadedFirst, overFirst);
      [unshadedSecond, overSecond] = simplify(unshadedSecond, overSecond);
      const maxUnit = 30;
      if (
        unshadedFirst > maxUnit ||
        unshadedSecond > maxUnit ||
        overFirst > maxUnit ||
        overSecond > maxUnit
      ) {
        console.log("Units are too big");
        return updateCalc();
      }
      if (overFirst == overSecond) {
        return updateCalc();
      }

      // FIRST UNIT SENTENCE
      const unitSentenceOne = genNumbers(3);
      //SET 1
      if (unitSentenceOne == 0) {
        ctx.fillText(
          `The ratio of the unshaded part of the ${
            secondShape == "rectangle" ? "top " : ""
          }rectangle to shaded part`,
          10,
          0
        );
        ctx.fillText(
          ` of the ${
            secondShape == "rectangle" ? "top " : ""
          }rectangle is ${unshadedFirst} : ${overFirst}.`,
          10,
          30
        );
      }
      //SET 2
      if (unitSentenceOne == 1) {
        ctx.fillText(
          `The ratio of the unshaded part of the ${
            secondShape == "rectangle" ? "top " : ""
          }rectangle to the`,
          10,
          0
        );
        ctx.fillText(
          `${
            secondShape == "rectangle" ? "top " : ""
          }rectangle is ${unshadedFirst} : ${unshadedFirst + overFirst}.`,
          10,
          30
        );
      }
      //SET 3
      if (unitSentenceOne == 2) {
        ctx.fillText(
          `The ratio of the shaded part to the unshaded part`,
          10,
          0
        );
        ctx.fillText(
          ` of the ${
            secondShape == "rectangle" ? "top " : ""
          }rectangle is ${overFirst} : ${unshadedFirst}.`,
          10,
          30
        );
      }

      // SECOND UNIT SENTENCE
      const unitSentenceTwo = genNumbers(3);
      if (unitSentenceTwo == 0) {
        ctx.fillText(
          `The ratio of the unshaded part of the ${
            secondShape == "rectangle" ? "bottom" : ""
          } ${secondShape} to `,
          10,
          50
        );
        ctx.fillText(
          `shaded part of the ${
            secondShape == "rectangle" ? "bottom" : ""
          } ${secondShape} is ${unshadedSecond} : ${overSecond}.`,
          10,
          70
        );
      }
      if (unitSentenceTwo == 1) {
        ctx.fillText(
          `The ratio of the unshaded part of the ${
            secondShape == "rectangle" ? "bottom" : ""
          } ${secondShape} to the area`,
          10,
          50
        );
        ctx.fillText(
          ` of the ${
            secondShape == "rectangle" ? "bottom" : ""
          } ${secondShape} is ${unshadedSecond} : ${
            unshadedSecond + overSecond
          }.`,
          10,
          70
        );
      }
      if (unitSentenceTwo == 2) {
        ctx.fillText(
          `The ratio of the shaded part of the ${
            secondShape == "rectangle" ? "bottom" : ""
          } ${secondShape} to`,
          10,
          50
        );
        ctx.fillText(
          `unshaded part of the ${
            secondShape == "rectangle" ? "bottom" : ""
          } ${secondShape} is ${overSecond} : ${unshadedSecond}.`,
          10,
          70
        );
      }

      //  QUESTION
      ctx.fillText(
        `What is the ratio of the ${
          secondShape == "rectangle" ? "top" : ""
        } unshaded part in the rectangle`,
        10,
        90
      );
      ctx.fillText(
        `to the unshaded part in the ${
          secondShape == "rectangle" ? "bottom" : ""
        } ${secondShape}?`,
        10,
        110
      );
      ctx.restore();

      const commonArea = commonDeno(overFirst, overSecond);
      let newUnshadedFirst = (commonArea / overFirst) * unshadedFirst;
      let newUnshadedSecond = (commonArea / overSecond) * unshadedSecond;
      [newUnshadedFirst, newUnshadedSecond] = simplify(
        newUnshadedFirst,
        newUnshadedSecond
      );
      p.answer = `${newUnshadedFirst}:${newUnshadedSecond}`;
    }
    // RATIO: REPEATED GROUP
    if (setting == 16) {
      normalDisplay();
      const displayA = p.percA;
      const displayB = p.percB;
      if (p.firstSentence == "the total" && p.secondSentence == "the total") {
        if (p.percA + p.percB >= 100) return updateCalc();
      }
      let commonGroup = undefined;
      let newA = undefined;
      let newB = undefined;
      let newC = undefined;
      if (p.firstSentence == "B and C" && p.secondSentence == "C") {
        let bAndc = 100;
        [p.percA, bAndc] = simplify(p.percA, bAndc);
        let c = 100;
        [p.percB, c] = simplify(p.percB, c);
        commonGroup = commonDeno(bAndc, p.percB + c);
        if (commonGroup == "Error") return updateCalc();
        const multiplierOne = commonGroup / bAndc;
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + c);
        newB = p.percB * multiplierTwo;
        newC = c * multiplierTwo;
        if (newA < 1 || newB < 1 || newC < 1) return updateCalc();
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (p.firstSentence == "the total" && p.secondSentence == "C") {
        let bAndc = 100 - p.percA;
        [p.percA, bAndc] = simplify(p.percA, bAndc);
        let c = 100;
        [p.percB, c] = simplify(p.percB, c);
        commonGroup = commonDeno(bAndc, p.percB + c);
        if (commonGroup == "Error") return updateCalc();
        const multiplierOne = commonGroup / bAndc;
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + c);
        newB = p.percB * multiplierTwo;
        newC = c * multiplierTwo;
        if (newA < 1 || newB < 1 || newC < 1) return updateCalc();
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (p.firstSentence == "B and C" && p.secondSentence == "the total") {
        let bAndc = 100;
        [p.percA, bAndc] = simplify(p.percA, bAndc);
        let aAndc = 100 - p.percB;
        [p.percB, aAndc] = simplify(p.percB, aAndc);
        commonGroup = commonDeno(p.percA + bAndc, p.percB + aAndc);
        if (commonGroup == "Error") return updateCalc();
        const multiplierOne = commonGroup / (p.percA + bAndc);
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + aAndc);
        newB = p.percB * multiplierTwo;
        newC = aAndc * multiplierTwo - newA;
        if (newA < 1 || newB < 1 || newC < 1) return updateCalc();
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (p.firstSentence == "the total" && p.secondSentence == "the total") {
        let bAndc = 100 - p.percA;
        [p.percA, bAndc] = simplify(p.percA, bAndc);
        let aAndc = 100 - p.percB;
        [p.percB, aAndc] = simplify(p.percB, aAndc);
        commonGroup = commonDeno(p.percA + bAndc, p.percB + aAndc);
        if (commonGroup == "Error") return updateCalc();
        const multiplierOne = commonGroup / (p.percA + bAndc);
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + aAndc);
        newB = p.percB * multiplierTwo;
        newC = aAndc * multiplierTwo - newA;
        if (newA < 1 || newB < 1 || newC < 1) return updateCalc();
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (newA > 150 || newB > 150 || newC > 150) return updateCalc();
      displayProblem.innerHTML = `
      A is ${displayA}% of ${p.firstSentence}.</p>
      B is ${displayB}% of ${p.secondSentence}.</p>
      What is the ratio of A : B : C?
      `;
    }

    // PERCENTAGE: OVERLAPPING MODEL
    if (setting == 17) {
      normalDisplay();
      const stuff = ["pen", "pencils", "erasers", "stamps"][genNumbers(4)];
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(girlNames.length)];
      let personC = boyNames[genNumbers(boyNames.length)];
      while (personC == personA) {
        personC = boyNames[genNumbers(boyNames.length)];
      }
      const percentageA = (p.numeA / p.denoA) * 100;
      const totalValue = p.oneUnit * p.denoA;
      const personAValue = p.oneUnit * p.numeA;
      const personBValue = personAValue + p.difference;
      while (personBValue <= 0) {
        p.difference = [-1, 1][genNumbers(2)] * (genNumbers(50) + 10);
        personBValue + p.difference;
      }
      const personCValue = totalValue - personAValue - personBValue;

      displayProblem.innerHTML = `
  ${personA} took ${percentageA}% of the ${stuff}.</br>
  ${personB} took ${Math.abs(p.difference)} ${
        p.difference > 0 ? "more" : "less"
      } ${stuff} than ${personA}.</br>
  ${personC} took the remaining ${personCValue} ${stuff}.</br>
  `;
      if (p.question == "A")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How many ${stuff} did ${personA} take?`
        );
      if (p.question == "B")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How many ${stuff} did ${personB} take?`
        );
      if (p.question == "total")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How many ${stuff} were there at first?`
        );
    }

    // PERCENTAGE: GST AND SERVICE CHARGE
    if (setting == 18) {
      normalDisplay();
      if (p.optionOne == "simple gst") {
        displayProblem.innerHTML = `
      Person ${
        p.person
      } wanted to buy something which cost $${p.value.toLocaleString(
          "en-US"
        )}.</p>
      He has to also pay a GST of ${p.gst}%.</p>
      `;
      }
      if (p.optionTwo == "gst") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How much is the cost of GST?"
        );
      }
      if (p.optionTwo == "cost") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How much did he have to pay in the end?"
        );
      }
      if (p.optionOne == "service") {
        // const serviceCharge = (p.value / 100) * 10;
        // if (serviceCharge.toString().split(".")[1] > 2) return updateCalc();
        // const gst = (serviceCharge / 100) * p.gst;
        // if (gst.toString().split(".")[1] > 2) return updateCalc();
        // const bill = p.value + serviceCharge + gst;
        const furtherIncrease = (110 / 100) * 108;
        console.log(accDecimal(furtherIncrease));
        p.value = genNumbers(89) + 10;
        const bill = p.value * furtherIncrease;
        // p.value = bill / furtherIncrease;
        if (bill.toString().split(".")[1].length > 2) return updateCalc();
        displayProblem.innerHTML = `
        Person ${p.person} hosted a party at a ${
          genNumbers(2) == 0 ? "restaurant" : "cafe"
        }.</p>
        There was a 10% service charge,</p>
        and GST of ${p.gst}%.</p>
        The final bill was $${bill.toFixed(2)}.</p>
        How much was cost of the sub-total?</p>
        `;
      }
      if (p.optionOne == "discount gst") {
        if (p.optionThree == "final cost") {
          displayProblem.innerHTML = `
        Person ${
          p.person
        } wanted to buy something which cost $${p.value.toLocaleString(
            "en-US"
          )}.</p>
        He was given a ${p.discount}% discount,</p>
        and has to pay ${p.gst}% GST.</p>
        What was the final cost?</p>
        <i>Round off your answer to 2 decimal places if needed</i>`;
        }
        if (p.optionThree == "initial cost") {
          const percFinal = ((100 - p.discount) / 100) * (100 + p.gst);
          const bill = ((genNumbers(89) + 10) / 100) * percFinal;
          console.log(bill.toString().split(".")[1].length > 2);
          if (bill.toString().split(".")[1].length > 2) return updateCalc();
          p.value = bill / (percFinal / 100);
          displayProblem.innerHTML = `
        Person ${p.person} bought something.</p>
        He was given a ${p.discount}% discount,</p>
        and has to pay ${p.gst}% GST.</p>
        The final cost was $${bill.toLocaleString("en-US")}.</p>
        How much did the item cost at first?
        `;
        }
      }
    }

    // PERCENTAGE: IDENTICAL EFFECT
    if (setting == 19) {
      normalDisplay();
      const person = [...boyNames, ...girlNames][
        genNumbers(boyNames.length + girlNames.length)
      ];
      let gender = undefined;
      boyNames.includes(person) ? (gender = "his") : (gender = "her");
      let genderB = undefined;
      boyNames.includes(person) ? (genderB = "he") : (genderB = "she");
      console.log(person);
      const oldSave = (p.salary / 100) * p.saves;
      const newSave = accDecimal(
        (((p.salary / 100) * p.saves) / 100) * (100 + p.change)
      );
      if (newSave.toString().split(".")[1]) {
        if (newSave.toString().split(".")[1].length > 2) return updateCalc();
      }
      const changeSaving = newSave - oldSave;
      displayProblem.innerHTML = `
      ${person} saves ${p.saves}% of ${gender} salary.</br>
      If ${gender} salary ${
        p.change > 0 ? "increase" : "decrease"
      } by ${Math.abs(accDecimal(p.change))}%</br>
      ${
        genNumbers(2) == 0
          ? `The amount ${genderB} saves would become $${newSave}.`
          : `Thea amount ${genderB} saves would ${
              p.change > 0 ? "increase" : "decrease"
            } by $${Math.abs(accDecimal(changeSaving))}.`
      }
      </br>
      What is ${gender} salary?

      `;
    }
    //AVERAGE: EXTERNAL CHANGE
    if (setting == 20) {
      normalDisplay();
      if (p.changeQuantity == 0) return updateCalc();
      p.changeQuantity > 0 ? (p.situation = "joined") : (p.situation = "left");
      const oldTotal = p.oldQuantity * p.oldAverage;
      // const newTotal = (p.oldQuantity + p.changeQuantity) * p.newAverage;
      const newTotal = oldTotal + p.changeQuantity * p.average;
      if (p.oldQuantity + p.changeQuantity == 0) return updateCalc();
      const newAverage = newTotal / (p.oldQuantity + p.changeQuantity);

      if (newAverage <= 0) return updateCalc();
      if (newAverage % 1 != 0) {
        if (newAverage.toString().split(".")[1] > 3) return updateCalc();
      }

      if (p.average == newAverage || p.oldAverage == newAverage) {
        console.log("Same average");
        return updateCalc();
      }
      displayProblem.innerHTML = `
      A group's average at first was ${p.oldAverage}.</p>
      After ${Math.abs(p.changeQuantity)} ${
        p.changeQuantity == 1 ? "student" : "students "
      } ${p.situation}, ${
        p.changeQuantity == 1 ? "whose" : "their"
      } average is ${p.average}.</p>
      The average became ${newAverage}.</p>
      How many students were there ${p.question}?
      `;
    }

    //AVERAGE: CONSECUTIVE DAYS
    if (setting == 21) {
      normalDisplay();
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      // if 5 days.. Then find the total of 1 -- 4 which is 5 x 4 /2.
      console.log(p.dayOne);
      if (p.days % 2 == 0) p.days += 1;
      p.chosen = genNumbers(p.days - 1) + 1;
      const triangleNum = (p.days * (p.days - 1)) / 2;
      p.total = p.dayOne * p.days + triangleNum * p.increase;
      console.log(triangleNum);
      if (p.chosen == Math.ceil(p.days / 2)) {
        p.chosen += 1;
      }
      const gender = ["he", "she"][genNumbers(2)];
      let obj = "aeroplane";
      if (gender == "she") obj = "heart";
      displayProblem.innerHTML = `
      Someone made paper ${obj} for ${p.days} days.</p>
      Everyday ${gender} would make ${p.increase} more than the previous day.</p>
      A total of ${p.total} paper ${obj}s were made.</p>
      How many ${obj}s were made on day ${p.chosen}?
      `;
    }
    //RATIO: MANIPULATION OF UNITS WITH VALUE
    if (setting == 22) {
      normalDisplay();
      const multi = genNumbers(50) + 50;
      p.total = (p.unitA + p.unitB) * multi;
      let unitSentence;
      let valueSentence;
      if (p.situation == "A") {
        let tempA = p.unitA;
        let tempSituationA = p.situationA;
        [tempA, tempSituationA] = simplify(tempA, tempSituationA);
        let changeUnit;
        p.situationA < 0
          ? (changeUnit = "decreased")
          : (changeUnit = "increased");
        unitSentence = `A ${changeUnit} by ${Math.abs(
          tempSituationA
        )}/${tempA}.`;
        let changeValue;
        p.valueB < 0
          ? (changeValue = "decreased")
          : (changeValue = "increased");
        valueSentence = `B ${changeValue} by ${Math.abs(p.valueB)}.`;

        const valueAEnd = multi * (p.unitA + p.situationA);
        const valueBEnd = multi * p.unitB + p.valueB;
        p.end = valueAEnd + valueBEnd;
        //CHANGE UNIT INTO SIMPLIFIEST FORM.
        // [p.unitA, p.situationA] = simplify(p.unitA, p.situationA);
      }
      if (p.situation == "B") {
        let tempB = p.unitB;
        let tempSituationB = p.situationB;
        [tempB, tempSituationB] = simplify(tempB, tempSituationB);
        let changeUnit;
        p.situationB < 0
          ? (changeUnit = "decreased")
          : (changeUnit = "increased");
        unitSentence = `B ${changeUnit} by ${Math.abs(
          tempSituationB
        )}/${tempB}.`;
        let changeValue;
        p.valueA < 0
          ? (changeValue = "decreased")
          : (changeValue = "increased");
        valueSentence = `A ${changeValue} by ${Math.abs(p.valueA)}.`;

        const valueBEnd = multi * (p.unitB + p.situationB);
        const valueAEnd = multi * p.unitA + p.valueA;
        p.end = valueAEnd + valueBEnd;
        //CHANGE UNIT INTO SIMPLIFIEST FORM.
        // [p.unitB, p.situationB] = simplify(p.unitB, p.situationB);
      }
      if (p.end <= 0) {
        console.log("Negative end");
        return updateCalc();
      }
      [p.unitA, p.unitB] = simplify(p.unitA, p.unitB);
      displayProblem.innerHTML = `
      A and B's ratios at first were ${p.unitA} : ${p.unitB}.</br>
      ${unitSentence}</br>
      ${valueSentence}</br>
      The total in the end is ${p.end}.</br>
      What was the total at first?
      `;
    }
    // BOTTOM OF CALFIVEB
  }

  // DISPLAY
  if (level == "calSix") {
    calculatorSymbol.classList.remove("hidden");

    if (setting == 1) {
      normalDisplay();
      const person = ["John", "Emma", "Javen", "Vamika", "Matthias", "Isaac"][
        genNumbers(6)
      ];
      [p.numerator, p.denominator] = simplify(p.numerator, p.denominator);
      [p.numeratorTwo, p.denominatorTwo] = simplify(
        p.numeratorTwo,
        p.denominatorTwo
      );
      if (p.numeratorTwo == p.denominatorTwo) p.denominatorTwo += 1;
      if (p.type == "whole") {
        p.numerator = 0;
        p.denominator = 0;
        if ((p.whole * p.denominatorTwo) % p.numeratorTwo == 0) {
          console.log("No remainders");
          return updateCalc();
        }

        displayProblem.innerHTML = `
        ${person} has ${p.whole} m of cloth at first.</p>
        ${p.numeratorTwo}/${p.denominatorTwo} m is needed to make a shirt.</p>
        The greatest number of shirts were made.</p>
        `;
      }

      if (p.type == "simple fractions") {
        p.whole = 0;
        const setOne = p.numerator / p.denominator;
        const setTwo = p.numeratorTwo / p.denominatorTwo;
        if (setTwo >= setOne) {
          console.log("Numbers are too small");
          return updateCalc();
        }
        displayProblem.innerHTML = `
        ${person} has ${p.numerator}/${p.denominator} m of cloth at first.</p>
        ${p.numeratorTwo}/${p.denominatorTwo} m is needed to make a shirt.</p>
        The greatest number of shirts were made.</p>
        `;
      }
      if (p.type == "mixed fractions") {
        const numeTotal = p.whole * p.denominator + p.numerator;
        if (
          (numeTotal / p.denominator) % (p.numeratorTwo / p.denominatorTwo) ==
          0
        )
          return updateCalc();
        displayProblem.innerHTML = `
        ${person} has ${p.whole} ${p.numerator}/${p.denominator} m of cloth at first.</p>
        ${p.numeratorTwo}/${p.denominatorTwo} m is needed to make a shirt.</p>
        The greatest number of shirts were made.</p>
        `;
      }

      if (p.question == "quotient") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How many shirts were made?"
        );
      }
      if (p.question == "remainder") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How much cloth was left?"
        );
      }
    }
    // CIRCLES
    if (setting == 2) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, 400, 275);
      drawingDisplay();
      //length: 400px breadth: 275px
      const canvasHeight = p.radius * 3 + 80;
      canvas.setAttribute("height", canvasHeight);
      // canvas.setAttribute("width", "300px");
      const centerLength = 400 / 2;
      const centerBreadth = p.radius + 50;
      if (p.type == "area") {
        if (p.shapeArea == "quadrant") {
          drawThis.quadrant(
            centerLength,
            centerBreadth,
            p.radius,
            p.type,
            p.rotate
          );
        }
        if (p.shapeArea == "semicircle") {
          drawThis.semicircle(
            centerLength,
            centerBreadth,
            p.radius,
            p.type,
            p.rotate
          );
        }
        if (p.shapeArea == "segment") {
          drawThis.segment(
            centerLength,
            centerBreadth,
            p.radius,
            p.type,
            p.rotate
          );
        }
        if (p.shapeArea == "sharkfin") {
          drawThis.sharkfin(
            centerLength,
            centerBreadth,
            p.radius,
            p.type,
            p.rotate
          );
        }
      }
      if (p.type == "perimeter") {
        if (p.shapePerimeter == "quadrant") {
          drawThis.quadrant(
            centerLength,
            centerBreadth,
            p.radius,
            p.type,
            p.rotate
          );
        }
        if (p.shapePerimeter == "semicircle") {
          drawThis.semicircle(
            centerLength,
            centerBreadth,
            p.radius,
            p.type,
            p.rotate
          );
        }
        if (p.shapePerimeter == "threeQuarterCircle") {
          p.radius = (genNumbers(3) + 5) * 10;
          p.radius = 70;
          drawThis.threeQuarterCircle(
            centerLength,
            centerBreadth,
            p.radius,
            p.type,
            p.rotate
          );
        }
      }
    }
    //CIRCLES: INNER SQUARE
    if (setting == 3) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, 400, 275);
      drawingDisplay();
      ctx.save();
      let y = 40;
      const radius = p.radius * 10;
      adjustCanvasBreadth(y, y + p.radius * 10 * 2 + 50 + 50);
      // if (p.radius % 7 == 0) p.pi = "22/7";
      if (p.given == "radius") {
        y = fillTextSplit(
          `Given that the radius of the circle is ${p.radius} cm.\nWhat is the area of the square?`
        );
      }
      if (p.given == "square") {
        const square = 2 * p.radius * p.radius;
        y = fillTextSplit(
          `The area of the square is ${square} cm.\nWhat is the radius of the circle?\n`
        );
      }

      ctx.translate(0, y);

      //DRAW CENTER
      ctx.beginPath();
      ctx.arc(400 / 2, radius + 20, 2, 0, 2 * Math.PI);
      ctx.fill();

      //DRAW CIRCLE

      ctx.beginPath();
      ctx.arc(400 / 2, radius + 20, radius, 0, 2 * Math.PI);
      ctx.stroke();

      //DRAW SQUARE
      ctx.save();
      ctx.beginPath();
      ctx.translate(400 / 2, radius + 20);
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.moveTo(-radius, 0);
      ctx.lineTo(0, -radius);
      ctx.lineTo(radius, 0);
      ctx.lineTo(0, radius);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
    }

    if (setting == 4) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, 400, 275);
      drawingDisplay();
      ctx.save();
      let x = 200;
      let y = 137.5;
      ctx.font = "1em serif";
      if (p.rollType == "triangle") {
        ctx.fillText(`What is the area of the isosceles Triangle?`, 20, 20);
      }
      if (p.rollType == "radius") {
        // ctx.fillText(`What is the area of the Circle?`, 20, 20);
        fillTextSplit("What is the area of the circle?\nπ = 3.14");
      }
      if (p.rollType == "angle") {
        ctx.fillText(`Find ∠${p.rollAngle}.`, 20, 20);
      }
      if (p.rollType == "square") {
        ctx.fillText(`Find the radius of the circle.`, 20, 20);
      }
      if (p.rollType == "square2") {
        ctx.fillText(`Find the area of the square.`, 20, 20);
      }

      if (p.rollType == "triangle") {
        ctx.translate(200, 137.5);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, p.triangleSide);
        ctx.lineTo(p.triangleSide, 0);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, p.triangleSide + 5);
        ctx.lineTo(p.triangleSide + 5, 0);
        ctx.stroke();

        ctx.fillText(
          `${p.triangleSide}`,
          (p.triangleSide + 5) / 2 + 10,
          (p.triangleSide + 5) / 2 + 10
        );
        ctx.beginPath();
        ctx.moveTo(p.triangleSide, 0);
        ctx.lineTo(p.triangleSide + 5, 0);
        ctx.lineTo(p.triangleSide + 5, 5);
        ctx.stroke();

        ctx.save();
        ctx.translate(0, p.triangleSide / 2);
        ctx.beginPath();
        ctx.moveTo(-5, 0);
        ctx.lineTo(5, 0);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.translate(p.triangleSide / 2, 0);
        ctx.beginPath();
        ctx.moveTo(0, -5);
        ctx.lineTo(0, 5);
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.moveTo(0, p.triangleSide);
        ctx.lineTo(0, p.triangleSide + 5);
        ctx.lineTo(0 + 5, p.triangleSide + 5);
        ctx.stroke();
      }

      if (p.rollType == "radius") {
        ctx.translate(x, y);

        let squareSide = Math.sqrt((1 / 2) * p.radius * p.radius);
        p.squareSideD = Math.floor(squareSide);
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(0, 0, squareSide, -squareSide);
        ctx.stroke();

        // diagonal line
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0, -squareSide);
        ctx.lineTo(squareSide, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(3, -squareSide + 6);
        ctx.lineTo(0, -squareSide);
        ctx.lineTo(6, -squareSide + 3);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(squareSide - 3, -6);
        ctx.lineTo(squareSide, 0);
        ctx.lineTo(squareSide - 6, -3);
        ctx.stroke();

        ctx.fillText(
          `${p.squareSideD}`,
          squareSide / 2 - 20,
          -squareSide / 2 + 10
        );
        ctx.restore();
      }

      if (p.rollType == "angle") {
        // if (p.rotation == p.rotation2){
        //   p.rotation -= 30
        // }
        // if (p.rotation > p.rotation2){
        //   [p.rotation, p.rotation2] = [p.rotation2, p.rotation]
        // }
        // p.netRotation = p.rotation2-p.rotation

        console.log(p.rotation2);
        p.angleOther = (180 - p.rotation2) / 2;
        ctx.translate(x, y);
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.radius, 0);
        ctx.stroke();

        ctx.save();
        ctx.rotate((p.rotation2 * Math.PI) / 180);
        ctx.lineTo(p.radius, 0);
        ctx.restore();
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, (p.rotation2 * Math.PI) / 180);
        ctx.stroke();
        if (p.rollAngle == "a") {
          ctx.fillText(`${p.rotation2}°`, 10, 12);
        }
        if (p.rollAngle == "b") {
          ctx.fillText(`b`, 10, 12);
        }

        ctx.save();
        ctx.translate(p.radius, 0);
        ctx.beginPath();
        ctx.arc(0, 0, 10, ((180 - p.angleOther) * Math.PI) / 180, 1 * Math.PI);
        ctx.stroke();
        if (p.rollAngle == "a") {
          ctx.fillText(`a`, -20, 10);
        }
        if (p.rollAngle == "b") {
          if (p.angleOther % 1 != 0) {
            ctx.fillText(`${p.angleOther}°`, 1, 3);
          } else {
            ctx.fillText(`${p.angleOther}°`, -35, 11);
          }
        }
        ctx.restore();
      }
      if (p.rollType == "square") {
        let squareSide = Math.sqrt((1 / 2) * p.radius * p.radius);
        ctx.fillText(
          `Area of the square is ${
            (((p.radius / 10) * p.radius) / 10) * 2
          }cm2.`,
          20,
          40
        );
        ctx.translate(x, y);
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.rect(-squareSide, squareSide, squareSide * 2, -squareSide * 2);
        ctx.stroke();

        ctx.save();
        ctx.rotate(((genNumbers(6) - 2) * 45 * Math.PI) / 180);
        drawHorizontalLine(0, 0, p.radius, 0);
        ctx.fillText(`?`, p.radius / 2, 5);
        ctx.restore();
      }
      if (p.rollType == "square2") {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.beginPath();
        ctx.arc(0, 0, 1, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(-p.radius2, -p.radius2, p.radius2 * 2, p.radius2 * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.radius2, p.radius2);
        ctx.stroke();

        // arrow head
        ctx.beginPath();
        ctx.moveTo(10, 3);
        ctx.lineTo(0, 0);
        ctx.lineTo(3, 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(p.radius2 - 11, p.radius2 - 6);
        ctx.lineTo(p.radius2, p.radius2);
        ctx.lineTo(p.radius2 - 6, p.radius2 - 11);
        ctx.stroke();

        ctx.fillText(`${p.radius2 / 20} cm`, p.radius2 / 2, p.radius2 / 2);

        ctx.restore();
      }

      ctx.restore();
    }
    //SPEED: AVERAGE SPEED OF WHOLE JOURNEY
    if (setting == 5) {
      normalDisplay();
      if (p.roll == "A") {
        displayProblem.innerHTML = `
        Someone moved from</br>
        A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB}${p.timeUnits},</p>
        then
        B to C at ${p.speedC} units/${p.timeUnits} for ${p.timeC}${p.timeUnits}.</p>
        Whats the average speed of the whole journey?
  
        `;
      }
      if (p.roll == "B") {
        p.speedA = Math.ceil(
          (p.speedB * p.timeB + p.speedC * p.timeC) / (p.timeB + p.timeC)
        );
        displayProblem.innerHTML = `
        Someone moved from</br>
        A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB} ${p.timeUnits},
        then from B to C in ${p.timeC} ${p.timeUnits}.</p>
        ${p.gender} travelled at ${p.speedA} units/${p.timeUnits} for the whole journey.</p>
        At what speed did ${p.gender} travel between B to C?
  
        `;
      }
      if (p.roll == "C") {
        p.speedA = Math.ceil(
          (p.speedB * p.timeB + p.speedC * p.timeC) / (p.timeB + p.timeC)
        );
        p.timeA = p.timeB + p.timeC;
        displayProblem.innerHTML = `
        Someone moved from</p>
        A to B at ${p.speedB} units/${p.timeUnits} for ${p.timeB} ${p.timeUnits},
        then from B to C in ${p.speedC} units/${p.timeUnits}.</p>
        ${p.gender} travelled at ${p.speedA} units/${p.timeUnits} for ${p.timeA} ${p.timeUnits} the whole journey.</p>
        At what long did ${p.gender} take to travel between B to C?
  
        `;
      }
      displayProblem.insertAdjacentHTML(
        "beforeend",
        "<p><i>*Leave your answer in mixed fraction if needed.</i></p>"
      );
    }
    // SPEED: MOVING APART
    if (setting == 6) {
      normalDisplay();
      const position = genNumbers(3);
      p.distance = p.speedA * p.time + p.speedB * p.time;
      const unitTime = ["sec", "min", "h"][position];
      const unitTimeLong = ["seconds", "minutes", "hours"][position];
      // FIND DISTANCE
      if (p.version == "A") {
        displayProblem.innerHTML = `
        A and B started at the same point and moved away from each other.</p>
        A moves at ${p.speedA} units/${unitTime}.</p>
        B moves at ${p.speedB} units/${unitTime}.</p>
        Both moved for ${p.time} ${unitTimeLong}.</p>
        How far did apart are they?
        `;
      }
      // FIND TIME
      if (p.version == "B") {
        displayProblem.innerHTML = `
      A and B started at the same point and moved away from each other.</p>
      A moves at ${p.speedA} units/${unitTime}.</p>
      B moves at ${p.speedB} units/${unitTime}.</p>
      Both travelled a total distance of ${p.distance} units.</p>
      How long did they travel for?
      `;
      }
      // FINDING B'S SPEED
      if (p.version == "C") {
        displayProblem.innerHTML = `
    A and B started at the same point and moved away from each other.</p>
    A moves at ${p.speedA} units/${unitTime}.</p>
    Both travelled a total distance of ${p.distance} units in ${p.time} ${unitTimeLong}.</p>
    What was B's speed?
    `;
      }
      if (p.version == "D") {
        displayProblem.innerHTML = `
    A and B started at the same point and moved away from each other.</p>
    B moves at ${p.speedB} units/${unitTime}.</p>
    Both travelled a total distance of ${p.distance} units in ${p.time} ${unitTimeLong}.</p>
    What was A's speed?
    `;
      }
      if (p.version == "E") {
        const diffSpeed = p.speedA - p.speedB;
        if (p.speedA == p.speedB) return updateCalc();
        const comparison = p.speedA > p.speedB ? "faster" : "slower";
        displayProblem.innerHTML = `
    A and B started at the same point and moved away from each other.</p>
    A moves at ${Math.abs(
      diffSpeed
    )} units/${unitTime} ${comparison} than B.</p>
    Both travelled a total distance of ${p.distance} units in ${
          p.time
        } ${unitTimeLong}.</p>
    `;
        if (p.which == "A")
          displayProblem.insertAdjacentHTML("beforeend", "What is A's speed?");
        if (p.which == "B")
          displayProblem.insertAdjacentHTML("beforeend", "What is B's speed?");
      }
      //   if (p.which == "A")
      //   displayProblem.insertAdjacentHTML("beforeend", "What is A's speed?");
      // if (p.which == "B")
      //   displayProblem.insertAdjacentHTML("beforeend", "What is B's speed?");
    }

    //SPEED: DIFFERENCE IN SPEED (MID)
    if (setting == 7) {
      normalDisplay();
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(girlNames.length)];
      const diffDistance = (p.diffSpeed * p.time) / 60 / 2;
      const str = diffDistance.toString().split(".")[1];
      if (str) {
        if (str.length > 2) {
          return updateCalc();
        }
      }
      p.speedB = p.speedA + p.diffSpeed;
      //MIDDLE CLUE
      let middleClue;
      if (p.type == "A") {
        middleClue = `${personB} met ${personA} ${Math.abs(
          diffDistance
        )} km from Town M.`;
      }
      if (p.type == "B") {
        if (p.speedA > p.speedB) {
          middleClue = `${personA} travelled ${Math.abs(
            diffDistance * 2
          )} km more than ${personB} before they met along the way.`;
        } else {
          middleClue = `${personB} travelled ${Math.abs(
            diffDistance * 2
          )} km more than ${personA} before they met along the way.`;
        }
      }
      if (p.type == "C") {
        middleClue = `${personB} made a U-turn at Town B and met ${personA} ${Math.abs(
          diffDistance
        )} km from Town B.`;
      }

      //MAIN PASSAGE
      if (p.type == "A" || p.typr == "B") {
        displayProblem.innerHTML = `
        Town M is between Town A and Town B.</br>
        ${personA} set off from Town A towards Town B at ${p.speedA} km/h and vice versa for ${personB} at ${p.speedB} km/h.</br>
        ${middleClue}</br>
        `;
      }
      if (p.type == "C") {
        displayProblem.innerHTML = `
        ${personA} set off from Town A towards Town B at ${p.speedA} km/h and vice versa for ${personB} at ${p.speedB} km/h.</br>
        ${middleClue}</br>
        `;
      }

      //QUESTION
      if (p.question == "A")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `
How far has ${personA}  travelled before meeting ${personB}?
`
        );
      if (p.question == "B")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `
How far has ${personB} travelled before meeting ${personA}?
`
        );
      if (p.question == "total")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `
How far is apart is Town A and Town B?
`
        );
    }

    // SPEED: SURROGATE
    if (setting == 8) {
      normalDisplay();
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(girlNames.length)];
      p.speedB = p.speedA - p.diffSpeed;
      const distance = (p.speedA * p.timeA) / 60;
      const distanceB = (p.speedB * p.timeA) / 60;
      const diffDistance = distance - distanceB;
      const timeB = (distance / p.speedB) * 60;
      const diffTime = timeB - p.timeA;
      if (diffTime % 1 != 0 || diffTime == 60) {
        return updateCalc();
      }

      displayProblem.innerHTML = `
      The distance between Town A and Town B is ${distance} km.</br>
      ${personA} and ${personB} left Town A to Town B at the same time.</br>
      After ${personA} reached Town B, ${personB} took another ${diffTime} mins to travel the remaining ${diffDistance} km.</br>
      What is ${p.question == "A" ? personA : personB}'s speed?
      `;
    }

    // PIECHART
    if (setting == 9) {
      drawingDisplay();
      let types = ["fraction", "decimal", "ratio", "percentage", "angle"];
      const index = types.indexOf(p.choice);
      types.splice(index, 1);
      const clue = types[genNumbers(4)];
      const check = pieChart(
        p.fractions,
        p.decimals,
        p.ratio,
        p.percentage,
        p.angles,
        p.choice,
        clue
      );
      if (check == "Error") {
        p.error++;
        if (p.error < 10) {
          return updateCalc();
        } else {
          skipGlobalUpdateProblem = 0;
          console.log("TOO MANY RESETS!");
          updateProblems();
        }
      }
    }

    // BOTTOM OF CALSIX
  }
  // DISPLAY
  if (level == "calSixb") {
    calculatorSymbol.classList.remove("hidden");

    //SPEED: MEET UP
    if (setting == 1) {
      p.distance = p.speedA * p.timeA + p.speedB * p.timeB;
      // normal
      if (p.roll == "A") {
        while (p.distance % (p.speedA + p.speedB) != 0) {
          p.distance += 1;
        }
        displayProblem.innerHTML = `
        The distance between A and B is ${p.distance} units. </p>
        A moves towards B at ${p.speedA} units/sec. </p>
        B moves towards A at ${p.speedB} units/sec.  </p>
        How long did it take both to meet?
  
        `;
      }
      if (p.roll == "B") {
        // Natural
        let remainingDistance = p.distance - p.timeA * p.speedA;
        while (remainingDistance % (p.speedA + p.speedB) != 0) {
          p.distance += 1;
          remainingDistance = p.distance - p.timeA * p.speedA;
        }
        displayProblem.innerHTML = `
        The distance between A and B is ${p.distance} units. </p>
        A travels towards B for ${p.speedA * p.timeA} units at ${
          p.speedA
        } units/sec first. </p>
        B <u>then</u> sets off towards A at ${p.speedB} units/sec.  </p>
        How long did it take both to meet from the start?
  
        `;
      }
      if (p.roll == "C") {
        // Head Start
        let remainingDistance = p.distance - p.timeA * p.speedA;
        while (remainingDistance % (p.speedA + p.speedB) != 0) {
          p.distance += 1;
          remainingDistance = p.distance - p.timeA * p.speedA;
        }
        displayProblem.innerHTML = `
        The distance between A and B is ${p.distance} units. </p>
        A sets off first towards B at ${p.speedA} units/sec for ${p.timeA}secs. </p>
        B <u>then</u> sets off towards A at ${p.speedB} units/sec.  </p>
        How long did it take both to meet from the start?
  
        `;
      }
      if (p.roll == "D") {
        // Finding Distance

        displayProblem.innerHTML = `
         A and B are moving towards each other at the same time. </p>
         A moves towards B at ${p.speedA} units/sec. </p>
         B moves towards A at ${p.speedB} units/sec.  </p>
        It took ${p.timeA + p.timeB} secs to meet up.</p>
        How far apart are they?
  
        `;
      }
    }
    //SPEED: CATCH UP
    if (setting == 2) {
      if (p.speedA == p.speedB) p.speedB += 1;
      p.gap = genNumbers(20) + 10;
      p.diffSpeed = p.speedB - p.speedA;
      if (p.roll == "A") {
        while (p.gap % p.diffSpeed != 0) {
          console.log(`Gap +1, ${p.speedA}, ${p.speedB}`);
          p.gap += 1;
        }
        displayProblem.innerHTML = `
        A is ${p.gap} units ahead of B.</p>
        A travels at a speed of ${p.speedA} units/s.</p>
        B travels at a speed of ${p.speedB} units/s.</p>
        How long does it take B to catch up to A?</p>
        
        `;
      }

      if (p.roll == "B") {
        p.gap = p.timeA * p.speedA;
        while (p.gap % p.diffSpeed != 0) {
          p.timeA += 1;
          p.gap = p.timeA * p.speedA;
        }
        displayProblem.innerHTML = `
        A and B started from the same place and were headed in the same direction.</p>
        A left ${p.timeA} mins earlier travelling at ${p.speedA} units/min.</p>
        B then left and travelled at ${p.speedB} units/min.</p>
        How long did it take B to catch up to A?</p>
        `;
      }

      //NATURAL GAP
      if (p.roll == "C") {
        let catchUp = p.gap / (p.speedB - p.speedA);
        while (catchUp % p.diffSpeed != 0) {
          p.gap += 1;
          catchUp = p.gap / (p.speedB - p.speedA);
        }
        displayProblem.innerHTML = `
        A left earlier than B.</p>
        A moves at ${p.speedA} units/min.</p>
        B moves at ${p.speedB} units/min.</p>
        B took ${catchUp} mins to catch up.</p>
        How far ahead was A before B set off?
        
        `;
      }
      if (p.roll == "D") {
        while (p.gap % p.diffSpeed != 0) p.gap += 1;
        const catchUp = p.gap / p.diffSpeed;
        displayProblem.innerHTML = `
        A was ${p.gap} units ahead of B.</p>
        A moves at ${p.speedA} units/min.</p>
        B took ${catchUp} mins to catch up to A.</p>
        What was B's speed?</p>
        `;
      }
      if (p.roll == "E") {
        while (p.gap % p.diffSpeed != 0) p.gap += 1;
        const catchUp = p.gap / p.diffSpeed;
        displayProblem.innerHTML = `
        A was ${p.gap} units ahead of B.</p>
        B moves at ${p.speedB} units/min.</p>
        B took ${catchUp} mins to catch up to A.</p>
        What was A's speed?</p>
        `;
      }
    }

    // DOUBLE TRIANGLE
    if (setting == 3) {
      if (p.type == "normalSpeedToTime") {
        if (p.speedA == p.speedB) {
          p.speedB += 10;
        }
        [p.timeA, p.timeB] = simplify(p.speedB, p.speedA);
        p.differenceTime =
          Math.abs(p.timeA - p.timeB) * ((genNumbers(12 - 1) + 1) * 5);
        console.log(`A: ${p.speedA}, ${p.timeA}`);
        console.log(`B: ${p.speedB}, ${p.timeB}`);
        displayProblem.innerHTML = `
        Car A and Car B started at the same Town travelling to Town Z.</p>
        Car A travels at ${p.speedA} km/h.</p>
        Car B travels at ${p.speedB} km/h.</p>
        `;
        if (p.speedA > p.speedB) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `Car A reached town Z ${p.differenceTime} mins earlier than Car B.</p>`
          );
        } else {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `Car B reached town Z ${p.differenceTime} mins earlier than Car A.</p>`
          );
        }
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "What is the distance between the 2 towns?"
        );
      }
      if (p.type == "normalTimeToSpeed") {
        // console.log(p.speedA, p.speedB);
        if (p.timeA == p.timeB) {
          p.timeB += 10;
        }
        [p.speedA, p.speedB] = simplify(p.timeB, p.timeA);
        p.differenceSpeed =
          Math.abs(p.speedA - p.speedB) * ((genNumbers(5) + 1) * 5);
        console.log(`A: ${p.speedA}, ${p.timeA}`);
        console.log(`B: ${p.speedB}, ${p.timeB}`);
        displayProblem.innerHTML = `
        Car A and Car B started at the same Town travelling to Town Z.</p>
        Car A took ${p.timeA} mins.</p>
        Car B took ${p.timeB} mins.</p>
        `;
        if (p.speedA > p.speedB) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `Car A drove at ${p.differenceSpeed} km/h faster than Car B.</p>`
          );
        } else {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `Car B drove at ${p.differenceSpeed} km/h faster than Car A.</p>`
          );
        }
        let html = undefined;
        if (p.question == 1) {
          html = "What is the distance between the 2 towns?";
        }
        if (p.question == 2) {
          html = "What is Car A's speed?";
        }
        if (p.question == 3) {
          html = "What is Car B's speed?";
        }
        displayProblem.insertAdjacentHTML("beforeend", html);
      }
      if (p.type == "meet up") {
        // console.log(p.speedA, p.speedB);
        if (p.timeA == p.timeB) {
          p.timeB += 10;
        }
        [p.speedA, p.speedB] = simplify(p.timeB, p.timeA);
        p.differenceSpeed =
          Math.abs(p.speedA - p.speedB) * ((genNumbers(5) + 1) * 5);
        console.log(`A: ${p.speedA}, ${p.timeA}`);
        console.log(`B: ${p.speedB}, ${p.timeB}`);
        displayProblem.innerHTML = `
        Car A and Car B started at different Towns and moved towards each other.</p>
        Car A would take ${p.timeA} mins to reach the other Town.</p>
        Car B would take ${p.timeB} mins to reach the other Town.</p>
        How long did it take both Cars to meet?
        `;
      }
    }
    // VOLUME: GROUPING
    if (setting == 4) {
      [p.finalHeightUnitA, p.finalHeightUnitB] = simplify(
        p.finalHeightUnitA,
        p.finalHeightUnitB
      );
      const volumeA = p.lengthA * p.breadthA * p.groups * p.finalHeightUnitA;
      const volumeB = p.lengthB * p.breadthB * p.groups * p.finalHeightUnitB;
      const totalWater = volumeA + volumeB;
      const baseA = p.lengthA * p.breadthA;
      const baseB = p.lengthB * p.breadthB;
      const heightA = p.groups * p.finalHeightUnitA + p.addHeightA;
      const heightB = p.groups * p.finalHeightUnitB + p.addHeightB;
      const transfer = genNumbers(volumeB - 1000) + 1000;
      const volumeAFirst = volumeA + transfer;
      const volumeBFirst = volumeB - transfer;
      if (volumeAFirst < 0 || volumeBFirst < 0) {
        console.log("Volume went below zero");
        return updateCalc();
      }
      p.answer = transfer;
      let questionSentence = undefined;
      const transferText = volumeA > volumeB ? `A to B` : `B to A`;
      if (p.question == "transfer") {
        if (p.finalHeightUnitA == p.finalHeightUnitB) {
          questionSentence = `How much water must be poured from container ${transferText} for the height to be the same?</p>`;
        } else {
          questionSentence = `How much water must be poured so that the height of A to B is ${p.finalHeightUnitA}/${p.finalHeightUnitB}?`;
        }
      }
      if (p.question == "finalA") {
        if (p.finalHeightUnitA == p.finalHeightUnitB) {
          questionSentence = `
          Some water was transferred from ${transferText} for the height to be the same.</p>
          What is the water level of A in the end?`;
        } else {
          questionSentence = `
          Some water was transferred for the ratio of the height of A to B to become ${p.finalHeightUnitA} : ${p.finalHeightUnitB}.</p>
          What is the water level of A in the end?`;
        }
      }
      if (p.question == "finalB") {
        if (p.finalHeightUnitA == p.finalHeightUnitB) {
          questionSentence = `
          Some water was transferred from ${transferText} for the height to be the same.</p>
          What is the water level of B in the end?`;
        } else {
          questionSentence = `
          Some water was transferred for the ratio of the height of A to B to become ${p.finalHeightUnitA} : ${p.finalHeightUnitB}.</p>
          What is the water level of B in the end?`;
        }
      }

      displayProblem.innerHTML = `
      Container A has a dimension of ${p.lengthA} cm, ${p.breadthA} cm and ${heightA} cm,</p>
      and contains ${volumeAFirst} ml of water.</p>
      Container B has a dimension of ${p.lengthB} cm, ${p.breadthB} cm and ${heightB} cm,</p>
      and contains ${volumeBFirst} ml of water.</p>
      ${questionSentence}
      `;
    }
    // VOLUME: CATCH UP
    if (setting == 5) {
      const volumeAFirst = p.lengthA * p.breadthA * p.waterLevelA;
      const volumeBFirst = p.lengthB * p.breadthB * p.waterLevelB;
      const heightAPerMin = (p.tapA * 1000) / (p.lengthA * p.breadthA);
      const heightBPerMin = (p.tapB * 1000) / (p.lengthB * p.breadthB);
      if (heightAPerMin == heightBPerMin) {
        console.log("Same rate, nothing happens");
        return updateCalc();
      }
      if (
        (heightAPerMin < heightBPerMin && p.waterLevelA < p.waterLevelB) ||
        (heightBPerMin < heightAPerMin && p.waterLevelB < p.waterLevelA)
      ) {
        console.log("Impossible question");
        return updateCalc();
      }
      displayProblem.innerHTML = `
      Container A has a length and breadth of ${p.lengthA} cm and ${
        p.breadthA
      } cm, while containing ${volumeAFirst / 1000} ℓ of water.</p>
      Container B has a length and breadth of ${p.lengthB} cm and ${
        p.breadthB
      } cm, while containing ${volumeBFirst / 1000} ℓ of water.</p>
      Tap A fills container A at ${p.tapA} ℓ per min.</p>
      Tap B fills container B at ${p.tapB} ℓ per min.</p>
      
      `;

      if (p.question == "final height") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How long is require for both containers to be of the same height?"
        );
      }
      if (p.question == "finalWaterLevel") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "What is the water level when both containers have the same water level?"
        );
      }
      displayProblem.insertAdjacentHTML(
        "beforeend",
        "<p><i>Round your answer to 2 decimal place if needed.</i></p>"
      );
    }
    // GEOMETRY: REPEATED IDENTITY
    if (setting == 6) {
      drawingDisplay();
      let startYAxis = 135;
      const multiplier = 15;
      if (p.type == 1) {
        // console.log(startYAxis);
        const neededHeight = startYAxis + p.rectLength * multiplier + 30;
        console.log(neededHeight);
        if (neededHeight > 275) {
          canvas.setAttribute("height", neededHeight);
        } else {
          canvas.setAttribute("height", 275);
        }
        startYAxis = fillTextSplit(
          `The length and breadth of the rectangle is ${p.rectLength} cm and ${p.rectBreadth} cm.\nThe base of the triangle is ${p.triangleBase} cm.\nWhat is the difference between area of part X and part Y?`
        );
      }
      if (p.type == 2) {
        // console.log(startYAxis);
        const neededHeight = startYAxis + p.squareSides * multiplier + 30;
        console.log(neededHeight);
        if (neededHeight > 275) {
          canvas.setAttribute("height", neededHeight);
        } else {
          canvas.setAttribute("height", 275);
        }
        startYAxis = fillTextSplit(
          `The sides of the square is ${p.squareSides} cm.\nWhat is the difference between area of part A and part B?`
        );
      }
      if (p.type == 3) {
        // console.log(startYAxis);
        const neededHeight = startYAxis + p.squareSides * multiplier + 30;
        console.log(neededHeight);
        if (neededHeight > 275) {
          canvas.setAttribute("height", neededHeight);
        } else {
          canvas.setAttribute("height", 275);
        }
        startYAxis = fillTextSplit(
          `Both triangles have a height of ${p.squareSides} cm.\nOne has a base of ${p.triangleBase} cm.\n The other has a base of ${p.triangle2ndBase} cm.\nWhat is the difference between area of part A and part B?`
        );
      }
      if (p.type == 4) {
        // console.log(startYAxis);
        const neededHeight = startYAxis + p.squareSides * multiplier + 30;
        console.log(neededHeight);
        if (neededHeight > 275) {
          canvas.setAttribute("height", neededHeight);
        } else {
          canvas.setAttribute("height", 275);
        }
        startYAxis = fillTextSplit(
          `Both triangles have a height of ${p.squareSides} cm.\nOne has a base of ${p.triangleBase} cm.\n The other has a base of ${p.triangle2ndBase} cm.\nWhat is the difference between area of part P and part Q?`
        );
      }
      ctx.save(); //FIRST SAVE

      ctx.font = "1em serif";
      ctx.translate(20, startYAxis);
      if (p.type == 1) {
        ctx.beginPath();
        ctx.rect(0, 0, p.rectBreadth * multiplier, p.rectLength * multiplier);
        ctx.stroke();
        ctx.fillText("X", (p.rectBreadth * multiplier) / 2, 20);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.triangleBase * multiplier, p.rectLength * multiplier);
        ctx.lineTo(0, p.rectLength * multiplier);
        ctx.closePath();
        ctx.stroke();
        ctx.fillText(
          "Y",
          ((p.triangleBase + p.rectBreadth) / 2) * multiplier - 15,
          p.rectLength * multiplier - 15
        );
      }
      if (p.type == 2) {
        ctx.beginPath();
        ctx.rect(0, 0, p.squareSides * multiplier, p.squareSides * multiplier);
        ctx.stroke();
        ctx.fillText(
          "A",
          (p.squareSides * multiplier) / 2,
          (p.squareSides * multiplier) / 2
        );

        const triangleAway = p.squareSides + genNumbers(5) + 5;
        ctx.beginPath();
        ctx.moveTo(0, p.squareSides * multiplier);
        ctx.lineTo(p.squareSides * multiplier, p.squareSides * multiplier);
        ctx.lineTo(triangleAway * multiplier, 0);
        // ctx.lineTo(0, p.squareSides * multiplier);
        ctx.closePath();
        ctx.stroke();
        ctx.fillText(
          "B",
          p.squareSides * multiplier + 20,
          (p.squareSides * multiplier) / 2
        );

        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([1, 2]);
        ctx.moveTo(p.squareSides * multiplier, 0);
        ctx.lineTo(triangleAway * multiplier, 0);
        ctx.stroke();
        ctx.restore();
      }
      if (p.type == 3) {
        ctx.beginPath();
        // ctx.rect(0, 0, p.squareSides * multiplier, p.squareSides * multiplier);
        const triangleHeight = p.squareSides * multiplier;
        const triangle1stBase = p.triangleBase * multiplier;
        const triangle2ndBase = p.triangle2ndBase * multiplier;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(triangle1stBase, triangleHeight);
        ctx.lineTo(0, triangleHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fillText(
          "A",
          triangle1stBase / 2 - 30,
          (p.squareSides * multiplier) / 2
        );

        const triangleAway = (p.triangleBase + genNumbers(5) + 5) * multiplier;
        ctx.beginPath();
        ctx.moveTo(0, triangleHeight);
        ctx.lineTo(triangle2ndBase, triangleHeight);
        ctx.lineTo(triangle1stBase + triangleAway, 0);
        // ctx.lineTo(0, p.squareSides * multiplier);
        ctx.closePath();
        ctx.stroke();
        ctx.fillText(
          "B",
          (triangle2ndBase + triangle1stBase + triangleAway) / 2 - 20,
          (p.squareSides * multiplier) / 2
        );

        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([1, 2]);
        ctx.moveTo(0, 0);
        ctx.lineTo(triangle1stBase + triangleAway, 0);
        ctx.stroke();
        ctx.restore();
      }

      if (p.type == 4) {
        ctx.beginPath();
        // ctx.rect(0, 0, p.squareSides * multiplier, p.squareSides * multiplier);
        const triangleHeight = p.squareSides * multiplier;
        const triangle1stBase = p.triangleBase * multiplier;
        const triangle2ndBase = p.triangle2ndBase * multiplier;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(triangle1stBase, triangleHeight);
        ctx.lineTo(0, triangleHeight);
        ctx.closePath();
        ctx.stroke();
        ctx.fillText("P", triangle1stBase / 2 - 10, triangleHeight - 10);

        // const triangleAway = (p.triangleBase + genNumbers(5) + 5) * multiplier;
        ctx.beginPath();
        ctx.moveTo(0, triangleHeight);
        ctx.lineTo(triangle2ndBase, 0);
        ctx.lineTo(0, 0);
        // ctx.lineTo(0, p.squareSides * multiplier);
        ctx.closePath();
        ctx.stroke();
        ctx.fillText("Q", triangle2ndBase / 2 - 10, 20);
      }
      ctx.restore(); // FIRST RESTORE
    }
    //GEOMETRY: MANIPULATION OF DIMENSION: OVERLAPPING AREA
    if (setting == 7) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, 400, 275);
      drawingDisplay();

      ctx.save(); //1st
      ctx.font = "1em serif";
      let y;
      if (p.type == 1) {
        y = fillTextSplit("Find the area of part A, B and C.");
      }

      // 1. DRAW FIRST RECTANGLE

      ctx.translate((400 - 240) / 2, y + 20);

      ctx.beginPath();
      ctx.rect(0, 0, 240, 180);
      ctx.stroke();

      // 2. DRAW FIRST TRIANGLE
      // const x1 = genNumbers(240)
      const y1 = genNumbers(70) + 50;
      ctx.beginPath();
      ctx.moveTo(240, 180);
      ctx.lineTo(0, 0);
      ctx.lineTo(240, y1);
      ctx.closePath();
      ctx.stroke();

      //QUADRILATERAL
      const triangleA = (1 / 2) * p.rectLength * p.rectBreadth;
      console.log(triangleA);
      p.quadrilateral = genNumbers(triangleA / 2 - 100) + 100;
      ctx.fillText(`${p.quadrilateral} cm2`, 240 / 2 + 15, 180 / 2 + 5);
      // 3. DRAW SECOND TRIANGLE
      const y2 = genNumbers(180 - y1) + y1;
      ctx.beginPath();
      ctx.moveTo(240, 0);
      ctx.lineTo(0, 180);
      ctx.lineTo(240, y1);
      ctx.closePath();
      ctx.stroke();

      //LABELS
      ctx.fillText(`${p.rectLength} cm`, 240 / 2, -10);
      ctx.fillText(`${p.rectBreadth} cm`, 240 + 5, 180 / 2);

      if (p.type == 1) {
        ctx.fillText(`A`, 240 / 2, +20);
        ctx.fillText(`B`, +30, 180 / 2);
        ctx.fillText(`C`, 240 / 2, 180 - 20);
      }
      ctx.restore(); //1st
    }
    //END OF CALSIXB
  }

  if (level == "heuOne") {
    while (p.numOne == p.numTwo) {
      p.numOne = genNumbers(9) + 1;
    }
    if (p.rollAB == "A") {
      console.log("heuOne " + "Type " + p.rollAB + " Var " + p.rollVar);

      if (p.numOne < p.numTwo) {
        [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
      }

      displayProblem.innerHTML = `
      ${p.rollAB} is ${p.numOne} ${p.roll[p.rollPosition][2]}.</br>
      A is ${p.numTwo} ${p.roll[p.rollPosition][2]} ${
        p.roll[p.rollPosition][p.rollVar]
      } than B.</br>
      What is B?
      `;
    }
    if (p.rollAB == "B") {
      console.log("heuOne " + "Type " + p.rollAB + " Var " + p.rollVar);

      if (p.numOne < p.numTwo) {
        [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
      }

      displayProblem.innerHTML = `
      ${p.rollAB} is ${p.numOne} ${p.roll[p.rollPosition][2]}.</br>
      A is ${p.numTwo} ${p.roll[p.rollPosition][2]} ${
        p.roll[p.rollPosition][p.rollVar]
      } than B.</br>
      What is A?
      `;
    }
  }
  // HEUTWO DISPLAY
  if (level == "heuTwo") {
    if (
      setting == 1 ||
      (setting == 9 && p.rollz == 1) ||
      (range == 1 && p.rollz == 1)
    ) {
      p.positionTwo = p.rollPositionTwoArr[genNumbers(3)];
      p.positionOne = p.rollPositionOneArr[genNumbers(3)];
      p.positionThree = p.rollPositionOneArr[genNumbers(3)];
      p.positionFour = p.rollPositionTwoArr[genNumbers(3)];

      while (
        p.positionThree == p.positionOne &&
        p.positionFour == p.positionTwo
      ) {
        p.positionThree = p.rollPositionOneArr[genNumbers(3)];
      }

      p.indexOne = p.rollPositionOneArr.indexOf(p.positionOne);
      p.indexTwo = p.rollPositionTwoArr.indexOf(p.positionTwo) + 3;
      p.indexThree = p.rollPositionOneArr.indexOf(p.positionThree);
      p.indexFour = p.rollPositionTwoArr.indexOf(p.positionFour) + 3;

      while (
        p.indexTwo - p.indexOne == p.indexFour - p.indexThree ||
        p.indexTwo - p.indexOne == 1 ||
        p.indexFour - p.indexThree == 1
      ) {
        p.positionTwo = p.rollPositionTwoArr[genNumbers(3)];
        p.positionOne = p.rollPositionOneArr[genNumbers(3)];
        p.positionThree = p.rollPositionOneArr[genNumbers(3)];
        p.positionFour = p.rollPositionTwoArr[genNumbers(3)];
        p.indexOne = p.rollPositionOneArr.indexOf(p.positionOne);
        p.indexTwo = p.rollPositionTwoArr.indexOf(p.positionTwo) + 3;
        p.indexThree = p.rollPositionOneArr.indexOf(p.positionThree);
        p.indexFour = p.rollPositionTwoArr.indexOf(p.positionFour) + 3;
      }

      p.intervals = p.indexTwo - p.indexOne;
      p.distance = p.intervals * p.rollDistance;
      displayProblem.innerHTML = `
      The distance between the ${p.positionOne} ${p.rollObject} and the ${p.positionTwo} ${p.rollObject} is ${p.distance} m. </br>
      What is the distance between the ${p.positionThree} and ${p.positionFour} ${p.rollObject}?
      `;
    }
    if (
      setting == 2 ||
      (setting == 9 && p.rollz == 2) ||
      (range == 1 && p.rollz == 2)
    ) {
      p.numOne = p.numTwo + (genNumbers(3) + 2) * 2;

      displayProblem.innerHTML = `
      ${p.objectOne} has ${p.numOne} sweets.</br>
      ${p.objectTwo} has ${p.numTwo} sweets.</br>
      How many sweets must ${p.objectOne} transfer to ${p.objectTwo} for them to be the same?
      `;
    }

    if (
      setting == 3 ||
      (setting == 9 && p.rollz == 3) ||
      (range == 1 && p.rollz == 3)
    ) {
      displayProblem.innerHTML = `
      ${p.objectOne} must give ${p.difference} to ${p.objectTwo} to be the same.</br>
      What is their difference at first?
      `;
    }
    //  WORKING DISPLAY HEUTWO
    if (
      setting == 4 ||
      (setting == 9 && p.rollz == 4) ||
      (range == 1 && p.rollz == 4)
    ) {
      if (p.version == 1) {
        let things = ["people", "objects"][genNumbers(2)];
        displayProblem.innerHTML = `
      ${p.objectOne} is in the ${p.positionOne} position.</p>
      ${p.objectTwo} is in the ${p.positionTwo} position.</p>
      How many ${things} are there between ${p.objectOne} and ${p.objectTwo}?`;
      }
      if (p.version == 2) {
        if (p.positionOne == "5th" && p.positionTwo == "6th")
          return updateCalc();
        let things = ["people", "objects"][genNumbers(2)];
        displayProblem.innerHTML = `
      ${p.objectOne} is in the ${p.positionOne} floor.</p>
      ${p.objectTwo} is in the ${p.positionTwo} floor.</p>
      How many floors are there between ${p.objectOne} and ${p.objectTwo}?`;
      }
      if (p.version == 3) {
        let things = ["people", "objects"][genNumbers(2)];
        displayProblem.innerHTML = `
        ${p.objectOne} is in the ${p.positionOne} position.</p>
        ${p.objectTwo} is behind ${p.objectOne}.</p>
        There are ${p.between} ${things} in between.</p>
        What is ${p.objectTwo}'s position?
        `;
      }
    }
  }
  // display
  if (level == "heuTwob") {
    if (
      setting == 1 ||
      (setting == 9 && p.rollz == 1) ||
      (range == 1 && p.rollz == 1)
    ) {
      while (p.numOne == p.numTwo) {
        p.numOne = genNumbers(9) + 1;
      }
      if (p.rollAB == "A") {
        if (p.numOne < p.numTwo) {
          [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
        }

        displayProblem.innerHTML = `
        ${p.rollAB} is ${p.numOne} ${p.rollx[p.rollPosition][2]}.</br>
        A is ${p.numTwo} ${p.rollx[p.rollPosition][2]} ${
          p.rollx[p.rollPosition][p.rollVar]
        } than B.</br>
        What is B?
        `;
      }
      if (p.rollAB == "B") {
        if (p.numOne < p.numTwo) {
          [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
        }

        displayProblem.innerHTML = `
        ${p.rollAB} is ${p.numOne} ${p.rollx[p.rollPosition][2]}.</br>
        A is ${p.numTwo} ${p.rollx[p.rollPosition][2]} ${
          p.rollx[p.rollPosition][p.rollVar]
        } than B.</br>
        What is A?
        `;
      }
    }

    if (setting == 2) {
      if (p.type == 1) {
        displayProblem.innerHTML = `
        A has ${p.numOne}.</br>
        B has ${p.numTwo}.</br>
        What is the total of A and B?
      `;
      }
      if (p.type == 2) {
        displayProblem.innerHTML = `
        Person A spent $${p.numOne} and has $${p.numTwo} left.</p>
        How much did he have at first?
        `;
      }
    }

    if (setting == 3) {
      p.numTotal = p.numOne + p.numTwo;
      if (p.type == 1) {
        displayProblem.innerHTML = `
        ${p.objectOne} and ${p.objectTwo} has a total of ${p.numTotal}.</br>
        ${
          p.rollChoice == 0
            ? `${p.objectOne} is ${p.numOne}`
            : `${p.objectTwo} is ${p.numTwo}`
        }.</br>
        What is ${p.rollChoice == 0 ? p.objectTwo : p.objectOne}?
      `;
      }
      if (p.type == 2) {
        displayProblem.innerHTML = `
        Person A had $${p.numTotal} at first.</br>
        `;
        if (p.rollChoice == 0) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `He spent $${p.numOne}</br>How much does he have left?`
          );
        }
        if (p.rollChoice == 1) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `He has $${p.numTwo} left after spending some money.</br>How much does he have spend?`
          );
        }
      }
    }

    if (
      setting == 4 ||
      (setting == 9 && p.rollz == 4) ||
      (range == 1 && p.rollz == 4)
    ) {
      while (p.numOne == p.numTwo) {
        p.numOne = genNumbers(400) + 100;
      }

      if (p.rollChoice2 == "A") {
        displayProblem.innerHTML = `
          ${p.objectOne} is ${p.numOne}.</br>
          ${p.objectTwo} is ${p.numTwo}.</br>
          What is the difference between ${p.objectOne} and ${p.objectTwo}?
        `;
      }

      if (p.rollChoice2 == "B") {
        p.numTotal = p.numOne + p.numTwo;
        displayProblem.innerHTML = `
          The total for ${p.objectOne} and ${p.objectTwo} is ${p.numTotal}.</br>
          ${
            p.rollChoice3 == 0
              ? `${p.objectOne} is ${p.numOne}`
              : `${p.objectTwo} is ${p.numTwo}`
          }.</br>
          How much ${p.numOne > p.numTwo ? "more" : "less"} is ${
          p.objectOne
        } than ${p.objectTwo}?
        `;
      }
    }

    if (
      setting == 5 ||
      (setting == 9 && p.rollz == 5) ||
      (range == 1 && p.rollz == 5)
    ) {
      let oneUnit = genNumbers(5) + 5;
      p.total = (p.unitSentence + 1) * oneUnit;
      p.varB = oneUnit;
      p.varA = oneUnit * p.unitSentence;
      let lineTwo = undefined;
      let lineThree = undefined;

      if (p.rollLineTwo == "A") {
        lineTwo = `${p.objectOne} is ${p.varA}.`;
        p.rollLineThree = ["B", "total"][genNumbers(2)];
        if (p.rollLineThree == "B") {
          lineThree = `What is ${p.objectTwo}`;
        }
        if (p.rollLineThree == "total") {
          lineThree = `What is the total of ${p.objectOne} and ${p.objectTwo}?`;
        }
      }

      if (p.rollLineTwo == "B") {
        lineTwo = `${p.objectTwo} is ${p.varB}.`;
        p.rollLineThree = ["A", "total"][genNumbers(2)];
        if (p.rollLineThree == "A") {
          lineThree = `What is ${p.objectOne}`;
        }
        if (p.rollLineThree == "total") {
          lineThree = `What is the total of ${p.objectOne} and ${p.objectTwo}?`;
        }
      }

      if (p.rollLineTwo == "total") {
        lineTwo = `${p.objectOne} and ${p.objectTwo} is ${p.total}.`;
        p.rollLineThree = ["A", "B"][genNumbers(2)];
        if (p.rollLineThree == "A") {
          lineThree = `What is ${p.objectOne}`;
        }
        if (p.rollLineThree == "B") {
          lineThree = `What is ${p.objectTwo}?`;
        }
      }

      displayProblem.innerHTML = `
      ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
      ${lineTwo}</br>
      ${lineThree}</br>

      `;
    }

    // PARTS OF A WHOLE ( UNITARY )
    if (
      setting == 6 ||
      (setting == 9 && p.rollz == 6) ||
      (range == 1 && p.rollz == 6)
    ) {
      let names = ["Evelyn", "Mrs Lin", "Tim", "Sarimah", "Ken"][genNumbers(5)];
      const objectNum = genNumbers(4);
      let objects = ["apples", "erasers", "pencils", "eggs"][objectNum];
      let unit = ["bag", "box", "bundle", "cake"][objectNum];
      displayProblem.innerHTML = `
      ${names} puts ${p.each} ${objects} into each ${unit}.</p>
      There are ${p.packets} ${unit}${unit == "box" ? "es" : "s"} but with ${
        p.left
      } ${objects} left.</p>
      How many ${objects} were there at first?</p>
      `;
      if (unit == "cake") {
        displayProblem.innerHTML = `
        ${names} used ${p.each} ${objects} for each ${unit}.</p>
        ${p.packets} ${unit}s were made with ${p.left} ${objects} left.</p>
        How many ${objects} were there at first?</p>
        `;
      }
    }

    //WHOLE AND PARTS ( UNITARY)
    if (setting == 7) {
      normalDisplay();
      const person = boyNames[genNumbers(boyNames.length)];
      const total = p.eachUnit * p.units + p.situation;
      if (p.type == 0) {
        displayProblem.innerHTML = `
        ${person} had $${total} at first.</br>
        He spents $${p.situation} and shared the remaining amount with ${p.units} of his children.</br>
        How much did each children get?
        `;
      }
      if (p.type == 1) {
        displayProblem.innerHTML = `
There were ${total} things inside a bag</br>
${person} gave away ${p.situation} of it and put the rest into bags of ${p.eachUnit}.</br>
How many bags are there?
        `;
      }
      if (p.type == 2) {
        displayProblem.innerHTML = `
There were ${total} items inside a bag</br>
${person} gave away ${p.situation} of it and put the rest into ${p.units} bags.</br>
How many items are there in each bag?
        `;
      }
    }
  }
  // display
  if (level == "heuThree") {
    normalDisplay();
    console.log(setting);
    if (
      setting == 1 ||
      (setting == 9 && p.rollz == 1) ||
      (range == 1 && p.rollz == 1)
    ) {
      while (p.numOne == p.numTwo) {
        p.numOne = (genNumbers(5) + 1) * 2;
        p.numTwo = (genNumbers(5) + 1) * 2;
      }
      displayProblem.innerHTML = `
      ${p.objectOne} and ${p.objectTwo} has ${p.numOne + p.numTwo} sweets.</br>
      ${p.objectOne} has ${Math.abs(p.numOne - p.numTwo)} ${
        p.numOne > p.numTwo ? "more" : "less"
      } sweets than ${p.objectTwo}.</br>
      How many sweets does ${
        p.rollAnswer == 0 ? `${p.objectOne}` : `${p.objectTwo}`
      } have?
      `;
    }
    if (
      setting == 2 ||
      (setting == 9 && p.rollz == 2) ||
      (range == 1 && p.rollz == 2)
    ) {
      if (p.numOne + p.numThree < 4) {
        return updateProblems();
      }
      p.legOne = parseInt(p.objects[p.rollObj][2]);
      p.legTwo = parseInt(p.objects[p.rollObj][3]);
      p.objectOne = p.objects[p.rollObj][0];
      p.objectTwo = p.objects[p.rollObj][1];
      p.total = p.numOne * p.legOne + p.numTwo * p.legTwo;
      console.log(p.legOne, p.legTwo);
      displayProblem.innerHTML = `
      There is a total of ${p.numOne + p.numTwo} ${p.objectOne} and ${
        p.objectTwo
      }.</br>
      There are ${p.total} ${p.rollObj < 3 ? "legs" : "wheels"}.</br>
      How many ${p.rollQn == "A" ? p.objectOne : p.objectTwo} are there?
      `;
    }
    if (
      setting == 3 ||
      (setting == 9 && p.rollz == 3) ||
      (range == 1 && p.rollz == 3)
    ) {
      p.totalValue =
        (p.objectOneX * p.unitSentence + p.objectTwoX) * p.multipler;
      displayProblem.innerHTML = `
          ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
          If ${p.objectOneX} ${p.objectOne} and ${p.objectTwoX} ${
        p.objectTwo
      } is ${p.totalValue}.</br>
          What is ${p.rollQn == "A" ? p.objectOne : p.objectTwo}?

        `;
    }

    if (
      setting == 4 ||
      (setting == 9 && p.rollz == 4) ||
      (range == 1 && p.rollz == 4)
    ) {
      while (p.objectOneV == p.objectTwoV) {
        p.objectTwoV = genNumbers(5) + 1;
      }
      console.log(p.objectOneV, p.objectTwoV, p.objectOneQ, p.objectTwoQ);
      p.totalValue = p.objectOneQ * p.objectOneV + p.objectTwoQ * p.objectTwoV;
      p.difference = Math.abs(p.objectOneV - p.objectTwoV);
      displayProblem.innerHTML = `
      ${p.objectOne} is ${p.difference} ${
        p.objectOneV > p.objectTwoV ? "more" : "less"
      } than ${p.objectTwo}.</br>
      If ${p.objectOneQ} ${p.objectOne} and ${p.objectTwoQ} ${p.objectTwo} is ${
        p.totalValue
      }.</br>
      What is ${p.rollQn == "A" ? p.objectOne : p.objectTwo}?
      `;
    }

    if (
      setting == 5 ||
      (setting == 9 && p.rollz == 5) ||
      (range == 1 && p.rollz == 5)
    ) {
      while (p.objectOneV == p.objectTwoV) {
        p.objectOneV = genNumbers(3) + 2;
      }
      p.total = (genNumbers(8) + 2) * (p.objectOneV + p.objectTwoV);
      if (p.rollQn2 != "total") {
        displayProblem.innerHTML = `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        ${
          p.rollQn2 == "many"
            ? `How many ${
                p.rollQn == "A" ? p.objectOne : p.objectTwo
              }s are there?`
            : `What is the total for ${
                p.rollQn == "A" ? p.objectOne : p.objectTwo
              }? `
        }
        `;
      } else {
        displayProblem.innerHTML = `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        How many ${p.objectOne}s and ${p.objectTwo}s are there in total?
        `;
      }
    }

    if (
      setting == 6 ||
      (setting == 9 && p.rollz == 6) ||
      (range == 1 && p.rollz == 6)
    ) {
      let firstSentence = undefined;

      while (p.total % p.objectV == 0) {
        p.total = genNumbers(30) + 20;
      }

      if (p.rollObject == 0) {
        p.objectV = 4;
        while (p.total % 4 == 0) {
          p.total = genNumbers(30) + 20;
        }
        firstSentence = `A ${p.objects[0][0]} can fetch ${p.objectV} people.`;
      }
      if (p.rollObject == 1) {
        p.objectV = genNumbers(4) + 6;
        while (p.total % p.objectV == 0) {
          p.total = genNumbers(30) + 20;
        }
        firstSentence = `A ${p.objects[1][0]} can fetch ${p.objectV} people.`;
      }
      if (p.rollObject == 2) {
        p.objectV = (genNumbers(3) + 1) * 100;
        firstSentence = `A ${p.objects[2][0]} is ${p.objectV}ml.`;
      }
      if (p.rollObject == 3) {
        p.objectV = genNumbers(9) + 2;
        while (p.total % p.objectV == 0) {
          p.total = genNumbers(30) + 20;
        }
        if (p.rollQn == "A") {
          firstSentence = `X wants to give each person ${p.objectV} sweets.`;
        }
        if (p.rollQn == "B") {
          firstSentence = `There are ${p.objectV} sweets in each packet.`;
        }
      }

      let secondSentence = undefined;
      if (p.rollObject == 0 || p.rollObject == 1) {
        secondSentence = `There are ${p.total} people in total.`;
      }
      if (p.rollObject == 2) {
        p.total = p.objectV * (genNumbers(5) + 2) + (genNumbers(10) + 1) * 10;
        secondSentence = `A tank contains ${p.total}ml of water.`;
      }
      if (p.rollObject == 3) {
        secondSentence = `He has a total of ${p.total} sweets.`;
      }

      let thirdSentence = undefined;
      // rounddown
      if (p.rollQn == "A") {
        if (p.rollObject == 0 || p.rollObject == 1 || p.rollObject == 2) {
          thirdSentence = `What is the maximum number of ${
            p.objects[p.rollObject][1]
          } are completedly filled?`;
        }
        if (p.rollObject == 3) {
          thirdSentence = `What is the maximum number of people he can give?`;
        }
      }
      if (p.rollQn == "B") {
        if (p.rollObject == 0 || p.rollObject == 1 || p.rollObject == 2) {
          thirdSentence = `What is the minimum number of ${
            p.objects[p.rollObject][1]
          } needed?`;
        }
        if (p.rollObject == 3) {
          thirdSentence = `What is the minimum number of packets he must buy?`;
        }
      }

      displayProblem.innerHTML = `
        ${firstSentence}</br>
        ${secondSentence}</br>
        ${thirdSentence}</br>
      `;
    }

    if (
      setting == 7 ||
      (setting == 9 && p.rollz == 7) ||
      (range == 1 && p.rollz == 7)
    ) {
      console.log(p.difference, p.transfer);
      while (p.difference == 0 || Math.abs(p.difference) == 2) {
        p.difference = (genNumbers(20) - 10) * 2;
        console.log(p.difference, p.transfer);
      }

      if (p.transfer == "A" && p.difference > 0) {
        p.transferV = genNumbers(p.difference / 2);
        while (p.transferV == 0) {
          p.transferV = genNumbers(p.difference / 2);
        }
      }

      if (p.transfer == "B" && p.difference < 0) {
        p.transferV = genNumbers(-p.difference / 2);
        while (p.transferV == 0) {
          p.transferV = genNumbers(-p.difference / 2);
        }
      }

      if (p.transfer == "A") {
        displayProblem.innerHTML = `
        ${p.objectOne} is ${Math.abs(p.difference)} ${
          p.difference < 0 ? "less" : "more"
        } than ${p.objectTwo}.</br>
        ${p.objectOne} gave ${p.transferV} to ${p.objectTwo}.</br>
        Whats the difference between ${p.objectOne} and ${
          p.objectTwo
        } in the end?
        `;
      }

      if (p.transfer == "B") {
        displayProblem.innerHTML = `
        ${p.objectOne} is ${Math.abs(p.difference)} ${
          p.difference < 0 ? "less" : "more"
        } than ${p.objectTwo}.</br>
        ${p.objectTwo} gave ${p.transferV} to ${p.objectOne}.</br>
        Whats the difference between ${p.objectOne} and ${
          p.objectTwo
        } in the end?
        `;
      }
    }

    if (
      setting == 8 ||
      (setting == 9 && p.rollz == 8) ||
      (range == 1 && p.rollz == 8)
    ) {
      let gender = genNumbers(2) == 0 ? "he" : "she";
      if (p.options == "A") {
        p.value =
          p.cost * p.min * (genNumbers(4) + 2) + p.cost * genNumbers(p.min);
        displayProblem.innerHTML = `
          Someone has $${p.value}.<br>
          1 packet of potatoe chip cost $${p.cost}.</br>
          If ${gender} buys ${p.min} packets, ${gender} gets 1 more for free.</br>
          What is the most number of packets ${gender} can get? 
        `;
      }
      if (p.options == "B") {
        p.discount = genNumbers(p.cost - 1) + 1;
        p.value = p.min * genNumbers(10) + 1 + genNumbers(p.min);
        while (p.value <= p.min) {
          p.value = p.min * genNumbers(10) + 1 + genNumbers(p.min);
        }
        displayProblem.innerHTML = `
          1 packet of potatoe chip cost $${p.cost}.</br>
          For every ${p.min} packets bought, a discount of $${p.discount} is given.</br>
          How much does ${p.value} packets cost?
        `;
      }
    }
  }
  // display
  if (level == "heuThreeb") {
    if (
      setting == 1 ||
      (setting == 9 && p.rollz == 1) ||
      (range == 1 && p.rollz == 1)
    ) {
      // 1. FIRST SENTENCE
      let diffAB = "more";
      let diffValueAB = Math.abs(p.valueA - p.valueB);
      if (diffValueAB == 0) return updateCalc();
      if (p.valueA < p.valueB) {
        diffAB = "less";
      }
      let lineOne = undefined;
      if (p.compA == "unit") {
        lineOne = `A is ${p.unitA} times of B.`;
        p.arrUnit.push(p.unitA);
        p.arrUnit.push(1);
      }
      if (p.compA == "comp") {
        lineOne = `A is ${diffValueAB} ${diffAB} than B.`;
        p.arrUnit.push("comp");
        p.arrUnit.push("comp");
      }
      // 2. SECOND SENTENCE
      let diffBC = "more";
      let diffValueBC = Math.abs(p.valueB - p.valueC);
      if (diffValueBC == 0) return updateCalc();
      if (p.valueB < p.valueC) {
        diffBC = "less";
      }
      let lineTwo = undefined;
      if (p.compB == "unit") {
        lineTwo = `B is ${p.unitB} times of C.`;
        p.arrUnit.push(p.unitB);
        p.arrUnit.push(1);
      }
      if (p.compB == "comp") {
        lineTwo = `B is ${diffValueBC} ${diffBC} than C.`;
        p.arrUnit.push("comp");
        p.arrUnit.push("comp");
      }
      let total = p.valueA + p.valueB + p.valueC;
      if (p.compA == "unit" && p.compB == "unit") {
        const commonNum = commonDeno(p.arrUnit[1], p.arrUnit[2]);
        p.arrUnit.push((p.arrUnit[0] * commonNum) / p.arrUnit[1]);
        p.arrUnit.push(commonNum);
        p.arrUnit.push((p.arrUnit[3] * commonNum) / p.arrUnit[2]);
        const totalUnit = p.arrUnit[4] + p.arrUnit[5] + p.arrUnit[6];
        if (totalUnit > 10) return updateCalc();
        total = totalUnit * p.oneUnit;
      }
      if (p.compA == "comp" && p.compB == "unit") {
        p.valueC = p.valueB / p.unitB;
        if (p.valueC % 1 != 0) return updateCalc();
        //REVAMP LINEONE
        diffValueAB = Math.abs(p.valueA - p.valueB);
        if (diffValueAB == 0) return updateCalc();
        if (p.valueA < p.valueB) {
          diffAB = "less";
        } else {
          diffAB = "more";
        }
        lineOne = `A is ${diffValueAB} ${diffAB} than B.`;
        total = p.valueA + p.valueB + p.valueC;
      }
      if (p.compA == "unit" && p.compB == "comp") {
        p.valueB = p.valueA / p.unitA;
        if (p.valueB % 1 != 0) return updateCalc();
        //REVAMP LINETWO
        diffValueBC = Math.abs(p.valueB - p.valueC);
        if (diffValueBC == 0) return updateCalc();
        if (p.valueB < p.valueC) {
          diffBC = "less";
        } else {
          diffBC = "more";
        }
        lineTwo = `B is ${diffValueBC} ${diffBC} than C.`;
        total = p.valueA + p.valueB + p.valueC;
      }
      console.log(p.arrUnit);
      //3. THIRD SENTENCE (TOTAL)

      const lineThree = `Their total is ${total}.`;
      //4. FOURTH SENTENCE (QUESTIONS)
      const lineFour = `Find the value of ${p.find}.`;
      // Repeated identity
      displayProblem.innerHTML = `
      ${lineOne}</p>
      ${lineTwo}</p>
      ${lineThree}</p>
      ${lineFour}`;
    }

    if (
      setting == 2 ||
      (setting == 9 && p.rollz == 2) ||
      (range == 1 && p.rollz == 2)
    ) {
      let choice = genNumbers(3);
      let swope = 0;

      // Ensuring that they are not the same or 0.
      while (
        p.situationOne == 0 ||
        p.situationTwo == 0 ||
        p.situationOne == p.situationTwo
      ) {
        p.situationOne = genNumbers(100) - 50;
        p.situationTwo = genNumbers(100) - 50;
      }
      // swap positions
      if (p.situationOne > 0 && p.situationTwo > 0) {
        if (p.situationTwo > p.situationOne) {
          [p.situationTwo, p.situationOne] = [p.situationOne, p.situationTwo];
        }
      }
      if (p.situationOne < 0 && p.situationTwo < 0) {
        if (-p.situationTwo < -p.situationOne) {
          [p.situationTwo, p.situationOne] = [p.situationOne, p.situationTwo];
        }
        if (Math.abs(p.situationOne) > Math.abs(p.situationTwo)) {
          console.log("Impossible numbers");
          return updateCalc();
        }
      }

      let valueOfOneUnit = undefined;

      if (p.situationOne > 0 && p.situationTwo > 0) {
        valueOfOneUnit =
          (p.situationOne - p.situationTwo) / (p.unitSentence - 1);
        while (
          (p.situationOne - p.situationTwo) % (p.unitSentence - 1) != 0 ||
          valueOfOneUnit <= p.situationTwo
        ) {
          p.situationOne = genNumbers(100) + 1;
          p.situationTwo = genNumbers(100) + 1;
          (p.unitSentence = genNumbers(4) + 2),
            (valueOfOneUnit =
              (p.situationOne - p.situationTwo) / (p.unitSentence - 1));
          console.log(valueOfOneUnit, p.situationOne, p.situationTwo);
        }
      }
      if (p.situationOne < 0 && p.situationTwo < 0) {
        valueOfOneUnit =
          (p.situationTwo + p.situationOne) / (p.unitSentence - 1);
        while ((p.situationTwo - p.situationOne) % (p.unitSentence - 1) != 0) {
          p.situationOne = genNumbers(100) - 200;
          p.situationTwo = genNumbers(100) - 200;
          (p.unitSentence = genNumbers(4) + 2),
            (valueOfOneUnit =
              (p.situationOne - p.situationTwo) / (p.unitSentence - 1));
          console.log(valueOfOneUnit, p.situationOne, p.situationTwo);
        }
      }

      if (
        (p.situationOne < 0 && p.situationTwo > 0) ||
        (p.situationOne > 0 && p.situationTwo < 0)
      ) {
        if (p.situationOne > 0) {
          while (
            (p.situationOne - p.situationTwo) % (p.unitSentence - 1) !=
            0
          ) {
            p.situationOne = genNumbers(50) + 1;
          }
        }
        if (p.situationOne < 0) {
          swope = 1;
          while (
            (p.situationTwo - p.situationOne) % (p.unitSentence - 1) !=
            0
          ) {
            p.situationOne = genNumbers(50) - 50;
          }
        }
      }

      displayProblem.innerHTML = `
      ${
        genNumbers == 0
          ? `${p.objectOne} and ${p.objectTwo} has an equal number at first.`
          : `${p.objectOne} and ${p.objectTwo} has the same amount at first.`
      }</br>
      ${p.objectOne} ${
        p.situationOne > 0
          ? ["increased by", "bought", "received"][choice]
          : ["decreased by", "sold", "gave away"][choice]
      } ${Math.abs(p.situationOne)}.</br>
      ${p.objectTwo} ${
        p.situationTwo > 0
          ? ["increased by", "bought", "received"][choice]
          : ["decreased by", "sold", "gave away"][choice]
      } ${Math.abs(p.situationTwo)}.</br>
      ${p.objectOne} is ${p.unitSentence} times of ${
        p.objectTwo
      } in the end.</br>
      What is ${p.oneOrTwo == "One" ? p.objectOne : p.objectTwo} ${
        p.firstOrEnd
      }?
      `;
      if (swope == 1) {
        console.log("display 2");
        displayProblem.innerHTML = `
        ${
          genNumbers == 0
            ? `${p.objectOne} and ${p.objectTwo} has an equal number at first.`
            : `${p.objectOne} and ${p.objectTwo} has the same amount at first.`
        }</br>
        ${p.objectOne} ${
          p.situationOne > 0
            ? ["increased by", "bought", "received"][choice]
            : ["decreased by", "sold", "gave away"][choice]
        } ${Math.abs(p.situationOne)}.</br>
        ${p.objectTwo} ${
          p.situationTwo > 0
            ? ["increased by", "bought", "received"][choice]
            : ["decreased by", "sold", "gave away"][choice]
        } ${Math.abs(p.situationTwo)}.</br>
        ${p.objectTwo} is ${p.unitSentence} times of ${
          p.objectOne
        } in the end.</br>
        What is ${p.oneOrTwo == "One" ? p.objectOne : p.objectTwo} ${
          p.firstOrEnd
        }?
        `;
      }
    }
    // EQUAL END
    if (
      setting == 3 ||
      (setting == 9 && p.rollz == 3) ||
      (range == 1 && p.rollz == 3)
    ) {
      let choice = genNumbers(3);

      while (p.situationOne == p.situationTwo) {
        p.situationOne = genNumbers(100) + 1;
        p.situationTwo = genNumbers(100) + 1;
      }
      // positive
      if (p.situationOne > 0 && p.situationTwo > 0) {
        while (
          p.situationTwo - (p.situationOne % (p.unitSentence - 1)) != 0 ||
          p.situationOne == p.situationTwo
        ) {
          p.situationOne = genNumbers(100) + 1;
          p.situationTwo = genNumbers(100) + 1;
          p.unitSentence = genNumbers(4) + 2;
        }

        if (p.situationOne > p.situationTwo) {
          console.log("Swapped value!");
          [p.situationOne, p.situationTwo] = [p.situationTwo, p.situationOne];
        }
      }
      // negative
      else if (p.situationOne < 0 && p.situationTwo < 0) {
        while (
          (Math.abs(p.situationOne) - Math.abs(p.situationTwo)) %
            (p.unitSentence - 1) !=
            0 ||
          p.situationOne == p.situationTwo
        ) {
          p.situationOne = genNumbers(100) - 100;
          p.situationTwo = genNumbers(100) - 100;
          p.unitSentence = genNumbers(4) + 2;
        }
        if (p.situationOne > p.situationTwo) {
          console.log("Swapped value!");
          [p.situationOne, p.situationTwo] = [p.situationTwo, p.situationOne];
        }
        const diff = (p.situationOne - p.situationTwo) * -1;
        const oneUnit = diff / (p.unitSentence - 1);
        console.log(diff, oneUnit);
        if (oneUnit < Math.abs(p.situationTwo)) {
          console.log("Impossible, value of 1 unit is too small");
          return updateCalc();
        }
      } else {
        const diff = -p.situationOne + p.situationTwo;
        const oneUnit = diff / (p.unitSentence - 1);
        if (oneUnit * p.unitSentence < -p.situationOne) {
          console.log("Impossible, value of 1 unit is too small");
          return updateCalc();
        }
        while (
          (p.situationOne - p.situationTwo) % (p.unitSentence - 1) != 0 ||
          Math.abs(p.situationOne) == Math.abs(p.situationTwo)
        ) {
          p.situationOne = genNumbers(100) + 1;
          p.situationtwo = genNumbers(100) - 100;
          p.unitSentence = genNumbers(4) + 2;
        }
      }
      if (p.situationOne > 0 && p.situationTwo < 0) {
        console.log("Impossibru!");
        return updateCalc();
      }
      // Both

      displayProblem.innerHTML = `
      ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
      ${p.objectOne} ${
        p.situationOne > 0
          ? ["increased by", "bought", "received"][choice]
          : ["decreased by", "sold", "gave away"][choice]
      } ${Math.abs(p.situationOne)}.</br>
      ${p.objectTwo} ${
        p.situationTwo > 0
          ? ["increased by", "bought", "received"][choice]
          : ["decreased by", "sold", "gave away"][choice]
      } ${Math.abs(p.situationTwo)}.</br>
      ${
        genNumbers(2) == 0
          ? `${p.objectOne} and ${p.objectTwo} has an equal number in the end.`
          : `${p.objectOne} and ${p.objectTwo} has the same amount in the end.`
      }</br>
      What is ${p.oneOrTwo == "One" ? p.objectOne : p.objectTwo} ${
        p.firstOrEnd
      }?
      `;
    }

    if (
      setting == 4 ||
      (setting == 9 && p.rollz == 4) ||
      (range == 1 && p.rollz == 4)
    ) {
      let oneUnit = (p.startTwo = genNumbers(100) + 1);
      p.startOne = p.unitSentence * oneUnit;

      p.situationOne = p.situationOne * genNumbers(p.startOne);
      p.situationTwo = p.situationTwo * genNumbers(p.startTwo);

      if (p.situationOne == 0 || p.situationTwo == 0) {
        return updateProblems();
      }

      let lineTwo = undefined;
      if (p.oneOrTwo == "One") {
        lineTwo = `${p.objectOne} ${
          p.situationOne > 0 ? "increased" : "decreased"
        } by ${Math.abs(p.situationOne)}.`;
      }
      if (p.oneOrTwo == "Two") {
        lineTwo = `${p.objectTwo} ${
          p.situationTwo > 0 ? "increased" : "decreased"
        } by ${Math.abs(p.situationTwo)}.`;
      }

      if (p.oneOrTwo == "One") {
        p.endOne = p.startOne + p.situationOne;
        p.endTwo = p.startTwo;
      }

      if (p.oneOrTwo == "Two") {
        p.endOne = p.startOne;
        p.endTwo = p.startTwo + p.situationTwo;
      }

      let lineThree = ["A", "B"][genNumbers(2)];
      p.othersLast = lineThree;
      if (p.oneOrTwo == "One" && lineThree == "A") {
        lineThree = `${p.objectOne} has ${p.endOne} in the end.`;
      }
      if (p.oneOrTwo == "One" && lineThree == "B") {
        lineThree = `${p.objectTwo} has ${p.endTwo}.`;
      }
      if (p.oneOrTwo == "Two" && lineThree == "A") {
        lineThree = `${p.objectOne} has ${p.endOne}.`;
      }
      if (p.oneOrTwo == "Two" && lineThree == "B") {
        lineThree = `${p.objectTwo} has ${p.endTwo} in the end.`;
      }

      let lineFour = undefined;
      // if (p.oneOrTwo == "One") {
      //   p.answer = ["total", "other"][genNumbers(2)];
      // }
      // if (p.oneOrTwo == "Two") {
      //   p.answer = ["total", "other"][genNumbers(2)];
      // }

      // if (p.answer == "A") {
      //   lineFour = `What is ${p.objectOne} at first?`;
      // }
      // if (p.answer == "B") {
      //   lineFour = `What is ${p.objectTwo} at first?`;
      // }

      if (
        (p.oneOrTwo == "One" && p.othersLast == "A") ||
        (p.oneOrTwo == "Two" && p.othersLast == "B")
      ) {
        p.answer = ["total", "other"][genNumbers(2)];
      }

      if (p.answer == "total") {
        lineFour = `What is the total at first?`;
      }

      if (
        (p.oneOrTwo == "One" && p.othersLast == "B") ||
        (p.oneOrTwo == "Two" && p.othersLast == "A")
      ) {
        p.answer = "other";
      }

      if (p.answer == "other") {
        // if (p.oneOrTwo == "One") {
        //   lineFour = `What is ${p.objectTwo} at in the end?`;
        // }
        // if (p.oneOrTwo == "Two") {
        //   lineFour = `What is ${p.objectOne} at in the end?`;
        // }
        if (p.othersLast == "A") {
          lineFour = `What is ${p.objectTwo} at in the end?`;
        }
        if (p.othersLast == "B") {
          lineFour = `What is ${p.objectOne} at in the end?`;
        }
      }

      displayProblem.innerHTML = `
      ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
      ${lineTwo}</br>
      ${lineThree}</br>
      ${lineFour}
      `;
    }
    if (
      setting == 5 ||
      (setting == 9 && p.rollz == 5) ||
      (range == 1 && p.rollz == 5)
    ) {
      let operators = ["+", "-", "x", "/"];
      let lastNum = p.num;
      displayProblem.innerHTML = `
      Person A has a number of something at first.</p>
      `;
      let count = 0;
      console.log(`At first:${p.num}`);
      for (let i = 0; i < 4; i++) {
        let position = genNumbers(operators.length);
        const op = operators[position];
        console.log(op);

        if (op == "+") {
          lastNum = lastNum + p.sitPlus;
          if (count == 0) {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `It increased by ${p.sitPlus}.</p>`
            );
          } else {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `Then, it increased by ${p.sitPlus}.</p>`
            );
          }
          console.log(`+${p.sitPlus}: ${lastNum}`);
        }
        if (op == "-") {
          lastNum = lastNum - p.sitMinus;
          if (lastNum < 0) return updateCalc();
          if (count == 0) {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `It decreased by ${p.sitMinus}.</p>`
            );
          } else {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `Then. it decreased by ${p.sitMinus}.</p>`
            );
          }
          console.log(`-${p.sitMinus}: ${lastNum}`);
        }
        if (op == "x") {
          lastNum = lastNum * p.sitTimes;
          if (count == 0) {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `It increased by ${p.sitTimes} times.</p>`
            );
          } else {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `Then, it increased by ${p.sitTimes} times.</p>`
            );
          }
          console.log(`x${p.sitTimes}: ${lastNum}`);
        }
        if (op == "/") {
          if (lastNum % p.sitDivide != 0) return updateCalc();
          lastNum = lastNum / p.sitDivide;
          if (count == 0) {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `It decreased by ${p.sitDivide} times.</p>`
            );
          } else {
            displayProblem.insertAdjacentHTML(
              "beforeend",
              `Then, it decreased by ${p.sitDivide} times.</p>`
            );
          }
          console.log(`/${p.sitDivide}: ${lastNum}`);
        }
        operators.splice(position, 1);
        count += 1;
      }

      displayProblem.insertAdjacentHTML(
        "beforeend",
        `It became ${lastNum} in the end.</p>What was it at first?</p>`
      );
    }
  }

  // display

  if (level == "heuFour") {
    if (
      setting == 1 ||
      (setting == 9 && p.rollz == 1) ||
      (range == 1 && p.rollz == 1)
    ) {
      while (p.objectOneQ == p.objectTwoQ || p.objectOneQ > p.objectTwoQ) {
        p.objectTwoQ = genNumbers(4) + 2;
        p.objectOneQ = genNumbers(4) + 2;
      }

      p.objectOneS = p.totalValue - p.objectOneQ * p.price;
      p.objectTwoS = p.totalValue - p.objectTwoQ * p.price;
      if (p.objectOneS == 0 || p.objectTwoS == 0) return updateProblems();

      if (p.rollType == "A") {
        displayProblem.innerHTML = `
        If person ${p.objectOne} bought ${p.objectOneQ} ${p.objects}.</br>
        ${p.label} would ${
          p.objectOneS >= 0 ? "have an excess" : "be short"
        } of $${Math.abs(p.objectOneS)}.</br>
        If ${p.label} bought ${p.objectTwoQ} ${p.objects} instead.</br>
        ${p.label} would ${
          p.objectTwoS >= 0 ? "have an excess" : "be short"
        } of $${Math.abs(p.objectTwoS)}.</br>
        ${
          p.rollQn == "price"
            ? `How much does each item cost?`
            : `How much did person ${p.objectOne} have?`
        }
        `;
      }
      if (p.rollType == "B") {
        displayProblem.innerHTML = `
        Both person ${p.objectOne} and ${p.objectTwo} has the same amount.</br>
        If person ${p.objectOne} bought ${p.objectOneQ} ${p.objects}.</br>
        ${p.label} would ${
          p.objectOneS >= 0 ? "have an excess" : "be short"
        } of $${Math.abs(p.objectOneS)}.</br>
        If person ${p.objectTwo} bought ${p.objectTwoQ} ${p.objects}.</br>
        ${p.label} would ${
          p.objectTwoS >= 0 ? "have an excess" : "be short"
        } of $${Math.abs(p.objectTwoS)}.</br>
        ${
          p.rollQn == "price"
            ? `How much does each item cost?`
            : `How much did person ${p.objectOne} have?`
        }
        `;
      }
    }

    if (
      setting == 2 ||
      (setting == 9 && p.rollz == 2) ||
      (range == 1 && p.rollz == 2)
    ) {
      p.sceneTwo = p.sceneOne + genNumbers(5) + 1;
      p.situationOne = p.numberOfStuff - p.sceneOne * p.numberOfStudents;
      // p.situationOne = 0
      if (p.situationOne >= 0) {
        p.situationOneW = "an excess";
      }
      if (p.situationTwo >= 0) {
        p.situationTwoW = "an excess";
      }
      p.situationTwo = p.numberOfStuff - p.sceneTwo * p.numberOfStudents;

      if (p.situationOneW != p.situationTwoW) {
        let bigDifference = Math.abs(p.situationOne) + Math.abs(p.situationTwo);
        let smallDifference = p.sceneTwo - p.sceneOne;
        if (bigDifference % smallDifference != 0) {
          console.log("Question changed!");
          return updateProblems();
        }
      }

      displayProblem.innerHTML = `
        If ${p.sceneOne} sweets were given to each pupils, there would be <u>${
        p.situationOneW
      }</u> of ${Math.abs(p.situationOne)} sweets.</br>
        If ${p.sceneTwo} sweets were given to each pupils, there would be <u>${
        p.situationTwoW
      }</u> of ${Math.abs(p.situationTwo)} sweets.</br>
        ${
          p.rollAnswer == 1
            ? "How many pupils are there?"
            : "How many sweets are there?"
        }
      `;
    }

    if (
      setting == 3 ||
      (setting == 9 && p.rollz == 3) ||
      (range == 1 && p.rollz == 3)
    ) {
      p.absentPeople = genNumbers(p.peopleAtFirst - 2) + 1;
      p.giveUp = (genNumbers(4) + 1) * p.absentPeople;
      p.remainingPeople = p.peopleAtFirst - p.absentPeople;
      displayProblem.innerHTML = `
      There were ${p.peopleAtFirst} workers at first.</br>
      ${p.absentPeople} did not turn up for work. </br>
      Each of the remaining workers have to do additional ${p.giveUp} work.</br>
      ${
        p.rollQn == "A"
          ? "How many did each worker originally needed to do?"
          : "What was the total amount of work needed to be done?"
      }
      `;
    }

    if (
      setting == 4 ||
      (setting == 9 && p.rollz == 4) ||
      (range == 1 && p.rollz == 4)
    ) {
      let index = ["X", "Y", "Z"].indexOf(p.objectTwo);
      console.log(index);
      let newArray = ["X", "Y", "Z"];
      newArray.splice(index, 1);
      p.objectThree = newArray[genNumbers(2)];
      console.log(newArray, p.objectThree);

      p.groupTwo = p.groupOne + (p.unitSentence - 1) * (genNumbers(5) + 1);
      displayProblem.innerHTML = `
      ${p.objectOne} and ${p.objectTwo} is ${p.groupOne}.</br>
      ${p.objectOne} and ${p.objectThree} is ${p.groupTwo}.</br>
      ${p.objectThree} is ${p.unitSentence} times of ${p.objectTwo}.</br>
      What is the value of ${p.objectOne}?
      `;
    }

    if (
      setting == 5 ||
      (setting == 9 && p.rollz == 5) ||
      (range == 1 && p.rollz == 5)
    ) {
      while (p.objectOneV == p.objectTwoV) {
        p.objectOneV = genNumbers(3) + 2;
      }
      while (
        p.objectOneUnit == p.objectTwoUnit ||
        (p.objectOneUnit % 2 == 0 && p.objectTwoUnit % 2 == 0)
      ) {
        p.objectOneUnit = genNumbers(3) + 2;
      }
      p.total =
        (genNumbers(3) + 2) *
        (p.objectOneV * p.objectOneUnit + p.objectTwoV * p.objectTwoUnit);
      if (p.rollQn2 != "total") {
        displayProblem.innerHTML = `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        The number of ${p.objectOne} is ${p.objectOneUnit}/${
          p.objectTwoUnit
        } the number of ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        ${
          p.rollQn2 == "many"
            ? `How many ${
                p.rollQn == "A" ? p.objectOne : p.objectTwo
              }s are there?`
            : `What is the total for ${
                p.rollQn == "A" ? p.objectOne : p.objectTwo
              }? `
        }
        `;
      } else {
        displayProblem.innerHTML = `
        Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        The number of ${p.objectOne} is ${p.objectOneUnit}/${p.objectTwoUnit} the number of ${p.objectTwo}.</br>
        The total for both is ${p.total} ${p.unitMeasurement}.</br>
        How many ${p.objectOne}s and ${p.objectTwo}s are there in total?
        `;
      }
    }

    if (
      setting == 6 ||
      (setting == 9 && p.rollz == 6) ||
      (range == 1 && p.rollz == 6)
    ) {
      displayProblem.innerHTML = `
        There is at least ${p.objectTwoQ} ${p.objectTwo}s between any ${
        p.objectOne
      }.</br>
        There is a total of ${p.total} ${p.objectTwo}s and ${p.objectOne}s.</br>
        How many ${p.rollQn == "A" ? p.objectOne : p.objectTwo}s are there?
      `;
    }

    if (
      setting == 7 ||
      (setting == 9 && p.rollz == 7) ||
      (range == 1 && p.rollz == 7)
    ) {
      while (p.groupOne == p.groupTwo) {
        p.groupOne = genNumbers(8) + 2;
      }
      if (p.groupTwo < p.groupOne) {
        swap(p.groupOne, p.groupTwo);
      }

      p.leftOne = p.total % p.groupOne;
      p.leftTwo = p.total % p.groupTwo;

      if (p.leftOne == 0 && p.leftTwo == 0) {
        return updateProblems();
      }
      let extraOrExcess = ["extra", "excess"][genNumbers(2)];
      p.min = p.total - 10;
      p.max = p.total + 10;

      let firstNum = p.groupOne + p.leftOne;
      let secondNum = p.groupTwo + p.leftTwo;

      // if (firstNum > p.min ){
      //   p.arrFirstNum.push(firstNum)
      // }
      // if (secondNum > p.min ){
      //   p.arrSecondNum.push(secondNum)
      // }

      console.log(firstNum, secondNum);

      while (firstNum != p.total || (firstNum > p.min && p.firstNum < p.max)) {
        p.arrFirstNum.push(firstNum);
        firstNum = firstNum + p.groupOne;
      }

      while (
        secondNum != p.total ||
        (secondNum > p.min && p.secondNum < p.max)
      ) {
        p.arrSecondNum.push(secondNum);
        secondNum = secondNum + p.groupTwo;
      }

      p.arrFirstNum.push(firstNum);
      p.arrSecondNum.push(secondNum);

      console.log(p.arrFirstNum, p.arrSecondNum);

      // for (let i = 0; i < p.arrFirstNum.length; i++){
      //   if (p.arrFirstNum[i] <= p.min ){
      //     p.arrFirstNum.shift()
      //     console.log(p.arrFirstNum)
      //   }
      // }

      while (p.arrFirstNum[p.arrFirstNum.length - 1] >= p.max) {
        p.arrFirstNum.pop();
      }

      while (p.arrSecondNum[p.arrSecondNum.length - 1] >= p.max) {
        p.arrSecondNum.pop();
      }

      while (p.arrFirstNum[0] <= p.min) {
        p.arrFirstNum.shift();
      }

      while (p.arrSecondNum[0] <= p.min) {
        p.arrSecondNum.shift();
      }

      // for ( let i = 1; i < p.arrFirstNum.length-2; i++){
      //   if (p.arrSecondNum.includes(p.arrFirstNum[i])){
      //     return updateProblems()
      //   }
      // }

      // const maxLength = p.arrFirstNum.length >= p.arrSecondNum.length ? p.arrFirstNum.length : p.arrSecondNum.length
      for (let i = 0; i < p.arrFirstNum.length; i++) {
        if (
          p.arrSecondNum.includes(p.arrFirstNum[i]) &&
          p.arrFirstNum[i] != p.total
        ) {
          return updateProblems();
        }
      }

      for (let i = 0; i < p.arrSecondNum.length; i++) {
        if (
          p.arrFirstNum.includes(p.arrSecondNum[i]) &&
          p.arrSecondNum[i] != p.total
        ) {
          return updateProblems();
        }
      }

      displayProblem.innerHTML = `
       There are some ${p.objects} between ${p.min} and ${p.max}.</br>
       If someone packs them in groups of ${p.groupOne},
      there would be an ${extraOrExcess} of ${p.leftOne}.</br>
       If someone packs them in groups of ${p.groupTwo},
       there would be an ${extraOrExcess} of ${p.leftTwo}.</br>
       How many ${p.objects} are there?
      `;
    }
  }
  //  DISPLAY
  if (level == "heuFourb") {
    if (setting == 1) {
      [p.numOne, p.numTwo] = simplify(p.numOne, p.numTwo);
      if (p.numOne == 1 || p.numTwo == 1) return updateCalc();
      if (p.personOne == p.personTwo || p.numOne == p.numTwo)
        return updateCalc();
      if (p.version == 0) {
        displayProblem.innerHTML = `
      ${p.personOne} set ${p.arrGender[p.firstPosition]} alarm to ring every ${
          p.numOne
        } mins.</p>
      ${p.personTwo} set ${p.arrGender[p.secondPosition]} alarm to ring every ${
          p.numTwo
        } mins.</p>
      How many minutes later did the alarm ring together for the ${
        p.times
      } time?</p>
      `;
      }
      if (p.version == 1) {
        console.log(p.numOne, p.numTwo);
        let ordinalPosition = [
          "0",
          "1st",
          "2nd",
          "3rd",
          "4th",
          "5th",
          "6th",
          "7th",
          "8th",
          "9th",
          "10th",
        ];
        const things = ["sweets", "chocolates", "cups", "a key chain"];
        displayProblem.innerHTML = `
        Every ${ordinalPosition[p.numOne]} participant receives ${
          things[genNumbers(2)]
        }.</p>
        Every ${ordinalPosition[p.numTwo]} participant receives ${
          things[genNumbers(2) + 2]
        }.</p>
        Which is the ${p.times} participant to receive both?
        <i>Leave your answer in ordinal numbers.</i>
        `;
      }
      if (p.version == 2) {
        const things = ["sweets", "chocolates", "snacks", "key chains"];
        const thing = things[things.length - 1];
        displayProblem.innerHTML = `
        ${p.personOne} has some ${thing}.</p>
        The ${thing} can be shared among ${p.numOne} or ${p.numTwo} children.</p>
        How many ${thing} are there?
        `;
      }
    }
    if (setting == 2) {
      if (primeNumbers.includes(p.numOne) || primeNumbers.includes(p.numTwo)) {
        console.log(p.numOne, p.numTwo);
        return updateCalc();
      }
      if (p.numOne == p.numTwo) return updateCalc();
      const personArr = ["Lucas", "Mia", "Luna", "Jacob", "Sofia", "Jackson"];
      const thingsArr = [
        "oranges",
        "mangoes",
        "blueberries",
        "bananas",
        "apples",
      ];
      const person = personArr[personArr.length - 1];
      const thingsOne = thingsArr[genNumbers(thingsArr.length - 1)];
      const thingsTwo = thingsArr[genNumbers(thingsArr.length - 1)];
      if (thingsOne == thingsTwo) return updateCalc();
      if (commonFactors(p.numOne, p.numTwo).length <= 2) return updateCalc();
      let question = "";
      if (p.version == 0) {
        question = `
        How many bags are there?
        `;
      }
      if (p.version == 1) {
        question = `
        How many ${thingsOne} are there in each bag?`;
      }
      if (p.version == 2) {
        question = `
        How many ${thingsTwo} are there in each bag?`;
      }
      if (p.version == 3) {
        question = `
        How many items are there in each bag?`;
      }

      displayProblem.innerHTML = `
      ${person} has ${p.numOne} ${thingsOne} and ${p.numTwo} ${thingsTwo}.</p>
      The items are to be distributed equally into as many bags as possible.</p>
      ${question}      
      `;
    }
    //UNCHANGED DIFFERENCE
    if (setting == 3) {
      //UNIT SENTENCE
      if (p.type == "norm") {
        [p.unitA, p.unitB] = simplify(p.unitA, p.unitB);
        if (p.unitB > p.unitA) [p.unitA, p.unitB] = [p.unitB, p.unitA];
        let unitSentence = `A has ${p.unitA} times of B in the end.`;
        if (p.unitB > 1) {
          unitSentence = `A is ${p.unitA}/${p.unitB} of B in the end.`;
        }

        let situationText = undefined;
        if (p.situation == 1) {
          situationText = "increased";
          p.numA = p.valueOneUnit * p.unitA - p.situationValue;
          p.numB = p.valueOneUnit * p.unitB - p.situationValue;
        }
        if (p.situation == -1) {
          situationText = "decreased";
          p.numA = p.valueOneUnit * p.unitA + p.situationValue;
          p.numB = p.valueOneUnit * p.unitB + p.situationValue;
        }
        if (p.numA <= 0 || p.numB <= 0) return updateCalc();

        const difference = p.numA - p.numB;
        const diffUnit = p.unitA - p.unitB;
        if (difference % diffUnit != 0) return updateCalc();
        displayProblem.innerHTML = `
        A has ${p.numA} while B has ${p.numB} at first.</p>
        Both ${situationText} by an equal amount.</p>
        ${unitSentence}</p>
        `;
        // FINAL QUESTION
        if (p.question == "AE") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "What is A in the end?"
          );
        }
        if (p.question == "BE") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "What is B in the end?"
          );
        }
        if (p.question == "change") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `What is each ${situationText} by?`
          );
        }
      }
      if (p.type == "age") {
        p.numA = genNumbers(10) + 20;
        p.numB = genNumbers(11) + 1;
        let unitSentence = undefined;
        const person = ["John", "Mary"][genNumbers(2)];

        if (p.unitB > p.unitA) {
          [p.unitA, p.unitB] = [p.unitB, p.unitA];
        }
        const ageDiff = p.numA - p.numB;
        const unitDiff = p.unitA - p.unitB;
        const oneUnit = ageDiff / unitDiff;

        let ageSentence = `
        ${person}'s father is ${p.numA} years old.</p>
        ${person} is ${p.numB} years old.</p>`;
        if (p.ageType == "diff") {
          ageSentence = `The age difference between ${person}'s father and ${person} is ${ageDiff} years old.</p>`;
        }

        if (ageDiff == p.numB) {
          console.log("Age difference is 0");
          return updateCalc();
        }
        if (oneUnit % 1 != 0) {
          console.log("1 unit isnt whole number");
          return updateCalc();
        }

        console.log(oneUnit);
        const childAfter = oneUnit * p.unitB;
        let changeText = `In how many years is`;
        if (childAfter < p.numB) {
          changeText = `How many years ago was`;
        }
        [p.unitA, p.unitB] = simplify(p.unitA, p.unitB);
        if (p.ageType == "norm") {
          unitSentence = `${changeText} the father ${p.unitA} times of ${person}'s age?`;
          if (p.unitB != 1) {
            unitSentence = `${changeText} the father ${p.unitA}/${p.unitB} of ${person}'s age?`;
          }
        }
        if (p.ageType == "diff") {
          let change = childAfter - p.numB;
          let changeText = `${change} years later,`;
          // if (ageDiff > 0) return updateCalc();
          if (ageDiff < 0) {
            changeText = `${change} years ago,`;
          }
          unitSentence = `${changeText} the father ${p.unitA} times of ${person}'s age.</p>`;
          if (p.unitB != 1) {
            unitSentence = `${changeText} the father ${p.unitA}/${p.unitB} of ${person}'s age.</p>`;
          }
        }

        displayProblem.innerHTML = `
        ${ageSentence}
        ${unitSentence}
        `;
        if (p.type == "age" && p.ageType == "diff") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `How old is ${person} at first?`
          );
        }
      }
    }
    //UNCHANGED TOTAL
    if (setting == 4) {
      // if (p.valueB > p.valueA) [p.valueA, p.valueB] = [p.valueB, p.valueA];
      [p.unitA, p.unitB] = simplify(p.unitA, p.unitB);
      p.valueAEnd = p.unitA * p.valueOneUnit;
      p.valueBEnd = p.unitB * p.valueOneUnit;
      p.valueAFirst = p.valueAEnd + p.transfer;
      p.valueBFirst = p.valueBEnd - p.transfer;
      console.log(p.valueOneUnit, p.valueAEnd, p.valueBEnd, p.transfer);

      if (p.version == "valueFirst") {
        let total = p.valueAEnd + p.valueBEnd;
        const transferText = genNumbers(2) == 0 ? "transferred" : "gave";
        // const totalUnit = p.unitA + p.unitB;
        let transferValueText = p.transfer;
        const lineOneOptions = genNumbers(2);
        if (p.question == "AE" || p.question == "BE") {
          if (lineOneOptions == 1) {
            transferValueText = "some";
          } else {
            transferValueText = ["some", p.transfer][genNumbers(1)];
          }
        }
        let firstLine =
          lineOneOptions == 0
            ? `A and B had a total of ${total} at first.</p>`
            : `A has ${p.valueAFirst} while B has ${p.valueBFirst} at first</p>`;
        let unitSentence = `
      A is now ${p.unitA} times of B.</p>
      `;

        if (p.unitB > 1) {
          unitSentence = `A is now ${p.unitA}/${p.unitB} of B.</p>`;
        }
        displayProblem.innerHTML = `
      ${firstLine}
        ${
          p.type == "A"
            ? `A ${transferText} ${transferValueText} to B.</p>`
            : `A gave away ${p.transfer} to someone,</p> while B received ${p.transfer} from somewhere.</p>`
        }
        ${unitSentence}</p>
      `;
        if (lineOneOptions == 1) {
          p.question = ["AE", "BE"][genNumbers(2)];
        }

        if (p.question == "AF") {
          displayProblem.insertAdjacentHTML("beforeend", "What is A at first?");
        }
        if (p.question == "AE") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "What is A in the end?"
          );
        }
        if (p.question == "BF") {
          displayProblem.insertAdjacentHTML("beforeend", "What is B at first?");
        }
        if (p.question == "BE") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "What is B in the end?"
          );
        }
      }

      if (p.version == "valueEnd") {
        const total = p.valueAEnd + p.valueBEnd;
        let unitSentence = `
      A was ${p.unitA} times of B at first.</p>
      `;

        if (p.unitB > 1) {
          unitSentence = `A was ${p.unitA}/${p.unitB} of B at first.</p>`;
        }
        const lineThreeOptions = genNumbers(2);
        const transferText = genNumbers(2) == 0 ? "transferred" : "gave";
        let transferValueText = p.transfer;
        if (p.question == "AF" || p.question == "BF") {
          if (lineThreeOptions == 1) {
            transferValueText = "some";
          } else {
            transferValueText = ["some", p.transfer][genNumbers(2)];
          }
        }

        let thirdLine =
          lineThreeOptions == 0
            ? `A and B has a total of ${total} in the end.</p>`
            : `A has ${p.valueAEnd - p.transfer} while B has ${
                p.valueBEnd + p.transfer
              } in the end.</p>`;

        //DISPLAYPROBLEM!
        displayProblem.innerHTML = `
        ${unitSentence}
        A ${transferText} ${transferValueText} to B.</p>
        ${thirdLine}
        `;
        if (lineThreeOptions == 1) {
          p.question = ["AF", "BF"][genNumbers(2)];
        }

        if (p.question == "AF") {
          displayProblem.insertAdjacentHTML("beforeend", "What is A at first?");
        }
        if (p.question == "AE") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "What is A in the end?"
          );
        }
        if (p.question == "BF") {
          displayProblem.insertAdjacentHTML("beforeend", "What is B at first?");
        }
        if (p.question == "BE") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "What is B in the end?"
          );
        }
      }
    }
    //SIMULTANEOUS EQUATION
    if (setting == 5) {
      let totalAOne = p.varA;
      let totalATwo = p.varA;
      let totalBOne = p.varB;
      let totalBTwo = p.varB;
      [p.sceneAOne, totalAOne] = simplify(p.sceneAOne, totalAOne);
      [p.sceneATwo, totalATwo] = simplify(p.sceneATwo, totalATwo);
      [p.sceneBOne, totalBOne] = simplify(p.sceneBOne, totalBOne);
      [p.sceneBTwo, totalBTwo] = simplify(p.sceneBTwo, totalBTwo);

      if (totalAOne != totalATwo || totalBOne != totalBTwo) {
        console.log("Different denominators");
        return updateCalc();
      }
      // const commonDenoA = commonDeno(totalAOne, totalATwo)
      // const multiplierA = commonDenoA/totalAOne
      // const commonDenoB = commonDeno(totalBOne, totalBTwo)
      // const multiplierA = commonDenoB/totalBOne
      let firstScene = p.sceneAOne * p.unitA + p.sceneBOne * p.unitB;
      let secondScene = p.sceneATwo * p.unitA + p.sceneBTwo * p.unitB;
      if (p.type == "A") {
        // if (firstScene == secondScene) {
        //   console.log("Clashing total");
        //   return updateCalc();
        // }
        if (p.sceneAOne == p.sceneOne && p.sceneATwo == p.sceneBTwo) {
          return updateCalc();
        }
        displayProblem.innerHTML = `
        ${p.sceneAOne}/${totalAOne} girls and ${p.sceneBOne}/${totalBOne} boys is ${firstScene}.</p>
        ${p.sceneATwo}/${totalATwo} girls and ${p.sceneBTwo}/${totalBTwo} boys is ${secondScene}.</p>
        `;
        p.varA = totalAOne;
        p.varB = totalBOne;
      }
      if (p.type == "B") {
        if (totalATwo == totalBTwo && totalATwo == 2) {
          return updateCalc();
        }
        firstScene = totalATwo * p.unitA + totalBTwo * p.unitB;
        const sceneATwoRemaining = totalATwo - p.sceneATwo;
        const sceneBTwoRemaining = totalBTwo - p.sceneBTwo;
        secondScene =
          sceneATwoRemaining * p.unitA + sceneBTwoRemaining * p.unitB;
        displayProblem.innerHTML = `
        There is a a total of ${firstScene} students.</p>
        If ${p.sceneATwo}/${totalATwo} girls and ${p.sceneBTwo}/${totalBTwo} boys left the school.</p>
        There would be ${secondScene} students remaining.</p>
        `;
        p.varA = totalATwo;
        p.varB = totalBTwo;
      }
      if (totalATwo == 2 && totalBTwo == 2) {
        console.log("Half half");
        return updateCalc();
      }
      if (((totalAOne == totalATwo) == totalBOne) == totalBTwo) {
        console.log("Same numbers");
        return updateCalc();
      }
      //QUESTION
      if (p.choose == "boys") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How many boys are there?"
        );
      } else {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          "How many girls are there?"
        );
      }
    }
    //INTERNAL TRANSFER: DOUBLE EFFECT
    if (setting == 6) {
      const diffValue = p.varA - p.varB;
      const diffState = diffValue > 0 ? "more than" : "less than";
      const objOne = diffValue > 0 ? "A" : "B";
      const objTwo = diffValue > 0 ? "B" : "A";
      if (p.version == "more than half") {
        p.transfer =
          Math.abs(diffValue) / 2 + genNumbers(Math.abs(diffValue) - 1) + 1;
      }
      if (p.version == "more than diff") {
        const add = p.varA > p.varB ? p.varB : p.varA;
        p.transfer = Math.abs(diffValue) + genNumbers(add);
      }
      let objOneEnd = undefined;
      let objTwoEnd = undefined;
      if (objOne == "A") {
        objOneEnd = p.varA - p.transfer;
        objTwoEnd = p.varB + p.transfer;
      }
      if (objOne == "B") {
        objOneEnd = p.varA + p.transfer;
        objTwoEnd = p.varB - p.transfer;
      }
      const diffEnd = objTwoEnd - objOneEnd;
      displayProblem.innerHTML = `
      A is ${Math.abs(diffValue)} ${diffState} B.</p>
      ${objOne} transferred some to ${objTwo}.</p>
      ${objTwo} is ${Math.abs(diffEnd)} more than ${objOne} in the end.</p>
      How much was transferred?
      `;
    }
  }
  // Display
  if (level == "heuFive") {
    calculatorSymbol.classList.remove("hidden");
    if (
      setting == 1 ||
      (setting == 9 && p.rollz == 1) ||
      (range == 1 && p.rollz == 1)
    ) {
      normalDisplay();
      while (p.quantityOne == p.quantityTwo) {
        p.quantityOne = genNumbers(10) + 1;
      }
      while (p.difference == 0) {
        p.difference = genNumbers(10) - 5;
      }

      if (p.difference > 0) {
        p.adjustment = p.difference * p.quantityOne;
      } else {
        p.adjustment = -p.difference * p.quantityTwo;
      }
      p.adjustedTotal = p.total - p.adjustment;
      p.groupTotal = p.quantityOne + p.quantityTwo;
      p.group = p.adjustedTotal / p.groupTotal;

      if (p.group % 1 != 0) {
        updateProblems();
        return console.log("Question changed!");
      }

      displayProblem.innerHTML = `
      Each girl receive ${p.quantityOne} sweets.</br>
      Each boy receive ${p.quantityTwo} sweets.</br>
      There are ${Math.abs(p.difference)} ${
        p.difference > 0 ? "more" : "less"
      } girls than boys.</br>
      A total of ${p.total} sweets were given out.
      How many ${p.choice} are there?
      `;
    }

    if (
      setting == 2 ||
      (setting == 9 && p.rollz == 2) ||
      (range == 1 && p.rollz == 2)
    ) {
      normalDisplay();
      p.rightQ = genNumbers(p.questions) + 1;
      p.total = p.marks * p.rightQ - p.deduct * (p.questions - p.rightQ);
      p.allRight = p.questions * p.marks;
      p.bDifference = p.allRight - p.total;
      if (p.bDifference <= 0 || p.total <= 0) {
        updateProblems();
        return console.log("Question changed!");
      }
      p.sDifference = p.marks + p.deduct;
      p.wrong = p.bDifference / p.sDifference;
      p.correct = p.questions - p.wrong;
      // if (p.wrong % 1 != 0 || p.wrong < 0){
      //   updateProblems()
      //   return console.log("Question changed!")
      // }

      displayProblem.innerHTML = `
      There are ${p.questions} questions.<br>
      ${p.marks} marks is award if correct.</br>
      ${p.deduct} marks is deducted if wrong.</br>
      Someone scored ${p.total} marks.<br>
      How many questions did ${genNumbers(2) == 0 ? "he" : "she"} get ${
        p.choice
      }?
      `;
    }

    if (
      setting == 3 ||
      (setting == 9 && p.rollz == 3) ||
      (range == 1 && p.rollz == 3)
    ) {
      normalDisplay();
      let chosenRoll = genNumbers(p.objects.length);
      p.chosenOne = p.objects[chosenRoll][0];
      p.chosenTwo = p.objects[chosenRoll][1];
      p.variableName = p.objects[chosenRoll][4];
      p.chosenOneQ = Math.abs(p.objects[chosenRoll][2]);
      p.chosenTwoQ = Math.abs(p.objects[chosenRoll][3]);
      p.total = p.chosenOneN + p.chosenTwoN;
      p.totalOne = p.chosenOneQ * p.chosenOneN;
      p.totalTwo = p.chosenTwoQ * p.chosenTwoN;
      p.difference = p.totalOne - p.totalTwo;
      if (p.difference == 0) {
        updateProblems();
        return console.log("Question change");
      }

      displayProblem.innerHTML = `
      There are ${p.total} ${p.chosenOne} and ${p.chosenTwo}.<br>
      Total number of ${p.variableName} for ${p.chosenOne} is ${Math.abs(
        p.difference
      )} ${p.difference > 0 ? "more" : "less"} than the total number of ${
        p.variableName
      } for ${p.chosenTwo}.</br>
      How many ${p.choice == 0 ? p.chosenOne : p.chosenTwo} are there?
      `;
    }

    if (
      setting == 4 ||
      (setting == 9 && p.rollz == 4) ||
      (range == 1 && p.rollz == 4)
    ) {
      normalDisplay();
      while (p.objectOneV == p.objectTwoV) {
        p.objectOneV = genNumbers(10) + 2;
      }
      if (p.objectOneV > p.objectTwoV) {
        p.sDifference = p.objectOneV - p.objectTwoV;
      } else {
        p.sDifference = -(p.objectOneV - p.objectTwoV);
      }

      p.bDifference = p.sDifference * (genNumbers(9) + 2);

      let lastSentence = undefined;
      if (p.choice == 0) {
        lastSentence = `How many ${p.objectOne}s are there?`;
      }
      if (p.choice == 1) {
        lastSentence = `How many ${p.objectTwo}s are there?`;
      }
      if (p.choice == 2) {
        lastSentence = `How many ${p.objectOne}s and ${p.objectTwo}s are there?`;
      }
      if (p.choice == 3) {
        lastSentence = `What is the total value of ${p.objectOne}s?`;
      }
      if (p.choice == 4) {
        lastSentence = `What is the total value of ${p.objectTwo}s?`;
      }
      if (p.choice == 5) {
        lastSentence = `What is the total value of ${p.objectOne}s and ${p.objectTwo}s.`;
      }

      displayProblem.innerHTML = `
      There is equal number of ${p.objectOne} and ${p.objectTwo}.</br>
      Each ${p.objectOne} is ${p.objectOneV}.</br>
      Each ${p.objectTwo} is ${p.objectTwoV}.</br>
      The difference between them is ${p.bDifference}.</br>
      ${lastSentence}
      `;
    }

    if (
      setting == 5 ||
      (setting == 9 && p.rollz == 5) ||
      (range == 1 && p.rollz == 5)
    ) {
      normalDisplay();
      console.log(p.position);
      while (p.objectOneM == p.objectTwoM) {
        p.objectOneM = genNumbers(4) + 2;
        p.objectTwoM = genNumbers(4) + 2;
      }
      while (p.objectOneQ == p.objectTwoQ || p.objectOneQ < p.objectTwoQ) {
        p.objectOneQ = genNumbers(9) + 2;
        p.objectTwoQ = genNumbers(4) + 2;
      }

      p.objectOneC = p.objects[p.position][0];
      p.objectTwoC = p.objects[p.position][1];
      p.objectOneFQ = p.objectOneQ * p.objectOneM;
      p.objectTwoFQ = p.objectTwoQ * p.objectTwoM;
      p.objectOneV = p.objectOneFQ * (genNumbers(5) + 2);
      p.objectTwoV = p.objectTwoFQ * (genNumbers(5) + 2);

      p.objectTwoAV = p.objectTwoQ * p.objectOneM;
      p.objectTwoLQ = p.objectTwoAV + p.objectTwoFQ;
      p.total = p.objectTwoLQ * p.oneUnit;

      displayProblem.innerHTML = `
        ${p.objectOneQ} ${p.objectOneC} is the same as ${p.objectTwoQ} ${
        p.objectTwoC
      }.</br>
        ${p.objectOneFQ} ${p.objectOneC} and ${p.objectTwoFQ} ${
        p.objectTwoC
      } is ${p.total}.</br>
        What is 1 ${p.objects[p.position][2]}?

      `;
    }

    if (
      setting == 6 ||
      (setting == 9 && p.rollz == 6) ||
      (range == 1 && p.rollz == 6)
    ) {
      normalDisplay();
      if (p.type == 0) {
        displayProblem.innerHTML = `
        There are ${p.people} people at a ${p.location}.<p>
        If they were to shake hands with each other.</p>
        How many handshakes would there be?
        `;
      }

      if (p.type == 1) {
        displayProblem.innerHTML = `
        There were ${p.people} teams at a game.</p>
        If they were to each play a match with each other.</p>
        How many matches would there be?
        `;
      }
    }

    if (
      setting == 7 ||
      (setting == 9 && p.rollz == 7) ||
      (range == 1 && p.rollz == 7)
    ) {
      normalDisplay();
      if (p.version == 1) {
        if (p.bonus > p.set) {
          return updateProblems();
        }

        p.groups = p.groups[p.dice];
        p.groups2 = p.groups2[p.dice];
        p.oneGroup = p.set + p.bonus;
        p.oneGroupCost = p.set * p.cost;
        p.quotient = Math.floor(p.totalItems / p.oneGroup);
        p.remainder = p.totalItems % p.oneGroup;

        if (p.remainder == 0 || p.remainder * p.cost >= p.oneGroupCost) {
          return updateProblems();
        }
        p.totalCost = p.oneGroupCost * p.quotient + p.remainder * p.cost;
        displayProblem.innerHTML = `
      Every ${p.set} ${p.groups} purchased, another ${
          p.bonus
        } would be given for free.</p>
      Each ${p.groups2} cost $${p.cost}.</p>
      The total cost was $${p.totalCost}.</p>
      How many ${p.groups.split(" ")[0]} in total were there?</p>
      `;
      }
      if (p.version == 2) {
      }
    }
    // DIFFERENT QUANTITY WITH DIFFERENCE
    if (setting == 8) {
      normalDisplay();
      while (p.varAQuan == p.varBQuan) {
        p.varAQuan = genNumbers(4) + 2;
        p.varBQuan = genNumbers(4) + 1;
      }
      while (p.varAValue == p.varBValue) {
        p.varAValue = genNumbers(10) + 5;
        p.varBValue = genNumbers(10) + 5;
      }
      // FIRSTLINE (UNIT SENTENCE)
      let firstLine = undefined;
      let typeOne = ["normal", "ratio", "fractions", "percentage"][
        genNumbers(4)
      ];
      if (p.varBQuan == 1) {
        typeOne = "normal";
      }
      [p.varAQuan, p.varBQuan] = simplify(p.varAQuan, p.varBQuan);
      if (typeOne == "normal") {
        p.varBQuan = 1;
        firstLine = `The number of A is ${p.varAQuan} times of B.</p>`;
      }
      if (typeOne == "ratio") {
        // p.varBQuan = 1;
        firstLine = `The number of A is ${p.varAQuan} : ${p.varBQuan} of B.</p>`;
      }
      if (typeOne == "fractions") {
        // p.varBQuan = 1;
        firstLine = `The number of A is ${p.varAQuan}/${p.varBQuan} of B.</p>`;
      }
      if (typeOne == "percentage") {
        let percentage = (p.varAQuan / p.varBQuan) * 100;
        while (percentage % 1 != 0) {
          p.varAQuan = genNumbers(4) + 2;
          p.varBQuan = genNumbers(4) + 1;
          percentage = (p.varAQuan / p.varBQuan) * 100;
        }
        firstLine = `The number of A is ${percentage}% of B.</p>`;
      }

      // THIRD LINE (DIFFERENE)
      const totalA = p.varAQuan * p.varAValue * p.groups;
      const totalB = p.varBQuan * p.varBValue * p.groups;
      const comparison = totalA > totalB ? "more" : "less";
      const difference = Math.abs(totalA - totalB);
      if (difference == 0) {
        return updateCalc();
      }
      // LASTLINE
      let questionLine = undefined;
      if (p.question == "quantityA") {
        questionLine = `How many As are there?`;
      }
      if (p.question == "quantityB") {
        questionLine = `How many Bs are there?`;
      }
      if (p.question == "valueA") {
        questionLine = `What is the total value of As?`;
      }
      if (p.question == "valueB") {
        questionLine = `What is the total value of Bs?`;
      }
      if (p.question == "totalQuantity") {
        questionLine = `How many As and Bs are there in total?`;
      }
      if (p.question == "totalValue") {
        questionLine = `What is the total?`;
      }

      displayProblem.innerHTML = `
      ${firstLine}
      Each A is ${p.varAValue} and each B is ${p.varBValue}.</p>
      The total value of A is ${difference} ${comparison} than the total value of B.</p>
      ${questionLine}
      `;
    }
  }

  // DISPLAY
  if (level == "heuFiveb") {
    calculatorSymbol.classList.remove("hidden");
    if (setting == 1) {
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      [p.numeThree, p.denoThree] = simplify(p.numeThree, p.denoThree);
      if (
        p.situationThree == "+" &&
        p.situationTwo == "+" &&
        p.situationOne == "+"
      ) {
        if (p.numLast < p.numThree) return updateCalc();
        const third = p.numLast + p.numThree;
        if (third % (p.denoThree - p.numeThree) != 0) return updateCalc();
        const second =
          (third / (p.denoThree - p.numeThree)) * p.denoThree + p.numTwo;
        if (second % (p.denoTwo - p.numeTwo) != 0) return updateCalc();
        const first = (second / (p.denoTwo - p.numeTwo)) * p.denoTwo + p.numOne;
        if (first % (p.denoOne - p.numeOne) != 0) return updateCalc();
        p.answer = (first / (p.denoOne - p.numeOne)) * p.denoOne;
        console.log(third, second, first, p.answer);
      }
      if (
        p.situationThree == "-" &&
        p.situationTwo == "-" &&
        p.situationOne == "-"
      ) {
        if (p.numLast < p.numThree) return updateCalc();
        const third = p.numLast - p.numThree;
        if (third % (p.denoThree - p.numeThree) != 0) return updateCalc();
        const second =
          (third / (p.denoThree - p.numeThree)) * p.denoThree - p.numTwo;
        if (second % (p.denoTwo - p.numeTwo) != 0 || second <= 0)
          return updateCalc();
        const first = (second / (p.denoTwo - p.numeTwo)) * p.denoTwo - p.numOne;
        if (first % (p.denoOne - p.numeOne) != 0 || third <= 0)
          return updateCalc();
        p.answer = (first / (p.denoOne - p.numeOne)) * p.denoOne;
        if (p.answer < 0) {
          console.log("Negative numbers");
          return updateCalc();
        }
      }
      displayProblem.innerHTML = `
      Person A took ${p.numeOne}/${p.denoOne} ${
        p.situationOne == "+"
          ? `and another $${p.numOne}`
          : `and put back $${p.numOne}`
      } from the total.</p>
      Person B took ${p.numeTwo}/${p.denoTwo} ${
        p.situationTwo == "+"
          ? `and another $${p.numTwo}`
          : `and put back $${p.numTwo}`
      } from the remainder.</p>
      Person C took ${p.numeThree}/${p.denoThree} ${
        p.situationThree == "+"
          ? `and another $${p.numThree}`
          : `and put back $${p.numThree}`
      } from the remainder.</p>
      There was $${p.numLast} left.</p>
      What was the total at first?</p>
      
      `;
    }
    if (setting == 2) {
      // A gives to B, B to C, C to A
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      [p.numeThree, p.denoThree] = simplify(p.numeThree, p.denoThree);
      const each = p.total / 3;
      const two_C = (each / (p.denoThree - p.numeThree)) * p.denoThree; // C
      const two_diff = two_C - each;
      const two_A = each - two_diff; //Take back from A
      const two_B = each;
      if (two_A <= 0 || two_B <= 0 || two_C <= 0) return updateCalc();
      if (two_A % 1 != 0 || two_B % 1 != 0 || two_C % 1 != 0)
        return updateCalc();

      const three_B = (two_B / (p.denoTwo - p.numeTwo)) * p.denoTwo;
      const three_diff = three_B - two_B;
      const three_C = two_C - three_diff;
      const three_A = two_A;
      if (three_A <= 0 || three_B <= 0 || three_C <= 0) return updateCalc();
      if (three_A % 1 != 0 || three_B % 1 != 0 || three_C % 1 != 0)
        return updateCalc();
      const four_A = (three_A / (p.denoOne - p.numeOne)) * p.denoOne;
      const four_diff = four_A - three_A;
      const four_B = three_B - four_diff;
      const four_C = three_C;
      if (four_A <= 0 || four_B <= 0 || four_C <= 0) return updateCalc();
      if (four_A % 1 != 0 || four_B % 1 != 0 || four_C % 1 != 0)
        return updateCalc();
      p.answer = four_A;
      if (p.answer < 0) return updateCalc();
      displayProblem.innerHTML = `
      People A, B and C have a total of $${p.total.toLocaleString(
        "en-US"
      )} at first.</p>
      A gave ${p.numeOne}/${p.denoOne} to B.</p>
      B then gave ${p.numeTwo}/${p.denoTwo} to C.</p>
      C then gave ${p.numeThree}/${p.denoThree} to A.</p>
      All 3 people ended with the same amount.</p>
      How much did A have at first?
      `;
    }

    // WORKING BACKWARDS TYPE 3 (INDEPENDENT)
    if (setting == 3) {
      // let sitOne = undefined;
      // let sitTwo = undefined;
      // let sitThree = undefined;
      // let sitFour = undefined;

      const workingBackwardsT3 = (
        operator,
        variable,
        increase,
        decrease,
        times,
        divide
      ) => {
        if (operator == "-") {
          return `${variable} decreased by ${decrease}.`;
        }
        if (operator == "+") {
          return `${variable} increased by ${increase}.`;
        }
        if (operator == "x") {
          return `${variable} became ${times} times its previous value.`;
        }
        if (operator == "/") {
          return `${variable} decreased by ${divide} times.`;
        }
      };
      let operations = ["+", "-", "x", "/"];
      p.first = operations[genNumbers(4)];
      const indexFirst = operations.indexOf(p.first);
      operations.splice(indexFirst, 1);
      const sitOne = workingBackwardsT3(
        p.first,
        "A",
        p.increase,
        p.decrease,
        p.times,
        p.divide
      );

      p.second = operations[genNumbers(3)];
      const indexSecond = operations.indexOf(p.second);
      operations.splice(indexSecond, 1);
      const sitTwo = workingBackwardsT3(
        p.second,
        "B",
        p.increase,
        p.decrease,
        p.times,
        p.divide
      );

      p.third = operations[genNumbers(2)];
      const indexThird = operations.indexOf(p.third);
      operations.splice(indexThird, 1);
      const sitThree = workingBackwardsT3(
        p.third,
        "C",
        p.increase,
        p.decrease,
        p.times,
        p.divide
      );

      p.fourth = operations[genNumbers(1)];
      const indexFourth = operations.indexOf(p.fourth);
      operations.splice(indexFourth, 1);
      const sitFour = workingBackwardsT3(
        p.fourth,
        "D",
        p.increase,
        p.decrease,
        p.times,
        p.divide
      );

      const totalUnit = 1 + p.times * p.divide + p.times * 2;
      console.log(totalUnit);
      p.total = totalUnit * (genNumbers(50) + 40) - p.increase + p.decrease;
      p.unit = (p.total + p.increase - p.decrease) / totalUnit;
      console.log(p.first, p.second, p.third, p.fourth);
      displayProblem.innerHTML = `
      The total of 4 variables is ${p.total}.</p>
      ${sitOne}</p>
      ${sitTwo}</p>
      ${sitThree}</p>
      ${sitFour}</p>
      All 4 variables became the same in the end.</p>
      What is ${p.choose} at first?</p>

      `;
    }
    // EITHER OR
    if (setting == 4) {
      if (p.quanB < p.quanA) [p.quanA, p.quanB] = [p.quanB, p.quanA];
      if (p.quanB == p.quanA) p.quanA += 1;
      const first = p.quanA * p.multiplierA;
      p.second = p.quanB * p.multiplierA;
      p.third = p.quanA * p.multiplierB;
      // const fourth = p.quanB * p.multiplierB;
      let answer = p.second - ((p.third / p.quanA) * p.quanB + p.fourth);

      if (p.version == 0) {
        displayProblem.innerHTML = `
        A school bus can carry either ${first} ${p.varA} or ${p.second} ${
          p.varB
        }.</p>
        </p>
        There are already ${p.third} ${p.varA} and ${p.fourth} ${
          p.varB
        } on the bus.</p>
        ${
          answer >= 0
            ? `How many more ${p.varB} can board the bus?`
            : `How many ${p.varB} have to alight from the bus?`
        }`;
      }
      if (p.version == 1) {
        displayProblem.innerHTML = `
        A shelf can hold either ${first} ${p.varA} or ${p.second} ${p.varB}.</p>
        </p>
        There are already ${p.third} ${p.varA} and ${p.fourth} ${
          p.varB
        } on the shelf.</p>
        ${
          answer >= 0
            ? `How many more ${p.varB} can be placed on it?`
            : `How many ${p.varB} have to be removed?`
        }`;
      }
      if (p.version == 2) {
        displayProblem.innerHTML = `
        A pencil case can hold either ${first} ${p.varA} or ${p.second} ${
          p.varB
        }.</p>
        </p>
        There are already ${p.third} ${p.varA} and ${p.fourth} ${
          p.varB
        } in the pencil case.</p>
        ${
          answer >= 0
            ? `How many more ${p.varB} can be placed on it?`
            : `How many ${p.varB} have to be removed?`
        }`;
      }
      if (p.version == 3) {
        displayProblem.innerHTML = `
        A bag can hold either ${first} ${p.varA} or ${p.second} ${p.varB}.</p>
        </p>
        There are already ${p.third} ${p.varA} and ${p.fourth} ${
          p.varB
        } in the bag.</p>
        ${
          answer >= 0
            ? `How many more ${p.varB} can be placed on it?`
            : `How many ${p.varB} have to be removed?`
        }`;
      }
    }

    // UNCHANGED TOTAL (IF)
    if (setting == 5) {
      const object = ["marbles", "pencils", "erasers"][genNumbers(3)];
      // const firstA = p.unitAFirst * p.multiplier;
      // const firstB = p.unitBFirst * p.multiplier;
      const transA = genNumbers(p.valueA - 10) + 10;
      let [unitAFirst, unitBFirst] = simplify(
        p.valueA - transA,
        p.valueB + transA
      );
      if (unitAFirst > 20 || unitBFirst > 20) {
        console.log("Units too big!");
        return updateCalc();
      }
      const transB = genNumbers(p.valueB - 10) + 10;
      let [unitAEnd, unitBEnd] = simplify(p.valueA + transB, p.valueB - transB);
      // [unitAEnd, unitBEnd] = simplify(unitAEnd, unitBEnd);
      if (unitAEnd > 20 || unitBEnd > 20) {
        console.log("Units too big!");
        return updateCalc();
      }
      if (transA == transB) {
        console.log("Same transfer value");
        return updateCalc();
      }
      let commonNumbers = commonDeno(
        unitAFirst + unitBFirst,
        unitAEnd,
        unitBEnd
      );
      if (
        unitAFirst <= 0 ||
        unitBFirst <= 0 ||
        unitAEnd <= 0 ||
        unitBEnd <= 0
      ) {
        console.log("Unit is zero");
        return updateCalc();
      }
      if (commonNumbers > 100) {
        console.log("2) Units too big!");
        return updateCalc();
      }
      displayProblem.innerHTML = `
        A and B have some ${object}.</p>
      If A gave ${transA} ${object} to B, the ratio of A to B is ${unitAFirst} : ${unitBFirst}.</p>
      If B gave ${transB} ${object} to A, the ratio of A to B is ${unitAEnd} : ${unitBEnd}.</p>
      What is the value of ${p.question == "A" ? "A" : "B"}?</p>
      `;
    }
  }
  // DISPLAY
  if (level == "heuSix") {
    calculatorSymbol.classList.remove("hidden");
    normalDisplay();
    // LOWEST COMMON TIME
    if (setting == 1) {
      const timeUnits = ["h", "mins"];
      if (p.type == "merge") {
        if (p.version == "paint") {
          displayProblem.innerHTML = `
          Person A takes ${p.timeA} ${timeUnits[0]} to paint a house.</p>
          Person B takes ${p.timeB} ${timeUnits[0]} to paint the same house.</p>
          How long would it take for them to paint the house together?</p>
          `;
        }
        if (p.version == "tap") {
          displayProblem.innerHTML = `
          Tap A takes ${p.timeA} ${timeUnits[1]} to fill a beaker.</p>
          Tap B takes ${p.timeB} ${timeUnits[1]} to fill the same beaker.</p>
          How long would it take for both taps to fill the same beaker together?</p>
          `;
        }
      }
      if (p.type == "split") {
        p.total = genNumbers(5) + 5;
        p.timeA = p.total + genNumbers(5) + 1;
        if (p.version == "paint") {
          displayProblem.innerHTML = `
          Person A and B took ${p.total} ${timeUnits[0]} to paint a house together.</p>
          Person A takes ${p.timeA} ${timeUnits[0]} to paint the same house alone.</p>
          How long would it take for Person B to paint the house by himself?</p>
          `;
        }
        if (p.version == "tap") {
          displayProblem.innerHTML = `
          Tap A and B took ${p.total} ${timeUnits[1]} to fill a beaker together.</p>
          Tap A takes ${p.timeA} ${timeUnits[1]} to fill the same beaker itself.</p>
          How long would it take for Tap B to fill the beaker by itself?</p>
          `;
        }
      }
      displayProblem.insertAdjacentHTML(
        "beforeend",
        "<i>Leave your answer in mixed fraction if needed.</i>"
      );
    }
    //CYCLE
    if (setting == 2) {
      //CHECK
      if ((p.duration / p.people) % 1 != 0) {
        console.log("Not whole");
        return updateCalc();
      }
      const timeZone = genNumbers(2) == 0 ? "a.m" : "p.m";
      const hoursDuration = Math.floor(p.duration / 60);
      const minsDuration = p.duration % 60;
      const endHours = p.startHour + hoursDuration;
      const endMins = p.startMins + minsDuration;

      if (minsDuration >= 60) {
        endMins -= 60;
        endHours += 1;
      }
      if (p.people >= p.active * p.courts) {
        p.version == 2;
      } else {
        p.version = genNumbers(2);
      }

      if (p.version == 0) {
        displayProblem.innerHTML = `
      There are ${p.people} people playing a game from ${p.startHour}.${p.startMins}${timeZone} to ${endHours}.${endMins}${timeZone}.</p>
      Only ${p.active} of them can be playing each time.</p>
      How much time did each of them get to play?</p>
      `;
      }
      if (p.version == 1) {
        displayProblem.innerHTML = `
      There are ${p.people} people playing a game for ${p.duration} minutes.</p>
      Only ${p.active} of them can be playing each time.</p>
      How much time did each of them get to play?</p>
      `;
      }

      if (p.version == 2) {
        if (p.people % (p.active * p.courts) == 0) p.active -= 1;
        displayProblem.innerHTML = `
      There are ${p.people} people playing a game for ${p.duration} minutes.</p>
      Each court only  allows ${p.active} of them can be playing each time.</p>
      There are ${p.courts} courts.</p>
      How much time did each of them get to play?</p>
      `;
      }
    }
    // REPEATED IDENTITY TYPE 3
    if (setting == 3) {
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      if (p.numeA == p.numeB && p.denoA == p.denoB) {
        console.log("Same numerator and denominator");
        return updateCalc();
      }
      const onlyB = p.denoA - p.numeA;
      displayProblem.innerHTML = `
  Students have 2 activities to choose from.</p>
  ${p.actA.charAt(0).toUpperCase() + p.actA.slice(1)} and ${p.actB}.</p>
  ${p.numeA}/${p.denoA} chose ${p.actA}.</p>
  ${p.numeB}/${p.denoB} chose ${p.actB}.</p>
  `;
      // if (p.question == "A")
      //   displayProblem.insertAdjacentHTML(
      //     "beforeend",
      //     `What fraction of students choose ${p.actA} only?`
      //   );
      // if (p.question == "B")
      //   displayProblem.insertAdjacentHTML(
      //     "beforeend",
      //     `What fraction of students choose ${p.actB} only?`
      //   );
      if (p.question == "Both")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What fraction of students choose both activities?`
        );
    }

    //SNAKE AND LADDER
    if (setting == 4) {
      const distance = (p.positive - p.negative) * p.sets + p.positive;
      if (p.version == "human") {
        const person = [...boyNames, ...girlNames][genNumbers(20)];

        let gender = "he";
        if (girlNames.includes(person)) gender = "she";
        displayProblem.innerHTML = `
        ${person} is trying to reach a point ${distance} m away.</p>
        Every ${p.pTime} seconds ${gender} swims ${p.positive} m,</p>
        ${gender} is pushed back ${p.negative} m.</p>
        How long will it take for ${person} to reach?
        `;
      }
      if (p.version == "snail") {
        displayProblem.innerHTML = `
        An snail is trying to a climb a wall of ${distance} cm.</p>
        Every ${p.pTime} mins it climbs up ${p.positive} cm.</p>
        It then takes a break for ${p.nTime} mins, causing it to slides down ${p.negative} cm.</p>
        How long will it take for snail to reach?
        `;
      }
    }
    //CAUSE AND EFFECT
    if (setting == 5) {
      normalDisplay();
      const boy = boyNames[genNumbers(boyNames.length)];
      if (p.walkFirstSet == p.walkSecondSet) {
        console.log("Same steps");
        return updateCalc();
      }
      const walk = p.ran + p.walk;
      console.log(`Walk: ${walk}, ran: ${p.ran}`);
      const ranFirstSet = p.flightTotal - p.walkFirstSet;
      const durationFirstSet = p.walkFirstSet * walk + ranFirstSet * p.ran;
      const ranSecondSet = p.flightTotal - p.walkSecondSet;
      const durationSecondSet = p.walkSecondSet * walk + ranSecondSet * p.ran;
      displayProblem.innerHTML = `
      ${boy} took ${durationFirstSet} seconds to walk up ${
        p.walkFirstSet
      } steps and ran up the rest.</br>
      At the next flight of stairs, he took ${durationSecondSet} seconds to walk up ${
        p.walkSecondSet
      } steps and ran up the rest.</br>
      How long would he take if he ${
        p.type == "ran" ? "ran" : "walked"
      } up one entire flight of stairs?
      `;
    }

    // IDENTICAL EFFECT: DISCOUNT
    if (setting == 6) {
      normalDisplay();
      const discountedPriceA = (p.originalA * (100 - p.discount)) / 100;
      const discountedPriceB = (p.originalB * (100 - p.discount)) / 100;
      const diffEnd = Math.abs(discountedPriceA - discountedPriceB);

      const decimalPlace = diffEnd.toString().split(".")[1];
      if (decimalPlace) {
        if (decimalPlace.length > 2) {
          console.log("Decimal place");
          return updateCalc();
        }
      }

      const item = ["shirt", "pant", "bag"][genNumbers(3)];
      displayProblem.innerHTML = `
      A ${item} cost $${p.originalA} at Shop A.</br>
      The same ${item} cost $${p.originalB} at Shop B.</br>
      Both shops had the same percentage discount on that item.</br>
      The difference between the discounted price of both items became $${diffEnd.toFixed(
        2
      )}.</br>
      What percentage discount was given?
      `;
    }
  }

  // DISPLAY
  if (level == "heuSixb") {
    normalDisplay();

    // SIMULTANEOUS EQUATION (PARTS AND UNITS) TYPE 1
    if (setting == 1) {
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(boyNames.length)];
      // const valueAFirst = p.unitsA;
      // const valueBFirst = p.unitsB;
      if (p.unitsA == p.unitsB) p.unitsB += 1;
      [p.unitsA, p.unitsB] = simplify(p.unitsA, p.unitsB);
      const valueAFirst = p.unitsA * p.multiplier;
      const valueBFirst = p.unitsB * p.multiplier;
      p.situationA = [-1, 1][genNumbers(2)] * (genNumbers(valueAFirst - 1) + 1);
      p.situationB = [-1, 1][genNumbers(2)] * (genNumbers(valueBFirst - 1) + 1);
      console.log(p.situationA, p.situationB);
      if (Math.abs(p.situationA) == Math.abs(p.situationB)) {
        return updateCalc();
      }
      // console.log(
      //   `A: ${valueAFirst}, unitA : ${p.unitsA}, multi: ${p.multiplier}, situationA: ${p.situationA}`
      // );
      // console.log(
      //   `B: ${valueBFirst}, unitB : ${p.unitsB}, multi: ${p.multiplier}, situationB: ${p.situationB}`
      // );
      let valueAEnd = valueAFirst + p.situationA;
      let valueBEnd = valueBFirst + p.situationB;
      // console.log(valueAEnd);
      // console.log(valueBEnd);
      // console.log(`Before: ${p.partsA} : ${p.partsB}`);
      let partsA = valueAEnd;
      let partsB = valueBEnd;
      [partsA, partsB] = simplify(partsA, partsB);

      // if (partsA > 15 || partsB > 15 || partsA <= 0 || partsB <= 0) {
      if (partsA > 15 || partsB > 15 || partsA == partsB) {
        console.log("Oops");
        return updateCalc();
      }
      console.log(partsA, partsB);
      displayProblem.innerHTML = `
      The ratio of ${personA} to ${personB} at first is ${p.unitsA} : ${
        p.unitsB
      }.</br>
      ${personA} ${p.situationA < 0 ? `spent` : "received another"} $${Math.abs(
        p.situationA
      )}.</br> 
      ${personB} ${p.situationB < 0 ? `spent` : "received another"} $${Math.abs(
        p.situationB
      )}.</br>
      Their ratio became ${partsA} : ${partsB} in the end.</br>
      `;
      if (p.question == "AF")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What does ${personA} have at first?`
        );
      if (p.question == "BF")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What does ${personB} have at first?`
        );
      if (p.question == "AE")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What does ${personA} have in the end?`
        );
      if (p.question == "BE")
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What does ${personB} have in the end?`
        );
    }
    //IDENTICAL QUANTITY WITH DIFFERENCE TYPE 3
    if (setting == 2) {
      if (p.personASmallSheets == p.personBSmallSheets) {
        console.log("Same number of sheets");
        return updateCalc();
      }
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(girlNames.length)];
      p.personALargeSheets = p.packets - p.personASmallSheets;
      p.personBLargeSheets = p.packets - p.personBSmallSheets;

      p.personATotal =
        p.personASmallSheets * p.small + p.personALargeSheets * p.large;
      p.personBTotal =
        p.personBSmallSheets * p.small + p.personBLargeSheets * p.large;
      console.log(p.personATotal, p.personBTotal);
      let lastDifference = undefined;
      let lastPart = undefined;
      // if A has more large sheets, B should be giving away)
      const diffAtFirst = Math.abs(p.personATotal - p.personBTotal);
      if (p.personALargeSheets > p.personBLargeSheets) {
        console.log("1");
        lastDifference = diffAtFirst + p.personBLargeSheets * p.large;
        lastPart = `If ${personB} gave away all her large stickers their difference would become ${lastDifference}.`;
      }
      if (p.personALargeSheets < p.personBLargeSheets) {
        console.log("2");
        lastDifference = diffAtFirst + p.personALargeSheets * p.large;
        lastPart = `If ${personA} gave away all his large stickers their difference would become ${lastDifference}.`;
      }
      displayProblem.innerHTML = `
      Stickers were sold only in big sheets of ${p.large} and small sheets of ${p.small}.</p>
      ${personA} and ${personB} bought the same number sheets.</p>
      ${personA} bought ${p.personASmallSheets} small sheets.</p>
      ${personB} bought ${p.personBSmallSheets} small sheets.</p>
      a) Whats the difference in the number of stickers between them.</p>
      b) ${lastPart}</p> 
      How many sheets of stickers did each of them buy?</p>
      
      `;
    }

    // MORE THAN / LESS THAN
    if (setting == 3) {
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      if (p.denoA == p.denoB) {
        return updateCalc();
      }
      const commonDenominator = commonDeno(p.denoA, p.denoB);
      p.varA = commonDenominator * p.unitOne * p.varAMul;
      p.varB = commonDenominator * p.unitOne * p.varBMul;
      if (p.varA == p.varB) {
        console.log("Same value");
        return updateCalc();
      }
      const difference = Math.abs(p.varA - p.varB);
      const comparison = p.varA > p.varB ? "more than" : "less than";
      if (p.varA > p.varB) {
        console.log("Ugly!");
        if (difference % p.denoA != 0) return updateCalc();
      } else {
        console.log("Ugly!");
        if (difference % p.denoB != 0) return updateCalc();
      }
      const fractionA = `${p.numeA}/${p.denoA}`;
      const fractionB = `${p.numeB}/${p.denoB}`;
      const percentageA = (p.numeA / p.denoA) * 100;
      const percentageB = (p.numeB / p.denoB) * 100;
      let unitA = fractionA;
      let unitB = fractionB;

      if (percentageA % 5 == 0) {
        console.log("Yes!");
        unitA = genNumbers(2) == 1 ? fractionA : `${percentageA}%`;
      } else {
        unitA = fractionA;
      }
      if (percentageB % 5 == 0) {
        console.log("Yes!");
        unitB = genNumbers(2) == 1 ? fractionB : `${percentageB}%`;
      } else {
        unitB = fractionB;
      }
      const endA = (p.varA / p.denoA) * (p.denoA - p.numeA);
      const endB = (p.varB / p.denoB) * (p.denoB - p.numeB);
      const comparisonEnd = endA > endB ? "more than" : "less than";
      const differenceEnd = Math.abs(endA - endB);
      displayProblem.innerHTML = `
      A is ${difference} ${comparison} B.</p>
      A gave away ${unitA}.</p>
      B gave away ${unitB}.</p>
      A is ${differenceEnd} ${comparisonEnd} B in the end.</p>
      What is ${p.question} at first?

      `;
    }

    // USING IT ALL
    if (setting == 4) {
      if (p.unitAF == p.unitBF || p.unitAS == p.unitBS) {
        console.log("Units identical");
        return updateCalc();
      }
      const answer = undefined;
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(boyNames.length)];
      let chosen = ["A", "B"][genNumbers(2)];
      let theBroke = undefined;
      let gender = undefined;
      let commonNumber = undefined;
      let newAF = undefined;
      let newBF = undefined;
      let newAS = undefined;
      let newBS = undefined;
      if (chosen == "A") {
        chosen = personA;
        theBroke = personB;
        gender = "she";
        if (p.unitBF == p.unitBS) {
          console.log("Unit already same");
          return updateCalc();
        }
        commonNumber = commonDeno(p.unitBF, p.unitBS);
        const firstMulti = commonNumber / p.unitBF;
        const secondMulti = commonNumber / p.unitBS;
        newAF = firstMulti * p.unitAF;
        newAS = secondMulti * p.unitAS;
        newBF = commonNumber;
        newBS = commonNumber;
        // console.log(newAF, newBF, newAS, newBS);
        if (
          (newAF > newAS && p.amountLeftFirst > p.amountLeftSecond) ||
          (newAF < newAS && p.amountLeftFirst < p.amountLeftSecond)
        ) {
          [p.amountLeftFirst, p.amountLeftSecond] = [
            p.amountLeftSecond,
            p.amountLeftFirst,
          ];
        }

        const differenceUnit = Math.abs(newAF - newAS);
        const differenceValue = Math.abs(
          p.amountLeftFirst - p.amountLeftSecond
        );
        const oneUnit = differenceValue / differenceUnit;
        // console.log(oneUnit);
        if (oneUnit % 1 != 0) {
          console.log("Not whole");
          return updateCalc();
        }
        if (p.question == "A") {
          p.answer = oneUnit * newAF + p.amountLeftFirst;
        }
        if (p.question == "B") {
          p.answer = oneUnit * newBF;
        }
      }
      if (chosen == "B") {
        chosen = personB;
        theBroke = personA;
        gender = "his";
        if (p.unitAF == p.unitAS) {
          console.log("Unit already same");
          return updateCalc();
        }
        commonNumber = commonDeno(p.unitAF, p.unitAS);
        const firstMulti = commonNumber / p.unitAF;
        const secondMulti = commonNumber / p.unitAS;
        newBF = firstMulti * p.unitBF;
        newBS = secondMulti * p.unitBS;
        newAF = commonNumber;
        newAS = commonNumber;
        // console.log(newAF, newBF, newAS, newBS);
        if (
          (newBF > newBS && p.amountLeftFirst > p.amountLeftSecond) ||
          (newBF < newBS && p.amountLeftFirst < p.amountLeftSecond)
        ) {
          [p.amountLeftFirst, p.amountLeftSecond] = [
            p.amountLeftSecond,
            p.amountLeftFirst,
          ];
        }
        const differenceUnit = Math.abs(newBF - newBS);
        const differenceValue = Math.abs(
          p.amountLeftFirst - p.amountLeftSecond
        );
        const oneUnit = differenceValue / differenceUnit;
        // console.log(oneUnit);
        if (oneUnit % 1 != 0) {
          console.log("Not whole");
          return updateCalc();
        }
        // console.log(oneUnit);
        if (p.question == "A") {
          p.answer = oneUnit * newAF;
        }
        if (p.question == "B") {
          p.answer = oneUnit * newBF + p.amountLeftFirst;
        }
      }

      let firstScene = undefined;
      let secondScene = undefined;
      const statement = genNumbers(2) == 0 ? "ratio" : "sentence";
      if (statement == "ratio") {
        firstScene = `If ${personA} and ${personB} spents their money in the ratio of ${p.unitAF} : ${p.unitBF},`;
        secondScene = `If ${personA} and ${personB} spents their money in the ratio of ${p.unitAS} : ${p.unitBS},`;
      }
      if (statement == "sentence") {
        const multiplierA = genNumbers(4) + 2;
        const multiplierB = genNumbers(4) + 2;
        firstScene = `For every $${
          p.unitAF * multiplierA
        } ${personA} spents, ${personB} also spents $${
          p.unitBF * multiplierA
        },`;
        secondScene = `For every $${
          p.unitAS * multiplierB
        } ${personA} spents, ${personB} also spents $${
          p.unitBS * multiplierB
        },`;
      }

      displayProblem.innerHTML = `
      ${firstScene}
      ${chosen} would still have $${p.amountLeftFirst} left when ${theBroke} spents all ${gender} money.</p>
      ${secondScene}
      ${chosen} would still have $${p.amountLeftSecond} left when ${theBroke} spents all ${gender} money.</p>
      `;
      if (p.question == "A") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How much does ${personA} have at first?`
        );
      }
      if (p.question == "B") {
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `How much does ${personB} have at first?`
        );
      }
    }
    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 1 MULTIPLES
    if (setting == 5) {
      //IDENTITIES
      const position = genNumbers(3);
      const itemA = ["pencils", "erasers", "apples"][position];
      const itemB = ["rulers", "pens", "oranges"][position];

      //UNITSENTENCE
      [p.quantityA, p.quantityB] = simplify(p.quantityA, p.quantityB);
      const unitType = ["fractions", "ratio", "percentage"][genNumbers(3)];
      let unitStatement = `He bought ${p.quantityA}/${p.quantityB} as many ${itemA} as ${itemB}.`;
      if (unitType == "ratio") {
        unitStatement = `He bought ${itemA} to ${itemB} in the ratio of ${p.quantityA}:${p.quantityB}.`;
      }
      if (unitType == "percentage") {
        p.quantityB = 5;

        unitStatement = `The number of ${itemA} bought is ${
          (p.quantityA / p.quantityB) * 100
        }% of ${itemB}.`;
      }

      // VALUE CALCULATIONS
      const totalValueA = p.priceA * p.quantityA * p.groups;
      const totalValueB = p.priceB * p.quantityB * p.groups;
      const totalValue = totalValueA + totalValueB;
      const differenceValue = totalValueA - totalValueB;
      const diffStatement = differenceValue > 0 ? "more" : "less";

      const differenceValueB = p.priceA - p.priceB;
      const diffStatementB = differenceValueB > 0 ? "more" : "less";

      let questionStatement = undefined;
      if (p.question == "VA") {
        questionStatement = `How much is each ${itemA.substring(
          0,
          itemA.length - 1
        )}.`;
      }
      if (p.question == "VB") {
        questionStatement = `How much is each ${itemB.substring(
          0,
          itemB.length - 1
        )}.`;
      }
      if (p.question == "QA") {
        questionStatement = `How many ${itemA} are there?`;
      }
      if (p.question == "QB") {
        questionStatement = `How many ${itemB} are there?`;
      }
      if (differenceValueB == 0) {
        return updateCalc();
      }
      displayProblem.innerHTML = `
      Someone spent $${
        totalValue % 1 == 0 ? totalValue : totalValue.toFixed(2)
      } on some ${itemA} and ${itemB}.</p>
      He spent $${
        differenceValue % 1 == 0
          ? Math.abs(differenceValue)
          : Math.abs(differenceValue).toFixed(2)
      } ${diffStatement} on ${itemA} than ${itemB}.</p>
      ${unitStatement}</p>
      Each ${itemA.slice(0, itemA.length - 1)} cost $${
        differenceValueB % 1 == 0
          ? Math.abs(differenceValueB)
          : Math.abs(differenceValueB).toFixed(2)
      } ${diffStatementB} than each ${itemB.slice(0, itemB.length - 1)}.</p>
      ${questionStatement}
      `;
    }
    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 1 DIFFERENCE
    if (setting == 6) {
      if (p.priceA == p.priceB) {
        console.log("same coins");
        return updateCalc();
      }
      const diffStatementA =
        p.quantityA > p.quantityB ? "more coins than" : "less coins than";
      const diffValueA = p.quantityA - p.quantityB;
      const valueA = accDecimal((p.quantityA * p.priceA) / 100);
      const valueB = accDecimal((p.quantityB * p.priceB) / 100);
      const diffStatementB = valueA - valueB > 0 ? "more than" : "less than";
      const diffValueB = valueA - valueB;
      let finalStatement = undefined;
      if (p.question == "VA") {
        finalStatement = `What is value of all the ${
          p.priceA == 100 ? "$1" : `${p.priceA} cent`
        } coins?`;
      }
      if (p.question == "VB") {
        finalStatement = `What is the value of all the ${
          p.priceB == 100 ? "$1" : `${p.priceB} cent`
        } coins?`;
      }
      if (p.question == "QA") {
        finalStatement = `How many ${
          p.priceA == 100 ? "$1" : `${p.priceA} cent`
        } coins are there?`;
      }
      if (p.question == "QB") {
        finalStatement = `How many ${
          p.priceB == 100 ? "$1" : `${p.priceB} cent`
        } coins are there?`;
      }
      if (p.question == "T") {
        finalStatement = `What is the total value of both boxes?`;
      }
      displayProblem.innerHTML = `
      Box A contains only ${
        p.priceA == 100 ? "$1" : `${p.priceA} cent`
      }  coins.</p>
      Box B contains only ${
        p.priceB == 100 ? "$1" : `${p.priceB} cent`
      } coins.</p>
      Box A has ${Math.abs(diffValueA)} ${diffStatementA} Box B.</p>
      Box A is $${
        diffValueB % 1 == 0
          ? Math.abs(diffValueB)
          : Math.abs(diffValueB).toFixed(2)
      } ${diffStatementB} than Box B.</p>
      ${finalStatement}

      `;
    }
    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 2 SETS
    if (setting == 7) {
      //IDENTITIES
      if (p.quantityA == p.quantityB) {
        p.quantityB -= 1;
      }
      const position = genNumbers(3);
      const itemA = ["pencils", "erasers", "apples"][position];
      const itemB = ["rulers", "pens", "oranges"][position];
      const commonQuantity = commonDeno(p.quantityA, p.quantityB);
      const valueAGroup = (commonQuantity / p.quantityA) * p.priceA * p.groups;
      const valueBGroup = (commonQuantity / p.quantityB) * p.priceB * p.groups;
      console.log(commonQuantity, valueAGroup, valueBGroup);
      const totalValue = valueAGroup + valueBGroup;
      const diffValue = valueAGroup - valueBGroup;
      let clue = undefined;
      if (p.version == "money") {
        if (p.type == "diff") {
          if (diffValue > 0)
            clue = `He spent $${diffValue.toFixed(
              2
            )} more on ${itemA} than ${itemB}.`;
          if (diffValue < 0)
            clue = `He spent $${Math.abs(diffValue).toFixed(
              2
            )} less on ${itemA} than ${itemB}.`;
        }
        if (p.type == "total") {
          clue = `He spent a total of $${totalValue.toFixed(2)}`;
        }
        let finalQuestion = undefined;
        if (p.question == "QA") {
          finalQuestion = `How many ${itemA} were bought?`;
        }
        if (p.question == "QB") {
          finalQuestion = `How many ${itemB} were bought?`;
        }
        if (p.question == "VA") {
          finalQuestion = `How much was spent on ${itemA}?`;
        }
        if (p.question == "VB") {
          finalQuestion = `How much was spent on ${itemB}?`;
        }
        displayProblem.innerHTML = `
        Items are sold according to the list below:
        <ul>
        <tr>
        <li class="ml-3">${p.quantityA} ${itemA} for $${p.priceA.toFixed(
          2
        )}</li>
        <li class="ml-3">${p.quantityB} ${itemB} for $${p.priceB.toFixed(
          2
        )}</li>
        </tr>
        </ul>
        Someone bought an equal number of ${itemA} and ${itemB}.</p>
        ${clue}</p>
        ${finalQuestion}
        `;
      }
      if (p.version == "distance") {
        p.type = "diff";
        p.priceA = genNumbers(9) + 2;
        p.priceB = genNumbers(9) + 2;
        // p.groups = genNumbers(10) + 10;
        if (p.priceA == p.priceB) {
          p.priceB -= 1;
        }
        let clue = undefined;
        const commonDistance = commonDeno(p.priceA, p.priceB);
        const totalFlagA = (commonDistance / p.priceA) * p.quantityA * p.groups;
        const totalFlagB = (commonDistance / p.priceB) * p.quantityB * p.groups;
        console.log(commonDistance, totalFlagA, totalFlagB);
        const diffValue = totalFlagA - totalFlagB;
        if (diffValue < 0) {
          clue = `${Math.abs(
            diffValue
          )} more big flags than small flags were used.`;
        } else {
          clue = `${diffValue} more small flags than big flags were used.`;
        }
        let finalQuestion = undefined;
        if (p.question == "QA") {
          finalQuestion = "How many small flags were used?";
        }
        if (p.question == "QB") {
          finalQuestion = "How many big flags were used?";
        }
        if (p.question == "VA" || p.question == "VB") {
          finalQuestion = "What is the distance of the entire road?";
        }
        displayProblem.innerHTML = `
        Flags were display along two sides of a road.</p>
        On one side, ${p.quantityA} small flags were placed every ${p.priceA} m.</p>
        On the other side, ${p.quantityB} big flags were placed every ${p.priceB} m.</p>
        ${clue}</p>
        ${finalQuestion}
        `;
      }
    }
  }
  // MULTIPLES
  if (mulLevel == "multiples") {
    displayProblem.innerHTML = `${p.numFive} ${p.operator} ${
      multiplesArr.length - 1
    }`;
  }

  userInput.value = "";
  userInput2.value = "";

  if (document.querySelector(".input-box").classList.contains("hidden")) {
    userInput2.focus();
  } else {
    userInput.focus();
  }
}

ourForm.addEventListener("submit", handleSubmit);
ourForm2.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (player == 1) {
    // if (userInput.value == "") alert("Please input a value")
    let correctAnswer;
    let correctAnswerTwo;
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
        }
      }

      if (p.evenOrOdd == "odd") {
        if (p.landingNumber % 2 != 0) {
          console.log("Choice 3");
          correctAnswer = p.finalNumber;
        } else {
          console.log("Choice 4");
          correctAnswer = `${p.landingNumber} ${p.finalNumber}`;
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
            "," +
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
      // if (p.optionFinal == 5) {
      //   correctAnswer = `${p.numOne + 1}x${p.numOne}/2`;
      // }
      // // level 3.12
      // if (p.optionFinal == 1) {
      //   correctAnswer = p.numOne + 1 + "x" + p.numOne + "/2";
      // }
      // // level 3.13
      // if (p.optionFinal == 2) {
      //   if (p.numThree > p.numTwo) {
      //     correctAnswer = `${p.numThree}n-${p.numThree - p.numTwo} ${
      //       p.numThree * p.numFour + (p.numTwo - p.numThree)
      //     }`;
      //   } else if (p.numThree == p.numTwo) {
      //     correctAnswer = `${p.numThree}n ${p.numThree * p.numFour}`;
      //   } else {
      //     correctAnswer = `${p.numThree}n+${p.numTwo - p.numThree} ${
      //       p.numThree * p.numFour + (p.numTwo - p.numThree)
      //     }`;
      //   }
      // }
      // // level 3.14
      // if (p.optionFinal == 3) {
      //   correctAnswer =
      //     p.numFive +
      //     "x" +
      //     p.numFive +
      //     "=" +
      //     p.numFive * p.numFive +
      //     " " +
      //     (p.numFive + p.numSix);
      // }
      // // level 3.15
      // if (p.optionFinal == 4) {
      //   let remainder = (p.position % arr.length) - 1;
      //   if (remainder < 0) {
      //     remainder = arr.length - 1;
      //   }
      //   console.log(remainder);
      //   correctAnswer = arr[remainder];
      // }
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
        let remainder = (p.position % arr.length) - 1;
        if (remainder < 0) {
          remainder = arr.length - 1;
        }
        console.log(remainder);
        correctAnswer = arr[remainder];
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
      if (difficulty == 1 || (difficulty == 9 && p.rollx == 0)) {
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
      if (difficulty == 2 || (difficulty == 9 && p.rollx == 1)) {
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
      correctAnswer = arr.toString();
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
      correctAnswer = p.num.toFixed(p.pos);
    }

    if (level == 4.04) {
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

    if (level == 4.05) {
      if (p.operator == "x") {
        correctAnswer =
          Math.round((p.numOne / p.numTwo) * p.numThree * 10000) / 10000;
      } else {
        correctAnswer =
          Math.round((p.numOne / p.numTwo / p.numThree) * 10000) / 10000;
      }
    }

    // if (level == 4.06) {
    //   if (p.unitMeasurement == "m" || p.unitMeasurement == "$") {
    //     correctAnswer = Math.round(p.numOne * 100 + p.numThree);
    //   }
    //   if (
    //     p.unitMeasurement == "ℓ" ||
    //     p.unitMeasurement == "kg" ||
    //     p.unitMeasurement == "km"
    //   ) {
    //     correctAnswer = Math.round(p.numOne * 1000 + p.numTwo);
    //   }
    // }

    // if (level == 4.07) {
    //   if (p.unitMeasurement == "m") {
    //     correctAnswer = Math.round((p.numOne + p.numThree / 100) * 100) / 100;
    //   }
    //   if (p.unitMeasurement == "$") {
    //     if (p.numThree % 10 == 0) {
    //       correctAnswer = p.numOne + p.numThree / 100 + "0";
    //     } else {
    //       correctAnswer = Math.round((p.numOne + p.numThree / 100) * 100) / 100;
    //     }
    //   }
    //   if (
    //     p.unitMeasurement == "ℓ" ||
    //     p.unitMeasurement == "kg" ||
    //     p.unitMeasurement == "km"
    //   ) {
    //     correctAnswer = Math.round((p.numOne + p.numTwo / 1000) * 1000) / 1000;
    //   }
    // }
    // if (level == 4.08) {
    //   // level 4.06
    //   if (p.optionFinal == "1") {
    //     if (p.unitMeasurement == "m" || p.unitMeasurement == "$") {
    //       correctAnswer = Math.round(p.numOne * 100 + p.numThree);
    //     }
    //     if (
    //       p.unitMeasurement == "ℓ" ||
    //       p.unitMeasurement == "kg" ||
    //       p.unitMeasurement == "km"
    //     ) {
    //       correctAnswer = Math.round(p.numOne * 1000 + p.numTwo);
    //     }
    //   }
    //   // level 4.07
    //   if (p.optionFinal == "2") {
    //     if (p.unitMeasurement == "m") {
    //       correctAnswer = Math.round((p.numOne + p.numThree / 100) * 100) / 100;
    //     }
    //     if (p.unitMeasurement == "$") {
    //       if (p.numThree % 10 == 0) {
    //         correctAnswer = p.numOne + p.numThree / 100 + "0";
    //       } else {
    //         correctAnswer =
    //           Math.round((p.numOne + p.numThree / 100) * 100) / 100;
    //       }
    //     }
    //     if (
    //       p.unitMeasurement == "ℓ" ||
    //       p.unitMeasurement == "kg" ||
    //       p.unitMeasurement == "km"
    //     ) {
    //       correctAnswer =
    //         Math.round((p.numOne + p.numTwo / 1000) * 1000) / 1000;
    //     }
    //   }
    // }
    if (level == 4.08) {
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
    // if (level == 4.09) {
    //   for (let i = p.numThree; i > 1; i--) {
    //     if (p.numTwo % i == 0 && p.numThree % i == 0) {
    //       p.numTwo /= i;
    //       p.numThree /= i;
    //     }
    //   }
    //   console.log(p.numThree, arr[0]);
    //   p.numFour = p.numOne * p.numThree + p.numTwo;
    //   if (p.numThree != arr[0]) {
    //     correctAnswer = `${p.numOne} ${p.numTwo}/${p.numThree}=${p.numFour}/${p.numThree}`;
    //   } else if (p.numTwo == 1) {
    //     p.numFour = p.numOne * p.numThree + p.numTwo;
    //     correctAnswer = p.numFour + "/" + p.numThree;
    //   } else {
    //     correctAnswer = p.numFour + "/" + p.numThree;
    //   }
    // }

    // if (level == 4.1) {
    //   for (let i = p.numTwo; i > 1; i--) {
    //     if (p.numTwo % i == 0 && p.numThree % i == 0) {
    //       p.numTwo /= i;
    //       p.numThree /= i;
    //     }
    //   }
    //   if (p.numThree != arr[1]) {
    //     correctAnswer = `${p.numOne} ${arr[0]}/${arr[1]}=${p.numOne} ${
    //       p.numTwo % p.numThree
    //     }/${p.numThree}`;
    //   } else {
    //     correctAnswer =
    //       p.numOne + " " + (p.numTwo % p.numThree) + "/" + p.numThree;
    //   }
    // }
    if (level == 4.1) {
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
    if (level == 4.11) {
      // level 4.09
      // if (p.optionFinal == "1") {
      //   for (let i = p.numThree; i > 1; i--) {
      //     if (p.numTwo % i == 0 && p.numThree % i == 0) {
      //       p.numTwo /= i;
      //       p.numThree /= i;
      //     }
      //   }
      //   console.log(p.numThree, arr[0]);
      //   p.numFour = p.numOne * p.numThree + p.numTwo;
      //   if (p.numThree != arr[0]) {
      //     correctAnswer = `${p.numOne} ${p.numTwo}/${p.numThree}=${p.numFour}/${p.numThree}`;
      //   } else if (p.numTwo == 1) {
      //     p.numFour = p.numOne * p.numThree + p.numTwo;
      //     correctAnswer = p.numFour + "/" + p.numThree;
      //   } else {
      //     correctAnswer = p.numFour + "/" + p.numThree;
      //   }
      // }
      // if (p.optionFinal == "2") {
      //   // level 4.10
      //   for (let i = p.numTwo; i > 1; i--) {
      //     if (p.numTwo % i == 0 && p.numThree % i == 0) {
      //       p.numTwo /= i;
      //       p.numThree /= i;
      //     }
      //   }
      //   if (p.numThree != arr[1]) {
      //     correctAnswer = `${p.numOne} ${arr[0]}/${arr[1]}=${p.numOne} ${
      //       p.numTwo % p.numThree
      //     }/${p.numThree}`;
      //   } else {
      //     correctAnswer =
      //       p.numOne + " " + (p.numTwo % p.numThree) + "/" + p.numThree;
      //   }
      // }
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
    if (level == 4.12) {
      if (setting == 1 || (setting == 9 && p.rollChoice == 1)) {
        correctAnswer = `${p.numMulti * p.numTwo}`;
      }
      if (setting == 2 || (setting == 9 && p.rollChoice == 2)) {
        correctAnswer = ((p.deno * p.numMulti) / p.deno) * p.nume;
      }
    }

    // if (level == 4.13) {
    //   if (p.options == "use") {
    //     correctAnswer = `${p.numTwo * p.numMulti}x${p.numOne}/${p.numTwo}`;
    //   }
    //   if (p.options == "have left") {
    //     correctAnswer = `${p.numTwo * p.numMulti}x${p.numTwo - p.numOne}/${
    //       p.numTwo
    //     }`;
    //   }
    // }

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

    if (level == 4.16) {
      correctAnswer = p.numOne;
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
      }
      if (p.rollType == 2) {
        correctAnswer = `${p.bigSquare}x4`;
      }
      if (p.rollType == 3) {
        correctAnswer = `(${p.rectangle}+${p.bigSquare})x2`;
      }
    }

    if (level == 4.21) {
      const numSquareLength = Math.floor(p.length / p.dimension);
      const numSquareBreadth = Math.floor(p.breadth / p.dimension);
      const numSquareHeight = Math.floor(p.height / p.dimension);
      const totalSquare = numSquareLength * numSquareBreadth;
      const totalCube = numSquareLength * numSquareBreadth * numSquareHeight;
      if (
        difficulty == 0 ||
        difficulty == 1 ||
        p.rollType == 0 ||
        p.rollType == 1
      ) {
        correctAnswer = `${numSquareLength}x${numSquareBreadth}=${totalSquare}`;
      }
      if (difficulty == 2 || p.rollType == 2) {
        correctAnswer = `${numSquareLength}x${numSquareBreadth}x${numSquareHeight}=${totalCube}`;
      }
      if (difficulty == 3 || p.rollType == 3) {
        correctAnswer = `${Math.floor(
          p.length / (p.dimension * 2)
        )}x${Math.floor(p.breadth / (p.dimension * 2))}=${
          Math.floor(p.length / (p.dimension * 2)) *
          Math.floor(p.breadth / (p.dimension * 2))
        }`;
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
        correctAnswer = p.numerator / (p.denominator / 100);
      }
      if (p.rollA == "fraction") {
        correctAnswer = `${p.numerator}/${p.denominator}x100`;
      }
      if (p.rollA == "percentage") {
        if (p.rollB == "fraction") {
          correctAnswer = `${p.percentageDisplay}/100`;
        }
        if (p.rollB == "decimal") {
          correctAnswer = `${p.percentageDisplay / 100}`;
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
      if (choice == 1) {
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
      if (choice == 2) {
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

    if (level == 6.0) {
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

    if (level == 6.01) {
      if (difficulty == 0) {
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
          } else {
            correctAnswer = `2xpix${p.radius}`;
          }
        }
      }
      if (difficulty == 1) {
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
            }
            if (p.rollType2 == "quadrant") {
              correctAnswer = `2x${p.rollPi}x${p.radius}x1/4+2x${p.radius}`;
            }
            if (p.rollType2 == "others") {
              correctAnswer = `2x${p.rollPi}x${p.radius}x${p.rollOthers}/360+2x${p.radius}`;
            }
          } else {
            if (p.rollType2 == "semicircle") {
              correctAnswer = `2xpix${p.radius}x1/2+2x${p.radius}`;
            }
            if (p.rollType2 == "quadrant") {
              correctAnswer = `2xpix${p.radius}x1/4+2x${p.radius}`;
            }
            if (p.rollType2 == "others") {
              correctAnswer = `2xpix${p.radius}x${p.rollOthers}/360+2x${p.radius}`;
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
      if (setting == 12) correctAnswer = `${p.multiplier}r${p.remainder}`;
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

      //MONEY: ADDITION SUBTRACTION AND MULTIPLICATION
      if (setting == 20) {
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
      if (setting == 21) {
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
      if (setting == 22) {
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
      if (setting == 23) {
        correctAnswer = p.answer;
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
      if (setting == 6) {
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
      if (setting == 7) {
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

      // FRACTIONS: UNIT SENTENCE
      if (setting == 8) {
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

      // FORM FRACTION

      if (setting == 9) {
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
      if (setting == 10) {
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

      if (setting == 11) {
        // correctAnswer =
        //   p.numOne / p.convenientNumOne + p.numTwo / p.convenientNumTwo;
        // decimalCheck(correctAnswer);
        let answer = [
          p.numOne / p.convenientNumOne + p.numTwo / p.convenientNumTwo,
        ];
        correctAnswer = accDecimal(answer[0]);
      }
      if (setting == 12) {
        correctAnswer = p.numOne - p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }

      // DECIMALS: OVERLAPPING PLACE VALUE
      if (setting == 13) {
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

      if (setting == 14) {
        correctAnswer = p.numOne * p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (setting == 15) {
        correctAnswer = p.numOne * p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (setting == 16) {
        correctAnswer = p.numOne / p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (setting == 17) {
        correctAnswer = (p.numOne / p.numTwo).toFixed(p.roundOff);
      }
      if (setting == 18) {
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
      if (setting == 19) {
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

      if (setting == 20) {
        correctAnswer = p.start + p.eachInterval * p.arrow;
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

      //VOLUME AND SURFACE AREA
      if (setting == 10) {
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
      if (setting == 11) {
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
      if (setting == 12) {
        correctAnswer = p.answer;
      }

      //RATIO: SHAPES
      if (setting == 13) {
        let shaded = p.shaded;
        let unshaded = p.total - shaded;
        [shaded, unshaded] = simplify(shaded, unshaded);
        if (p.secondVar == "unshaded") correctAnswer = `${shaded}:${unshaded}`;
        if (p.secondVar == "total")
          correctAnswer = `${shaded}:${shaded + unshaded}`;

        // }
      }
      // RATIO: REPEATED IDENTITY
      if (setting == 14) {
        calArrQns = simplestForm(calArrQns);
        correctAnswer = `${calArrQns[5]}:${calArrQns[6]}:${calArrQns[8]}`;
      }

      // RATIO: IDENTICAL TOTAL
      if (setting == 15) {
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
      if (setting == 16) {
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

      if (setting == 17) {
        if (p.type == "part thereof") {
          correctAnswer = Math.ceil(p.duration / p.group) * p.rates;
        }
        if (p.type == "part thereafter") {
          correctAnswer = Math.floor(p.duration / p.group) * p.rates;
        }
      }

      if (setting == 18) {
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
      if (setting == 19) {
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
        // if (p.version == "units") {
        //   let conversion = 1000;
        //   if (p.smallUnit == "cm") conversion = 100;
        //   if (p.smallUnit == "mins" || p.smallUnit == "secs") conversion = 60;
        //   let tempAnswer = (p.nume / (p.deno * conversion)) * 100;
        //   console.log(tempAnswer);
        //   correctAnswer = `${accDecimal(tempAnswer)}%`;
        //   let str = tempAnswer;
        //   str = str.toString().split(".")[1];
        //   console.log(typeof str, str);
        //   if (str) {
        //     if (
        //       (str.toString().length > 6 && !str.toString().includes("0000")) ||
        //       (str.toString().length > 6 && !str.toString().includes("9999"))
        //     ) {
        //       let numerator = p.nume * 100;
        //       let denominator = p.deno * conversion;
        //       let wholeNum = Math.floor(numerator / denominator);
        //       let remainder = numerator % denominator;
        //       [remainder, denominator] = simplify(remainder, denominator);
        //       if (wholeNum == 0) correctAnswer = `${remainder}/${denominator}%`;
        //       if (wholeNum != 0)
        //         correctAnswer = `${wholeNum} ${remainder}/${denominator}%`;
        //     }
        //   }
        // }
      }
      //PERCENRAGE: PERCENTAGE CHANGE
      if (setting == 20) {
        const change = Math.abs(p.next - p.previous);
        if (p.version == "change")
          correctAnswer = `${accDecimal((change / p.previous) * 100)}%`;
        if (p.version == "percentage forward")
          correctAnswer = accDecimal((p.previous / 100) * (100 + p.change));
        if (p.version == "percentage back")
          correctAnswer = accDecimal((p.next / (100 + p.change)) * 100);
      }
      // PERCENTAGE: REPEATED IDENTITY
      if (setting == 21) {
        p.answer = simplestForm(p.answer);
        correctAnswer = p.answer.join(":");
      }

      // PERCENTAGE: REMAINDER CONCEPT
      if (setting == 22) {
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
      if (setting == 23) {
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

      if (setting == 24) correctAnswer = p.answer;

      //AVERAGE: TRIANGLE NUMBERS
      if (setting == 25) {
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
    }

    //ANSWERS
    if (level == "calSix") {
      if (setting == 1) {
        console.log(p.numerator, p.denominator);
        console.log(p.numerator / p.denominator);
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
            const totalNume = p.whole * p.denominator + p.numerator;
            const comDeno = commonDeno(p.denominator, p.denominatorTwo);
            let newNumeOne = (totalNume * comDeno) / p.denominator;
            let newNumeTwo = (p.numeratorTwo * comDeno) / p.denominatorTwo;
            let leftNume = newNumeOne - newNumeTwo * quotient;
            let leftDeno = comDeno;
            [leftNume, leftDeno] = simplify(leftNume, leftDeno);
            correctAnswer = `${leftNume}/${leftDeno}`;
            // if ((p.type = "mixed fractions")) {
            //   if (leftNume / leftDeno > 0) {
            //     correctAnswer = `${Math.floor(
            //       leftNume / leftDeno
            //     )} ${leftNume}/${leftDeno}`;
            //   }
            // }
          }
        }
      }

      // CIRCLES
      if (setting == 2) {
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
      if (setting == 3) {
        if (p.given == "radius") {
          correctAnswer = 2 * p.radius * p.radius;
        }
        if (p.given == "square") {
          correctAnswer = p.radius;
        }
      }
      //CIRCLES: OTHERS
      if (setting == 4) {
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
      if (setting == 5) {
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
      if (setting == 6) {
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
      if (setting == 7) {
        if (p.question == "A") correctAnswer = (p.speedA * p.time) / 60;
        if (p.question == "B") correctAnswer = (p.speedB * p.time) / 60;
        if (p.question == "total")
          correctAnswer = ((p.speedA + p.speedB) * p.time) / 60;
      }

      // SPEED: SURROGATE
      if (setting == 8) {
        if (p.question == "A") correctAnswer = p.speedA;
        if (p.question == "B") correctAnswer = p.speedB;
      }
      //PIE CHART
      if (setting == 9) {
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
        }
        if (p.type == "normalTimeToSpeed") {
          const oneUnit = p.differenceSpeed / Math.abs(p.speedA - p.speedB);
          console.log(`one unit is ${oneUnit}`);
          if (p.question == 1) {
            correctAnswer = (oneUnit * p.speedA * p.timeA) / 60;
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
    // answers
    if (level == "heuTwo") {
      if (
        setting == 1 ||
        (setting == 9 && p.rollz == 1) ||
        (range == 1 && p.rollz == 1)
      ) {
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
      if (
        setting == 2 ||
        (setting == 9 && p.rollz == 2) ||
        (range == 1 && p.rollz == 2)
      ) {
        correctAnswer = `${p.numOne}-${p.numTwo}=${p.numOne - p.numTwo}\n${
          p.numOne - p.numTwo
        }/2=${(p.numOne - p.numTwo) / 2}`;
        correctAnswerTwo = (p.numOne - p.numTwo) / 2;
      }
      if (
        setting == 3 ||
        (setting == 9 && p.rollz == 3) ||
        (range == 1 && p.rollz == 3)
      ) {
        correctAnswer = `${p.difference}x2=${p.difference * 2}`;
        correctAnswerTwo = p.difference * 2;
      }
      if (
        setting == 4 ||
        (setting == 9 && p.rollz == 4) ||
        (range == 1 && p.rollz == 4)
      ) {
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
          updateProblems();
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
        "From permutation: Correct"
    ) {
      console.log("correct");
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
      if (level == 2.02 || level == 2.05 || level == 4.02) {
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
        4.06,
        4.16,
        4.07,
        4.08,
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
        updateProblems();
      }
    } else {
      // WHEN INCORRECT
      console.log("incorrect");
      helpMeFunc(level, state);
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
        2.05,
        2.09,
        2.08,
        2.09,
        3.09,
        3.12,
        3.13,
        3.14,
        3.16,
        4.0,
        ,
        4.11,
        5.11,
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

      //  HELP!!!
      if (level == 1.01) {
        helpMe.style.lineHeight = "50%";
        helpMe.style.marginTop = "5%";
        helpMe.style.textAlign = "center";

        let object = "";
        if (p.operator == "x") {
          object = "🎈";
          let string = object.repeat(p.numFour);
          console.log(string);
          for (let i = 0; i < p.numThree; i++) {
            arr.push(`${string}  ${p.numFour * (i + 1)}</p>`);
          }
        }
        if (p.operator == "÷") {
          object = "🧩";
          let string = object.repeat(p.numThree);
          for (let i = 0; i < p.numFour; i++) {
            arr.push(`${string}  ${i + 1}</p>`);
          }
        }
        let help = arr.join(" ");
        helpMe.innerHTML = help;
        const grammer = "groups";
        if (p.numThree == 1) {
          const grammer = "group";
        }
        if (p.operator == "x") {
          let repeatText = ` + ${p.numFour}`;
          let html = `${p.numThree} ${grammer} of ${p.numFour}</p>= ${
            p.numFour
          } ${repeatText.repeat(p.numThree - 1)}</p><hr>
          `;
          helpMe.insertAdjacentHTML("afterbegin", html);
        }
        if (p.operator == "÷") {
          const result = p.numThree * p.numFour;
          let repeatText = ` + ${p.numThree}`;
          let html = `? groups of ${p.numThree} in ${result}, </p>
          ${p.numThree} ${repeatText.repeat(p.numFour - 1)}</p><hr>
          `;
          helpMe.insertAdjacentHTML("afterbegin", html);
        }
        // }
        // if (p.operator == "÷") {
        //   let result = p.numThree * p.numFour;
        //   let repeatSum = " - " + p.numThree;
        //   helpMe.innerHTML = `
        //   ${result} ${p.operator} ${p.numThree} = ${result}${repeatSum.repeat(
        //     p.numFour
        //   )}
        //   `;
        // }
      }
      if (level == 2.09) {
        if (state.mistake > 5) {
          ctx.fillText("am: 1 2 3 4 5 6 7 8 9 10 11 12", -115, -100);
          ctx.fillText("pm: 12 11 10 9 8 7 6 5 4 3 2 1", -115, -80);
        }
        if (
          state.mistake > 5 &&
          p.situation == "later" &&
          p.roll == "mins" &&
          p.timeMinutes + p.changeMinutes >= 60 &&
          state.score < 11
        ) {
          ctx.fillText("Overflow", -55, -60);
        }
        if (
          state.mistake > 5 &&
          p.situation == "before" &&
          p.roll == "mins" &&
          p.timeMinutes - p.changeMinutes < 0 &&
          state.score < 11
        ) {
          ctx.fillText("Insufficient", -55, -60);
        }
      }
      if (
        level == 3.04 ||
        level == 3.05 ||
        level == 3.06 ||
        level == 4.06 ||
        level == 4.07 ||
        level == 4.08
      ) {
        if (p.firstUnit == "$" || p.unitMeasurement == "$") {
          helpMe.textContent = `$1 = 100¢`;
        }
        if (p.firstUnit == "m" || p.unitMeasurement == "m") {
          helpMe.textContent = `1 m  = 100 cm`;
        }
        if (p.firstUnit == "min" || p.unitMeasurement == "min") {
          helpMe.textContent = `1 min  = 60 s`;
        }
        if (p.firstUnit == "km" || p.unitMeasurement == "km") {
          helpMe.textContent = `1 km  = 1000 m`;
        }
        if (p.firstUnit == "kg" || p.unitMeasurement == "kg") {
          helpMe.textContent = `1 kg  = 1000 g`;
        }
        if (p.firstUnit == "ℓ" || p.unitMeasurement == "ℓ") {
          helpMe.textContent = `1 ℓ  = 1000 mℓ`;
        }
      }
      if (level == 4.16) {
        let str = p.numOne.toString();
        const length = str.length;
        console.log(str, length);
        if (p.placeValue == "tens") {
          str = str.slice(0, length - 1);
        }
        if (p.placeValue == "hundreds") {
          str = str.slice(0, length - 2);
        }
        if (p.placeValue == "thousands") {
          str = str.slice(0, length - 3);
        }
        let str2 = str * 1 + 1;
        str2 = str2.toString().padEnd(length, "*");
        str = str.padEnd(length, "*");
        // str2 = str2.padEnd(length, "*");
        if (p.choice == "Smallest") {
          helpMe.innerHTML = `
          1) <u>Minus</u> 1 up to the place value</p>
          ${str2}-1</p>
          2) Next number will be as small as possible but still allow it to round off.</p>
          5</p>
          3) And then the rest are 0s. (If there are digits left)</p>
          `;
        }
        if (p.choice == "Largest") {
          helpMe.innerHTML = `
          1) <u>Nothing happens</u> up to the place value.</p>
          ${str}</p>
          2) Next number will be as big as possible but <u>not</u> allow it to round off.</p>
          4</p>
          3) And then the rest are 9s. (If there are digits left)</p>
          `;
        }
      }
      if (level == 4.26) {
        // if (p.version == 0){
        let start = "❌" + "⭕️".repeat(p.oneSideNoCorners) + "❌";
        let html = `⭕️${"⬜️".repeat(p.oneSideNoCorners)}⭕️</p>`.repeat(
          p.oneSideNoCorners
        );
        helpMe.innerHTML = `
          ${start}</p>`;
        helpMe.insertAdjacentHTML("beforeend", html);
        let end = "❌" + "⭕️".repeat(p.oneSideNoCorners) + "❌";
        helpMe.insertAdjacentHTML("beforeend", end);
        // }
      }
      if (level == 6.05) {
        helpMe.textContent = `Distance = Speed x Time`;
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

        // HEURISTICS THREE
        if (level == "heuThree") {
          if (p.rollz == 1) {
            helpMe.innerHTML = `
          1. Change one variable to another using difference. ( + or - )</p>
          + to change to the larger variable, - to change to the smaller variable.</p>
          2. Divide by 2.</p>
          Since there are now 2 of it.</p>
          `;
          }

          if (p.rollz == 2) {
            helpMe.innerHTML = `
          1. Let all be the other variable.<p>
          2. Find big difference. </p>
          3. Find small difference. </p>
          eg. This allows you to change 1 variable to another.</p>
          4. Big difference/small difference</p>
          `;
          }
          if (p.rollz == 3) {
            helpMe.innerHTML = `
          Unit version.</p>
          Reminder: Start with quantity.</p>
          1. Convert first variable into units.</p>
          eg. Quantity x Units</p>
          2. Convert second variable into units.</p>
          3. Add the units together.</p>
          4. Divide to find one unit.</p>
          Maybe 5. Find ${p.objectOne} by multiplying ${p.unitSentence}.</p>
          `;
          }

          if (p.rollz == 4) {
            helpMe.innerHTML = `
          Difference version.</p>
          Reminder: Start with quantity.</p>
          1. Figure out the change using difference.</p>
          eg. Quantity x difference <p>
          2. Apply the change. ( + or - )</p>
          3. Add the number of variables together.</p>
          4. Divide to find one variable.</p>
          `;
          }
          if (p.rollz == 5) {
            helpMe.innerHTML = `
            1) Find the value of 1 groups.</p>
            2) Find the number of groups.</p>
            `;
            if (p.rollQn2 == "what") {
              let html = `
                3) Quantity x ${
                  p.rollQn == "A" ? p.objectOneV : p.objectTwoV
                } = Total Value
              `;
              helpMe.insertAdjacentHTML("beforeend", html);
            }
            if (p.rollQn2 == "total") {
              let html = `
              3) Groups x 2 = Total Quantity
              `;
              helpMe.insertAdjacentHTML("beforeend", html);
            }
          }
          if (p.rollz == 8) {
            if (p.options == "A") {
              helpMe.innerHTML = `
              1) Find the number of packets bought.</p>
              2) Find the number of sets with remainder.</p>
              3) Find the extra number of packets given.</p>
              4) Find the total. </p>
              `;
            }
            if (p.options == "B") {
              helpMe.innerHTML = `
              1) Find the number of sets with remainder.</p>
              2) Find the total discount given.</p>
              3) Find the original cost.</p>
              4) Find the final cost. (after discount)</p>
              `;
            }
          }
        }

        // HEURISTICS FOUR
        if (level == "heuFour") {
          if (p.rollz == 1 || p.rollz == 2) {
            helpMe.innerHTML = `
            excess & excess = -</p>
            short & short = -</p>
            excess & short = + </p>
            1. Find big difference.</p>
            2. Find small difference.</p>
            3. Big difference / small difference = Groups </p> 
            Maybe 4. Find ${p.rollz == 1 ? `Person ${p.objectOne}` : "sweets"}.
            `;
          }
          if (p.rollz == 3) {
            helpMe.innerHTML = `
            1. Find the number of workers that turned up.</p>
            2. Find the total amount of extra work.</p>
            3. Find what each worker were suppose to do.</p>
            Maybe 4. Find the total.</p>
            `;
          }
          if (p.rollz == 4) {
            helpMe.innerHTML = `
            1. Subtraction the larger equation with the smaller equation.</p>
            ${p.objectOne} + 1 unit = ${p.groupOne}</p>
            ${p.objectOne} + ${p.unitSentence} units = ${p.groupTwo}</p>
            ${p.groupTwo} - ${p.groupOne}</p>
            2. Subtraction the units of ${p.objectThree} and ${p.objectTwo}.</p>
            ${p.unitSentence} - 1</p>
            3. Find 1 unit.</p>
            ${p.groupTwo - p.groupOne}/${p.unitSentence - 1} = 1 unit => ${
              p.objectTwo
            }</p>
            4. Find ${p.objectOne} using the first equation.
            `;
          }
          if (p.rollz == 5) {
            helpMe.innerHTML = `
            1. Find the value of ${p.objectOneUnit} ${p.objectOne}.</p>
            eg. Quantity x value</p>
            2. Find the value of ${p.objectTwoUnit} ${p.objectTwo}.</p>
            3. Find the value of a group.</p>
            4. Find the number of groups. </p>
            `;
            if (p.rollQn2 == "many") {
              if (p.rollQn == "A") {
                let html = `
                5. Find the total number of ${p.objectOne}.</p>
                Groups x Quantity per group
                `;
                helpMe.insertAdjacentHTML("beforeend", html);
              } else {
                let html = `
                5. Find the total number of ${p.objectTwo}.</p>
                Groups x Quantity per group
                `;
                helpMe.insertAdjacentHTML("beforeend", html);
              }
            }
            if (p.rollQn2 == "what") {
              if (p.rollQn == "A") {
                let html = `
                6. Find the total value of ${p.objectOne}.</p>
                Total Quantity x ${p.objectOneV}
                `;
                helpMe.insertAdjacentHTML("beforeend", html);
              }
              if (p.rollQn == "B") {
                let html = `
                6. Find the total value of ${p.objectTwo}.</p>
                Total Quantity x ${p.objectTwoV}
                `;
                helpMe.insertAdjacentHTML("beforeend", html);
              }
            }
            if (p.rollQn2 == "total") {
              let html = `
              5. Find the total quantity in a group.</p>
              ${p.objectOneUnit} + ${p.objectTwoUnit} = Quantity in 1 group</p>
              6. Find the total quantity.</p>
              No. of Groups x Quantity in 1 group = ? </p>
              `;
              helpMe.insertAdjacentHTML("beforeend", html);
            }
          }
          if (p.rollz == 6) {
            let quotient = Math.floor(p.total / (p.objectTwoQ + 1));
            let remainder = p.total % (p.objectTwoQ + 1);
            if (remainder == 0) {
              helpMe.innerHTML = `
              Calculation: ${p.objectOne}${p.objectTwo.repeat(
                p.objectTwoQ
              )} x ${quotient}</p>
              Adjusted: ${p.objectOne}${p.objectTwo.repeat(p.objectTwoQ)} x ${
                quotient - 1
              } ... ${p.objectTwo.repeat(p.objectTwoQ)}${
                p.objectOne
              } (Swap positions)</p>
              `;
            }
            if (remainder > 0) {
              helpMe.innerHTML = `
            Calculation: ${p.objectOne}${p.objectTwo.repeat(
                p.objectTwoQ
              )} x ${quotient}... ${p.objectOne}${p.objectTwo.repeat(
                remainder - 1
              )} </p>
            `;
            }
            if (remainder > 1) {
              let html = `Adjusted: ${p.objectOne}${p.objectTwo.repeat(
                p.objectTwoQ
              )} x ${quotient}... ${p.objectTwo.repeat(remainder - 1)}${
                p.objectOne
              } (swap positions)</p>`;
              helpMe.insertAdjacentHTML("beforeend", html);
            }
            let html = `${p.objectOne}${p.objectTwo.repeat(p.objectTwoQ)}${
              p.objectOne
            }</p>
            but 1 group is ${p.objectOne}${p.objectTwo.repeat(
              p.objectTwoQ
            )}</p>`;
            helpMe.insertAdjacentHTML("afterbegin", html);
          }
        }

        if (level == "heuFive") {
          if (setting == 1) {
            let gender = "";
            p.difference > 0 ? (gender = "boys") : (gender = "girls");
            helpMe.innerHTML = `
            1) Find the value of the extra people.</p>
            In this case, "${
              p.difference > 0 ? "girls" : "boys"
            }" since there are more.</p>
            2) Subtract away the difference.</p>
            3) Find the value of a group.</p>
            4) Figure out how many groups are there.</p>
            This also represents the ${gender} since there are 1 in each group and there are lesser ${gender}.</p>
            Maybe 5) Find the quantity of the other variable by adding it back.</p>
            `;
          }
          if (setting == 2) {
            helpMe.innerHTML = `
            Observation:</p>
            Note that there is an option in the question which will cause the value to down.</p>
            1) Let all be correct. Quantity x points</p>
            2) Find big difference.</p>
            3) Find small difference.</p>
              ${p.marks} + ${p.deduct}; To change from right to wrong, ${p.marks} have to be removed and then another ${p.deduct}.</p>
            4) Big/difference = groups = Wrong questions.</p>
            Maybe 5) Total questions - wrong questions = right questions</p>
            `;
          }
          if (setting == 3) {
            let lessVariable =
              p.chosenOne.charAt(0).toUpperCase() + p.chosenOne.slice(1);
            let moreVariable =
              p.chosenTwo.charAt(0).toUpperCase() + p.chosenTwo.slice(1);
            if (p.difference > 0) {
              moreVariable =
                p.chosenOne.charAt(0).toUpperCase() + p.chosenOne.slice(1);
              lessVariable =
                p.chosenTwo.charAt(0).toUpperCase() + p.chosenOne.slice(1);
            }
            helpMe.innerHTML = `
            Observation:</p>
            Note that the question gave <u>difference</u> instead of the total (other version).</p>
            1) Let all be the variable that has more. In this case"${moreVariable}"</p>
            2) Find big difference.</p>
            3) Find small difference. ${p.chosenOneQ} + ${p.chosenTwoQ}</p>
            The difference grows smaller by ${
              p.chosenOneQ + p.chosenTwoQ
            } since it grows shorter on one end and longer on the other.</p>
            4) Big difference/small difference = groups = ${lessVariable}</p>
            Maybe 5) Total - step 4. = ${moreVariable}</p>

            `;
          }
        }
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
function genNumbers(max) {
  return Math.floor(Math.random() * max);
}
//////////////////////////// SET VALUES //////////////////////////////
// Step 2: Generate Problem
function genProblems() {
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
    if (digit == "") {
      digit = 5;
    }
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
    if (difficulty != 1 && difficulty != 2 && difficulty != 9) {
      difficulty = 9;
    }
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

  // if (level == 4.03) {
  //   return {
  //     numOne: genNumbers(9999) + 1,
  //     numTwo: 0,
  //     placeValue: [
  //       "1 decimal place",
  //       "tenth place",
  //       "2 decimal place",
  //       "hundredth place",
  //       "Whole Number",
  //     ][genNumbers(5)],
  //     numFinal: 0,
  //   };
  // }
  if (level == 4.03) {
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
  if (level == 4.04) {
    return {
      numOne: genNumbers(999) + 1,
      numTwo: [10, 100, 1000][genNumbers(3)],
    };
  }

  if (level == 4.05) {
    return {
      numOne: genNumbers(999) + 1,
      numTwo: [1, 10, 100][genNumbers(3)],
      numThree: [10, 100, 1000][genNumbers(3)],
      operator: ["x", "÷"][genNumbers(2)],
    };
  }

  // if (level == 4.06) {
  //   return {
  //     numOne: genNumbers(98) + 1,
  //     numTwo: genNumbers(998) + 1,
  //     numThree: genNumbers(98) + 1,
  //     numFour: genNumbers(58) + 1,
  //     numMulti: 1000,
  //     numSix: genNumbers(98) + 1,
  //     option: ["1", "2"][genNumbers(2)],
  //     unitMeasurement: ["ℓ", "kg", "km", "$", "m"][genNumbers(5)],
  //     secondUnitMeasurement: 0,
  //   };
  // }

  // if (level == 4.07) {
  //   return {
  //     numOne: genNumbers(98) + 1,
  //     numTwo: genNumbers(998) + 1,
  //     numThree: genNumbers(98) + 1,
  //     numFour: genNumbers(8) + 1,
  //     numFive: genNumbers(8) + 1,
  //     numSix: genNumbers(98) + 1,
  //     option: ["1", "2"][genNumbers(2)],
  //     optionTwo: ["1", "2"][genNumbers(2)],
  //     unitMeasurement: ["m", "$", "ℓ", "km", "kg"][genNumbers(5)],
  //     secondUnitMeasurement: 0,
  //   };
  // }

  // if (level == 4.08) {
  //   return {
  //     numOne: genNumbers(98) + 1,
  //     numTwo: genNumbers(998) + 1,
  //     numThree: genNumbers(98) + 1,
  //     numFour: genNumbers(8) + 1,
  //     numFive: genNumbers(8) + 1,
  //     numSix: genNumbers(98) + 1,
  //     option: ["1", "2"][genNumbers(2)],
  //     optionTwo: ["1", "2"][genNumbers(2)],
  //     optionFinal: ["1", "2"][genNumbers(2)],
  //     unitMeasurement: ["m", "$", "ℓ", "km", "kg"][genNumbers(5)],
  //     secondUnitMeasurement: 0,
  //   };
  // }
  if (level == 4.08) {
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

  // if (level == 4.09) {
  //   return {
  //     numOne: genNumbers(9) + 1,
  //     numTwo: genNumbers(9) + 2,
  //     numThree: genNumbers(10) + 2,
  //     numFour: 0,
  //   };
  // }

  // if (level == 4.1) {
  //   return {
  //     numOne: genNumbers(9) + 1,
  //     numTwo: genNumbers(9) + 2,
  //     numThree: genNumbers(10) + 2,
  //     numFour: 0,
  //   };
  // }
  if (level == 4.1) {
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
  if (level == 4.11) {
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

  if (level == 4.12) {
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

  // if (level == 4.13) {
  //   return {
  //     numOne: genNumbers(8) + 2,
  //     numTwo: genNumbers(8) + 2,
  //     numMulti: genNumbers(99) + 2,
  //     options: ["have left", "use"][genNumbers(2)],
  //   };
  // }

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

  // if (level == 4.15) {
  //   return {
  //     // numerator: genNumbers(9)+1,
  //     // denominator: genNumbers(9)+1,
  //     numerator: genNumbers(9) + 1,
  //     denominator: genNumbers(9) + 1,
  //     firstSelection: genNumbers(2),
  //     secondSelection: genNumbers(4),
  //     // secondSelection: 3,
  //     lastSelection: genNumbers(3),
  //     firstUnit: undefined,
  //     secondUnit: undefined,
  //     totalUnit: undefined,
  //     differenceUnit: undefined,
  //     lastUnits: undefined,
  //     identity: genNumbers(4),
  //     // identity: 1,
  //     value: undefined,
  //     type: [
  //       ["boys", "girls", "pupils"],
  //       ["green marbles", "blue marbles", "total marbles"],
  //       ["saved", "spent", "total money"],
  //       ["spent", "left", "total money"],
  //     ],
  //   };
  // }

  if (level == 4.16) {
    return {
      placeValue: ["tens", "hundreds", "thousands"][genNumbers(3)],
      numOne: genNumbers(99998) + 1,
      choice: ["Smallest", "Largest"][genNumbers(2)],
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
    return {
      rollType: undefined,
      dimension: genNumbers(3) + 2,
      length: undefined,
      breadth: undefined,
      height: undefined,
    };
  }

  // if (level == 4.22) {
  //   return {
  //     options: [1, 2][genNumbers(2)],
  //     numOne: genNumbers(10) + 1,
  //     numTwo: genNumbers(5) + 1,
  //     numThree: genNumbers(5) + 6,
  //     numFour: genNumbers(20) + 1,
  //   };
  // }

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
    if (choice == 1) {
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
    if (choice == 2) {
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
      roll: ["rectangle", "updown", "down", "up"][genNumbers(4)],
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
      // version: 0,
      variables: genNumbers(5) + 2,
      answer: undefined,
    };
  }

  if (level == 6.0) {
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
  if (level == 6.01) {
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
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(8, calArr);
    // }
    setting = calArrAll(8, calArr, setting, 99, level);
    setting = checkRange(setting, calArr, skipArr);
    console.log(setting);
    if (setting == 1) {
      let ones = genNumbers(10);
      return {
        roll: undefined,
        numOne: (genNumbers(4) + 1) * 10,
        numTwo: ones,
        numThree: (genNumbers(5) + 1) * 10,
        numFour: genNumbers(9 - ones),
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
      };
    }
    if (setting == 3) {
      return {
        roll: undefined,
        numOne: (genNumbers(5) + 1) * 10,
        numTwo: genNumbers(10),
        numThree: (genNumbers(5) + 1) * 10,
        numFour: genNumbers(10),
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
      };
    }
    if (setting == 6) {
      return {
        roll: undefined,
        operator: ["+", "-"][genNumbers(2)],
        identity: ["C", "D"][genNumbers(2)],
        numOne: genNumbers(90) + 10,
        numTwo: genNumbers(90) + 10,
      };
    }
    if (setting == 7) {
      return {
        roll: undefined,
        startNum: genNumbers(100) + 1,
        difference: genNumbers(41) - 20,
        position: genNumbers(6),
        answer: undefined,
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
      };
    }
    // LEFT SIDE RIGHT SIDE
    if (setting == 9) {
      return {
        limit: 20,
        multiMin: 2,
        multiMax: 5,
      };
    }
  }

  //SETTINGS
  if (level == "calTwo") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(8, calArr);
    // }
    setting = calArrAll(13, calArr, setting, 99, level);
    setting = checkRange(setting, calArr, skipArr);

    if (setting == 1) {
      let hundreds = genNumbers(9) + 1;
      let tens = genNumbers(9) + 1;
      let ones = genNumbers(9) + 1;
      return {
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
        numOne: hundreds * 100 + tens * 10 + ones * 1,
        numTwo:
          genNumbers(hundreds) * 100 + genNumbers(10) * 10 + genNumbers(10) * 1,
      };
    }
    if (setting == 5) {
      return {
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
        operator: ["+", "-"][genNumbers(2)],
        identity: ["C", "D"][genNumbers(2)],
        numOne: genNumbers(999) + 1,
        numTwo: genNumbers(999) + 1,
      };
    }
    if (setting == 7) {
      return {
        startNum: genNumbers(500) + 500,
        difference: genNumbers(200) - 100,
        position: genNumbers(6),
        answer: undefined,
      };
    }
    if (setting == 8) {
      return {
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
        limit: 50,
        multiMin: 2,
        multiMax: 5,
      };
    }
    // PARTS AND INTERVALS
    if (setting == 10) {
      const gen_intervals = [2, 4, 5][genNumbers(3)];
      return {
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
    setting = calArrAll(23, calArr, setting, 99, level);
    setting = checkRange(setting, calArr, skipArr);
    if (setting == 1) {
      let thousands = genNumbers(9) + 1;
      let hundreds = genNumbers(9) + 1;
      let tens = genNumbers(9) + 1;
      let ones = genNumbers(9) + 1;
      return {
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
        numOne: (genNumbers(9) + 1) * 1000 + genNumbers(999),
        numTwo: (genNumbers(9) + 1) * 1000 + genNumbers(999),
      };
    }
    if (setting == 5) {
      return {
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
        operator: ["+", "-"][genNumbers(2)],
        identity: ["C", "D"][genNumbers(2)],
        numOne: genNumbers(9999) + 1,
        numTwo: genNumbers(9999) + 1,
      };
    }
    if (setting == 7) {
      return {
        startNum: genNumbers(5000) + 5000,
        difference: genNumbers(2000) - 1000,
        position: genNumbers(6),
        answer: undefined,
      };
    }
    if (setting == 8) {
      return {
        startNum: genNumbers(5000) + 5000,
        diffOne: genNumbers(2000) - 1000,
        diffTwo: genNumbers(2000) - 1000,
        position: genNumbers(6),
        answer: undefined,
      };
    }
    if (setting == 9) {
      return {
        numOne: genNumbers(899) + 100,
        multiple: genNumbers(8) + 2,
      };
    }

    if (setting == 10) {
      return {
        whole: genNumbers(99) + 1,
        tens: genNumbers(99) + 1,
        hundreds: genNumbers(99) + 1,
        sentenceArr: [],
      };
    }

    if (setting == 11 || setting == 12) {
      let num = genNumbers(7) + 3;
      return {
        divisor: num,
        multiplier: genNumbers(1100) + 11,
        remainder: genNumbers(num),
      };
    }
    if (setting == 13) {
      return {
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
        divisor: gen_divisor,
        quotient: genNumbers(989) + 10,
        remainder: genNumbers(gen_divisor - 1) + 1,
        num: undefined,
      };
    }

    // LEFT SIDE RIGHT SIDE
    if (setting == 16) {
      return {
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
        start: genNumbers(5999) + 1000,
        intervals: gen_intervals,
        eachInterval: genNumbers(99) + 10,
        end: undefined,
        arrow: genNumbers(gen_intervals - 1) + 1,
      };
    }
    if (setting == 19) {
      return {
        hours: genNumbers(24),
        mins: genNumbers(60),
        situationHours: genNumbers(6) + 1,
        situationMins: genNumbers(60 - 1) + 1,
        beforeAfter: ["before", "after"][genNumbers(2)],
      };
    }

    // MONEY: ADDITION AND SUBTRACTION
    if (setting == 20) {
      return {
        varA: genNumbers(10000 - 100) + 100,
        varB: genNumbers(10000 - 100) + 100,
        symbol: ["+", "-", "x"][genNumbers(3)],
      };
    }

    //FRACTION: SHAPES
    if (setting == 21) {
      return {
        shapes: ["square", "triangle", "rectangle", "circle"][genNumbers(4)],
        shaded: undefined,
        total: undefined,
        secondVar: ["total"][genNumbers(1)],
        want: ["shaded", "unshaded"][genNumbers(2)],
        bigY: (genNumbers(5) + 10) * 10,
      };
    }

    // FRACTIONS: ADDITION AND SUBTRACTION
    if (setting == 22) {
      const gen_denoOne = genNumbers(9) + 2;
      const gen_denoTwo = genNumbers(8) + 3;
      return {
        denoOne: gen_denoOne,
        numeOne: genNumbers(gen_denoOne - 1) + 1,
        denoTwo: gen_denoTwo,
        numeTwo: genNumbers(gen_denoTwo - 1) + 1,
        operator: ["+", "-"][genNumbers(2)],
      };
    }
    // FRACTIONS: EXPAND AND SIMPLIFICATION
    if (setting == 23) {
      const gen_deno = genNumbers(5) + 3;
      const gen_nume = genNumbers(gen_deno - 2) + 2;
      return {
        oriNume: gen_nume,
        oriDeno: gen_deno,
        mulOne: genNumbers(5) + 2,
        mulTwo: genNumbers(5) + 2,
        replace: genNumbers(4) + 1,
        answer: undefined,
      };
    }
  }

  if (level == "calFour") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(6, calArr);
    // }
    setting = calArrAll(20, calArr, setting, 99);
    setting = checkRange(setting, calArr, skipArr);
    if (setting == 1) {
      let number = genNumbers(8) + 2;
      return {
        numOne: number,
        numTwo: genNumbers(number) + 2,
        commonMultiple: undefined,
        nextMultiples: undefined,
        multiple: genNumbers(7) + 2,
      };
    }
    if (setting == 2) {
      return {
        numOne: genNumbers(30) + 6,
      };
    }
    if (setting == 3) {
      let num = genNumbers(30) + 6;
      return {
        numOne: genNumbers(30) + 6,
        numTwo: genNumbers(num) + 5,
      };
    }
    if (setting == 4) {
      return {
        numOne: genNumbers(900) + 100,
        numTwo: genNumbers(89) + 10,
      };
    }
    // LEFT SIDE RIGHT SIDE
    if (setting == 5) {
      return {
        limit: 100000,
        multiMin: 6,
        multiMax: 10,
      };
    }
    if (setting == 6) {
      return {
        wholeOne: genNumbers(9) + 1,
        numOne: genNumbers(9) + 1,
        denoOne: genNumbers(9) + 1,
        wholeTwo: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 1,
        denoTwo: genNumbers(9) + 1,
      };
    }
    if (setting == 7) {
      return {
        wholeOne: genNumbers(9) + 1,
        numOne: genNumbers(9) + 1,
        denoOne: genNumbers(9) + 1,
        wholeTwo: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 1,
        denoTwo: genNumbers(9) + 1,
      };
    }

    // FRACTIONS: UNIT SENTENCE
    if (setting == 8) {
      return {
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

    // FORM FRACTIONS
    if (setting == 9) {
      const position = genNumbers(6);
      return {
        smallUnit: ["cm", "m", "ml", "g", "mins", "secs"][position],
        bigUnit: ["m", "km", "ℓ", "kg", "hrs", "mins"][position],
        smallerValue: genNumbers(10) + 1,
        biggerValue: genNumbers(10) + 10,
        version: [0, 3][genNumbers(2)],
      };
    }

    // FRACTIONS: CONVERSION
    if (setting == 10) {
      const position = genNumbers(4);
      return {
        unitA: ["secs", "mins", "hrs", "month"][position],
        unitB: ["mins", "hrs", "days", "years"][position],
        value: genNumbers(24) + 60,
      };
    }
    //DECIMALS
    if (setting == 11 || setting == 12) {
      return {
        numOne: genNumbers(999) + 1,
        convenientNumOne: [1, 10, 100][genNumbers(3)],
        numTwo: genNumbers(999) + 1,
        convenientNumTwo: [10, 100][genNumbers(2)],
      };
    }

    // DECIMALS: OVERLAPPING PLACE VALUE
    if (setting == 13) {
      return {
        ones: genNumbers(99) + 1,
        tens: genNumbers(99) + 1,
        hundreds: genNumbers(99) + 1,
        tenth: genNumbers(99) + 1,
        hundredth: genNumbers(99) + 1,
        sentenceArr: [],
      };
    }

    if (setting == 14) {
      return {
        numOne: genNumbers(999) + 1,
        convenientNumOne: [10, 100, 1000][genNumbers(3)],
        numTwo: genNumbers(8) + 2,
      };
    }
    if (setting == 15) {
      return {
        numOne: genNumbers(999) + 1,
        convenientNumOne: [10, 100, 1000][genNumbers(3)],
        numTwo: genNumbers(89) + 11,
      };
    }
    if (setting == 16) {
      return {
        numOne: genNumbers(7) + 2,
        multiplier: genNumbers(989) + 11,
        divisor: [10, 100, 1000][genNumbers(3)],
      };
    }
    if (setting == 17) {
      return {
        numOne: genNumbers(10) + 1,
        numTwo: [3, 7, 9, 11][genNumbers(4)],
        roundOff: genNumbers(3) + 1,
      };
    }
    if (setting == 18) {
      return {
        operator: ["x", "÷"][genNumbers(2)],
        numOne: undefined,
        multiOne: [10, 100][genNumbers(2)],
        numTwo: genNumbers(7) + 2,
        multiTwo: [10, 100, 100][genNumbers(3)],
        divisor: undefined,
        comparison: undefined,
      };
    }
    // Multiplication in sets
    if (setting == 19) {
      const sum = genNumbers(89) + 10;
      const genNumOne = genNumbers(50) + 10;
      return {
        sums: sum,
        sets: genNumbers(89) + 10,
        numOne: genNumOne,
        numTwo: sum - genNumOne,
        version: undefined,
        blank: genNumbers(3),
      };
    }
    //  DECIMALS: PARTS AND INTERVALS
    if (setting == 20) {
      const gen_intervals = [5, 8, 10][genNumbers(3)];
      const gen_eachIntervals = [0.1, 0.01, 0.2, 0.02, 0.5, 0.05][
        genNumbers(6)
      ];
      return {
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
    setting = calArrAll(25, calArr, setting, 99);
    setting = checkRange(setting, calArr, skipArr);

    if (setting == 0) {
      return {
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
        numeratorOne: genNumbers(10) + 1,
        denominatorOne: genNumbers(10) + 1,
        numeratorTwo: genNumbers(10) + 1,
        denominatorTwo: genNumbers(10) + 1,
      };
    }
    if (setting == 2) {
      return {
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
        base: (genNumbers(5) + 4) * 4,
        height: genNumbers(2) * 10 + 30,
        first: posOne,
        second: posTwo,
        pointOne: ["B", "C", "D", "E", "F"][posOne],
        pointTwo: ["B", "C", "D", "E", "F"][posTwo],
      };
    }

    //VOLUME AND SURFACE AREA
    if (setting == 10) {
      return {
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
    if (setting == 11) {
      const gen_height = (genNumbers(10) + 2) * 5;
      return {
        length: (genNumbers(6) + 2) * 5,
        breadth: (genNumbers(4) + 2) * 5,
        height: gen_height,
        numerator: genNumbers(gen_height - 1) + 1,
        type: [4, 3, 2, 1][genNumbers(4)],
      };
    }
    // RATIO: SIMPLIFICATION AND EXPANSION
    if (setting == 12) {
      return {
        numA: genNumbers(9) + 1,
        numB: genNumbers(9) + 1,
        numC: genNumbers(9) + 1,
        process: ["up", "down", "updown"][genNumbers(3)],
        ratioArr: undefined,
        answer: undefined,
      };
    }
    //REPEATED IDENTITY: SHAPES
    if (setting == 13) {
      return {
        shapes: ["square", "triangle", "rectangle", "circle"][genNumbers(4)],
        shaded: undefined,
        total: undefined,
        secondVar: ["unshaded", "total"][genNumbers(2)],
        want: "shaded",
        bigY: (genNumbers(5) + 10) * 10,
      };
    }
    //repeated identity [Ratio]
    if (setting == 14) {
      const arrSomething = ["books", "homeworks", "pencils", "pens"];
      return {
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
    if (setting == 15) {
      const genObjects = genNumbers(3);
      return {
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
    if (setting == 16) {
      return {
        version: ["difference", "total", "object"][genNumbers(3)],
        length: genNumbers(5) + 5,
        breadth: genNumbers(2) + 3,
        change: genNumbers(16) - 8,
        shaded: undefined,
        unshaded: undefined,
      };
    }

    // RATES: PARTTHEREOF & PARTTHEREAFTER
    if (setting == 17) {
      return {
        startHour: genNumbers(5) + 1,
        startMins: genNumbers(60 - 1) + 1,
        duration: genNumbers(60) + 61,
        rates: genNumbers(5) + 1,
        group: [5, 10, 30][genNumbers(3)],
        type: ["part thereof", "part thereafter"][genNumbers(2)],
      };
    }

    // RATES: TAPS
    if (setting == 18) {
      const gen_height = genNumbers(4) + 2;
      return {
        length: genNumbers(20) + 10,
        breadth: genNumbers(20) + 10,
        height: gen_height * (genNumbers(5) + 2),
        deno: gen_height,
        nume: genNumbers(gen_height - 1) + 1,
        netRate: undefined,
      };
    }

    // PERCENTAGE: PERCENTAGE OF
    if (setting == 19) {
      const gen_deno = [2, 4, 5, 8, 10, 20, 50, 100, 1000][genNumbers(9)];
      // const position = genNumbers(6);
      return {
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
    if (setting == 20) {
      return {
        previous: (genNumbers(20) + 1) * 5,
        next: (genNumbers(20) + 1) * 5,
        version: ["percentage back", "percentage forward", "change"][
          genNumbers(3)
        ],
        change: (genNumbers(9) + 1) * 10,
      };
    }
    // REPEATED IDENTITY PERCENTAGE
    if (setting == 21) {
      let A = (genNumbers(18) + 1) * 5;
      return {
        varA: A,
        choice: ["B", "total"][genNumbers(2)],
        varB: (genNumbers(12) + 1) * 5,
        // choiceTwo: ["A", "B"][genNumbers(2)],
        varC: undefined,
        answer: undefined,
      };
    }

    //PERCENTAGE: REMAINDER CONCEPT
    if (setting == 22) {
      return {
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
    if (setting == 23) {
      return {
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
    if (setting == 24) {
      return {
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
    if (setting == 25) {
      const gen_start = genNumbers(90) + 10;
      const range = genNumbers(500) + 100;
      return {
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
      normalDisplay();
      setting = 10;
      console.log("Whats the regen?");
    } else {
      setting = calArrAll(21, calArr, setting, 99);
      setting = checkRange(setting, calArr, skipArr);
    }

    //REMAINDER CONCEPT: BEFORE AND AFTER

    if (setting == 1) {
      const gen_denoA = genNumbers(6) + 2;
      const gen_denoB = genNumbers(6) + 2;
      return {
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
        type: [2, 1][genNumbers(2)],
        length: gen_length,
        breadth: (gen_length / 4) * 3,
      };
    }

    // GEOMETRY: MANIPULATION OF DIMENSION LEVEL 2
    if (setting == 8) {
      const gen_length = (genNumbers(10) + 10) * 4;
      return {
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
        question: ["A", "B", "total"][genNumbers(3)],
        denoA: gen_deno,
        numeA: genNumbers(gen_deno / 2 - 1) + 1,
        difference: [-1, 1][genNumbers(2)] * (genNumbers(50) + 10),
        // remaining: undefined,
        oneUnit: genNumbers(90) + 10,
        // answer: undefined,
      };
    }

    // PERCENTAGE: GST AND SERVICE CHARGE
    if (setting == 18) {
      return {
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
        saves: (genNumbers(8) + 1) * 5,
        change: [(genNumbers(4) + 1) * 5, -(genNumbers(4) + 1) * 5][
          genNumbers(2)
        ],
        salary: genNumbers(5000) + 5000,
      };
    }
    if (setting == 20) {
      return {
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
  }
  //SETTINGS
  if (level == "calSix") {
    setting = calArrAll(9, calArr, setting, 99);
    setting = checkRange(setting, calArr, skipArr);

    if (setting == 1) {
      console.log("Finding Remainder");
      const genDeno = genNumbers(9) + 2;
      const genDenoTwo = genNumbers(9) + 2;
      return {
        type: ["whole", "simple fractions", "mixed fractions"][genNumbers(3)],
        whole: genNumbers(10) + 1,
        numerator: genNumbers(genDeno - 1) + 1,
        denominator: genDeno,
        numeratorTwo: genNumbers(genDenoTwo - 2) + 2,
        denominatorTwo: genDenoTwo,
        question: ["quotient", "remainder"][genNumbers(2)],
      };
    }

    // CIRCLES: AREA AND PERIMETER
    if (setting == 2) {
      return {
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

    if (setting == 3) {
      return {
        given: ["square", "radius"][genNumbers(2)],
        radius: genNumbers(10) + 5,
        // pi: 3.14,
      };
    }
    //CIRCLES: OTHERS
    if (setting == 4) {
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
    //AVERAGE SPEED OF WHOLE JOURNEY
    if (setting == 5) {
      return {
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

    if (setting == 6) {
      return {
        version: ["E", "D", "C", "B", "A"][genNumbers(5)],
        which: ["A", "B"][genNumbers(2)],
        speedA: genNumbers(10) + 5,
        time: genNumbers(14) + 2,
        speedB: genNumbers(10) + 5,
        distance: undefined,
      };
    }

    //SPEED: DIFFERENCE IN SPEED (MID)
    if (setting == 7) {
      return {
        type: ["A", "B", "C"][genNumbers(3)],
        speedA: genNumbers(50) + 50,
        diffSpeed: [-1, 1][genNumbers(2)] * (genNumbers(10) + 20),
        speedB: undefined,
        time: (genNumbers(10) + 1) * 15,
        question: ["A", "B", "total"][genNumbers(3)],
      };
    }

    // SPEED: SURROGATE
    if (setting == 8) {
      return {
        speedA: (genNumbers(5) + 5) * 10,
        speedB: undefined,
        diffSpeed: (genNumbers(2) + 1) * 10,
        timeA: (genNumbers(10) + 1) * 15,
        question: "A",
      };
    }

    // PIECHART
    if (setting == 9) {
      return {
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
    normalDisplay();
    setting = calArrAll(6, calArr, setting, 99);
    setting = checkRange(setting, calArr, skipArr);

    //MEET UP
    if (setting == 1) {
      return {
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
    };
  }
  if (level == "heuTwo") {
    setting = calArrAll(4, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

    if (
      (setting == 1 && range == 0) ||
      (setting == 9 && roll == 1) ||
      (range == 1 && roll == 1)
    ) {
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
      };
    }
    if (
      (setting == 2 && range == 0) ||
      (setting == 9 && roll == 2) ||
      (range == 1 && roll == 2)
    ) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numTwo: genNumbers(5) + 5,
        numOne: undefined,
        rollz: 2,
      };
    }

    if (
      (setting == 3 && range == 0) ||
      (setting == 9 && roll == 3) ||
      (range == 1 && roll == 3)
    ) {
      return {
        objectOne: ["B", "C", "D"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        difference: genNumbers(5) + 1,
        rollz: 3,
      };
    }

    // WORKING SETTING
    if (
      (setting == 4 && range == 0) ||
      (setting == 9 && roll == 4) ||
      (range == 1 && roll == 4)
    ) {
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
      };
    }
  }
  // settings
  if (level == "heuTwob") {
    setting = calArrAll(7, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);
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
      };
    }

    if (setting == 2) {
      return {
        type: [1, 2][genNumbers(2)],
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(400) + 100,
        numTwo: genNumbers(400) + 100,
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
      };
    }

    if (
      setting == 4 ||
      (setting == 4 && roll == 4) ||
      (range == 1 && roll == 4)
    ) {
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
      };
    }

    if (
      setting == 5 ||
      (setting == 5 && roll == 5) ||
      (range == 1 && roll == 5)
    ) {
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
      };
    }
    //  PARTS OF A WHOLE ( UNITARY )
    if (
      setting == 6 ||
      (setting == 6 && roll == 6) ||
      (range == 1 && roll == 6)
    ) {
      const perPacket = genNumbers(3) + 2;
      return {
        rollz: 6,
        each: perPacket,
        packets: genNumbers(5) + 2,
        left: genNumbers(perPacket - 1) + 1,
      };
    }

    //WHOLE AND PARTS (UNITARY)
    if (setting == 7) {
      return {
        eachUnit: genNumbers(5) + 2,
        units: genNumbers(3) + 2,
        situation: genNumbers(10) + 10,
        type: genNumbers(3),
      };
    }
  }
  // setting
  if (level == "heuThree") {
    // let roll = genNumbers(7)+1
    // let roll = undefined;
    // let settingText = setting.toString();

    // if (settingText.includes("-")) {
    //   console.log("range detected");
    //   range = 1;
    //   settingText.split("-");
    //   if (!heuArr.length) {
    //     for (let i = 1; i <= settingText[settingText.length - 1]; i++) {
    //       heuArr.push(i);
    //     }
    //     console.log(heuArr);
    //   }
    //   roll = heuArr[genNumbers(heuArr.length)];
    //   let index = heuArr.indexOf(roll);
    //   heuArr.splice(index, 1);
    // } else {
    //   console.log("Not range detected");
    //   setting = parseInt(setting);
    //   if (isNaN(setting)) {
    //     setting = 9;
    //   }
    // }

    // if (setting == 9) {
    //   if (!heuArr.length) {
    //     heuArr = [1, 2, 3, 4, 5, 6, 7, 8];
    //     console.log("array renewed! " + heuArr);
    //   }
    //   roll = heuArr[genNumbers(heuArr.length)];
    //   let index = heuArr.indexOf(roll);
    //   heuArr.splice(index, 1);
    //   console.log("Current remaining arr is " + heuArr);
    // }
    setting = calArrAll(8, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

    if (setting == 1) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: (genNumbers(5) + 1) * 2,
        numTwo: (genNumbers(5) + 1) * 2,
        rollAnswer: genNumbers(2),
        rollz: 1,
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
        rollz: 2,
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
        rollz: 3,
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
        rollz: 4,
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
        rollz: 5,
      };
    }

    if (setting == 6) {
      return {
        rollz: 6,
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
        rollz: 7,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        difference: (genNumbers(20) - 10) * 2,
        transfer: ["A", "B"][genNumbers(2)],
        transferV: genNumbers(10) + 1,
      };
    }

    if (setting == 8) {
      return {
        rollz: 8,
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
    setting = calArrAll(5, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

    if (
      setting == 1 ||
      (setting == 9 && roll == 1) ||
      (range == 1 && roll == 1)
    ) {
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
      };
    }

    if (
      setting == 2 ||
      (setting == 9 && roll == 2) ||
      (range == 1 && roll == 2)
    ) {
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
        rollz: 2,
      };
    }

    if (
      setting == 3 ||
      (setting == 9 && roll == 3) ||
      (range == 1 && roll == 3)
    ) {
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
        rollz: 3,
      };
    }

    if (
      setting == 4 ||
      (setting == 9 && roll == 4) ||
      (range == 1 && roll == 4)
    ) {
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
        rollz: 4,
        othersLast: undefined,
      };
    }
    // WORKING BACKWARDS: STRAIGHTLINE
    if (
      setting == 5 ||
      (setting == 9 && roll == 5) ||
      (range == 1 && roll == 5)
    ) {
      return {
        num: genNumbers(1000) + 2,
        rollz: 5,
        sitPlus: genNumbers(100) + 1,
        sitMinus: genNumbers(100) + 1,
        sitTimes: genNumbers(5) + 2,
        sitDivide: genNumbers(5) + 2,
      };
    }
  }
  // setting

  if (level == "heuFour") {
    setting = calArrAll(7, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

    if (setting == 1) {
      return {
        rollz: 1,
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
        rollz: 2,
      };
    }

    if (setting == 3) {
      return {
        peopleAtFirst: genNumbers(8) + 3,
        absentPeople: undefined,
        remainingPeople: undefined,
        giveUp: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
        rollz: 3,
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
        rollz: 4,
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
        rollz: 5,
      };
    }

    if (setting == 6) {
      return {
        rollz: 6,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectTwoQ: genNumbers(3) + 2,
        total: genNumbers(45) + 5,
        rollQn: ["A", "B"][genNumbers(2)],
      };
    }

    if (setting == 7) {
      return {
        rollz: 7,
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
    setting = calArrAll(6, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

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
      };
    }
    if (setting == 2) {
      return {
        version: genNumbers(4),
        numOne: genNumbers(50) + 4,
        numTwo: genNumbers(50) + 4,
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
      };
    }
  }
  // Stats
  if (level == "heuFive") {
    setting = calArrAll(8, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

    if (setting == 1) {
      return {
        rollz: 1,
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
        rollz: 2,
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
        rollz: 3,
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
        rollz: 4,
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
        rollz: 5,
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
        rollz: 6,
        people: genNumbers(10) + 5,
        location: ["party", "gathering", "picnic"][genNumbers(3)],
        type: genNumbers(2),
      };
    }

    if (setting == 7) {
      return {
        rollz: 7,
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
    setting = calArrAll(5, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

    if (setting == 1) {
      const gen_denoOne = genNumbers(4) + 2;
      const gen_denoTwo = genNumbers(4) + 2;
      const gen_denoThree = genNumbers(4) + 2;
      const situation = ["+", "-"][genNumbers(2)];
      return {
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
      };
    }

    // UNCHANGED TOTAL (IF)
    if (setting == 5) {
      return {
        valueA: (genNumbers(9) + 1) * 5,
        valueB: (genNumbers(9) + 1) * 5,
        question: ["A", "B"][genNumbers(2)],
      };
    }
  }

  //SETTINGS
  if (level == "heuSix") {
    setting = calArrAll(6, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);
    // LOWEST COMMON TIME
    if (setting == 1) {
      return {
        type: ["merge", "split"][genNumbers(2)],
        version: ["paint", "tap"][genNumbers(2)],
        timeA: genNumbers(10) + 1,
        timeB: genNumbers(10) + 1,
        total: undefined,
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
        // version: genNumbers(3),
        version: 2,
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
      };
    }
    // IDENTICAL EFFECT: DISCOUNT
    if (setting == 6) {
      return {
        originalA: genNumbers(999) + 100,
        originalB: genNumbers(999) + 100,
        discount: (genNumbers(10) + 1) * 5,
      };
    }
  }

  if (level == "heuSixb") {
    setting = calArrAll(7, calArr, setting, 9);
    setting = checkRange(setting, calArr, skipArr);

    // SIMULTANEOUS EQUATION (PARTS AND UNITS) TYPE 1
    if (setting == 1) {
      return {
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
        question: ["A", "B"][genNumbers(2)],
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
      };
    }

    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 1 DIFFERENCE
    if (setting == 6) {
      return {
        quantityA: genNumbers(90) + 10,
        quantityB: genNumbers(90) + 10,
        priceA: [10, 20, 50, 100][genNumbers(4)],
        priceB: [10, 20, 50, 100][genNumbers(4)],

        // groups: genNumbers(89) + 10,
        question: ["VA", "VB", "QA", "QB", "T"][genNumbers(5)],
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

for (let i = 0; i < settingButton.length; i++) {
  settingButton[i].addEventListener("dblclick", function (e) {
    buttonLevel = this.innerHTML;
    // console.log(e);
    mulLevel = "nil";

    buttonLevelSetting();
    levelBox();
    workingContainer.classList.add("hidden");
  });
}

// INPUT TYPE 2
for (let i = 0; i < heuristics.length; i++) {
  heuristics[i].addEventListener("dblclick", function () {
    buttonLevel = this.innerHTML;
    mulLevel = "nil";
    buttonLevelSetting();
    levelBox();
    // if (this.textContent != "Heu.6") {
    document.querySelector(".input-box").classList.add("hidden");
    ourForm2.classList.remove("hidden");
    // }
  });
}

// for (let i = 0; i < calBtn.length; i++) {
//   calBtn[i].addEventListener("dblclick", function () {
//     buttonLevel = this.innerHTML;
//     mulLevel = "nil";

//     buttonLevelSetting();
//     levelBox();
//   });
// }

calBtn.forEach((item) => {
  item.addEventListener("dblclick", function () {
    buttonLevel = this.innerHTML;
    mulLevel = "nil";

    buttonLevelSetting();
    levelBox();
    if (buttonLevel != "Cal.6") {
      wholeNumberContainer.classList.toggle("hidden");
      workingContainer.classList.toggle("hidden");
    }
  });
});

hardcoreMode.addEventListener("click", function () {
  if (hardcore == 0) {
    hardcore = 1;
    easy = 0;
    mainBox.style.borderColor = "red";
    levelSetting.style.borderColor = "red";
  } else {
    hardcore = 0;
    mainBox.style.borderColor = "black";
    levelSetting.style.borderColor = "black";
  }
  console.log(hardcore, cutoff);
});

easyMode.addEventListener("click", function () {
  if (easy == 0) {
    easy = 1;
    hardcore = 0;
    mainBox.style.borderColor = "#39FF14";
    levelSetting.style.borderColor = "#39FF14";
  } else {
    easy = 0;
    mainBox.style.borderColor = "black";
    levelSetting.style.borderColor = "black";
  }
  console.log(hardcore);
});

// LEVEL SETTINGS
function buttonLevelSetting() {
  // if (levelArr.length != 0){
  //   buttonLevel = `Level ${levelArr[0]}`
  // }
  switch (buttonLevel) {
    case "Level 1.0":
      level = 1.0;
      scoreNeeded = 50;
      gold = highScore1DotZero.time;
      silver = highScore1DotZero.time + (cutoff - highScore1DotZero.time) / 3;
      bronze =
        highScore1DotZero.time + ((cutoff - highScore1DotZero.time) / 3) * 2;
      highScoreName.innerHTML = highScore1DotZero.name;
      highScoreTime.innerHTML = highScore1DotZero.time;
      highScoreMistakes.innerHTML = highScore1DotZero.mistake;
      break;

    case "Level 1.01":
      level = 1.01;
      scoreNeeded = 50;

      gold = highScore1DotZero1.time;
      silver = highScore1DotZero1.time + (cutoff - highScore1DotZero1.time) / 3;
      bronze =
        highScore1DotZero1.time + ((cutoff - highScore1DotZero1.time) / 3) * 2;
      highScoreName.innerHTML = highScore1DotZero1.name;
      highScoreTime.innerHTML = highScore1DotZero1.time;
      highScoreMistakes.innerHTML = highScore1DotZero1.mistake;
      break;

    case "Level 1.02":
      level = 1.02;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore1DotZero2.name;
      highScoreTime.innerHTML = highScore1DotZero2.time;
      highScoreMistakes.innerHTML = highScore1DotZero2.mistake;
      helpMe.style.fontSize = "1.5em";
      break;

    case "Level 1.03":
      level = 1.03;
      scoreNeeded = 50;
      gold = highScore1DotZero3.time;
      silver = highScore1DotZero3.time + (cutoff - highScore1DotZero.time3) / 3;
      bronze =
        highScore1DotZero3.time + ((cutoff - highScore1DotZero.time3) / 3) * 2;
      highScoreName.innerHTML = highScore1DotZero3.name;
      highScoreTime.innerHTML = highScore1DotZero3.time;
      highScoreMistakes.innerHTML = highScore1DotZero3.mistake;
      break;

    case "Level 1.04":
      level = 1.04;
      scoreNeeded = 30;
      gold = highScore1DotZero4.time;
      silver = highScore1DotZero4.time + (cutoff - highScore1DotZero.time4) / 3;
      bronze =
        highScore1DotZero4.time + ((cutoff - highScore1DotZero.time4) / 3) * 2;
      highScoreName.innerHTML = highScore1DotZero4.name;
      highScoreTime.innerHTML = highScore1DotZero4.time;
      highScoreMistakes.innerHTML = highScore1DotZero4.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      instructions.innerHTML = `
        1 + 2 = 3 or 3 = 2 + 1</br>
        c ± d = r or r = c ± d</br>
        Use: 'c+', 'c-', 'd-', 'r+' or 'r-' `;
      break;

    case "Level 1.05":
      level = 1.05;
      scoreNeeded = 30;
      gold = highScore1DotZero5.time;
      silver = highScore1DotZero5.time + (cutoff - highScore1DotZero5.time) / 3;
      bronze =
        highScore1DotZero5.time + ((cutoff - highScore1DotZero5.time) / 3) * 2;
      highScoreName.innerHTML = highScore1DotZero5.name;
      highScoreTime.innerHTML = highScore1DotZero5.time;
      highScoreMistakes.innerHTML = highScore1DotZero5.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      instructions.innerHTML =
        "Answer using</br> 'c+', 'c-', 'd-', 'r+' or 'r-' ";
      break;

    case "Level 1.06":
      level = 1.06;
      scoreNeeded = 30;
      gold = highScore1DotZero6.time;
      silver = highScore1DotZero6.time + (cutoff - highScore1DotZero6.time) / 3;
      bronze =
        highScore1DotZero6.time + ((cutoff - highScore1DotZero6.time) / 3) * 2;
      highScoreName.innerHTML = highScore1DotZero6.name;
      highScoreTime.innerHTML = highScore1DotZero6.time;
      highScoreMistakes.innerHTML = highScore1DotZero5.mistake;
      instructions.textContent = "";
      break;

    case "Level 1.07":
      level = 1.07;
      scoreNeeded = 30;
      gold = highScore1DotZero7.time;
      silver = highScore1DotZero7.time + (cutoff - highScore1DotZero7.time) / 3;
      bronze =
        highScore1DotZero7.time + ((cutoff - highScore1DotZero7.time) / 3) * 2;
      highScoreName.innerHTML = highScore1DotZero7.name;
      highScoreTime.innerHTML = highScore1DotZero7.time;
      highScoreMistakes.innerHTML = highScore1DotZero7.mistake;
      displayProblem.style.fontSize = "25px";
      document.querySelector("#user-input").style.marginTop = "100px";
      break;

    case "Level 1.08":
      level = 1.08;
      scoreNeeded = 20;
      // gold = highScore1DotZero7.time
      // silver = highScore1DotZero7.time+((cutoff-highScore1DotZero7.time)/3)
      // bronze = highScore1DotZero7.time+((cutoff-highScore1DotZero7.time)/3)*2
      // highScoreName.innerHTML = highScore1DotZero7.name
      // highScoreTime.innerHTML = highScore1DotZero7.time
      // highScoreMistakes.innerHTML = highScore1DotZero7.mistake
      // displayProblem.style.fontSize = "25px";
      // document.querySelector("#user-input").style.marginTop = "100px";
      instructions.textContent = "Give the answer.";
      displayProblem.style.textAlign = "left";
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 2.0":
      level = 2.0;
      scoreNeeded = 50;
      highScoreName.innerHTML = highScore2DotZero.name;
      highScoreTime.innerHTML = highScore2DotZero.time;
      highScoreMistakes.innerHTML = highScore2DotZero.mistake;
      break;

    case "Level 2.01":
      level = 2.01;
      scoreNeeded = 50;
      gold = highScore2DotZero1.time;
      silver = highScore2DotZero1.time + (cutoff - highScore2DotZero1.time) / 3;
      bronze =
        highScore2DotZero1.time + ((cutoff - highScore2DotZero1.time) / 3) * 2;
      highScoreName.innerHTML = highScore2DotZero1.name;
      highScoreTime.innerHTML = highScore2DotZero1.time;
      highScoreMistakes.innerHTML = highScore2DotZero1.mistake;
      break;

    case "Level 2.02":
      level = 2.02;
      scoreNeeded = 30;
      gold = highScore2DotZero2.time;
      silver = highScore2DotZero2.time + (cutoff - highScore2DotZero2.time) / 3;
      bronze =
        highScore2DotZero2.time + ((cutoff - highScore2DotZero2.time) / 3) * 2;
      highScoreName.innerHTML = highScore2DotZero2.name;
      highScoreTime.innerHTML = highScore2DotZero2.time;
      highScoreMistakes.innerHTML = highScore2DotZero2.mistake;
      displayProblem.style.fontSize = "25px";
      digit = prompt(
        "How many digits?\n3. Primary 2\n4. Primary 3\n5. Primary 4\n6. Primary 5\n7. Primary 6"
      );
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      break;

    case "Level 2.03":
      level = 2.03;
      scoreNeeded = 50;
      gold = highScore2DotZero3.time;
      highScoreName.innerHTML = highScore2DotZero3.name;
      highScoreTime.innerHTML = highScore2DotZero3.time;
      highScoreMistakes.innerHTML = highScore2DotZero3.mistake;
      break;

    case "Level 2.04":
      level = 2.04;
      scoreNeeded = 30;
      gold = highScore2DotZero4.time;
      silver = highScore2DotZero4.time + (cutoff - highScore2DotZero4.time) / 3;
      bronze =
        highScore2DotZero4.time + ((cutoff - highScore2DotZero4.time) / 3) * 2;
      highScoreName.innerHTML = highScore2DotZero4.name;
      highScoreTime.innerHTML = highScore2DotZero4.time;
      highScoreMistakes.innerHTML = highScore2DotZero4.mistake;
      break;

    case "Level 2.05":
      level = 2.05;
      scoreNeeded = 20;
      gold = highScore2DotZero5.time;
      silver = highScore2DotZero5.time + (cutoff - highScore2DotZero5.time) / 3;
      bronze =
        highScore2DotZero5.time + ((cutoff - highScore2DotZero5.time) / 3) * 2;
      digit = prompt(
        "How many digits?\n3. Primary 2\n4. Primary 3\n5. Primary 4\n6. Primary 5\n7. Primary 6"
      );
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      highScoreName.innerHTML = highScore2DotZero5.name;
      highScoreTime.innerHTML = highScore2DotZero5.time;
      highScoreMistakes.innerHTML = highScore2DotZero5.mistake;
      instructions.textContent = "Form the Number";
      displayProblem.style.fontSize = "25px";
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 2.06":
      level = 2.06;
      scoreNeeded = 20;
      gold = highScore2DotZero6.time;
      silver = highScore2DotZero6.time + (cutoff - highScore2DotZero6.time) / 3;
      bronze =
        highScore2DotZero6.time + ((cutoff - highScore2DotZero6.time) / 3) * 2;
      highScoreName.innerHTML = highScore2DotZero6.name;
      highScoreTime.innerHTML = highScore2DotZero6.time;
      highScoreMistakes.innerHTML = highScore2DotZero6.mistake;
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 2.07":
      level = 2.07;
      scoreNeeded = 50;
      gold = highScore2DotZero7.time;
      silver = highScore2DotZero7.time + (cutoff - highScore2DotZero7.time) / 3;
      bronze =
        highScore2DotZero7.time + ((cutoff - highScore2DotZero7.time) / 3) * 2;
      highScoreName.innerHTML = highScore2DotZero7.name;
      highScoreTime.innerHTML = highScore2DotZero7.time;
      highScoreMistakes.innerHTML = highScore2DotZero7.mistake;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainer.classList.remove("hidden");
      instructions.textContent = "Answer using '1' or '2' only";
      document.querySelector("#user-input").setAttribute("type", "number");
      document.querySelector("#user-input").setAttribute("min", "1");
      document.querySelector("#user-input").setAttribute("max", "2");
      break;

    case "Level 2.08":
      level = 2.08;
      scoreNeeded = 10;
      gold = highScore2DotZero8.time;
      highScoreName.innerHTML = highScore2DotZero8.name;
      highScoreTime.innerHTML = highScore2DotZero8.time;
      highScoreMistakes.innerHTML = highScore2DotZero8.mistake;
      displayProblem.style.fontSize = "25px";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Level 2.09":
      level = 2.09;
      scoreNeeded = 10;
      gold = highScore2DotZero9.time;
      silver = highScore2DotZero9.time + (cutoff - highScore2DotZero9.time) / 3;
      bronze =
        highScore2DotZero9.time + ((cutoff - highScore2DotZero9.time) / 3) * 2;
      highScoreName.innerHTML = highScore2DotZero9.name;
      highScoreTime.innerHTML = highScore2DotZero9.time;
      highScoreMistakes.innerHTML = highScore2DotZero9.mistake;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Level 3.0":
      level = 3.0;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3DotZero.name;
      highScoreTime.innerHTML = highScore3DotZero.time;
      highScoreMistakes.innerHTML = highScore3DotZero.mistake;
      break;

    case "Level 3.01":
      level = 3.01;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3DotZero1.name;
      highScoreTime.innerHTML = highScore3DotZero1.time;
      highScoreMistakes.innerHTML = highScore3DotZero1.mistake;
      break;

    case "Level 3.02":
      level = 3.02;
      scoreNeeded = 30;
      gold = 141;
      silver = 230;
      highScoreName.innerHTML = highScore3DotZero2.name;
      highScoreTime.innerHTML = highScore3DotZero2.time;
      highScoreMistakes.innerHTML = highScore3DotZero2.mistake;
      document.querySelector("#user-input").setAttribute("max", "9999999");
      break;

    case "Level 3.03":
      level = 3.03;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3DotZero3.name;
      highScoreTime.innerHTML = highScore3DotZero3.time;
      highScoreMistakes.innerHTML = highScore3DotZero3.mistake;
      break;

    case "Level 3.04":
      level = 3.04;
      scoreNeeded = 30;
      gold = 284;
      silver = 521;
      highScoreName.innerHTML = highScore3DotZero4.name;
      highScoreTime.innerHTML = highScore3DotZero4.time;
      highScoreMistakes.innerHTML = highScore3DotZero4.mistake;
      break;

    case "Level 3.05":
      level = 3.05;
      scoreNeeded = 30;
      highScoreName.innerHTML = highScore3DotZero5.name;
      highScoreTime.innerHTML = highScore3DotZero5.time;
      highScoreMistakes.innerHTML = highScore3DotZero5.mistake;
      break;

    case "Level 3.06":
      level = 3.06;
      scoreNeeded = 30;
      gold = highScore3DotZero6.time;
      highScoreName.innerHTML = highScore3DotZero6.name;
      highScoreTime.innerHTML = highScore3DotZero6.time;
      highScoreMistakes.innerHTML = highScore3DotZero6.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      instructions.innerHTML = `Do not leave any spaces.</br>
        Answer using capital 'L' and 'ml' for volume`;
      helpMe.textContent = `Include units`;
      break;

    case "Level 3.07":
      level = 3.07;
      scoreNeeded = 30;
      gold = highScore3DotZero7.time;
      highScoreName.innerHTML = highScore3DotZero7.name;
      highScoreTime.innerHTML = highScore3DotZero7.time;
      highScoreMistakes.innerHTML = highScore3DotZero7.mistake;
      instructions.innerHTML = `Lowest Common Multiple</br>
        5, 3, 2 => 15</br>
        5, 3, 5 => 5,15</br>
        `;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 3.08":
      level = 3.08;
      scoreNeeded = 20;
      gold = highScore3DotZero8.time;
      highScoreName.innerHTML = highScore3DotZero8.name;
      highScoreTime.innerHTML = highScore3DotZero8.time;
      highScoreMistakes.innerHTML = highScore3DotZero8.mistake;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 3.09":
      level = 3.09;
      scoreNeeded = 30;
      gold = highScore3DotZero9.time;
      highScoreName.innerHTML = highScore3DotZero9.name;
      highScoreTime.innerHTML = highScore3DotZero9.time;
      highScoreMistakes.innerHTML = highScore3DotZero9.mistake;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      instructions.textContent = "Formate: 2/3";
      break;

    case "Level 3.10":
      level = 3.1;
      scoreNeeded = 30;
      gold = highScore3DotZero10.time;
      silver =
        highScore3DotZero10.time + (cutoff - highScore3DotZero10.time) / 3;
      bronze =
        highScore3DotZero10.time +
        ((cutoff - highScore3DotZero10.time) / 3) * 2;
      highScoreName.innerHTML = highScore3DotZero10.name;
      highScoreTime.innerHTML = highScore3DotZero10.time;
      highScoreMistakes.innerHTML = highScore3DotZero10.mistake;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      instructions.textContent = "";
      break;

    case "Level 3.11":
      level = 3.11;
      scoreNeeded = 30;
      gold = highScore3DotZero11.time;
      silver =
        highScore3DotZero11.time + (cutoff - highScore3DotZero11.time) / 3;
      bronze =
        highScore3DotZero11.time +
        ((cutoff - highScore3DotZero11.time) / 3) * 2;
      highScoreName.innerHTML = highScore3DotZero11.name;
      highScoreTime.innerHTML = highScore3DotZero11.time;
      highScoreMistakes.innerHTML = highScore3DotZero11.mistake;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      instructions.textContent = "";
      break;

    case "Level 3.12":
      level = 3.12;
      scoreNeeded = 20;
      gold = 72;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      displayProblem.style.marginTop = "0";
      // instructions.textContent = "Form an Equation from the pattern";
      break;

    // case "Level 3.13":
    //   level = 3.13;
    //   scoreNeeded = 20;
    //   gold = 471;
    //   highScoreName.innerHTML = highScore3DotZero13.name;
    //   highScoreTime.innerHTML = highScore3DotZero13.time;
    //   highScoreMistakes.innerHTML = highScore3DotZero13.mistake;
    //   document.querySelector("#user-input").setAttribute("type", "text");
    //   displayProblem.style.fontSize = "25px";
    //   displayProblem.style.marginTop = "0";
    //   instructions.textContent =
    //     "Form an Equation using 'n' from the pattern and provide an answer";
    //   break;

    // case "Level 3.14":
    //   level = 3.14;
    //   scoreNeeded = 20;
    //   gold = highScore3DotZero14.time;
    //   highScoreName.innerHTML = highScore3DotZero14.name;
    //   highScoreTime.innerHTML = highScore3DotZero14.time;
    //   highScoreMistakes.innerHTML = highScore3DotZero14.mistake;
    //   document.querySelector("#user-input").setAttribute("type", "text");
    //   displayProblem.style.fontSize = "25px";
    //   displayProblem.style.marginTop = "0";
    //   instructions.textContent =
    //     "Form an Equation from the pattern and provide an answer";
    //   break;

    // case "Level 3.15":
    //   level = 3.15;
    //   scoreNeeded = 20;
    //   gold = highScore3DotZero15.time;
    //   silver =
    //     highScore3DotZero15.time + (cutoff - highScore3DotZero15.time) / 3;
    //   bronze =
    //     highScore3DotZero15.time +
    //     ((cutoff - highScore3DotZero15.time) / 3) * 2;
    //   highScoreName.innerHTML = highScore3DotZero15.name;
    //   highScoreTime.innerHTML = highScore3DotZero15.time;
    //   highScoreMistakes.innerHTML = highScore3DotZero15.mistake;
    //   document.querySelector("#user-input").setAttribute("type", "text");
    //   displayProblem.style.fontSize = "25px";
    //   displayProblem.style.marginTop = "0";
    //   instructions.textContent =
    //     "Take note of the repeated pattern and use it to find the position of the other pattern";
    //   break;

    case "Level 3.16":
      level = 3.16;
      setting = prompt(
        "1. Triangle Pattern\n2. Continuous Pattern\n3. Square Number Pattern\n4. Position Pattern\n\n9. All",
        9
      );
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      displayProblem.style.marginTop = "0";
      if (setting == 1) {
        instructions.textContent =
          "Form an Equation using 'n' from the pattern and provide an answer";
      }
      if (setting == 2) {
        instructions.textContent =
          "Form an Equation from the pattern and provide an answer";
      }
      if (setting == 3) {
        instructions.textContent =
          "Take note of the repeated pattern and use it to find the position of the other pattern";
      }
      if (setting == 4) {
        instructions.textContent =
          "Form an Equation using 'n' from the pattern and provide an answer";
      }
      if (setting == 9) {
        instructions.innerHTML =
          "Continuous Pattern:</p>Form an Equation using 'n' from the pattern and provide an answer";
      }
      break;

    case "Level 3.17":
      level = 3.17;
      scoreNeeded = 20;
      gold = highScore3DotZero17.time;
      highScoreName.innerHTML = highScore3DotZero17.name;
      highScoreTime.innerHTML = highScore3DotZero17.time;
      highScoreMistakes.innerHTML = highScore3DotZero17.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 3.18":
      level = 3.18;
      scoreNeeded = 20;
      gold = highScore3DotZero18.time;
      silver =
        highScore3DotZero18.time + (cutoff - highScore3DotZero18.time) / 3;
      bronze =
        highScore3DotZero18.time +
        ((cutoff - highScore3DotZero18.time) / 3) * 2;
      highScoreName.innerHTML = highScore3DotZero18.name;
      highScoreTime.innerHTML = highScore3DotZero18.time;
      highScoreMistakes.innerHTML = highScore3DotZero18.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 3.19":
      difficulty = prompt("1. Basics\n2. Reverse\n\n9. All", 9);
      level = 3.19;
      scoreNeeded = 20;
      gold = highScore3DotZero19.time;
      silver =
        highScore3DotZero19.time + (cutoff - highScore3DotZero19.time) / 3;
      bronze =
        highScore3DotZero19.time +
        ((cutoff - highScore3DotZero19.time) / 3) * 2;
      highScoreName.innerHTML = highScore3DotZero19.name;
      highScoreTime.innerHTML = highScore3DotZero19.time;
      highScoreMistakes.innerHTML = highScore3DotZero19.mistake;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.0":
      level = 4.0;
      scoreNeeded = 10;
      gold = highScore4DotZero.time;
      silver = highScore4DotZero.time + (cutoff - highScore4DotZero.time) / 3;
      bronze =
        highScore4DotZero.time + ((cutoff - highScore4DotZero.time) / 3) * 2;
      highScoreName.innerHTML = highScore4DotZero.name;
      highScoreTime.innerHTML = highScore4DotZero.time;
      highScoreMistakes.innerHTML = highScore4DotZero.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      instructions.innerHTML = `List the factors in pairs</br>
        in ascending order.
        `;
      break;

    case "Level 4.01":
      level = "4.01";
      scoreNeeded = 30;
      gold = 229;
      highScoreName.innerHTML = highScore4DotZero1.name;
      highScoreTime.innerHTML = highScore4DotZero1.time;
      highScoreMistakes.innerHTML = highScore4DotZero1.mistake;
      document.querySelector("#user-input").setAttribute("max", "100000");
      break;

    case "Level 4.02":
      level = "4.02";
      scoreNeeded = 30;
      gold = highScore4DotZero1.time;
      highScoreName.innerHTML = highScore4DotZero1.name;
      highScoreTime.innerHTML = highScore4DotZero1.time;
      highScoreMistakes.innerHTML = highScore4DotZero1.mistake;
      displayProblem.style.fontSize = "25px";
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      break;

    case "Level 4.03":
      level = "4.03";
      scoreNeeded = 30;
      gold = 264;
      highScoreName.innerHTML = highScore4DotZero3.name;
      highScoreTime.innerHTML = highScore4DotZero3.time;
      highScoreMistakes.innerHTML = highScore4DotZero3.mistake;
      document.querySelector("#user-input").setAttribute("step", "0.000001");
      break;

    case "Level 4.04":
      level = 4.04;
      scoreNeeded = 30;
      gold = 310;
      highScoreName.innerHTML = highScore4DotZero4.name;
      highScoreTime.innerHTML = highScore4DotZero4.time;
      highScoreMistakes.innerHTML = highScore4DotZero4.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.05":
      level = 4.05;
      scoreNeeded = 30;
      gold = highScore4DotZero5.time;
      silver = highScore4DotZero5.time + (cutoff - highScore4DotZero5.time) / 3;
      bronze =
        highScore4DotZero5.time + ((cutoff - highScore4DotZero5.time) / 3) * 2;
      highScoreName.innerHTML = highScore4DotZero5.name;
      highScoreTime.innerHTML = highScore4DotZero5.time;
      highScoreMistakes.innerHTML = highScore4DotZero5.mistake;
      document.querySelector("#user-input").setAttribute("step", "0.000001");
      break;

    // case "Level 4.06":
    //   level = 4.06;
    //   scoreNeeded = 30;
    //   gold = highScore4DotZero6.time;
    //   silver = highScore4DotZero6.time + (cutoff - highScore4DotZero6.time) / 3;
    //   bronze =
    //     highScore4DotZero6.time + ((cutoff - highScore4DotZero6.time) / 3) * 2;
    //   highScoreName.innerHTML = highScore4DotZero6.name;
    //   highScoreTime.innerHTML = highScore4DotZero6.time;
    //   highScoreMistakes.innerHTML = highScore4DotZero6.mistake;
    //   document.querySelector("#user-input").setAttribute("step", "0.000001");
    //   break;

    // case "Level 4.07":
    //   level = 4.07;
    //   scoreNeeded = 30;
    //   highScoreName.innerHTML = highScore4DotZero7.name;
    //   highScoreTime.innerHTML = highScore4DotZero7.time;
    //   highScoreMistakes.innerHTML = highScore4DotZero7.mistake;
    //   document.querySelector("#user-input").setAttribute("step", "0.000001");
    //   break;

    case "Level 4.08":
      setting = prompt(
        "1. Decimal Conversion: Big to Small\n2. Decimal Conversion: Small to Big\n\n9. All",
        9
      );
      if (setting != 1 && setting != 2 && setting != 9) setting = 9;
      level = 4.08;
      scoreNeeded = 30;
      gold = 207;
      highScoreName.innerHTML = highScore4DotZero8.name;
      highScoreTime.innerHTML = highScore4DotZero8.time;
      highScoreMistakes.innerHTML = highScore4DotZero8.mistake;
      document.querySelector("#user-input").setAttribute("step", "0.000001");
      break;

    case "Level 4.10":
      level = 4.1;
      setting = prompt("1. Halfing\n2. Opposite\n\n9. All");
      if (setting != 1 && setting != 2) setting = 9;
      scoreNeeded = 20;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainer.classList.remove("hidden");
      instructions.innerHTML = `
        Answer using 1 or 2.
        `;
      document.querySelector("#user-input").setAttribute("type", "number");
      document.querySelector("#user-input").setAttribute("min", "1");
      document.querySelector("#user-input").setAttribute("max", "2");

      break;

    case "Level 4.11":
      setting = prompt(
        "1. Mixed to improper fraction\n2. Improper to Mixed fraction\n\n9. All",
        9
      );
      level = 4.11;
      scoreNeeded = 20;
      gold = highScore4DotZero11.time;
      silver =
        highScore4DotZero11.time + (cutoff - highScore4DotZero11.time) / 3;
      bronze =
        highScore4DotZero11.time +
        ((cutoff - highScore4DotZero11.time) / 3) * 2;
      highScoreName.innerHTML = highScore4DotZero11.name;
      highScoreTime.innerHTML = highScore4DotZero11.time;
      highScoreMistakes.innerHTML = highScore4DotZero11.mistake;
      wholeNumberContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      instructions.textContent = "";
      break;

    case "Level 4.12":
      level = 4.12;
      scoreNeeded = 30;
      setting = Math.abs(
        prompt(
          "1. Numerator with value\n2. Multiplication of Fractions\n\n9. All",
          9
        )
      );
      gold = 134;
      silver = 153;
      highScoreName.innerHTML = highScore4DotZero12.name;
      highScoreTime.innerHTML = highScore4DotZero12.time;
      highScoreMistakes.innerHTML = highScore4DotZero12.mistake;
      instructions.textContent = "";
      displayProblem.style.fontSize = "25px";
      displayProblem.style.marginBottom = "150px";
      break;

    case "Level 4.13":
      level = 4.13;
      scoreNeeded = 20;
      gold = 297;
      silver = 376;
      highScoreName.innerHTML = highScore4DotZero13.name;
      highScoreTime.innerHTML = highScore4DotZero13.time;
      highScoreMistakes.innerHTML = highScore4DotZero13.mistake;
      instructions.textContent = "";
      displayProblem.style.fontSize = "25px";
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.14":
      level = 4.14;
      scoreNeeded = 30;
      gold = 49;
      highScoreName.innerHTML = highScore4DotZero14.name;
      highScoreTime.innerHTML = highScore4DotZero14.time;
      highScoreMistakes.innerHTML = highScore4DotZero14.mistake;
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

    // case "Level 4.15":
    //   level = 4.15;
    //   scoreNeeded = 10;
    //   highScoreName.innerHTML = highScore4DotZero15.name;
    //   highScoreTime.innerHTML = highScore4DotZero15.time;
    //   highScoreMistakes.innerHTML = highScore4DotZero15.mistake;
    //   document.querySelector("#user-input").setAttribute("type", "text");
    //   document.querySelector("#user-input").style.width = "250px";
    //   displayProblem.style.textAlign = "left";
    //   displayProblem.style.fontSize = "20px";
    //   instructions.innerHTML = `Give your final answer.
    //     `;
    //   break;

    case "Level 4.16":
      level = 4.16;
      scoreNeeded = 20;
      gold = highScore4DotZero16.time;
      silver =
        highScore4DotZero16.time + (cutoff - highScore4DotZero16.time) / 3;
      bronze =
        highScore4DotZero16.time +
        ((cutoff - highScore4DotZero16.time) / 3) * 2;
      highScoreName.innerHTML = highScore4DotZero16.name;
      highScoreTime.innerHTML = highScore4DotZero16.time;
      highScoreMistakes.innerHTML = highScore4DotZero16.mistake;
      displayProblem.style.fontSize = "25px";
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("max", "200000");
      break;

    case "Level 4.17":
      level = 4.17;
      scoreNeeded = 20;
      gold = highScore4DotZero17.time;
      silver =
        highScore4DotZero17.time + (cutoff - highScore4DotZero17.time) / 3;
      bronze =
        highScore4DotZero17.time +
        ((cutoff - highScore4DotZero17.time) / 3) * 2;
      highScoreName.innerHTML = highScore4DotZero17.name;
      highScoreTime.innerHTML = highScore4DotZero17.time;
      highScoreMistakes.innerHTML = highScore4DotZero17.mistake;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.18":
      level = 4.18;
      scoreNeeded = 20;
      gold = highScore4DotZero18.time;
      highScoreName.innerHTML = highScore4DotZero18.name;
      highScoreTime.innerHTML = highScore4DotZero18.time;
      highScoreMistakes.innerHTML = highScore4DotZero18.mistake;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      arr = ["A", "B", "C", "D", "O", "F", "G", "H", "I"];
      arr2 = ["B", "C", "F", "I", "H", "G", "D", "A"];
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.19":
      level = 4.19;
      scoreNeeded = 20;
      gold = highScore4DotZero19.time;
      silver =
        highScore4DotZero19.time + (cutoff - highScore4DotZero19.time) / 3;
      bronze =
        highScore4DotZero.time + ((cutoff - highScore4DotZero19.time) / 3) * 2;
      highScoreName.innerHTML = highScore4DotZero19.name;
      highScoreTime.innerHTML = highScore4DotZero19.time;
      highScoreMistakes.innerHTML = highScore4DotZero19.mistake;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Level 4.20":
      level = 4.2;
      scoreNeeded = 10;
      gold = highScore4Dot2Zero.time;
      silver = highScore4Dot2Zero.time + (cutoff - highScore4Dot2Zero.time) / 3;
      bronze =
        highScore4DotZero.time + ((cutoff - highScore4Dot2Zero.time) / 3) * 2;
      highScoreName.innerHTML = highScore4Dot2Zero.name;
      highScoreTime.innerHTML = highScore4Dot2Zero.time;
      highScoreMistakes.innerHTML = highScore4Dot2Zero.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.21":
      difficulty = prompt(
        "0. Perfect Cutting\n1. Rectangle\n2. Cuboid\n3. Circles\n\n4. Everything"
      );
      level = 4.21;
      scoreNeeded = 10;
      gold = highScore4Dot21.time;
      silver = highScore4Dot21.time + (cutoff - highScore4Dot21.time) / 3;
      bronze = highScore4Dot21.time + ((cutoff - highScore4Dot21.time) / 3) * 2;
      highScoreName.innerHTML = highScore4Dot21.name;
      highScoreTime.innerHTML = highScore4Dot21.time;
      highScoreMistakes.innerHTML = highScore4Dot21.mistake;
      displayProblem.style.fontSize = "20px";
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    // case "Level 4.22":
    //   level = 4.22;
    //   scoreNeeded = 10;
    //   gold = highScore4DotZero22.time;
    //   silver =
    //     highScore4DotZero22.time + (cutoff - highScore4DotZero22.time) / 3;
    //   bronze =
    //     highScore4DotZero22.time +
    //     ((cutoff - highScore4DotZero22.time) / 3) * 2;
    //   highScoreName.innerHTML = highScore4DotZero22.name;
    //   highScoreTime.innerHTML = highScore4DotZero22.time;
    //   highScoreMistakes.innerHTML = highScore4DotZero22.mistake;
    //   wholeNumberContainer.classList.add("hidden");
    //   fractionsContainerTwo.classList.remove("hidden");
    //   document.querySelector("#user-input").setAttribute("type", "text");
    //   instructions.textContent = "";
    //   break;

    case "Level 4.22":
      level = 4.22;
      scoreNeeded = 10;
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.23":
      level = 4.23;
      scoreNeeded = 6;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";

      break;

    case "Level 4.24":
      level = 4.24;
      scoreNeeded = 20;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      instructions.innerHTML = `
        Do not need to simplify.
        `;
      break;

    case "Level 4.25":
      level = 4.25;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "20px";
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 4.26":
      level = 4.26;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "20px";
      displayProblem.style.textAlign = "left";
      helpMe.style.fontSize = "10px";
      helpMe.style.lineHeight = "0";
      helpMe.style.letterSpacing = "4px";

      break;

    case "Level 5.0":
      level = 5.0;
      scoreNeeded = 20;
      // gold = highScore5DotZero.time;
      // silver = highScore5DotZero.time + (cutoff - highScore5DotZero.time) / 3;
      // bronze =
      //   highScore5DotZero.time + ((cutoff - highScore5DotZero.time) / 3) * 2;
      // highScoreName.innerHTML = highScore5DotZero.name;
      // highScoreTime.innerHTML = highScore5DotZero.time;
      // highScoreMistakes.innerHTML = highScore5DotZero.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "20px";
      displayProblem.style.textAlign = "left";
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
      gold = 80;
      highScoreName.innerHTML = highScore5DotZero1.name;
      highScoreTime.innerHTML = highScore5DotZero1.time;
      highScoreMistakes.innerHTML = highScore5DotZero1.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      instructions.innerHTML =
        "Form an equation using</br> multiplication of fraction </br> RC = from x want";
      break;

    case "Level 5.02":
      level = 5.02;
      scoreNeeded = 10;
      gold = highScore5DotZero2.time;
      highScoreName.innerHTML = highScore5DotZero2.name;
      highScoreTime.innerHTML = highScore5DotZero2.time;
      highScoreMistakes.innerHTML = highScore5DotZero2.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      instructions.innerHTML = "Form an equation using in fraction";
      break;

    case "Level 5.03":
      level = 5.03;
      scoreNeeded = 20;
      gold = highScore5DotZero3.time;
      highScoreName.innerHTML = highScore5DotZero3.name;
      highScoreTime.innerHTML = highScore5DotZero3.time;
      highScoreMistakes.innerHTML = highScore5DotZero3.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      instructions.innerHTML = `
        Calculate the results for decimals and leave the rest in equation form.
        `;
      break;

    case "Level 5.04":
      level = 5.04;
      scoreNeeded = 10;
      gold = highScore5DotZero4.time;
      silver = highScore5DotZero4.time + (cutoff - highScore5DotZero4.time) / 3;
      bronze =
        highScore5DotZero4.time + ((cutoff - highScore5DotZero4.time) / 3) * 2;
      highScoreName.innerHTML = highScore5DotZero4.name;
      highScoreTime.innerHTML = highScore5DotZero4.time;
      highScoreMistakes.innerHTML = highScore5DotZero4.mistake;
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
      highScoreName.innerHTML = highScore5DotZero5.name;
      highScoreTime.innerHTML = highScore5DotZero5.time;
      highScoreMistakes.innerHTML = highScore5DotZero5.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 5.06":
      choice = prompt("1. Right-angled Triangle\n2. Obtuse-triangle", 2);
      if (choice != 1 && choice != 2) {
        choice = 2;
      }
      level = 5.06;
      scoreNeeded = 20;
      gold = highScore5DotZero6.time;
      silver = highScore5DotZero6.time + (cutoff - highScore5DotZero6.time) / 3;
      bronze =
        highScore5DotZero6.time + ((cutoff - highScore5DotZero6.time) / 3) * 2;
      highScoreName.innerHTML = highScore5DotZero6.name;
      highScoreTime.innerHTML = highScore5DotZero6.time;
      highScoreMistakes.innerHTML = highScore5DotZero6.mistake;
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
      highScoreName.innerHTML = highScore5DotZero7.name;
      highScoreTime.innerHTML = highScore5DotZero7.time;
      highScoreMistakes.innerHTML = highScore5DotZero7.mistake;
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
      highScoreName.innerHTML = highScore5DotZero8.name;
      highScoreTime.innerHTML = highScore5DotZero8.time;
      highScoreMistakes.innerHTML = highScore5DotZero8.mistake;
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
      highScoreName.innerHTML = highScore5DotZero9.name;
      highScoreTime.innerHTML = highScore5DotZero9.time;
      highScoreMistakes.innerHTML = highScore5DotZero9.mistake;
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
      highScoreName.innerHTML = highScore5DotZero10.name;
      highScoreTime.innerHTML = highScore5DotZero10.time;
      highScoreMistakes.innerHTML = highScore5DotZero10.mistake;
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
      highScoreName.innerHTML = highScore5DotZero11.name;
      highScoreTime.innerHTML = highScore5DotZero11.time;
      highScoreMistakes.innerHTML = highScore5DotZero11.mistake;
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
      highScoreName.innerHTML = highScore5DotZero12.name;
      highScoreTime.innerHTML = highScore5DotZero12.time;
      highScoreMistakes.innerHTML = highScore5DotZero12.mistake;
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
      highScoreName.innerHTML = highScore5DotZero13.name;
      highScoreTime.innerHTML = highScore5DotZero13.time;
      highScoreMistakes.innerHTML = highScore5DotZero13.mistake;
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
      highScoreName.innerHTML = highScore5DotZero14.name;
      highScoreTime.innerHTML = highScore5DotZero14.time;
      highScoreMistakes.innerHTML = highScore5DotZero14.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      break;

    case "Level 5.15":
      level = 5.15;
      scoreNeeded = 10;
      // gold = highScore5DotZero14.time;
      // silver = highScore5DotZero14.time+((cutoff-highScore5DotZero14.time)/3)
      // bronze = highScore5DotZero14.time+((cutoff-highScore5DotZero14.time)/3)*2
      // highScoreName.innerHTML = highScore5DotZero14.name
      // highScoreTime.innerHTML = highScore5DotZero14.time
      // highScoreMistakes.innerHTML = highScore5DotZero14.mistake
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

    case "Level 6.0":
      level = 6.0;
      scoreNeeded = 10;
      gold = highScore6DotZero.time;
      silver = highScore6DotZero.time + (cutoff - highScore6DotZero.time) / 3;
      bronze =
        highScore6DotZero.time + ((cutoff - highScore6DotZero.time) / 3) * 2;
      highScoreName.innerHTML = highScore6DotZero.name;
      highScoreTime.innerHTML = highScore6DotZero.time;
      highScoreMistakes.innerHTML = highScore6DotZero.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "25px";
      break;

    case "Level 6.01":
      difficulty = prompt("Enter 0 or 1");
      console.log(difficulty);
      level = 6.01;
      if (difficulty == 1) {
        scoreNeeded = 10;
      } else {
        scoreNeeded = 20;
      }
      gold = highScore6DotZero1.time;
      silver = highScore6DotZero1.time + (cutoff - highScore6DotZero1.time) / 3;
      bronze =
        highScore6DotZero1.time + ((cutoff - highScore6DotZero1.time) / 3) * 2;
      highScoreName.innerHTML = highScore6DotZero1.name;
      highScoreTime.innerHTML = highScore6DotZero1.time;
      highScoreMistakes.innerHTML = highScore6DotZero1.mistake;
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
      highScoreName.innerHTML = highScore6DotZero2.name;
      highScoreTime.innerHTML = highScore6DotZero2.time;
      highScoreMistakes.innerHTML = highScore6DotZero2.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      wholeNumberContainer.classList.add("hidden");
      firstCanvas.classList.remove("hidden");
      // instructions.innerHTML =
      // `
      // Area of Circle<br>
      // π x r x r</br>
      // Circumference of Circle</br>
      // 2 x π x r OR π x d
      // `
      break;

    case "Level 6.03":
      level = 6.03;
      scoreNeeded = 20;
      gold = highScore6DotZero3.time;
      silver = highScore6DotZero3.time + (cutoff - highScore6DotZero3.time) / 3;
      bronze =
        highScore6DotZero3.time + ((cutoff - highScore6DotZero3.time) / 3) * 2;
      highScoreName.innerHTML = highScore6DotZero3.name;
      highScoreTime.innerHTML = highScore6DotZero3.time;
      highScoreMistakes.innerHTML = highScore6DotZero3.mistake;
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
      highScoreName.innerHTML = highScore6DotZero5.name;
      highScoreTime.innerHTML = highScore6DotZero5.time;
      highScoreMistakes.innerHTML = highScore6DotZero5.mistake;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "20px";
      instructions.innerHTML = `
        Distance = Speed x Time
        `;
      break;

    // case "Level 6.06":
    //   level = 6.06;
    //   scoreNeeded = 10;
    //   gold = highScore6DotZero6.time;
    //   silver = highScore6DotZero6.time + (cutoff - highScore6DotZero6.time) / 3;
    //   bronze =
    //     highScore6DotZero6.time + ((cutoff - highScore6DotZero6.time) / 3) * 2;
    //   highScoreName.innerHTML = highScore6DotZero6.name;
    //   highScoreTime.innerHTML = highScore6DotZero6.time;
    //   highScoreMistakes.innerHTML = highScore6DotZero6.mistake;
    //   document.querySelector("#user-input").setAttribute("type", "text");
    //   displayProblem.style.fontSize = "18px";
    //   instructions.innerHTML = `
    //     Average Speed of Whole Journey = Total Distance/Total Time
    //     `;
    //   break;

    // case "Level 6.07":
    //   level = 6.07;
    //   scoreNeeded = 10;
    //   gold = highScore6DotZero7.time;
    //   silver = highScore6DotZero7.time + (cutoff - highScore6DotZero7.time) / 3;
    //   bronze =
    //     highScore6DotZero7.time + ((cutoff - highScore6DotZero7.time) / 3) * 2;
    //   highScoreName.innerHTML = highScore6DotZero7.name;
    //   highScoreTime.innerHTML = highScore6DotZero7.time;
    //   highScoreMistakes.innerHTML = highScore6DotZero7.mistake;
    //   document.querySelector("#user-input").setAttribute("type", "text");
    //   displayProblem.style.fontSize = "18px";
    //   instructions.innerHTML = `
    //     Meet Up =</br> (Distance / Total Speed)</br> or</br> (Left over Distance / Total Speed)
    //     `;
    //   break;

    case "Level 7":
      level = 7;
      scoreNeeded = 30;
      break;

    case "Cal.1":
      level = "calOne";
      scoreNeeded = 10;
      setting = prompt(
        "What level?\n1. Addition (1-100) (No carrying)\n2. Subtraction (1-100) (No Borrowing)\n3. Addition (1-100) (Carrying)\n4. Subtraction (1-100) (Borrowing)\n5. Single blank\n6. Working (Other sequence)\n7. Arithmetic Constant\n8. Arithmetic Stagger\n9. Left Side Right Side + - x /\n\n99. Everything"
      );
      break;
    case "Cal.2":
      level = "calTwo";
      scoreNeeded = 10;
      setting = prompt(
        "What level?\n1. Addition (to 1000) No carry\n2. Subtraction (to 1000) No borrowing\n3. Addition (to-1000) (Carrying)\n4. Subtraction (to 1000) (Borrowing)\n5. Single blank\n6. Working (Other sequence)\n7. Arithmetic Constant\n8. Arithmetic Stagger\n9. Left Side Right Side + - x /\n10. Parts and Intervals\n11. Time: Timeline\n12. Fractions: Identification\n13. Fractions: Addition and Subtraction\n\n99. Everything",
        99
      );
      if (
        ![0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 99].includes(
          setting * 1
        ) &&
        !setting.split("").includes("-")
      )
        setting = 99;
      document.querySelector("#user-input").setAttribute("type", "text");
      break;
    case "Cal.3":
      level = "calThree";
      scoreNeeded = 10;
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (
        ![
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 99,
        ].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 99;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "1em";
      displayProblem.style.textAlign = "left";
      break;

    case "Cal.4":
      level = "calFour";
      scoreNeeded = 10;
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );

      // if (
      //   ![Array.from(Array(19)).map((e, i) => i + 1), 99].includes(
      //     setting * 1
      //   ) &&
      //   !setting.split("").includes("-")
      // )
      // console.log(
      //   ![...Array.from({ length: 18 }, (_, i) => i + 1), 99].includes(
      //     setting * 1
      //   )
      // );
      if (
        ![...Array.from({ length: 20 }, (_, i) => i + 1), 99].includes(
          setting * 1
        ) &&
        !setting.split("").includes("-")
      )
        setting = 99;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      break;

    case "Cal.5":
      level = "calFive";

      scoreNeeded = 10;
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      // console.log(userInputOptions);
      // calBtn[4].addEventListener("click", function () {
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (
        ![...Array(26).keys(), 99].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 99;
      console.log(setting);
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Cal.5b":
      level = "calFiveb";
      console.log(level);
      scoreNeeded = 10;
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      if (
        ![...Array.from({ length: 22 }, (_, i) => i + 1), 99].includes(
          setting * 1
        ) &&
        !setting.split("").includes("-")
      )
        setting = 99;
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      break;

    // HEURISTICS SETTINGS
    case "Cal.6":
      level = "calSix";
      scoreNeeded = 10;
      // setting = prompt(
      //   "What level?\n1. Fractions: Finding remainder\n2. Circles: Area and Perimeter\n3. Speed: Average Speed\n4. Speed: Moving Apart\n7. Pie Chart\n\n99",
      //   7
      // );
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        99
      );
      //IF THERE ARE 7 TYPES, PUT 6. SINCE THE MAP FUNCTION WILL +1
      if (
        ![...Array.from(Array(9)).map((e, i) => i + 1), 99].includes(
          setting * 1
        ) &&
        !setting.split("").includes("-")
      )
        setting = 99;
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
      if (
        ![1, 2, 3, 4, 5, 6, 7, 99].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 99;
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      document.querySelector("#user-input").setAttribute("type", "text");
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      break;

    case "Heu.1":
      level = "heuOne";
      setting = prompt("What level?\n1.More than / less than");
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      gold = heuOne.time;
      silver = heuOne.time + (cutoff - heuOne.time) / 3;
      bronze = heuOne.time + ((cutoff - heuOne.time) / 3) * 2;
      highScoreName.innerHTML = heuOne.name;
      highScoreTime.innerHTML = heuOne.time;
      instructions.style.fontSize = "16px";
      instructions.innerHTML = `
        A comparison statement tells us the difference.</p>
        Which allows us to change one variable to another.</p>
        `;
      break;

    case "Heu.2":
      setting = prompt(
        "What level?\n1. Parts and Interval\n2. Internal Transfer (Same)\n3. Internal Transfer ( Same reverse )\n4. Parts and Intervals ( Others )\n\n9.All"
      );
      if (
        ![1, 2, 3, 4, 9].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 9;
      level = "heuTwo";
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      range = 0;
      break;

    case "Heu.2b":
      setting = prompt(
        "What level?\n1. Comparison Model\n2. Parts of a Whole\n3. Whole and Parts\n4. Looking for Difference\n5. Unit Sentence\n6. Parts of a whole ( Unitary )\n\n9.All",
        9
      );
      level = "heuTwob";
      range = 0;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Heu.3":
      // setting = prompt(
      //   "What level?\n1. Sum and Difference\n2. Supposition\n3. Under the same unit ( Unit )\n4. Under the same unit ( Difference )\n5. Equal Grouping\n6. Round up/down\n7. Double Effect\n8. Grouping ( Bonus )\n\n9. All"
      // );
      level = "heuThree";
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );

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
      // setting = prompt(
      //   "What level?\n\n 1. Repeated Identity\n2. Equal Beginning\n3. Equal End\n4. Unchanged Object\n5. Working Backwards Straightline\n\n9. All",
      //   9
      // );
      level = "heuThreeb";
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (
        ![1, 2, 3, 4, 5, 9].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 9;
      range = 0;
      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Heu.4":
      level = "heuFour";
      // setting = prompt(
      //   "What level?\n1. Excess and Shortage ( Type 1 )\n2. Excess and Shortage ( Type 2 )\n3. Origin\n4.Repeated Identity ( Type 2 )\n5. Uneven Grouping\n6. Grouping Rows\n7. Systematic Listing\n\n9. All"
      // );
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      scoreNeeded = 10;
      range = 0;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      break;

    case "Heu.4b":
      // setting = prompt(
      //   "What level?\n1. Lowest Common Multiples ( Indirect )\n2. Highest Common Factor ( Indirect )\n3. Unchanged Difference\n4. Unchanged Total\n5. Simultaneous Equation\n\n9. All",
      //   9
      // );
      level = "heuFourb";

      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );

      if (
        ![1, 2, 3, 4, 5, 6, 9].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 9;

      scoreNeeded = 10;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      document.querySelector("#user-input").style.width = "300px";
      break;

    case "Heu.5":
      level = "heuFive";
      // setting = prompt(
      //   "What level?\n1. Grouping with Difference\n2. Supposition (Negative)\n3. Supposition negative ( Difference)\n4. Identical Quantity with Difference\n5. Substitution\n6. Shaking Hands\n7. Bonus\n8. Different Quantity with Difference\n\n9. All"
      // );
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (
        ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 9;
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
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      // console.log(userInputOptions);
      // calBtn[4].addEventListener("click", function () {
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );
      if (
        ![1, 2, 3, 4, 5, 9].includes(setting * 1) &&
        !setting.split("").includes("-")
      )
        setting = 9;
      scoreNeeded = 5;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      break;

    case "Heu.6":
      level = "heuSix";
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );

      if (
        ![1, 2, 3, 4, 5, 6, 9].includes(setting * 1) &&
        !setting.split("").includes("-")
      ) {
        setting = 9;
      }
      scoreNeeded = 5;
      displayProblem.style.fontSize = "18px";
      displayProblem.style.textAlign = "left";
      document.querySelector("#user-input").setAttribute("type", "text");
      helpMe.style.fontSize = "18px";
      helpMe.style.textAlign = "left";
      break;

    case "Heu.6b":
      level = "heuSixb";
      optionsBox.classList.remove("hidden");
      optionsBox.textContent = `Available settings:`;
      optionsBox.insertAdjacentHTML("beforeend", displayContent(level));
      setting = prompt(
        "What level?\nIf you are not sure, click 'Ok' to view the list then click 'Back'.",
        9
      );

      if (
        ![1, 2, 3, 4, 5, 6, 7, 9].includes(setting * 1) &&
        !setting.split("").includes("-")
      ) {
        setting = 9;
      }
      scoreNeeded = 5;
      normalDisplay();
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
  if (hardcore == 1) {
    scoreNeeded /= 2;
  }
}

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

export { updateProblems, genNumbers };
