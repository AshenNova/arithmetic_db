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

exports.getFilteredAttempts = async (req, res) => {
  const queryObj = req.query;
  console.log(queryObj);
  const page = req.params.page || 0;
  const limit = 20;

  const user = queryObj.user;
  const level = queryObj.level;
  const setting = queryObj.setting;

  let filter = {
    user: user,
    level: level,
    setting: setting,
  };

  // if (filter.user == "") delete filter.user;
  // if (filter.level == "") delete filter.level;
  // if (filter.setting == "") delete filter.setting;

  const keys = Object.keys(filter);

  console.log(keys);
  keys.forEach((key) => {
    console.log(filter[key]);
    if (filter[key] == "") {
      delete filter[key];
    }
  });

  console.log(filter);
  const attempts = await Attempt.find(filter)
    .sort({ date: -1 })
    .skip(page * limit)
    .limit(limit);
  // res.status(200).render("pages/attempts", { attempts: attempts });
  res.status(200).render("pages/attempts", { attempts });
};

exports.newAttempt = async (req, res) => {
  try {
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
    await newAttempt.save().then((doc) => {
      console.log(doc);
    });
  } catch {
    throw new Error();
  }
  res.status(204).send();
  // res.redirect("");
};
