import { genNumbers } from "./script.js";
import { genProblems } from "./genProblems.js";
const displayProblem = document.querySelector(".display-problems");
const helpMe = document.querySelector(".help-me-text");
const userInput = document.getElementById("user-input");
const userInput2 = document.getElementById("user-input2");
const calculatorSymbol = document.querySelector(".fa-calculator");
const secondUnitMeasurement = document.querySelector(".secondUnitMeasurement");

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
const canvasTextId = document.getElementById("canvasText");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const mouse = {
  x: undefined,
  y: undefined,
};

const updateCalc = function (
  level,
  state,
  setting,
  regen,
  skipGlobalUpdateProblem
) {
  displayProblem.innerHTML = ``;
  skipGlobalUpdateProblem = 1;
  regen += 1;
  console.log(`Regen: ${regen}`);
  console.log(
    `Updating! skipGlobalUpdateProblem set to ${skipGlobalUpdateProblem}`
  );
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, 400, 275);

  updateProblems(level, state, setting, regen);
};

function findFactors(number) {
  let factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) factors.push(i);
  }
  return factors;
}
function displaySimpleFraction(numerator, denominator) {
  return `
  <div class="frac">
  <span>${numerator}</span>
  <span class="symbol">/</span>
  <span class="bottom">${denominator}</span>
  </div>  
  `;
}
function angles(x1, y1, x2, y2) {
  let dy = y2 - y1;
  let dx = x2 - x1;
  let theta = Math.atan2(dy, dx);
  theta *= 180 / Math.PI;
  return theta;
}

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
  canvasTextId.textContent = "";
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, 1000, 1000);
  firstCanvas.classList.remove("hidden");
  canvasTextId.classList.remove("hidden");
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

let skipGlobalUpdateProblem = 0;
let regen = 0;
let arr = [];
let arr2 = [];
let arr3 = [];
let heuArr = [];
let calArr = [];
let calArrQns = [];

let questionTimeForSummary = undefined;
let summary = [];
let extraPracticeArr = [];

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

