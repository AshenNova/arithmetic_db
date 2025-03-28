const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema({
  name: String,
  exampaper_id: String,
  description: String,
  dateIssue: {
    type: Date,
    default: Date.now,
  },
  subject: String,
  issueTimes: {
    type: Number,
    default: 1,
  },
  linkA: String,
  linkB: String,
  dueDate: Date,
  completeDate: Date,
  status: {
    type: String,
    default: "Incomplete",
  },
  comment: String,
});

const Homework = mongoose.model("homeworks", homeworkSchema);

module.exports = Homework;
