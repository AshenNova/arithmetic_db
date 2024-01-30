const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  subject: String,
  year: Number,
  level: String,
  type: String,
  school: String,
  comment: String,
  link: String,
  paper: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const Exam = mongoose.model("exam", examSchema);

module.exports = Exam;
