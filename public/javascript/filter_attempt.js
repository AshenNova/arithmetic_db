const summaryBtn = document.querySelectorAll(".summary");

document.querySelectorAll(".click-summary").forEach((item, index) => {
  item.addEventListener("click", function (e) {
    summaryBtn[index].classList.toggle("hidden");
  });
});

document.querySelectorAll(".summaryCloseBtn").forEach((item, index) => {
  item.addEventListener("click", function (e) {
    summaryBtn[index].classList.toggle("hidden");
  });
});
