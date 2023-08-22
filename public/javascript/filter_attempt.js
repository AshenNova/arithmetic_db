document.querySelectorAll(".click-summary").forEach((item, index) => {
  item.addEventListener("click", function (e) {
    const summaryBtn = document.querySelectorAll(".summary");
    summaryBtn[index].classList.toggle("hidden");
  });
});
