import { updateProblems, genNumbers } from "./script.js";

const resultSide = (plusLimit, multiMini, multiMax) => {
  const symbol = ["+", "-", "*", "/"][genNumbers(4)];
  let numOne;
  let numTwo;
  let statementArr = [];
  if (symbol == "+") {
    plusLimit /= 2;
    numOne = genNumbers(plusLimit) + plusLimit / 5;
    numTwo = genNumbers(plusLimit) + plusLimit / 5;
  }
  if (symbol == "-") {
    // plusLimit /= 2;
    numOne = genNumbers(plusLimit * 0.8) + plusLimit / 5;
    numTwo = genNumbers(numOne);
    console.log(numOne, numTwo);
  }
  if (symbol == "*") {
    // plusLimit /= 2;
    numOne = genNumbers(plusLimit / multiMax);
    numTwo = genNumbers(multiMax - multiMini) + multiMini;
    console.log(numOne, numTwo);
    if (numOne == 0) {
      return "Error";
    }
  }
  if (symbol == "/") {
    // plusLimit /= 2;
    numOne = genNumbers(plusLimit);
    numTwo = genNumbers(multiMax - multiMini) + multiMini;
    while (numOne % numTwo != 0) {
      numTwo -= 1;
      if (numTwo < multiMini) {
        console.log("Divisor is too small");
        return "Error";
      }
    }
  }
  statementArr.push(numOne, symbol, numTwo);
  const result = eval(statementArr.join(""));
  if (result > plusLimit) {
    console.log("Exceeded limit");
    return "Error";
  }
  if (statementArr.includes("*")) {
    const index = statementArr.indexOf("*");
    statementArr.splice(index, 1, "x");
  }
  if (statementArr.includes("/")) {
    const index = statementArr.indexOf("/");
    statementArr.splice(index, 1, "÷");
  }
  return {
    statementArr: statementArr.join(" "),
    result,
  };
};

const blankSide = (results, plusLimit, multiMini, multiMax) => {
  let symbol = ["+", "-", "x", "/"][genNumbers(4)];
  const blank = ["A", "B"][genNumbers(1)];
  let statementArr = [];
  let num;
  let answer;

  if (blank == "A") {
    // ____ +-x/ "Number"
    statementArr.push("___");
    if (symbol == "+") {
      num = genNumbers(results - 1) + 1;
      statementArr.push("+");
      answer = results - num;
    }
    if (symbol == "-") {
      num = genNumbers(results - 1) + 1;
      statementArr.push("-");
      answer = results + num;
      if (answer < 0) return "Error";
    }

    if (symbol == "x") {
      num = genNumbers(multiMax - multiMini) + multiMini;
      statementArr.push("x");
      answer = results / num;
      console.log(num);
      while (results % num != 0) {
        // console.log("Down the rabbit hole");
        num -= 1;
        // console.log(`Changing divisor: ${num}`);
        answer = results / num;
        if (num < multiMini) {
          console.log("Updating");
          return "Error";
        }
      }
    }
    if (symbol == "/") {
      symbol = "÷";
      num = genNumbers(multiMax - multiMini) + multiMini;
      statementArr.push("÷");
      answer = results * num;
    }
    statementArr.push(num);
  }
  if (blank == "B") {
    //"Number" +-x/ _____
    if (symbol == "+") {
      num = genNumbers(results);
      // statementArr.push("+");
      answer = results - num;
    }
    if (symbol == "-") {
      num = genNumbers(plusLimit - results) + results;
      // statementArr.push("-");
      answer = num - results;
      if (answer < 0) return "Error";
    }

    if (symbol == "x") {
      num = genNumbers(multiMax - multiMini) + multiMini;
      // statementArr.push("x");
      answer = results / num;
      console.log(num);
      while (results % num != 0) {
        // console.log("Down the rabbit hole");
        num -= 1;
        // console.log(`Changing divisor: ${num}`);
        answer = results / num;
        if (num < multiMini) {
          console.log("Updating");
          return "Error";
        }
      }
    }
    if (symbol == "/") {
      // console.log("No division");
      // return "Error";
      num = genNumbers(multiMax - multiMini) + multiMini;
      statementArr.push("÷");
      answer = results * num;
    }
    statementArr.push(num, symbol, "_____");
  }
  if (answer > plusLimit) {
    console.log("Exceeded limit");
    return "Error";
  }
  return {
    statementArr: statementArr.join(" "),
    answer,
  };
};

const permutationAnswer = (inputAnswer, actualAnswer) => {
  console.log(typeof inputAnswer, typeof actualAnswer);
  let input = inputAnswer.toString().trim().split("");
  let answer = actualAnswer.toString().trim().split("");
  while (input.includes(" ")) {
    let index = input.indexOf(" ");
    input.splice(index, 1);
  }
  // while (answer.includes("\n")) {
  //   let index = answer.indexOf("\n");
  //   answer.splice(index, 1);
  // }
  console.log(input);
  console.log(answer);
  for (let i = 0; i < input.length; i++) {
    if (answer.includes(input[i])) {
      const index = answer.indexOf(input[i]);
      answer.splice(index, 1);
      console.log(answer);
    } else {
      return "From permutation: Incorrect";
    }
  }
  if (answer.length == 0) {
    return "From permutation: Correct";
  }
};

