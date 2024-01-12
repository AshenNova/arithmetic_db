const claimBtn = document.querySelectorAll(".claimBtn");
const rewardNameCl = document.querySelectorAll(".rewardName");
const rewardDescriptionCl = document.querySelectorAll(".rewardDescription");
const rewardRequirementCl = document.querySelectorAll(".rewardRequirement");
const rewardIdCl = document.querySelectorAll(".rewardId");

claimBtn.forEach((item, index) => {
  item.addEventListener("click", function (event) {
    console.log(index);
    console.log("I hear you!");
    const userName = $("#userName").text().trim();

    let claim = {
      id: rewardIdCl[index].textContent,
      user: userName,
      name: rewardNameCl[index].textContent,
      description: rewardDescriptionCl[index].textContent,
      requirement: rewardRequirementCl[index].textContent,
    };
    console.log(claim);
    $.ajax({
      url: "/user/points/rewards/claim",
      method: "POST",
      data: claim,
      success: function (res) {
        console.log("Received back");
        if (res == "Nil") alert("Sorry, this reward has been fully claimed.");
        if (res == "No") {
          alert("Not enough points");
        }
        if (res == "Yes") {
          alert("Congratulations! The reward has been claimed!");
          location.reload();
        }
      },
      error: function (e) {
        console.log(e);
      },
    });
  });
});

const rewardImageCl = document.querySelectorAll(".rewardImage");
const imagePopCl = document.querySelectorAll(".imagePop");
const imageCloseBtn = document.querySelectorAll(".imageClose");

rewardImageCl.forEach((item, index) => {
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

// SUMMIT BRAND NEW REWARD FORM
const formElem = document.querySelector("form");
formElem.addEventListener("submit", async (e) => {
  console.log("form submitting");
  e.preventDefault();
  await fetch("/user/points/rewards/new", {
    method: "POST",
    body: new FormData(formElem),
  })
    .then((response) => {
      if (response.status == 200) {
        alert("Reward was successfully added!");
        window.location.replace("/user/points/rewards");
      } else {
        alert("Sorry! Failed to add reward.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
