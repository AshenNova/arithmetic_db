const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  outlet: String,
  day: String,
  time: String,
  slot: Number,
});

const Lesson = mongoose.model("lessons", lessonSchema);

module.exports = Lesson;
