const mongoose = require("mongoose");

const highscoreSchema = new mongoose.Schema({
  user: String,
  mode: String,
  level: String,
  time: Number,
  mistake: Number,
  score: Number,
  setting: { type: String, default: 0 },
  date: { type: Date, default: Date.now },
  age: Number,
});

const Highscore = mongoose.model("highscore", highscoreSchema);

module.exports = Highscore;
