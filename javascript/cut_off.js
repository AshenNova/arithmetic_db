export function cutOffCheck(level, setting, time) {
  console.log("Cut off timing activated!");
  console.log(time);
  let push = "No";

  // CALCULATIONS

  if (level == "calTwo") {
    if (setting == 12) {
      if (time > 30) {
        push = "Yes";
      }
    }
    if (setting == 1 || setting == 2 || setting == 3 || setting == 4) {
      if (time > 60) {
        push = "Yes";
      }
    }
    if (
      setting == 5 ||
      setting == 6 ||
      setting == 9 ||
      setting == 10 ||
      setting == 11 ||
      setting == 13
    ) {
      if (time > 90) {
        push = "Yes";
      }
    }
    if (setting == 7 || setting == 8) {
      if (time > 300) {
        push = "Yes";
      }
    }
  }
  if (level == "calThree") {
    if ([1, 2, 3, 4, 5, 9, 14].includes(setting)) {
      if (time > 60) {
        push = "Yes";
      }
    }
    if ([6].includes(setting)) {
      if (time > 90) {
        push = "Yes";
      }
    }
    if ([10, 11, 12, 13, 15, 17, 19].includes(setting)) {
      if (time > 120) {
        push = "Yes";
      }
    }
    if ([16, 20, 21].includes(setting)) {
      if (time > 180) {
        push = "Yes";
      }
    }
    if (setting == 7 || setting == 8 || setting == 18) {
      if (time > 300) {
        push = "Yes";
      }
    }
  }

  if (level == "calFour") {
    // if (setting == 1 || setting == 2 || setting == 3) {
    //   if (time > 60) {
    //     push = "Yes";
    //   }
    // } else {
    if (time > 120) {
      push = "Yes";
    }
  }

  if (level == "calFive") {
    if ([0, 9, 21, 34, 35].includes(setting)) {
      if (time > 180) push = "Yes";
    } else if ([1, 2, 3, 11, 24, 25, 29].includes(setting)) {
      if (time > 120) push = "Yes";
    } else if ([10].includes(setting)) {
      if (time > 360) push = "Yes";
    } else {
      if (time > 300) push = "Yes";
    }
  }
  // HEURISTICS

  if (level == "heuTwob") {
    if (time > 120) {
      push = "Yes";
    }
  }
  if (level == "heuThree") {
    if (time > 240) {
      push = "Yes";
    }
  }
  if (level == "heuThreeb") {
    if (time > 240) {
      push = "Yes";
    }
  }
  if (level == "heuFour") {
    if (time > 240) {
      push = "Yes";
    }
  }
  if (level == "heuFourb") {
    if (time > 240) {
      push = "Yes";
    }
  }
  if (level == "heuSix") {
    if (time > 300) {
      push = "Yes";
    }
  }
  if (level == "heuSixb") {
    if (time > 300) {
      push = "Yes";
    }
  }

  //CONCLUSION
  if (push == "Yes") {
    console.log("Too slow, Do better");
    return setting;
  }
}
