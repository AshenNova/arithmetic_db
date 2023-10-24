const mongoose = require("mongoose");
const validator = require("validator");

const trialSchema = new mongoose.Schema({
  outlet: String,
  timing: String,
  otherTiming: String,
  childName: {
    type: String,
    required: [true, "Please fill in a name for the child"],
  },
});

const Trial = mongoose.model("trials", trialSchema);

module.exports = Trial;
