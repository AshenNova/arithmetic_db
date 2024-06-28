import { checkRange, calArrAll } from "./script.js";

let levelArr = [];
let arr = [];
let arr2 = [];
let arr3 = [];
let heuArr = [];
let calArr = [];
let calArrQns = [];

export function genNumbers(max) {
  return Math.floor(Math.random() * max);
}

export function genProblems(
  level,
  regen,
  setting,
  state,
  skipGlobalUpdateProblem,
  skipArr
) {
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
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      arr2: [],
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
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      arr2: [],
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
      arr: [],
      arr2: [],
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
      arr: [],
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
    // setting = calArrAll(2, calArr, setting, 2);
    // setting = checkRange(setting, calArr, skipArr);
    setting = calArrAll(
      2,
      calArr,
      setting,
      2,
      level,
      state,
      skipGlobalUpdateProblem
    );
    setting = checkRange(setting, calArr, skipArr, skipGlobalUpdateProblem);
    if (setting == 1) {
      return {
        setting: 1,
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
        setting: 2,
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
