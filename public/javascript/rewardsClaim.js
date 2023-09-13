const rewardImageCl = document.querySelectorAll(".rewardImage");
const imagePopCl = document.querySelectorAll(".imagePop");
const imageCloseBtn = document.querySelectorAll(".imageClose");

rewardImageCl.forEach((item, index) => {
  console.log("Image clicked");
  item.addEventListener("click", function (e) {
    imagePopCl.forEach((item) => {
      item.classList.add("hidden");
    });
    console.log(item, index);
    imagePopCl[index].classList.remove("hidden");
  });
});

imageCloseBtn.forEach((item) => {
  console.log("Closing");
  item.addEventListener("click", function () {
    imagePopCl.forEach((item2) => {
      item2.classList.add("hidden");
    });
  });
});
