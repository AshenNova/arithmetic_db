const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  user: String,
  mode: String,
  level: String,
  time: Number,
  mistake: Number,
  score: Number,
  setting: { type: String, default: "" },
  extra: String,
  skip: String,
  date: {
    type: Date,
    default: Date.now,
  },
  ip: String,
  tries: String,
  summary: { type: String },
  award: String,
  points: Number,
  subject: {
    type: String,
    default: "Math",
  },
  age: Number,
  interventionID: { type: String, default: "" },
  recommendCheck: { type: Boolean },
  recommendCount: Number,
});

const Attempt = mongoose.model("attempts", attemptSchema);

module.exports = Attempt;
