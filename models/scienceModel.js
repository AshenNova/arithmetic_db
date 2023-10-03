const mongoose = require("mongoose");

const scienceSchema = new mongoose.Schema({
  topic: String,
  subtopic: String,
  comment: String,
  level: Number,
  text: String,
  answer: String,
  image: String,
  date: { type: Date, default: Date.now },
});

const Science = mongoose.model("science", scienceSchema);

module.exports = Science;