const simplestForm = (array) => {
  // let newArray = array;
  let sorting = [...array];
  sorting.sort(function (a, b) {
    return b - a;
  });
  for (let i = 2; i <= sorting[0]; i++) {
    const check = (item) => item % i == 0;
    let divisible = sorting.every(check);
    console.log(divisible);
    while (divisible) {
      // console.log(`Is the entire array divisble?: ${divisible}`);
      console.log("SIMPLIFIED!");
      sorting = sorting.map((x) => x / i);
      array = array.map((x) => x / i);
      // array.forEach((x) => {
      //   x /= i;
      // });
      console.log(sorting, array);
      divisible = sorting.every(check);
    }
  }
  return array;
};
const day12Hours = (hours) => {
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 0 && hours < 12) {
    console.log("Nothing happens");
  }
  if (hours > 12 && hours < 24) {
    hours -= 12;
  }
  if (hours == 24) {
    hours -= 12;
  }
  if (hours > 24) {
    hours -= 24;
  }
  return hours;
};

const zoneOfDay = (minutes) => {
  let zone = "am";
  // am is 0 < 720
  // pm is 720 to < 1440
  if (minutes < 720) {
    zone = "am";
  }
  if (minutes >= 720 && minutes < 1440) {
    zone = "pm";
  }
  if (minutes > 1440 && minutes < 2160) {
    zone = "am";
  }
  console.log(`12 hour format: ${zone}`);
  return zone;
};

const reverseCalculation = (method, numerator, denominator, value) => {
  // Using the opposite numerator
  if (method == 0) {
    const newValue = (value / (denominator - numerator)) * denominator;
    return newValue;
  }
  // Using the current numerator
  if (method == 1) {
    const newValue = (value / numerator) * denominator;
    return newValue;
  }
};

const simplifyThree = (first, second, third) => {
  let sortArr = [first, second, third];
  sortArr.sort(function (a, b) {
    return b - a;
  });
  const max = sortArr[0];
  const min = sortArr[sortArr.length - 1];
  for (let i = min; i <= max; i++) {
    if (i == 1) i += 1;
    while (first % i == 0 && second % i == 0 && third % i == 0) {
      console.log(min, max);
      first /= i;
      second /= i;
      third /= i;
    }
  }
  return [first, second, third];
};

function swap(first, second) {
  return ([first, second] = [second, first]);
}

function decimalCheck(decimal) {
  let str = decimal.toString();
  console.log(str.length);
  if (decimal.length > 10) {
    console.log("Recurring decimal detected: " + str);
    return updateCalc();
  }
}

function accDecimal(decimal) {
  return Math.round(decimal * 10000) / 10000;
}

function simplify(first, second) {
  console.log("Simplifying fractions");
  let max = first;
  if (first < second) max = second;
  for (let i = 2; i <= max; i++) {
    while (first % i == 0 && second % i == 0) {
      first /= i;
      second /= i;
    }
  }
  return [first, second];
}

function commonDeno(first, second) {
  console.log("Finding common denominator");
  let max = first;
  let min = second;
  if (second > first) [max, min] = [second, first];
  let count = 1;
  let common = [min, max];
  let temp = max;
  while (temp % min != 0) {
    temp += max;
    count += 1;
    common.push(temp);
    if (common[common.length - 1] > 200) {
      return "Error";
    }
    console.log(common);
  }
  return common[common.length - 1];
}

