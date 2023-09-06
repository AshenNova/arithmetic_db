const claimBtn = document.querySelectorAll(".claimBtn");
const rewardNameCl = document.querySelectorAll(".rewardName");
const rewardDescriptionCl = document.querySelectorAll(".rewardDescription");
const rewardRequirementCl = document.querySelectorAll(".rewardRequirement");

console.log(claimBtn);
console.log(rewardNameCl);
console.log(rewardDescriptionCl);
console.log(rewardRequirementCl);
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