export function updateProblems(level, state, setting, regen, skipArr) {
  console.log(`The current state is ${state}. Regen is ${regen}.`);
  state.currentProblem = state.drawProblem = genProblems(
    level,
    regen,
    setting,
    state,
    skipGlobalUpdateProblem,
    skipArr
  );
  console.log(`GenProblem: ${state.currentProblem}`);
  // state.drawProblem = genProblems()
  console.log(
    `The current level is ${level}, the current setting is ${setting}.`
  );
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
    normalDisplay();
    for (let i = 0; i < setting * 1 + 1; i++) {
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
    normalDisplay();
    // counting odd or even in array
    let oddEvenCount = [0, 0];
    for (let i = arr2.length; arr2.length < setting * 1 + 1; i++) {
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
    normalDisplay();
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

  //READING ANALOG CLOCK
  if (level == 2.1) {
    drawingDisplay();
    let radius = 200 / 2;
    ctx.translate(400 / 2, radius);
    radius = radius * 0.9;

    function drawClock(hour, min) {
      drawFace(ctx, radius);
      drawMins(ctx, radius, 80, 1);
      drawCenter(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius, hour, min);
    }

    function drawFace(ctx, radius) {
      const grad = ctx.createRadialGradient(
        0,
        0,
        radius * 0.95,
        0,
        0,
        radius * 1.05
      );
      grad.addColorStop(0, "#333");
      grad.addColorStop(0.5, "white");
      grad.addColorStop(1, "#333");
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius * 0.1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = "#333";
      ctx.fill();
    }

    function drawMins(ctx, pos, length, width) {
      function drawMinsClock(ctx, num, length) {
        // degree * Math PI / 180
        let angle = ((360 / 60) * num * Math.PI) / 180;
        ctx.beginPath();
        ctx.rotate(angle);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, length);
        ctx.stroke();
        ctx.rotate(-angle);
      }
      ctx.lineCap = "square";
      ctx.lineWidth = 1;
      for (let num = 1; num <= 60; num++) {
        console.log(num);
        drawMinsClock(ctx, num, length, width);
        // }
      }
      ctx.beginPath();
      ctx.arc(0, 0, length - 5, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      for (let num = 5; num <= 60; num += 5) {
        console.log(num);
        drawMinsClock(ctx, num, length, width);
        // }
      }
      ctx.beginPath();
      ctx.arc(0, 0, length - 12, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }

    function drawNumbers(ctx, radius) {
      ctx.fillStyle = "black";
      ctx.font = radius * 0.15 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (let num = 1; num < 13; num++) {
        let ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.7);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.7);
        ctx.rotate(-ang);
      }
    }

    function drawTime(ctx, radius, hours, mins) {
      // const now = new Date();
      ctx.fillStyle = "black";
      let hour = hours;
      let minute = mins;
      // let second = now.getSeconds();
      //hour
      hour = hour % 12;
      hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60);
      // +
      // (second * Math.PI) / (360 * 60);
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);
      //minute
      minute = (minute * Math.PI) / 30;
      //  + (second * Math.PI) / (30 * 60);
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);
      // second
      // second = (second * Math.PI) / 30;
      // drawHand(ctx, second, radius * 0.9, radius * 0.02);
    }

    function drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    }

    function drawCenter(ctx, pos) {
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, Math.PI * 2);
      ctx.fill();
    }
    canvasTextId.textContent = `What time is displayed on the clock?`;
    drawClock(p.hour, p.min);
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

  //DISPLAY
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
    canvasTextId.innerHTML = `The length of each square is ${p.side} cm.</br>What is the area below?`;
    p.count = drawSquares(p.length, p.breadth, 30, p.side);
    drawGrid(p.length, p.breadth, 30);
    if (p.count == "Error")
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
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
    normalDisplay();
    displayProblem.style.textAlign = "center";
    console.log(setting);
    arr = [];
    arr2 = [];
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
        if (arr[2] == arr[1] && arr[2] == arr[0]) {
          console.log("Refreshing");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }
      if (p.rollType == "B") {
        for (let i = 0; i < p.rollTimes; i++) {
          p.rollB = ["A", "B", "C", "D", "E"][genNumbers(5)];
          arr.push(p.rollB);
        }
        if (arr[2] == arr[1] && arr[2] == arr[0]) {
          console.log("Refreshing");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }
      console.log(arr);
      for (let i = 0; arr2.length < 13; i++) {
        arr2.push(arr[i % p.rollTimes]);
      }
      console.log(arr2);
      arr2.push("...");
      if (p.question == "A") {
        displayProblem.innerHTML = `
          What is in position ${p.position}?</br>
          ${arr2.toString()}
          `;
      }
      if (p.question == "B") {
        //Numbers
        if (p.rollType == "A") {
          displayProblem.innerHTML = `
            ${arr2.toString()}</br>
            <hr>
            What is the sum of all the numbers up to position ${
              p.position
            }?</br>
           
            `;
        }

        //Alphabets
        if (p.rollType == "B") {
          p.alphabet = arr[genNumbers(arr.length)];
          displayProblem.innerHTML = `
            ${arr2.toString()}</br>
            <hr>
            How many ${p.alphabet}'s are there up to position ${
            p.position
          }?</br>
           
            `;
        }
      }
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
    canvasTextId.classList.remove("hidden");
    ctx.font = "1em serif";
    ctx.save();

    if (p.parallelorPerpendicular == "parallel") {
      if (p.roll == 1) {
        canvasTextId.textContent = `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`;
        // ctx.fillText(
        //   `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`,
        //   20,
        //   20
        // );
      } else {
        canvasTextId.textContent = `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`;
        // ctx.fillText(
        //   `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`,
        //   20,
        //   20
        // );
      }
    } else {
      if (p.roll == 1) {
        canvasTextId.textContent = `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`;
        // ctx.fillText(
        //   `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelGHI}${p.labelJKL} or ${p.labelMNO}${p.labelPQR}`,
        //   20,
        //   20
        // );
      } else {
        canvasTextId.textContent = `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`;
        // ctx.fillText(
        //   `Which line is ${p.parallelOrPerpendicular} to ${p.labelABC}${p.labelDEF}? ${p.labelMNO}${p.labelPQR} or ${p.labelGHI}${p.labelJKL}`,
        //   20,
        //   20
        // );
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

    // if (difficulty == 1 || (difficulty == 9 && p.rollx == 0)) {
    if (setting == 1) {
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

    // if (difficulty == 2 || (difficulty == 9 && p.rollx == 1)) {
    if (setting == 2) {
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
    displayProblem.innerHTML = `
      ${p.placeValue}</br>
      ${p.numOne} ≈ `;
  }

  if (level == 4.02) {
    normalDisplay();
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
      <u>${p.choice}</u> value before rounding off to the <u>${p.placeValue}</u> place?</br>
      <br>
      _______ ≈ ${p.numOne}`;

    if (p.numOne <= 0)
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);

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
  if (level == 4.03) {
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
      if (p.numOne == p.numTwo && p.denoOne == p.denoTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (p.denoOne / 2 == p.numOne && p.denoTwo / 2 == p.numTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      numeratorOne.textContent = p.numOne;
      denominatorOne.textContent = p.denoOne;
      numeratorTwo.textContent = p.numTwo;
      denominatorTwo.textContent = p.denoTwo;
      fractionChoice.textContent = p.size;
    }
    if (setting == 2) {
      if (p.denoOneUse == p.denoTwoUse)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      numeratorOne.textContent = p.numOne;
      denominatorOne.textContent = p.denoOneUse;
      numeratorTwo.textContent = p.numTwo;
      denominatorTwo.textContent = p.denoTwoUse;
      fractionChoice.textContent = p.size;
    }
  }

  if (level == 4.04) {
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

  if (level == 4.05) {
    normalDisplay();
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
      displayProblem.innerHTML = `
        <div class="frac">
        <span>${p.numOne}</span>
        <span class="symbol">/</span>
        <span class="bottom">${p.numTwo}</span>
        </div> of a number is ${p.numOne * p.numMulti}.<br>
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
        <div class="frac">
        <span>${p.nume}</span>
        <span class="symbol">/</span>
        <span class="bottom">${p.deno}</span>
        </div> of ${value} is ?</br>
        What is that value?
        `;
    }
  }

  if (level == 4.06) {
    normalDisplay();
    if (p.oneValue == p.twoValue) {
      p.twoValue += 1;
    }
    if (p.rollTypeClue == "11") {
      if (p.rollTypeQnSyn == "isof") {
        displayProblem.innerHTML = `
        ${p.objectOne} is
        <div class="frac">
        <span>${p.oneValue}</span>
        <span class="symbol">/</span>
        <span class="bottom">${p.twoValue}</span>
        </div>
        of ${p.objectTwo}.</br>
        What fraction is ${
          p.rollTypeQn11 == "1T"
            ? `${p.objectOne} of ${p.objectOne} and ${p.objectTwo}.`
            : `${p.objectOne} and ${p.objectTwo} of ${p.objectOne}.`
        }
        `;
      }
      if (p.rollTypeQnSyn == "ofis") {
        displayProblem.innerHTML = `
          ${p.objectOne} is
          <div class="frac">
          <span>${p.oneValue}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.twoValue}</span>
          </div>
          of ${p.objectTwo}.</br>
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
          ${p.objectOne} is 
          <div class="frac">
          <span>${p.oneValue}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.twoValue + p.oneValue}</span>
          </div>
           of ${p.objectOne} and ${p.objectTwo}.</br>
          What fraction is ${
            p.rollTypeQn1T == "AB"
              ? `${p.objectOne} of ${p.objectTwo}.`
              : `${p.objectTwo} of ${p.objectOne}.`
          }
          `;
      }
      if (p.rollTypeQnSyn == "ofis") {
        displayProblem.innerHTML = `
          ${p.objectOne} is 
          <div class="frac">
          <span>${p.oneValue}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.twoValue + p.oneValue}</span>
          </div>
         of ${p.objectOne} and ${p.objectTwo}.</br>
          What fraction of ${
            p.rollTypeQn1T == "AB"
              ? `${p.objectOne} is ${p.objectTwo}.`
              : `${p.objectTwo} is ${p.objectOne}.`
          }
          `;
      }
    }
  }

  if (level == 4.07) {
    normalDisplay();
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
  if (level == 4.08) {
    normalDisplay();
    // helpMe.textContent = `${p.placeValue}`;
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
    displayProblem.innerHTML = `
      ${p.placeValue}</br>
      ${accDecimal(p.num)} ≈ ?`;
  }
  if (level == 4.09) {
    if (p.numOne % 10 == 0) {
      p.numOne += p.numOne + 1;
    }
    displayProblem.textContent = `${accDecimal(p.numOne) / p.numTwo} =`;
  }

  if (level == 4.1) {
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

  if (level == 4.11) {
    if (p.wholeNum == 0 && p.deciOne == 0 && p.deciTwo == 0 && p.deciThree == 0)
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
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

  if (level == 4.13) {
    normalDisplay();
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
    normalDisplay();
    displayProblem.innerHTML = `
      <table class="positionPattern table">
        <tr>
          <th></th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
        </tr>
        <tr>
          <td>Row 1</td>
          <td>${p.start}</td>
          <td>${p.start + 1}</td>
          <td>${p.start + 2}</td>
          <td>${p.start + 3}</td>
        </tr>
      </table>
      `;

    const positionPatternCl = document.querySelector(".positionPattern");
    let html;
    if (p.type == "repeat") {
      html = `
        <tr>
          <td>Row 2</td>
          <td>${p.start + 4}</td>
          <td>${p.start + 5}</td>
          <td>${p.start + 6}</td>
          <td>${p.start + 7}</td>
        </tr>
        <tr>
        <td>Row 3</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
        `;
    }
    if (p.type == "snake") {
      html = `
        <tr>
          <td>Row 2</td>
          <td>${p.start + 7}</td>
          <td>${p.start + 6}</td>
          <td>${p.start + 5}</td>
          <td>${p.start + 4}</td>
        </tr>
        <tr>
        <td>Row 3</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
        `;
    }
    positionPatternCl.insertAdjacentHTML("beforeend", html);
    if (p.question == "columnRow") {
      positionPatternCl.insertAdjacentHTML(
        "beforebegin",
        `Which Column and Row is number ${p.number}?`
      );
    }
    if (p.question == "number") {
      positionPatternCl.insertAdjacentHTML(
        "beforebegin",
        `What number is in Column ${p.column} and Row ${p.row}?`
      );
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
    normalDisplay();

    if (setting >= 2) {
      calculatorSymbol.classList.remove("hidden");
    } else {
      calculatorSymbol.classList.add("hidden");
    }

    if (setting == 1) {
      p.length = (genNumbers(10) + 1) * p.dimension;
      p.breadth = (genNumbers(10) + 1) * p.dimension;
      p.height = (genNumbers(10) + 1) * p.dimension;
      console.log(p.dimension, p.length, p.breadth, p.height);
      displayProblem.innerHTML = `
        How many ${p.dimension} cm <u>squares</u> can be cut out from a rectangle with a dimension of 
        ${p.length} cm by ${p.breadth} cm?
        `;
    }

    if (setting == 2) {
      p.length =
        (genNumbers(10) + 1) * p.dimension + (genNumbers(p.dimension - 1) + 1);
      p.breadth =
        (genNumbers(10) + 1) * p.dimension + genNumbers(p.dimension - 1) + 1;
      displayProblem.innerHTML = `
        How many ${p.dimension} cm <u>squares</u> can be cut out from a rectangle with a dimension of 
        ${p.length} cm by ${p.breadth} cm?
        `;
    }
    if (setting == 3) {
      p.length =
        (genNumbers(10) + 1) * p.dimension + (genNumbers(p.dimension) + 1);
      p.breadth = (genNumbers(10) + 1) * p.dimension + genNumbers(p.dimension);
      p.height = (genNumbers(10) + 1) * p.dimension + genNumbers(p.dimension);
      console.log(p.dimension, p.length, p.breadth, p.height);
      displayProblem.innerHTML = `
        How many ${p.dimension} cm <u>cubes</u> can be cut out from a cuboid with a dimension of
        ${p.length} cm by ${p.breadth} cm by ${p.height}cm?
        `;
    }
    if (setting == 4) {
      p.dimension = genNumbers(5) + 1;
      p.length =
        ((genNumbers(10) + 1) * p.dimension + (genNumbers(p.dimension) + 1)) *
        2;
      p.breadth =
        ((genNumbers(10) + 1) * p.dimension + genNumbers(p.dimension)) * 2;
      displayProblem.innerHTML = `
        How many <u>circles</u> with a radius of ${p.dimension} cm can be cut out from a rectangle with a dimension of
        ${p.length} cm by ${p.breadth} cm?
        `;
    }

    if (setting == 5) {
      const a = genNumbers(10) + 2;
      const b = genNumbers(10) + 2;
      p.smallLength = [2, 3, 5, 7][genNumbers(4)];
      p.smallBreadth = [2, 3, 5, 9][genNumbers(4)];
      while (p.smallLength == p.smallBreadth) {
        p.smallLength = [2, 3, 5, 7][genNumbers(3)];
        p.smallBreadth = [2, 3, 5, 9][genNumbers(1)];
      }
      p.length = a * p.smallLength + genNumbers(p.smallLength);
      p.breadth = b * p.smallBreadth + genNumbers(p.smallBreadth);

      displayProblem.innerHTML = `
        How many <u>rectangles</u> of dimension ${p.smallLength} and ${p.smallBreadth} cm can be cut out from a rectangle with a dimension of </br>
        ${p.length} cm by ${p.breadth} cm?
        `;
    }
  }

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
        ${p.objectOne} is
        <div class="frac">
        <span>${p.oneValue}</span>
        <span class="symbol">/</span>
        <span class="bottom">${p.twoValue}</span>
        </div>
        of ${p.objectTwo}.</br>
        What fraction is ${
          p.rollTypeQn11 == "1T"
            ? `${p.objectOne} of ${p.objectOne} and ${p.objectTwo}.`
            : `${p.objectOne} and ${p.objectTwo} of ${p.objectOne}.`
        }
        `;
      }
      if (p.rollTypeQnSyn == "ofis") {
        displayProblem.innerHTML = `
          ${p.objectOne} is
          <div class="frac">
          <span>${p.oneValue}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.twoValue}</span>
          </div>
          of ${p.objectTwo}.</br>
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
          ${p.objectOne} is 
          <div class="frac">
          <span>${p.oneValue}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.twoValue + p.oneValue}</span>
          </div>
           of ${p.objectOne} and ${p.objectTwo}.</br>
          What fraction is ${
            p.rollTypeQn1T == "AB"
              ? `${p.objectOne} of ${p.objectTwo}.`
              : `${p.objectTwo} of ${p.objectOne}.`
          }
          `;
      }
      if (p.rollTypeQnSyn == "ofis") {
        displayProblem.innerHTML = `
          ${p.objectOne} is 
          <div class="frac">
          <span>${p.oneValue}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.twoValue + p.oneValue}</span>
          </div>
         of ${p.objectOne} and ${p.objectTwo}.</br>
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
    if (((p.oneSideNoCorners + 2) * 4) % 4 != 0)
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
    let objects = ["chairs", "boxes", "tables"][genNumbers(3)];
    if (p.version == 0) {
      displayProblem.innerHTML = `
        There are ${
          p.oneSideNoCorners + 2
        } ${objects} on 1 side of a square.</p>
        How many ${objects} would be needed to form a full square?</p>
        
        `;
    }
    if (p.version == 1) {
      displayProblem.innerHTML = `
        There are ${
          p.oneSideNoCorners + 2
        } ${objects} on 1 side of a square.</p>
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
    normalDisplay();
    let object = p.groups[p.object][0];
    let measurement = p.groups[p.object][1];

    // first line
    if (p.firstVar == "whole" && p.secondVar == "whole") {
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
    }
    if (
      (p.firstVar == "whole" && p.secondVar == "real" && p.operator == "+") ||
      (p.firstVar == "whole" && p.secondVar == "real" && p.operator == "-")
    ) {
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
    }
    if (
      (p.firstVar == "fake" && p.secondVar == "real" && p.operator == "+") ||
      (p.firstVar == "fake" && p.secondVar == "real" && p.operator == "-")
    ) {
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
    }
    if (
      (p.firstVar == "fake" && p.secondVar == "fake" && p.operator == "x") ||
      (p.firstVar == "fake" && p.secondVar == "fake" && p.operator == "/")
    ) {
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
    }
    if (
      (p.firstVar == "whole" && p.secondVar == "fake" && p.operator == "x") ||
      (p.firstVar == "whole" && p.secondVar == "fake" && p.operator == "/")
    ) {
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
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
    normalDisplay();
    if (setting == 1) {
      [p.numOne, p.denoOne] = simplify(p.numOne, p.denoOne);
      [p.numTwo, p.denoTwo] = simplify(p.numTwo, p.denoTwo);
      console.log("This is Level 5.01.1");
      // PLUS
      if (p.version == 0) {
        if (p.numOne + p.numTwo >= p.denoOne)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        if (p.numOne + p.numTwo >= p.denoOne)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const colorArr = ["red", "blue", "green", "yellow"];
        let refColor2 = colorArr[genNumbers(4)];
        while (refColor2 == p.refColor) {
          refColor2 = colorArr[genNumbers(4)];
        }
        let refColor3 = colorArr[genNumbers(4)];
        while (refColor3 == refColor2 || refColor3 == p.refColor) {
          refColor3 = colorArr[genNumbers(4)];
        }
        if (p.denoTwo == p.numTwo || p.numOne == p.denoOne)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
      if (p.numOne == p.denoOne)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (p.remainderNum >= p.remainderDeno)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        ${p.remainderNum}/${
        p.remainderDeno
      } of the remainder is ${refColor2}.</p>
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
    normalDisplay();
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
      <div class="frac">
      <span>${p.numOne}</span>
      <span class="symbol">/</span>
      <span class="bottom">${p.numTwo}</span>
      </div>
      of A ${p.sentenceChoice}
      <div class="frac">
      <span>${p.numThree}</span>
      <span class="symbol">/</span>
      <span class="bottom">${p.numFour}</span>
      </div>
      of B.
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
    if (setting == 1) {
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

    if (setting == 2) {
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
      ${p.objectOneV}% of ${p.objectOne} ${
      syntext == 0 ? "=" : "is equal to"
    } ${p.objectTwoV}% of ${p.objectTwo}
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
        How much ${p.unit} did each ${
        gender == "girls" ? "girl" : "boy"
      } receive?
        `;
    }
    if (p.choice == "B") {
      displayProblem.innerHTML = `
        ${p.objectTwoV} ${p.unit} of something was shared among ${
        p.objectOneV
      } ${gender}.</br>
        How much ${p.unit} did each ${
        gender == "girls" ? "girl" : "boy"
      } receive?
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
      if (average.toString().split(".")[1].length > 3)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
    }
    // if (p.answer.toString().split(".")[1].length > 3) return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
    if (p.version == 0) {
      p.answer = average;
      displayProblem.innerHTML = `
    Find the average of: </p>${averageList.join(", ")}
    `;
    }
    if (p.version == 1) {
      const index = genNumbers(averageList.length);
      const unknownNum = averageList[index];
      console.log(unknownNum, averageList);
      p.answer = unknownNum;
      averageList[index] = "?";
      let str = averageList.join(", ");
      console.log(str);
      // str = str.replace(unknownNum, "? ");
      displayProblem.innerHTML = `
      Find the missing number.</p>
      The average of the following numbers is ${sum / averageList.length}.</p>
      ${str}
      `;
    }
  }
  if (level == 5.18) {
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

  if (level == 6) {
    if (p.numOne == p.denoOne || p.numTwo == p.denoTwo) {
      console.log("Same");
      return updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
    }
    numeratorOne.textContent = p.numOne;
    denominatorOne.textContent = p.denoOne;
    numeratorTwo.textContent = p.numTwo;
    denominatorTwo.textContent = p.denoTwo;
    fractionsOperator.textContent = "÷";
    fractionChoice.textContent = "";
  }

  if (level == 6.01) {
    // if (difficulty <= 0) {
    //   difficulty = 0;
    // } else {
    //   difficulty = 1;
    // }
    ctx.save();
    ctx.font = "1em serif";
    if (setting == 1) {
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
    if (setting == 2) {
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
      ctx.fillText(
        `What is the area of the right-angled isosceles Triangle?`,
        20,
        20
      );
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
        at ${p.rollS} ${p.rollUnits[p.roll][0]}/${
        p.rollUnits[p.roll][1]
      }  .</br>
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
      p.setting == 1 ||
      p.setting == 2 ||
      p.setting == 3 ||
      p.setting == 4 ||
      p.setting == 5 ||
      p.setting == 6
    ) {
      wholeNumberContainer.classList.add("hidden");
      workingContainer.classList.remove("hidden");
    }
    // NORMAL DISPLAY7
    if (p.setting == 7 || p.setting == 8 || p.setting == 9) {
      displayProblem.style.fontSize = "24px";
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
    }
    if (p.setting == 1) {
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
    if (p.setting == 2) {
      p.numOne = p.numOne + p.numTwo;
      p.numThree = p.numThree + p.numFour;
      if (p.numOne == p.numThree) {
        skipGlobalUpdateProblem = 1;
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numThree;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (p.setting == 3) {
      if (p.numTwo + p.numFour < 10) {
        skipGlobalUpdateProblem = 1;
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.numOne = p.numOne + p.numTwo;
      p.numThree = p.numThree + p.numFour;
      if (p.numOne < p.numThree) {
        [p.numOne, p.numThree] = [p.numThree, p.numOne];
      }
      if (p.numOne + p.numThree > 100) {
        skipGlobalUpdateProblem = 1;
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numThree;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }
    if (p.setting == 4) {
      p.numOne = p.numOne + p.numTwo;
      p.numThree = p.numThree + p.numFour;
      if (p.numOne % 10 == 0 && p.numThree % 10 == 0) {
        skipGlobalUpdateProblem = 1;
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numThree;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }

    if (p.setting == 5) {
      if (p.numOne == p.numTwo || p.numFour == p.numTwo) {
        skipGlobalUpdateProblem = 1;
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (p.version == "+") {
        p.numOne = genNumbers(4) + 1;
        p.numTwo = genNumbers(4) + 1;
        if (p.numOne == p.numTwo || p.numFour == p.numTwo) {
          skipGlobalUpdateProblem = 1;
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 6) {
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
    if (p.setting == 7) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        p.startNum += p.difference;
      }
      if (arr[5] > 100 || arr[5] < 0 || p.difference == 0) {
        arr = [];
        skipGlobalUpdateProblem = 1;
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }
    if (p.setting == 8) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        i++;
        p.startNum += p.diffOne;
        if (p.startNum < 0) {
          arr = [];
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        arr.push(p.startNum);
        p.startNum += p.diffTwo;
        if (p.startNum < 0) {
          arr = [];
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }
      if (arr[5] > 100 || p.diffOne == 0 || p.diffTwo == 0) {
        console.log(arr[5]);
        arr = [];
        skipGlobalUpdateProblem = 1;
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }
    if (p.setting == 9) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 10) {
      drawingDisplay();
    }
    //WORKING DISPLAY
    if (
      p.setting == 1 ||
      p.setting == 2 ||
      p.setting == 3 ||
      p.setting == 4 ||
      p.setting == 5 ||
      p.setting == 6
    ) {
      workingDisplay();
    }
    // NORMAL DISPLAY
    if (p.setting == 7 || p.setting == 8 || p.setting == 9 || p.setting == 11) {
      displayProblem.style.fontSize = "24px";
      normalDisplay();
      if (p.setting == 9) {
        displayProblem.style.fontSize = "20px";
        displayProblem.style.textAlign = "left";
      }
    }

    if (p.setting == 1) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }
    if (p.setting == 2) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (p.setting == 3) {
      while (p.numOne + p.numTwo >= 1000) {
        if (p.numOne > p.numTwo) p.numOne -= 100;
        if (p.numTwo > p.numOne) p.numTwo -= 100;
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }

    if (p.setting == 4) {
      const arr = p.numOne.toString().split("");
      const arr2 = p.numTwo.toString().split("");
      for (let i = 0; i < 5; i++) {
        if (arr[i] - arr2[i] < 0) {
          break;
        }
        if (i == 4) {
          // updateProblem = 1;
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }
      console.log(arr, arr2);
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (p.setting == 5) {
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
      //   return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
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
            return updateCalc(
              level,
              state,
              setting,
              regen,
              skipGlobalUpdateProblem
            );
          }
        }
      }
      console.log(checkOneArr, checkTwoArr);
      firstNum.textContent = p.rowOne;
      secondNum.textContent = p.rowTwo;
      operator.textContent = p.operator;
      if (p.operator == "-") {
        if (p.numOne - p.numTwo < 0 || p.numTwo > p.numOne) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        workingAnswer.textContent = p.numOne - p.numTwo;
      }
      if (p.operator == "+") {
        if (p.numOne + p.numTwo > 1000) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        workingAnswer.textContent = p.numOne + p.numTwo;
      }
    }
    if (p.setting == 6) {
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

    if (p.setting == 7) {
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        p.startNum += p.difference;
      }
      if (arr[5] > 1000 || arr[5] < 0 || p.difference == 0) {
        arr = [];
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }

    if (p.setting == 8) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }
    // LEFT SIDE RIGHT SIDE
    if (p.setting == 9) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      let tempStatementArr =
        genNumbers(2) == 0
          ? `${leftSide.statementArr} = ${rightSide.statementArr}`
          : `${rightSide.statementArr} = ${leftSide.statementArr}`;

      p.answer = rightSide.answer;
      displayProblem.innerHTML = tempStatementArr;
    }
    if (p.setting == 10) {
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
    if (p.setting == 11) {
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
    if (p.setting == 12) {
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
    if (p.setting == 13) {
      simpleFractionDisplay();
      denominatorOne.classList.remove("hidden");
      fractionsLine.classList.remove("hidden");
      // fractionsWholeNum.textContent = "";
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
    if (p.setting == 16 || p.setting == 19) {
      displayProblem.style.fontSize = "20px";
      displayProblem.style.textAlign = "left";
    }

    if (p.setting == 1) {
      workingDisplay();
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }
    if (p.setting == 2) {
      workingDisplay();
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        } else {
          console.log(numOneStr[i], numTwoStr[i]);
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }
    if (p.setting == 3) {
      workingDisplay();
      while (p.numOne + p.numTwo >= 10000) {
        if (p.numOne > p.numTwo) p.numOne -= 1000;
        if (p.numTwo > p.numOne) p.numTwo -= 1000;
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "+";
      workingAnswer.textContent = "?";
    }

    if (p.setting == 4) {
      workingDisplay();
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.numTwo;
      operator.textContent = "-";
      workingAnswer.textContent = "?";
    }

    if (p.setting == 5) {
      workingDisplay();
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
      if (replaceOne == replaceTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
            return updateCalc(
              level,
              state,
              setting,
              regen,
              skipGlobalUpdateProblem
            );
          }
        }
      }
      firstNum.textContent = p.rowOne;
      secondNum.textContent = p.rowTwo;
      operator.textContent = p.operator;
      if (p.operator == "-") {
        if (p.numOne - p.numTwo < 0 || p.numTwo > p.numOne) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        let numOneArr = p.rowOne.split("");
        let numTwoArr = p.rowTwo.split("");
        const indexOne = numOneArr.indexOf("?");
        const indexTwo = numTwoArr.indexOf("?");
        console.log(numOneArr, numTwoArr, indexOne, indexTwo);
        workingAnswer.textContent = p.numOne - p.numTwo;
        if (indexOne == indexTwo && workingAnswer.split("")[indexTwo] == 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      }
      if (p.operator == "+") {
        if (p.numOne + p.numTwo > 10000) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        workingAnswer.textContent = p.numOne + p.numTwo;
      }
    }

    if (p.setting == 6) {
      workingDisplay();
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

    if (p.setting == 7) {
      normalDisplay();
      for (let i = 0; i < 6; i++) {
        arr.push(p.startNum);
        p.startNum += p.difference;
      }
      if (arr[5] > 10000 || arr[5] < 0 || p.difference == 0) {
        arr = [];
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }

    if (p.setting == 8) {
      normalDisplay();
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }

    if (p.setting == 9) {
      workingDisplay();
      firstNum.textContent = p.numOne;
      secondNum.textContent = p.multiple;
      operator.textContent = "x";
      workingAnswer.textContent = "?";
    }

    // OVERLAPPING PLACE VALUE
    if (p.setting == 10) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      console.log(p.sentenceArr);
      displayProblem.innerHTML = `
        Find the value of:</p>
        ${p.sentenceArr.join(", ")}.`;
    }

    if (p.setting == 11) {
      normalDisplay();
      let num = p.multiplier * p.divisor;
      displayProblem.innerHTML = `${num} ÷ ${p.divisor} = ?`;
    }

    if (p.setting == 12) {
      normalDisplay();
      let num = p.multiplier * p.divisor + p.remainder;
      if (p.remainder == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      const symbol = genNumbers(2) == 0 ? "÷" : "divided by";
      if (p.question == "quotient") {
        displayProblem.innerHTML = `What is the quotient for</br>${num} ${symbol} ${p.divisor}.`;
      } else if (p.question == "remainder") {
        displayProblem.innerHTML = `What is the remainder for</br>${num} ${symbol} ${p.divisor}.`;
      } else {
        displayProblem.innerHTML = `${num} ${symbol} ${p.divisor} = ___ r __`;
      }
    }
    if (p.setting == 13) {
      workingDisplay();
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

    if (p.setting == 14) {
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

    if (p.setting == 15) {
      normalDisplay();
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
    if (p.setting == 16) {
      normalDisplay();
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      let tempStatementArr =
        genNumbers(2) == 0
          ? `${leftSide.statementArr} = ${rightSide.statementArr}`
          : `${rightSide.statementArr} = ${leftSide.statementArr}`;

      p.answer = rightSide.answer;
      displayProblem.innerHTML = tempStatementArr;
    }
    // MULTIPLICATION AND DIVISION WHILE BREAKING UP CONVENIENT NUMBERS
    if (p.setting == 17) {
      normalDisplay();
      p.numOne = p.numOne * p.convenientOne;
      p.numTwo = p.numTwo * p.convenientTwo;
      if (p.numOne * p.numTwo > 10000)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        if (p.numOne * p.numTwo > 10000)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        displayProblem.innerHTML = `
          ${answer} ÷ ${p.numOne} = ?`;
      }
    }

    if (p.setting == 18) {
      drawingDisplay();
      drawIntervals(p.start, p.intervals, p.eachInterval, p.arrow);
    }

    if (p.setting == 19) {
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

    if (p.setting == 20) {
      drawingDisplay();
      p.answerUnit = "g";
      if (p.unit == "ℓ") p.answerUnit = "ml";
      if (p.unit == "km") p.answerUnit = "m";
      if (p.unit == "m") {
        p.answerUnit = "cm";
        p.intervals = [2, 4, 5, 10][genNumbers(4)];
        while (p.arrow == 0 || p.arrow == p.intervals) {
          p.arrow = genNumbers(p.intervals);
        }
      }

      canvasTextId.textContent = `Give your answer in ${p.answerUnit}`;
      p.eachInterval = 1 / p.intervals;

      function drawIntervalsUnits(start, intervals, eachInterval, question) {
        const largeIntervals = 20;
        const adjustment = 10;
        ctx.save();
        ctx.font = "1em serif";
        ctx.translate(50, 100);
        //BEGIN
        ctx.beginPath();
        ctx.moveTo(0, -largeIntervals);
        ctx.fillText(`${start}`, -adjustment, -largeIntervals - adjustment);
        ctx.lineTo(0, largeIntervals);
        ctx.stroke();

        //END
        const end = start + eachInterval * intervals;
        ctx.beginPath();
        ctx.moveTo(300, -largeIntervals);
        ctx.fillText(
          `${end} ${p.unit}`,
          300 - adjustment,
          -largeIntervals - adjustment
        );
        ctx.lineTo(300, largeIntervals);
        ctx.stroke();

        //START ARROW
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(325, 0);
        ctx.stroke();

        //SMALLER INTERVALS
        for (let i = 1; i < intervals; i++) {
          const intervalAway = 300 / intervals;
          // const largeIntervals = 20;
          ctx.beginPath();
          ctx.moveTo(0 + intervalAway * i, -largeIntervals / 2);
          ctx.lineTo(0 + intervalAway * i, largeIntervals / 2);
          ctx.stroke();

          //DOWNARROW
          if (i == question) {
            console.log(question);
            ctx.fillText(`? `, 0 + intervalAway * i - 4, -15);
          }
        }
        ctx.restore();
      }

      drawIntervalsUnits(p.start, p.intervals, p.eachInterval, p.arrow);
    }

    // MONEY: ADDITION AND SUBTRACTION
    if (p.setting == 21) {
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
    if (p.setting == 22) {
      drawingDisplay();
      drawForFraction(state, "fraction");
      // console.log(mediumColumn, smallRow, p.shaded, p.total);
    }

    // FRACTIONS: ADDITION AND SUBTRACTION
    if (p.setting == 23) {
      simpleFractionDisplay();
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      if (p.denoOne == p.denoTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (p.operator == "+") {
        if (p.numeOne / p.denoOne + p.numeTwo / p.denoTwo >= 1)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 24) {
      simpleFractionDisplay();
      [p.oriNume, p.oriDeno] = simplify(p.oriNume, p.oriDeno);
      if (p.mulOne == p.mulTwo) p.mulTwo += 1;
      const firstNume = p.oriNume * p.mulOne;
      const firstDeno = p.oriDeno * p.mulOne;
      const secondNume = p.oriNume * p.mulTwo;
      const secondDeno = p.oriDeno * p.mulTwo;
      if (p.mulTwo > p.mulOne) {
        if (p.mulTwo % p.mulOne == 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      } else {
        if (p.mulOne % p.mulTwo == 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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

    // FRACTIONS: MID-POINT
    if (p.setting == 25) {
      simpleFractionDisplay();
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      if (
        p.denoOne == p.denoTwo ||
        (p.numeOne == p.numeTwo && p.denoOne == p.denoTwo)
      ) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const newDenominator = commonDeno(p.denoOne, p.denoTwo);
      p.answerDeno = newDenominator;
      const newNumeOne = (newDenominator / p.denoOne) * p.numeOne;
      const newNumeTwo = (newDenominator / p.denoTwo) * p.numeTwo;
      p.answerNume = (newNumeOne + newNumeTwo) / 2;
      if (p.answerNume % 2 != 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      numeratorOne.textContent = p.numeOne;
      denominatorOne.textContent = p.denoOne;
      numeratorTwo.textContent = p.numeTwo;
      denominatorTwo.textContent = p.denoTwo;
      fractionsOperator.textContent = " and ";
      fractionChoice.textContent = "What fraction is exactly in between";
    }

    //GEOMETRY: AREA AND PERIMETER
    if (p.setting == 26) {
      drawingDisplay();
      ctx.font = "1em serif";
      ctx.save();

      if (p.rollx == 0) {
        canvasTextId.innerHTML = `Find the ${p.areaOrPerimeter} of the ${p.shapeChoice}.</br>`;
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

      if (p.rollx == 1) {
        canvasTextId.innerHTML = `Find the ${
          p.shapeChoice == "rectangle" ? p.side : "length of each side"
        } of the ${p.shapeChoice}.</br>`;
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
          canvasTextId.insertAdjacentHTML(
            "beforeend",
            `The ${p.areaOrPerimeter} of the ${p.shapeChoice} is ${
              p.areaOrPerimeter == "area"
                ? `${p.area} ${p.unitMeasurement}2.`
                : `${p.perimeter} ${p.unitMeasurement}.`
            } `
          );
          ctx.restore();
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
          canvasTextId.insertAdjacentHTML(
            "beforeend",
            `The ${p.areaOrPerimeter} of the ${p.shapeChoice} is ${
              p.areaOrPerimeter == "area"
                ? `${p.area} ${p.unitMeasurement}2.`
                : `${p.perimeter} ${p.unitMeasurement}.`
            } `
          );
          // ctx.fillText(
          //   `The ${p.areaOrPerimeter} of the ${p.shapeChoice} is ${
          //     p.areaOrPerimeter == "area"
          //       ? `${p.area} ${p.unitMeasurement}2.`
          //       : `${p.perimeter} ${p.unitMeasurement}.`
          //   } `,
          //   20,
          //   60
          // );
          ctx.restore();
        }
      }

      ctx.restore();
    }
  }

  //DISPLAY
  if (level == "calFour") {
    if (setting != 8 && setting != 9) {
      equalSymbolTwo.classList.add("hidden");
      equalSymbol.textContent = "=";
    }
    if (p.setting == 1) {
      normalDisplay();
      if (p.numOne == p.numTwo) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 2) {
      normalDisplay();
      // START CHANGE DISPLAY
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
      // END CHANGE DISPLAY
      let exclude = [7, 11, 13, 17, 19, 23, 29, 31];
      if (exclude.includes(p.numOne)) {
        console.log("Prime number detected!");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 3) {
      normalDisplay();
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      displayProblem.innerHTML = `
        What is/are the common factors of ${p.numOne} and ${p.numTwo}?</p>
        <i>List in ascending order.</i>`;
    }
    if (p.setting == 4) {
      workingDisplay();
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
    if (p.setting == 5) {
      normalDisplay();
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      let tempStatementArr =
        genNumbers(2) == 0
          ? `${leftSide.statementArr} = ${rightSide.statementArr}`
          : `${rightSide.statementArr} = ${leftSide.statementArr}`;

      p.answer = rightSide.answer;
      displayProblem.innerHTML = tempStatementArr;
    }

    //MULTIPLICATION IN SETS
    if (p.setting == 6) {
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

    //MULTIPLICATION IN SETS: FURTHER BREAKING
    if (p.setting == 7) {
      normalDisplay();
      let factors = [];
      const newNum = p.multiple + p.adjustment;
      if (newNum <= 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      for (let x = 1; x <= Math.abs(p.adjustment); x++) {
        if (Math.abs(p.adjustment) % x == 0) {
          factors.push(x);
        }
        console.log(p.multiple, x);
        console.log(factors);
      }
      if (factors.length <= 2)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );

      p.factor = factors[genNumbers(factors.length)];
      while (p.factor == 1 || p.factor == Math.abs(p.adjustment)) {
        p.factor = factors[genNumbers(factors.length)];
      }

      let symbol;
      if (p.adjustment < 0) {
        symbol = "-";
      } else {
        symbol = "+";
      }

      p.answer = Math.abs(p.adjustment / p.factor);

      let display = [];
      let container = [newNum, p.sets];
      while (display.length != 3) {
        if (display.length == 1) display.push(" x ");
        const index = genNumbers(container.length);
        display.push(container[index]);
        container.splice(index, 1);
        console.log(display);
      }
      // display = [...display.slice(0, 1), " x "];
      display.push(" = ");
      container = [p.multiple, p.sets];

      while (display.length != 7) {
        if (display.length == 5) display.push(" x ");
        const index = genNumbers(container.length);
        display.push(container[index]);
        container.splice(index, 1);
        console.log(display);
      }
      display.push(` ${symbol} `);

      container = ["____", p.sets, p.factor];
      while (display.length != 13) {
        const index = genNumbers(container.length);
        display.push(container[index]);
        container.splice(index, 1);
        if (display.length == 9) display.push(" x ");
        if (display.length == 11) display.push(" x ");
        console.log(display);
      }
      console.log(display.join(" "));
      displayProblem.innerHTML = `
      ${display.join(" ")}`;
    }
    if (p.setting == 8) {
      mixedFractionDisplay();
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
    if (p.setting == 9) {
      mixedFractionDisplay();
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
      if (p.denoOne == p.denoTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numOne;
      twoDenominator.textContent = p.denoOne;
      threeWholeNumber.textContent = p.wholeTwo;
      threeNumerator.textContent = p.numTwo;
      threeDenominator.textContent = p.denoTwo;
      equalSymbol.textContent = "-";
    }

    //FRACTIONS: NUMBERLINE
    if (p.setting == 10) {
      drawingDisplay();
      canvasTextId.textContent = `What is the fraction below?`;
      drawIntervals(p.start, p.intervals, p.eachInterval, p.arrow);
    }

    // FRACTIONS: UNIT SENTENCE
    if (p.setting == 11) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
    }

    // FRACTIONS: PARTS OF A FRACTION
    if (p.setting == 12) {
      normalDisplay();
      console.log(p.nume, p.deno, p.multiplier);
      [p.nume, p.deno] = simplify(p.nume, p.deno);
      // if (p.nume == p.deno) return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
      const pieces = p.nume * p.multiplier;
      p.whole = Math.floor(pieces / p.deno);
      p.remainder = pieces % p.deno;
      if (p.remainder == 0) {
        displayProblem.innerHTML = `
          How many
          <div class="frac">
          <span>${p.nume}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.deno}</span>
          </div>
          are there in ${p.whole}?
          `;
      } else {
        [p.remainder, p.deno] = simplify(p.remainder, p.deno);
        displayProblem.innerHTML = `
          How many
          <div class="frac">
          <span>${p.nume}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.deno}</span>
          </div>
          are there in
          ${p.whole}
          <div class="frac">
          <span>${p.remainder}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.deno}</span>
          </div>
          ?
          `;
      }
    }

    //FORM FRACTIONS
    if (p.setting == 13) {
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
    if (p.setting == 14) {
      normalDisplay();
      if ((p.unitB == "mins" || p.unitB == "hrs") && p.value % 60 == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (p.unitB == "days" && p.value % 24 == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (p.unitB == "years" && p.value % 12 == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      displayProblem.innerHTML = `
        Express ${p.value} ${p.unitA} in ${p.unitB} in the form of fraction.</br>
        Give your answer it its simplest form. 
        `;
    }

    //DECIMALS
    if (p.setting == 15) {
      normalDisplay();
      console.log("The current setting is: " + setting);
      const oneDisplay = p.numOne / p.convenientNumOne;
      const twoDisplay = p.numTwo / p.convenientNumTwo;
      displayProblem.innerHTML = `
        ${oneDisplay} + ${twoDisplay} = ?`;
      decimalCheck(oneDisplay);
      decimalCheck(twoDisplay);
    }

    if (p.setting == 16) {
      normalDisplay();
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
    if (p.setting == 17) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      console.log(p.sentenceArr);
      displayProblem.innerHTML = `
        Find the value of:</p>
        ${p.sentenceArr.join(", ")}.`;
    }

    if (p.setting == 18) {
      normalDisplay();
      p.numOne = p.numOne / p.convenientNumOne;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
        ${p.numOne} x ${p.numTwo} = ?`;
      decimalCheck(p.numOne * p.numTwo);
    }
    if (p.setting == 19) {
      normalDisplay();
      p.numOne = p.numOne / p.convenientNumOne;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
        ${p.numOne} x ${p.numTwo} = ?`;
    }
    if (p.setting == 20) {
      normalDisplay();
      p.numTwo = p.numOne;
      p.numOne = (p.numOne * p.multiplier) / p.divisor;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
        ${p.numOne} ÷ ${p.numTwo} = ?`;
      decimalCheck(p.numOne / p.numTwo);
    }
    if (p.setting == 21) {
      normalDisplay();
      // START CHANGE DISPLAY
      if (p.numOne == p.numTwo) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      [p.numOne, p.numTwo] = simplify(p.numOne, p.numTwo);
      if (p.numTwo == 1)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      // END CHANGE DISPLAY
      if (genNumbers(2) == 0) {
        displayProblem.innerHTML = `
          <div class="frac">
          <span>${p.numOne}</span>
          <span class="symbol">/</span>
          <span class="bottom">${p.numTwo}</span>
          </div> ≈ ?</p>
        Round off your answer to ${p.roundOff} decimal place.
        `;
      } else {
        displayProblem.innerHTML = ` Divide
              ${p.numOne} by ${p.numTwo}.</p>
              Round off your answer to ${p.roundOff} decimal place.
              `;
      }
    }
    if (p.setting == 22) {
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

    // DECIMALS: PARTS AND INTERVAL
    if (p.setting == 23) {
      drawingDisplay();
      drawIntervals(p.start, p.intervals, p.eachInterval, p.arrow);
    }
  }
  // DISPLAY
  if (level == "calFive") {
    //ALLOW CALCULATOR

    const calculatorNotAllowed = [0, 1, 2, 3, 20, 21];
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

    if (p.setting != 3) {
      threeNumerator.classList.remove("hidden");
      threeDenominator.classList.remove("hidden");
    }
    if (p.setting == 3) {
      threeWholeNumber.classList.remove("hidden");
    }

    if (p.setting == 0) {
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
        if (equation < 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        let symbolChoice = p.arrSymbol[genNumbers(p.arrSymbol.length)];
        if (symbolChoice == "/") {
          // const value = eval(p.arrConstructor.join(""));
          const value = p.arrConstructor[p.arrConstructor.length - 1];
          console.log(value);
          if (value <= 0)
            return updateCalc(
              level,
              state,
              setting,
              regen,
              skipGlobalUpdateProblem
            );
          let arrFactor = [];
          for (let i = 2; i <= value; i++) {
            if (value % i == 0) {
              arrFactor.push(i);
            }
          }
          console.log(arrFactor);
          p.arrConstructor.push(symbolChoice);
          if (arrFactor.length < 4)
            return updateCalc(
              level,
              state,
              setting,
              regen,
              skipGlobalUpdateProblem
            );
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
      if (indexSymbolTwo < indexSymbol)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      p.arrConstructor.splice(indexSymbolTwo + 2, 0, ")");
      // console.log(p.arrConstructor.join(""));
      // console.log(eval(p.arrConstructor.join("")));
      // console.log(eval(p.arrConstructor.toString()));
      // if (eval(p.arrConstructor.toString()) <= 0) {
      //   console.log("IT TURNED NEGATIVE?!");
      //   return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
      // }

      if (eval(p.arrConstructor.join(" ")) <= 0) {
        console.log("IT TURNED NEGATIVE?!");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
      if (p.answer <= 0 || p.answer % 1 != 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      // console.log(p.answer);
      const replaceTimes = p.arrConstructor.join(" ").replace("*", "x");
      const final = replaceTimes.replace("/", "÷");
      const statement = ["Solve", "Evaluate", "Simplify"][genNumbers(3)];
      displayProblem.innerHTML = `${statement}:</p>${final}`;
    }

    if (p.setting == 1) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        numeratorOne.textContent = p.numeratorOne;
        denominatorOne.textContent = p.denominatorOne;
        numeratorTwo.textContent = p.numeratorTwo;
        denominatorTwo.textContent = p.denominatorTwo;
      }
      fractionsOperator.textContent = "x";
      fractionChoice.textContent = "";
    }

    if (p.setting == 2) {
      mixedFractionDisplay();
      if (p.numeratorOne == p.denominatorOne) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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

      if (p.denominatorTwo == 1)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numeratorOne;
      twoDenominator.textContent = p.denominatorOne;
      equalSymbol.textContent = "x";
    }
    if (p.setting == 3) {
      mixedFractionDisplay();
      displayTwoFractions.style.fontSize = "30px";
      displayTwoFractions.style.marginBottom = "50px";
      threeNumerator.classList.add("hidden");
      threeDenominator.classList.add("hidden");
      if (p.numeratorOne == p.denominatorOne) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
      if (p.numeratorOne == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );

      // fractionsUnitOfMeasurement.textContent = p.unitsMeasurement;
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numeratorOne;
      twoDenominator.textContent = p.denominatorOne;
      equalSymbol.textContent = `${p.unitsMeasurement} =`;
      threeWholeNumber.textContent = `? ${p.unitsPair}`;
    }
    // FRACTIONS: REMAINDER CONCEPT
    if (p.setting == 4) {
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
        ${displaySimpleFraction(p.numA, p.denoA)} of A is removed.</p>
        ${displaySimpleFraction(p.numB, p.denoB)} of B is removed.</p>
        ${displaySimpleFraction(p.numC, p.denoC)} of C is removed.</p>
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
          ${gender[0].toUpperCase() + gender.slice(1)} spent another ${
          p.partB
        }/${p.denoB} of the remainder on ${p.objectsTwo}.</p>
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
    if (p.setting == 5) {
      normalDisplay();

      // return console.log("test");
      [p.numA, p.denoA] = simplify(p.numA, p.denoA);
      [p.numB, p.denoB] = simplify(p.numB, p.denoB);
      if (p.numA == p.numB && p.denoA == p.denoB) p.denoB += 1;
      if (p.version == 1) {
        displayProblem.innerHTML = `
        ${displaySimpleFraction(p.numA, p.denoA)} of A is ${
          genNumbers(2) == 0 ? "the same as" : "equal to"
        } ${displaySimpleFraction(p.numB, p.denoB)} of B.</p>
        What is the ratio of A : B?
        `;
      }
      if (p.version == 2) {
        displayProblem.innerHTML = `
        ${displaySimpleFraction(p.numA, p.denoA)} of A are ${p.colors}.</p>
        ${displaySimpleFraction(p.numB, p.denoB)} of B are ${p.colors}.</p>
        A and B have the same number of ${p.colors}.</p>
        What is the ratio of A : B?
        `;
      }
      if (p.version == 3) {
        displayProblem.innerHTML = `
          ${displaySimpleFraction(p.numA, p.denoA)} of A were ${p.choice}.</p>
          ${displaySimpleFraction(p.numB, p.denoB)} of B were ${p.choice}.</p>
          A and B has the same amount ${
            p.choice == "left" ? "removed" : "left"
          }.</p>
          What is the ratio of A : B at first?
          `;
      }
    }
    if (p.setting == 6) {
      normalDisplay();
      [p.numA, p.denoA] = simplify(p.numA, p.denoA);
      [p.numB, p.denoB] = simplify(p.numB, p.denoB);
      displayProblem.innerHTML = `
        A and B are the same.</p>
        ${displaySimpleFraction(p.numA, p.denoA)} of A was removed.</p>
        ${displaySimpleFraction(p.numB, p.denoB)} of B was removed.</p>
        What fraction of the total ${
          p.choice == "left" ? "is left" : "was removed"
        }? 
        `;
    }

    // FRACTIONS: BEFORE AND AFTER LIKE FRACTIONS
    if (p.setting == 7) {
      normalDisplay();
      const gender = genNumbers(2) == 0 ? "he" : "she";
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      if (p.numeOne == p.numeTwo && p.denoOne == p.denoTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );

      p.last_deno = commonDeno(p.denoOne, p.denoTwo);
      const mulOne = p.last_deno / p.denoOne;
      const mulTwo = p.last_deno / p.denoTwo;
      const new_numeOne = mulOne * p.numeOne;
      const new_numeTwo = mulTwo * p.numeTwo;

      if (p.direction == "+" && p.version == 0) {
        const firstFraction = p.numeOne / p.denoOne;
        const secondFraction = p.numeTwo / p.denoTwo;
        if (secondFraction <= firstFraction)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const valueUnit = p.last_deno - new_numeOne - new_numeTwo;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        if (p.numeTwo / p.denoTwo + p.numeOne / p.denoOne >= 1)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        displayProblem.innerHTML = `
        Person ${
          p.person
        } wanted to buy something, but only had ${displaySimpleFraction(
          p.numeOne,
          p.denoOne
        )} of the amount.</p>
        After receiving another $${
          p.situation
        }, ${gender} is still short of ${displaySimpleFraction(
          p.numeTwo,
          p.denoTwo
        )}.</p>
        How much is the item?
        `;
      }
      if (p.direction == "+" && p.version == 1) {
        // if (p.numeTwo / p.denoTwo <= p.numeOne / p.denOne) return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
        const valueUnit = p.last_deno + new_numeTwo - new_numeOne;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        displayProblem.innerHTML = `
        Person ${
          p.person
        } wanted to buy something, but only had ${displaySimpleFraction(
          p.numeOne,
          p.denoOne
        )} of the cost.</p>
        After receiving another $${
          p.situation
        }, ${gender} has an extra of ${displaySimpleFraction(
          p.numeTwo,
          p.denoTwo
        )} of the cost.</p>
        How much is the item?
        `;
      }
      if (p.direction == "-" && p.version == 0) {
        if (p.numeTwo / p.denoTwo >= p.numeOne / p.denoOne)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const valueUnit = new_numeOne - new_numeTwo;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        displayProblem.innerHTML = `
        Person ${p.person} gave away some of ${
          gender == "she" ? "her" : "his"
        } money and had ${displaySimpleFraction(
          p.numOne,
          p.denoOne
        )} of it left.</p>
        ${gender} then spent another $${
          p.situation
        }, and now has ${displaySimpleFraction(
          p.numeTwo,
          p.denoTwo
        )} of it left.</p>
        How much did ${gender} have at first?
        `;
      }
      if (p.direction == "-" && p.version == 1) {
        if (p.numeTwo / p.denoTwo >= p.numeOne / p.denoOne)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const valueUnit = new_numeOne - new_numeTwo;
        while (p.situation % valueUnit != 0) p.situation -= 1;
        p.oneUnit = p.situation / valueUnit;
        displayProblem.innerHTML = `
        Person ${p.person} gave away ${displaySimpleFraction(
          p.denoOne - p.numeOne,
          p.denoOne
        )}${p.denoOne - p.numeOne}/${p.denoOne} of ${
          gender == "she" ? "her" : "his"
        } money.</p>
        ${gender} then spent another $${
          p.situation
        }, and now has ${displaySimpleFraction(
          p.numeTwo,
          p.denoTwo
        )} of it left.</p>
        How much did ${gender} have at first?
        `;
      }

      if (p.situation == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
    }

    // GEOMETRY: AREA OF RIGHT ANGLED TRIANGLE
    if (p.setting == 8) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }

      ctx.restore();
    }

    // AREA OF TRIANGLES
    if (p.setting == 9) {
      drawingDisplay();
      while (p.pointTwo == p.pointOne) {
        p.second = genNumbers(5);
        p.pointTwo = ["B", "C", "D", "E", "F"][p.second];
      }
      drawTriangle(p.base * 4, p.height * 4, p.pointOne, p.pointTwo);
    }

    // GEOMETRY: BIG - SMALL
    if (p.setting == 10) {
      drawingDisplay();
      canvasTextId.innerHTML = `Find the area of the shaded part.</br>The side of each square is ${p.side} cm.`;
      const maxWidth = 320;
      const maxHeight = 240;
      const size = 40;
      ctx.save();
      ctx.translate(40, 0);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.rect(0, 0, maxWidth, maxHeight);
      // ctx.lineTo(0, 100);
      ctx.stroke();

      for (let i = 0; i < maxHeight; i += size) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(maxWidth, i);
        ctx.stroke();
      }
      for (let i = 0; i < maxWidth; i += size) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, maxHeight);
        ctx.stroke();
      }

      // ctx.fillText(`1 cm`, maxWidth - size, -5);

      //DRAWING TRIANGLE
      ctx.save();
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(p.pointAX * size, 0);
      ctx.lineTo(maxWidth, p.pointBY * size);
      ctx.lineTo(0, maxHeight);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
    }

    //VOLUME AND SURFACE AREA
    if (p.setting == 11) {
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
    if (p.setting == 12) {
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
      if (check == "Error")
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
    }
    // RATIO: SIMPLIFICATION AND EXPANSION
    if (p.setting == 13) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 14) {
      drawingDisplay();
      drawForFraction(state, "ratio");
      // console.log(mediumColumn, smallRow, p.shaded, p.total);
      if (p.shaded == 0) {
        ctx.restore();
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      ctx.restore(); //1st
    }
    // RATIO: REPEATED IDENTITY
    if (p.setting == 15) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 16) {
      normalDisplay();
      console.log(p.objects);
      const objectA = p.objects[0];
      const objectB = p.objects[1];
      [p.ratioA, p.ratioB] = simplify(p.ratioA, p.ratioB);
      [p.ratioC, p.ratioD] = simplify(p.ratioC, p.ratioD);
      if (((p.ratioA == p.ratioB) == p.ratioC) == p.ratioD)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (manipulation > 0 && p.ratioA + p.ratioB == p.ratioC + p.ratioD) {
        console.log("Manipulated!");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 17) {
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
      let difference = "added";
      if (p.version == "difference") {
        if (shaded == unshaded)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        console.log("Shaded: " + shaded, "Unshaded: " + unshaded);
        p.shaded = shaded;
        p.unshaded = unshaded;
      }

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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }

      [shadedEnd, unshadedEnd] = simplify(shadedEnd, unshadedEnd);
      if (unshadedEnd == unshaded) {
        console.log("No change in ratio for unshaded");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      //UNCHANGED DIFFERENCE
      if (p.version == "difference") {
        displayProblem.insertAdjacentHTML(
          "afterbegin",
          `An equal number of white and black squares have been ${difference} for the ratio of the black to white squares to be ${shadedEnd}:${unshadedEnd}?</br>How many black squares were ${difference}?`
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
    if (p.setting == 18) {
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
    if (p.setting == 19) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 20) {
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
    if (p.setting == 21) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 22) {
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
      if (theCommonDeno > 100)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 23) {
      normalDisplay();
      displayProblem.innerHTML = `
        Person A spent ${p.percA}% of his money on ${p.itemOne}.</p>
        He then spent another ${p.percR}% of his remaining money on ${p.itemTwo}.</p>
        `;
      if (p.question == "percentage") {
        const remaining = 100 - p.percA;
        const itemTwoP = (remaining / 100) * p.percR;
        if (itemTwoP % 1 != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What percentage of his money did he spend on ${p.itemTwo}?`
        );
      }
      if (p.question == "percentage left") {
        const remaining = 100 - p.percA;
        const itemTwoP = (remaining / 100) * p.percR;
        if (itemTwoP % 1 != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        if (itemTwoP % 1 != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 24) {
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
              genNumbers(2) == 0
                ? "an additional discount"
                : "a further discount"
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
    if (p.setting == 25) {
      normalDisplay();
      const oldAverage = (p.numOne + p.numTwo + p.numThree) / 3;
      if (oldAverage % 1 != 0) {
        if (oldAverage.toString().split(".")[1].length > 3)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      }
      const newAverage = (p.numOne + p.numTwo + p.numThree + p.situation) / 3;
      if (newAverage % 1 != 0) {
        if (newAverage.toString().split(".")[1].length > 3)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        console.log(p.situation);
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
    if (p.setting == 26) {
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
    if (p.setting == 1) {
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
      displayProblem.innerHTML = `
        ${person} spent ${displaySimpleFraction(
        p.numeA,
        p.denoA
      )} of her money on something.</br>
        She then spent ${displaySimpleFraction(p.numeB, p.denoB)} ${
        genNumbers(2) == 0 ? "of the remainder" : "of the amount left"
      } on something else.</br>
        Her mother gave her another $${p.value} so she now has ${
        p.end
      } amount she had at first.</br>
        How much did ${person} have at first?
  
        
        `;
    }
    //REMAINDER CONCEPT: UNDER THE SAME UNIT
    if (p.setting == 2) {
      normalDisplay();
      const person = boyNames[genNumbers(boyNames.length)];
      [p.denoA, p.numeA] = simplify(p.denoA, p.numeA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      [p.unitA, p.unitB] = simplify(p.unitA, p.unitB);

      const totalUnits = p.quantityA * p.unitA + p.quantityB * p.unitB;

      if (totalUnits % p.numeA != 0) {
        console.log("ugly Units");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      // console.log(p.unitA, p.quantityA, p.unitB, p.quantityB);
      // console.log(totalUnits);

      const oneTopNume = totalUnits / p.numeA;
      if (oneTopNume % 1 != 0) {
        console.log("ugly Units");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const oneTopOtherNume = oneTopNume * (p.denoA - p.numeA);
      console.log(oneTopOtherNume);
      const oneBottomNume = oneTopOtherNume / p.denoB;
      if (oneBottomNume % 1 != 0) {
        console.log("ugly Units");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const numberOfExtraUnitsUsed = oneBottomNume * p.numeB;
      // console.log(`${numberOfExtraUnitsUsed} extra units`);
      if (p.chosen == "A") p.extraBought = numberOfExtraUnitsUsed / p.unitA;
      if (p.chosen == "B") p.extraBought = numberOfExtraUnitsUsed / p.unitB;

      // console.log(p.extraBought);
      if (p.extraBought <= 0) {
        console.log("No extra bought");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      displayProblem.innerHTML = `
        A ${p.objectA.slice(
          0,
          p.objectA.length - 1
        )} costs ${displaySimpleFraction(
        p.unitA,
        p.unitB
      )} of a ${p.objectB.slice(0, p.objectB.length - 1)}.</br>
        ${person} bought ${p.quantityA} ${p.objectA} and ${p.quantityB} ${
        p.objectB
      }  with ${displaySimpleFraction(p.numeA, p.denoA)} of his money.</br>
        He then bought ${p.extraBought % 1 != 0 ? "as many" : "more"} ${
        p.chosen == "A" ? p.objectA : p.objectB
      } with ${displaySimpleFraction(
        p.numeB,
        p.denoB
      )} of his remaining money.</br>
        How many ${
          p.chosen == "A" ? p.objectA : p.objectB
        } did he have in the end?
        `;
    }
    // FRACTIONS: OVERLAPPING MODEL
    if (p.setting == 3) {
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
    if (p.setting == 4) {
      normalDisplay();
      [p.nume, p.deno] = simplify(p.nume, p.deno);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      const commonNumber = commonDeno(p.deno - p.nume, p.numeTwo);
      const multiOne = commonNumber / (p.deno - p.nume);
      const multiTwo = commonNumber / p.numeTwo;
      const newDenoOne = p.deno * multiOne;
      const newDenoTwo = p.denoTwo * multiTwo;
      console.log(commonNumber, multiOne, multiTwo, newDenoOne, newDenoTwo);
      if (newDenoOne >= newDenoTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      p.numOne = (genNumbers(10) + 2) * (newDenoTwo - newDenoOne);

      displayProblem.innerHTML = `
        ${p.person} ${genNumbers(2) == 0 ? "used" : "spent"} $${
        p.numOne
      } on something.</p>
        He then ${
          genNumbers(2) == 0 ? "used" : "spent"
        } another ${displaySimpleFraction(p.nume, p.deno)} of ${
        genNumbers(2) == 0 ? "the remainder" : "the amount left"
      } on ${p.somethingElse}.</p>
        He is left with ${displaySimpleFraction(p.numeTwo, p.denoTwo)} of ${
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
    if (p.setting == 5) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        if (distanceAB == -coordBy / 20) {
          console.log("Ugly");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }

      ctx.restore();
    }
    // GEOMETRY: AREA OF FIGURE : CUTTING
    if (p.setting == 6) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 7) {
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
    if (p.setting == 8) {
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
    if (p.setting == 9) {
      drawingDisplay();
      ctx.save();
      ctx.font = "1em serif";

      let pointDF = p.firstTriangleBase;
      let pointCF = p.length - p.firstTriangleBase;
      [pointDF, pointCF] = simplify(pointDF, pointCF);
      if (pointDF == p.firstTriangleBase) {
        console.log("Couldnt simplify 1.");
        ctx.restore();
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      let pointBE = p.thirdTriangleHeight;
      let pointCE = p.breadth - p.thirdTriangleHeight;
      [pointBE, pointCE] = simplify(pointBE, pointCE);
      if (pointBE == p.thirdTriangleHeight) {
        console.log("Couldnt simplify 2.");
        ctx.restore();
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 10) {
      normalDisplay();
      let total = p.varA + p.varB + p.varC;
      let firstTotal = undefined;
      let secondTotal = undefined;
      p.answer = [p.varA, p.varB, p.varC];

      if (p.firstScene == "total" && p.secondScene == "total") {
        [p.varA, firstTotal] = simplify(p.varA, total);
        [p.varB, secondTotal] = simplify(p.varB, total);
        if (firstTotal == secondTotal)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 11) {
      normalDisplay();
      let unitAF = "";
      let unitBF = "";
      let unitAE = "";
      let unitBE = "";
      let value = "";
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      if (p.valueAFirst == unitAF || p.valueBFirst == unitBF) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (p.happensTo == "A") {
        [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBFirst);
      }
      if (p.happensTo == "B") {
        [unitAE, unitBE] = simplify(p.valueAFirst, p.valueBEnd);
      }
      if (p.valueAEnd == unitAE || p.valueBEnd == unitBF) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        if (unitAF == unitAE || unitBF == unitBE) {
          console.log("Units are already the same");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 12) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      console.log(p.valueAFirst, p.valueBFirst, p.valueAEnd, p.valueBEnd);

      // PREP
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBEnd);
      if (p.valueAFirst == unitAF || p.valueAEnd == unitAE) {
        console.log("Values unable to be simplified");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      if (unitAF + unitBF == unitAE + unitBE) {
        console.log("Total units is already the same.");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (unitAF >= 15 || unitAE > 15 || unitAE > 15 || unitBE > 15) {
        console.log("Units are too big");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 13) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (unitAF <= 0 || unitBF <= 0 || unitAE <= 0 || unitBE <= 0) {
        console.log("Units are too Small");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (((unitAF == unitBF) == unitAE) == unitBE)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (p.valueAFirst == unitAF || p.valueAEnd == unitAE) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 14) {
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
    if (p.setting == 15) {
      drawingDisplay();
      const heightNeeded = 140 + p.rectBreadth * 10 + p.triangleHeight * 10;
      if (heightNeeded > 275) {
        canvas.setAttribute("height", heightNeeded + 20);
      } else {
        canvas.setAttribute("height", 275);
      }

      canvasTextId.classList.remove("hidden");
      ctx.clearRect(0, 0, 400, 275);
      ctx.save();
      const xFirst = p.rectLength * 10;
      const yFirst = p.rectBreadth * 10;
      ctx.beginPath();
      ctx.rect(20, 0, p.rectLength * 10, p.rectBreadth * 10);
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
      ctx.translate(20, 0);
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
        //   return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (overFirst == overSecond) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      // FIRST UNIT SENTENCE

      let firstClue;
      const unitSentenceOne = genNumbers(3);
      if (unitSentenceOne == 0) {
        firstClue = `The ratio of the unshaded part of the ${
          secondShape == "rectangle" ? "top " : ""
        }rectangle to shaded part of the ${
          secondShape == "rectangle" ? "top " : ""
        }rectangle is ${unshadedFirst} : ${overFirst}.`;
      }
      //SET 2

      if (unitSentenceOne == 1) {
        firstClue = `The ratio of the unshaded part of the ${
          secondShape == "rectangle" ? "top " : ""
        } rectangle to the ${
          secondShape == "rectangle" ? "top " : ""
        }rectangle is ${unshadedFirst} : ${unshadedFirst + overFirst}.`;
      }
      //SET 3
      if (unitSentenceOne == 2) {
        firstClue = `The ratio of the shaded part to the unshaded part of the ${
          secondShape == "rectangle" ? "top " : ""
        }rectangle is ${overFirst} : ${unshadedFirst}.`;
      }

      // SECOND UNIT SENTENCE
      let secondClue;
      const unitSentenceTwo = genNumbers(3);
      if (unitSentenceTwo == 0) {
        secondClue = `The ratio of the unshaded part of the ${
          secondShape == "rectangle" ? "bottom" : ""
        } ${secondShape} to shaded part of the ${
          secondShape == "rectangle" ? "bottom" : ""
        } ${secondShape} is ${unshadedSecond} : ${overSecond}.`;
      }
      if (unitSentenceTwo == 1) {
        secondClue = `The ratio of the unshaded part of the ${
          secondShape == "rectangle" ? "bottom" : ""
        } ${secondShape} to the area of the ${
          secondShape == "rectangle" ? "bottom" : ""
        } ${secondShape} is ${unshadedSecond} : ${
          unshadedSecond + overSecond
        }.`;
      }
      if (unitSentenceTwo == 2) {
        secondClue = `The ratio of the shaded part of the ${
          secondShape == "rectangle" ? "bottom" : ""
        } ${secondShape} to unshaded part of the ${
          secondShape == "rectangle" ? "bottom" : ""
        } ${secondShape} is ${overSecond} : ${unshadedSecond}.`;
      }

      //  QUESTION
      let question = `What is the ratio of the ${
        secondShape == "rectangle" ? "top" : ""
      } unshaded part in the rectangle to the unshaded part in the ${
        secondShape == "rectangle" ? "bottom" : ""
      } ${secondShape}?`;
      ctx.restore();

      canvasTextId.innerHTML = `
        ${firstClue}</br>
        ${secondClue}</br>
        ${question}</br>
        `;
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
    if (p.setting == 16) {
      normalDisplay();
      const displayA = p.percA;
      const displayB = p.percB;
      if (p.firstSentence == "the total" && p.secondSentence == "the total") {
        if (p.percA + p.percB >= 100)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        if (commonGroup == "Error")
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const multiplierOne = commonGroup / bAndc;
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + c);
        newB = p.percB * multiplierTwo;
        newC = c * multiplierTwo;
        if (newA < 1 || newB < 1 || newC < 1)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (p.firstSentence == "the total" && p.secondSentence == "C") {
        let bAndc = 100 - p.percA;
        [p.percA, bAndc] = simplify(p.percA, bAndc);
        let c = 100;
        [p.percB, c] = simplify(p.percB, c);
        commonGroup = commonDeno(bAndc, p.percB + c);
        if (commonGroup == "Error")
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const multiplierOne = commonGroup / bAndc;
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + c);
        newB = p.percB * multiplierTwo;
        newC = c * multiplierTwo;
        if (newA < 1 || newB < 1 || newC < 1)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (p.firstSentence == "B and C" && p.secondSentence == "the total") {
        let bAndc = 100;
        [p.percA, bAndc] = simplify(p.percA, bAndc);
        let aAndc = 100 - p.percB;
        [p.percB, aAndc] = simplify(p.percB, aAndc);
        commonGroup = commonDeno(p.percA + bAndc, p.percB + aAndc);
        if (commonGroup == "Error")
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const multiplierOne = commonGroup / (p.percA + bAndc);
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + aAndc);
        newB = p.percB * multiplierTwo;
        newC = aAndc * multiplierTwo - newA;
        if (newA < 1 || newB < 1 || newC < 1)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (p.firstSentence == "the total" && p.secondSentence == "the total") {
        let bAndc = 100 - p.percA;
        [p.percA, bAndc] = simplify(p.percA, bAndc);
        let aAndc = 100 - p.percB;
        [p.percB, aAndc] = simplify(p.percB, aAndc);
        commonGroup = commonDeno(p.percA + bAndc, p.percB + aAndc);
        if (commonGroup == "Error")
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const multiplierOne = commonGroup / (p.percA + bAndc);
        newA = p.percA * multiplierOne;
        const multiplierTwo = commonGroup / (p.percB + aAndc);
        newB = p.percB * multiplierTwo;
        newC = aAndc * multiplierTwo - newA;
        if (newA < 1 || newB < 1 || newC < 1)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        [newA, newB, newC] = simplifyThree(newA, newB, newC);
        p.answer = `${newA}:${newB}:${newC}`;
      }
      if (newA > 150 || newB > 150 || newC > 150)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      displayProblem.innerHTML = `
        A is ${displayA}% of ${p.firstSentence}.</p>
        B is ${displayB}% of ${p.secondSentence}.</p>
        What is the ratio of A : B : C?
        `;
    }

    // PERCENTAGE: OVERLAPPING MODEL
    if (p.setting == 17) {
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
        p.difference = genNumbers(100) - 50 + 10;
        personBValue = personAValue + p.difference;
      }
      const personCValue = totalValue - personAValue - personBValue;

      displayProblem.innerHTML = `
    ${personA} took ${percentageA}% of the ${stuff}.</br>
    ${personB} took ${Math.abs(p.difference)} ${
        p.difference > 0 ? "more" : "less"
      } ${stuff} than ${personA}.</br>
    ${personC} took the remaining ${personCValue} ${stuff}.</br>
    `;
      if (personCValue <= 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 18) {
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
        if (p.optionTwo == "gst") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "How much is the GST?"
          );
        }
        if (p.optionTwo == "cost") {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            "How much did he have to pay in the end?"
          );
        }
      }

      if (p.optionOne == "service") {
        // const serviceCharge = (p.value / 100) * 10;
        // if (serviceCharge.toString().split(".")[1] > 2) return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
        // const gst = (serviceCharge / 100) * p.gst;
        // if (gst.toString().split(".")[1] > 2) return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
        // const bill = p.value + serviceCharge + gst;
        const furtherIncrease = (110 / 100) * 108;
        console.log(accDecimal(furtherIncrease));
        p.value = genNumbers(89) + 10;
        const bill = p.value * furtherIncrease;
        // p.value = bill / furtherIncrease;
        if (bill.toString().split(".")[1].length > 2)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          if (bill.toString().split(".")[1].length > 2)
            return updateCalc(
              level,
              state,
              setting,
              regen,
              skipGlobalUpdateProblem
            );
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
    if (p.setting == 19) {
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
        if (newSave.toString().split(".")[1].length > 2)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
            : `The amount ${genderB} saves would ${
                p.change > 0 ? "increase" : "decrease"
              } by $${Math.abs(accDecimal(changeSaving))}.`
        }
        </br>
        What is ${gender} salary?
  
        `;
    }
    //AVERAGE: EXTERNAL CHANGE
    if (p.setting == 20) {
      normalDisplay();
      if (p.changeQuantity == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      p.changeQuantity > 0 ? (p.situation = "joined") : (p.situation = "left");
      const oldTotal = p.oldQuantity * p.oldAverage;
      // const newTotal = (p.oldQuantity + p.changeQuantity) * p.newAverage;
      const newTotal = oldTotal + p.changeQuantity * p.average;
      if (p.oldQuantity + p.changeQuantity == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      const newAverage = newTotal / (p.oldQuantity + p.changeQuantity);

      if (newAverage <= 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (newAverage % 1 != 0) {
        if (newAverage.toString().split(".")[1] > 3)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      }

      if (p.average == newAverage || p.oldAverage == newAverage) {
        console.log("Same average");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 21) {
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
    if (p.setting == 22) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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

    // PATTERN: CONTINUOUS PATTERN (SETS)
    if (p.setting == 23) {
      normalDisplay();
      p.second = p.first + p.secondDiff;
      displayProblem.innerHTML = `
        Solve for the pattern below:
        <table class="table table-bordered tableEnd">
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Value</th>
            </tr>
          </thead>
          <tr>
            <td>1</td>
            <td>${p.start}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>${p.start + p.first}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>${p.start + p.first + p.second}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>${p.start + p.first * 2 + p.second}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>${p.start + p.first * 2 + p.second * 2}</td>
          </tr>
          <tr>
             <td colspan="2">...</td> 
          </tr>
          </table>
        `;

      const sets = Math.floor((p.pattern - 1) / 2);
      const remainder = (p.pattern - 1) % 2;
      p.value = sets * (p.first + p.second);
      p.value = p.value + p.start;
      if (remainder == 1) p.value += p.first;
      if (p.question == "pattern") {
        document.querySelector(".tableEnd").insertAdjacentHTML(
          "beforeend",
          `
          <tr>
            <td>${p.pattern}</td>
            <td>?</td>
          </tr>`
        );
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `What is the value for pattern ${p.pattern}?`
        );
      } else {
        document.querySelector(".tableEnd").insertAdjacentHTML(
          "beforeend",
          `
          <tr>
            <td>?</td>
            <td>${p.value}</td>
          </tr>`
        );
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `Which pattern gives a value of ${p.value}?`
        );
      }
    }
    // RATIO: UNIDENTICAL GROUP
    if (p.setting == 24) {
      normalDisplay();

      [p.A1, p.A2] = simplify(p.A1, p.A2);
      [p.B1, p.B2] = simplify(p.B1, p.B2);

      p.totalA = [p.A1 + p.A2];
      p.totalB = [p.B1 + p.B2];

      while (
        p.totalB[p.totalB.length - 1] * p.multiples !=
        p.totalA[p.totalA.length - 1]
      ) {
        let lastA = p.totalA[p.totalA.length - 1];
        let lastB = p.totalB[p.totalB.length - 1];
        // console.log(lastA, lastB);
        if (lastA / lastB < p.multiples) {
          p.totalA.push(lastA + p.totalA[0]);
        }
        // if (lastB / p.multiples > lastA){
        if (lastB * p.multiples < lastA) {
          p.totalB.push(lastB + p.totalB[0]);
        }

        // }

        if (lastA > 100 || lastB > 100)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      }
      console.log(p.totalA, p.totalB);
      let final;
      if (p.question == "FM")
        final = `What is the ratio of the females in group A and the males in group B?`;
      if (p.question == "FF")
        final = `What is the ratio of the females in group A and the female in group B?`;
      if (p.question == "MF")
        final = `What is the ratio of the males in group A and the females in group B?`;
      if (p.question == "MM")
        final = `What is the ratio of the males in group A and the males in group B?`;

      let orderA;
      const A = genNumbers(2);
      if (A == 0) {
        orderA = `The ratio of the male to female students in group A is ${p.A1} : ${p.A2}.</br>`;
      }
      if (A == 1) {
        orderA = `The ratio of the female to male students in group A is ${p.A2} : ${p.A1}.</br>`;
      }
      let orderB;
      const B = genNumbers(2);
      if (B == 0) {
        orderB = `The ratio of the male to female students in group B is ${p.B1} : ${p.B2}.</br>`;
      }
      if (B == 1) {
        orderB = `The ratio of the female to male students in group B is ${p.B2} : ${p.B1}.</br>`;
      }

      displayProblem.innerHTML = `
        Group A is ${p.multiples} times of group B.</br>
        ${orderA}
        ${orderB}
        ${final}
        `;
      p.A1 = p.totalA.length * p.A1;
      p.A2 = p.totalA.length * p.A2;
      p.B1 = p.totalB.length * p.B1;
      p.B2 = p.totalB.length * p.B2;
    }
    // BOTTOM OF CALFIVEB
  }

  // DISPLAY
  if (level == "calSix") {
    if (p.setting == 2) {
      calculatorSymbol.classList.add("hidden");
    } else {
      calculatorSymbol.classList.remove("hidden");
    }

    if (p.setting == 1) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        if (setTwo >= setOne || setOne % setTwo == 0) {
          console.log("Numbers are too small");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          (numeTotal * p.denominatorTwo) % (p.denominator * p.numeratorTwo) ==
          0
        ) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }

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
    // FRACTIONS: NUMERTOR OF A VALUE
    if (p.setting == 2) {
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      normalDisplay();
      let item;
      if (p.unit == "kg") {
        item = "packet";
      }
      if (p.unit == "ℓ") {
        item = "bottle";
      }
      displayProblem.innerHTML = `
        <div class="frac">
        <span>${p.numeA}</span>
        <span class="symbol">/</span>
        <span class="bottom">${p.denoA}</span>
        </div>
        of a ${item} is
        <div class="frac">
        <span>${p.numeB}</span>
        <span class="symbol">/</span>
        <span class="bottom">${p.denoB}</span>
        </div> ${p.unit}.</br>
        How many ${p.unit} are ${p.question} ${item}s?
        `;
    }

    // CIRCLES
    if (p.setting == 3) {
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
    if (p.setting == 4) {
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

    if (p.setting == 5) {
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
    if (p.setting == 6) {
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
    if (p.setting == 7) {
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
        if (p.speedA == p.speedB)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 8) {
      normalDisplay();
      const personA = boyNames[genNumbers(boyNames.length)];
      const personB = girlNames[genNumbers(girlNames.length)];
      const diffDistance = (p.diffSpeed * p.time) / 60 / 2;
      const str = diffDistance.toString().split(".")[1];
      if (str) {
        if (str.length > 2) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        if (p.speedA > p.speedB) {
          middleClue = `${personA} made a U-turn at Town B and met ${personB} ${Math.abs(
            diffDistance
          )} km from Town B.`;
        } else {
          middleClue = `${personB} made a U-turn at Town B and met ${personA} ${Math.abs(
            diffDistance
          )} km from Town B.`;
        }
      }

      //MAIN PASSAGE
      if (p.type == "A" || p.type == "B") {
        displayProblem.innerHTML = `
          Town M is exactly in between Town A and Town B.</br>
          ${personA} set off from Town A towards Town B at ${p.speedA} km/h and vice versa for ${personB} from Town B at ${p.speedB} km/h.</br>
          ${middleClue}</br>
          `;
      }
      if (p.type == "C") {
        displayProblem.innerHTML = `
          ${personA} and ${personB} set off from Town A towards Town B at ${p.speedA} km/h and ${p.speedB} km/h.</br>
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
    if (p.setting == 9) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      displayProblem.innerHTML = `
        The distance between Town A and Town B is ${distance} km.</br>
        ${personA} and ${personB} left Town A to Town B at the same time.</br>
        After ${personA} reached Town B, ${personB} took another ${diffTime} mins to travel the remaining ${diffDistance} km.</br>
        What is ${p.question == "A" ? personA : personB}'s speed?
        `;
    }

    // PIECHART
    if (p.setting == 10) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        } else {
          skipGlobalUpdateProblem = 0;
          console.log("TOO MANY RESETS!");
          updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
        }
      }
    }

    // BOTTOM OF CALSIX
  }
  // DISPLAY
  if (level == "calSixb") {
    normalDisplay();
    calculatorSymbol.classList.remove("hidden");

    //SPEED: MEET UP
    if (p.setting == 1) {
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
    if (p.setting == 2) {
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
    if (p.setting == 3) {
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
    if (p.setting == 4) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      p.answer = transfer;
      let questionSentence = undefined;
      const transferText = volumeAFirst > volumeBFirst ? `A to B` : `B to A`;
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
    if (p.setting == 5) {
      const volumeAFirst = p.lengthA * p.breadthA * p.waterLevelA;
      const volumeBFirst = p.lengthB * p.breadthB * p.waterLevelB;
      const heightAPerMin = (p.tapA * 1000) / (p.lengthA * p.breadthA);
      const heightBPerMin = (p.tapB * 1000) / (p.lengthB * p.breadthB);
      if (heightAPerMin == heightBPerMin) {
        console.log("Same rate, nothing happens");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (
        (heightAPerMin < heightBPerMin && p.waterLevelA < p.waterLevelB) ||
        (heightBPerMin < heightAPerMin && p.waterLevelB < p.waterLevelA)
      ) {
        console.log("Impossible question");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 6) {
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
    if (p.setting == 7) {
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
    normalDisplay();
    if (p.setting == 1) {
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

    if (p.setting == 2) {
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

    if (p.setting == 3) {
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
            `He has $${p.numTwo} left after spending some money.</br>How much did he have spend?`
          );
        }
      }
    }

    if (p.setting == 4) {
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
            The total for ${p.objectOne} and ${p.objectTwo} is ${
          p.numTotal
        }.</br>
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

    if (p.setting == 5) {
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
  }
  // HEUTWO DISPLAY
  if (level == "heuTwo") {
    console.log(`The setting is ${setting}`);
    normalDisplay();
    if (p.setting == 1) {
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
    if (p.setting == 2) {
      p.numOne = p.numTwo + (genNumbers(3) + 2) * 2;

      displayProblem.innerHTML = `
        ${p.objectOne} has ${p.numOne} sweets.</br>
        ${p.objectTwo} has ${p.numTwo} sweets.</br>
        How many sweets must ${p.objectOne} transfer to ${p.objectTwo} for them to be the same?
        `;
    }

    if (p.setting == 3) {
      displayProblem.innerHTML = `
        ${p.objectOne} must give ${p.difference} to ${p.objectTwo} to be the same.</br>
        What is their difference at first?
        `;
    }
    //  WORKING DISPLAY HEUTWO
    if (p.setting == 4) {
      if (p.version == 1) {
        let things = ["people", "objects"][genNumbers(2)];
        displayProblem.innerHTML = `
        ${p.objectOne} is in the ${p.positionOne} position.</p>
        ${p.objectTwo} is in the ${p.positionTwo} position.</p>
        How many ${things} are there between ${p.objectOne} and ${p.objectTwo}?`;
      }
      if (p.version == 2) {
        if (p.positionOne == "5th" && p.positionTwo == "6th")
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    normalDisplay();
    if (p.setting == 1) {
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

    if (p.setting == 2) {
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

    if (p.setting == 3) {
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
            `He has $${p.numTwo} left after spending some money.</br>How much did he have spend?`
          );
        }
      }
    }

    if (p.setting == 4) {
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
            The total for ${p.objectOne} and ${p.objectTwo} is ${
          p.numTotal
        }.</br>
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

    if (p.setting == 5) {
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
    if (p.setting == 6) {
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
    if (p.setting == 7) {
      normalDisplay();
      const person = boyNames[genNumbers(boyNames.length)];
      const total = p.eachUnit * p.units + p.situation;
      if (p.type == 0) {
        displayProblem.innerHTML = `
          ${person} had $${total} at first.</br>
          He spent $${p.situation} and shared the remaining amount with ${p.units} of his children.</br>
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

    // COMPARISON ( SITUATIONAL)
    if (p.setting == 8) {
      normalDisplay();
      const valueA = p.oneUnit * p.unitA;
      const valueB = p.oneUnit * p.unitB;
      while (
        (p.situationA < 0 && Math.abs(p.situationA) > valueA) ||
        p.situationA == 0
      ) {
        p.situationA = -genNumbers(5) + 1;
      }
      while (
        (p.situationB < 0 && Math.abs(p.situationB) > valueB) ||
        p.situationB == 0
      ) {
        p.situationB = -genNumbers(25) + 1;
      }
      const valueAEnd = valueA + p.situationA;
      const valueBEnd = valueB + p.situationB;
      const diffEnd = valueAEnd - valueBEnd;
      if (valueA == 0 || valueB == 0 || valueAEnd == 0 || valueBEnd == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (p.type == "unit") {
        displayProblem.innerHTML = `
          A is ${p.unitA} times of B.</br>
          A ${p.situationA < 0 ? "gave away" : "received"} ${Math.abs(
          p.situationA
        )}.</br>
          B ${p.situationB < 0 ? "gave away" : "received"} ${Math.abs(
          p.situationB
        )}.</br>
          A is ${Math.abs(diffEnd)} ${
          diffEnd < 0 ? `less than` : `more than`
        } B in the end.</br>
          What is the value of ${p.choice} at first?
          `;
      }
      if (p.type == "diff") {
        let start = genNumbers(2);
        if (start == 0) start = `A is ${valueA} and B is ${valueB} at first.`;
        const diffStart = valueA - valueB;
        if (start == 1)
          start = `A is ${Math.abs(diffStart)} ${
            diffStart < 0 ? "less than" : `more than`
          } B at first.`;
        displayProblem.innerHTML = `
          ${start}</br>
          A ${p.situationA < 0 ? "gave away" : "received"} ${Math.abs(
          p.situationA
        )}.</br>
          B ${p.situationB < 0 ? "gave away" : "received"} ${Math.abs(
          p.situationB
        )}.</br>
          `;

        if (diffEnd < 0) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `
            How much less is A than B in the end?
            `
          );
        }
        if (diffEnd > 0) {
          displayProblem.insertAdjacentHTML(
            "beforeend",
            `
            How much more is A than B in the end?
            `
          );
        }
      }
    }
  }
  // display
  if (level == "heuThree") {
    normalDisplay();
    console.log(setting);
    if (p.setting == 1) {
      while (p.numOne == p.numTwo) {
        p.numOne = (genNumbers(5) + 1) * 2;
        p.numTwo = (genNumbers(5) + 1) * 2;
      }
      displayProblem.innerHTML = `
        ${p.objectOne} and ${p.objectTwo} has ${
        p.numOne + p.numTwo
      } sweets.</br>
        ${p.objectOne} has ${Math.abs(p.numOne - p.numTwo)} ${
        p.numOne > p.numTwo ? "more" : "less"
      } sweets than ${p.objectTwo}.</br>
        How many sweets does ${
          p.rollAnswer == 0 ? `${p.objectOne}` : `${p.objectTwo}`
        } have?
        `;
    }
    if (p.setting == 2) {
      if (p.numOne + p.numThree < 4) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 3) {
      p.totalValue =
        (p.objectOneX * p.unitSentence + p.objectTwoX) * p.multipler;
      const order = ["A", "B"][genNumbers(2)];
      if (order == "A") {
        displayProblem.innerHTML = `
            ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
            If ${p.objectOneX} ${p.objectOne} and ${p.objectTwoX} ${
          p.objectTwo
        } is ${p.totalValue}.</br>
            What is the value of ${p.rollQn == "A" ? p.objectOne : p.objectTwo}?
          `;
      } else {
        displayProblem.innerHTML = `
            If ${p.objectOneX} ${p.objectOne} and ${p.objectTwoX} ${
          p.objectTwo
        } is ${p.totalValue}.</br>
        ${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</br>
            What is the value of ${p.rollQn == "A" ? p.objectOne : p.objectTwo}?
          `;
      }
    }

    if (p.setting == 4) {
      while (p.objectOneV == p.objectTwoV) {
        p.objectTwoV = genNumbers(5) + 1;
      }
      console.log(p.objectOneV, p.objectTwoV, p.objectOneQ, p.objectTwoQ);
      p.totalValue = p.objectOneQ * p.objectOneV + p.objectTwoQ * p.objectTwoV;
      p.difference = Math.abs(p.objectOneV - p.objectTwoV);
      const order = ["A", "B"][genNumbers(2)];
      if (order == "A") {
        displayProblem.innerHTML = `
          If ${p.objectOneQ} ${p.objectOne} and ${p.objectTwoQ} ${
          p.objectTwo
        } is ${p.totalValue}.</br>
          ${p.objectOne} is ${p.difference} ${
          p.objectOneV > p.objectTwoV ? "more" : "less"
        } than ${p.objectTwo}.</br>
          What is ${p.rollQn == "A" ? p.objectOne : p.objectTwo}?
          `;
      } else {
        displayProblem.innerHTML = `
          ${p.objectOne} is ${p.difference} ${
          p.objectOneV > p.objectTwoV ? "more" : "less"
        } than ${p.objectTwo}.</br>
          If ${p.objectOneQ} ${p.objectOne} and ${p.objectTwoQ} ${
          p.objectTwo
        } is ${p.totalValue}.</br>
          What is ${p.rollQn == "A" ? p.objectOne : p.objectTwo}?
          `;
      }
    }

    if (p.setting == 5) {
      while (p.objectOneV == p.objectTwoV) {
        p.objectOneV = genNumbers(3) + 2;
      }
      p.total = (genNumbers(8) + 2) * (p.objectOneV + p.objectTwoV);
      if (p.rollQn2 != "total") {
        const order = ["A", "B"][genNumbers(2)];
        if (order == "A") {
          displayProblem.innerHTML = `
            Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
            Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
            There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
            `;
        } else {
          displayProblem.innerHTML = `
            There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
            Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
            Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
            `;
        }
        displayProblem.insertAdjacentHTML(
          "beforeend",
          `The total for both is ${p.total} ${p.unitMeasurement}.</br>
          ${
            p.rollQn2 == "many"
              ? `How many ${
                  p.rollQn == "A" ? p.objectOne : p.objectTwo
                }s are there?`
              : `What is the total for ${
                  p.rollQn == "A" ? p.objectOne : p.objectTwo
                }? `
          }`
        );
      } else {
        displayProblem.innerHTML = ``;
        let stuff = [
          `Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
          Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>`,
          ` There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>`,
          `The total for both is ${p.total} ${p.unitMeasurement}.</br>`,
        ];
        console.log("Part 1");
        while (stuff.length != 0) {
          console.log("Part 2");
          const sentence = stuff[genNumbers(stuff.length)];
          const index = stuff.indexOf(sentence);
          stuff.splice(index, 1);

          displayProblem.insertAdjacentHTML("beforeend", sentence);
        }
        displayProblem.insertAdjacentHTML(
          "beforeend",
          ` How many ${p.objectOne}s and ${p.objectTwo}s are there in total?`
        );
        // if (order == "A") {
        //   displayProblem.innerHTML = `
        //   Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        //   Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        //   There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
        //   The total for both is ${p.total} ${p.unitMeasurement}.</br>
        //   How many ${p.objectOne}s and ${p.objectTwo}s are there in total?
        //   `;
        // } else if (order == "B") {
        //   displayProblem.innerHTML = `
        //   There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
        //   The total for both is ${p.total} ${p.unitMeasurement}.</br>
        //   Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        //   Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        //   How many ${p.objectOne}s and ${p.objectTwo}s are there in total?
        //   `;
        // } else {
        //   displayProblem.innerHTML = `
        //   The total for both is ${p.total} ${p.unitMeasurement}.</br>
        //   There is an equal number of ${p.objectOne} and ${p.objectTwo}.</br>
        //   Object ${p.objectOne} is ${p.objectOneV} ${p.unitMeasurement}.</br>
        //   Object ${p.objectTwo} is ${p.objectTwoV} ${p.unitMeasurement}.</br>
        //   How many ${p.objectOne}s and ${p.objectTwo}s are there in total?
        //   `;
        // }
      }
    }

    if (p.setting == 6) {
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

    if (p.setting == 7) {
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

    if (p.setting == 8) {
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
    if (p.setting == 1) {
      // 1. FIRST SENTENCE
      let diffAB = "more";
      let diffValueAB = Math.abs(p.valueA - p.valueB);
      if (diffValueAB == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
      if (diffValueBC == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        if (totalUnit > 10)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        total = totalUnit * p.oneUnit;
      }
      if (p.compA == "comp" && p.compB == "unit") {
        p.valueC = p.valueB / p.unitB;
        if (p.valueC % 1 != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        //REVAMP LINEONE
        diffValueAB = Math.abs(p.valueA - p.valueB);
        if (diffValueAB == 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        if (p.valueB % 1 != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        //REVAMP LINETWO
        diffValueBC = Math.abs(p.valueB - p.valueC);
        if (diffValueBC == 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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

    if (p.setting == 2) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }

      let valueOfOneUnit = undefined;

      if (p.situationOne > 0 && p.situationTwo > 0) {
        valueOfOneUnit =
          (p.situationOne - p.situationTwo) / (p.unitSentence - 1);
        while (
          (p.situationOne - p.situationTwo) % (p.unitSentence - 1) != 0 ||
          valueOfOneUnit <= p.situationTwo ||
          p.situationTwo >= p.situationOne
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
        while (
          (p.situationTwo - p.situationOne) % (p.unitSentence - 1) != 0 ||
          Math.abs(p.situationOne) >= Math.abs(p.situationTwo)
        ) {
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
    if (p.setting == 3) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      } else {
        const diff = -p.situationOne + p.situationTwo;
        const oneUnit = diff / (p.unitSentence - 1);
        if (oneUnit * p.unitSentence < -p.situationOne) {
          console.log("Impossible, value of 1 unit is too small");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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

    if (p.setting == 4) {
      let oneUnit = (p.startTwo = genNumbers(100) + 1);
      p.startOne = p.unitSentence * oneUnit;

      p.situationOne = p.situationOne * genNumbers(p.startOne);
      p.situationTwo = p.situationTwo * genNumbers(p.startTwo);

      if (p.situationOne == 0 || p.situationTwo == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 5) {
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
          if (lastNum < 0)
            return updateCalc(
              level,
              state,
              setting,
              regen,
              skipGlobalUpdateProblem
            );
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
          if (lastNum % p.sitDivide != 0)
            return updateCalc(
              level,
              state,
              setting,
              regen,
              skipGlobalUpdateProblem
            );
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
    if (p.setting == 1) {
      while (p.objectOneQ == p.objectTwoQ || p.objectOneQ > p.objectTwoQ) {
        p.objectTwoQ = genNumbers(4) + 2;
        p.objectOneQ = genNumbers(4) + 2;
      }

      p.objectOneS = p.totalValue - p.objectOneQ * p.price;
      p.objectTwoS = p.totalValue - p.objectTwoQ * p.price;
      if (p.objectOneS == 0 || p.objectTwoS == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );

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
          Both person ${p.objectOne} and ${
          p.objectTwo
        } has the same amount.</br>
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

    if (p.setting == 2) {
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }

      displayProblem.innerHTML = `
          If ${
            p.sceneOne
          } sweets were given to each pupils, there would be <u>${
        p.situationOneW
      }</u> of ${Math.abs(p.situationOne)} sweets.</br>
          If ${
            p.sceneTwo
          } sweets were given to each pupils, there would be <u>${
        p.situationTwoW
      }</u> of ${Math.abs(p.situationTwo)} sweets.</br>
          ${
            p.rollAnswer == 1
              ? "How many pupils are there?"
              : "How many sweets are there?"
          }
        `;
    }

    if (p.setting == 3) {
      p.absentPeople = genNumbers(p.peopleAtFirst - 2) + 1;
      p.giveUp = (genNumbers(4) + 1) * p.absentPeople;
      p.remainingPeople = p.peopleAtFirst - p.absentPeople;
      displayProblem.innerHTML = `
        There were ${p.peopleAtFirst} workers at first.</br>
        ${p.absentPeople} did not turn up for work. </br>
        Each of the remaining workers have to do additional ${
          p.giveUp
        } work.</br>
        ${
          p.rollQn == "A"
            ? "How many did each worker originally needed to do?"
            : "What was the total amount of work needed to be done?"
        }
        `;
    }

    if (p.setting == 4) {
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

    if (p.setting == 5) {
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

    if (p.setting == 6) {
      displayProblem.innerHTML = `
          There is at least ${p.objectTwoQ} ${p.objectTwo}s between any ${
        p.objectOne
      }.</br>
          There is a total of ${p.total} ${p.objectTwo}s and ${
        p.objectOne
      }s.</br>
          How many ${p.rollQn == "A" ? p.objectOne : p.objectTwo}s are there?
        `;
    }

    if (p.setting == 7) {
      while (p.groupOne == p.groupTwo) {
        p.groupOne = genNumbers(8) + 2;
      }
      if (p.groupTwo < p.groupOne) {
        swap(p.groupOne, p.groupTwo);
      }

      p.leftOne = p.total % p.groupOne;
      p.leftTwo = p.total % p.groupTwo;

      if (p.leftOne == 0 && p.leftTwo == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
      //     return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem)
      //   }
      // }

      // const maxLength = p.arrFirstNum.length >= p.arrSecondNum.length ? p.arrFirstNum.length : p.arrSecondNum.length
      for (let i = 0; i < p.arrFirstNum.length; i++) {
        if (
          p.arrSecondNum.includes(p.arrFirstNum[i]) &&
          p.arrFirstNum[i] != p.total
        ) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      }

      for (let i = 0; i < p.arrSecondNum.length; i++) {
        if (
          p.arrFirstNum.includes(p.arrSecondNum[i]) &&
          p.arrSecondNum[i] != p.total
        ) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 1) {
      [p.numOne, p.numTwo] = simplify(p.numOne, p.numTwo);
      if (p.numOne == 1 || p.numTwo == 1)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (p.personOne == p.personTwo || p.numOne == p.numTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (p.version == 0) {
        displayProblem.innerHTML = `
        ${p.personOne} set ${
          p.arrGender[p.firstPosition]
        } alarm to ring every ${p.numOne} mins.</p>
        ${p.personTwo} set ${
          p.arrGender[p.secondPosition]
        } alarm to ring every ${p.numTwo} mins.</p>
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
          Which is the ${p.times} participant to receive both?</br>
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
    if (p.setting == 2) {
      if (primeNumbers.includes(p.numOne) || primeNumbers.includes(p.numTwo)) {
        console.log(p.numOne, p.numTwo);
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (p.numOne == p.numTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
      if (thingsOne == thingsTwo)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (commonFactors(p.numOne, p.numTwo).length <= 2)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 3) {
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
        if (p.numA <= 0 || p.numB <= 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );

        const difference = p.numA - p.numB;
        const diffUnit = p.unitA - p.unitB;
        if (difference % diffUnit != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
        if (oneUnit % 1 != 0) {
          console.log("1 unit isnt whole number");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          // if (ageDiff > 0) return updateCalc(level,state,setting,regen, skipGlobalUpdateProblem);
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
    if (p.setting == 4) {
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
    if (p.setting == 5) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      let firstScene = p.sceneAOne * p.unitA + p.sceneBOne * p.unitB;
      let secondScene = p.sceneATwo * p.unitA + p.sceneBTwo * p.unitB;
      if (p.type == "A") {
        if (
          (p.sceneAOne == p.sceneATwo && p.sceneBOne == p.sceneBTwo) ||
          firstScene == secondScene ||
          (p.sceneAOne == p.sceneBOne && p.sceneATwo == p.sceneBTwo)
        ) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }

        displayProblem.innerHTML = `
          ${p.sceneAOne}/${totalAOne} girls and ${p.sceneBOne}/${totalBOne} boys is ${firstScene}.</p>
          ${p.sceneATwo}/${totalATwo} girls and ${p.sceneBTwo}/${totalBTwo} boys is ${secondScene}.</p>
          `;
        p.varA = totalAOne;
        p.varB = totalBOne;
      }
      if (p.type == "B") {
        if (
          (totalATwo == totalBTwo && totalATwo == 2) ||
          p.sceneATwo == p.sceneBTwo
        ) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (
        totalAOne == totalATwo &&
        totalAOne == totalBOne &&
        totalAOne == totalBTwo
      ) {
        console.log("Same numbers");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 6) {
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

    if (p.setting == 7) {
      if (p.denoA == p.denoB) {
        p.denoB -= 1;
      }
      let statement;
      let diff = p.valueA - p.valueB;
      let total = p.valueA * p.denoA + p.valueB * p.denoB;
      if (p.valueA > p.valueB) statement = "more";
      if (p.valueB > p.valueA) statement = "less";
      if (p.type == "before") {
        displayProblem.innerHTML = `
          1/${p.denoA} of A is ${Math.abs(diff)} ${statement} than 1/${
          p.denoB
        } of B.</br>
          Their total is ${total}.</br>
          What is the value of ${p.question}?
          `;
      }
      if (p.type == "after") {
        displayProblem.innerHTML = `
          ${p.denoA - 1}/${p.denoA} of A and ${p.denoB - 1}/${
          p.denoB
        } of B were ${genNumbers(2) == 0 ? "removed" : "sold"}.</br>
          A is ${Math.abs(diff)} ${statement} than B in the end.</br>
          Their total was ${total} at first.</br>
          What is the value of ${p.question} at first?
          `;
      }
    }
  }
  // Display
  if (level == "heuFive") {
    calculatorSymbol.classList.remove("hidden");
    if (p.setting == 1) {
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
        updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
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

    if (p.setting == 2) {
      normalDisplay();
      p.rightQ = genNumbers(p.questions) + 1;
      p.total = p.marks * p.rightQ - p.deduct * (p.questions - p.rightQ);
      p.allRight = p.questions * p.marks;
      p.bDifference = p.allRight - p.total;
      if (p.bDifference <= 0 || p.total <= 0) {
        updateCalc(level, state, setting, regen, skipGlobalUpdateProblem);
        return console.log("Question changed!");
      }
      p.sDifference = p.marks + p.deduct;
      p.wrong = p.bDifference / p.sDifference;
      p.correct = p.questions - p.wrong;
      // if (p.wrong % 1 != 0 || p.wrong < 0){
      //   updateCalc(level,state,setting,regen, skipGlobalUpdateProblem)
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

    if (p.setting == 3) {
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
        console.log("Question change");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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

    if (p.setting == 4) {
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

    if (p.setting == 5) {
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

    if (p.setting == 6) {
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

    if (p.setting == 7) {
      normalDisplay();
      if (p.version == 1) {
        if (p.bonus > p.set) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }

        p.groups = p.groups[p.dice];
        p.groups2 = p.groups2[p.dice];
        p.oneGroup = p.set + p.bonus;
        p.oneGroupCost = p.set * p.cost;
        p.quotient = Math.floor(p.totalItems / p.oneGroup);
        p.remainder = p.totalItems % p.oneGroup;

        if (p.remainder == 0 || p.remainder * p.cost >= p.oneGroupCost) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 8) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 1) {
      normalDisplay();
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      [p.numeThree, p.denoThree] = simplify(p.numeThree, p.denoThree);
      if (
        p.situationThree == "+" &&
        p.situationTwo == "+" &&
        p.situationOne == "+"
      ) {
        if (p.numLast < p.numThree)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const third = p.numLast + p.numThree;
        if (third % (p.denoThree - p.numeThree) != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const second =
          (third / (p.denoThree - p.numeThree)) * p.denoThree + p.numTwo;
        if (second % (p.denoTwo - p.numeTwo) != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const first = (second / (p.denoTwo - p.numeTwo)) * p.denoTwo + p.numOne;
        if (first % (p.denoOne - p.numeOne) != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        p.answer = (first / (p.denoOne - p.numeOne)) * p.denoOne;
        console.log(third, second, first, p.answer);
      }
      if (
        p.situationThree == "-" &&
        p.situationTwo == "-" &&
        p.situationOne == "-"
      ) {
        if (p.numLast < p.numThree)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const third = p.numLast - p.numThree;
        if (third % (p.denoThree - p.numeThree) != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const second =
          (third / (p.denoThree - p.numeThree)) * p.denoThree - p.numTwo;
        if (second % (p.denoTwo - p.numeTwo) != 0 || second <= 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        const first = (second / (p.denoTwo - p.numeTwo)) * p.denoTwo - p.numOne;
        if (first % (p.denoOne - p.numeOne) != 0 || third <= 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        p.answer = (first / (p.denoOne - p.numeOne)) * p.denoOne;
        if (p.answer < 0) {
          console.log("Negative numbers");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 2) {
      // A gives to B, B to C, C to A
      [p.numeOne, p.denoOne] = simplify(p.numeOne, p.denoOne);
      [p.numeTwo, p.denoTwo] = simplify(p.numeTwo, p.denoTwo);
      [p.numeThree, p.denoThree] = simplify(p.numeThree, p.denoThree);
      const each = p.total / 3;
      const two_C = (each / (p.denoThree - p.numeThree)) * p.denoThree; // C
      const two_diff = two_C - each;
      const two_A = each - two_diff; //Take back from A
      const two_B = each;
      if (two_A <= 0 || two_B <= 0 || two_C <= 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (two_A % 1 != 0 || two_B % 1 != 0 || two_C % 1 != 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );

      const three_B = (two_B / (p.denoTwo - p.numeTwo)) * p.denoTwo;
      const three_diff = three_B - two_B;
      const three_C = two_C - three_diff;
      const three_A = two_A;
      if (three_A <= 0 || three_B <= 0 || three_C <= 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (three_A % 1 != 0 || three_B % 1 != 0 || three_C % 1 != 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      const four_A = (three_A / (p.denoOne - p.numeOne)) * p.denoOne;
      const four_diff = four_A - three_A;
      const four_B = three_B - four_diff;
      const four_C = three_C;
      if (four_A <= 0 || four_B <= 0 || four_C <= 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      if (four_A % 1 != 0 || four_B % 1 != 0 || four_C % 1 != 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      p.answer = four_A;
      if (p.answer < 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 3) {
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
    if (p.setting == 4) {
      if (p.quanB < p.quanA) {
        [p.quanA, p.quanB] = [p.quanB, p.quanA];
      }
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
          A shelf can hold either ${first} ${p.varA} or ${p.second} ${
          p.varB
        }.</p>
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
    if (p.setting == 5) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const transB = genNumbers(p.valueB - 10) + 10;
      let [unitAEnd, unitBEnd] = simplify(p.valueA + transB, p.valueB - transB);
      // [unitAEnd, unitBEnd] = simplify(unitAEnd, unitBEnd);
      if (unitAEnd > 20 || unitBEnd > 20) {
        console.log("Units too big!");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (transA == transB) {
        console.log("Same transfer value");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (commonNumbers > 100) {
        console.log("2) Units too big!");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      displayProblem.innerHTML = `
          A and B have some ${object}.</p>
        If A gave ${transA} ${object} to B, the ratio of A to B is ${unitAFirst} : ${unitBFirst}.</p>
        If B gave ${transB} ${object} to A, the ratio of A to B is ${unitAEnd} : ${unitBEnd}.</p>
        What is the value of ${p.question == "A" ? "A" : "B"}?</p>
        `;
    }
    if (p.setting == 6) {
      // Quantity is the number of students
      let object = ["sweet", "chocolate", "pen", "pencil"];
      object = object[genNumbers(object.length)];
      if (p.valueA == p.valueB) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      if (p.valueA > p.valueB) {
        [p.valueA, p.valueB] = [p.valueB, p.valueA];
      }
      p.totalQuantity = p.quantityA + p.quantityB;
      p.totalValue = p.valueA * p.quantityA + p.valueB * p.quantityB;
      if (p.totalQuantity == p.totalValue)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      [p.totalQuantity, p.totalValue] = simplify(p.totalQuantity, p.totalValue);

      let sentenceA = ["ratio", "fraction"][genNumbers(2)];
      if (sentenceA == "fraction") {
        sentenceA = `The fraction of the number of students to ${object}s is ${p.totalQuantity}/${p.totalValue}`;
      } else {
        sentenceA = `The ratio of the number of students to ${object}s is ${p.totalQuantity} : ${p.totalValue}`;
      }
      const theOther = p.totalQuantity * p.valueB;
      const bigDiff = p.totalValue - theOther;
      const smallDiff = p.valueB - p.valueA;
      if (bigDiff / smallDiff < 0) {
        console.log("Too Small");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      displayProblem.innerHTML = `
        ${sentenceA}.</br>
        Each student receives either ${p.valueA} or ${p.valueB} ${object}s.</br>
        What fraction of the total number of students received ${p.valueA} ${object}?
        `;
    }

    if (p.setting == 7) {
      if (p.situationA == 0 || p.situationB == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }

      [p.firstUnitA, p.firstUnitB] = simplify(p.firstUnitA, p.firstUnitB);
      [p.secondUnitA, p.secondUnitB] = simplify(p.secondUnitA, p.secondUnitB);
      const common = commonDeno(p.firstUnitA, p.secondUnitA);
      p.newUnitA = [p.firstUnitA, p.firstUnitB].map((list) => {
        return (list * common) / p.firstUnitA;
      });
      p.newUnitB = [p.secondUnitA, p.secondUnitB].map((list) => {
        return (list * common) / p.secondUnitA;
      });
      p.newUnitA.concat(p.newUnitB).forEach((x) => {
        if (x > 50) {
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
        }
      });
      const changeInUnits = p.newUnitB[1] - p.newUnitA[1];
      if (changeInUnits == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      p.secondSituation = p.oneUnit * changeInUnits;
      if (p.oneUnit * p.newUnitA[0] - p.firstSituation <= 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      console.log(p.newUnitA, p.newUnitB);
      displayProblem.innerHTML = `
        A ${p.firstSituation < 0 ? "gave away" : "received"} ${Math.abs(
        p.firstSituation
      )} and their ratio became ${p.firstUnitA} : ${p.firstUnitB}.</br>
        B then ${p.secondSituation < 0 ? "gave away" : "received"} ${Math.abs(
        p.secondSituation
      )} and their ratio became ${p.secondUnitA} : ${p.secondUnitB}.</br>
        What is the value of A at first?
  
        `;
    }
  }

  // DISPLAY
  if (level == "heuSix") {
    calculatorSymbol.classList.remove("hidden");
    normalDisplay();
    // LOWEST COMMON TIME
    if (p.setting == 1) {
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
    if (p.setting == 2) {
      //CHECK
      if ((p.duration / p.people) % 1 != 0) {
        console.log("Not whole");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const timeZone = genNumbers(2) == 0 ? "a.m" : "p.m";
      const hoursDuration = Math.floor(p.duration / 60);
      const minsDuration = p.duration % 60;
      let endHours = p.startHour + hoursDuration;
      let endMins = p.startMins + minsDuration;

      if (endMins >= 60) {
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
        There are ${p.people} people playing a game from ${
          p.startHour
        }.${p.startMins
          .toString()
          .padStart(2, "0")}${timeZone} to ${endHours}.${endMins
          .toString()
          .padStart(2, "0")}${timeZone}.</p>
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
    if (p.setting == 3) {
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      if (p.numeA == p.numeB && p.denoA == p.denoB) {
        console.log("Same numerator and denominator");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const onlyB = p.denoA - p.numeA;
      displayProblem.innerHTML = `
    Students have 2 activities to choose from.</p>
    ${p.actA.charAt(0).toUpperCase() + p.actA.slice(1)} and ${p.actB}.</p>
    ${p.numeA}/${p.denoA} of the students chose ${p.actA}.</p>
    ${p.numeB}/${p.denoB} of the students chose ${p.actB}.</p>
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
          `What fraction of the students choose both activities?`
        );
    }

    //SNAKE AND LADDER
    if (p.setting == 4) {
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
    if (p.setting == 5) {
      normalDisplay();
      const boy = boyNames[genNumbers(boyNames.length)];
      if (p.walkFirstSet == p.walkSecondSet) {
        console.log("Same steps");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 6) {
      normalDisplay();
      const discountedPriceA = (p.originalA * (100 - p.discount)) / 100;
      const discountedPriceB = (p.originalB * (100 - p.discount)) / 100;
      const diffEnd = Math.abs(discountedPriceA - discountedPriceB);

      const decimalPlace = diffEnd.toString().split(".")[1];
      if (decimalPlace) {
        if (decimalPlace.length > 2) {
          console.log("Decimal place");
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
    if (p.setting == 1) {
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      let valueAEnd = valueAFirst + p.situationA;
      let valueBEnd = valueBFirst + p.situationB;
      let partsA = valueAEnd;
      let partsB = valueBEnd;
      [partsA, partsB] = simplify(partsA, partsB);

      // if (partsA > 15 || partsB > 15 || partsA <= 0 || partsB <= 0) {
      if (
        partsA > 15 ||
        partsB > 15 ||
        (p.unitsA == partsA && p.unitsB == partsB)
      ) {
        console.log("Oops");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      console.log(partsA, partsB);
      displayProblem.innerHTML = `
        The ratio of ${personA} to ${personB} at first is ${p.unitsA} : ${
        p.unitsB
      }.</br>
        ${personA} ${
        p.situationA < 0 ? `spent` : "received another"
      } $${Math.abs(p.situationA)}.</br> 
        ${personB} ${
        p.situationB < 0 ? `spent` : "received another"
      } $${Math.abs(p.situationB)}.</br>
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
    if (p.setting == 2) {
      if (p.personASmallSheets == p.personBSmallSheets) {
        console.log("Same number of sheets");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 3) {
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);
      if (p.denoA == p.denoB) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const commonDenominator = commonDeno(p.denoA, p.denoB);
      p.varA = commonDenominator * p.unitOne * p.varAMul;
      p.varB = commonDenominator * p.unitOne * p.varBMul;
      if (p.varA == p.varB) {
        console.log("Same value");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const difference = Math.abs(p.varA - p.varB);
      const comparison = p.varA > p.varB ? "more than" : "less than";
      if (p.varA > p.varB) {
        console.log("Ugly!");
        if (difference % p.denoA != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      } else {
        console.log("Ugly!");
        if (difference % p.denoB != 0)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
      const total = endA + endB;
      displayProblem.innerHTML = `
        A is ${difference} ${comparison} B.</p>
        A gave away ${unitA}.</p>
        B gave away ${unitB}.</p>
        ${
          p.backEnd == "diff"
            ? `A is ${differenceEnd} ${comparisonEnd} B in the end.`
            : `A and B is left with ${total}.`
        } </p>
       
        What is ${p.question} at first?
  
        `;
    }

    // USING IT ALL
    if (p.setting == 4) {
      if (p.unitAF == p.unitBF || p.unitAS == p.unitBS) {
        console.log("Units identical");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
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
        firstScene = `If ${personA} and ${personB} spends their money in the ratio of ${p.unitAF} : ${p.unitBF},`;
        secondScene = `If ${personA} and ${personB} spends their money in the ratio of ${p.unitAS} : ${p.unitBS},`;
      }
      if (statement == "sentence") {
        const multiplierA = genNumbers(4) + 2;
        const multiplierB = genNumbers(4) + 2;
        firstScene = `For every $${
          p.unitAF * multiplierA
        } ${personA} spends, ${personB} also spends $${
          p.unitBF * multiplierA
        },`;
        secondScene = `For every $${
          p.unitAS * multiplierB
        } ${personA} spends, ${personB} also spends $${
          p.unitBS * multiplierB
        },`;
      }

      displayProblem.innerHTML = `
        ${firstScene}
        ${chosen} would still have $${p.amountLeftFirst} left when ${theBroke} spends all ${gender} money.</p>
        ${secondScene}
        ${chosen} would still have $${p.amountLeftSecond} left when ${theBroke} spends all ${gender} money.</p>
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
    if (p.setting == 5) {
      //IDENTITIES
      const position = genNumbers(3);
      const itemA = ["pencils", "erasers", "apples"][position];
      const itemB = ["rulers", "pens", "oranges"][position];

      //UNITSENTENCE
      [p.quantityA, p.quantityB] = simplify(p.quantityA, p.quantityB);
      if (p.quantityA == p.quantityB)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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
    if (p.setting == 6) {
      if (p.priceA == p.priceB) {
        console.log("same coins");
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      const diffStatementA =
        p.quantityA > p.quantityB ? "more coins than" : "less coins than";
      const diffValueA = p.quantityA - p.quantityB;
      let valueA = accDecimal((p.quantityA * p.priceA) / 100);
      if (p.situation == 1) {
        valueA = accDecimal(
          ((p.quantityA - p.situationQuantity) * p.priceA) / 100
        );
      }
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
        }  coins.</br>
        Box B contains only ${
          p.priceB == 100 ? "$1" : `${p.priceB} cent`
        } coins.</br>
        Box A has ${Math.abs(diffValueA)} ${diffStatementA} Box B.</br>
        ${
          p.situation == 1
            ? `
            ${p.situationQuantity} coins were used from Box A.<br>`
            : ""
        }
        Box A is $${
          diffValueB % 1 == 0
            ? Math.abs(diffValueB)
            : Math.abs(diffValueB).toFixed(2)
        } ${diffStatementB} than Box B.</br>
        ${finalStatement}`;
    }
    // IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 2 SETS
    if (p.setting == 7) {
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
      if (diffValue == 0)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
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

    if (p.setting == 8) {
      p.denoA = 3;
      p.denoB = 3;
      while (p.valueA % p.denoA != 0) {
        p.denoA += 1;
        if (p.denoA > 10)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      }
      while (p.valueB % p.denoB != 0) {
        p.denoB += 1;
        if (p.denoB > 10)
          return updateCalc(
            level,
            state,
            setting,
            regen,
            skipGlobalUpdateProblem
          );
      }
      p.numeA = genNumbers(p.denoA - 1) + 1;
      p.numeB = genNumbers(p.denoB - 1) + 1;
      console.log(p.denoA, p.denoB);
      console.log(p.numeA, p.numeB);
      const valueAPartWay = (p.valueA / p.denoA) * p.numeA;
      const valueBPartWay = (p.valueB / p.denoB) * p.numeB;
      const diffA = valueAPartWay - valueBPartWay;
      if (diffA == 0) {
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      }
      [p.numeA, p.denoA] = simplify(p.numeA, p.denoA);
      [p.numeB, p.denoB] = simplify(p.numeB, p.denoB);

      const numerator = commonDeno(p.numeA, p.numeB);
      const unitA = (numerator / p.numeA) * p.denoA;
      const unitB = (numerator / p.numeB) * p.denoB;

      const factorA = findFactors(unitA);
      const factorB = findFactors(unitB);

      console.log(factorA);
      console.log(factorB);

      let sitDenoA = factorA[genNumbers(factorA.length - 1) + 1];
      let sitDenoB = factorB[genNumbers(factorB.length - 1) + 1];
      let sitNumeA = genNumbers(sitDenoA - 1) + 1;
      let sitNumeB = genNumbers(sitDenoB - 1) + 1;

      const valueAEnd = (p.valueA / sitDenoA) * (sitDenoA - sitNumeA);
      const valueBEnd = (p.valueB / sitDenoB) * (sitDenoB - sitNumeB);
      const diffB = valueAEnd - valueBEnd;
      if (diffB % 1 != 0 || diffB == 0 || diffA == diffB)
        return updateCalc(
          level,
          state,
          setting,
          regen,
          skipGlobalUpdateProblem
        );
      [sitNumeA, sitDenoA] = simplify(sitNumeA, sitDenoA);
      [sitNumeB, sitDenoB] = simplify(sitNumeB, sitDenoB);
      displayProblem.innerHTML = `
        ${displaySimpleFraction(p.numeA, p.denoA)}
          of A is ${Math.abs(diffA)} ${diffA < 0 ? "less" : "more"} than
        ${displaySimpleFraction(p.numeB, p.denoB)}
        of B.</br>
        ${displaySimpleFraction(sitNumeA, sitDenoA)}
        of A and
        ${displaySimpleFraction(sitNumeB, sitDenoB)}
        of B were removed.</br>
        A is ${Math.abs(diffB)} ${
        diffB < 0 ? "less" : "more"
      } than B in the end</br>
        What is the value of ${p.question} at first?
        `;
    }
  }
  // MULTIPLES
  //   if (mulLevel == "multiples") {
  //     displayProblem.innerHTML = `${p.numFive} ${p.operator} ${
  //       multiplesArr.length - 1
  //     }`;
  //   }

  userInput.value = "";
  userInput2.value = "";

  if (document.querySelector(".input-box").classList.contains("hidden")) {
    userInput2.focus();
  } else {
    userInput.focus();
  }
}
