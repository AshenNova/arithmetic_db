const Attempt = require("../models/attemptModel");
const Highscore = require("../models/highscoreModel");
const User = require("../models/userModel");
const RewardLog = require("../models/rewardLogModel");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ip = require("ip");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const schedule = require("node-schedule");
const { exists } = require("../models/attemptModel");
const { findById } = require("../models/userModel");

app.use(bodyParser.urlencoded({ extended: false }));

// let username;
// let authenticate;
// let currentUser;
// authenticate.login = false;

// let someDate = Date.now();
// schedule.scheduleJob(someDate + 5000, () => {
//   console.log("RUN FOREST RUN!");
// });
// console.log(`Date: ${Date.now()}`);
// schedule.scheduleJob("0 0 1 * *", async (req, res) => {
//   const admin = await User.findOne({ username: "kenneth lin" });
//   console.log(admin.points);
//   const newPoints = admin.points + 100;
//   await User.findByIdAndUpdate(admin._id, { points: newPoints });
// });

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

exports.getAllAttempts = catchAsync(async (req, res, next) => {
  // console.log(`IP address is: ${req.ip}`);
  console.log("Showing all results");
  const page = req.query.page * 1 || 1;
  const limit = 20;
  let queryObj;

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
  console.log(paginatedAttempts.pagination);
  const logRewards = await RewardLog.find().sort({ claimed: -1 }).limit(10);
  let summaryObj = attemptsTwo[0];
  const filteredUser = "";
  let latestAttemptObj;
  let authenticate = req.auth;
  let currentUser = req.user;
  let username = req.user.username;

  res.status(200).render("pages/attempts", {
    attempts,
    paginatedAttempts,
    latestAttemptObj,
    todayCount,
    filteredUser,
    summaryObj,
    username,
    authenticate,
    currentUser,
    logRewards,
    queryObj,
  });
});

