const mongoose = require("mongoose");

const highscoreSchema = new mongoose.Schema({
  user: String,
  mode: String,
  level: String,
  time: Number,
  mistake: Number,
  score: Number,
  setting: String,
  date: { type: Date, default: Date.now },
});

const Highscore = mongoose.model("highscore", highscoreSchema);

module.exports = Highscore;
