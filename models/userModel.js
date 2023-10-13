const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 20,
  },
  DOB: { type: Date, required: [true, "Please provide your date of birth."] },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  admin: { type: Boolean, default: false },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minLength: 8,
    maxLength: 20,
    select: false, //SO THAT THE PASSWORD DOES NOT SHOW UP
  },
  confirmPassword: {
    type: String,
    require: [true, "Please confirm your password."],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password and confirm-password is not the same.",
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  loggedIn: { type: Date },
  points: { type: Number, default: 0 },
  gift: {
    type: Number,
    default: 0,
  },
  subject: {
    type: Array,
    // enum: ["Primary Math", "Primary Science"],
    default: "Primary Math",
  },
  incorrectScience: {
    type: Array,
  },
});

userSchema.pre("save", async function (next) {
  //SKIP TO THE NEXT IF NOT CHANGING PASSWORD.
  console.log("Checking password");
  if (!this.isModified("password")) return next();

  console.log("Encrypting...");

  //HASH PASSWORD WITH COST OF 12.
  this.password = await bcrypt.hash(this.password, 12);

  //'DELETE' CONFIRMPASSWORD
  this.confirmPassword = undefined;
});

// WE ARE NOW CREATING AN INSTANCE METHOD WHICH MAKES IT AVAILABLE TO BE USED ANYWHERE BY THIS COLLECTION.
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