exports.getFilteredAttempts = catchAsync(async (req, res, next) => {
  // try {
  console.log("Attempting to filter");
  const queryObj = req.query;
  // console.log(queryObj);
  const page = queryObj.page * 1 || 1;
  const limit = 20;

  // console.log(queryObj);
  console.log(req.params);
  console.log(req.query);
  let user = queryObj.user;
  const level = queryObj.level;
  const setting = queryObj.setting;
  const mode = queryObj.mode;

  let filter = {};
  let tempName = [];
  if (user != "") {
    user = user.split(" ");
    user.forEach((name) => {
      // console.log(name);
      tempName.push(name.charAt(0).toUpperCase() + name.slice(1, name.length));
    });
    filter.user = tempName.join(" ");
  }
  if (level != "") filter.level = level;
  if (setting != "") filter.setting = setting;
  if (mode != "") filter.mode = mode;

  const filteredUser = filter.user;
  // console.log(`${filteredUser}?`);
  const attempts = await Attempt.find(filter)
    .sort({ date: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const attemptsTwo = await Attempt.find(filter).sort({ date: -1 });
  // .skip((page - 1) * limit)
  // .limit(limit);

  // const attemptsTwo = attempts;
  const paginatedAttempts = paginate(
    attemptsTwo,
    attemptsTwo.length,
    limit,
    page
  );
  console.log(paginatedAttempts.pagination);
  // HISTORY
  const params = queryObj;
  // console.log(params);
  let latestAttemptObj = 0;
  if (filter.hasOwnProperty("user")) {
    // const filterUserStr = filter.user.split(" ");
    const user = filter.user;
    // console.log(user);
    const latestAttempt = await Attempt.find({
      user: { $regex: user, $options: "i" },
      // user,
      tries: "1",
    }).sort({
      level: -1,
      date: -1,
    });

    // console.log(latestAttempt);
    let stageOne = [];
    for (let i = 0; i < latestAttempt.length; i++) {
      if (stageOne.includes(latestAttempt[i].level)) {
        // console.log("Already in");
      } else {
        // console.log("Nope");
        stageOne.push(latestAttempt[i].level);
      }
    }
    // console.log(stageOne);
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

  const todayCount = "";
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let logRewards;
  console.log(queryObj);
  res.status(200).render("pages/attempts", {
    queryObj,
    attempts,
    paginatedAttempts,
    latestAttemptObj,
    todayCount,
    filteredUser,
    username,
    authenticate,
    currentUser,
    logRewards,
  });
  // }
  // catch (e) {
  //   console.log(e);
  //   res.redirect("/attempts");
  // }
});

function points(level, award, age, eligible, setting, mode) {
  console.log(`Level: ${level}, award: ${award}, Age: ${age}`);
  let points = 0;
  if (award == "Platinum") {
    points = 5;
  } else if (award == "Gold") {
    points = 4;
  } else if (award == "Silver") {
    points = 3;
  } else if (award == "Bronze") {
    points = 2;
  } else {
    points = 1;
  }
  if (eligible == 1) points = 10;

  const levelStr = level;
  let multiplier = 1;
  let ageSituable = 0;
  if (
    levelStr.startsWith("1") ||
    levelStr.startsWith("calOne") ||
    levelStr.startsWith("heuOne")
  ) {
    console.log("Level 1s");
    ageSituable = 7;
  }
  if (
    levelStr.startsWith("2") ||
    levelStr.startsWith("calTwo") ||
    levelStr.startsWith("heuTwo")
  ) {
    console.log("Level 2s");
    ageSituable = 8;
    // multiplier = 2;
  }
  if (
    levelStr.startsWith("3") ||
    levelStr.startsWith("calThree") ||
    levelStr.startsWith("heuThree")
  ) {
    console.log("Level 3s");
    ageSituable = 9;
    // multiplier = 3;
  }
  if (
    levelStr.startsWith("4") ||
    levelStr.startsWith("calFour") ||
    levelStr.startsWith("heuFour")
  ) {
    console.log("Level 4s");
    ageSituable = 10;
    // multiplier = 4;
  }
  if (
    levelStr.startsWith("5") ||
    levelStr.startsWith("calFive") ||
    levelStr.startsWith("heuFive")
  ) {
    console.log("Level 5s");
    ageSituable = 11;
    // multiplier = 5;
  }
  if (
    levelStr.startsWith("6") ||
    levelStr.startsWith("calSix") ||
    levelStr.startsWith("heuSix")
  ) {
    console.log("Level 6s");
    ageSituable = 12;
    // multiplier = 6;
  }
  if (levelStr.startsWith("cal") && setting == "99") {
    multiplier += 1;
  }
  if (levelStr.startsWith("heu") && setting == "9") {
    multiplier += 2;
  }
  if (age - ageSituable > 0) multiplier *= 0.5;
  if (age - ageSituable == 0) multiplier *= 1;
  if (age - ageSituable < 0) multiplier *= 2;

  return points * multiplier;
}

exports.newAttempt = catchAsync(async (req, res, next) => {
  let data = {
    eligible: 0,
  };

  // console.log(res.recommend);
  const { recommend } = res;

  // RECEIVE DATA (MUST BE ON TOP)
  const user = req.body.user;
  const mode = req.body.mode;
  const level = req.body.level;
  const time = req.body.time;
  const skip = req.body.skip;
  const mistake = req.body.mistake;
  const setting = req.body.setting;
  const score = req.body.score;
  const tries = req.body.tries;
  const attemptNum = req.body.attemptNum;
  const summary = req.body.summary;
  const ip = req.headers["x-forwarded-for"] || req.ip;
  console.log(`This is ${req.body.user}'s attempt number ${attemptNum}.`);

  // QUERY PREVIOUS ATTEMPT (USER, LEVEL, MODE, SETTING)
  let previousAttempt;

  const DOB = (await User.findOne({ username: user.toLowerCase() })).DOB;
  const currentAge = new Date().getFullYear() - DOB.getFullYear();
  const previous = async (req, res) => {
    try {
      previousAttempt = await Attempt.find({
        user: user,
        level: level,
        mode: mode,
        setting: setting,
        tries: "1",
        subject: "Math",
      })
        .sort({ date: -1 })
        .limit(2);
      data.previous = previousAttempt[0];
    } catch (e) {
      console.log(e);
    }
  };

  await previous();

  // highScoreCheck();
  //highscore holder 1. LEVEL 2.MODE. SETTING. ATTEMPT

  let highscoreholder;
  const highscoreAll = async (req, res) => {
    try {
      highscoreholder = await Highscore.findOne({
        level: level,
        mode: mode,
        setting: setting,
        age: age,
      }).sort({ time: 1 });
      console.log(`high score holder: ${highscoreholder}`);
      data.highscore = highscoreholder;
    } catch (e) {
      console.log(e);
    }
  };

  await highscoreAll();

  //highscore
  const highScore = async (req, res) => {
    try {
      // const checkMin = await Attempt.find({ level, mode }).count();
      const checkMin = await Attempt.find({
        level,
        mode,
        age: currentAge,
      }).count();
      if (checkMin > 5) {
        console.log("Minimum met");
        console.log("Highscore check running");
        const checkExist = await Highscore.findOne({
          level,
          mode,
          age: currentAge,
        }).sort({
          time: 1,
        });
        if (checkExist == null) {
          data.eligible = 1;
          // highscoreEligible = 1;
          const newHighscore = new Highscore({
            user: user,
            mode: mode,
            level: level,
            time: time,
            mistake: mistake,
            score: score,
            setting: setting,
            age: currentAge,
          });
          await newHighscore.save().then((res) => {
            console.log("New highscore! 1");
          });
        } else {
          console.log("Comparing");
          // data.eligible = 0;
          // console.log(checkExist.time, newAttempt.time);
          console.log(`Age: ${DOB}`);
          if (checkExist.time > time) {
            data.eligible = 1;
            const newHighscore = new Highscore({
              user: user,
              mode: mode,
              level: level,
              time: time,
              mistake: mistake,
              score: score,
              setting: setting,
              age: currentAge,
            });
            await newHighscore.save().then((result) => {
              console.log("New highscore! 2");
            });
          } else {
            console.log("Too slow");
          }
        }
      }
      // return 1;
    } catch (e) {
      console.log(e);
    }
  };

  //CHECK IF NEW HIGHSCORE HAS BEEN SET
  // const highScoreCheck = async (req, res) => {
  // try {
  if (
    attemptNum == 1 &&
    !level.startsWith("cal") &&
    attemptNum == 1 &&
    !level.startsWith("heu")
  ) {
    await highScore();
  } else if (
    level.startsWith("cal") &&
    setting == "99" &&
    attemptNum == 1 &&
    skip == ""
  ) {
    await highScore();
  } else if (
    level.startsWith("heu") &&
    setting == "9" &&
    attemptNum == 1 &&
    skip == ""
  ) {
    await highScore();
  } else {
    console.log("Not eligible for highscore.");
    // res.send();
  }
  let award;
  const standardDeviation = async (req, res) => {
    try {
      const queryMean = await Attempt.find({
        level: level,
        mode: mode,
        tries: "1",
        setting: setting,
        skip: "",
        age: currentAge,
      }).sort({ time: 1 });
      let sum = 0;
      let allTheTiming = [];
      queryMean.forEach((item) => allTheTiming.push(item.time));
      // allTheTiming = allTheTiming.sort(function (a, b) {
      //   return a - b;
      // });
      console.log(`Timing: ${allTheTiming}`);
      const percentile25 =
        allTheTiming[Math.ceil(allTheTiming.length * 0.25) - 1];
      const percentile75 =
        allTheTiming[Math.ceil(allTheTiming.length * 0.75) - 1];
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
          console.log(item);
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
      if (time >= bronze.lower) {
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

      if (data.eligible == 1) award = "High";
      // console.log("Tries", attemptNum, attemptNum > 1);
      if (skip != "" || attemptNum > 1) award = "Try harder";
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

  // LAST: SAVE ATTEMPT
  let pointsAwarded = 0;
  const pointSystem = async (req, res) => {
    const userNow = await User.findOne({ username: user.toLowerCase() });
    console.log(userNow);
    const age = new Date().getFullYear() - userNow.DOB.getFullYear();
    pointsAwarded = points(level, award, age, data.eligible, setting);
    if (!userNow.points) {
      userNow.points = pointsAwarded;
    } else {
      userNow.points += pointsAwarded;
    }
    console.log(
      `Points Awarded: ${pointsAwarded}, Cumulative: ${userNow.points}`
    );
    //SEARCH FOR ALL THE ATTEMPTS DONE TODAY
    let start = new Date();
    start.setHours(0, 0, 0, 0);
    let end = new Date();
    end.setHours(23, 59, 59, 999);
    const checkLimit = await Attempt.find({
      user,
      date: { $gte: start, $lt: end },
      tries: "1",
    });

    //BONUS POINTS FOR DOING RECOMMENDATION
    recommend.forEach((item) => {
      // CHECK IF THE ATTEMPT IS ON THE RECOMMENDED LIST
      let accomplish = 0;
      if (item.level == level && item.mode == mode) {
        let count = 0;
        accomplish += 1;
        // IF YES, CHECK IF IT IS THE FIRST ATTEMPT
        checkLimit.forEach((today) => {
          if (today.level == level && today.mode == mode) {
            count += 1;
            console.log(`------> Count: ${count}`);
          }
        });

        // CHECK HOW MANY DAILY RECOMMENDATIONS HAS BEEN DONE.
        recommend.forEach((item) => {
          checkLimit.forEach((today) => {
            if (today.level == item.level && today.mode == item.mode) {
              accomplish += 1;
            }
          });
        });
        // ONLY AWARD THE FIRST ATTEMPT OF THE RECOMMENDED THE BONUS POINT
        if (count == 0) {
          console.log("BONUS!: " + accomplish);
          pointsAwarded += accomplish;
          userNow.points += accomplish;
          //IF ALL RECOMMENDED HAS BEEN COMPLETED, AWARD MORE!
          if (recommend.length == accomplish) {
            console.log("Complete bonus!: 15");
            pointsAwarded += 15;
            userNow.points += 15;
          }
          // console.log(`After: ${pointsAwarded}`);
        }
      }
    });
    console.log(`Attempts today: ${checkLimit.length}`);
    checkLimit.forEach((today) => {
      if (today.level == level) {
        pointsAwarded = 1;
      }
    });
    if (checkLimit.length <= 5) {
      const updatePoints = await User.findByIdAndUpdate(userNow._id, {
        points: userNow.points,
      });
    } else {
      pointsAwarded = 0;
    }
  };

  await pointSystem();
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
    award: data.award,
    points: pointsAwarded,
    age: new Date().getFullYear() - DOB.getFullYear(),
  });

  // try {
  // await newAttempt.save().then((doc) => {
  //   console.log(doc);
  // });

  await newAttempt.save().then(() => {
    console.log(`Highscore?: ${data.eligible}`);
    res.send(JSON.stringify(data));
  });
  // }
  // catch (e) {
  //   console.log(e);
  // }
});
exports.previousAttempts = async (req, res) => {
  try {
    let data = {};
    const user = req.user;
    const level = req.body.level;
    const mode = req.body.mode;
    const setting = req.body.setting;
    const age = new Date().getFullYear() - req.user.DOB.getFullYear();
    console.log(
      `User: ${user} Age: ${age}, Level: ${level}, Mode: ${mode}, Setting: ${setting}`
    );
    data.highscore = await Highscore.findOne({
      level: level,
      mode: mode,
      setting: setting,
      age: age,
    }).sort({ time: 1 });

    let firstName = user.username.split(" ")[0];
    let surName = user.username.split(" ")[1];
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    surName = surName.charAt(0).toUpperCase() + surName.slice(1);
    const name = `${firstName} ${surName}`;

    data.previous = await Attempt.findOne({
      user: name,
      level: level,
      mode: mode,
      tries: "1",
      setting: setting,
      skip: "",
      age: age,
    }).sort({ date: -1 });

    data.daysAgo = Math.floor(
      (new Date() - data.previous.date) / (1000 * 60 * 60 * 24)
    );

    //STANDARD DEVIATION
    const queryMean = await Attempt.find({
      level: level,
      mode: mode,
      tries: "1",
      setting: setting,
      skip: "",
      age: age,
    }).sort({ time: 1 });
    let sum = 0;
    let allTheTiming = [];

    queryMean.forEach((item) => allTheTiming.push(item.time));
    console.log(`Timing: ${allTheTiming}`);
    const percentile25 =
      allTheTiming[Math.ceil(allTheTiming.length * 0.25) - 1];
    const percentile75 =
      allTheTiming[Math.ceil(allTheTiming.length * 0.75) - 1];
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
        console.log(item);
        sum += item;
        activeTimings.push(item);
      }
    });
    const mean = sum / activeTimings.length;
    console.log(`Sum: ${sum}, Length: ${activeTimings.length} Mean: ${mean}, `);

    let xSquare = 0;
    activeTimings.forEach((item) => {
      xSquare += (item - mean) ** 2;
    });
    const variance = xSquare / activeTimings.length;
    const standardDev = Math.sqrt(variance);
    console.log(`x2: ${xSquare}, Variance: ${variance}, Sd: ${standardDev}`);

    data.bronze = {
      lower: mean + standardDev,
      upper: mean - standardDev,
    };
    data.silver = {
      lower: mean - standardDev,
      upper: mean - standardDev * 2,
    };
    data.gold = {
      lower: mean - standardDev * 2,
      upper: mean - standardDev * 3,
    };
    data.platinum = {
      lower: mean - standardDev * 3,
    };
    console.log(mode);
    console.log(data);
    data.mode = mode;
    res.send(data);
  } catch (e) {
    console.log("error");
    res.send();
  }
};
exports.monthlyHighscore = catchAsync(async (req, res) => {
  // try {
  const allLevels = await Attempt.distinct("level");
  const allModes = await Attempt.distinct("mode");
  let thisMonthHigh = [];
  const thisMonth = new Date().getMonth() + 1;
  console.log(allLevels, allModes);

  //RETRY
  const monthly = await Attempt.find({
    $expr: { $eq: [{ $month: "$date" }, thisMonth] },
    tries: "1",
    skip: "",
  }).sort({ level: 1, time: 1 });

  for (let l = 0; l < allLevels.length; l++) {
    let genesis = 0;
    for (let m = 0; m < allModes.length; m++) {
      for (let s = 0; s < monthly.length; s++) {
        if (
          monthly[s].level == allLevels[l] &&
          monthly[s].mode == allModes[m]
        ) {
          if (
            monthly[s].level.startsWith("cal") &&
            monthly[s].setting == "99"
          ) {
            if (genesis == 0) {
              thisMonthHigh.push(monthly[s]);
              genesis += 1;
            }
          }
          if (monthly[s].level.startsWith("heu") && monthly[s].setting == "9") {
            if (genesis == 0) {
              thisMonthHigh.push(monthly[s]);
              genesis += 1;
            }
          }
          if (
            !monthly[s].level.startsWith("cal") &&
            !monthly[s].level.startsWith("heu")
          ) {
            if (genesis == 0) {
              thisMonthHigh.push(monthly[s]);
              genesis += 1;
            }
          }
        }
      }
    }
  }
  // thisMonthHigh = monthly;
  // let username;
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.status(200).render("pages/monthly-highscore", {
    thisMonthHigh,
    username,
    authenticate,
    currentUser,
  });
  // } catch (e) {
  //   console.log(e);
  // }
});

exports.getHighscore = catchAsync(async (req, res, next) => {
  // try {
  //GETTING ALL UNIQUE LEVELS && MODES IN HIGHSCORE COLLECTION
  const highscoreLevels = await Highscore.distinct("level");
  const highscoreModes = await Highscore.distinct("mode");
  let highscoreHoldersArr = [];
  // console.log(highscoreLevels);

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

  const [
    highscoreAge7,
    highscoreAge8,
    highscoreAge9,
    highscoreAge10,
    highscoreAge11,
    highscoreAge12,
  ] = await Promise.all([
    Highscore.find({ age: 7 }).sort({ level: 1, time: 1 }),
    Highscore.find({ age: 8 }).sort({ level: 1, time: 1 }),
    Highscore.find({ age: 9 }).sort({ level: 1, time: 1 }),
    Highscore.find({ age: 10 }).sort({ level: 1, time: 1 }),
    Highscore.find({ age: 11 }).sort({ level: 1, time: 1 }),
    Highscore.find({ age: 12 }).sort({ level: 1, time: 1 }),
  ]);

  let sevenArr = [];
  let eightArr = [];
  let nineArr = [];
  let tenArr = [];
  let elevenArr = [];
  let twelveArr = [];

  // let allArr = [sevenArr, eightArr, nineArr, tenArr, elevenArr];
  //7
  let ageArr = [
    highscoreAge7,
    highscoreAge8,
    highscoreAge9,
    highscoreAge10,
    highscoreAge11,
    highscoreAge12,
  ];
  let arr = [sevenArr, eightArr, nineArr, tenArr, elevenArr, twelveArr];
  console.log(highscoreAge7);
  console.log(ageArr[0]);
  ageArr.forEach((ageAttempts, index) => {
    console.log(index);
    // console.log(ageAttempts);
    ageAttempts.forEach((item) => {
      // console.log(item);
      let level = [];
      highscoreModes.forEach((mode) => {
        if (
          highscoreLevels.includes(item.level) &&
          item.mode == mode &&
          !level.includes(item.level)
        ) {
          arr[index].push(item);
          level.push(item.level);
        }
      });
    });
    console.log(`Primary ${index + 1} done.`);
  });
  // highscoreAge7.forEach((item) => {
  //   let level = [];
  //   highscoreModes.forEach((mode) => {
  //     if (
  //       highscoreLevels.includes(item.level) &&
  //       item.mode == mode &&
  //       !level.includes(item.level)
  //     ) {
  //       sevenArr.push(item);
  //       level.push(item.level);
  //     }
  //   });
  // });
  // //8
  // highscoreAge8.forEach((item) => {
  //   let level = [];
  //   highscoreModes.forEach((mode) => {
  //     if (
  //       highscoreLevels.includes(item.level) &&
  //       item.mode == mode &&
  //       !level.includes(item.level)
  //     ) {
  //       eightArr.push(item);
  //       level.push(item.level);
  //     }
  //   });
  // });
  // //9
  // highscoreAge9.forEach((item) => {
  //   let level = [];
  //   highscoreModes.forEach((mode) => {
  //     if (
  //       highscoreLevels.includes(item.level) &&
  //       item.mode == mode &&
  //       !level.includes(item.level)
  //     ) {
  //       nineArr.push(item);
  //       level.push(item.level);
  //     }
  //   });
  // });
  // //10
  // highscoreAge10.forEach((item) => {
  //   let level = [];
  //   highscoreModes.forEach((mode) => {
  //     if (
  //       highscoreLevels.includes(item.level) &&
  //       item.mode == mode &&
  //       !level.includes(item.level)
  //     ) {
  //       tenArr.push(item);
  //       level.push(item.level);
  //     }
  //   });
  // });
  // //11
  // highscoreAge11.forEach((item) => {
  //   let level = [];
  //   highscoreModes.forEach((mode) => {
  //     if (
  //       highscoreLevels.includes(item.level) &&
  //       item.mode == mode &&
  //       !level.includes(item.level)
  //     ) {
  //       elevenArr.push(item);
  //       level.push(item.level);
  //     }
  //   });
  // });
  // //12
  // highscoreAge12.forEach((item) => {
  //   let level = [];
  //   highscoreModes.forEach((mode) => {
  //     if (
  //       highscoreLevels.includes(item.level) &&
  //       item.mode == mode &&
  //       !level.includes(item.level)
  //     ) {
  //       twelveArr.push(item);
  //       level.push(item.level);
  //     }
  //   });
  // });
  // console.log(twelveArr);
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
  // console.log(highscoreHolder);
  // username = req.user.username;
  // authenticate = req.auth;
  // currentUser = req.user;
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/highscore", {
    highscoreHoldersArr,
    username,
    authenticate,
    currentUser,
    sevenArr,
    eightArr,
    nineArr,
    tenArr,
    elevenArr,
    twelveArr,
  });
  // } catch (error) {
  //   console.log(error);
  // }
});
exports.getAttempt = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const attempt = await Attempt.findById(id);

  if (!attempt) {
    return next(new AppError(`No such attempt was found.`, 404));
  }

  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/edit-attempt", {
    attempt,
    username,
    authenticate,
    currentUser,
  });
  // try {
  // } catch (err) {
  //   res.send(404).json({ message: err });
  // }
});

