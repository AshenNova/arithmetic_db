const answers = document.querySelectorAll(".answer");
const cardback = document.querySelectorAll(".flip-card-back");
const buttons = document.querySelectorAll(".buttons");
const start = document.querySelector(".start");
const flipCard = document.querySelectorAll(".flip-card");
const nextBtn = document.querySelectorAll(".next");
const doneBtn = document.querySelectorAll(".done");

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

// let nextStart = 1;
nextBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    flipCard[index + 1].classList.remove("hidden");
    flipCard[index].classList.add("hidden");

    //   console.log(index, nextBtn.length);
    //   if (index + 2 == nextBtn.length) {
    //     nextBtn[index + 2].classList.add("hidden");
    //     console.log("HUH?");
    //     document.querySelector(".done").classList.remove("hidden");
    //   }
  });
});
nextBtn[nextBtn.length - 1].classList.add("hidden");
doneBtn[doneBtn.length - 1].classList.remove("hidden");

// doneBtn[doneBtn.length - 1].addEventListener("click", (e) => {
// e.preventDefault();
// $.ajax({
//   url: "/science/topicS",
//   method: "GET",
//   success: function (res) {},
//   error: function (res) {},
// });

// });