function commonFactors(first, second) {
  let max = first;
  let min = second;
  let arr = [];
  if (second > first) [max, min] = [second, first];
  for (let i = 1; i <= min; i++) {
    if (min % i == 0 && max % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

function genUniqNum(max) {
  let valueArr = [];
  const unique = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < max; i++) {
    let position = genNumbers(unique.length);
    if (valueArr.length == 0 && position == 0) {
      position += 1;
    }
    valueArr.push(unique[position]);
    unique.splice(position, 1);
    console.log(unique);
  }
  const value = valueArr.join("");
  return value;
}

// End of updateProblems()
const updateCalc = function (skipGlobalUpdateProblem) {
  // skipGlobalUpdateProblem = 1; // Skip global
  console.log(
    `Updating! skipGlobalUpdateProblem set to ${skipGlobalUpdateProblem}`
  );
  updateProblems();
  // return skipGlobalUpdateProblem;
};

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

function fillTextSplit(string) {
  ctx.save();
  ctx.font = "1em serif";
  var txt = string;
  const x = 15;
  let y = 30;
  const lineHeight = 17;
  const lines = txt.split("\n");
  console.log(lines);
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y);
    y = 30 + lineHeight * (i + 1);
  }

  ctx.restore();
  return y;
}
function adjustCanvasBreadth(textHeight, space) {
  console.log(textHeight, space);
  const requirement = space;
  console.log(requirement + "px");
  if (requirement > 275) {
    canvas.setAttribute("height", requirement);
  } else {
    canvas.setAttribute("height", 275);
  }
}
const pieChart = (f, d, r, p, a, choice, clue) => {
  ctx.save();

  // CONVERT TO ANGLES
  const total = f + d + r + p + a;
  console.log(total);

  // DISPLAY
  let fractionNumerator = f;
  let fractionDenominator = total;
  [fractionNumerator, fractionDenominator] = simplify(
    fractionNumerator,
    fractionDenominator
  );
  if (fractionNumerator == f) return "Error";

  let decimalDisplay = d / total;
  if (decimalDisplay.toString().split(".")[1] > 2) return "Error";

  let ratioDisplay = r;
  let ratioTotal = total;
  [ratioDisplay, ratioTotal] = simplify(ratioDisplay, ratioTotal);
  if (ratioDisplay == r) return "Error";

  const percentageDisplay = (p / total) * 100;
  if (percentageDisplay % 1 != 0) return "Error";

  const angleDisplay = (a / total) * 360;
  if (angleDisplay % 1 != 0) return "Error";

  const fraction = (f / total) * 360;
  const decimal = (d / total) * 360;
  const ratio = (r / total) * 360;
  const percentage = (p / total) * 360;
  const angle = (a / total) * 360;
  console.log(fraction, decimal, ratio, percentage, angle);
  console.log(fraction + decimal + ratio + percentage + angle);

  // draw arcs

  ctx.font = "1em serif";
  if (choice != "fraction") {
    ctx.fillStyle = "#ef476f";
    ctx.fillText(
      `Fractions: ${fractionNumerator}/${fractionDenominator}`,
      20,
      20
    );
  }

  if (choice != "decimal") {
    ctx.fillStyle = "#ffd166";
    // ctx.strokeStyle = "orange";
    ctx.fillText(`Decimals: ${d / total}`, 20, 40);
    // ctx.strokeText(`Decimals: ${d / total}`, 20, 40);
  }

  if (choice != "ratio") {
    ctx.fillStyle = "#06d6a0";
    ctx.strokeStyle = "green";
    ctx.fillText(`Ratio: ${ratioDisplay}:${ratioTotal}`, 20, 60);
    ctx.strokeText(`Ratio: ${ratioDisplay}:${ratioTotal}`, 20, 60);
  }
  if (choice != "percentage") {
    ctx.fillStyle = "blue";
    ctx.fillText(`Percentage: ${percentageDisplay}%`, 20, 80);
  }

  if (choice != "angle") {
    ctx.fillStyle = "#073b4c";
    ctx.fillText(`Angles: ${angleDisplay}°`, 20, 100);
  }

  //CLUE
  if (clue == "fraction") {
    ctx.fillStyle = "#ef476f";
    ctx.fillText(
      `Fractions: ${fractionNumerator}/${fractionDenominator} => ${f}`,
      20,
      200
    );
  }

  if (clue == "decimal") {
    ctx.fillStyle = "#ffd166";
    ctx.fillText(`Decimals: ${d / total} = ${d}`, 20, 200);
  }

  if (clue == "ratio") {
    ctx.fillStyle = "#06d6a0";
    ctx.strokeStyle = "green";
    ctx.fillText(`Ratio: ${ratioDisplay}:${ratioTotal}`, 20, 180);
    ctx.strokeText(`Ratio: ${ratioDisplay}:${ratioTotal}`, 20, 180);
    ctx.fillText(`${ratioDisplay} unit =  ${r}`, 20, 200);
    ctx.strokeText(`${ratioDisplay} unit =  ${r}`, 20, 200);
  }
  if (clue == "percentage") {
    ctx.fillStyle = "blue";
    ctx.fillText(`${percentageDisplay}% = ${p}`, 20, 200);
  }

  if (clue == "angle") {
    ctx.fillStyle = "#073b4c";
    ctx.fillText(`${angleDisplay}° = ${a}`, 20, 200);
  }

  if (choice == "fraction") {
    ctx.fillStyle = "#ef476f";
  }
  if (choice == "decimal") {
    ctx.fillStyle = "#ffd166";
  }
  if (choice == "ratio") {
    ctx.fillStyle = "#06d6a0";
  }
  if (choice == "percentage") {
    ctx.fillStyle = "blue";
  }
  if (choice == "angle") {
    ctx.fillStyle = "#073b4c";
  }

  ctx.rect(10, 205, 110, 20);
  ctx.fill();
  ctx.fillStyle = "black";
  if (choice == "angle" || choice == "percentage") {
    ctx.fillStyle = "white";
  }
  ctx.fillText(`Find ${choice}.`, 20, 220);
  // ctx.stroke();
  // ctx.strokeText();

  ctx.strokeStyle = "black";
  // FRACTIONS
  ctx.translate(400 / 2 + 75, 275 / 2);
  ctx.fillStyle = "#ef476f";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 90, 0, (fraction * Math.PI) / 180);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // DECIMALS
  let accStart = fraction;
  let accEnd = fraction + decimal;
  ctx.fillStyle = "#ffd166";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 90, (accStart * Math.PI) / 180, (accEnd * Math.PI) / 180);
  // ctx.fillText(`${d}`, -20, 20);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // RATIO;
  accStart += decimal;
  accEnd += ratio;
  ctx.fillStyle = "#06d6a0";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 90, (accStart * Math.PI) / 180, (accEnd * Math.PI) / 180);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // PERCENTAGE
  accStart += ratio;
  accEnd += percentage;
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 90, (accStart * Math.PI) / 180, (accEnd * Math.PI) / 180);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // ANGLES
  accStart += percentage;
  accEnd += angle;
  ctx.fillStyle = "#073b4c";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 90, (accStart * Math.PI) / 180, (accEnd * Math.PI) / 180);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();
};

const drawGrid = (xSquares, ySquares, width) => {
  ctx.save();
  ctx.translate(0, 50);
  ctx.setLineDash([1, 1]);

  //CENTERING
  const start = (400 - xSquares * width) / 2;
  ctx.translate(start, 0);

  // DRAWING HORIZONTAL LINES
  for (let i = 0; i <= ySquares; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * width);
    ctx.lineTo(width * xSquares, width * i);
    // ctx.closePath();
    ctx.stroke();
  }
  //DRAWING VERTICAL LINES
  for (let i = 0; i <= xSquares; i++) {
    ctx.beginPath();
    ctx.moveTo(i * width, 0);
    ctx.lineTo(width * i, ySquares * width);
    // ctx.closePath();
    ctx.stroke();
  }

  ctx.restore();
};

