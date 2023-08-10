const mongoose = require("mongoose");

const highscoreSchema = new mongoose.schema({
  user: String,
  mode: String,
  time: Number,
  mistake: Number,
  setting: String,
  level: String,
  date: Date,
});

const Highscore = mongoose.model("highscore", highscoreSchema);

exports.module = Highscore;
