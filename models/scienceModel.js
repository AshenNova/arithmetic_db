const mongoose = require("mongoose");

const scienceSchema = new mongoose.Schema({
  topic: String,
  subtopic: String,
  comment: String,
  level: Number,
  question: String,
  answer: String,
  image: String,
  date: { type: Date, default: Date.now },
});

const Science = mongoose.model("sciences", scienceSchema);

module.exports = Science;