const drawSquares = (x, y, width, side) => {
  ctx.save();
  // ctx.font = "1em serif";
  // ctx.fillText(`The length of each square is ${side}cm.`, 20, 20);
  // ctx.fillText(`What is the area below?`, 20, 40);
  ctx.translate(0, 50);
  // ctx.setLineDash([1, 1]);
  ctx.fillStyle = "red";

  //CENTERING
  const start = (400 - x * width) / 2;

  ctx.translate(start, 0);
  // ctx.save();
  // ctx.fillStyle = "black";
  // ctx.beginPath();
  // ctx.rect(0, 0, width, width);
  // ctx.fill();
  // ctx.restore();
  let count = 0;
  let row = 0;
  let column = 0;
  let shadedArr = [];
  for (let i = 0; i < x * y; i++) {
    // console.log(i, column, row);

    if (i % x == 0 && i != 0) {
      // console.log("Next Row :" + i, x);
      row += 1;
      column = 0;
    }
    let shade = genNumbers(2);
    // if (shadedArr.includes(i - x)) {
    //   shade = 1;
    // }

    //IF TOP IS SHADED, SHADE
    if (shadedArr[i - x] == 1) {
      shade = 1;
    }
    // SHADE LAST ROW
    if (i > x * y - 1 - x) {
      shade = 1;
    }
    for (let i = 0; i < x; i++) {
      let sum = 0;
      if (shadedArr[i] == 1) {
        sum += 1;
      }
      if (sum == x) {
        console.log("Entire figure will be filled");
        return "Error";
      }
    }

    if (i > x * (y - 2)) {
      let sum = 0;
      for (let n = 0; n < shadedArr.length; n++) {
        if (shadedArr[n * (i % x)] == 1) {
          sum += 1;
        }
        if (sum > Math.ceil(y / 2)) {
          shade = 0;
        } else {
          shade = 1;
        }
      }
      if (sum == 0) {
        shade = 1;
      }
    }
    if (shade == 1) {
      const starting = column * width;
      const stopping = row * width;
      // console.log(shade, starting, stopping);

      ctx.beginPath();
      ctx.rect(starting, stopping, width, width);
      ctx.fill();
      shadedArr.push(1);
      count += 1;
      // console.log("Shading " + count, starting, stopping);
    } else {
      shadedArr.push(0);
    }
    // row += 1;
    column += 1;
  }
  // for (let m = 0; m < x * y; m++) {
  //   let check = 0;
  //   if (shadedArr[m * x] == 0) {
  //     check += 1;
  //   }
  //   if (check == y) {
  //     console.log("Entire row empty");
  //     return "Error";
  //   }
  // }

  console.log(shadedArr);
  // console.log(count);
  ctx.restore();
  return count;
};

