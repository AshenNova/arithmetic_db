const summaryBtn = document.querySelectorAll(".summary");

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
