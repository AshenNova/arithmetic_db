const Attempt = require("../models/attemptModel");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

exports.getAllAttempts = async (req, res) => {
  const page = req.params.page || 0;
  const limit = 20;
  const attempts = await Attempt.find()
    .sort({ date: -1 })
    .skip(page * limit)
    .limit(limit);
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
    extra: req.body.extra,
    date: req.body.date,
  });
  // console.log(newAttempt);
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
