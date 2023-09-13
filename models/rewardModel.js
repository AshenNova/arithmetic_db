const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  rewardName: {
    type: String,
    required: [true, "Please enter a name for the reward"],
  },
  description: {
    type: String,
    required: [true, "Please enter some descriptions for the reward"],
  },
  requirement: {
    type: Number,
    required: [true, "Please enter the point requirements for the reward"],
  },
  link: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Reward = mongoose.model("rewards", rewardSchema);

module.exports = Reward;
