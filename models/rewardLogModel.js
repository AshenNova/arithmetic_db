const mongoose = require("mongoose");

const rewardLogSchema = new mongoose.Schema({
  username: String,
  description: String,
  claimed: { type: Date, default: Date.now },
  points: Number,
  reward: String,
});

const RewardLog = mongoose.model("RewardLog", rewardLogSchema);

module.exports = RewardLog;
