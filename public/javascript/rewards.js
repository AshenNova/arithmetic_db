const claimBtn = document.querySelectorAll(".claimBtn");
const rewardNameCl = document.querySelectorAll(".rewardName");
const rewardDescriptionCl = document.querySelectorAll(".rewardDescription");
const rewardRequirementCl = document.querySelectorAll(".rewardRequirement");

console.log(claimBtn);
console.log(rewardNameCl);
console.log(rewardDescriptionCl);
console.log(rewardRequirementCl);
claimBtn.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    console.log(index);
    console.log("I hear you!");
    console.log(rewardNameCl[index].textContent);
    console.log(rewardDescriptionCl[index].textContent);
    console.log(rewardRequirementCl[index].textContent);
  });
});