exports.saveAttempt = catchAsync(async (req, res, next) => {
  // console.log(req.body);
  const id = req.params.id;
  // try {
  const attempt = await Attempt.findById(id);

  if (!attempt) {
    return next(new AppError(`No such attempt was found.`, 404));
  }

  const username = attempt.user.toLowerCase();
  const user = await User.findOne({ username });
  const userCurrentPoints = user.points;
  console.log(attempt, user);
  // SAVE POINTS IS 10, BUT EDITTED POINTS IS 5.
  const differencePoints = req.body.points - attempt.points;
  const adjustedPoints = userCurrentPoints + differencePoints;
  await Promise.all([
    await User.updateOne({ username }, { $set: { points: adjustedPoints } }),
    await Attempt.findByIdAndUpdate(id, {
      points: req.body.points,
      award: req.body.award,
    }),
  ]);
  return res.redirect("/attempts");
  // } catch (err) {
  //   res.send(404).json({ err });
  // }
});

exports.deleteAttempt = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  // try {
  const attempt = await Attempt.findById(id);

  if (!attempt) {
    return next(new AppError(`No such attempt was found.`, 404));
  }

  const username = attempt.user.toLowerCase();
  const user = await User.findOne({ username });
  const currentPoints = user.points;
  const adjustedPoints = currentPoints - attempt.points;
  const [updateUser, deleteAttempt] = await Promise.all([
    User.updateOne(
      { username },
      {
        $set: { points: adjustedPoints },
      }
    ),
    Attempt.findByIdAndDelete(id),
  ]);
  console.log(updateUser);
  return res.redirect("/attempts");
  // } catch (err) {
  //   res.status(404).json({
  //     err,
  //   });
  // }
});

