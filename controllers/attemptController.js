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

  let start = new Date();
  start.setHours(0, 0, 0, 0);

  let end = new Date();
  end.setHours(23, 59, 59, 999);

  const todayCount = (await Attempt.find({ date: { $gte: start, $lt: end } }))
    .length;
  // todayCount = todayCount.length;
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

  let summaryObj = [];
  attemptsTwo.forEach((item) => summaryObj.push(item.summary));
  console.log(summaryObj);
  const filteredUser = "";
  let latestAttemptObj;
  res.status(200).render("pages/attempts", {
    attempts,
    paginatedAttempts,
    latestAttemptObj,
    todayCount,
    filteredUser,
    // summaryObj,
  });
};

exports.getFilteredAttempts = async (req, res) => {
  try {
    const queryObj = req.query;
    console.log(queryObj);
    const page = queryObj.page || 1;
    const limit = 15;

    console.log(queryObj);
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

    // HISTORY
    const params = queryObj;
    console.log(params);
    let latestAttemptObj = 0;
    if (params.hasOwnProperty("user")) {
      const user = filter.user;
      console.log(user);
      const latestAttempt = await Attempt.find({ user, tries: "1" }).sort({
        level: -1,
        date: -1,
      });

      let stageOne = [];
      for (let i = 0; i < latestAttempt.length; i++) {
        if (stageOne.includes(latestAttempt[i].level)) {
          console.log("Already in");
        } else {
          console.log("Nope");
          stageOne.push(latestAttempt[i].level);
        }
      }
      console.log(stageOne);
      let stageTwo = [];
      for (let i = 0; i < stageOne.length; i++) {
        let countEasy = 0;
        let countNormal = 0;
        let countHard = 0;
        for (let a = 0; a < latestAttempt.length; a++) {
          if (
            stageOne[i] == latestAttempt[a].level &&
            latestAttempt[a].mode == "Easy"
          ) {
            if (countEasy == 0) {
              stageTwo.push(latestAttempt[a]);
              countEasy += 1;
            }
          }
          if (
            stageOne[i] == latestAttempt[a].level &&
            latestAttempt[a].mode == "Normal"
          ) {
            if (countNormal == 0) {
              stageTwo.push(latestAttempt[a]);
              countNormal += 1;
            }
          }
          if (
            stageOne[i] == latestAttempt[a].level &&
            latestAttempt[a].mode == "Hardcore"
          ) {
            if (countHard == 0) {
              stageTwo.push(latestAttempt[a]);
              countHard += 1;
            }
            // count += 1;
          }
        }
        // console.log(`Stage 2: ${stageTwo}`);
        latestAttemptObj = stageTwo;
        // console.log(latestAttempt);
      }
    }
    const filteredUser = user;
    const todayCount = "";
    res.status(200).render("pages/attempts", {
      attempts,
      paginatedAttempts,
      latestAttemptObj,
      todayCount,
      filteredUser,
    });
  } catch (e) {
    console.log(e);
    res.redirect("/attempts");
  }
};

