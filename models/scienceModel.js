const mongoose = require("mongoose");

const scienceSchema = new mongoose.Schema({
  topic: { type: String, require: [true, "Please fill in a topic"] },
  subtopic: String,
  comment: String,
  level: { type: String, require: [true, "Please fill in a level"] },
  question: { type: String, require: [true, "Please fill in a question"] },
  answer: { type: String, require: [true, "Please fill in the answer"] },
  image: String,
  date: { type: Date, default: Date.now },
});

const Science = mongoose.model("sciences", scienceSchema);

module.exports = Science;
