const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  user: String,
  mode: String,
  level: String,
  time: Number,
  mistake: Number,
  score: Number,
  setting: String,
  extra: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  ip: String,
});

const Attempt = mongoose.model("attempts", attemptSchema);

module.exports = Attempt;