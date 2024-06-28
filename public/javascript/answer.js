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
import { questionTimer, summaryPush } from "./script.js";
import { cutOffCheck } from "./cut_off.js";
import { updateProblems } from "./display.js";
import { helpList, helpMeFunc } from "./helpMe.js";

const userInput = document.getElementById("user-input");
// const userInputOptions = document.getElementById("user-input-options");
const userInput2 = document.getElementById("user-input2");
// const questionTimerD = document.getElementById("questionTimer");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const currentScore = document.getElementById("current-score");
const currentMistake = document.getElementById("current-mistake");
const reviewAnswer = document.querySelector(".fa-hire-a-helper");
const mainContainer = document.querySelector(".main-container");
const helpMe = document.querySelector(".help-me-text");
export function handleSubmit(
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
) {
  //   e.preventDefault();

  if (player == 1) {
    // if (userInput.value == "") alert("Please input a value")
    let correctAnswer;
    let correctAnswerTwo;
    let correctAnswerArr = [];
    console.log(userInput2.value);
    const p = state.currentProblem;
    console.log(`Matching ${level}`);
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
      if (p.place == "ones") correctAnswer = p.arr2[0];
      if (p.place == "tens") correctAnswer = p.arr2[1];
      if (p.place == "hundreds") correctAnswer = p.arr2[2];
      if (p.place == "thousands") correctAnswer = p.arr2[3];
      if (p.place == "ten thousands") correctAnswer = p.arr2[4];
      if (p.place == "hundred thousands") correctAnswer = p.arr2[5];
      if (p.place == "millions") correctAnswer = p.arr2[6];
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
      p.arr.sort(function (a, b) {
        return b - a;
      });
      let i = 0;
      let a = 0;
      commonMultipleArr.push(p.arr[0]);
      while (commonMultipleArr[i] % p.arr[1] != 0) {
        const something = p.arr[0] * (i + 2);
        commonMultipleArr.push(something);
        i++;
      }
      commonMultipleArrTwo.push(
        commonMultipleArr[commonMultipleArr.length - 1]
      );
      while (commonMultipleArrTwo[a] % p.arr[2] != 0) {
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
      if (p.setting == 5) {
        correctAnswer = `${p.numOne + 1}x${p.numOne}/2`;
      }
      // level 3.12
      if (p.setting == 1) {
        correctAnswer = p.numOne + 1 + "x" + p.numOne + "/2";
      }
      // level 3.13
      if (p.setting == 2) {
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
      if (p.setting == 3) {
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
      if (p.setting == 4) {
        if (p.question == "A") {
          let remainder = (p.position % p.arr.length) - 1;
          if (remainder < 0) {
            remainder = p.arr.length - 1;
          }
          console.log(remainder);
          correctAnswer = p.arr[remainder];
        }
        if (p.question == "B") {
          if (p.rollType == "A") {
            let sum = 0;
            let a = 0;
            for (let i = 0; i < p.position; i++) {
              sum += p.arr[a];
              a += 1;
              if (a == p.arr.length) a = 0;
            }
            correctAnswer = sum;
          }
          if (p.rollType == "B") {
            let count = 0;
            p.arr.forEach((item) => {
              if (item == p.alphabet) count += 1;
            });

            const remainder = p.position % p.arr.length;
            const sets = Math.floor(p.position / p.arr.length);
            let countTwo = 0;
            for (let i = 0; i < remainder; i++) {
              if (p.arr[i] == p.alphabet) countTwo += 1;
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
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

    if (level == 4.03) {
      if (p.setting == 1) {
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
        if (p.setting == 2) {
          console.log("Developing");
        }
      }
      if (p.setting == 2) {
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
      if (p.setting == 1) {
        for (let i = p.numThree; i > 1; i--) {
          if (p.numTwo % i == 0 && p.numThree % i == 0) {
            p.numTwo /= i;
            p.numThree /= i;
          }
        }
        console.log(p.numThree, p.arr[0]);
        p.numFour = p.numOne * p.numThree + p.numTwo;
        if (p.numThree != p.arr[0]) {
          correctAnswer = `${p.numOne} ${p.numTwo}/${p.numThree}=${p.numFour}/${p.numThree}`;
        } else if (p.numTwo == 1) {
          p.numFour = p.numOne * p.numThree + p.numTwo;
          correctAnswer = p.numFour + "/" + p.numThree;
        } else {
          correctAnswer = p.numFour + "/" + p.numThree;
        }
      }
      if (p.setting == 2) {
        // level 4.10
        for (let i = p.numTwo; i > 1; i--) {
          if (p.numTwo % i == 0 && p.numThree % i == 0) {
            p.numTwo /= i;
            p.numThree /= i;
          }
        }
        if (p.numThree != p.arr[1]) {
          correctAnswer = `${p.numOne} ${p.arr[0]}/${p.arr[1]}=${p.numOne} ${
            p.numTwo % p.numThree
          }/${p.numThree}`;
        } else {
          correctAnswer =
            p.numOne + " " + (p.numTwo % p.numThree) + "/" + p.numThree;
        }
      }
    }
    if (level == 4.05) {
      if (p.setting == 1 || (p.setting == 9 && p.rollChoice == 1)) {
        correctAnswer = `${p.numMulti * p.numTwo}`;
      }
      if (p.setting == 2 || (p.setting == 9 && p.rollChoice == 2)) {
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
      if (p.placeValue == "thousandths") correctAnswer = p.arr2[0];
      if (p.placeValue == "hundredths") correctAnswer = p.arr2[1];
      if (p.placeValue == "tenths") correctAnswer = p.arr2[2];
      if (p.placeValue == "ones") correctAnswer = p.arr2[3];
      if (p.placeValue == "tens") correctAnswer = p.arr2[4];
      if (p.placeValue == "hundreds") correctAnswer = p.arr2[5];
      if (p.placeValue == "thousands") correctAnswer = p.arr2[6];
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
      if (p.setting == 1) {
        correctAnswer = p.sumOfNum * 1000;
        if (p.firstUnit == "m" || p.firstUnit == "$") {
          correctAnswer = p.sumOfNum * 100;
        }
        console.log(correctAnswer);
      }
      if (p.setting == 2) {
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
          correctAnswer = p.arr2[0];
        }
        if (p.compass == "north") {
          correctAnswer = p.arr2[1];
        }
        if (p.compass == "north-east") {
          correctAnswer = p.arr2[2];
        }
        if (p.compass == "east") {
          correctAnswer = p.arr2[5];
        }
        if (p.compass == "south-east") {
          correctAnswer = p.arr2[8];
        }
        if (p.compass == "south") {
          correctAnswer = p.arr2[7];
        }
        if (p.compass == "south-west") {
          correctAnswer = p.arr2[6];
        }
        if (p.compass == "west") {
          correctAnswer = p.arr2[3];
        }
      } else {
        correctAnswer = p.arr2[4];
      }
    }

    if (level == 4.18) {
      correctAnswer = p.arr2[p.finalIndex];
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
      if (p.setting == 1 || p.setting == 2) {
        correctAnswer = `${numSquareLength}x${numSquareBreadth}=${totalSquare}`;
      }
      if (p.setting == 3) {
        correctAnswer = `${numSquareLength}x${numSquareBreadth}x${numSquareHeight}=${totalCube}`;
      }
      if (p.setting == 4) {
        correctAnswer = `${Math.floor(
          p.length / (p.dimension * 2)
        )}x${Math.floor(p.breadth / (p.dimension * 2))}=${
          Math.floor(p.length / (p.dimension * 2)) *
          Math.floor(p.breadth / (p.dimension * 2))
        }`;
      }
      //RECTANGLES
      if (p.setting == 5) {
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
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
      if (p.setting == 3) {
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
      console.log(`This is Level: ${level}`);
      console.log(`arr: ${p.arr}`);
      correctAnswer = `${p.arr[0]}/${(p.arr[0] / p.numOne) * p.numTwo}A=${
        p.arr[0]
      }/${(p.arr[0] / p.numThree) * p.numFour}B`;
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
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
      if (p.setting == 1 || p.setting == 3) {
        correctAnswer = p.numOne + p.numThree;
      }
      if (p.setting == 2 || p.setting == 4) {
        correctAnswer = p.numOne - p.numThree;
      }
      if (p.setting == 5 && p.version == "+") correctAnswer = p.numTwo;
      if (p.setting == 5 && p.version == "-") correctAnswer = p.numTwo;
      if (p.setting == 6) {
        if (p.identity == "D") correctAnswer = p.numTwo;
        if (p.identity == "C") correctAnswer = p.numOne;
      }
      if (p.setting == 7 || p.setting == 8) {
        correctAnswer = p.answer;
      }
      if (p.setting == 9) {
        correctAnswer = p.answer;
      }
    }
    if (level == "calTwo") {
      if (p.setting == 1 || p.setting == 3) {
        correctAnswer = p.numOne + p.numTwo;
      }
      if (p.setting == 2 || p.setting == 4) {
        correctAnswer = p.numOne - p.numTwo;
      }
      if (p.setting == 5) {
        correctAnswer = p.value;
      }
      if (p.setting == 6) {
        if (p.identity == "D") correctAnswer = p.numTwo;
        if (p.identity == "C") correctAnswer = p.numOne;
      }
      if (p.setting == 7 || p.setting == 8) {
        correctAnswer = p.answer;
      }
      if (p.setting == 9) {
        correctAnswer = p.answer;
      }
      if (p.setting == 10) {
        correctAnswer = p.start + p.eachInterval * p.arrow;
      }
      if (p.setting == 11) {
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
      if (p.setting == 12) {
        if (p.type == "black")
          correctAnswer = `${p.black}/${p.black + p.white}`;
        if (p.type == "white")
          correctAnswer = `${p.white}/${p.black + p.white}`;
      }
      if (p.setting == 13) {
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
      if (p.setting == 1 || p.setting == 3) {
        correctAnswer = p.numOne + p.numTwo;
      }
      if (p.setting == 2 || p.setting == 4) {
        correctAnswer = p.numOne - p.numTwo;
      }
      if (p.setting == 5) {
        correctAnswer = p.value;
      }
      if (p.setting == 6) {
        if (p.identity == "D") correctAnswer = p.numTwo;
        if (p.identity == "C") correctAnswer = p.numOne;
      }
      if (p.setting == 7 || p.setting == 8) {
        correctAnswer = p.answer;
      }
      if (p.setting == 9) {
        correctAnswer = p.numOne * p.multiple;
      }
      // OVERLAPPING PLACE VALUE
      if (p.setting == 10) {
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

      if (p.setting == 11) correctAnswer = p.multiplier;
      if (p.setting == 12) {
        if (p.question == "quotient") correctAnswer = p.multiplier;
        if (p.question == "remainder") correctAnswer = p.remainder;
        if (p.question == "both")
          correctAnswer = `${p.multiplier}r${p.remainder}`;
      }
      if (p.setting == 13) correctAnswer = p.replaced;
      if (p.setting == 14) {
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
      if (p.setting == 15) {
        correctAnswer = p.num;
      }

      // LEFT SIDE RIGHT SIDE
      if (p.setting == 16) {
        correctAnswer = p.answer;
      }

      // MULTIPLICATION AND DIVISION WHILE BREAKING UP CONVENIENT NUMBERS
      if (p.setting == 17) {
        if (p.operator == "x") {
          correctAnswer = p.numOne * p.numTwo;
        }
        if (p.operator == "÷") {
          correctAnswer = p.numTwo;
        }
      }
      if (p.setting == 18) {
        correctAnswer = p.start + p.eachInterval * p.arrow;
      }
      if (p.setting == 19) {
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
      if (p.setting == 20) {
        let answer = p.start + p.eachInterval * p.arrow;
        if (p.answerUnit == "g" || p.answerUnit == "m" || p.answerUnit == "ml")
          answer *= 1000;
        if (p.answerUnit == "cm") answer *= 100;

        correctAnswer = Math.floor(answer);
      }

      //MONEY: ADDITION SUBTRACTION AND MULTIPLICATION
      if (p.setting == 21) {
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
      if (p.setting == 22) {
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
      if (p.setting == 23) {
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
      if (p.setting == 24) {
        correctAnswer = p.answer;
      }

      // FRACTIONS: MID-POINT
      if (p.setting == 25) {
        [p.answerNume, p.answerDeno] = simplify(p.answerNume, p.answerDeno);
        correctAnswer = `${p.answerNume}/${p.answerDeno}`;
      }

      //GEOMETRY: AREA AND PERIMETER
      if (p.setting == 26) {
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
      if (p.setting == 1) {
        correctAnswer = `${p.numOne}, ${p.numOne * p.multiple}`;
      }
      if (p.setting == 2) {
        correctAnswer = arr.join(", ");
      }
      if (p.setting == 3) {
        correctAnswer = arr3.join(", ");
      }
      if (p.setting == 4) {
        correctAnswer = p.numOne * p.numTwo;
      }
      // LEFT SIDE RIGHT SIDE
      if (p.setting == 5) {
        correctAnswer = p.answer;
      }
      //MULTIPLICATION IN SETS
      if (p.setting == 6) {
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
      if (p.setting == 7) {
        correctAnswer = p.answer;
      }
      if (p.setting == 8) {
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
      if (p.setting == 9) {
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
      if (p.setting == 10) {
        [p.arrow, p.intervals] = simplify(p.arrow, p.intervals);
        correctAnswer = `${p.start} ${p.arrow}/${p.intervals}`;
      }

      // FRACTIONS: UNIT SENTENCE
      if (p.setting == 11) {
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
      if (p.setting == 12) {
        correctAnswer = Math.round(
          (p.whole + p.remainder / p.deno) / (p.nume / p.deno)
        );
      }

      // FORM FRACTION

      if (p.setting == 13) {
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
      if (p.setting == 14) {
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

      if (p.setting == 15) {
        // correctAnswer =
        //   p.numOne / p.convenientNumOne + p.numTwo / p.convenientNumTwo;
        // decimalCheck(correctAnswer);
        let answer = [
          p.numOne / p.convenientNumOne + p.numTwo / p.convenientNumTwo,
        ];
        correctAnswer = accDecimal(answer[0]);
      }
      if (p.setting == 16) {
        correctAnswer = p.numOne - p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }

      // DECIMALS: OVERLAPPING PLACE VALUE
      if (p.setting == 17) {
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

      if (p.setting == 18) {
        correctAnswer = p.numOne * p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (p.setting == 19) {
        correctAnswer = p.numOne * p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (p.setting == 20) {
        correctAnswer = p.numOne / p.numTwo;
        correctAnswer = accDecimal(correctAnswer);
      }
      if (p.setting == 21) {
        correctAnswer = (p.numOne / p.numTwo).toFixed(p.roundOff);
      }
      if (p.setting == 22) {
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

      if (p.setting == 23) {
        correctAnswer = accDecimal(p.start + p.eachInterval * p.arrow);
      }
    }

    //ANSWERS
    if (level == "calFive") {
      if (p.setting == 0) {
        correctAnswer = p.answer;
      }
      if (p.setting == 1) {
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
      if (p.setting == 2) {
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
      if (p.setting == 3) {
        let numerator =
          p.wholeOne * p.conversion +
          p.conversion * (p.numeratorOne / p.denominatorOne);

        correctAnswer = numerator;
      }
      if (p.setting == 4) {
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
      if (p.setting == 5) {
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
      if (p.setting == 6) {
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

      if (p.setting == 7) {
        // if (p.direction == "+") {
        //   correctAnswer = p.oneUnit * p.last_deno;
        // }
        correctAnswer = p.oneUnit * p.last_deno;
      }

      // AREA OF RIGHT ANGLED TRIANGLE
      if (p.setting == 8) {
        if (p.chosenHeight == "A") correctAnswer = (1 / 2) * p.base * p.height;
        if (p.chosenHeight == "B")
          correctAnswer = (1 / 2) * p.lengthAB * p.lengthSecondH;
        if (p.chosenHeight == "C")
          correctAnswer = (1 / 2) * p.lengthBC * p.lengthThirdH;
      }

      // AREA OF TRIANGLE
      if (p.setting == 9) {
        console.log(p.first, p.second, p.base, p.height);
        const onePart = (p.base * 2) / 4;
        const base = Math.abs(p.second - p.first) * onePart;
        correctAnswer = (1 / 2) * base * p.height;
      }

      //GEOMETRY: BIG - SMALL
      if (p.setting == 10) {
        const triangleA = (1 / 2) * p.pointAX * 6;
        const triangleB = (1 / 2) * (8 - p.pointAX) * p.pointBY;
        const triangleC = (1 / 2) * 8 * (6 - p.pointBY);
        const figure = 6 * 8;
        correctAnswer =
          (figure - (triangleA + triangleB + triangleC)) * p.side * p.side;
      }
      //VOLUME AND SURFACE AREA
      if (p.setting == 11) {
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
      if (p.setting == 12) {
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
      if (p.setting == 13) {
        correctAnswer = p.answer;
      }

      //RATIO: SHAPES
      if (p.setting == 14) {
        let shaded = p.shaded;
        let unshaded = p.total - shaded;
        [shaded, unshaded] = simplify(shaded, unshaded);
        if (p.secondVar == "unshaded") correctAnswer = `${shaded}:${unshaded}`;
        if (p.secondVar == "total")
          correctAnswer = `${shaded}:${shaded + unshaded}`;

        // }
      }
      // RATIO: REPEATED IDENTITY
      if (p.setting == 15) {
        calArrQns = simplestForm(calArrQns);
        correctAnswer = `${calArrQns[5]}:${calArrQns[6]}:${calArrQns[8]}`;
      }

      // RATIO: IDENTICAL TOTAL
      if (p.setting == 16) {
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
      if (p.setting == 17) {
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

      if (p.setting == 18) {
        if (p.type == "part thereof") {
          correctAnswer = Math.ceil(p.duration / p.group) * p.rates;
        }
        if (p.type == "part thereafter") {
          correctAnswer = Math.floor(p.duration / p.group) * p.rates;
        }
      }

      if (p.setting == 19) {
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
      if (p.setting == 20) {
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
      if (p.setting == 21) {
        const change = Math.abs(p.next - p.previous);
        if (p.version == "change")
          correctAnswer = `${accDecimal((change / p.previous) * 100)}%`;
        if (p.version == "percentage forward")
          correctAnswer = accDecimal((p.previous / 100) * (100 + p.change));
        if (p.version == "percentage back")
          correctAnswer = accDecimal((p.next / (100 + p.change)) * 100);
      }
      // PERCENTAGE: REPEATED IDENTITY
      if (p.setting == 22) {
        p.answer = simplestForm(p.answer);
        correctAnswer = p.answer.join(":");
      }

      // PERCENTAGE: REMAINDER CONCEPT
      if (p.setting == 23) {
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
      if (p.setting == 24) {
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

      if (p.setting == 25) correctAnswer = p.answer;

      //AVERAGE: TRIANGLE NUMBERS
      if (p.setting == 26) {
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
      if (p.setting == 1) {
        correctAnswer = p.atFirstUnits * p.oneUnit;
      }
      // FRACTIONS: REMAINDER CONCEPT: UNDER THE SAME UNIT
      if (p.setting == 2) {
        if (p.chosen == "A")
          correctAnswer = p.quantityA + Math.floor(p.extraBought);
        if (p.chosen == "B")
          correctAnswer = p.quantityB + Math.floor(p.extraBought);
      }
      //FRACTIONS: OVERLAPPING MODEL
      if (p.setting == 3) {
        if (p.question == "A") correctAnswer = p.oneUnit * p.numeA;
        if (p.question == "B")
          correctAnswer = p.oneUnit * p.numeA + p.difference;
        if (p.question == "total") correctAnswer = p.oneUnit * p.denoA;
      }

      if (p.setting == 4) {
        correctAnswer = p.answer;
      }

      // AREA OF OBTUSE TRIANGLE
      if (p.setting == 5) {
        if (p.chosenHeight == "A") correctAnswer = (1 / 2) * p.base * p.height;
        if (p.chosenHeight == "B")
          correctAnswer = (1 / 2) * p.lengthAB * p.lengthSecondH;
        if (p.chosenHeight == "C")
          correctAnswer = (1 / 2) * p.lengthBC * p.lengthThirdH;
      }
      //GEOMETRY: AREA OF FIGURE: CUTTING
      if (p.setting == 6) {
        const baseA = p.valueA - p.valueB - p.adjust;
        const triangleA = (1 / 2) * baseA * p.valueA;
        const triangleB = (1 / 2) * p.valueB * (p.valueB + p.adjust);
        correctAnswer = triangleA + triangleB;
      }
      //GEOMETRY: MANIPULATION OF DIMENSION
      if (p.setting == 7) {
        correctAnswer = (1 / 2) * p.length * p.breadth;
      }
      if (p.setting == 8) {
        // if (p.label == 1) {
        const half = (1 / 2) * p.length * p.breadth;
        if (p.givenLabel == "A") correctAnswer = half - p.areaA;
        if (p.givenLabel == "B") correctAnswer = half - p.areaB;
        if (p.givenLabel == "C") correctAnswer = half - p.areaC;
        if (p.givenLabel == "D") correctAnswer = half - p.areaD;
        // }
      }
      // AREA OF FIGURE: DOUBLE UNITS
      if (p.setting == 9) {
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
      if (p.setting == 10) {
        p.answer = simplestForm(p.answer);
        console.log(p.answer);
        // if (p.firstScene == "total" && p.secondScene == "total") {
        correctAnswer = `${p.answer[0]}:${p.answer[1]}:${p.answer[2]}`;
        // }
      }
      // RATIO: UNCHANGED OBJ
      if (p.setting == 11) {
        console.log(p.valueAFirst, p.valueBFirst, p.valueAEnd, p.valueBEnd);
        // if (p.question == "AF") correctAnswer = p.valueAFirst * p.multiplier;
        // if (p.question == "BF") correctAnswer = p.valueBFirst * p.multiplier;
        // if (p.question == "AE") correctAnswer = p.valueAEnd * p.multiplier;
        // if (p.question == "BE") correctAnswer = p.valueBEnd * p.multiplier;
        correctAnswer = p.answer;
      }
      // RATIO: UNCHANGED TOTAL
      if (p.setting == 12) {
        if (p.question == "AF") correctAnswer = p.valueAFirst * p.multiplier;
        if (p.question == "BF") correctAnswer = p.valueBFirst * p.multiplier;
        if (p.question == "AE") correctAnswer = p.valueAEnd * p.multiplier;
        if (p.question == "BE") correctAnswer = p.valueBEnd * p.multiplier;
      }
      // RATIO: UNCHANGED DIFFERENCE
      if (p.setting == 13) {
        if (p.question == "AF") correctAnswer = p.valueAFirst * p.multiplier;
        if (p.question == "BF") correctAnswer = p.valueBFirst * p.multiplier;
        if (p.question == "AE") correctAnswer = p.valueAEnd * p.multiplier;
        if (p.question == "BE") correctAnswer = p.valueBEnd * p.multiplier;
      }
      // RATIO: MANIPULATION IN UNITS
      if (p.setting == 14) {
        const commonNumber = commonDeno(p.denoA, p.denoB);
        let end_A = ((p.ratioA * (p.denoA - p.numeA)) / p.denoA) * commonNumber;
        let end_B = ((p.ratioB * (p.denoB - p.numeB)) / p.denoB) * commonNumber;
        [end_A, end_B] = simplify(end_A, end_B);
        correctAnswer = `${end_A}:${end_B}`;
      }
      // RATIO: REPEATED IDENTITY (GEOMETRY)
      if (p.setting == 15) {
        correctAnswer = p.answer;
      }
      if (p.setting == 16) {
        console.log(p.answer);
        // got to change to an array
        p.answer = p.answer.split(":");
        console.log(p.answer, typeof p.answer);
        p.answer = simplestForm(p.answer).join(":");
        correctAnswer = p.answer;
      }
      //PERCENTAGE: OVERLAPPING MODEL
      if (p.setting == 17) {
        if (p.question == "A") correctAnswer = p.oneUnit * p.numeA;
        if (p.question == "B")
          correctAnswer = p.oneUnit * p.numeA + p.difference;
        if (p.question == "total") correctAnswer = p.oneUnit * p.denoA;
      }
      // PERCENTAGE: GST, DISCOUNT AND SERVICE CHARGE
      if (p.setting == 18) {
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
      if (p.setting == 19) correctAnswer = p.salary;
      if (p.setting == 20) {
        if (p.question == "at first") {
          correctAnswer = p.oldQuantity;
        }
        if (p.question == "in the end") {
          correctAnswer = p.oldQuantity + p.changeQuantity;
        }
      }
      //AVERAGE: CONSECUTIVE DAYS
      if (p.setting == 21) {
        correctAnswer = p.dayOne + p.increase * (p.chosen - 1);
      }

      //RATIO: MANIPULATION OF UNITS WITH VALUE
      if (p.setting == 22) {
        correctAnswer = p.total;
      }

      // PATTERN: CONTINUOUS PATTERN (SETS)
      if (p.setting == 23) {
        if (p.question == "pattern") correctAnswer = p.value;
        if (p.question == "number") correctAnswer = p.pattern;
      }

      // RATIO: UNIDENTICAL GROUP

      if (p.setting == 24) {
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
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
      if (p.setting == 3) {
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
      if (p.setting == 4) {
        if (p.given == "radius") {
          correctAnswer = 2 * p.radius * p.radius;
        }
        if (p.given == "square") {
          correctAnswer = p.radius;
        }
      }
      //CIRCLES: OTHERS
      if (p.setting == 5) {
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
      if (p.setting == 6) {
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
      if (p.setting == 7) {
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
      if (p.setting == 8) {
        if (p.question == "A") correctAnswer = (p.speedA * p.time) / 60;
        if (p.question == "B") correctAnswer = (p.speedB * p.time) / 60;
        if (p.question == "total")
          correctAnswer = ((p.speedA + p.speedB) * p.time) / 60;
      }

      // SPEED: SURROGATE
      if (p.setting == 9) {
        if (p.question == "A") correctAnswer = p.speedA;
        if (p.question == "B") correctAnswer = p.speedB;
      }
      //PIE CHART
      if (p.setting == 10) {
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
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

      if (p.setting == 3) {
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
      if (p.setting == 4) {
        if (p.question == "transfer") correctAnswer = p.answer;
        if (p.question == "finalA")
          correctAnswer = p.groups * p.finalHeightUnitA;
        if (p.question == "finalB")
          correctAnswer = p.groups * p.finalHeightUnitB;
      }

      // VOLUME: CATCH UP
      if (p.setting == 5) {
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
      if (p.setting == 6) {
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

      if (p.setting == 7) {
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
      if (p.setting == 1) {
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

      if (p.setting == 2) {
        correctAnswer = p.numOne + p.numTwo;
      }

      if (p.setting == 3) {
        if (p.rollChoice == 0) {
          correctAnswer = p.numTwo;
        }
        if (p.rollChoice == 1) {
          correctAnswer = p.numOne;
        }
      }

      if (p.setting == 4) {
        correctAnswer = Math.abs(p.numOne - p.numTwo);
      }

      if (p.setting == 5) {
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
        correctAnswer = `${p.numOne}-${p.numTwo}=${p.numOne - p.numTwo}\n${
          p.numOne - p.numTwo
        }/2=${(p.numOne - p.numTwo) / 2}`;
        correctAnswerTwo = (p.numOne - p.numTwo) / 2;
      }
      if (p.setting == 3) {
        correctAnswer = `${p.difference}x2=${p.difference * 2}`;
        correctAnswerTwo = p.difference * 2;
      }
      if (p.setting == 4) {
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
        p.setting == 1 ||
        (p.setting == 9 && p.rollz == 1) ||
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
        p.setting == 2 ||
        (p.setting == 9 && p.rollz == 2) ||
        (range == 1 && p.rollz == 2)
      ) {
        correctAnswer = p.numOne + p.numTwo;
      }

      if (
        p.setting == 3 ||
        (p.setting == 9 && p.rollz == 3) ||
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
        p.setting == 4 ||
        (p.setting == 9 && p.rollz == 4) ||
        (range == 1 && p.rollz == 4)
      ) {
        correctAnswer = Math.abs(p.numOne - p.numTwo);
      }

      if (
        p.setting == 5 ||
        (p.setting == 9 && p.rollz == 5) ||
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
        p.setting == 6 ||
        (p.setting == 9 && p.rollz == 6) ||
        (range == 1 && p.rollz == 6)
      ) {
        correctAnswer = p.each * p.packets + p.left;
      }

      if (p.setting == 7) {
        if (p.type == 0 || p.type == 2) correctAnswer = p.eachUnit;
        if (p.type == 1) correctAnswer = p.units;
      }

      if (p.setting == 8) {
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
        p.setting == 1 ||
        (p.setting == 9 && p.rollz == 1) ||
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
        p.setting == 2 ||
        (p.setting == 9 && p.rollz == 2) ||
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
        p.setting == 3 ||
        (p.setting == 9 && p.rollz == 3) ||
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
        p.setting == 4 ||
        (p.setting == 9 && p.rollz == 4) ||
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
        p.setting == 5 ||
        (p.setting == 9 && p.rollz == 5) ||
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
        p.setting == 6 ||
        (p.setting == 9 && p.rollz == 6) ||
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
        p.setting == 7 ||
        (p.setting == 9 && p.rollz == 7) ||
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
        p.setting == 8 ||
        (p.setting == 9 && p.rollz == 8) ||
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
        p.setting == 1 ||
        (p.setting == 9 && p.rollz == 1) ||
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
        p.setting == 2 ||
        (p.setting == 9 && p.rollz == 2) ||
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
        p.setting == 3 ||
        (p.setting == 9 && p.roll == 3) ||
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
        p.setting == 4 ||
        (p.setting == 9 && p.rollz == 4) ||
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
        p.setting == 5 ||
        (p.setting == 9 && p.rollz == 5) ||
        (range == 1 && p.rollz == 5)
      ) {
        correctAnswer = p.num;
      }
    }
    // answer
    if (level == "heuFour") {
      if (
        p.setting == 1 ||
        (p.setting == 9 && p.rollz == 1) ||
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
        p.setting == 2 ||
        (p.setting == 9 && p.rollz == 2) ||
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
        p.setting == 3 ||
        (p.setting == 9 && p.rollz == 3) ||
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
        p.setting == 4 ||
        (p.setting == 9 && p.rollz == 4) ||
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
        p.setting == 5 ||
        (p.setting == 9 && p.rollz == 5) ||
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
        p.setting == 6 ||
        (p.setting == 9 && p.rollz == 6) ||
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
        p.setting == 7 ||
        (p.setting == 9 && p.rollz == 7) ||
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
      if (p.setting == 1) {
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
      if (p.setting == 2) {
        const commonFactorsArr = commonFactors(p.numOne, p.numTwo);
        const bags = commonFactorsArr[commonFactorsArr.length - 1];
        if (p.version == 0)
          correctAnswer = commonFactorsArr[commonFactorsArr.length - 1];
        if (p.version == 1) correctAnswer = p.numOne / bags;
        if (p.version == 2) correctAnswer = p.numTwo / bags;
        if (p.version == 3) correctAnswer = p.numOne / bags + p.numTwo / bags;
      }

      //UNCHANGED DIFFERENCE
      if (p.setting == 3) {
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
      if (p.setting == 4) {
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
      if (p.setting == 5) {
        if (p.choose == "boys") correctAnswer = p.varB * p.unitB;
        if (p.choose == "girls") correctAnswer = p.varA * p.unitA;
      }
      //INTERNAL TRANSFER: DOUBLE EFFECT
      if (p.setting == 6) {
        correctAnswer = Math.abs(p.transfer);
      }

      if (p.setting == 7) {
        if (p.question == "A") correctAnswer = p.valueA * p.denoA;
        if (p.question == "B") correctAnswer = p.valueB * p.denoB;
      }
    }
    // Answers
    if (level == "heuFive") {
      if (
        p.setting == 1 ||
        (p.setting == 9 && p.rollz == 1) ||
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
        p.setting == 2 ||
        (p.setting == 9 && p.rollz == 2) ||
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
        p.setting == 3 ||
        (p.setting == 9 && p.rollz == 3) ||
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
        p.setting == 4 ||
        (p.setting == 9 && p.rollz == 4) ||
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
        p.setting == 5 ||
        (p.setting == 9 && p.rollz == 5) ||
        (range == 1 && p.rollz == 5)
      ) {
        correctAnswer = `${p.objectOneQ}${p.objectOneC[0]}=${p.objectTwoQ}${p.objectTwoC[0]}\n${p.objectOneFQ}${p.objectOneC[0]}=${p.objectTwoAV}${p.objectTwoC[0]}\n${p.objectTwoAV}${p.objectTwoC[0]}+${p.objectTwoFQ}${p.objectTwoC[0]}=${p.objectTwoLQ}${p.objectTwoC[0]}\n${p.total}/${p.objectTwoLQ}=${p.oneUnit}`;
        correctAnswerTwo = p.oneUnit;
      }
      if (
        p.setting == 6 ||
        (p.setting == 9 && p.rollz == 6) ||
        (range == 1 && p.rollz == 6)
      ) {
        correctAnswer = `${p.people}x${p.people - 1}/2=${
          (p.people * (p.people - 1)) / 2
        }`;
        correctAnswerTwo = (p.people * (p.people - 1)) / 2;
      }
      if (
        p.setting == 7 ||
        (p.setting == 9 && p.rollz == 7) ||
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
      if (p.setting == 8) {
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
      if (p.setting == 1 || p.setting == 2) {
        correctAnswer = p.answer;
      }
      //WORKING BACKWARDS TYPE 3 (INDEPENDENT)
      if (p.setting == 3) {
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
      if (p.setting == 4) {
        // if (p.version == 0) {
        correctAnswer = Math.abs(
          p.second - ((p.third / p.quanA) * p.quanB + p.fourth)
        );
        // }
      }

      // UNCHANGED TOTAL (IF)
      if (p.setting == 5) {
        if (p.question == "A") correctAnswer = p.valueA;
        if (p.question == "B") correctAnswer = p.valueB;
      }

      if (p.setting == 6) {
        const allA = p.valueA * p.totalQuantity;
        const bigDiff = p.totalValue - allA;
        const smallDiff = p.valueB - p.valueA;
        const QB = bigDiff / smallDiff;
        let AB = p.totalQuantity - QB;
        correctAnswer = `${AB}/${p.totalQuantity}`;
      }

      if (p.setting == 7) {
        correctAnswer = p.oneUnit * p.newUnitA[0] - p.firstSituation;
      }
    }
    //ANSWERS
    if (level == "heuSix") {
      // LOWEST COMMON TIME
      if (p.setting == 1) {
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
      if (p.setting == 2) {
        if (p.version == 0 || p.version == 1) {
          correctAnswer = (p.duration / p.people) * p.active;
        }
        if (p.version == 2) {
          correctAnswer = (p.duration / p.people) * p.active * p.courts;
        }
      }
      // REPEATED IDENTITY TYPE 3
      if (p.setting == 3) {
        let commonDenominator = commonDeno(p.denoA, p.denoB);
        const multiplierA = commonDenominator / p.denoA;
        const multiplierB = commonDenominator / p.denoB;
        let bOnly = (p.denoA - p.numeA) * multiplierA;
        let both = p.numeB * multiplierB - bOnly;
        [both, commonDenominator] = simplify(both, commonDenominator);
        correctAnswer = `${both}/${commonDenominator}`;
      }

      //SNAKE AND LADDER
      if (p.setting == 4) {
        if (p.version == "human") {
          correctAnswer = (p.sets + 1) * p.pTime;
        }
        if (p.version == "snail") {
          correctAnswer = p.sets * (p.pTime + p.nTime) + p.pTime;
        }
      }

      // CAUSE AND EFFECT
      if (p.setting == 5) {
        console.log("Here " + p.type);

        if (p.type == "ran") {
          correctAnswer = p.flightTotal * p.ran;
        }
        if (p.type == "walked") {
          correctAnswer = p.flightTotal * (p.ran + p.walk);
        }
      }

      //IDENTICAL EFFECT: DISCOUNT
      if (p.setting == 6) {
        correctAnswer = p.discount;
      }
    }

    // ANSWERS
    if (level == "heuSixb") {
      //SIMULTANEOUS EQUATION ( PARTS AND UNITS) TYPE 1
      if (p.setting == 1) {
        if (p.question == "AF") correctAnswer = p.unitsA * p.multiplier;
        if (p.question == "BF") correctAnswer = p.unitsB * p.multiplier;
        if (p.question == "AE")
          correctAnswer = p.unitsA * p.multiplier + p.situationA;
        if (p.question == "BE")
          correctAnswer = p.unitsB * p.multiplier + p.situationB;
      }
      //IDENTICAL QUANTITY WITH DIFFERENCE TYPE 3
      if (p.setting == 2) {
        correctAnswer = `${Math.abs(p.personATotal - p.personBTotal)}, ${
          p.packets
        }`;
      }

      // MORE THAN / LESS THAN
      if (p.setting == 3) {
        if (p.question == "A") correctAnswer = p.varA;
        if (p.question == "B") correctAnswer = p.varB;
      }

      //USING IT ALL
      if (p.setting == 4) {
        correctAnswer = p.answer;
      }
      //IDENTICAL QUANTITY WITH DIFFERENCE (LEVEL 2) TYPE 1 MULTIPLES
      if (p.setting == 5) {
        if (p.question == "VA") correctAnswer = p.priceA;
        if (p.question == "VB") correctAnswer = p.priceB;
        if (p.question == "QA") correctAnswer = p.quantityA * p.groups;
        if (p.question == "QB") correctAnswer = p.quantityB * p.groups;
      }
      if (p.setting == 6) {
        const valueA = accDecimal((p.priceA * p.quantityA) / 100);
        const valueB = accDecimal((p.priceB * p.quantityB) / 100);
        if (p.question == "VA") correctAnswer = valueA;
        if (p.question == "VB") correctAnswer = valueB;
        if (p.question == "QA") correctAnswer = p.quantityA;
        if (p.question == "QB") correctAnswer = p.quantityB;
        if (p.question == "T") correctAnswer = valueA + valueB;
      }

      if (p.setting == 7) {
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

      if (p.setting == 8) {
        // const A = p.valueA * p.denoA;
        // const B = p.valueB * p.denoB;
        // if (p.question == "A") correctAnswer = A;
        // if (p.question == "B") correctAnswer = B;
        if (p.question == "A") correctAnswer = p.valueA;
        if (p.question == "B") correctAnswer = p.valueB;
      }
    }
    // if (mulLevel == "multiples") {
    //   correctAnswer = p.numFive * (multiplesArr.length - 1);
    // }

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
      questionsCorrectArr.push(p.setting);
      const extra = cutOffCheck(level, p.setting, questionSecs);
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

      summaryPush("✅", state);
      ctx.clearRect(0, 0, 1000, 1000);
      //   if (mulLevel == "multiples") {
      //     multiplesArr.push(userInput.value);
      //     state.score = multiplesArr.length - 1;
      //     helpMe.textContent = multiplesArr.slice(1);
      //   }
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
        // if (p.setting == 14) {
        displayProblem.style.fontSize = "revert";
        displayProblem.style.textAlign = "revert";
        // }
      }

      if (removeHelpMe.includes(level)) helpMe.textContent = "";

      reviewAnswer.classList.add("hidden");
      if (state.score != scoreNeeded) {
        console.log("new questions generated");
        updateProblems(level, state, setting, regen, skipArr);
      }
    } else {
      // WHEN INCORRECT
      console.log("incorrect");

      helpList(level);
      document
        .querySelector(".help-btn")
        .addEventListener("click", function () {
          console.log("Seeking help");
          helpMeFunc(level, state, p.setting);
        });
      state.mistake++;
      summaryPush("❌", state);

      //EXTRA PRACTICE
      if (
        level.toString().startsWith("cal") ||
        level.toString().startsWith("heu")
      ) {
        if (!extraPracticeArr.includes(p.setting))
          extraPracticeArr.push(p.setting);
        console.log(`Extra Practice Needed: ${extraPracticeArr}`);
      }

      reviewCount = 1;
      reviewAnswer.classList.remove("hidden");
      state.correctAnswer = correctAnswer;

      if (hardcore == 1) {
        state.score = 0;
        currentScore.innerHTML = `${state.score} (${accumulatedScore})`;
        console.log("test");
      } else if (
        easy == 1
        // || mulLevel == "multiples"
      ) {
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
        if (!calArr.includes(p.setting)) {
          calArr.push(p.setting);
          console.log(`Incorrect, try setting ${p.setting} again!`);
          console.log(calArr);
        }
      } else {
        calArr.push(p.setting);
        console.log(calArr);
      }
    }
  }
}
