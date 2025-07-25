// import { Document } from "mongoose";
import { commonDeno, drawHorizontalLine } from "./otherFunctions.js";
import { displaySimpleFraction, genNumbers } from "./script.js";

// NO IDEA WHY I COULD IMPORT THIS FROM "SCRIPT.JS"
// function displaySimpleFraction(numerator, denominator) {
//   return `
//   <div class="frac">
//   <span>${numerator}</span>
//   <span class="symbol">/</span>
//   <span class="bottom">${denominator}</span>
//   </div>
//   `;
// }

const helpMe = document.querySelector(".help-me-text");

//SECOND CANVAS
const secondCanvas = document.querySelector(".second-canvas");
// const canvasTextId = document.getElementById("canvasText");
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
const secondCanvasTextId = document.querySelector("#second-canvas-text");

function modelVariableNames(s, v, q) {
  //INSERTING VARIABLE NAMES
  console.log("Filling in variable names");
  const [x1, y1] = s;
  const modelSize = [60, 30];
  const space = 10;
  const varNames = v;
  const varQuantity = q;
  let row = 0;
  varNames.forEach((names, index) => {
    for (let i = 0; i < varQuantity[index]; i++) {
      ctx2.fillText(names, x1, y1 + (modelSize[1] + space) * row);
      row += 1;
    }
  });
}
function secondCanvasHelp() {
  secondCanvas.classList.remove("hidden");
  ctx2.setTransform(1, 0, 0, 1, 0, 0);
  ctx2.clearRect(0, 0, 1000, 1000);
}

function arrowHeadHorizontalLine(start, end, text, positionForText) {
  const [x1, y1] = start;
  const [x2, y2] = end;

  //LINE
  ctx2.beginPath();
  ctx2.moveTo(x1, y1);
  ctx2.lineTo(x2, y2);
  ctx2.stroke();

  //ARROWHEAD START
  const adjust1 = 5;
  ctx2.beginPath();
  ctx2.moveTo(x1 + adjust1, y1 - adjust1);
  ctx2.lineTo(x1, y1);
  ctx2.lineTo(x1 + adjust1, y1 + adjust1);
  ctx2.stroke();
  //ARROWHEAD end
  ctx2.beginPath();
  ctx2.moveTo(x2 - adjust1, y2 - adjust1);
  ctx2.lineTo(x2, y2);
  ctx2.lineTo(x2 - adjust1, y2 + adjust1);
  ctx2.stroke();

  const textLength = text.toString().length;
  console.log(`The length of the text is :${textLength}`);
  ctx2.font = "16px Arial";
  ctx2.fillStyle = "black";
  if (positionForText == "top") {
    ctx2.fillText(
      text.toString(),
      (x1 + x2) / 2 - textLength * 4,
      (y1 + y2) / 2 - 10
    );
  } else if (positionForText == "bottom") {
    ctx2.fillText(
      text.toString(),
      (x1 + x2) / 2 - textLength * 4,
      (y1 + y2) / 2 + 15
    );
  }
}

function arrowHeadVerticalLine(start, end, text, positionForText) {
  const [x1, y1] = start;
  const [x2, y2] = end;

  //LINE
  ctx2.beginPath();
  ctx2.moveTo(x1, y1);
  ctx2.lineTo(x2, y2);
  ctx2.stroke();

  //ARROWHEAD START
  const adjust1 = 5;
  ctx2.beginPath();
  ctx2.moveTo(x1 - adjust1, y1 + adjust1);
  ctx2.lineTo(x1, y1);
  ctx2.lineTo(x1 + adjust1, y1 + adjust1);
  ctx2.stroke();
  //ARROWHEAD end
  ctx2.beginPath();
  ctx2.moveTo(x2 - adjust1, y2 - adjust1);
  ctx2.lineTo(x2, y2);
  ctx2.lineTo(x2 + adjust1, y2 - adjust1);
  ctx2.stroke();

  if (positionForText == "right") {
    ctx2.fillText(text, x1 + 10, (y1 + y2) / 2);
  } else if (positionForText == "left") {
    ctx2.fillText(text, x1 - 10 - text.length * 3, (y1 + y2) / 2);
  }
}
function likeFractionModel(
  x,
  y,
  widthOfModel,
  heightOfModel,
  firstFraction,
  secondFraction,
  thirdColor
) {
  const [n1, d1, color1] = firstFraction;
  const [n2, d2, color2] = secondFraction;
  const commonDenominator = commonDeno(d1, d2);
  const newN1 = (commonDenominator / d1) * n1;
  const newN2 = (commonDenominator / d2) * n2;

  const widthOfEachUnit = widthOfModel / commonDenominator;
  const heightOfEachUnit = heightOfModel;
  console.log(commonDenominator);
  // const start = x;
  let count = 1;
  for (let a = 0; a < widthOfModel; a += widthOfEachUnit) {
    ctx2.beginPath();
    ctx2.rect(x + a, y, widthOfEachUnit, heightOfEachUnit);
    ctx2.stroke();
    if (count <= newN1) {
      ctx2.save();
      ctx2.fillStyle = color1;
      ctx2.fillRect(x + a, y, widthOfEachUnit, heightOfEachUnit);
    } else if (count <= newN1 + newN2) {
      ctx2.fillStyle = color2;
      ctx2.fillRect(x + a, y, widthOfEachUnit, heightOfEachUnit);
    } else {
      ctx2.fillStyle = thirdColor;
      // return;
    }
    count += 1;
  }
  ctx2.restore();
  console.log(widthOfEachUnit, widthOfModel, newN1);
  arrowHeadHorizontalLine(
    [x, y - 10],
    [x + widthOfEachUnit * newN1, y - 10],
    color1,
    "top"
  );
  arrowHeadHorizontalLine(
    [x + widthOfEachUnit * newN1, y - 10],
    [x + widthOfEachUnit * (newN1 + newN2), y - 10],
    color2,
    "top"
  );
  arrowHeadHorizontalLine(
    [x + widthOfEachUnit * (newN1 + newN2), y + 10 + heightOfEachUnit],
    [x + widthOfModel, y + 10 + heightOfEachUnit],
    "?",
    "bottom"
  );
}
function remainderConceptModel(
  x,
  y,
  widthOfModel,
  heightOfModel,
  firstLevel,
  secondLevel,
  thirdColor
) {
  //First level
  ctx2.beginPath();
  ctx2.rect(x, y, widthOfModel, heightOfModel);
  ctx2.stroke();

  //Cutting the rectangles
  const [firstNumerator, firstDenominator, color1] = firstLevel;
  const firstLevelIntervalDistance = widthOfModel / firstDenominator;
  let firstCount = 1;
  for (
    let d1 = firstLevelIntervalDistance;
    d1 < widthOfModel;
    d1 += firstLevelIntervalDistance
  ) {
    console.log(d1);
    ctx2.beginPath();
    ctx2.moveTo(x + d1, y);
    ctx2.lineTo(x + d1, y + heightOfModel);
    ctx2.stroke();
    //SHADING
    if (firstCount <= firstNumerator) {
      ctx2.fillStyle = color1;
      ctx2.fillRect(
        x + firstLevelIntervalDistance * (firstCount - 1),
        y,
        firstLevelIntervalDistance,
        30
      );
      ctx2.stroke();
    }

    firstCount += 1;
  }

  arrowHeadHorizontalLine(
    [x, y - 10],
    [x + firstLevelIntervalDistance * firstNumerator, y - 10],
    color1,
    "top"
  );
  arrowHeadHorizontalLine(
    [x + firstLevelIntervalDistance * firstNumerator, y - 10],
    [x + widthOfModel, y - 10],
    "remainder",
    "top"
  );

  // Second Level:

  const [secondNumerator, secondDenominator, color2] = secondLevel;
  const secondStartPoint = x + firstLevelIntervalDistance * firstNumerator;
  const remainingDistance =
    firstLevelIntervalDistance * (firstDenominator - firstNumerator);
  const secondLevelIntervalDistance = remainingDistance / secondDenominator;
  ctx2.beginPath();
  ctx2.rect(
    secondStartPoint,
    y + 50,
    firstLevelIntervalDistance * (firstDenominator - firstNumerator),
    heightOfModel
  );
  ctx2.stroke();

  //Cutting the rectangles
  // const firstLevelIntervalDistance = widthOfModel / firstDenominator;
  let secondCount = 1;
  for (
    let d2 = secondLevelIntervalDistance;
    d2 <= remainingDistance;
    d2 += secondLevelIntervalDistance
  ) {
    console.log(d2);
    ctx2.beginPath();
    ctx2.moveTo(secondStartPoint + d2, y + 50);
    ctx2.lineTo(secondStartPoint + d2, y + 50 + heightOfModel);
    ctx2.stroke();

    //SHADING
    if (secondCount <= secondNumerator) {
      ctx2.fillStyle = color2;
    } else {
      ctx2.fillStyle = thirdColor;
    }

    ctx2.fillRect(
      secondStartPoint + secondLevelIntervalDistance * (secondCount - 1),
      y + 50,
      secondLevelIntervalDistance,
      30
    );
    ctx2.stroke();
    secondCount += 1;
  }

  arrowHeadHorizontalLine(
    [secondStartPoint, y + 50 + heightOfModel + 10],
    [
      secondStartPoint + secondLevelIntervalDistance * secondNumerator,
      y + 50 + heightOfModel + 10,
    ],
    color2,
    "bottom"
  );
  arrowHeadHorizontalLine(
    [
      secondStartPoint + secondLevelIntervalDistance * secondNumerator,
      y + 50 + heightOfModel + 10,
    ],
    [x + widthOfModel, y + 50 + heightOfModel + 10],
    thirdColor,
    "bottom"
  );
}

