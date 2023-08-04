export function resetStuff(player, levelSetting) {
  player = 1;
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
  calArrQns = [];
  calRange = [];
  setting = "";

  gold = 0;
  silver = 0;
  bronze = 0;
  if (document.querySelector(".trophy").childNodes.length > 0) {
    // document.querySelector('.trophy').removeChild(imageG)
    // document.querySelector('.trophy').removeChild(imageS)
    // document.querySelector('.trophy').removeChild(imageB)
    // document.querySelector('.trophy').removeChild(imageNMP)
    imageG.remove();
    imageS.remove();
    imageB.remove();
    imageNMP.remove();
    imageFailed.remove();
    imageCompleted.remove();
    arr.length = 0;
    arr2.length = 0;
    multiplesArr = [0];
  }

  ctx.clearRect(0, 0, 400, 275);

  console.log("reset button activated");
}
