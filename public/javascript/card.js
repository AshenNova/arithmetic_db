const answers = document.querySelectorAll(".answer");
const cardback = document.querySelectorAll(".flip-card-back");
const buttons = document.querySelectorAll(".buttons");
const start = document.querySelector(".start");
const flipCard = document.querySelectorAll(".flip-card");
const nextBtn = document.querySelectorAll(".next");
const doneBtn = document.querySelectorAll(".done");
const correctBtn = document.querySelectorAll(".correct");
const incorrectBtn = document.querySelectorAll(".incorrect");
const questionID = document.querySelectorAll(".questionID");

let incorrectArr = [];
let correctArr = [];
answers.forEach((item, index) => {
  console.log(index);
  item.addEventListener("click", (e) => {
    item.classList.add("hidden");
    cardback[index].classList.remove("hidden");
    buttons[index].classList.remove("hidden");
  });
});

start.addEventListener("click", (e) => {
  start.classList.add("hidden");
  flipCard[0].classList.remove("hidden");
});

function nextQuestion(item, index) {
  // console.log(index, correctBtn.length);
  // item.addEventListener("click", (e) => {
  if (index != correctBtn.length - 1) {
    flipCard[index + 1].classList.remove("hidden");
    flipCard[index].classList.add("hidden");
  }
  // });
}
// let nextStart = 1;
correctBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nextQuestion(item, index);
  });
  const question = questionID[index].textContent;
  // console.log(question);
  correctArr.push(question);
});
incorrectBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nextQuestion(item, index);
    const question = questionID[index].textContent;
    console.log(question);
    incorrectArr.push(question);
  });
});
// nextBtn[nextBtn.length - 1].classList.add("hidden");
doneBtn[doneBtn.length - 1].classList.remove("hidden");

doneBtn[doneBtn.length - 1].addEventListener("click", (e) => {
  e.preventDefault();
  // incorrectArr = incorrectArr;
  let arr = {
    incorrect: incorrectArr,
    correct: correctArr,
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
});