const update = catchAsync(async (req, res, next) => {
  // try {
  // const updating = await Attempt.updateMany({}, { $set: { tries: 1 } });
  // console.log(updating);
  const updating = await Attempt.updateOne(
    // { user: "Player", level: "3.17" },
    { user: "CaiusChong" },
    { $set: { user: "Caiuschong" } }
  );
  console.log(updating);
  // } catch (e) {
  //   console.log(`Error ${e}`);
  // }
});

const updateMany = catchAsync(async (req, res, next) => {
  // try {
  const updating = await Attempt.updateMany({}, { $set: { subject: "Math" } });
  console.log(updating);
  // const updating = await Attempt.updateMany(
  // { summary: { $exists: false } },
  // { $set: { summary: "test" } }
  // { user: "Travis" },
  // { $set: { user: "Travis Scott" } }
  // );
  // const updatingPlayer = await Highscore.updateMany(
  //   // { skip: { $exists: false } },
  //   // { $set: { skip: "" } }
  //   { user: "Travis" },
  //   { $set: { user: "Travis Scott" } }
  // );
  console.log(updating);
  // } catch (e) {
  //   console.log(`Error ${e}`);
  // }
});

// updateMany();

const deleteMany = async (req, res) => {
  const deleteNow = { user: "Kenneth Lin" };
  try {
    const deleteHigh = await Highscore.deleteMany(deleteNow);
    const deleteAttempts = await Attempt.deleteMany(
      deleteNow
      // { sort: { date: -1 } },
      // { limit: 5 }
    );
    console.log(deleteHigh, deleteAttempts);
  } catch (e) {
    console.log(e);
  }
};

// deleteMany();
