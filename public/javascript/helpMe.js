const helpMe = document.querySelector(".help-me-text");

export function helpList(level) {
  const helpArr = [
    "1.01",
    // "2.09",
    "3.04",
    "3.05",
    "3.05",
    "3.06",
    "4.02",
    "4.06",
    "4.11",
    "4.26",
    "6.05",
    "heuThree",
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
}
