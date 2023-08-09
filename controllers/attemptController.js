const Attempt = require("../models/attemptModel");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ip = require("ip");
app.use(bodyParser.urlencoded({ extended: false }));

function paginate(stuff, totalItems, perPage, currentPage) {
  console.log(totalItems);
  const totalPages = Math.ceil(totalItems / perPage);
  const startItem = (currentPage - 1) * perPage;
  const endItem = startItem + perPage;
  const results = stuff.slice(startItem, endItem);
  const pagination = {
    totalPages: totalPages,
    currentPage: currentPage,
    previousPage: currentPage - 1,
    nextPage: currentPage + 1,
  };
  return { pagination };
}

exports.getAllAttempts = async (req, res) => {
  console.log(`IP address is: ${req.ip}`);
  const page = req.query.page * 1 || 1;
  const limit = 20;
  const attempts = await Attempt.find()
    .sort({ date: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
  const attemptsTwo = await Attempt.find().sort({ date: -1 });
  const paginatedAttempts = paginate(
    attemptsTwo,
    attemptsTwo.length,
    limit,
    page
  );
  // const attempts = paginate(
  //   beforePaginationAttempts,
  //   beforePaginationAttempts.length,
  //   limit,
  //   page
  // );
  // console.log(attempts);
  console.log(paginatedAttempts);
  // res.status(200).render("pages/attempts", { attempts: attempts });
  res.status(200).render("pages/attempts", { attempts, paginatedAttempts });
};

exports.getFilteredAttempts = async (req, res) => {
  const queryObj = req.query;
  console.log(queryObj);
  const page = queryObj.page || 1;
  const limit = 20;

  const user = queryObj.user;
  const level = queryObj.level;
  const setting = queryObj.setting;
  const mode = queryObj.mode;

  let filter = {
    user: user.charAt(0).toUpperCase() + user.slice(1, user.length),
    level,
    setting,
    mode: mode.charAt(0).toUpperCase() + mode.slice(1, mode.length),
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
    .skip((page - 1) * limit)
    .limit(limit);

  const attemptsTwo = attempts;
  // const attemptsTwo = await Attempt.find().sort({ date: -1 });
  const paginatedAttempts = paginate(
    attemptsTwo,
    attemptsTwo.length,
    limit,
    page
  );

  // res.status(200).render("pages/attempts", { attempts: attempts });
  res.status(200).render("pages/attempts", { attempts, paginatedAttempts });
};

exports.newAttempt = async (req, res) => {
  // console.log(req.body);
  try {
    const newAttempt = new Attempt({
      user: req.body.user,
      mode: req.body.mode,
      level: req.body.level,
      time: req.body.time,
      mistake: req.body.mistake,
      score: req.body.score,
      setting: req.body.setting,
      extra: req.body.extra,
      date: req.body.date,
      ip: req.ip,
    });
    // console.log(newAttempt);

    await newAttempt.save().then((doc) => {
      console.log(doc);
      // res.setHeader("Content-Type", "text/plain");
      // res.end();
      // res.end();
      // res.setHeader("Cache-control", "no-store");
      res.status(204).end();
    });
  } catch (e) {
    console.log(e);
  }
};
