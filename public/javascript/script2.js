if (level == 3.7){
  p.numTwo = 1000;
  if (p.unitMeasurement == "$"){
    p.numTwo = 100;
    p.secondUnitMeasurement = "¢";
    p.numOne = p.numOne*p.numTwo+p.numThree
    displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
  } else if (p.unitMeasurement == "m"){
    p.numTwo = 100;
    p.secondUnitMeasurement = "cm";
    p.numOne = p.numOne*p.numTwo+p.numThree
    displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`;
 } else {
    if (p.option == "2"){
      p.numFour = p.numThree
    }
    p.numOne = p.numOne*1000+p.numFour
    if (p.unitMeasurement == "km"){
      p.secondUnitMeasurement = "m";
    }
    if (p.unitMeasurement == "ℓ") {
      p.secondUnitMeasurement = "mℓ";
    }
    if (p.unitMeasurement == "kg" ){
      p.secondUnitMeasurement = "g";
    }
  displayProblem.innerHTML = `${p.numOne}${p.secondUnitMeasurement} =`
  }
  //displaying second unit of measurement
  if (p.unitMeasurement == "$"){
    secondUnitMeasurement.textContent = `${p.unitMeasurement}`
  } else {
      if (p.unitMeasurement == "ℓ"){
        p.unitMeasurement = "L"
        p.secondUnitMeasurement = "ml"
      }
      secondUnitMeasurement.textContent = `${p.unitMeasurement}, ${p.secondUnitMeasurement}`
      }
}


if (level == 3.7){
  console.log(p.numOne, p.numTwo);
  p.remainder = p.numOne%p.numTwo
  if (p.unitMeasurement == "$"){
    correctAnswer = p.unitMeasurement + p.numOne/100
  } else if (p.unitMeasurement == "m"){
    correctAnswer = Math.floor(p.numOne/100) + p.unitMeasurement + p.remainder + p.secondUnitMeasurement
  } else { 
    if (p.unitMeasurement == "ℓ"){ 
      correctAnswer = Math.floor(p.numOne/p.numTwo) + "L" + p.remainder + "ml"
    } else {
      correctAnswer = Math.floor(p.numOne/p.numTwo) + p.unitMeasurement + p.remainder + p.secondUnitMeasurement
      console.log(`The correct answer is ${correctAnswer}`);
      }
  }
}