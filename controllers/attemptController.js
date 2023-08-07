const Attempt = require("../models/attemptModel");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

exports.getAllAttempts = async (req, res) => {
  console.log("Trying to get all attempts");
  const attempts = await Attempt.find();
  // res.status(200).render("pages/attempts", { attempts: attempts });
  res.status(200).render("pages/attempts", { attempts });
};

exports.newAttempt = (req, res) => {
  const newAttempt = new Attempt({
    user: req.body.user,
    level: req.body.level,
    time: req.body.time,
    mistake: req.body.mistake,
    score: req.body.score,
    setting: req.body.setting,
  });
  console.log(newAttempt);
  newAttempt
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    });
  // res.render("pages/attempts");
};
