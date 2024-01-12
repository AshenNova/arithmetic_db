const mongoose = require("mongoose");
const validator = require("validator");

const trialSchema = new mongoose.Schema({
  outlet: { type: String, required: [true, "Please choose an outlet."] },
  timing: {
    type: String,
    required: [true, "Please a suitable timing after choosing outlet."],
  },
  otherTiming: String,
  filledIn: {
    type: Date,
    default: Date.now,
  },
  childName: {
    type: String,
    required: [true, "Please fill in a name for the child"],
  },
  subject: {
    type: Array,
    required: [true, "Please choose at least 1 subject."],
  },
  childSurname: {
    type: String,
    required: [true, "Please fill in a surname for the child"],
  },
  DOB: {
    type: Date,
    required: [true, "Please fill in a Date of birth for the child"],
  },
  level: {
    type: String,
    required: [true, "What level is your child this year?"],
  },
  gender: {
    type: String,
    required: [true, "Please fill a gender"],
  },
  school: {
    type: String,
    required: [true, "Please tell us what school the child is in."],
  },
  parentOneName: {
    type: String,
    required: [true, "Please give the parent / guardian a name."],
  },
  parentOneSurname: {
    type: String,
    required: [true, "Please give the parent / guardian a surname."],
  },
  roleOne: {
    type: String,
    required: [true, "Please tell us your role."],
  },
  contactOne: {
    type: Number,
    minLength: [8, "The number you have provided is too short."],
    required: [true, "Please tell us your contact number."],
  },
  emailOne: {
    type: String,
    lowercase: true,
    require: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  parentTwoName: {
    type: String,
    // default: "",
    // required: [true, "Please give the parent / guardian a surname."],
  },
  parentTwoSurname: {
    type: String,
    // default: "",
    // required: [true, "Please give the parent / guardian a surname."],
  },
  roleTwo: {
    type: String,
    // required: [true, "Please tell us your role."],
  },
  contactTwo: {
    type: Number,
    // minLength: [8, "The number you have provided is too short."],
    // required: [true, "Please tell us your contact number."],
  },
  address: {
    type: String,
    // minLength: [8, "The number you have provided is too short."],
    // required: [true, "Please tell us your contact number."],
  },
  postal: {
    type: String,
    // minLength: [8, "The number you have provided is too short."],
    // required: [true, "Please tell us your contact number."],
  },

  questionA: String,
  questionB: { type: String, required: [true, "Please fill in the question."] },
  questionC: String,
  questionD: String,
  questionE: { type: String, required: [true, "Please fill in the question."] },
  questionF: { type: String, required: [true, "Please fill in the question."] },
  trialSession: {
    type: Boolean,
    default: false,
  },
});

const Trial = mongoose.model("trials", trialSchema);

module.exports = Trial;