const parallelOverlapping = (breadth, unitSentence, type) => {
  const perimeter = (breadth * unitSentence + breadth) * 2;
  const area = breadth * unitSentence * breadth;
  ctx.save();
  ctx.font = "1em serif";
  ctx.fillText(`The figure is made up of identical rectangles.`, 15, 20);
  if (type == "area") {
    ctx.fillText(`The perimeter of 1 rectangle is ${perimeter} cm.`, 15, 40);
    ctx.fillText(`What is the area of the entire figure?`, 15, 60);
  }

  // const areaText = 2;
  // const supText = areaText.toString().sup();
  if (type == "perimeter") {
    ctx.fillText(`The area of 1 rectangle is ${area} cm2.`, 15, 40);
    ctx.fillText(`What is the perimeter of the entire figure?.`, 15, 60);
  }

  // 400 / 2 - length / 2;
  const x = 400 / 2 - (unitSentence / 2) * breadth * 10;
  const y = 70 + breadth + breadth * unitSentence + 80;
  ctx.translate(x, 90);
  ctx.beginPath();
  breadth = breadth * 10;
  const length = breadth * unitSentence;
  ctx.rect(0, 0, length, breadth);
  ctx.closePath();
  ctx.stroke();

  for (let i = 0; i < unitSentence; i++) {
    ctx.beginPath();
    ctx.rect(i * breadth, breadth, breadth, length);
    ctx.closePath();
    ctx.stroke();
  }

  ctx.restore();
};
const drawTriangle = (base, height, first, second) => {
  ctx.save();
  ctx.font = "1em serif";
  ctx.fillText(`Length AD = ${height / 4} cm.`, 20, 20);
  ctx.fillText(
    `Length BF = ${(base * 2) / 4} cm and can be split into 4 equal parts.`,
    20,
    40
  );
  ctx.fillText(`Find triangle A${first}${second}.`, 20, 60);
  ctx.translate(400 / 2, 70);

  const adjustX = -5;
  const adjustY = 15;
  //BIG TRIANGLE
  ctx.beginPath();
  ctx.fillText("A", -5, -2);
  ctx.arc(0, 0, 2, 0, Math.PI * 2);
  ctx.moveTo(0, 0);
  ctx.lineTo(-base, height);
  ctx.fillText("B", -base + adjustX, height + adjustY);
  ctx.arc(-base, height, 2, 0, Math.PI * 2);
  ctx.lineTo(base, height);
  ctx.fillText("F", base + adjustX, height + adjustY);
  ctx.arc(base, height, 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();

  // INNER TRIANGLE
  ctx.beginPath();
  // ctx.arc(0, 0, 2, 0, Math.PI * 2);
  ctx.moveTo(0, 0);
  ctx.lineTo(-base / 2, height);
  ctx.fillText("C", -base / 2 + adjustX, height + adjustY);
  ctx.arc(-base / 2, height, 2, 0, Math.PI * 2);
  ctx.lineTo(base / 2, height);
  ctx.fillText("E", base / 2 + adjustX, height + adjustY);
  ctx.arc(base / 2, height, 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();

  // STRAIGHT LINE
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, height);
  ctx.fillText("D", 0 + adjustX, height + adjustY);
  ctx.arc(0, height, 2, 0, Math.PI * 2);
  ctx.rect(0, height, 10, -10);
  ctx.stroke();

  ctx.restore();
};

const draw3d = {
  cuboid: (canvasWidth, canvasHeight, a, b, c, question) => {
    ctx.save();
    ctx.font = "1em serif";
    // question = "volume";
    // let shape = "cube";
    // if (a != b || a != b || b != c) {
    //   shape = "cuboid";
    // }
    // if (question == "volume") {
    //   ctx.fillText(`${p.question}`, 20, 20);
    // }
    ctx.fillText(`${question}`, 20, 20);
    ctx.translate(canvasWidth / 2 - a / 2, 50 + c / 3);

    // FRONT
    ctx.beginPath();
    ctx.rect(0, 0, a, c);
    ctx.stroke();
    ctx.fillText(`${a / 5}`, a / 2 - 5, c + 13);
    // RIGHT
    ctx.translate(a, 0);
    ctx.beginPath();
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(b / 2, (c / 3) * 2);
    ctx.lineTo(0, c);
    ctx.closePath();
    ctx.stroke();
    ctx.fillText(`${b / 5}`, b / 2 - 13, c - 2);

    // TOP
    ctx.translate(-a, 0);
    ctx.beginPath();
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(a + b / 2, -(c / 3) * 1);
    ctx.lineTo(a, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.fillText(`${c / 5}`, a + b / 2 + 2, 10);
    ctx.restore();
  },
  cuboidSurfaceArea: (canvasWidth, canvasHeight, a, b, c, type) => {
    let question = undefined;

    ctx.save();
    ctx.font = "1em serif";
    // const height = 60 + c + c / 3 + 1 + 50;
    // if (height > canvasHeight) {
    //   ctx.setAttributes("height", height);
    // } else {
    //   ctx.setAttributes("height", 275);
    // }
    if (type == 1) {
      question = ["base area", "top", "front", "side"][genNumbers(4)];
      ctx.fillText(`Find the area of the ${question}.`, 20, 20);
    }

    if (type == 2) {
      const volume = ((((a / 5) * b) / 5) * c) / 5;
      question = ["length", "breadth", "height"][genNumbers(3)];
      ctx.fillText(`The volume of the figure is ${volume} cm3.`, 20, 20);
      ctx.fillText(`What is its ${question}?`, 20, 40);
    }
    ctx.translate(canvasWidth / 2 - a / 2, 50 + c / 3);

    // BASE AREA
    ctx.setLineDash([1, 1]);
    ctx.translate(0, c);
    ctx.beginPath();
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(a + b / 2, -(c / 3) * 1);
    ctx.lineTo(a, 0);
    ctx.closePath();
    ctx.stroke();
    if (question == "base area") {
      ctx.save();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.moveTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(b / 2, -(c / 3) * 1 - c);
    ctx.stroke();
    // ctx.fillText(`${c / 5}`, a + b / 2 + 2, 10);
    ctx.translate(0, -c);

    // FRONT
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(0, 0, a, c);
    ctx.stroke();
    if (question != "length") {
      ctx.fillText(`${a / 5}`, a / 2 - 5, c + 13);
    }
    if (question == "front") {
      ctx.save();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }
    // SIDE
    ctx.translate(a, 0);
    ctx.beginPath();
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(b / 2, (c / 3) * 2);
    ctx.lineTo(0, c);
    ctx.closePath();
    ctx.stroke();
    if (question != "breadth") {
      ctx.fillText(`${b / 5}`, b / 2 - 13, c - 2);
    }
    if (question == "side") {
      ctx.save();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }

    // TOP
    ctx.translate(-a, 0);
    ctx.beginPath();
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(a + b / 2, -(c / 3) * 1);
    ctx.lineTo(a, 0);
    ctx.closePath();
    ctx.stroke();
    if (question != "height") {
      ctx.fillText(`${c / 5}`, a + b / 2 + 2, 10);
    }
    if (question == "top") {
      ctx.save();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
    return question;
  },

  cuboidWaterLevel: (canvasWidth, canvasHeight, a, b, c, waterLevel, type) => {
    let question = undefined;

    ctx.save();
    ctx.font = "1em serif";
    if (type == 1) {
      // question = ["base area", "top", "front", "side"][genNumbers(4)];
      let nume = waterLevel;
      let deno = c;
      [nume, deno] = simplify(nume, deno);
      console.log(deno, c);
      if (deno == c / 5) return "Error";
      ctx.fillText(`The tank is ${nume}/${deno} filled.`, 20, 20);
      ctx.fillText(`What is the volume of water in the tank?`, 20, 40);
    }
    if (type == 2) {
      // question = ["base area", "top", "front", "side"][genNumbers(4)];
      let nume = waterLevel;
      let deno = c;
      [nume, deno] = simplify(nume, deno);
      console.log(deno, c);
      if (deno == c / 5) return "Error";
      ctx.fillText(`The tank is ${nume}/${deno} filled.`, 20, 20);
      ctx.fillText(
        `What is the volume of water needed to fill up the tank?`,
        20,
        40
      );
    }
    if (type == 3) {
      // question = ["base area", "top", "front", "side"][genNumbers(4)];
      let nume = waterLevel;
      let deno = c;
      const volume = ((((a / 5) * b) / 5) * c) / 5;
      [nume, deno] = simplify(nume, deno);
      const water = (volume * nume) / deno;
      if (deno == c / 5) return "Error";
      ctx.fillText(
        `There is ${water} cm3 of water in the tank. while ${nume}/${deno} filled.`,
        20,
        20
      );
      ctx.fillText(`What is the capacity of the tank?`, 20, 40);
    }
    if (type == 4) {
      // question = ["base area", "top", "front", "side"][genNumbers(4)];
      let nume = waterLevel;
      let deno = c;
      const volume = ((((a / 5) * b) / 5) * c) / 5;
      [nume, deno] = simplify(nume, deno);
      const water = (volume * nume) / deno;
      if (deno == c / 5) return "Error";
      ctx.fillText(
        `There is ${water} cm3 of water in the tank. while ${nume}/${deno} filled.`,
        20,
        20
      );
      ctx.fillText(`What is the height of the tank?`, 20, 40);
    }
    ctx.translate(canvasWidth / 2 - a / 2, 50 + c / 3);

    // FRONT WATER
    ctx.save();
    ctx.fillStyle = "blue";
    console.log(`${waterLevel}/${c}`);
    ctx.beginPath();
    ctx.rect(0, c - waterLevel, a, waterLevel);
    ctx.fill();
    ctx.restore();

    //SIDE WATER
    ctx.save();
    ctx.translate(a, c - waterLevel);
    ctx.fillStyle = "blue";
    // console.log(`${waterLevel}/${c}`);
    ctx.beginPath();
    // ctx.rect(0, c - waterLevel, a, waterLevel);
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.translate(-a, -(c - waterLevel));
    ctx.translate(a, 0);
    ctx.lineTo(b / 2, (c / 3) * 2);
    ctx.lineTo(0, c);
    // ctx.lineTo(b / 2, (waterLevel / 3) * 2);
    // ctx.lineTo(0, waterLevel);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    // FRONT
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(0, 0, a, c);
    ctx.stroke();
    if (question != "length") {
      ctx.fillText(`${a / 5}`, a / 2 - 5, c + 13);
    }
    if (question == "front") {
      ctx.save();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }
    // SIDE
    ctx.translate(a, 0);
    ctx.beginPath();
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(b / 2, (c / 3) * 2);
    ctx.lineTo(0, c);
    ctx.closePath();
    ctx.stroke();
    // if (type != 3 || type != 4) {
    ctx.fillText(`${b / 5}`, b / 2 - 13, c - 2);
    // }
    // if (question == "side") {
    //   ctx.save();
    //   ctx.fillStyle = "red";
    //   ctx.fill();
    //   ctx.restore();
    // }

    // TOP
    ctx.translate(-a, 0);
    ctx.beginPath();
    ctx.arc(0, 0, 3, Math.PI * 2, false);
    ctx.moveTo(0, 0);
    ctx.lineTo(b / 2, -(c / 3) * 1);
    ctx.lineTo(a + b / 2, -(c / 3) * 1);
    ctx.lineTo(a, 0);
    ctx.closePath();
    ctx.stroke();
    if (type != 3 && type != 4) {
      ctx.fillText(`${c / 5}`, a + b / 2 + 2, 10);
    }
    if (question == "top") {
      ctx.save();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
    return question;
  },
};

const drawThis = {
  quadrant: (x, y, radius, type, rotate) => {
    ctx.save();
    ctx.font = "1em serif";
    let pi = 3.14;
    let diameter = radius * 2;
    if (radius % 7 == 0) pi = `22/7`;
    ctx.fillText(`Find the ${type} of the quadrant.`, 15, 20);
    if (genNumbers(2) == 0) {
      ctx.fillText(`Radius = ${radius / 10} cm, π = ${pi}.`, 15, 40);
    } else {
      ctx.fillText(`Diameter = ${diameter / 10} cm, π = ${pi}.`, 15, 40);
    }

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.moveTo(0, 0);
    // ctx.lineTo(x + radius, y + radius);
    ctx.arc(0, 0, radius, 0, Math.PI / 2, false);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "#550000";
    ctx.stroke();

    ctx.restore();
  },
  semicircle: (x, y, radius, type, rotate) => {
    ctx.save();
    ctx.font = "1em serif";
    let pi = 3.14;
    let diameter = radius * 2;
    if (radius % 7 == 0) pi = `22/7`;
    ctx.fillText(`Find the ${type} of the semicircle.`, 15, 20);
    if (genNumbers(2) == 0) {
      ctx.fillText(`Radius = ${radius / 10} cm, π = ${pi}.`, 15, 40);
    } else {
      ctx.fillText(`Diameter = ${diameter / 10} cm, π = ${pi}.`, 15, 40);
    }
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.moveTo(0, 0);
    // ctx.lineTo(x + radius, y + radius);
    ctx.arc(0, 0, radius, 0, Math.PI, false);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "#550000";
    ctx.stroke();
    ctx.restore();
  },
  threeQuarterCircle: (x, y, radius, type, rotate) => {
    ctx.save();
    ctx.font = "1em serif";
    let pi = 3.14;
    let diameter = radius * 2;
    if (radius % 7 == 0) pi = `22/7`;
    ctx.fillText(`Find the ${type} of the 3 Quarter-Circle.`, 15, 20);
    if (genNumbers(2) == 0) {
      ctx.fillText(`Radius = ${radius / 10} cm, π = ${pi}.`, 15, 40);
    } else {
      ctx.fillText(`Diameter = ${diameter / 10} cm, π = ${pi}.`, 15, 40);
    }
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.moveTo(0, 0);
    // ctx.lineTo(x + radius, y + radius);
    ctx.arc(0, 0, radius, 0, (Math.PI / 2) * 3, false);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "#550000";
    ctx.stroke();
    ctx.restore();
  },
  segment: (x, y, radius, type, rotate) => {
    ctx.save();
    ctx.font = "1em serif";
    let pi = 3.14;
    let diameter = radius * 2;
    if (radius % 7 == 0) pi = `22/7`;
    ctx.fillText(`Find the ${type} of the segment.`, 15, 20);
    if (genNumbers(2) == 0) {
      ctx.fillText(`Radius = ${radius / 10} cm, π = ${pi}.`, 15, 40);
    } else {
      ctx.fillText(`Diameter = ${diameter / 10} cm, π = ${pi}.`, 15, 40);
    }
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI / 2, false);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "#550000";
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([10, 10]);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, radius);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(radius, 0);
    ctx.stroke();
    ctx.restore();
  },
  sharkfin: (x, y, radius, type, rotate) => {
    // draw square
    ctx.save();
    ctx.font = "1em serif";
    let pi = 3.14;
    let diameter = radius * 2;
    if (radius % 7 == 0) pi = `22/7`;
    ctx.fillText(`Find the ${type} of the sharkfin.`, 15, 20);
    if (genNumbers(2) == 0) {
      ctx.fillText(`Radius = ${radius / 10} cm, π = ${pi}.`, 15, 40);
    } else {
      ctx.fillText(`Diameter = ${diameter / 10} cm, π = ${pi}.`, 15, 40);
    }
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.beginPath();
    ctx.rect(0, 0, radius, radius);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 3;
    // ctx.strokeStyle = "#550000";
    ctx.stroke();

    // draw quadrant
    ctx.beginPath();
    ctx.moveTo(0, 0);
    // ctx.lineTo(x + radius, y + radius);
    ctx.arc(0, 0, radius, 0, Math.PI / 2, false);
    ctx.closePath();

    ctx.fillStyle = "yellow";
    ctx.fill();
    // ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.restore();
  },
};

function drawDiffArea(x, y, radius) {
  ctx.save();
  ctx.font = "1em serif";
  // ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + radius, y + radius);
  ctx.arc(x, y, radius, 0, Math.PI / 2, false);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawIntervals(start, intervals, eachInterval, question) {
  const largeIntervals = 20;
  const adjustment = 10;
  ctx.save();
  ctx.font = "1em serif";
  ctx.translate(50, 100);
  //BEGIN
  ctx.beginPath();
  ctx.moveTo(0, -largeIntervals);
  ctx.fillText(
    `${accDecimal(start)}`,
    -adjustment,
    -largeIntervals - adjustment
  );
  ctx.lineTo(0, largeIntervals);
  ctx.stroke();

  //END
  const end = start + eachInterval * intervals;
  ctx.beginPath();
  ctx.moveTo(300, -largeIntervals);
  ctx.fillText(
    `${accDecimal(end)}`,
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
      ctx.fillText(`?`, 0 + intervalAway * i - 4, -15);
    }
  }
  ctx.restore();
}
export function drawForFraction(object, type) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, 1000, 1000);
  console.log(object);
  // const p = object.drawProblem;
  const p = object.currentProblem;
  ctx.save(); //1st
  const side = (genNumbers(50) + 75) * 2;
  if (p.shapes == "rectangle") {
    const neededHeight = 100 + p.bigY;
    if (neededHeight > 275) {
      canvas.setAttribute("height", neededHeight);
    } else {
      canvas.setAttribute("height", 275);
    }
  }
  if (p.shapes == "triangle" || p.shapes == "square") {
    adjustCanvasBreadth(side, side + 100);
  }
  const startPoint = fillTextSplit(
    `What ${type} is the ${
      p.want == "shaded" ? "shaded" : "unshaded"
    } part of the ${p.secondVar == "unshaded" ? "unshaded part" : "total"}\n${
      p.shapes
    }?`
  );

  let displayHeight = 275 + 20;
  if (p.shapes == "circle") {
    const radius = genNumbers(50) + 50;
    // ctx.translate(20, 20);
    ctx.beginPath();
    ctx.arc(400 / 2, displayHeight / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.save(); //2nd
    ctx.translate(400 / 2, displayHeight / 2);
    // const rotationAngleDeg = 45;
    // const rotationAngleRad = (rotationAngleDeg * Math.PI) / 180;
    // ctx.rotate(rotationAngleRad);
    ctx.beginPath();
    ctx.arc(0, 0, 2, 0, 2 * Math.PI);
    ctx.fill();

    //VERTICAL LINE
    ctx.beginPath();
    ctx.moveTo(0, -radius);
    ctx.lineTo(0, radius);
    ctx.stroke();

    const pieces = genNumbers(5) + 4;
    p.total = pieces * 2;
    const eachPieceAngleDeg = 360 / 2 / pieces;
    const eachPieceAngleRad = (eachPieceAngleDeg * Math.PI) / 180;
    console.log(eachPieceAngleRad);

    const start = [0.5, 1.5][genNumbers(2)] * Math.PI;
    p.shaded = 0;
    for (let i = 0; i < pieces; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(
        0,
        0,
        radius,
        start + eachPieceAngleRad * i,
        start + eachPieceAngleRad * (i + 1)
      );
      // ctx.closePath();
      if (genNumbers(2) == 1) {
        ctx.save();
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();
        p.shaded += 1;
        ctx.restore();
      } else {
        ctx.stroke();
      }
    }
    ctx.restore(); //2nd
    //HORIZONTAL LINE
    // ctx.beginPath();
    // ctx.moveTo(-radius, 0);
    // ctx.lineTo(+radius, 0);
    // ctx.stroke();
  }

  if (p.shapes == "rectangle") {
    p.shaded = 0;
    ctx.beginPath();
    const bigX = (genNumbers(10) + 20) * 10;
    ctx.beginPath();
    const centering = (400 - bigX) / 2;
    ctx.rect(centering, startPoint, bigX, p.bigY);
    ctx.stroke();

    const mediumColumn = genNumbers(3) + 2;
    const mediumY = p.bigY / mediumColumn;
    // }
    for (let i = 0; i < mediumColumn; i++) {
      ctx.beginPath();
      ctx.rect(centering, startPoint + mediumY * i, bigX, mediumY);
      ctx.stroke();
    }

    const smallRow = [4, 5, 10][genNumbers(3)];
    const smallX = bigX / smallRow;
    // if (smallX % 1 != 0) {
    //   return updateCalc();
    // }
    console.log(smallRow, smallX);
    p.total = smallRow * mediumColumn;
    const chosenRow = genNumbers(mediumColumn);
    for (let i = 0; i < smallRow; i++) {
      ctx.beginPath();
      ctx.rect(
        centering + smallX * i,
        startPoint + mediumY * chosenRow,
        smallX,
        mediumY
      );
      console.log(smallRow * i);
      if (genNumbers(2) == 1) {
        ctx.save();
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();
        p.shaded += 1;
        ctx.restore();
      } else {
        // ctx.save();

        ctx.stroke();
        // ctx.restore();
      }
    }
  }
  if (p.shapes == "triangle") {
    p.shaded = 0;
    p.total = 16;
    ctx.translate((400 - side) / 2, startPoint);
    //BIG TRIANGLE

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(side, 0);
    ctx.lineTo(0, side);
    ctx.closePath();
    ctx.stroke();

    //DRAW SQUARE
    ctx.beginPath();
    ctx.rect(0, 0, side / 2, side / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(side / 2, 0);
    ctx.lineTo(0, side / 2);
    ctx.stroke();

    //FIRST SMALL TRIANGLE
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(side / 4, 0);
    ctx.lineTo(0, side / 4);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }

    //SECOND SMALL TRIANGLE
    ctx.beginPath();
    ctx.moveTo(side / 4, 0);
    ctx.lineTo(side / 4, side / 4);
    ctx.lineTo(0, side / 4);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }
    //THIRD SMALL TRIANGLE
    ctx.beginPath();
    ctx.moveTo(side / 4, 0);
    ctx.lineTo(side / 2, 0);
    ctx.lineTo(side / 4, side / 4);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }
    //FOURTH SMALL TRIANGLE
    ctx.beginPath();
    ctx.moveTo(0, side / 4);
    ctx.lineTo(side / 4, side / 4);
    ctx.lineTo(0, side / 2);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }
  }
  if (p.shapes == "square") {
    p.shaded = 0;
    p.total = 32;
    ctx.translate((400 - side) / 2, startPoint);
    //BIG TRIANGLE

    ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(side, 0);
    // ctx.lineTo(0, side);
    // ctx.closePath();
    ctx.rect(0, 0, side, side);
    ctx.stroke();

    //DRAW SQUARE
    ctx.beginPath();
    ctx.rect(0, 0, side / 2, side / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(side, 0);
    ctx.lineTo(0, side);
    ctx.stroke();

    //SHADING
    const shift = genNumbers(3);
    ctx.save(); //3rd
    if (shift == 0) {
      ctx.beginPath();
      ctx.moveTo(side / 2, 0);
      ctx.lineTo(0, side / 2);
      ctx.stroke();
    }
    if (shift == 1) {
      ctx.translate(side / 2, 0);
    }
    if (shift == 2) {
      ctx.translate(0, side / 2);
    }
    //FIRST SMALL TRIANGLE

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(side / 4, 0);
    ctx.lineTo(0, side / 4);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }

    //SECOND SMALL TRIANGLE
    ctx.beginPath();
    ctx.moveTo(side / 4, 0);
    ctx.lineTo(side / 4, side / 4);
    ctx.lineTo(0, side / 4);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }
    //THIRD SMALL TRIANGLE
    ctx.beginPath();
    ctx.moveTo(side / 4, 0);
    ctx.lineTo(side / 2, 0);
    ctx.lineTo(side / 4, side / 4);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }
    //FOURTH SMALL TRIANGLE
    ctx.beginPath();
    ctx.moveTo(0, side / 4);
    ctx.lineTo(side / 4, side / 4);
    ctx.lineTo(0, side / 2);
    ctx.closePath();
    if (genNumbers(2) == 1) {
      ctx.save();
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.stroke();
      p.shaded += 1;
      ctx.restore();
    } else {
      ctx.stroke();
    }
    ctx.restore();
  }
  if (p.shaded == 0) {
    ctx.restore();
    return updateCalc();
  }
  ctx.restore(); //1st
}

export function drawHorizontalLine(x, y, right, adjust) {
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

export function drawVerticalLine(x, y, bottom, adjust) {
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
export {
  // drawQuadrant,
  pieChart,
  drawSquares,
  drawGrid,
  drawTriangle,
  parallelOverlapping,
  drawThis,
  draw3d,
  drawIntervals,
  swap,
  decimalCheck,
  accDecimal,
  simplify,
  commonDeno,
  commonFactors,
  genUniqNum,
  // updateCalc,
  reverseCalculation,
  simplifyThree,
  zoneOfDay,
  day12Hours,
  permutationAnswer,
  resultSide,
  blankSide,
  simplestForm,
  fillTextSplit,
  adjustCanvasBreadth,
};
