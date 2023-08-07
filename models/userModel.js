const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
    minLength: 6,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  admin: { type: Boolean, default: false },
  password: { type: String, minLength: 8, maxLength: 20 },
  confirmPassword: {
    type: String,
    require: [true, "Please confirm your password."],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
