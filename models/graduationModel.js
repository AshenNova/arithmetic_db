const mongoose = require("mongoose");

const graduationSchema = new mongoose.Schema({
  picId: String,
  date: {
    type: Date,
    default: Date.now,
  },
  year: Number,
  name: String,
  link: String,
});

const Graduation = mongoose.model("graduation", graduationSchema);

module.exports = Graduation;
