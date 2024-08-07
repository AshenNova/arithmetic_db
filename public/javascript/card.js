const answers = document.querySelectorAll(".answer");
const cardback = document.querySelectorAll(".flip-card-back");
const buttons = document.querySelectorAll(".buttons");
const start = document.querySelector(".start");
const flipCard = document.querySelectorAll(".flip-card");
const nextBtn = document.querySelectorAll(".next");
const doneBtn = document.querySelector(".done");
const correctBtn = document.querySelectorAll(".correct");
const incorrectBtn = document.querySelectorAll(".incorrect");
const questionID = document.querySelectorAll(".questionID");
const questionCl = document.querySelectorAll(".question");

let incorrectArr = [];
let correctArr = [];
let click = 0;
let questionsClick = 0;
answers.forEach((item, index) => {
  console.log(index);
  item.addEventListener("click", (e) => {
    item.classList.add("hidden");
    cardback[index].classList.remove("hidden");
    buttons[index].classList.remove("hidden");
    questionCl[index].classList.add("question-bg");
  });
});

start.addEventListener("click", (e) => {
  start.classList.add("hidden");
  flipCard[0].classList.remove("hidden");
  document.querySelector(".modeOfUse").classList.add("hidden");
});

function nextQuestion(item, index) {
  console.log(index, correctBtn.length);
  // console.log(index, correctBtn.length);
  // item.addEventListener("click", (e) => {
  if (index != correctBtn.length - 1) {
    flipCard[index + 1].classList.remove("hidden");
    flipCard[index].classList.add("hidden");
  }
  if (index == correctBtn.length - 1) {
    flipCard[index].classList.add("hidden");
    doneBtn.classList.remove("hidden");
  }
  // });
}
// let nextStart = 1;
correctBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nextQuestion(item, index);
  });
  const question = questionID[index].textContent;
  if (!correctArr.includes(question)) {
    correctArr.push(question);
    questionsClick += 1;
  }
});
incorrectBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nextQuestion(item, index);
    const question = questionID[index].textContent;
    console.log(question);
    if (!incorrectArr.includes(question)) {
      incorrectArr.push(question);
      questionsClick += 1;
    }
  });
});
// nextBtn[nextBtn.length - 1].classList.add("hidden");

doneBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (click == 0) {
    click += 1;
    // incorrectArr = incorrectArr;
    let arr = {
      incorrect: incorrectArr,
      correct: correctArr,
      questions: questionsClick,
    };

    console.log(incorrectArr);
    // console.log(data);
    $.ajax({
      url: "/science/updateUserScience",
      method: "POST",
      // contentType: "application/json",
      // data: JSON.stringify(arr),
      data: arr,

      success: function (res) {
        window.location.replace("/science/topics");
      },
      error: function (res) {},
    });
  }
});
