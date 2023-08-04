import { genProblems } from "./genProblems.js";

export function updateProblems(state) {
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
    displayProblem.innerHTML = `
      Pattern 1: 1</br>
      Pattern 2: 3</br>
      Pattern 3: 6</br>
      Pattern 4: 10</br>
      ...</br>
      Pattern ${p.numOne}: ?
      `;
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
    arcAngleRad = (p.arcAngle * Math.PI) / 180;
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

  if (level == 4.03) {
    if (p.numOne % 10 == 0) {
      p.numOne += 1;
    }
    if (p.placeValue == "Whole Number") {
      p.numTwo = [10, 100, 1000][genNumbers(3)];
    }
    if (p.placeValue == "1 decimal place" || p.placeValue == "tenth place") {
      p.numTwo = [100, 1000][genNumbers(2)];
    }
    if (
      p.placeValue == "2 decimal place" ||
      p.placeValue == "hundredth place"
    ) {
      p.numTwo = 1000;
    }
    // p.numFinal = Math.floor((p.numOne / (p.numTwo * 1)) * p.numTwo) / p.numTwo;
    p.numFinal = p.numOne / p.numTwo;

    while (p.numFinal > 1000) {
      p.numFinal -= 1000;
    }
    console.log(p.numOne, p.numTwo, p.numFinal);
    helpMe.textContent = `${p.placeValue}`;
    displayProblem.textContent = `${p.numFinal} ≈ `;
  }

  if (level == 4.04) {
    if (p.numOne % 10 == 0) {
      p.numOne += p.numOne + 1;
    }
    displayProblem.textContent = `${p.numOne / p.numTwo} =`;
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
      displayProblem.textContent = `${p.sumOfNum} ${p.firstUnit} = ? ${p.secondUnit} `;
      if (p.firstUnit == "$") {
        displayProblem.textContent = `${p.firstUnit} ${p.sumOfNum} = ? ${p.secondUnit} `;
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
  // if (level == 4.09) {
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

  // if (level == 4.1) {
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
      for (i = 2; i < biggest; i++) {
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

      ctx.fillText(`${p.bigSquare} cmE`, 0, -p.bigSquare / 2);

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

  if (level == 4.22) {
    for (let i = p.numThree; i > 1; i--) {
      if (p.numTwo % i == 0 && p.numThree % i == 0) {
        p.numTwo /= i;
        p.numThree /= i;
      }
    }
    console.log(p.options);
    if (p.options == 1) {
      twoNumerator.classList.add("line");
      twoWholeNumber.textContent = p.numOne;
      twoNumerator.textContent = p.numTwo;
      twoDenominator.textContent = p.numThree;
      equalSymbol.textContent = "x";
      threeWholeNumber.textContent = p.numFour;
      threeNumerator.textContent = "";
      threeDenominator.textContent = "";
      threeNumerator.classList.remove("line");
    }
    if (p.options == 2) {
      threeNumerator.classList.add("line");
      threeWholeNumber.textContent = p.numOne;
      threeNumerator.textContent = p.numTwo;
      threeDenominator.textContent = p.numThree;
      equalSymbol.textContent = "x";
      twoWholeNumber.textContent = p.numFour;
      twoNumerator.textContent = "";
      twoDenominator.textContent = "";
      twoNumerator.classList.remove("line");
    }
  }

  if (level == 4.23) {
    if (p.option == "no") {
      while (arrayConvenient.includes(p.numTwo) == true) {
        p.numTwo = genNumbers(20) + 3;
      }
      p.numOne = p.numTwo;
    }
    p.divisor = 2;
    let a = 0;
    displayProblem.textContent = p.numOne;

    if (10 % p.numOne == 0) {
      p.convenient = 10;
    } else if (100 % p.numOne == 0) {
      p.convenient = 100;
    } else {
      p.convenient = 1000;
    }

    p.divisor = p.convenient / p.numOne;
    console.log(p.numOne, p.divisor);
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
      paraAngleR = (paraAngle * Math.PI) / 180;
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
    ctx.save();
    let finalDifficulty = difficulty;
    if (difficulty >= 2) {
      finalDifficulty = 3;
    }
    if (difficulty >= 3) {
      finalDifficulty = 4;
    }
    difficulty = Number(difficulty);
    p.roll = ["v", "h", "l", "b", "ba"][genNumbers(finalDifficulty + 1)];
    console.log(p.roll);
    ctx.font = "1em serif";
    p.volume = p.pointA * (p.pointA + p.pointC) * p.pointB;
    p.volumeDisplay = (
      p.pointA *
      (p.pointA + p.pointC) *
      p.pointB
    ).toLocaleString("en-US");
    if (p.roll == "v") {
      ctx.fillText(`Find the volume of the Cuboid`, 20, 20);
    }
    if (p.roll == "h") {
      ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Height`, 20, 20);
    }
    if (p.roll == "b") {
      ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Breadth`, 20, 20);
    }
    if (p.roll == "l") {
      ctx.fillText(`Volume = ${p.volumeDisplay} ml. Find Length`, 20, 20);
    }
    if (p.roll == "ba") {
      ctx.fillText(
        `Volume = ${p.volumeDisplay} ml. Find the Base Area`,
        20,
        20
      );
    }

    ctx.translate(125, 230);
    let a = p.pointA;
    let b = -p.pointB;
    let c = p.pointC;
    let d = -p.pointD;

    drawCuboid(a, b, c, d);

    if (p.roll == "v") {
      ctx.fillText(a, a / 2 - 10, +15);
      ctx.fillText(a + c, a + c / 2 + 10, 0 + d / 2);
      ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    }
    if (p.roll == "h") {
      ctx.fillText(a, a / 2 - 10, +15);
      ctx.fillText(a + c, a + c / 2 + 10, 0 + d / 2);
      ctx.fillText("?", a + c + 5, b + d - b / 2 + 5);
    }
    if (p.roll == "b") {
      ctx.fillText(a, a / 2 - 10, +15);
      ctx.fillText("?", a + c / 2 + 10, 0 + d / 2);
      ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    }
    if (p.roll == "l") {
      ctx.fillText("?", a / 2 - 10, +15);
      ctx.fillText(a + c, a + c / 2 + 10, 0 + d / 2);
      ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    }
    if (p.roll == "ba") {
      ctx.fillText(-b, a + c + 5, b + d - b / 2 + 5);
    }

    ctx.restore();
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

  if (level == 5.17) {
    ctx.save();
    ctx.font = "1em serif";
    ctx.stroke();
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
    if (setting == 7 || setting == 8) {
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
  }

  if (level == "calTwo") {
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
    if (setting == 7 || setting == 8) {
      displayProblem.style.fontSize = "24px";
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
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
          updateProblem = 1;
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
      let arrOne = p.numOne.toString().split("");
      let arrTwo = p.numTwo.toString().split("");
      let join = [...arrOne, ...arrTwo];
      let unique = [...new Set(join)];
      list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(unique, list);
      unique.forEach((el) => {
        console.log(el);
        let index = list.indexOf(el * 1);
        list.splice(index, 1);
      });
      console.log(list);

      p.value = list[genNumbers(list.length)];
      arrOneStr = arrOne.join("");
      arrTwoStr = arrTwo.join("");
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
        updateCalc();
      }
      p.answer = arr[p.position];
      arr[p.position] = "____";
      let displayStr = arr.join(", "); //Change arr to string
      displayProblem.innerHTML = displayStr;
    }
  }
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
      setting == 12
    ) {
      wholeNumberContainer.classList.add("hidden");
      workingContainer.classList.remove("hidden");
    }
    // NORMAL DISPLAY
    if (
      setting == 7 ||
      setting == 8 ||
      setting == 10 ||
      setting == 11 ||
      setting == 13
    ) {
      displayProblem.style.fontSize = "24px";
      wholeNumberContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
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
      list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(unique, list);
      unique.forEach((el) => {
        console.log(el);
        let index = list.indexOf(el * 1);
        list.splice(index, 1);
      });
      console.log(list);

      p.value = list[genNumbers(list.length)];
      arrOneStr = arrOne.join("");
      arrTwoStr = arrTwo.join("");
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
        updateCalc();
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

    if (setting == 10) {
      let num = p.multiplier * p.divisor;
      displayProblem.innerHTML = `${num} ÷ ${p.divisor} = ?`;
    }

    if (setting == 11) {
      let num = p.multiplier * p.divisor + p.remainder;
      displayProblem.innerHTML = `${num} ÷ ${p.divisor} = ?`;
    }
    if (setting == 12) {
      num = genUniqNum(3);
      let str = num.toString();
      console.log(str);
      const position = genNumbers(str.length);
      const replaceNum = str[position];
      p.replaced = replaceNum;
      str = str.replace(replaceNum, "?");
      firstNum.textContent = str;
      secondNum.textContent = p.multiplier;
      workingAnswer.textContent = num * p.multiplier;
    }

    if (setting == 13) {
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
  }

  if (level == "calFour") {
    // WORKING DISPLAY
    if (setting == 4) {
      wholeNumberContainer.classList.add("hidden");
      workingContainer.classList.remove("hidden");
    }

    // NORMAL DISPLAY
    let normalArr = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14];
    if (normalArr.includes(setting)) {
      displayProblem.style.fontSize = "20px";
      wholeNumberContainer.classList.remove("hidden");
      fractionsContainerTwo.classList.add("hidden");
      workingContainer.classList.add("hidden");
    }
    //MIXED FRACTIONS DISPLAY
    if (setting == 5 || setting == 6) {
      wholeNumberContainer.classList.add("hidden");
      workingContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      equalSymbolTwo.classList.remove("hidden");
    }
    if (setting != 5 && setting != 6) {
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
        What is the first common multiple of ${p.numOne} and ${p.numTwo}.</p>
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
        return updateProblems();
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
      if (arr.length <= arr2.length) {
        arr.forEach((el) => {
          if (arr2.includes(el)) arr3.push(el);
          console.log(el, arr3);
        });
      } else {
        arr2.forEach((el) => {
          if (arr.includes(el)) arr3.push(el);
          console.log(el, arr3);
        });
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
    if (setting == 5) {
      if (p.numOne > p.denoOne) [p.numOne, p.denoOne] = [p.denoOne, p.numOne];
      if (p.numOne == p.denoOne) p.denoOne += 1;
      if (p.numTwo > p.denoTwo) [p.numTwo, p.denoTwo] = [p.denoTwo, p.numTwo];
      if (p.numTwo == p.denoTwo) p.denoTwo += 1;
      if (p.denoOne == p.denoTwo) p.denoTwo += 1;
      [p.numOne, p.denoOne] = simplify(p.numOne, p.denoOne);
      [p.numTwo, p.denoTwo] = simplify(p.numTwo, p.denoTwo);
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numOne;
      twoDenominator.textContent = p.denoOne;
      threeWholeNumber.textContent = p.wholeTwo;
      threeNumerator.textContent = p.numTwo;
      threeDenominator.textContent = p.denoTwo;
      equalSymbol.textContent = "+";
    }
    if (setting == 6) {
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
    //DECIMALS
    if (setting == 7) {
      console.log("The current setting is: " + setting);
      const oneDisplay = p.numOne / p.convenientNumOne;
      const twoDisplay = p.numTwo / p.convenientNumTwo;
      displayProblem.innerHTML = `
        ${oneDisplay} + ${twoDisplay} = ?`;
      decimalCheck(oneDisplay);
      decimalCheck(twoDisplay);
    }

    if (setting == 8) {
      console.log("The current setting is: " + setting);
      p.numOne = p.numOne / p.convenientNumOne;
      p.numTwo = p.numTwo / p.convenientNumTwo;
      if (p.numTwo > p.numOne) [p.numOne, p.numTwo] = [p.numTwo, p.numOne];
      displayProblem.innerHTML = `
        ${p.numOne} - ${p.numTwo} = ?`;
      decimalCheck(p.numOne);
      decimalCheck(p.numTwo);
    }

    if (setting == 9) {
      p.numOne = p.numOne / p.convenientNumOne;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
        ${p.numOne} x ${p.numTwo} = ?`;
      decimalCheck(p.numOne * p.numTwo);
    }
    if (setting == 10) {
      p.numOne = p.numOne / p.convenientNumOne;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
        ${p.numOne} x ${p.numTwo} = ?`;
    }
    if (setting == 11) {
      p.numTwo = p.numOne;
      p.numOne = (p.numOne * p.multiplier) / p.divisor;
      decimalCheck(p.numOne);
      displayProblem.innerHTML = `
        ${p.numOne} ÷ ${p.numTwo} = ?`;
      decimalCheck(p.numOne / p.numTwo);
    }
    if (setting == 12) {
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
    if (setting == 13) {
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
  }

  if (level == "calFive") {
    if (setting == 2 || setting == 3) {
      // START CHANGE DISPLAY TO FRACTIONS
      fractionsContainer.classList.add("hidden");
      fractionsContainerTwo.classList.remove("hidden");
      workingContainer.classList.add("hidden");
      // END DISPLAY
    }
    if (setting == 4) {
      displayProblem.style.textAlign = "left";
      displayProblem.style.fontSize = "18px";
      wholeNumberContainer.classList.remove("hidden");
      fractionsContainer.classList.add("hidden");
      fractionsContainerTwo.classList.add("hidden");
      workingContainer.classList.add("hidden");
    }
    if (setting != 3) {
      threeNumerator.classList.remove("hidden");
      threeDenominator.classList.remove("hidden");
    }

    // if (setting == 0) {
    //   let equationArr = [1, "A", 3, "B", 5, "C", 7, "D", 9];
    //   let holdNum = [p.numOne, p.numTwo, p.numThree, p.numFour, p.numFive];
    //   let holdSym = ["+", "-", "*", "/"];
    //   console.log(equationArr);
    //   let numArr = [1, 3, 5, 7, 9];
    //   for (let i = 0; i < 5; i++) {
    //     const chosenNum = numArr[genNumbers(numArr.length)];
    //     console.log(chosenNum);
    //     const position = numArr.indexOf(chosenNum);
    //     const splicedNum = numArr.splice(position, 1);
    //     console.log(numArr, splicedNum);
    //     const positionInArr = equationArr.indexOf(chosenNum);
    //     console.log("PositionInArr: " + positionInArr);
    //     equationArr.splice(positionInArr, 1);
    //     equationArr.splice(positionInArr, 0, holdNum[i]);
    //     console.log(equationArr);
    //   }
    //   let alpArr = ["A", "B", "C", "D"];
    //   for (let i = 0; i < 4; i++) {
    //     const chosenNum = alpArr[genNumbers(alpArr.length)];
    //     console.log(chosenNum);
    //     const position = alpArr.indexOf(chosenNum);
    //     const splicedNum = alpArr.splice(position, 1);
    //     console.log(alpArr, splicedNum);
    //     const positionInArr = equationArr.indexOf(chosenNum);
    //     console.log("PositionInArr: " + positionInArr);
    //     equationArr.splice(positionInArr, 1);
    //     equationArr.splice(positionInArr, 0, holdSym[i]);
    //   }
    //   console.log(equationArr);
    //   let str = equationArr.join("");
    //   let n = eval(str);
    //   if (n % 1 != 1) {
    //     return updateCalc();
    //   }
    // }

    if (setting == 1) {
      fractionsContainerTwo.classList.add("hidden");
      fractionsContainer.classList.remove("hidden");
      workingContainer.classList.add("hidden");
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
      threeNumerator.classList.add("hidden");
      threeDenominator.classList.add("hidden");
      if (p.numeratorOne == p.denominatorOne) {
        return updateProblems();
      }
      [p.numeratorOne, p.denominatorOne] = simplify(
        p.numeratorOne,
        p.denominatorOne
      );
      if (p.numeratorOne > p.denominatorOne)
        [p.numeratorOne, p.denominatorOne] = [p.denominatorOne, p.numeratorOne];
      twoWholeNumber.textContent = p.wholeOne;
      twoNumerator.textContent = p.numeratorOne;
      twoDenominator.textContent = p.denominatorOne;
      threeWholeNumber.textContent = p.wholeTwo;
      equalSymbol.textContent = "x";
    }
    if (setting == 3) {
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
    // CURRENT WORK
    if (setting == 4) {
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
  }
  //   if (setting == 1) {
  //     // START CHANGE DISPLAY
  //     wholeNumberContainer.classList.remove("hidden");
  //     workingContainer.classList.add("hidden");
  //     // END CHANGE DISPLAY
  //     let str = "";
  //     let numOne = genNumbers(10) + 1;
  //     let operators = ["+", "-", "x", "/"];
  //     let firstNum = p.answer;
  //     // 1. FIRST NUMBER
  //     opsOne = operators[p.operatorOne];
  //     if (opsOne == "+") {
  //       str = `+${numOne}`;
  //       firstNum = firstNum - numOne;
  //     }
  //     if (opsOne == "-") {
  //       str = `-${numOne}`;
  //       firstNum = firstNum + numOne;
  //     }
  //     firstNum = firstNum - numOne;
  //     operators.splice(p.operatorOne, 1);
  //     console.log(operators);
  //     if (firstNum % 1 != 0 || firstNum < 0) {
  //       return updateProblems();
  //     }
  //     // 2. SECOND NUMBER
  //     opsTwo = operators[p.operatorTwo];
  //     console.log(opsTwo);
  //     let numTwo = genNumbers(10) + 1;
  //     if (opsTwo == "+") {
  //       if (genNumbers(2) == 1) {
  //         str = `${str}${opsTwo}${numTwo}`;
  //         firstNum = firstNum - numTwo;
  //       } else {
  //         str = `${opsTwo}${numTwo}${str}`;
  //         firstNum = numTwo - firstNum;
  //       }
  //     }
  //     if (opsTwo == "-") {
  //       if (genNumbers(2) == 1) {
  //         str = `${str}${opsTwo}${numTwo}`;
  //         firstNum = firstNum + numTwo;
  //       } else {
  //         str = `${opsTwo}${numTwo}${str}`;
  //         firstNum = numTwo + firstNum;
  //       }
  //     }
  //     if (firstNum % 1 != 0 || firstNum < 0) {
  //       return updateProblems();
  //     }
  //     operators.splice(p.operatorTwo, 1);
  //     // // 3. NUMBER THREE
  //     // opsThree = operators[p.operatorThree];
  //     // console.log(opsThree);
  //     // let numThree = genNumbers(10) + 1;
  //     // if (opsThree == "x") {
  //     //   if (genNumbers(2) == 1) {
  //     //     str = `${str}${opsThree}${numThree}`;
  //     //     firstNum = firstNum / numThree;
  //     //   } else {
  //     //     str = `${opsThree}${numThree}${str}`;
  //     //     firstNum = numThree / firstNum;
  //     //   }
  //     // }
  //     // if (opsThree == "/") {
  //     //   if (genNumbers(2) == 1) {
  //     //     str = `${str}${opsThree}${numThree}`;
  //     //     firstNum = firstNum * numThree;
  //     //   } else {
  //     //     str = `${opsThree}${numThree}${str}`;
  //     //     firstNum = numThree * firstNum;
  //     //   }
  //     // }
  //     // operators.splice(p.operatorThree, 1);
  //     // if (firstNum % 1 != 0 || firstNum < 0) {
  //     //   return updateProblems();
  //     // }
  //     // // 4. NUMBER FOUR
  //     // opsFour = operators[p.operatorFour];
  //     // let numFour = genNumbers(10) + 1;
  //     // if (opsFour == "x") {
  //     //   if (genNumbers(2) == 1) {
  //     //     str = `${str}${opsFour}${numFour}`;
  //     //     firstNum = firstNum / numFour;
  //     //   } else {
  //     //     str = `${opsFour}${numFour}${str}`;
  //     //     firstNum = numFour / firstNum;
  //     //   }
  //     // }
  //     // if (opsFour == "/") {
  //     //   if (genNumbers(2) == 1) {
  //     //     str = `${str}${opsFour}${numFour}`;
  //     //     firstNum = firstNum * numFour;
  //     //   } else {
  //     //     str = `${opsFour}${numFour}${str}`;
  //     //     firstNum = numFour * firstNum;
  //     //   }
  //     // }
  //     // if (firstNum % 1 != 0 || firstNum < 0) {
  //     //   return updateProblems();
  //     // }
  //     // str = `${firstNum}${str}=`;
  //     // LAST. DISPLAY
  //     displayProblem.textContent = str;
  //   }
  // }
  // Heuristics display

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

    if (
      ((setting == 2) | (setting == 9) && p.rollz == 2) ||
      (range == 1 && p.rollz == 2)
    ) {
      displayProblem.innerHTML = `
          A has ${p.numOne}.</br>
          B has ${p.numTwo}.</br>
          What is the total of A and B?
        `;
    }

    if (
      setting == 3 ||
      (setting == 9 && p.rollz == 3) ||
      (range == 1 && p.rollz == 3)
    ) {
      p.numTotal = p.numOne + p.numTwo;
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

    if (
      setting == 5 ||
      (setting == 9 && p.rollz == 5) ||
      (range == 1 && p.rollz == 5)
    ) {
      let oneUnit = genNumbers(10) + 10;
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
  // display
  if (level == "heuThree") {
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
        If ${p.objectOneQ} ${p.objectOne} and ${p.objectTwoQ} ${
        p.objectTwo
      } is ${p.totalValue}.</br>
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
          (unitSentence = genNumbers(4) + 2),
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
          (unitSentence = genNumbers(4) + 2),
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

    if (
      setting == 2 ||
      (setting == 9 && p.rollz == 2) ||
      (range == 1 && p.rollz == 2)
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
          [p.situationOne, p.situationTwo] = [p.situationTwo, p.situationOne];
        }
      } else {
        while (
          (p.situationOne - p.situationTwo) % (p.unitSentence - 1) != 0 ||
          Math.abs(p.situationOne) == Math.abs(p.situationTwo)
        ) {
          p.situationOne = genNumbers(100) + 1;
          p.situationtwo = genNumbers(100) - 100;
          p.unitSentence = genNumbers(4) + 2;
        }
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
          genNumbers == 0
            ? `${p.objectOne} and ${p.objectTwo} has an equal number in the end.`
            : `${p.objectOne} and ${p.objectTwo} has the same amount in the end.`
        }</br>
        What is ${p.oneOrTwo == "One" ? p.objectOne : p.objectTwo} ${
        p.firstOrEnd
      }?
        `;
    }

    if (
      setting == 3 ||
      (setting == 9 && p.rollz == 3) ||
      (range == 1 && p.rollz == 3)
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
      if (lineThree == "A") {
        lineThree = `${p.objectOne} has ${p.endOne} in the end.`;
      }
      if (lineThree == "B") {
        lineThree = `${p.objectTwo} has ${p.endTwo} in the end.`;
      }

      let lineFour = undefined;
      if (p.answer == "A") {
        lineFour = `What is ${p.objectOne} at first?`;
      }
      if (p.answer == "B") {
        lineFour = `What is ${p.objectTwo} at first?`;
      }
      if (p.answer == "total") {
        lineFour = `What is the total at first?`;
      }
      if (p.answer == "other") {
        if (p.oneOrTwo == "One") {
          lineFour = `What is ${p.objectTwo} at in the end?`;
        }
        if (p.oneOrTwo == "Two") {
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
          There is a total of ${p.total} ${p.objectTwo}s and ${
        p.objectOne
      }s.</br>
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

  if (level == "heuFourb") {
    setting = calArrAll(2, calArr, setting, 9);
    setting = checkRange(setting, calArr);

    if (setting == 1) {
      [p.numOne, p.numTwo] = simplify(p.numOne, p.numTwo);
      if (p.numOne == 1 || p.numTwo == 1) return updateCalc();
      if (p.personOne == p.personTwo || p.numOne == p.numTwo)
        return updateCalc();
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
          Which is the ${p.times} participant to receive both?
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
  }
  // Display
  if (level == "heuFive") {
    if (
      setting == 1 ||
      (setting == 9 && p.rollz == 1) ||
      (range == 1 && p.rollz == 1)
    ) {
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
      chosenRoll = genNumbers(p.objects.length);
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
      while (p.objectOneV == p.objectTwoV) {
        objectOneV = genNumbers(10) + 2;
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

        if (p.remainder == 0) {
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
  }

  if (level == "heuFiveb") {
    if (setting == 1) {
      let unitAF = "";
      let unitBF = "";
      let unitAE = "";
      let unitBE = "";
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      if (p.valueAFirst == unitAF || p.valueBFirst == unitBF) {
        return updateProblems();
      }
      if (p.happensTo == "A") {
        [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBFirst);
      }
      if (p.happensTo == "B") {
        [unitAE, unitBE] = simplify(p.valueAFirst, p.valueBEnd);
      }
      if (p.valueAEnd == unitAE || p.valueBEnd == unitBF) {
        return updateProblems();
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
          return updateProblems();
        }

        if (p.valueAEnd - p.valueAFirst > 0) {
          lineTwo = `A ${positive} another ${
            Math.abs(p.valueAEnd - p.valueAFirst) * p.multiplier
          } ${p.object}.`;
        } else {
          lineTwo = `A ${negative} ${
            Math.abs(p.valueAEnd - p.valueAFirst) * p.multiplier
          } ${p.object}.`;
        }
      }
      if (p.happensTo == "B") {
        if (p.valueBEnd - p.valueBFirst == 0) {
          return updateProblems();
        }
        if (p.valueBEnd - p.valueBFirst > 0) {
          lineTwo = `B ${positive} another ${
            Math.abs(p.valueBEnd - p.valueBFirst) * p.multiplier
          } ${p.object}.`;
        } else {
          lineTwo = `B ${negative} ${
            Math.abs(p.valueBEnd - p.valueBFirst) * p.multiplier
          } ${p.object}.`;
        }
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

      displayProblem.innerHTML = `
        ${lineOne}</p>
        ${lineTwo}</p>
        ${lineThree}</p>
        ${lineFour}
        `;
    }

    if (setting == 2) {
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
        return updateProblems();
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
        return updateProblems();
      }
      console.log(p.valueAFirst, p.valueBFirst, p.valueAEnd, p.valueBEnd);

      // PREP
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBEnd);
      if (p.valueAFirst == unitAF || p.valueAEnd == unitAE) {
        console.log("Values unable to be simplified");
        return updateProblems();
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
    if (setting == 3) {
      let unitAF = "";
      let unitBF = "";
      let unitAE = "";
      let unitBE = "";

      p.valueAEnd = p.valueAFirst + p.situation;
      p.valueBEnd = p.valueBFirst + p.situation;
      [unitAF, unitBF] = simplify(p.valueAFirst, p.valueBFirst);
      [unitAE, unitBE] = simplify(p.valueAEnd, p.valueBEnd);
      if (p.valueAFirst == unitAF || p.valueAEnd == unitAE) {
        return updateProblems();
      }

      // LINE ONE
      let lineOne = genNumbers(4);
      if (lineOne == 0) {
        lineOne = `The ratio of A:B is ${unitAF}:${unitBF}.`;
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