exports.newAttempt = async (req, res) => {
  let data = {
    eligible: 0,
  };
  console.log(req.body.summary);
  const user = req.body.user;
  const mode = req.body.mode;
  const level = req.body.level;
  const time = req.body.time;
  const skip = req.body.skip;
  const mistake = req.body.mistake;
  const setting = req.body.setting;
  const score = req.body.score;
  const attemptNum = req.body.attemptNum;
  const summary = req.body.summary;
  const ip = req.headers["x-forwarded-for"] || req.ip;
  console.log(`This is ${req.body.user}'s attempt number ${attemptNum}.`);
  const newAttempt = new Attempt({
    user: req.body.user,
    mode: req.body.mode,
    level: req.body.level,
    time: req.body.time,
    mistake: req.body.mistake,
    score: req.body.score,
    setting: req.body.setting,
    skip: req.body.skip,
    extra: req.body.extra,
    tries: req.body.attemptNum,
    ip: ip,
    summary: req.body.summary,
  });

  try {
    await newAttempt.save().then((doc) => {
      console.log(doc);
    });
  } catch (e) {
    console.log(e);
  }

  // QUERY PREVIOUS ATTEMPT (USER, LEVEL, MODE, SETTING)
  let previousAttempt;
  const previous = async (req, res) => {
    try {
      previousAttempt = await Attempt.find({
        user: user,
        level: level,
        mode: mode,
        setting: setting,
        tries: "1",
      })
        .sort({ date: -1 })
        .limit(2);
    } catch (e) {
      console.log(e);
    }
  };

  await previous();
  console.log(`Previous: ${previousAttempt[1]}`);
  data.previous = previousAttempt[1];

  // highScoreCheck();
  //highscore holder 1. LEVEL 2.MODE. SETTING. ATTEMPT

  let highscoreholder;
  const highscoreAll = async (req, res) => {
    try {
      highscoreholder = await Highscore.find({
        level: level,
        mode: mode,
        setting: setting,
      }).sort({ time: 1 });
      console.log(highscoreholder);
    } catch (e) {
      console.log(e);
    }
  };

  await highscoreAll();
  console.log(`Highscore: ${highscoreholder}`);
  data.highscore = highscoreholder[0];

  //highscore
  const highScore = async (req, res) => {
    try {
      console.log("Highscore check running");
      const checkExist = await Highscore.findOne({ level, mode }).sort({
        time: 1,
      });
      if (checkExist == null) {
        data.eligible = 1;
        // highscoreEligible = 1;
        const newHighscore = new Highscore({
          user: newAttempt.user,
          mode: newAttempt.mode,
          level: newAttempt.level,
          time: newAttempt.time,
          mistake: newAttempt.mistake,
          score: newAttempt.score,
          setting: newAttempt.setting,
        });
        await newHighscore.save().then((res) => {
          console.log("New highscore! 1");
        });
      } else {
        console.log("Comparing");
        console.log(checkExist.time, newAttempt.time);
        if (checkExist.time > newAttempt.time) {
          data.eligible = 1;
          const newHighscore = new Highscore({
            user: newAttempt.user,
            mode: newAttempt.mode,
            level: newAttempt.level,
            time: newAttempt.time,
            mistake: newAttempt.mistake,
            score: newAttempt.score,
            setting: newAttempt.setting,
          });
          await newHighscore.save().then((result) => {
            console.log("New highscore! 2");
          });
        } else {
          console.log("Too slow");
        }
      }
      // return 1;
    } catch (e) {
      console.log(e);
    }
  };

  //CHECK IF NEW HIGHSCORE HAS BEEN SET
  // const highScoreCheck = async (req, res) => {
  try {
    if (
      attemptNum == 1 &&
      !newAttempt.level.startsWith("cal") &&
      attemptNum == 1 &&
      !newAttempt.level.startsWith("heu")
    ) {
      await highScore();
    } else if (
      newAttempt.level.startsWith("cal") &&
      newAttempt.setting == "99" &&
      attemptNum == 1 &&
      skip == ""
    ) {
      await highScore();
    } else if (
      newAttempt.level.startsWith("heu") &&
      newAttempt.setting == "9" &&
      attemptNum == 1 &&
      skip == ""
    ) {
      await highScore();
    } else {
      console.log("Not eligible for highscore.");
      // res.send();
    }
    // await result.then(console.log(result));
  } catch (e) {
    console.log(e);
  }
  // };
  let award;
  const standardDeviation = async (req, res) => {
    try {
      const queryMean = await Attempt.find({
        level: level,
        mode: mode,
        tries: "1",
        setting: setting,
        skip: "",
      });
      let sum = 0;
      let allTheTiming = [];
      queryMean.forEach((item) => allTheTiming.push(item.time));
      allTheTiming = allTheTiming.sort(function (a, b) {
        return a - b;
      });
      const percentile25 = allTheTiming[Math.ceil(allTheTiming.length * 0.25)];
      const percentile75 = allTheTiming[Math.ceil(allTheTiming.length * 0.75)];
      console.log(allTheTiming);
      console.log(`25% = ${percentile25}, 75%=${percentile75}`);
      const interquartileRange = percentile75 - percentile25;
      let activeTimings = [];
      allTheTiming.forEach((item) => {
        if (
          item < percentile25 - interquartileRange * 1.5 ||
          item > percentile75 + 1.5 * interquartileRange
        ) {
          console.log("Outlier");
        } else {
          sum += item;
          activeTimings.push(item);
        }
      });
      const mean = sum / activeTimings.length;
      console.log(
        `Sum: ${sum}, Length: ${activeTimings.length} Mean: ${mean}, `
      );

      let xSquare = 0;
      activeTimings.forEach((item) => {
        xSquare += (item - mean) ** 2;
      });
      const variance = xSquare / activeTimings.length;
      const standardDev = Math.sqrt(variance);
      console.log(`x2: ${xSquare}, Variance: ${variance}, Sd: ${standardDev}`);

      const bronze = {
        lower: mean + standardDev,
        upper: mean - standardDev,
      };
      const silver = {
        lower: mean - standardDev,
        upper: mean - standardDev * 2,
      };
      const gold = {
        lower: mean - standardDev * 2,
        upper: mean - standardDev * 3,
      };
      const platinum = {
        lower: mean - standardDev * 3,
      };
      if (time > bronze.lower) {
        award = "Try harder";
      } else if (time <= bronze.lower && time > bronze.upper) {
        award = "Bronze";
      } else if (time <= silver.lower && time > silver.upper) {
        award = "Silver";
      } else if (time <= gold.lower && time > gold.upper) {
        award = "Gold";
      } else {
        award = "Platinum";
      }
      console.log(bronze, silver, gold, platinum);
      console.log(`You got ${award}!`);
      data.medals = {
        bronze,
        silver,
        gold,
      };
      data.award = award;
      data.standardDeviation = standardDev;
    } catch (e) {
      console.log(e);
    }
  };

  await standardDeviation();

  console.log(`Highscore?: ${data.eligible}`);
  res.send(JSON.stringify(data));
};

