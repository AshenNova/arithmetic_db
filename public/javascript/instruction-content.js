export function instructionsContent(level) {
  const book = [
    3.12,
    3.16,
    3.19,
    4.15,
    4.17,
    4.18,
    4.21,
    4.23,
    4.26,
    5.12,
    "calOne",
    "caTwo",
    "calThree",
    "calFour",
    "calFive",
    "calFiveb",
    "calSix",
    "calSixb",
    "heuOne",
    "heuTwo",
    "heuTwob",
    "heuThree",
    "heuThreeb",
    "heuFour",
    "heuFourb",
    "heuFive",
    "heuFiveb",
    "heuSix",
    "heuSixb",
  ];
  if (book.includes(level)) {
    document.querySelector(".fa-book").classList.remove("hidden");
  }
  console.log("CHECKING FOR INSTRUCTIONS FOR " + level);
  const list = [
    1.04, 1.05, 2.05, 2.07, 4.03, 3.06, 3.07, 3.09, 3.16, 4.0, 4.06, 4.09, 4.21,
    4.24, 5.0, 5.01, 5.02, 5.03,
  ];
  if (list.includes(level)) {
    document.querySelector(".fa-pencil").classList.remove("hidden");
  }
  if (level == 1.04) {
    return `
    1 + 2 = 3 or 3 = 2 + 1</br>
    c ± d = r or r = c ± d</br>
    Use: 'c+', 'c-', 'd-', 'r+' or 'r-' `;
  } else if (level == 1.05) {
    return `Use: 'c+', 'c-', 'd-', 'r+' or 'r-' `;
  } else if (level == 2.05) {
    return `Form the number`;
  } else if (level == 2.07 || level == 4.03) {
    return `Answer using <u>1</u> or <u>2</u> only.`;
  } else if (level == 3.06) {
    return `Do not leave any spaces between answers.</br>
        Answer using capital 'L' and 'ml' for volume`;
  } else if (level == 3.07) {
    return `2 possible ways to answer.</br>
    <hr>
    1. Give the final answer<p>
    5, 3, 2 => <u>15</u></br>
    <p>
    2. Progression</br>
    5, 3, 5 => <u>5, 15</u></br>
    `;
  } else if (level == 3.09) {
    return `Give your answer it its simplest form.</br>
    eg. 2/3`;
  } else if (level == 3.16) {
    return `
    1. Triangle Pattern </br>
    Form the number statement.
    <hr>
    2. Continuous Pattern </br>
    Form an Equation using 'n' from the pattern and provide an answer.
    <hr>
    3. Square Number Pattern </br> 
    Take note of the pattern and form the number statement and provide the answer for the other pattern
    <hr>
    4. Position Pattern</br>
    Take note of the repeated pattern and use it to find the position of the other pattern
    <hr>
`;
  } else if (level == 4.0) {
    return `List the factors in pairs and in ascending order.<br>
    </p>
    eg. Factors of 20</br>
    <u>1x20, 2x10, 4x5</u>
        `;
  } else if (level == 4.06 || level == 4.24) {
    return `
    Do not simplify.
    `;
  } else if (level == 4.09) {
    return `Directly convert the decimals to fractions.</br>
    Do not need to simplify`;
  } else if (level == 4.21) {
    return `Present the last number statement with the result.<br>
    eg. 3x4=12
    `;
  } else if (level == 5.0) {
    return `
    Form the appropriate number statement.
    `;
  } else if (level == 5.01) {
    return `
    Form an equation using</br>
    Multiplication of fraction</br>
    RC = Top x Bottom
    `;
  } else if (level == 5.02) {
    return `
    Make the numerators the same.</br>
    Present the next line when given this question.
    `;
  } else if (level == 5.03) {
    return `
    If the answer or clue is in decimal, give the result as an answer.
    </p>
    Otherwise, give the answer in number statement form.</br>
    Eg. 1/2x100</br>
    Eg. 1:100</br>
    Do not need to simplify.

    `;
  }
}
