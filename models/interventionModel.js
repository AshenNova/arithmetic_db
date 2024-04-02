const mongoose = require("mongoose");

const interventionSchema = new mongoose.Schema({
  student: String,
  date: { type: Date, default: Date.now },
  dateStart: { type: Date, default: Date.now },
  quantity: Number,
  level: String,
  setting: String,
  mode: String,
});

const Intervention = mongoose.model("interventions", interventionSchema);

module.exports = Intervention;
