const claimBtn = document.querySelectorAll(".claimBtn");
const rewardNameCl = document.querySelectorAll(".rewardName");
const rewardDescriptionCl = document.querySelectorAll(".rewardDescription");
const rewardRequirementCl = document.querySelectorAll(".rewardRequirement");

claimBtn.forEach((item, index) => {
  item.addEventListener("click", function (event) {
    console.log(index);
    console.log("I hear you!");
    const userName = $("#userName").text().trim();
    let claim = {
      user: userName,
      name: rewardNameCl[index].textContent,
      description: rewardDescriptionCl[index].textContent,
      requirement: rewardRequirementCl[index].textContent,
    };
    $.ajax({
      url: "/user/points/rewards/claim",
      method: "POST",
      data: claim,
      success: function (res) {
        console.log("Received back");
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

// document
//   .querySelector("#customFileLabel")
//   .addEventListener("change", function (e) {
//     const tmppath = URL.createObjectURL(
//       document.querySelector("#customFile").files[0]
//     );
//     $("img").fadeIn("fast").attr("src", tmppath);
//     // document.querySelector("#customFileLabel").textContent =
//     //   document.querySelector("#customFile").files[0].name;
//   });

// document
//   .querySelector("#rewardSubmitForm")
//   .addEventListener("submit", function (e) {
//     console.log("AJAX!");
//     e.preventDefault();

//     const dataForm = document.querySelector("#rewardSubmitForm");
//     console.log(dataForm);
//     console.log("Creating new reward");
//     const newReward = {
//       rewardName: $("#rewardName").val(),
//       description: $("#description").val(),
//       imageURL: $("#customFile").val(),
//       requirement: $("#requirement").val(),
//     };
//     $.ajax({
//       url: "/user/points/rewards/new",
//       method: "POST",
//       data: newReward,
//       success: function (res) {
//         console.log("Received back");
//       },
//       error: function (e) {
//         console.log(e);
//       },
//     });
//   });
const formElem = document.querySelector("form");
formElem.addEventListener("submit", async (e) => {
  console.log("form submitting");
  e.preventDefault();
  await fetch("/user/points/rewards/new", {
    method: "POST",
    body: new FormData(formElem),
  })
    .then((response) => {
      if (response == "Success") alert("New Reward Added Successfully!");
      if (response == "Failed") alert("Sorry! New reward was not added.");
      location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
});

// console.log(rewardImageCl);
const rewardImageCl = document.querySelectorAll(".rewardImage");
const imagePopCl = document.querySelectorAll(".imagePop");
console.log(rewardImageCl);
console.log(imagePopCl);
rewardImageCl.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    console.log(item, index);
    imagePopCl[index].classList.remove("hidden");
  });
});
// function showPopup() {
//   const imagePop = document.querySelectorAll(".imagePop");
//   imagePop.forEach((item, index) => {
//     item.addEventListener("click", function (e) {
//       console.log("click" + " " + index);
//       item.classList.remove("hidden");
//     });
//   });
// }
