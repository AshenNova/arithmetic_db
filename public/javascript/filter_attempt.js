const summaryBtn = document.querySelectorAll(".summary");
const clearBtn = document.querySelector(".clear_btn");

document.querySelectorAll(".click-summary").forEach((item, index) => {
  item.addEventListener("click", function (e) {
    summaryBtn.forEach((item, index2) => {
      if (index == index2) {
        summaryBtn[index].classList.toggle("hidden");
      } else {
        summaryBtn[index2].classList.add("hidden");
      }
    });
  });
});

document.querySelectorAll(".summaryCloseBtn").forEach((item, index) => {
  item.addEventListener("click", function (e) {
    summaryBtn.forEach((item, index2) => {
      if (index == index2) {
        summaryBtn[index].classList.toggle("hidden");
      } else {
        summaryBtn[index2].classList.add("hidden");
      }
    });
  });
});

clearBtn.addEventListener("click", function () {
  document.querySelector(".user_input").value = "";
  document.querySelector(".level_input").value = "";
  document.querySelector(".setting_input").value = "";
  document.querySelector(".mode_input").value = "";
  document.querySelector(".user_input").focus();
});