exports.monthlyHighscore = async (req, res) => {
  try {
    const allLevels = await Attempt.distinct("level");
    const allModes = await Attempt.distinct("mode");
    let thisMonthHigh = [];
    const thisMonth = new Date().getMonth() + 1;
    console.log(allLevels, allModes);

    for (let i = 0; i < allLevels.length; i++) {
      for (let x = 0; x < allModes.length; x++) {
        const thisMonthAttempts = await Attempt.find({
          $expr: { $eq: [{ $month: "$date" }, thisMonth] },
          level: allLevels[i],
          mode: allModes[x],
          tries: "1",
          // $or: [{ setting: "99" }, { setting: "9" }],
        }).sort({ level: 1, time: 1 });

        if (thisMonthAttempts[0]) {
          //THIS SETTLES THE NORMAL LEVELS
          if (
            !thisMonthAttempts[0].level.includes("cal") &&
            !thisMonthAttempts[0].level.includes("heu")
          ) {
            thisMonthHigh.push(thisMonthAttempts[0]);
          } else {
            //NOW I NEED TO SETTLE THE CAL AND HEURISTICS
            let genesis = 0;
            for (let x = 0; x < thisMonthAttempts.length; x++) {
              if (
                thisMonthAttempts[x].setting == 99 ||
                thisMonthAttempts[x].setting == 9
              ) {
                // console.log("Stage 1");

                if (
                  thisMonthAttempts[x].score == 3 ||
                  thisMonthAttempts[x].score == 5 ||
                  thisMonthAttempts[x].score == 10
                ) {
                  // console.log("Stage 2");

                  if (genesis == 0) {
                    thisMonthHigh.push(thisMonthAttempts[0]);
                    genesis += 1;
                  }
                }
              }
            }
          }
        }
        // }
      }
    }
    res.status(200).render("pages/monthly-highscore", { thisMonthHigh });
  } catch (e) {
    console.log(e);
  }
};

exports.getHighscore = async (req, res) => {
  try {
    //GETTING ALL UNIQUE LEVELS && MODES IN HIGHSCORE COLLECTION
    const highscoreLevels = await Highscore.distinct("level");
    const highscoreModes = await Highscore.distinct("mode");
    let highscoreHoldersArr = [];

    // for (let i = 0; i < highscoreLevels.length; i++) {
    //   for (let x = 0; x < highscoreModes.length; x++) {
    //     const highscoreHolder = await Highscore.find({
    //       level: highscoreLevels[i],
    //       mode: highscoreModes[x],
    //     })
    //       .sort({ time: 1 })
    //       .limit(1);
    //     // console.log(highscoreHolder);
    //     if (highscoreHolder[0]) highscoreHoldersArr.push(highscoreHolder[0]);
    //   }
    // }

    const highscoreHolder = await Highscore.find().sort({ level: 1, time: 1 });

    // let genesisTwo = 0;

    for (let a = 0; a < highscoreLevels.length; a++) {
      for (let m = 0; m < highscoreModes.length; m++) {
        let genesis = 0;
        for (let b = 0; b < highscoreHolder.length; b++) {
          if (
            highscoreHolder[b].mode == highscoreModes[m] &&
            highscoreHolder[b].level == highscoreLevels[a]
          ) {
            if (genesis == 0) {
              highscoreHoldersArr.push(highscoreHolder[b]);
              genesis += 1;
              // genesisTwo += 1;
            }
          }
        }
      }
    }
    console.log(highscoreHolder);
    res.status(200).render("pages/highscore", { highscoreHoldersArr });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    // const updating = await Attempt.updateMany({}, { $set: { tries: 1 } });
    // console.log(updating);
    const updating = await Attempt.updateOne(
      // { user: "Player", level: "3.17" },
      { user: "CaiusChong" },
      { $set: { user: "Caiuschong" } }
    );
    console.log(updating);
  } catch (e) {
    console.log(`Error ${e}`);
  }
};

const updateMany = async (req, res) => {
  try {
    // const updating = await Attempt.updateMany({}, { $set: { tries: 1 } });
    // console.log(updating);
    const updating = await Attempt.updateMany(
      { skip: { $exists: false } },
      { $set: { skip: "" } }
      // { user: "Yh" },
      // { $set: { user: "Youheng" } }
    );
    const updatingPlayer = await Highscore.updateMany(
      { skip: { $exists: false } },
      { $set: { skip: "" } }
      // { user: "Yh" },
      // { $set: { user: "Youheng" } }
    );
    console.log(updating);
  } catch (e) {
    console.log(`Error ${e}`);
  }
};

// updateMany();

const deleteMany = async (req, res) => {
  try {
    const deleteHigh = await Highscore.deleteMany({ user: "Player" });
    const deleteAttempts = await Attempt.deleteMany(
      { user: "Player" },
      { sort: { date: -1 } },
      { limit: 5 }
    );
    console.log(deleteHigh, deleteAttempts);
  } catch (e) {
    console.log(e);
  }
};

// deleteMany();
