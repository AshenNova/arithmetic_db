export function genNumbers(max) {
  return Math.floor(Math.random() * max);
}

export function genProblems(level, setting) {
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
      numOne: genNumbers(94) + 5,
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
    // return {
    //   numOne: genNumbers(94) + 5,

    //   numTwo: genNumbers(10) + 1,
    //   numThree: genNumbers(5) + 2,

    //   numFour: genNumbers(5) + 5,
    //   numFive: genNumbers(8) + 5,
    //   numSix: [-1, 1, 2][genNumbers(3)],

    //   optionFinal: [1, 2, 3, 4, 5][genNumbers(5)],

    //   // 3.15
    //   rollType: ["A", "B"][genNumbers(2)],
    //   rollA: undefined,
    //   rollB: undefined,
    //   rollTimes: genNumbers(3) + 3,
    //   position: genNumbers(30) + 20,
    // };
    setting = calArrAll(4, calArr, setting, 9);
    setting = checkRange(setting, calArr);
    console.log(state.global);
    if (setting == 1 || setting == 5) {
      return {
        numOne: genNumbers(94) + 5,
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

  if (level == 4.03) {
    return {
      numOne: genNumbers(9999) + 1,
      numTwo: 0,
      placeValue: [
        "1 decimal place",
        "tenth place",
        "2 decimal place",
        "hundredth place",
        "Whole Number",
      ][genNumbers(5)],
      numFinal: 0,
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
        wholeNum: [0, 1][genNumbers(2)] * (genNumbers(99) + 1),
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
        wholeNum: [0, 1][genNumbers(2)] * (genNumbers(99) + 1),
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
    // setting = checkRange(setting, calArr);
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

  if (level == 4.15) {
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

  if (level == 4.22) {
    return {
      options: [1, 2][genNumbers(2)],
      numOne: genNumbers(10) + 1,
      numTwo: genNumbers(5) + 1,
      numThree: genNumbers(5) + 6,
      numFour: genNumbers(20) + 1,
    };
  }

  if (level == 4.23) {
    return {
      option: ["yes", "no"][genNumbers(2)],
      numOne: arrayConvenient[genNumbers(9)],
      numTwo: genNumbers(20) + 3,
      divisor: undefined,
      convenient: undefined,
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
    setting = checkRange(setting, calArr);
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
        labelMNO: ["M", "N", "O"][genNumbers(3)],

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
      roll: undefined,
      volume: undefined,
      pointA: (genNumbers(5) + 1) * 20,
      pointB: (genNumbers(5) + 1) * 20,
      pointC: (genNumbers(6) + 5) * 10,
      pointD: (genNumbers(6) + 5) * 10,
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

  if (level == 5.17) {
    return {
      layerOne: genNumbers(4) + 2,
      layerTwo: undefined,
      layerThree: undefined,
      layerFour: undefined,
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

  if (level == 6.06) {
    return {
      roll: ["A", "B", "C"][genNumbers(3)],
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
    setting = calArrAll(8, calArr, setting, 99);
    setting = checkRange(setting, calArr);
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
  }

  if (level == "calTwo") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(8, calArr);
    // }
    setting = calArrAll(8, calArr, setting, 99);
    setting = checkRange(setting, calArr);
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
  }

  if (level == "calThree") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(6, calArr);
    // }
    setting = calArrAll(13, calArr, setting, 99);
    setting = checkRange(setting, calArr);
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
        operator: ["+", "-"][genNumbers(2)],
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
    if (setting == 10 || setting == 11) {
      let num = genNumbers(7) + 3;
      return {
        divisor: num,
        multiplier: genNumbers(1100) + 11,
        remainder: genNumbers(num),
      };
    }
    if (setting == 12) {
      return {
        num: undefined,
        multiplier: genNumbers(8) + 2,
        replaced: undefined,
      };
    }
    // Multiplication in sets
    if (setting == 13) {
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
  }

  if (level == "calFour") {
    // if (setting == 99 || (global == 1 && skipGlobalUpdateProblem == 0)) {
    //   global = 1;
    //   setting = calArrAll(6, calArr);
    // }
    setting = calArrAll(14, calArr, setting, 99);
    setting = checkRange(setting, calArr);
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
    if (setting == 5) {
      return {
        wholeOne: genNumbers(9) + 1,
        numOne: genNumbers(9) + 1,
        denoOne: genNumbers(9) + 1,
        wholeTwo: genNumbers(9) + 1,
        numTwo: genNumbers(9) + 1,
        denoTwo: genNumbers(9) + 1,
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
    //DECIMALS
    if (setting == 7 || setting == 8) {
      return {
        numOne: genNumbers(999) + 1,
        convenientNumOne: [1, 10, 100][genNumbers(3)],
        numTwo: genNumbers(999) + 1,
        convenientNumTwo: [10, 100][genNumbers(2)],
      };
    }
    if (setting == 9) {
      return {
        numOne: genNumbers(999) + 1,
        convenientNumOne: [10, 100, 1000][genNumbers(3)],
        numTwo: genNumbers(8) + 2,
      };
    }
    if (setting == 10) {
      return {
        numOne: genNumbers(999) + 1,
        convenientNumOne: [10, 100, 1000][genNumbers(3)],
        numTwo: genNumbers(89) + 11,
      };
    }
    if (setting == 11) {
      return {
        numOne: genNumbers(7) + 2,
        multiplier: genNumbers(989) + 11,
        divisor: [10, 100, 1000][genNumbers(3)],
      };
    }
    if (setting == 12) {
      return {
        numOne: genNumbers(10) + 1,
        numTwo: [3, 7, 9, 11][genNumbers(4)],
        roundOff: genNumbers(3) + 1,
      };
    }
    if (setting == 13) {
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
    if (setting == 14) {
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
  }
  if (level == "calFive") {
    setting = calArrAll(4, calArr, setting, 99);
    setting = checkRange(setting, calArr);

    if (setting == 0) {
      return {
        numOne: genNumbers(20) + 1,
        numTwo: genNumbers(20) + 1,
        numThree: genNumbers(20) + 1,
        numFour: genNumbers(20) + 1,
        numFive: genNumbers(20) + 1,
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
        wholeOne: genNumbers(4) + 2,
        numeratorOne: genNumbers(10) + 1,
        denominatorOne: genNumbers(10) + 1,
        wholeTwo: genNumbers(9) + 2,
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
    //repeated identity [Ratio]
    if (setting == 4) {
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
    let roll = undefined;
    let settingText = setting.toString();

    if (settingText.includes("-")) {
      console.log("range detected");
      range = 1;
      settingText.split("-");
      if (!heuArr.length) {
        for (let i = 1; i <= settingText[settingText.length - 1]; i++) {
          heuArr.push(i);
        }
        console.log(heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    } else {
      console.log("not range");
      setting = parseInt(setting);
      if (isNaN(setting)) {
        setting = 9;
      }
    }

    // if (isNaN(setting)){
    //   setting = 9
    // }

    if (setting == 9) {
      if (!heuArr.length) {
        heuArr = [1, 2, 3, 4];
        console.log("Array renewed");
      }
      roll = heuArr[genNumbers(heuArr.length)];
      console.log(heuArr.length);
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    }

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
      genOnePos = genNumbers(5);
      genTwoPos = genNumbers(5);
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
    let roll = undefined;
    let settingText = setting.toString();

    if (settingText.includes("-")) {
      console.log("range detected");
      range = 1;
      settingText.split("-");
      if (!heuArr.length) {
        for (let i = 1; i <= settingText[settingText.length - 1]; i++) {
          heuArr.push(i);
        }
        console.log(heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    } else {
      console.log("Not range detected");
      setting = parseInt(setting);
      if (isNaN(setting)) {
        setting = 9;
      }
    }

    if (setting == 9) {
      if (!heuArr.length) {
        heuArr = [1, 2, 3, 4, 5];
        console.log("array renewed! " + heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
      console.log("Current Array is " + heuArr);
    }

    if (
      setting == 1 ||
      (setting == 9 && roll == 1) ||
      (range == 1 && roll == 1)
    ) {
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

    if (
      setting == 2 ||
      (setting == 9 && roll == 2) ||
      (range == 1 && roll == 2)
    ) {
      return {
        rollz: 2,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: genNumbers(400) + 100,
        numTwo: genNumbers(400) + 100,
      };
    }

    if (
      setting == 3 ||
      (setting == 9 && roll == 3) ||
      (range == 1 && roll == 3)
    ) {
      return {
        rollz: 3,
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
        unitSentence: genNumbers(9) + 1,
        total: undefined,
        varA: undefined,
        varB: undefined,
        rollLineTwo: ["A", "B", "total"][genNumbers(3)],
        rollLineThree: ["A", "B", "total"][genNumbers(3)],
      };
    }
  }
  // setting
  if (level == "heuThree") {
    // let roll = genNumbers(7)+1
    let roll = undefined;
    let settingText = setting.toString();

    if (settingText.includes("-")) {
      console.log("range detected");
      range = 1;
      settingText.split("-");
      if (!heuArr.length) {
        for (let i = 1; i <= settingText[settingText.length - 1]; i++) {
          heuArr.push(i);
        }
        console.log(heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    } else {
      console.log("Not range detected");
      setting = parseInt(setting);
      if (isNaN(setting)) {
        setting = 9;
      }
    }

    if (setting == 9) {
      if (!heuArr.length) {
        heuArr = [1, 2, 3, 4, 5, 6, 7, 8];
        console.log("array renewed! " + heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
      console.log("Current remaining arr is " + heuArr);
    }

    if (
      setting == 1 ||
      (setting == 9 && roll == 1) ||
      (range == 1 && roll == 1)
    ) {
      return {
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        numOne: (genNumbers(5) + 1) * 2,
        numTwo: (genNumbers(5) + 1) * 2,
        rollAnswer: genNumbers(2),
        rollz: 1,
      };
    }
    if (
      setting == 2 ||
      (setting == 9 && roll == 2) ||
      (range == 1 && roll == 2)
    ) {
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
    if (
      setting == 3 ||
      (setting == 9 && roll == 3) ||
      (range == 1 && roll == 3)
    ) {
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
    if (
      setting == 4 ||
      (setting == 9 && roll == 4) ||
      (range == 1 && roll == 4)
    ) {
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

    if (
      setting == 5 ||
      (setting == 9 && roll == 5) ||
      (range == 1 && roll == 5)
    ) {
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

    if (
      setting == 6 ||
      (setting == 9 && roll == 6) ||
      (range == 1 && roll == 6)
    ) {
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

    if (
      setting == 7 ||
      (setting == 9 && roll == 7) ||
      (range == 1 && roll == 7)
    ) {
      return {
        rollz: 7,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        difference: (genNumbers(20) - 10) * 2,
        transfer: ["A", "B"][genNumbers(2)],
        transferV: genNumbers(10) + 1,
      };
    }

    if (
      setting == 8 ||
      (setting == 9 && roll == 8) ||
      (range == 1 && roll == 8)
    ) {
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
    let roll = undefined;
    let settingText = setting.toString();

    if (settingText.includes("-")) {
      console.log("range detected");
      range = 1;
      settingText.split("-");
      if (!heuArr.length) {
        for (let i = 1; i <= settingText[settingText.length - 1]; i++) {
          heuArr.push(i);
        }
        console.log(heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    } else {
      console.log("Not range detected");
      setting = parseInt(setting);
      if (isNaN(setting)) {
        setting = 9;
      }
    }

    if (
      setting == 1 ||
      (setting == 9 && roll == 1) ||
      (range == 1 && roll == 1)
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
        rollz: 1,
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
        situationOne: genNumbers(200) - 100,
        situationTwo: genNumbers(200) - 100,
        oneOrTwo: ["One", "Two"][genNumbers(2)],
        firstOrEnd: ["at first", "at first", "in the end"][genNumbers(1)],
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
        startOne: undefined,
        startTwo: undefined,
        situationOne: [-1, 1][genNumbers(2)],
        situationTwo: [-1, 1][genNumbers(2)],
        endOne: undefined,
        endTwo: undefined,
        oneOrTwo: ["One", "Two"][genNumbers(2)],
        answer: ["A", "B", "total", "other"][genNumbers(4)],
        rollz: 3,
      };
    }
  }
  // setting

  if (level == "heuFour") {
    let roll = undefined;
    let settingText = setting.toString();
    console.log(setting, settingText);

    if (settingText.includes("-")) {
      console.log("range detected");
      range = 1;
      settingText.split("-");
      if (!heuArr.length) {
        for (let i = 1; i <= settingText[settingText.length - 1]; i++) {
          heuArr.push(i);
        }
        console.log(heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    } else {
      console.log("Not range detected");
      setting = parseInt(setting);
      if (isNaN(setting)) {
        setting = 9;
      }
    }

    if (setting == 9) {
      if (!heuArr.length) {
        heuArr = [1, 2, 3, 4, 5, 6, 7];
        console.log("Array renewed " + heuArr);
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
      console.log("Current remaining array " + heuArr);
    }

    if (
      setting == 1 ||
      (setting == 9 && roll == 1) ||
      (range == 1 && roll == 1)
    ) {
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

    if (
      setting == 2 ||
      (setting == 9 && roll == 2) ||
      (range == 1 && roll == 2)
    ) {
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

    if (
      setting == 3 ||
      (setting == 9 && roll == 3) ||
      (range == 1 && roll == 3)
    ) {
      return {
        peopleAtFirst: genNumbers(8) + 3,
        absentPeople: undefined,
        remainingPeople: undefined,
        giveUp: undefined,
        rollQn: ["A", "B"][genNumbers(2)],
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
        objectThree: undefined,
        groupOne: genNumbers(20) + 5,
        groupTwo: undefined,
        unitSentence: genNumbers(4) + 3,
        rollz: 4,
      };
    }

    if (
      setting == 5 ||
      (setting == 9 && roll == 5) ||
      (range == 1 && roll == 5)
    ) {
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

    if (
      setting == 6 ||
      (setting == 9 && roll == 6) ||
      (range == 1 && roll == 6)
    ) {
      return {
        rollz: 6,
        objectOne: ["A", "B", "C"][genNumbers(3)],
        objectTwo: ["X", "Y", "Z"][genNumbers(3)],
        objectTwoQ: genNumbers(3) + 2,
        total: genNumbers(45) + 5,
        rollQn: ["A", "B"][genNumbers(2)],
      };
    }

    if (
      setting == 7 ||
      (setting == 9 && roll == 7) ||
      (range == 1 && roll == 7)
    ) {
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
  if (level == "heuFourb") {
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
  }
  // Stats
  if (level == "heuFive") {
    let roll = undefined;
    let settingText = setting.toString();
    console.log(setting, settingText);

    if (settingText.includes("-")) {
      console.log("range detected");
      range = 1;
      settingText.split("-");
      if (!heuArr.length) {
        for (let i = 1; i <= settingText[settingText.length - 1]; i++) {
          heuArr.push(i);
        }
      }
      console.log(heuArr);
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    } else {
      console.log("Not range detected");
      setting = parseInt(setting);
      if (isNaN(setting)) {
        setting = 9;
      }
    }

    if (setting == 9) {
      if (!heuArr.length) {
        heuArr = [1, 2, 3, 4, 5, 6, 7];
        console.log("Array renewed");
      }
      roll = heuArr[genNumbers(heuArr.length)];
      let index = heuArr.indexOf(roll);
      heuArr.splice(index, 1);
    }

    if (
      setting == 1 ||
      (setting == 9 && roll == 1) ||
      (range == 1 && roll == 1)
    ) {
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

    if (
      setting == 2 ||
      (setting == 9 && roll == 2) ||
      (range == 1 && roll == 2)
    ) {
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

    if (
      setting == 3 ||
      (setting == 9 && roll == 3) ||
      (range == 1 && roll == 3)
    ) {
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

    if (
      setting == 4 ||
      (setting == 9 && roll == 4) ||
      (range == 1 && roll == 4)
    ) {
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

    if (
      setting == 5 ||
      (setting == 9 && roll == 5) ||
      (range == 1 && roll == 5)
    ) {
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

    if (
      setting == 6 ||
      (setting == 9 && roll == 6) ||
      (range == 1 && roll == 6)
    ) {
      return {
        rollz: 6,
        people: genNumbers(10) + 5,
        location: ["party", "gathering", "picnic"][genNumbers(3)],
        type: genNumbers(2),
      };
    }

    if (
      setting == 7 ||
      (setting == 9 && roll == 7) ||
      (range == 1 && roll == 7)
    ) {
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
  }

  if (level == "heuFiveb") {
    if (setting == 1) {
      console.log("Unchanged Object");
      return {
        object: ["sweets", "toys", "books"][genNumbers(3)],
        valueAFirst: genNumbers(40) + 10,
        valueBFirst: genNumbers(40) + 10,
        multiplier: genNumbers(5) + 2,
        happensTo: ["A", "B"][genNumbers(2)],
        valueAEnd: genNumbers(40) + 10,
        valueBEnd: genNumbers(40) + 10,
        question: ["AF", "BF", "AE", "BE"][genNumbers(4)],
      };
    }

    if (setting == 2) {
      console.log("Unchanged Total");
      valueA = genNumbers(40) + 10;
      valueB = genNumbers(40) + 10;
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

    if (setting == 3) {
      console.log("Unchanged Difference");
      valueA = genNumbers(40) + 10;
      valueB = genNumbers(40) + 10;
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
