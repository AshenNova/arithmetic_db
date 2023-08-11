const Attempt = require("../models/attemptModel");
const Highscore = require("../models/highscoreModel");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ip = require("ip");
const { exists } = require("../models/attemptModel");

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
  // console.log(`IP address is: ${req.ip}`);
  const page = req.query.page * 1 || 1;
  const limit = 20;
  const attempts = await Attempt.find()
    .sort({ date: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
  const attemptsTwo = await Attempt.find().sort({ date: -1 });
  // console.log(`Attempts with filter: ${attemptsTwo}`);
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
  // console.log(paginatedAttempts);
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

  // console.log(keys);
  keys.forEach((key) => {
    // console.log(filter[key]);
    if (filter[key] == "") {
      delete filter[key];
    }
  });
  const attempts = await Attempt.find(filter)
    .sort({ date: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  // console.log(`Filtered ${attempts}`);
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
  const level = req.body.level;
  const mode = req.body.mode;
  const attemptNum = req.body.attemptNum;
  console.log(`This is ${req.body.user}'s attempt number ${attemptNum}.`);
  const newAttempt = new Attempt({
    user: req.body.user,
    mode: req.body.mode,
    level: req.body.level,
    time: req.body.time,
    mistake: req.body.mistake,
    score: req.body.score,
    setting: req.body.setting,
    extra: req.body.extra,
    // date: req.body.date,
    ip: req.ip,
  });
  // console.log(`New Attempt Obj: ${newAttempt}`);
  const highScore = async (req, res) => {
    console.log("Highscore check running");
    const checkExist = await Highscore.findOne({ level, mode });
    console.log(checkExist);
    if (checkExist == null) {
      const newHighscore = new Highscore({
        user: newAttempt.user,
        mode: newAttempt.mode,
        level: newAttempt.level,
        time: newAttempt.time,
        mistake: newAttempt.mistake,
        score: newAttempt.score,
        setting: newAttempt.setting,
      });
      await newHighscore.save().then((result) => console.log("New highscore!"));
    } else {
      console.log("Comparing");
      if (checkExist.time > newAttempt.time) {
        const newHighscore = new Highscore({
          user: newAttempt.user,
          mode: newAttempt.mode,
          level: newAttempt.level,
          time: newAttempt.time,
          mistake: newAttempt.mistake,
          score: newAttempt.score,
          setting: newAttempt.setting,
        });
        await newHighscore
          .save()
          .then((result) => console.log("New highscore!"));
      } else {
        console.log("Too slow");
      }
    }
  };
  try {
    await newAttempt.save().then((doc) => {
      console.log(doc);
    });

    // DO NOT CHECK HIGHSCOREF IF
    // 1) ATTEMPT ISNT NUMBER 1`
    // 2) IF LEVEL IS CAL, SETTING HAS TO BE 99.
    //3) IF LEVEL IS HEU SETTING NEEDS TO BE 9.
    if (
      attemptNum == 1 &&
      !newAttempt.level.startsWith("cal") &&
      attemptNum == 1 &&
      !newAttempt.level.startsWith("heu")
    ) {
      highScore();
    } else if (
      newAttempt.level.startsWith("cal") &&
      newAttempt.setting == "99" &&
      attemptNum == 1
    ) {
      highScore();
    } else if (
      newAttempt.level.startsWith("heu") &&
      newAttempt.setting == "9" &&
      attemptNum == 1
    ) {
      highScore();
    } else {
      console.log("Not eligible for highscore.");
    }
  } catch (e) {
    console.log(e);
  }
  res.send();
};

exports.getHighscore = async (req, res) => {
  try {
    const allLevels = await Attempt.distinct("level");
    const allModes = await Attempt.distinct("mode");
    let thisMonthHigh = [];
    const thisMonth = new Date().getMonth() + 1;
    // console.log(`This month is ${thisMonth}`);
    for (let i = 0; i < allLevels.length; i++) {
      for (let x = 0; x < allModes.length; x++) {
        const thisMonthAttempts = await Attempt.find({
          $expr: { $eq: [{ $month: "$date" }, thisMonth] },
          level: allLevels[i],
          mode: allModes[x],
        }).sort({ level: 1, time: 1 });
        if (thisMonthAttempts[0]) {
          if (
            !thisMonthAttempts[0].level.startsWith("cal") &&
            !thisMonthAttempts[0].level.startsWith("heu")
          )
            thisMonthHigh.push(thisMonthAttempts[0]);
          for (let y = 0; y < thisMonthAttempts.length; y++) {
            if (thisMonthAttempts[y].mode != "Hardcore") {
              // IF NOT IN HARDCORE. CALCULATIONS HAS TO SCORE 10 AND SETTING AT 99
              if (
                thisMonthAttempts[y].level.startsWith("cal") &&
                thisMonthAttempts[y].score == 10 &&
                thisMonthAttempts[y].setting == 99
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
              // IF NOT IN HARDCORE. HEURISTICS HAS TO SCORE 10 AND SETTING AT 9
              if (
                thisMonthAttempts[y].level.startsWith("heu") &&
                thisMonthAttempts[y].score == 10 &&
                thisMonthAttempts[y].setting == 9
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
              // IF NOT IN HARDCORE. HEURISTICS IS 6 HAS TO SCORE 5 AND SETTING AT 9
              if (
                thisMonthAttempts[y].level.startsWith("heuSix") &&
                thisMonthAttempts[y].score == 10 &&
                thisMonthAttempts[y].setting == 9
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
              // IF NOT IN HARDCORE. CAL6B HAS TO SCORE 5 AND SETTING AT 99
              if (
                thisMonthAttempts[y].level.startsWith("calSix") &&
                thisMonthAttempts[y].score == 5 &&
                thisMonthAttempts[y].setting == 99
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
            }
            if (thisMonthAttempts[y].mode == "Hardcore") {
              if (
                thisMonthAttempts[y].level.startsWith("heu") &&
                thisMonthAttempts[y].score == 5 &&
                thisMonthAttempts[y].setting == 9
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
              if (
                thisMonthAttempts[y].level.startsWith("heuSix") &&
                thisMonthAttempts[y].score == 3 &&
                thisMonthAttempts[y].setting == 9
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
              if (
                thisMonthAttempts[y].level.startsWith("cal") &&
                thisMonthAttempts[y].score == 10 &&
                thisMonthAttempts[y].setting == 99
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
              if (
                thisMonthAttempts[y].level.startsWith("calSix") &&
                thisMonthAttempts[y].score == 3 &&
                thisMonthAttempts[y].setting == 99
              ) {
                thisMonthHigh.push(thisMonthAttempts[y]);
              }
            }
          }
        }
      }
    }
    // console.log(thisMonthHigh);

    //GETTING ALL UNIQUE LEVELS && MODES IN HIGHSCORE COLLECTION
    const highscoreLevels = await Highscore.distinct("level");
    const highscoreModes = await Highscore.distinct("mode");
    let highscoreHoldersArr = [];

    // console.log(typeof highscoreHoldersArr);
    for (let i = 0; i < highscoreLevels.length; i++) {
      for (let x = 0; x < highscoreModes.length; x++) {
        const highscoreHolder = await Highscore.find({
          level: highscoreLevels[i],
          mode: highscoreModes[x],
        })
          .sort({ date: -1 })
          .limit(1);
        // console.log(highscoreHolder);
        if (highscoreHolder[0]) highscoreHoldersArr.push(highscoreHolder[0]);
      }
    }
    // highscoreHoldersArr = await Highscore.find({ level: highscoreLevels });
    // console.log(`In the arr: ${highscoreHoldersArr}`);
    // highscoreHolderArr = JSON.parse(highscoreHolderArr);
    res
      .status(200)
      .render("pages/highscore", { thisMonthHigh, highscoreHoldersArr });
  } catch (error) {
    console.log(error);
  }
};