function comparisonModelDifference(
  position,
  variableOne,
  valueOne,
  variableTwo,
  valueTwo,
  total,
  displayTotal,
  displayDifference
) {
  const [x, y] = position;
  //Draw same
  ctx2.font = "16px Arial";
  ctx2.fillText(variableOne, x, y);
  ctx2.fillText(variableTwo, x, y + 50);

  // Same size
  const adjustX = +25;
  const adjustY = -20;
  ctx2.beginPath();
  ctx2.rect(x + adjustX, y + adjustY, 60, 30);
  ctx2.rect(x + adjustX, y + adjustY + 50, 60, 30);
  ctx2.stroke();

  //difference
  const difference = Math.abs(valueOne - valueTwo);
  const top = [x + adjustX + 60, y + adjustY];
  if (valueOne > valueTwo) {
    console.log("Top");
    ctx2.beginPath();
    ctx2.rect(top[0], top[1], 120, 30);
    ctx2.stroke();
    if (displayDifference == "yes") {
      ctx2.fillText(difference, 150, top[1] + 20);
    } else {
      ctx2.fillText("?", 150, top[1] + 20);
    }
  } else if (valueTwo > valueOne) {
    console.log("Bottom");
    ctx2.beginPath();
    ctx2.rect(top[0], top[1] + 50, 120, 30);
    ctx2.stroke();
    if (displayDifference == "yes") {
      ctx2.fillText(difference, 150, top[1] + 50 + 20);
    } else {
      ctx2.fillText("?", 150, top[1] + 50 + 20);
    }
  }
  if (total) {
    const [x1, y1] = [x + adjustX + 60 + 120 + 10, y + adjustY];
    const [x2, y2] = [x + adjustX + 60 + 120 + 10, top[1] + 50 + 30];
    if (displayTotal == "yes")
      arrowHeadVerticalLine([x1, y1], [x1, y2], valueOne + valueTwo, "right");
  }

  return [x + adjustX, y + adjustY, x + adjustX, y + adjustY + 50];
}
// start coordinates
// units = [name, number of units...]
// total
function unitSentence(start, units, total) {
  ctx2.font = "16px arial";
  const [x1, y1] = start;
  let names = [];
  let quantity = [];
  let unitSize = [60, 30];
  let x = 0;
  let y = 0;
  let startPoints = [];
  units.forEach((x, index) => {
    if (index % 2 == 0) {
      names.push(x);
    } else {
      quantity.push(x);
    }
  });

  names.forEach((n, index) => {
    if (units.length == 6) {
      ctx2.strokeStyle = "red";
    } else {
      ctx2.strokeStyle = "black";
    }
    //Fill in variable name
    ctx2.fillText(n, x1, y1 + index * 40);
    //Draw Units
    let times = quantity[index];
    for (let q = 0; q < times; q++) {
      x = x1 + 40 + unitSize[0] * q;
      y = y1 - 20 + 40 * index;

      ctx2.beginPath();
      ctx2.rect(x, y, unitSize[0], unitSize[1]);
      ctx2.stroke();
      if (q == 0) {
        // console.log(x, y);
        startPoints.push([x, y]);
      }
    }

    if (units.length == 6) {
      ctx2.strokeStyle = "black";
      arrowHeadVerticalLine(
        [x1 + 40 + quantity[0] * unitSize[0] + 10, startPoints[0][1]],
        [x1 + 40 + quantity[0] * unitSize[0] + 10, y1 - 20 + 30 * 3 + 10 * 2],
        total,
        "right"
      );
    } else {
      ctx2.strokeStyle = "black";
      arrowHeadVerticalLine(
        [x1 + 40 + quantity[0] * unitSize[0] + 10, startPoints[0][1]],
        [x1 + 40 + quantity[0] * unitSize[0] + 10, y1 - 20 + 30 * 2 + 10 * 1],
        total,
        "right"
      );
    }
  });
  console.log(startPoints);
  if (units.length == 6) {
    //OVERLAY
    ctx2.strokeStyle = "black";
    const lengthOfBigUnit = unitSize[0] * quantity[1];
    //Top
    const repeat = quantity[0] / quantity[1];
    console.log(repeat);
    for (let q = 0; q < repeat; q++) {
      ctx2.beginPath();
      ctx2.rect(
        startPoints[0][0] + q * lengthOfBigUnit,
        startPoints[0][1],
        lengthOfBigUnit,
        30
      );
      ctx2.stroke();
    }
    //Middle
    ctx2.beginPath();
    ctx2.rect(startPoints[1][0], startPoints[1][1], lengthOfBigUnit, 30);
    ctx2.stroke();
  }
}
function unitSentenceWithDifference(
  start,
  units,
  first,
  comparison,
  total,
  variableName,
  comparedAgainst
) {
  ctx2.font = "16px arial";
  const [x1, y1] = start;
  let names = [];
  let quantity = [];
  let unitSize = [60, 30];
  let x = 0;
  let y = 0;
  let startPoints = [];
  units.forEach((x, index) => {
    if (index % 2 == 0) {
      names.push(x);
    } else {
      quantity.push(x);
    }
  });

  names.forEach((n, index) => {
    ctx2.strokeStyle = "black";

    //Fill in variable name
    ctx2.fillText(n, x1, y1 + index * 40);
    //Draw Units
    let times = quantity[index];
    for (let q = 0; q < times; q++) {
      x = x1 + 40 + unitSize[0] * q;
      y = y1 - 20 + 40 * index;

      ctx2.beginPath();
      ctx2.rect(x, y, unitSize[0], unitSize[1]);
      ctx2.stroke();
      if (q == 0) {
        // console.log(x, y);
        startPoints.push([x, y]);
      }
    }
  });

  // DRAW COMPARISON STATEMENT
  const XC = 20 + 40;
  const YC = 50 - 20 + 40 * 2;
  //Naming
  ctx2.fillText(variableName, 20, 50 + 2 * 40);
  // B - C ( Meaning C is larger)
  let difference = comparison - first;
  console.log(difference, first, comparison);
  let C = 25;
  if (difference < 0) {
    //DRAW C THE SAME SIZE FIRST
    console.log("COMPARISON IS LARGER");
    for (let q = 0; q < quantity[comparedAgainst]; q++) {
      ctx2.beginPath();
      ctx2.rect(XC + q * 60, YC, 60, 30);
      ctx2.stroke();
    }

    //THEN DRAW THE EXTRA
    ctx2.beginPath();
    ctx2.rect(XC + 60 * quantity[comparedAgainst], YC, C, 30);
    ctx2.stroke();
    ctx2.fillText(
      Math.abs(difference),
      XC + 60 * quantity[comparedAgainst] + 5,
      YC + 20
    );
    arrowHeadVerticalLine(
      [x1 + 40 + 60 * quantity[0] + 40, startPoints[0][1]],
      [x1 + 40 + 60 * quantity[0] + 40, y1 - 20 + 30 * 3 + 10 * 2],
      total,
      "right"
    );
  } else {
    //DRAW C SMALLER THAN B
    console.log("COMPARISON IS SMALLER");
    ctx2.beginPath();
    ctx2.rect(XC, YC, 60 * quantity[comparedAgainst] - C, 30);
    ctx2.stroke();
    // ctx2.fillText(Math.abs(difference), XC + 60 + 5, YC + 20);
    arrowHeadHorizontalLine(
      [XC + 60 * quantity[comparedAgainst] - C, YC],
      [XC + 60 * quantity[comparedAgainst], YC],
      difference,
      "bottom"
    );
    arrowHeadVerticalLine(
      [x1 + 40 + 60 * quantity[0] + 10, startPoints[0][1]],
      [x1 + 40 + 60 * quantity[0] + 10, y1 - 20 + 30 * 3 + 10 * 2],
      total,
      "right"
    );
  }
}
function doubleDifference(start, variables, total) {
  const [x1, y1] = start;
  let names = [];
  let values = [];
  ctx2.font = "16px arial";
  variables.forEach((x, index) => {
    if (index % 2 == 0) {
      names.push(x);
    } else {
      values.push(x);
    }
  });
  console.log(names, values);
  names.forEach((n, index) => {
    ctx2.fillText(n, x1, y1 + 40 * index);
  });
  //DRAW FIRST 2 VARIABLES
  const A = values[0];
  const B = values[1];
  if (A > B) {
    const diff = B - A;
    //A is larger
    ctx2.beginPath();
    ctx2.rect(x1 + 40, y1 - 20, 60, 30);
    ctx2.rect(x1 + 40 + 60, y1 - 20, 120, 30);
    ctx2.stroke();
    ctx2.fillText(Math.abs(diff), x1 + 40 + 60 + 30, y1 - 20 + 20);
    //B
    ctx2.beginPath();
    ctx2.rect(x1 + 40, y1 - 20 + 40, 60, 30);
    ctx2.stroke();
    //C
    const C = values[2];
    const diff2 = C - B;
    // if C is larger than B.
    if (Math.abs(diff2) == Math.abs(diff)) {
      //SAME DIFF
      console.log("same diff");
      ctx2.beginPath();
      ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 60, 30);
      ctx2.rect(x1 + 40 + 60, y1 - 20 + 40 * 2, 120, 30);
      ctx2.stroke();
      ctx2.fillText(
        Math.abs(diff2).toString(),
        x1 + 40 + 60 + 20,
        y1 - 20 + 40 * 2 + 20
      );
    } else if (diff2 > 0) {
      console.log("C is larger than B.");
      //HOW MUCH LARGER?
      if (Math.abs(diff2) > Math.abs(diff)) {
        ctx2.beginPath();
        ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 60, 30);
        ctx2.rect(x1 + 40 + 60, y1 - 20 + 40 * 2, 140, 30);
        ctx2.stroke();
        ctx2.fillText(
          Math.abs(diff2),
          x1 + 40 + 60 + 10,
          y1 - 20 + 40 * 2 + 20
        );
      } else {
        ctx2.beginPath();
        ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 60, 30);
        ctx2.rect(x1 + 40 + 60, y1 - 20 + 40 * 2, 45, 30);
        ctx2.stroke();
        ctx2.fillText(
          Math.abs(diff2),
          x1 + 40 + 60 + 10,
          y1 - 20 + 40 * 2 + 20
        );
      }
    } else {
      //if C is smaller than B.
      console.log("C is smaller than B.");
      ctx2.beginPath();
      ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 25, 30);
      ctx2.stroke();
      arrowHeadHorizontalLine(
        [x1 + 40 + 25, y1 - 20 + 40 * 2],
        [x1 + 40 + 60, y1 - 20 + 40 * 2],
        Math.abs(diff2),
        "bottom"
      );
    }
    arrowHeadVerticalLine(
      [x1 + 40 + 60 + 150 + 10, y1 - 20],
      [x1 + 40 + 60 + 150 + 10, y1 - 20 + 40 * 2 + 30],
      total,
      "right"
    );
  } else {
    //A is smaller
    const diff = B - A;
    ctx2.beginPath();
    ctx2.rect(x1 + 40, y1 - 20, 60, 30);
    // ctx2.rect(x1 + 40 + 60, y1 - 20, 25, 30);
    ctx2.stroke();
    //B is larger
    ctx2.beginPath();
    ctx2.rect(x1 + 40, y1 - 20 + 40, 60, 30);
    ctx2.rect(x1 + 40 + 60, y1 - 20 + 40, 120, 30);
    ctx2.stroke();
    ctx2.fillText(Math.abs(diff), x1 + 40 + 60 + 30, y1 - 20 + 40 + 20);
    //C
    const C = values[2];
    const diff2 = C - B;
    // C is larger than B. B also larger than C.
    if (diff2 > 0) {
      // if (Math.abs(diff2) < Math.abs(diff)) {
      ctx2.beginPath();
      ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 60, 30);
      ctx2.rect(x1 + 40 + 60, y1 - 20 + 40 * 2, 120, 30);
      ctx2.rect(x1 + 40 + 60 + 120, y1 - 20 + 40 * 2, 25, 30);
      ctx2.stroke();
      ctx2.fillText(
        Math.abs(diff2),
        x1 + 40 + 60 + 120 + 10,
        y1 - 20 + 40 * 2 + 20
      );
      // }
    } else if (diff2 < 0) {
      // C is smaller than B.
      if (Math.abs(diff) == Math.abs(diff2)) {
        ctx2.beginPath();
        ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 60, 30);
        ctx2.stroke();
        // arrowHeadHorizontalLine(
        //   [x1 + 40 + 60, y1 - 20 + 40 * 2],
        //   [x1 + 40 + 60 + 120, y1 - 20 + 40 * 2],
        //   Math.abs(diff2),
        //   "bottom"
        // );
      } else if (Math.abs(diff2) > Math.abs(diff)) {
        ctx2.beginPath();
        ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 35, 30);
        ctx2.stroke();
        arrowHeadHorizontalLine(
          [x1 + 40 + 35, y1 - 20 + 40 * 2],
          [x1 + 40 + 60 + 120, y1 - 20 + 40 * 2],
          Math.abs(diff2),
          "bottom"
        );
      } else {
        //C is larger than B.
        ctx2.beginPath();
        ctx2.rect(x1 + 40, y1 - 20 + 40 * 2, 60 + 25, 30);
        ctx2.stroke();
        arrowHeadHorizontalLine(
          [x1 + 40 + 60 + 25, y1 - 20 + 40 * 2],
          [x1 + 40 + 60 + 120, y1 - 20 + 40 * 2],
          Math.abs(diff2),
          "bottom"
        );
      }
    }
    arrowHeadVerticalLine(
      [x1 + 40 + 60 + 150 + 10, y1 - 20],
      [x1 + 40 + 60 + 150 + 10, y1 - 20 + 40 * 2 + 30],
      total,
      "right"
    );
  }
}
function straightLineModel(start, totalText, totalValue, parts) {
  const [x1, y1] = start;
  ctx2.beginPath();
  ctx2.rect(x1, y1, 250, 30);
  ctx2.stroke();

  //Draw line for total
  if (totalText == "?") {
    arrowHeadHorizontalLine([x1, y1 - 10], [x1 + 250, y1 - 10], "?", "top");
  } else {
    arrowHeadHorizontalLine(
      [x1, y1 - 10],
      [x1 + 250, y1 - 10],
      totalText.toString(),
      "top"
    );
  }

  let sum = 0;
  let values = [];
  let names = [];
  parts.map((x, index) => {
    if (index % 2 != 0) {
      values.push(x);
      sum += x;
    } else {
      names.push(x);
    }
  });
  const rangeForModel = 250;
  let cumulate = 0;
  const coordinatesX = values.map((x) => {
    console.log(x / sum);
    const coordinate = (x / sum) * rangeForModel + cumulate;
    cumulate += coordinate;
    return coordinate + x1;
  });
  console.log(parts);
  console.log(sum);
  console.log(names);
  console.log(coordinatesX);

  //CUTTING THE MODEL
  coordinatesX.forEach((a, index) => {
    if (index != coordinatesX.length - 1) {
      ctx2.beginPath();
      ctx2.moveTo(a, y1 - 10);
      ctx2.lineTo(a, y1 + 40);
      ctx2.stroke();
    }
  });
  coordinatesX.forEach((b, index) => {
    // if (index != 0)
    if (index == 0) {
      arrowHeadHorizontalLine(
        [x1, y1 + 30 + 10],
        [b, y1 + 30 + 10],
        names[index],
        "bottom"
      );
    } else {
      arrowHeadHorizontalLine(
        [coordinatesX[index - 1], y1 + 30 + 10],
        [b, y1 + 30 + 10],
        names[index],
        "bottom"
      );
    }
  });
}
export function helpList(level) {
  const helpArr = [
    "1.01",
    "1.04",
    "1.05",
    "1.06",
    "1.07",
    // "2.09",
    "3.04",
    "3.05",
    "3.05",
    "3.06",
    "3.19",
    "4.02",
    "4.05",
    "4.06",
    "4.11",
    "4.13",
    "4.26",
    "5.01",
    "5.16",
    "6.05",
    "heuTwo",
    "heuTwob",
    "heuThree",
    "heuThreeb",
    "heuFour",
    "heuFive",
  ];
  if (helpArr.includes(level.toString())) {
    console.log("Help is available");
    document.querySelector(".help-btn").classList.remove("hidden");
  }
}
export function helpMeFunc(level, state, setting) {
  document.querySelector("#help").classList.remove("hidden");
  const p = state.currentProblem;
  console.log(state);
  //  HELP!!!
  if (level == 1.01) {
    helpMe.style.lineHeight = "50%";
    helpMe.style.marginTop = "5%";
    helpMe.style.textAlign = "center";

    let object = "";
    let arr = [];
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
  }

  if (level == 1.04 || level == 1.06) {
    helpMe.innerHTML = `
    1 + 2 = 3</br>
    c<sup>o</sup> ± d<sup>-</sup> = r<sup>f</sup></br>
    <hr>
    3 = 2 + 1</br>
    r<sup>f</sup> = c<sup>o</sup> ± d<sup>-</sup>
    `;
  }
  // IDENTITY SHORT STATEMENTS
  if (level == 1.05) {
    helpMe.innerHTML = `
    than <u>c</u><sup>opposite</sup></br>
    <u>d</u><sup>minus</sup>more/less</br>
    is <u>r</u><sup>follow</sup>
    `;
  }
  //MULTIPLICATION IN SETS
  if (level == 1.07) {
    helpMe.style.fontSize = "1em";
    helpMe.style.textAlign = "left";
    helpMe.innerHTML = `
    Observe that the question is in sets of ${p.numTwo}.</br>
    <ul>
      <li>Ignore ${p.numTwo}.</li>
      <li>Reconstruct the question.</li>
      <li>Identify the identity (Comparison , difference, result).</li>
    </ul>
    ${p.numThree == 1 ? `Sets by itself is 1 set.</br>` : ""}
    Attempt level 1.04 if you are unable to understand.</br>
    `;
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
    level == 4.11
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
  if (level == 3.19) {
    helpMe.innerHTML = `
    Area (Inside) = Length x Breadth
    Perimeter (Outside) = 2 Length + 2 Breadth
    `;
  }
  if (level == 4.02) {
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
  if (level == 4.05) {
    if (setting == 1 || p.rollChoice == 1) {
      helpMe.innerHTML = `
      ${displaySimpleFraction(p.numOne, p.numTwo)} -> ${p.value}</br>
      ${
        p.numOne != 1
          ? ` ${displaySimpleFraction(1, p.numTwo)} -> ${p.value} ÷ ${
              p.numOne
            } = ____ </br>`
          : ""
      }
      ${displaySimpleFraction(p.numTwo, p.numTwo)} -> ____ x ${p.numTwo} = _____
      `;
    }
    if (setting == 2 || p.rollChoice == 2) {
      helpMe.innerHTML = `
      1 whole -> ${displaySimpleFraction(p.deno, p.deno)} -> ${p.value}</br>
      ${displaySimpleFraction(1, p.deno)} -> ${p.value} ÷ ${p.deno} = ___ </br>
      ${displaySimpleFraction(p.nume, p.deno)} -> ____ x ${p.nume} = _____
      `;
    }
  }
  if (level == 4.13) {
    helpMe.innerHTML = `
    00 MM to 11 MM = am</br>
    12 MM to 23 MM = pm
    `;
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
  //REMAINDER CONCEPT
  if (level == 5.01) {
    secondCanvasHelp();
    // ctx2.beginPath();
    // ctx2.moveTo(0, 0);
    // ctx2.lineTo(10, 0);
    // ctx2.lineTo(10, 20);
    // ctx2.lineTo(0, 20);
    // ctx2.closePath();
    // ctx2.stroke();

    //LIKE FRACTIONS
    if (setting == 1) {
      // const canvasWidth = document.getElementById("canvas2").width;
      let widthOfModel = 250;
      while (widthOfModel % p.denoOne != 0) widthOfModel += 1;
      const commonDenominator = commonDeno(p.denoOne, p.denoTwo);
      const newN1 = (commonDenominator / p.denoOne) * p.numOne;
      const newN2 = (commonDenominator / p.denoTwo) * p.numTwo;
      secondCanvasTextId.innerHTML = `
      Both fractions are <u>like fractions</u> since both are <u>based on</u> ${
        p.identity
      }.</br>
      ${displaySimpleFraction(p.numOne, p.denoOne)} ${
        newN1 == p.numOne
          ? ""
          : `= ${displaySimpleFraction(newN1, commonDenominator)}`
      } -> ${p.refColor}</br>
      ${displaySimpleFraction(p.numTwo, p.denoTwo)} ${
        newN2 == p.numTwo
          ? ""
          : ` = ${displaySimpleFraction(newN2, commonDenominator)}`
      } -> ${p.refColor2}</br>
      Hence:
      1 - ${displaySimpleFraction(
        newN1,
        commonDenominator
      )} - ${displaySimpleFraction(newN2, commonDenominator)}
      `;
      likeFractionModel(
        80,
        80,
        widthOfModel,
        30,
        [p.numOne, p.denoOne, p.refColor],
        [p.numTwo, p.denoTwo, p.refColor2],
        p.refColor3
      );
    }
    //UNLIKE FRACTIONS V1
    if (setting == 2) {
      console.log("Setting 2");
      secondCanvasTextId.innerHTML = `
      First fraction is based on <u>${
        p.identity
      }</u>.</br>Second fraction is based on <u>remainder</u>. </br>
      Hence, they are <u>unlike fractions</u>.</br>
      ${displaySimpleFraction(p.denoOne - p.numOne, p.denoOne)} x ${
        p.question == 0
          ? displaySimpleFraction(p.remainderNum, p.remainderDeno)
          : displaySimpleFraction(
              p.remainderDeno - p.remainderNum,
              p.remainderDeno
            )
      }
      `;
      let widthOfTopModel = 250;
      remainderConceptModel(
        80,
        80,
        widthOfTopModel,
        30,
        [p.numOne, p.denoOne, p.refColor],
        [p.remainderNum, p.remainderDeno, p.refColor2],
        p.refColor3
      );
    }
    //UNLIKE FRACTIONS V2
    if (setting == 3) {
      // const firstUnitQuantity = p.numOne;
      function remainderConceptModel2Ways(
        x,
        y,
        widthOfModel,
        heightOfModel,
        firstLevel,
        secondLevel,
        theOtherSecondLevel
      ) {
        //First level
        ctx2.beginPath();
        ctx2.rect(x, y, widthOfModel, heightOfModel);
        ctx2.stroke();

        //Cutting the rectangles
        const [firstNumerator, firstDenominator, color1] = firstLevel;
        const firstLevelIntervalDistance = widthOfModel / firstDenominator;
        let firstCount = 1;
        for (
          let d1 = firstLevelIntervalDistance;
          d1 < widthOfModel;
          d1 += firstLevelIntervalDistance
        ) {
          console.log(d1);
          ctx2.beginPath();
          ctx2.moveTo(x + d1, y);
          ctx2.lineTo(x + d1, y + heightOfModel);
          ctx2.stroke();
          //SHADING
          if (firstCount <= firstNumerator) {
            ctx2.fillStyle = "#FAE7EB";
            ctx2.fillRect(
              x + firstLevelIntervalDistance * (firstCount - 1),
              y,
              firstLevelIntervalDistance,
              30
            );
            ctx2.stroke();
          }

          firstCount += 1;
        }

        arrowHeadHorizontalLine(
          [x, y - 10],
          [x + firstLevelIntervalDistance * firstNumerator, y - 10],
          "A",
          "top"
        );
        arrowHeadHorizontalLine(
          [x + firstLevelIntervalDistance * firstNumerator, y - 10],
          [x + widthOfModel, y - 10],
          "B",
          "top"
        );

        // Second Level:

        const [secondNumerator, secondDenominator, color2] = secondLevel;
        const secondStartPoint =
          x + firstLevelIntervalDistance * firstNumerator;
        const remainingDistance =
          firstLevelIntervalDistance * (firstDenominator - firstNumerator);
        const secondLevelIntervalDistance =
          remainingDistance / secondDenominator;
        ctx2.beginPath();
        ctx2.rect(
          secondStartPoint,
          y + 50,
          firstLevelIntervalDistance * (firstDenominator - firstNumerator),
          heightOfModel
        );
        ctx2.stroke();

        //Cutting the rectangles
        // const firstLevelIntervalDistance = widthOfModel / firstDenominator;
        let secondCount = 1;
        for (
          let d2 = secondLevelIntervalDistance;
          d2 <= remainingDistance;
          d2 += secondLevelIntervalDistance
        ) {
          console.log(d2);
          ctx2.beginPath();
          ctx2.moveTo(secondStartPoint + d2, y + 50);
          ctx2.lineTo(secondStartPoint + d2, y + 50 + heightOfModel);
          ctx2.stroke();

          //SHADING
          if (secondCount <= secondNumerator) {
            ctx2.fillStyle = "red";
          } else {
            ctx2.fillStyle = "#CCDCEB";
          }
          console.log(
            `Count: ${secondCount}, ${secondNumerator}/${secondDenominator}`
          );
          ctx2.fillRect(
            secondStartPoint + secondLevelIntervalDistance * (secondCount - 1),
            y + 50,
            secondLevelIntervalDistance,
            30
          );
          ctx2.stroke();
          secondCount += 1;
        }

        arrowHeadHorizontalLine(
          [secondStartPoint, y + 50 + heightOfModel + 10],
          [
            secondStartPoint + secondLevelIntervalDistance * secondNumerator,
            y + 50 + heightOfModel + 10,
          ],
          "Removed",
          "bottom"
        );
        arrowHeadHorizontalLine(
          [
            secondStartPoint + secondLevelIntervalDistance * secondNumerator,
            y + 50 + heightOfModel + 10,
          ],
          [x + widthOfModel, y + 50 + heightOfModel + 10],
          "Left",
          "bottom"
        );

        // The other second level.
        const [thirdNumerator, thirdDenominator] = theOtherSecondLevel;
        console.log;
        const firstLevelEndPoint = firstLevelIntervalDistance * firstNumerator;

        // while ((firstLevelEndPoint - x) % thirdDenominator != 0)
        //   firstLevelEndPoint -= 1;
        ctx2.beginPath();
        ctx2.rect(x, y + 100, firstLevelEndPoint, heightOfModel);
        ctx2.stroke();

        console.log(`First Level End Point: ${firstLevelEndPoint}`);
        //Cutting the rectangles
        const thirdLevelIntervalDistance =
          firstLevelEndPoint / thirdDenominator;
        console.log(
          `Distance for third Interval: ${thirdLevelIntervalDistance}`
        );
        let thirdCount = 1;
        for (
          let d3 = thirdLevelIntervalDistance;
          d3 <= firstLevelEndPoint;
          d3 += thirdLevelIntervalDistance
        ) {
          console.log(d3);
          ctx2.beginPath();
          ctx2.moveTo(x + d3, y + 100);
          ctx2.lineTo(x + d3, y + 100 + heightOfModel);
          ctx2.stroke();

          //SHADING

          if (thirdCount <= thirdNumerator) {
            ctx2.fillStyle = "red";
          } else {
            ctx2.fillStyle = "#CCDCEB";
          }
          console.log(
            `Count: ${thirdCount}, ${thirdNumerator}/${thirdDenominator}`
          );
          ctx2.fillRect(
            x + thirdLevelIntervalDistance * (thirdCount - 1),
            y + 100,
            thirdLevelIntervalDistance,
            30
          );
          ctx2.stroke();
          thirdCount += 1;
        }

        arrowHeadHorizontalLine(
          [x, y + 100 + heightOfModel + 10],
          [
            x + thirdLevelIntervalDistance * thirdNumerator,
            y + 100 + heightOfModel + 10,
          ],
          "Removed",
          "bottom"
        );
        arrowHeadHorizontalLine(
          [
            x + thirdLevelIntervalDistance * thirdNumerator,
            y + 100 + heightOfModel + 10,
          ],
          [x + firstLevelEndPoint, y + 100 + heightOfModel + 10],
          "Left",
          "bottom"
        );
      }

      const widthOfTopModel = 350;
      let topLevelTotal = p.numTwo;
      if (p.letterBTotal == "B") topLevelTotal = p.numOne + p.numTwo;
      console.log("Setting 3");
      secondCanvasTextId.innerHTML = `
      Second fraction is based on <u>A</u>.</br>
      Third fraction is based on <u>B</u>. </br>
      Hence, they are <u>unlike fractions</u>.</br>
      `;
      remainderConceptModel2Ways(
        50,
        80,
        widthOfTopModel,
        30,
        [p.numOne, topLevelTotal, "A"],
        [p.numFive, p.numSix, "B"],
        [p.numThree, p.numFour]
      );
    }
  }
  if (level == 5.16) {
    helpMe.innerHTML = `
      ${p.objectOneV} ${p.gender} -> ${p.objectTwoV}</br>
      1 ${p.gender == "girls" ? "girl" : "boy"} -> ${p.objectTwoV}/${
      p.objectOneV
    }`;
  }
  if (level == 6.05) {
    helpMe.textContent = `Distance = Speed x Time`;
  }

  //HEURISTICS TWO
  if (level == "heuTwo") {
    if (setting == 1) {
      helpMe.style.fontSize = "1em";
      const position = ["1st", "2nd", "3rd", "4th", "5th", "6th"];
      const indexOfFirstPosition = position.indexOf(p.positionOne);
      const indexOfSecondPosition = position.indexOf(p.positionTwo);
      const indexOfThirdPosition = position.indexOf(p.positionThree);
      const indexOfFourthPosition = position.indexOf(p.positionFour);
      const intervals = indexOfSecondPosition - indexOfFirstPosition;
      const intervalsTwo = indexOfFourthPosition - indexOfThirdPosition;
      console.log(indexOfSecondPosition);
      helpMe.innerHTML = `
      Note: <p style="color: red">Position - Position = Intervals</p>
       ${p.positionOne} ${" _____ ?".repeat(intervals - 1)} ____ ${
        p.positionTwo
      }</br>
       From the above, we can see that there are ${intervals} intervals between the two positions.</br>
       ${p.positionTwo} - ${p.positionOne} = ${intervals} intervals => ${
        p.distance
      } m</br>
       1 interval => ${p.distance} / ${intervals} = ${
        p.distance / intervals
      } m.</br>
      </br>
       Hint:</br>
       ${p.positionThree} ${" _____ ?".repeat(intervalsTwo - 1)} ____ ${
        p.positionFour
      }</br>
       `;
    }
  }

  //HEUTWOB
  if (level == "heuTwob") {
    if (setting == 1) {
      secondCanvasHelp();
      secondCanvasTextId.innerHTML = `
      3 reasons to draw comparison model.
      <ul>
        <li>Difference is given. ✓</li>
        <li>Find the difference.</li>
        <li>Unit sentence.</li>
      </ul>
      `;
      const numberOne = p.numOne;
      let numberTwo = undefined;
      if (p.rollVar == 0) {
        numberTwo = p.numOne - p.numTwo;
      } else {
        numberTwo = p.numOne + p.numTwo;
      }
      const [x1, y1, x2, y2] = comparisonModelDifference(
        [20, 60],
        "A",
        numberOne,
        "B",
        numberTwo,
        numberOne + numberTwo,
        "no",
        "yes"
      );

      //Question mark
      if (p.rollAB != "A") {
        if (numberOne > numberTwo) {
          console.log("A1");
          arrowHeadHorizontalLine(
            [x1, y1 - 10],
            [x1 + 60 + 120, y1 - 10],
            "?",
            "top"
          );
          arrowHeadHorizontalLine(
            [x2, y2 + 30 + 10],
            [x2 + 60, y2 + 30 + 10],
            numberOne.toString(),
            "bottom"
          );
        }
        if (numberOne < numberTwo) {
          console.log("A2");
          arrowHeadHorizontalLine(
            [x1, y1 - 10],
            [x1 + 60, y1 - 10],
            "?",
            "top"
          );
          arrowHeadHorizontalLine(
            [x2, y2 + 30 + 10],
            [x2 + 60 + 120, y2 + 30 + 10],
            numberTwo.toString(),
            "bottom"
          );
        }
      }

      if (p.rollAB != "B") {
        if (numberOne > numberTwo) {
          console.log("B1");
          arrowHeadHorizontalLine(
            [x2, y2 + 30 + 10],
            [x2 + 60, y2 + 30 + 10],
            "?",
            "bottom"
          );
          arrowHeadHorizontalLine(
            [x1, y1 - 10],
            [x1 + 60 + 120, y1 - 10],
            numberOne.toString(),
            "top"
          );
        }
        if (numberOne < numberTwo) {
          console.log("B2");
          arrowHeadHorizontalLine(
            [x2, y2 + 30 + 10],
            [x2 + 60 + 120, y2 + 30 + 10],
            "?",
            "bottom"
          );
          arrowHeadHorizontalLine(
            [x1, y1 - 10],
            [x1 + 60, y1 - 10],
            numberOne.toString(),
            "top"
          );
        }
      }
    }
    if (setting == 2) {
      secondCanvasHelp();
      secondCanvasTextId.innerHTML = `
      <strong>None</strong> of 3 reasons to draw comparison model is present.
      <ul>
        <li>Difference is given.</li>
        <li>Find the difference.</li>
        <li>Unit sentence.</li>
      </ul>
      Hence we draw a straight line model instead.
      `;
      if (p.type == 1) {
        straightLineModel([20, 60], "?", p.numOne + p.numTwo, [
          p.objectOne,
          p.numOne,
          p.objectTwo,
          p.numTwo,
        ]);
      }
      if (p.type == 2) {
        straightLineModel([20, 60], "?", p.numOne + p.numTwo, [
          "spent",
          p.numOne,
          "left",
          p.numTwo,
        ]);
      }
    }
    if (setting == 3) {
      secondCanvasHelp();
      secondCanvasTextId.innerHTML = `
      <strong>None</strong> of 3 reasons to draw comparison model is present.
      <ul>
        <li>Difference is given.</li>
        <li>Find the difference.</li>
        <li>Unit sentence.</li>
      </ul>
      Hence we draw a straight line model instead.
      `;
      if (p.type == 1) {
        if (p.roll == 0) {
          straightLineModel([20, 60], p.numTotal, p.numTotal, [
            p.objectOne,
            p.numOne,
            "?",
            p.numTwo,
          ]);
        }
        if (p.rollChoice == 1) {
          straightLineModel([20, 60], p.numTotal, p.numTotal, [
            "?",
            p.numOne,
            p.objectTwo,
            p.numTwo,
          ]);
        }
      }
      if (p.type == 2) {
        if (p.rollChoice == 0) {
          straightLineModel([20, 60], p.numTotal, p.numTotal, [
            "spent",
            p.numOne,
            "?",
            p.numTwo,
          ]);
        }
        if (p.rollChoice == 1) {
          straightLineModel([20, 60], p.numTotal, p.numTotal, [
            "?",
            p.numOne,
            "left",
            p.numTwo,
          ]);
        }
      }
    }
    if (setting == 4) {
      secondCanvasTextId.innerHTML = `
      3 reasons to draw comparison model.
      <ul>
        <li>Difference is given.</li>
        <li>Find the difference. ✓</li>
        <li>Unit sentence.</li>
      </ul>
      `;
      secondCanvasHelp();
      if (p.rollChoice2 == "B") {
        const [x1, y1, x2, y2] = comparisonModelDifference(
          [20, 60],
          p.objectOne,
          p.numOne,
          p.objectTwo,
          p.numTwo,
          p.numOne + p.numTwo,
          "yes",
          "no"
        );
        //NUMBER ONE IS GIVEN
        if (p.rollChoice3 == 0) {
          if (p.numOne > p.numTwo) {
            console.log("A1");

            //top if longer
            arrowHeadHorizontalLine(
              [x1, y1 - 10],
              [x1 + 60 + 120, y1 - 10],
              p.numOne.toString(),
              "top"
            );
          } else {
            //top is shorter
            arrowHeadHorizontalLine(
              [x1, y1 - 10],
              [x2 + 60, y1 - 10],
              p.numOne.toString(),
              "top"
            );
          }
          //NUMBER TWO IS GIVEN
        } else {
          if (p.numOne < p.numTwo) {
            console.log("B1");
            //bottom if longer
            arrowHeadHorizontalLine(
              [x2, y2 + +30 + 10],
              [x2 + 60 + 120, y2 + 30 + 10],
              p.numTwo.toString(),
              "bottom"
            );
          } else {
            //bottom if shorter
            arrowHeadHorizontalLine(
              [x2, y2 + 10 + 30],
              [x2 + 60, y2 + 10 + 30],
              p.numTwo.toString(),
              "bottom"
            );
          }
        }
      }

      if (p.rollChoice2 == "A") {
        const [x1, y1, x2, y2] = comparisonModelDifference(
          [20, 60],
          p.objectOne,
          p.numOne,
          p.objectTwo,
          p.numTwo,
          p.numOne + p.numTwo,
          "no",
          "no"
        );
        if (p.numOne > p.numTwo) {
          console.log("A1");
          arrowHeadHorizontalLine(
            [x1, y1 - 10],
            [x1 + 60 + 120, y1 - 10],
            p.numOne.toString(),
            "top"
          );
          arrowHeadHorizontalLine(
            [x2, y2 + 10 + 30],
            [x2 + 60, y2 + 10 + 30],
            p.numTwo.toString(),
            "bottom"
          );
        }

        if (p.numOne < p.numTwo) {
          console.log("B1");
          arrowHeadHorizontalLine(
            [x1, y1 - 10],
            [x2 + 60, y1 - 10],
            p.numOne.toString(),
            "top"
          );
          arrowHeadHorizontalLine(
            [x2, y2 + +30 + 10],
            [x2 + 60 + 120, y2 + 30 + 10],
            p.numTwo.toString(),
            "bottom"
          );
        }
      }
    }
    // UNIT SENTENCE
    if (setting == 5) {
      secondCanvasHelp();
      secondCanvasTextId.innerHTML = `
      <strong>${p.objectOne} is ${p.unitSentence} times of ${p.objectTwo}.</strong></br>
      1. Draw ${p.unitSentence} units for ${p.objectOne}.</br>
      2. Draw 1 unit for ${p.objectTwo}.</br>
      3. Fill in the rest of the information.</br>
      `;
      function unitSentence(start, varA, unitA, varB, unitB, total) {
        const [x1, y1] = start;
        //FILL IN VARIABLE NAME
        ctx2.font = "1em arial";
        ctx2.fillText(varA, x1, y1);
        ctx2.fillText(varB, x1, y1 + 40);

        //DRAWING UNITS
        const sizeOfUnit = [40, 30];
        const startPositionForVarA = [x1 + 20, y1 - 20];
        //start position of first variable
        ctx2.beginPath();
        for (let x = 0; x < unitA; x++) {
          ctx2.rect(
            startPositionForVarA[0] + x * sizeOfUnit[0],
            startPositionForVarA[1],
            sizeOfUnit[0],
            sizeOfUnit[1]
          );
        }
        //SECOND VARIABLE
        const startPositionForVarB = [
          startPositionForVarA[0],
          startPositionForVarA[1] + 40,
        ];
        for (let x = 0; x < unitB; x++) {
          ctx2.rect(
            startPositionForVarB[0] + x * sizeOfUnit[0],
            startPositionForVarB[1],
            sizeOfUnit[0],
            sizeOfUnit[1]
          );
        }
        ctx2.stroke();
        if (p.rollLineTwo == "A") {
          arrowHeadHorizontalLine(
            [startPositionForVarA[0], startPositionForVarA[1] - 10],
            [
              startPositionForVarA[0] + sizeOfUnit[0] * unitA,
              startPositionForVarA[1] - 10,
            ],
            p.varA,
            "top"
          );
        } else if (p.rollLineTwo == "B") {
          //IF MORE THAN 1 UNIT
          if (unitB > 1) {
            arrowHeadHorizontalLine(
              [
                startPositionForVarB[0],
                startPositionForVarB[1] + sizeOfUnit[1] + 10,
              ],
              [
                startPositionForVarB[0] + sizeOfUnit[0] * unitB,
                startPositionForVarB[1] + sizeOfUnit[1] + 10,
              ],
              p.varB,
              "bottom"
            );
          } else {
            ctx2.fillText(
              p.varB,
              startPositionForVarB[0] + 10,
              startPositionForVarB[1] + 20
            );
          }
          //TOTAL
        } else {
          const totalStart =
            startPositionForVarA[0] + sizeOfUnit[0] * unitA + 10;
          arrowHeadVerticalLine(
            [totalStart, startPositionForVarA[1]],
            [totalStart, startPositionForVarB[1] + sizeOfUnit[1]],
            p.total,
            "right"
          );
        }

        if (p.rollLineThree == "A") {
          arrowHeadHorizontalLine(
            [startPositionForVarA[0], startPositionForVarA[1] - 10],
            [
              startPositionForVarA[0] + sizeOfUnit[0] * unitA,
              startPositionForVarA[1] - 10,
            ],
            "?",
            "top"
          );
        } else if (p.rollLineThree == "B") {
          //IF MORE THAN 1 UNIT
          if (unitB > 1) {
            arrowHeadHorizontalLine(
              [
                startPositionForVarB[0],
                startPositionForVarB[1] + sizeOfUnit[1] + 10,
              ],
              [
                startPositionForVarB[0] + sizeOfUnit[0] * unitB,
                startPositionForVarB[1] + sizeOfUnit[1] + 10,
              ],
              "?",
              "bottom"
            );
          } else {
            ctx2.fillText(
              "?",
              startPositionForVarB[0] + 10,
              startPositionForVarB[1] + 20
            );
          }
          //TOTAL
        } else {
          const totalStart =
            startPositionForVarA[0] + sizeOfUnit[0] * unitA + 10;
          arrowHeadVerticalLine(
            [totalStart, startPositionForVarA[1]],
            [totalStart, startPositionForVarB[1] + sizeOfUnit[1]],
            "?",
            "right"
          );
        }
      }
      unitSentence(
        [20, 60],
        p.objectOne,
        p.unitSentence,
        p.objectTwo,
        1,
        p.total
      );
    }
  }
  // HEURISTICS THREE
  if (level == "heuThree") {
    if (setting == 1) {
      secondCanvasTextId.innerHTML = `
      1. Change one variable to another using small difference. ( + or - )</br>
      + to change to the larger variable, - to change to the smaller variable.</br>
      2. Divide by 2 (Since there are now 2 of it).
      <hr>
      `;
      secondCanvasHelp();
      comparisonModelDifference(
        [20, 50],
        p.objectOne,
        p.numOne,
        p.objectTwo,
        p.numTwo,
        p.numOne + p.numTwo,
        "yes",
        "yes"
      );
    }

    if (setting == 2) {
      helpMe.innerHTML = `
          1. Let all be the other variable.<p>
          2. Find big difference. </p>
          3. Find small difference. </p>
          eg. This allows you to change 1 variable to another.</p>
          4. Big difference/small difference</p>
          `;
    }
    if (setting == 3) {
      // helpMe.innerHTML = `
      //     Unit version.</p>
      //     Reminder: Start with quantity.</p>
      //     1. Convert first variable into units.</p>
      //     eg. Quantity x Units</p>
      //     2. Convert second variable into units.</p>
      //     3. Add the units together.</p>
      //     4. Divide to find one unit.</p>
      //     Maybe 5. Find ${p.objectOne} by multiplying ${p.unitSentence}.</p>
      //     `;
      secondCanvasHelp();
      ctx2.font = "1em arial";
      ctx2.fillText("Expanded model", 50, 20);
      function multipleUnitModel(
        start,
        nameA,
        unitA,
        quanA,
        nameB,
        unitB,
        quanB,
        total
      ) {
        const [x1, y1] = start;
        const modelSize = [60, 30];
        const space = 10;
        const modelStartX = x1 + 20;
        const modelStartY = y1 - 20;
        for (let y = 0; y < quanA; y++) {
          for (let x = 0; x < unitA; x++) {
            ctx2.fillText(nameA, x1, y1 + y * 40);
            ctx2.beginPath();
            ctx2.rect(
              modelStartX + modelSize[0] * x,
              modelStartY + y * 40,
              modelSize[0],
              modelSize[1]
            );
            ctx2.stroke();
          }
        }
        const nextStartX = modelStartX;
        const nextStartY = y1 - 20 + 40 * quanA;
        for (let y = 0; y < quanB; y++) {
          for (let x = 0; x < unitB; x++) {
            console.log(x, y, nameB, unitB, quanB);
            ctx2.fillText(nameB, x1, nextStartY + 20 + y * 40);
            ctx2.beginPath();
            ctx2.rect(
              nextStartX + modelSize[0] * x,
              nextStartY + y * 40,
              modelSize[0],
              modelSize[1]
            );
            ctx2.stroke();
          }
        }

        arrowHeadVerticalLine(
          [modelStartX + modelSize[0] * unitA + 10, modelStartY],
          [
            modelStartX + modelSize[0] * unitA + 10,
            modelStartY + 40 * (quanA + quanB) - space,
          ],
          total,
          "right"
        );
      }
      secondCanvasTextId.innerHTML = `
      1. Draw ${p.unitSentence} units for ${p.objectOne} ${p.objectOneX} ${
        p.objectOneX == 1 ? "time" : "times"
      }.</br>
      2. Draw 1 unit for ${p.objectTwo} ${p.objectTwoX} ${
        p.objectTwoX == 1 ? "time" : "times"
      }.</br>
      3. Fill in the rest.</br>
      <hr>
      `;
      multipleUnitModel(
        [50, 60],
        p.objectOne,
        p.unitSentence,
        p.objectOneX,
        p.objectTwo,
        1,
        p.objectTwoX,
        p.totalValue
      );
    }

    if (setting == 4) {
      secondCanvasTextId.innerHTML = `
            Difference version.</p>
            1. Identify the small difference.</p>
            2. Change the <i>other variable</i> into the <i>wanted variable</i>.</p>
            3. Add the number of variables together.</p>
            4. Divide to find one variable.</p>
            `;
      secondCanvasHelp();
      ctx2.font = "1em arial";
      ctx2.fillText("Expanded model", 50, 20);
      function underTheSameUnitDifference(
        start,
        objectOne,
        objectOneV,
        objectOneQ,
        objectTwo,
        objectTwoV,
        objectTwoQ,
        total
      ) {
        console.log("Fill in variable name");
        let [x1, y1] = start;
        let x1VarNameCoor = x1;
        let y1VarNameCoor = y1;
        console.log("VarA");
        for (let i = 0; i < objectOneQ; i++) {
          ctx2.fillText(objectOne, x1VarNameCoor, y1VarNameCoor);
          y1VarNameCoor += 40;
        }
        console.log("VarB");
        for (let i = 0; i < objectTwoQ; i++) {
          ctx2.fillText(objectTwo, x1VarNameCoor, y1VarNameCoor);
          y1VarNameCoor += 40;
        }
        console.log("Draw common units");
        const modelSize = [60, 30];
        const modelStartX = x1 + 40;
        ctx2.beginPath();
        for (let i = 0; i < objectOneQ + objectTwoQ; i++) {
          ctx2.rect(
            modelStartX,
            30 + (modelSize[1] + 10) * i,
            modelSize[0],
            modelSize[1]
          );
        }

        console.log("Draw difference");
        if (objectOneV > objectTwoV) {
          for (let i = 0; i < objectOneQ; i++) {
            let currentX = modelStartX + modelSize[0];
            let currentY = 30 + (modelSize[1] + 10) * i;
            ctx2.rect(currentX, currentY, modelSize[0] * 2, modelSize[1]);
            ctx2.fillText(
              Math.abs(objectOneV - objectTwoV),
              currentX + 40,
              currentY + 20
            );
          }
        } else {
          for (let i = 0; i < objectTwoQ; i++) {
            let currentX = modelStartX + modelSize[0];
            let currentY =
              30 + objectOneQ * (modelSize[1] + 10) + (modelSize[1] + 10) * i;
            ctx2.rect(currentX, currentY, modelSize[0] * 2, modelSize[1]);
            ctx2.fillText(
              Math.abs(objectOneV - objectTwoV),
              currentX + 40,
              currentY + 20
            );
          }
        }
        ctx2.stroke();
        console.log(`Draw Total ${total}`);

        arrowHeadVerticalLine(
          [modelStartX + modelSize[0] * 3 + 10, 30],
          [
            modelStartX + modelSize[0] * 3 + 10,
            30 + 40 * (objectOneQ + objectTwoQ) - 10,
          ],
          total,
          "right"
        );
      }
      underTheSameUnitDifference(
        [20, 50],
        p.objectOne,
        p.objectOneV,
        p.objectOneQ,
        p.objectTwo,
        p.objectTwoV,
        p.objectTwoQ,
        p.totalValue
      );
    }
    if (setting == 5) {
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
    if (setting == 8) {
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

    //DOUBLE EFFECT
    if (setting == 7) {
      secondCanvasTextId.innerHTML = `
            Internal Transfer.</p>
            1. Same, give 1/2 difference.</p>
            2. Double Effect. ✅</p>
            3. Unchanged Total.</p>
            `;
      secondCanvasHelp();
      ctx2.font = "1em arial";

      function doubleEffectLessThanHalf(
        varAName,
        varAValue,
        varBName,
        varBValue,
        transfer,
        difference,
        transferVar
      ) {
        //NAMES
        modelVariableNames([20, 50], [varAName, varBName], [1, 1]);
        //SAME SIZE MODEL
        let row = 0;
        ctx2.beginPath();
        for (let i = 0; i < 2; i++) {
          ctx2.rect(40, 30 + 40 * row, 60, 30);
          row += 1;
        }
        ctx2.stroke();
        // FIRST VARIABLE IS LARGER.
        ctx2.beginPath();
        if (varAValue > varBValue || difference > 0) {
          ctx2.rect(100, 30, 120, 30);
          ctx2.stroke();
          arrowHeadHorizontalLine(
            [100, 30 - 7],
            [100 + 120, 30 - 7],
            difference,
            "top"
          );
          if (transferVar == "A") {
            //FIRST VARIABLE IS LARGER AND TRANSFERING FROM A.
            ctx2.beginPath();
            ctx2.moveTo(200, 0);
            ctx2.lineTo(200, 90);
            ctx2.stroke();
            const cutSizeX = 20;
            const cutSizeY = 30;
            //DEPARTURE
            ctx2.fillStyle = "red";
            ctx2.fillRect(200, 30, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, 200 + 5, 50);
            //ARRIVAL
            const startBlueX = 40 + 60;
            const endBlueX = startBlueX + cutSizeX;
            ctx2.fillStyle = "lightblue";
            ctx2.fillRect(startBlueX, 30 + 40, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, 40 + 60 + 5, 90);
            arrowHeadHorizontalLine(
              [endBlueX, 30 + 40 + 30],
              [40 + 60 + 120 - cutSizeX, 30 + 40 + 30],
              "?",
              "bottom"
            );
          } else {
            //FIRST VARIABLE IS LARGER AND TRANSFERING FROM B.
            ctx2.beginPath();
            ctx2.moveTo(80, 0);
            ctx2.lineTo(80, 120);
            ctx2.stroke();
            const cutSizeX = 20;
            const cutSizeY = 30;
            //DEPARTURE
            ctx2.fillStyle = "red";
            const startRedX = 40 + 60 - 20;
            const startRedY = 30 + 40;
            ctx2.fillRect(startRedX, startRedY, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, startRedX + 5, startRedY + 20);
            ctx2.fillText(transfer, 40 + 60 - 20 + 5, 30 + 20);
            //ARRIVAL
            const startBlueX = 40 + 60 + 120;
            const endBlueX = startBlueX + cutSizeX;
            const startBlueY = 30;
            ctx2.fillStyle = "lightblue";
            ctx2.fillRect(startBlueX, startBlueY, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, startBlueX + 5, startBlueY + 20);
            arrowHeadHorizontalLine(
              [startRedX, startRedY + 30 + 10],
              [startBlueX + cutSizeX, startRedY + 30 + 10],
              "?",
              "bottom"
            );
          }
        } else {
          ctx2.rect(100, 70, 120, 30);
          ctx2.stroke();
          arrowHeadHorizontalLine(
            [100, 70 + 30 + 10],
            [100 + 120, 70 + 30 + 10],
            Math.abs(difference),
            "bottom"
          );
          if (transferVar == "A") {
            //FIRST VARIABLE IS SMALLER AND TRANSFERING FROM A.
            ctx2.beginPath();
            ctx2.moveTo(80, 0);
            ctx2.lineTo(80, 120);
            ctx2.stroke();
            const cutSizeX = 20;
            const cutSizeY = 30;
            //DEPARTURE
            ctx2.fillStyle = "red";
            const startRedX = 40 + 60 - 20;
            const startRedY = 30;
            ctx2.fillRect(startRedX, startRedY, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, startRedX + 5, startRedY + 20);
            ctx2.fillText(transfer, 40 + 60 - 20 + 5, 30 + 40 + 20);
            //ARRIVAL
            const startBlueX = 40 + 60 + 120;
            const endBlueX = startBlueX + cutSizeX;
            const startBlueY = 30 + 40;
            ctx2.fillStyle = "lightblue";
            ctx2.fillRect(startBlueX, startBlueY, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, startBlueX + 5, startBlueY + 20);
            arrowHeadHorizontalLine(
              [startRedX, startRedY - 10],
              [startBlueX + cutSizeX, startRedY - 10],
              "?",
              "bottom"
            );
          } else {
            //FIRST VARIABLE IS SMALLER AND TRANSFERING FROM B.
            ctx2.beginPath();
            ctx2.moveTo(200, 50);
            ctx2.lineTo(200, 120);
            ctx2.stroke();

            const cutSizeX = 20;
            const cutSizeY = 30;
            //DEPARTURE
            ctx2.fillStyle = "red";
            const startRedX = 40 + +60 + 120 - 20;
            const startRedY = 30 + 40;
            ctx2.fillRect(startRedX, startRedY, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, startRedX + 5, startRedY + 20);
            // ctx2.fillText(transfer, 40 + 60 - 20 + 5, 30 + 40 + 20);
            //ARRIVAL
            const startBlueX = 40 + 60;
            const endBlueX = startBlueX + cutSizeX;
            const startBlueY = 30;
            ctx2.fillStyle = "lightblue";
            ctx2.fillRect(startBlueX, startBlueY, cutSizeX, cutSizeY);
            ctx2.fillStyle = "black";
            ctx2.fillText(transfer, startBlueX + 5, startBlueY + 20);
            arrowHeadHorizontalLine(
              [startBlueX + cutSizeX, 30 - 7],
              [startRedX, 30 - 7],
              "?",
              "top"
            );
          }
        }
      }
      doubleEffectLessThanHalf(
        p.objectOne,
        0,
        p.objectTwo,
        0,
        p.transferV,
        p.difference,
        p.transfer
      );
    }
  }
  if (level == "heuThreeb") {
    if (setting == 1) {
      secondCanvasHelp();
      if (p.compA == "unit" && p.compB == "unit") {
        secondCanvasTextId.innerHTML = `
        Since both clues are unit sentences.</br>
        We will start with the one that comes first.</br>
        <i>${p.lineOne}</i>.</br>
        Followed by:</br>
        <i>${p.lineTwo}</i></br>
        Since B has already been drawn. <strong>DO NOT</strong> make it longer or shorter.
        Just cut it into the stated number of pieces and then do the same for A.
        `;
        let C = 1;
        let B = 1 * p.unitB;
        let A = B * p.unitA;
        unitSentence([20, 50], ["A", A, "B", B, "C", C], p.total);
      }
      if (p.compA == "unit" && p.compB == "comp") {
        let unitLine = p.lineOne;
        let diffLine = p.lineTwo;
        if (!p.lineOne.includes("times")) {
          unitLine = p.lineTwo;
          diffLine = p.lineOne;
        }
        secondCanvasTextId.innerHTML = `
        Since there are both difference and unit sentence.</br>
        We will start with the unit sentence first.</br>
        <i>${unitLine}</i>.</br>
        Followed by:</br>
        <i>${diffLine}</i></br>
        Since B has already been drawn. <strong>DO NOT</strong> make it longer or shorter.
        Just draw C ${diffLine.includes("less") ? "longer" : "shorter"} than B.
        `;

        let B = 1;
        let A = B * p.unitA;
        // unitSentence([20, 50], ["A", A, "B", B], p.total);
        unitSentenceWithDifference(
          [20, 50],
          ["A", A, "B", B],
          p.valueC,
          p.valueB,
          p.total,
          "C",
          1
        );
      }
      if (p.compA == "comp" && p.compB == "unit") {
        let unitLine = p.lineOne;
        let diffLine = p.lineTwo;
        if (!p.lineOne.includes("times")) {
          unitLine = p.lineTwo;
          diffLine = p.lineOne;
        }
        secondCanvasTextId.innerHTML = `
        Since there are both difference and unit sentence.</br>
        We will start with the unit sentence first.</br>
        <i>${unitLine}</i>.</br>
        Followed by:</br>
        <i>${diffLine}</i></br>
        Since B has already been drawn. <strong>DO NOT</strong> make it longer or shorter.
        Just draw A ${diffLine.includes("more") ? "longer" : "shorter"} than B.
        `;

        let C = 1;
        let B = C * p.unitB;
        // unitSentence([20, 50], ["A", A, "B", B], p.total);
        unitSentenceWithDifference(
          [20, 50],
          ["B", B, "C", C],
          p.valueA,
          p.valueB,
          p.total,
          "A",
          0
        );
      }
      if (p.compA == "comp" && p.compB == "comp") {
        doubleDifference(
          [20, 50],
          ["A", p.valueA, "B", p.valueB, "C", p.valueC],
          p.total
        );
      }
    }
  }
  // HEURISTICS FOUR
  if (level == "heuFour") {
    if (setting == 1) {
      let groupOneArr = [];
      for (let x = p.leftOne; x < p.max; x += p.groupOne) {
        if (x > p.min) groupOneArr.push(x);
      }
      if (groupOneArr[0] - p.groupOne != 0)
        groupOneArr.unshift(groupOneArr[0] - p.groupOne);
      let groupTwoArr = [];
      for (let x = p.leftTwo; x < p.max; x += p.groupTwo) {
        if (x > p.min) groupTwoArr.push(x);
      }
      if (groupTwoArr[0] - p.groupTwo != 0)
        groupTwoArr.unshift(groupTwoArr[0] - p.groupTwo);
      helpMe.innerHTML = `
      Since the number of packs can change; we know this is systematic listing. Not Excess and shortage. </br>
      <p>
      List both scenarios as close as possible to the range but stop one set before it. </br>

      x${p.groupOne} ${p.leftOne != 0 ? `+${p.leftOne}` : ""}</br>
      ${groupOneArr.join(", ")}</br>

      x${p.groupTwo} ${p.leftTwo != 0 ? `+${p.leftTwo}` : ""}</br>
      ${groupTwoArr.join(", ")}</br>
      `;
    }
    if (setting == 2) {
      secondCanvasHelp();
      secondCanvasTextId.innerHTML = `
           If <strong>Excess</strong>: Draw on the left (underspent)</br>
           If <strong>Shortage</strong>: Draw on the right (overspent)</br>
           <hr>
           1. Find big difference.</p>
           2. Find small difference.</p>
           3. Big difference / small difference = Groups </p> 
           Maybe 4. Find ${setting == 2 ? `Person ${p.objectOne}` : "sweets"}.
      `;
      const width = canvas2.width;
      // console.log(length, width);
      // ctx2.translate(width / 2, 200);
      ctx2.font = "1em arial";
      ctx2.lineWidth = 3;
      ctx2.beginPath();
      ctx2.moveTo(width * 0.1, 100);
      ctx2.lineTo(width * 0.9, 100);
      ctx2.stroke();

      ctx2.translate(width / 2, 100);
      ctx2.beginPath();
      ctx2.moveTo(0, 40);
      ctx2.lineTo(0, -40);
      ctx2.stroke();

      ctx2.lineWidth = 1;
      let multi = 2;
      if (Math.abs(p.objectOneS) < 50 || Math.abs(p.objectTwoS) < 50) multi = 3;
      if (Math.abs(p.objectOneS) < 20 || Math.abs(p.objectTwoS) < 20) multi = 4;
      if (Math.abs(p.objectOneS) < 10 || Math.abs(p.objectTwoS) < 10) multi = 5;
      const firstX = p.objectOneS * multi;
      console.log(firstX);
      //FIRST
      ctx2.beginPath();
      ctx2.moveTo(-firstX, 5);
      ctx2.lineTo(-firstX, -30);
      ctx2.stroke();
      ctx2.fillText(
        `${p.objectOneQ} ${p.objects}`,
        -firstX - p.objects.length * 3,
        -50
      );
      if (p.objectOneS < 0) {
        arrowHeadHorizontalLine(
          [0, -20],
          [-firstX, -20],

          `$${Math.abs(p.objectOneS)}`,
          "top"
        );
      } else {
        arrowHeadHorizontalLine(
          [-firstX, -20],
          [0, -20],
          `$${p.objectOneS}`,
          "top"
        );
      }

      const secondX = p.objectTwoS * multi;
      //SECOND
      ctx2.beginPath();
      ctx2.moveTo(-secondX, -5);
      ctx2.lineTo(-secondX, 30);
      ctx2.stroke();
      ctx2.fillText(
        `${p.objectTwoQ} ${p.objects}`,
        -secondX - p.objects.length * 3,
        45
      );
      if (p.objectTwoS < 0) {
        arrowHeadHorizontalLine(
          [0, 20],
          [-secondX, 20],

          `$${Math.abs(p.objectTwoS)}`,
          "bottom"
        );
      } else {
        arrowHeadHorizontalLine(
          [-secondX, 20],
          [0, 20],
          `$${p.objectTwoS}`,
          "bottom"
        );
      }
    }

    if (setting == 3) {
      // helpMe.innerHTML = `
      // excess & excess = -</p>
      // short & short = -</p>
      // excess & short = + </p>
      // 1. Find big difference.</p>
      // 2. Find small difference.</p>
      // 3. Big difference / small difference = Groups </p>
      // Maybe 4. Find ${setting == 2 ? `Person ${p.objectOne}` : "sweets"}.
      // `;
      secondCanvasHelp();
      p.situationTwo = p.numberOfStuff - p.sceneTwo * p.numberOfStudents;
      const smallD = p.sceneTwo - p.sceneOne;
      secondCanvasTextId.innerHTML = `
      <table>
        <tr>
          <td>First Scenario</td>
          <td>x${p.sceneOne}</td>
          <td>${p.situationOne < 0 ? p.situationOne : `+${p.situationOne}`}</td>
        </tr>
        <tr>
          <td>Second Scenario</td>
          <td>x${p.sceneTwo}</td>
          <td> ${
            p.situationTwo < 0 ? p.situationTwo : `+${p.situationTwo}`
          }</td> 
       </tr>
       <tr>
       <td>Change</td>
       <td>+${smallD}</td>
       <td>${Math.abs(p.situationTwo - p.situationOne)}</td>
     </tr>
      </table>
      Explanation:</br>
      To go from ${p.sceneOne} sweets per student to ${
        p.sceneTwo
      } sweets per student.</br>
      Each student needs another ${smallD} ${
        smallD == 1 ? "sweet" : "sweets"
      }.</br>
      For that to happen, another ${Math.abs(
        p.situationTwo - p.situationOne
      )} more sweets are needed.
      `;

      const width = canvas2.width;
      // console.log(length, width);
      // ctx2.translate(width / 2, 200);

      ctx2.font = "1em arial";
      ctx2.lineWidth = 3;
      ctx2.beginPath();
      ctx2.moveTo(width * 0.05, 100);
      ctx2.lineTo(width * 0.95, 100);
      ctx2.stroke();

      ctx2.translate(width / 2, 100);
      ctx2.beginPath();
      ctx2.moveTo(0, 40);
      ctx2.lineTo(0, -40);
      ctx2.stroke();

      let multi = 2;
      if (Math.abs(p.situationOne) < 50 || Math.abs(p.situationTwo) < 50)
        multi = 3;
      if (Math.abs(p.situationOne) < 20 || Math.abs(p.situationTwo) < 20)
        multi = 4;
      if (Math.abs(p.situationOne) < 10 || Math.abs(p.situationTwo) < 10)
        multi = 5;
      ctx2.lineWidth = 1;
      const firstX = p.situationOne * multi;
      ctx2.translate(0, 0);
      ctx2.beginPath();
      ctx2.moveTo(-firstX, 5);
      ctx2.lineTo(-firstX, -30);
      ctx2.stroke();
      ctx2.fillText(`${p.situationOne} sweets`, -firstX - 6 * 3, -50);

      const secondX = p.situationTwo * multi;
      ctx2.translate(0, 0);
      ctx2.beginPath();
      ctx2.moveTo(-secondX, -5);
      ctx2.lineTo(-secondX, 30);
      ctx2.stroke();
      ctx2.fillText(`${p.situationTwo} sweets`, -secondX - 6 * 3, 45);

      console.log(p.situationOne);
      console.log(p.situationTwo);
      const range = Math.abs(p.situationTwo - p.situationOne) * multi;
      const interval = range / p.numberOfStudents;
      ctx2.strokeStyle = "red";
      ctx2.lineWidth = 2;
      let times = 0;
      let stop = range / interval;
      for (let x = -firstX + interval; times < stop; x += interval) {
        console.log(x, range, interval);
        ctx2.beginPath();
        ctx2.moveTo(x, 5);
        ctx2.lineTo(x, -5);
        ctx2.stroke();
        times += 1;
      }
      ctx2.strokeStyle = "black";
    }

    if (setting == 4) {
      helpMe.innerHTML = `
            1. Find the number of workers that turned up.</p>
            2. Find the total amount of extra work.</p>
            3. Find what each worker were suppose to do.</p>
            Maybe 4. Find the total.</p>
            `;
    }
    if (setting == 5) {
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
    if (p.rollz == 6) {
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
    if (setting == 7) {
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
}
