const User = require("../models/userModel");
const Reward = require("../models/rewardModel");
const RewardLog = require("../models/rewardLogModel");
const Attempt = require("../models/attemptModel");
const Exam = require("../models/examModel");
const Highscore = require("../models/highscoreModel");
const Homework = require("../models/homeworkModel");
const Intervention = require("../models/interventionModel");
const Graduation = require("../models/graduationModel");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utils/catchAsync");
const fs = require("fs");
const path = require("path");
const stream = require("stream");
const multer = require("multer");
const upload = multer();
const { google } = require("googleapis");
const AppError = require("../utils/appError");
const {
  recaptchaenterprise,
} = require("googleapis/build/src/apis/recaptchaenterprise");

let username;
let authenticate;
let currentUser;

exports.getAllUsers = catchAsync(async (req, res, next) => {
  console.log("Getting all users");
  // try {
  const allUsers = await User.find().sort({ loggedIn: -1 });

  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin || !authenticate) {
    return res.redirect("user/login");
  }

  res.render("pages/all-user", {
    authenticate,
    username,
    allUsers,
    currentUser,
  });
  // } catch (err) {
  //   console.log(err);
  //   return res.redirect("user/login");
  // }
});

exports.editUser = catchAsync(async (req, res, next) => {
  console.log("Trying to edit user profile");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let id = req.params.id;
  console.log(currentUser);

  if (
    !authenticate ||
    (!currentUser.admin && currentUser._id != req.params.id)
  ) {
    console.log("Nope!");
    return res.redirect("/user/login");
  }
  console.log("Editing");
  // console.log(req.query);
  // const editUser = await User.findOne({ username: req.query.username });
  const editUser = await User.findById(req.params.id);

  if (!editUser) {
    return next(new AppError(`No such User was found.`, 404));
  }

  let subjects = ["Primary Math", "Primary Science"];
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  res.render("pages/edit-user", {
    authenticate,
    username,
    currentUser,
    editUser,
    subjects,
    days,
  });
});

// exports.editSingleUser = catchAsync(async (req, res, next) => {
//   console.log("Edit Single");

//   const id = req.params.id;
//   const editUser = await User.findOne({ _id: id });
//   console.log(editUser);
//   const subjects = editUser.subject;
//   console.log(subjects);
//   if (!req.user._id.equals(editUser._id) && !req.user.admin) {
//     return res.redirect("/user/login");
//   }
//   console.log(editUser);

//   let username = req.user.username;
//   let authenticate = req.auth;
//   let currentUser = req.user;
//   let days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   res.render("pages/edit-user", {
//     authenticate,
//     username,
//     currentUser,
//     editUser,
//     subjects,
//     days,
//   });
// });
function firstLetterCaps(name) {
  let box = [];
  let nameT = name.trim();
  const split = nameT.split(" ");
  split.forEach((item) => {
    box.push(item.charAt(0).toUpperCase() + item.slice(1));
  });
  return box.join(" ");
}
exports.saveEditUser = catchAsync(async (req, res, next) => {
  console.log("Saving edited user");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  console.log(req.params);
  const editUser = await User.findById(req.params.id);

  if (currentUser.admin && editUser.username != req.body.username) {
    let oldUsername = firstLetterCaps(editUser.username);
    let newUsername = firstLetterCaps(req.body.username);
    console.log(oldUsername);
    const updateAttemptName = await Attempt.updateMany(
      {
        user: oldUsername,
      },
      {
        $set: {
          user: newUsername,
        },
      }
    );
    const updateHighscoreName = await Attempt.updateMany(
      {
        user: oldUsername,
      },
      {
        $set: {
          user: newUsername,
        },
      }
    );
    const updateHomeworkName = await Homework.updateMany(
      {
        name: editUser.username,
      },
      {
        $set: {
          name: req.body.username,
        },
      }
    );

    console.log(updateAttemptName, updateHighscoreName, updateHomeworkName);
  }

  if (
    !currentUser.admin &&
    currentUser.username != req.body.username &&
    authenticate
  ) {
    res.status(403).json({ message: `You are not authorized to do this.` });
  }
  console.log(req.body);
  if (!currentUser.admin) {
    delete req.body.username;
    delete req.body.email;
    delete req.body.DOB;
    delete req.body.subject;
    delete req.body.gift;
    delete req.body.freeze;
    delete req.body.freezeEndDate;
    delete req.body.admin;
    delete req.body.subject_admin;
    delete req.body.day;
  }

  if (!req.body.subject_admin) req.body.subject_admin = "false";
  if (!req.body.admin) req.body.admin = "false";

  if (req.body.password == "" || req.body.confirmPassword == "") {
    delete req.body.password;
    delete req.body.confirmPassword;
  } else {
    if (req.body.password == req.body.confirmPassword) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    } else {
      return res
        .status(403)
        .json({ message: `Password and confirm password are not the same.` });
    }
  }
  req.body.confirmPassword = "";
  // console.log(req.body);
  const update = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // console.log(update);
  // if (currentUser.admin && req.body.username != update.username) {
  //   console.log("Changing username");
  // }
  // req.body.confirmPassword = "";
  // console.log(`Update: ${update}`);
  console.log("Successfully updated.");
  res.redirect("/attempts");
  // } catch (err) {
  //   console.log(err);
  // }
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  // try {
  const id = req.params.id;
  console.log(id);
  const deleteUser = await User.findByIdAndDelete(id);
  return res.redirect("/user");
  // } catch (err) {
  //   console.log("Delete User", err);
  // }
});

exports.getAllPoints = catchAsync(async (req, res, next) => {
  // const allUsers = await User.find().sort({ points: -1 });
  const [allUsers, logRewards] = await Promise.all([
    User.find().sort({ points: -1 }),
    RewardLog.find().sort({ claimed: -1 }).limit(20),
  ]);
  // res.status(200).json({ message: "This is the points page!" });

  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/points", {
    authenticate,
    username,
    currentUser,
    allUsers,
    logRewards,
  });
});

exports.getAllRewards = catchAsync(async (req, res, next) => {
  // const allRewards = await Reward.find();
  // const logRewards = await RewardLog.find().sort({ date: -1 }).limit(20);");
  const [allRewards, logRewards] = await Promise.all([
    Reward.find(),
    RewardLog.find().sort({ claimed: -1 }).limit(10),
  ]);
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  res.render("pages/rewards/claim-rewards", {
    authenticate,
    username,
    currentUser,
    allRewards,
    logRewards,
    // message,
  });
});

exports.newReward = catchAsync(async (req, res, next) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/rewards/new-rewards", {
    authenticate,
    username,
    currentUser,
  });
});

exports.editReward = catchAsync(async (req, res, next) => {
  console.log("Editing Reward");
  const id = req.params.id;
  console.log(id);
  const reward = await Reward.findById(id);
  console.log(reward);
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/rewards/edit-reward", {
    authenticate,
    username,
    currentUser,
    reward,
  });
});

exports.deleteReward = catchAsync(async (req, res, next) => {
  console.log("Deleting reward");
  // try {
  const id = req.params.id;
  const deleteReward = await Reward.findByIdAndDelete(id);
  res.redirect("/user/points/rewards");
  // } catch (err) {
  //   res.status(404).json({ message: err });
  // }
});

const GOOGLE_API_FOLDER_ID = process.env.GOOGLE_API_FOLDER_ID;
console.log(`Environment: ${process.env.NODE_ENV}`);

let auth;
if (process.env.NODE_ENV == "DEVELOPMENT") {
  auth = new google.auth.GoogleAuth({
    keyFile: "./googlekey.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
} else {
  auth = new google.auth.GoogleAuth({
    keyFile: "./google-credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
}

async function uploadFile(imagePath) {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(imagePath.buffer);
  const { data } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: imagePath.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name: imagePath.originalname,
      parents: [GOOGLE_API_FOLDER_ID],
    },
    fields: "id,name",
  });
  console.log(`Uploaded file ${data.name} ${data.id}`);
  return data.id;
}

exports.postNewReward = catchAsync(async (req, res, next) => {
  console.log(`Request: ${req}`);
  console.log(req.body);
  // try {
  const { body, files } = req;

  const imageID = await uploadFile(files[0]);
  console.log(imageID);
  req.body.link = imageID;
  const newReward = await Reward.create(req.body);
  console.log(newReward);

  // res.redirect("/user/points/rewards");
  res.send("Success");
});

exports.saveReward = catchAsync(async (req, res, next) => {
  console.log("Saving Reward");

  const { body, files } = req;
  // try {
  if (files.length != 0) {
    const imageID = await uploadFile(files[0]);
    req.body.link = imageID;
  }
  console.log({ body });
  const reward = await Reward.findByIdAndUpdate(body.rewardId, body);
  console.log({ reward });
  res.send("1");
  // } catch (err) {
  //   console.log(err);
  // }
});

exports.claimReward = catchAsync(async (req, res, next) => {
  console.log("Processing Claim");
  console.log(req.body);
  // try {
  const reward = await Reward.findById(req.body.id);
  console.log(`Reward, ${reward}`);
  console.log(`Quantity, ${reward.quantity}`);
  if (reward.quantity < 1) {
    return res.send("Nil");
  }
  const user = await User.findOne({ username: req.body.user });

  if (user.gift > 0 && req.body.name.includes("Mechnical Pencil")) {
    const updateLog = await RewardLog.create({
      username: req.body.user,
      description: req.body.description,
      // points: req.body.requirement,
      reward: req.body.name,
    });
    console.log(updateLog);
    const giftAfterClaim = user.gift - 1;
    const updateGift = await User.findByIdAndUpdate(user._id, {
      gift: giftAfterClaim,
    });
    reward.quantity -= 1;
    const updateQuantity = await Reward.findByIdAndUpdate(req.body.id, {
      quantity: reward.quantity,
    });
    return res.send("Yes");
  } else if (user.points >= req.body.requirement) {
    console.log("Enough!");
    const updateLog = await RewardLog.create({
      username: req.body.user,
      description: req.body.description,
      points: req.body.requirement,
      reward: req.body.name,
    });
    console.log(updateLog);
    const pointsAfterClaim = user.points - req.body.requirement;
    const updatePoints = await User.findByIdAndUpdate(user._id, {
      points: pointsAfterClaim,
    });
    reward.quantity -= 1;
    const updateQuantity = await Reward.findByIdAndUpdate(req.body.id, {
      quantity: reward.quantity,
    });
    return res.send("Yes");
  } else {
    return res.send("No");
  }
  // } catch (err) {
  //   console.log("Something happened");
  // }

  // res.send();
});

exports.deleteRewardLog = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  // try {
  // 1) QUERY REWARDS LOG
  const log = await RewardLog.findById(id);
  const refundPoints = log.points;
  // 2) QUERY USER
  const user = await User.findOne({ username: log.username });
  const oldPoints = user.points;
  const updatePoints = oldPoints + refundPoints;
  // 3) QUERY REWARD
  const reward = await Reward.findOne({
    description: log.description,
    rewardName: log.reward,
  });
  const rewardQuantity = reward.quantity;
  const updateQuantity = rewardQuantity + 1;
  // 4) RETURN AND DELETE
  const [deleteLog, returnPoints] = await Promise.all([
    RewardLog.findByIdAndDelete(id),
    User.findByIdAndUpdate(user._id.toString(), {
      points: updatePoints,
    }),
    Reward.findByIdAndUpdate(reward._id.toString(), {
      quantity: updateQuantity,
    }),
  ]);
  // const deleteLog = await RewardLog.findByIdAndDelete(id);
  // const returnPoints = await User.findByIdAndUpdate(user._id.toString(), {
  //   points: updatePoints,
  // });
  return res.redirect("/attempts");
  // } catch (err) {
  //   res.status(404).json({ err });
  // }
});

function settings(level, age, allAttempts) {
  const month = new Date().getMonth();
  if (level == 1.1) {
    if (age <= 7) {
      let count = 0;
      allAttempts.forEach((item) => {
        if (item.setting == 1) count += 1;
      });
      if (count > 1) {
        return 1;
      } else {
        return 0;
      }
    } else if (age == 8 || (age == 7 && month >= 10)) {
      return 2;
    } else if (age == 9 || (age == 8 && month >= 10)) {
      return 3;
    } else if (age == 10 || (age == 9 && month >= 10)) {
      return 4;
    } else if (age == 11 || (age == 10 && month >= 10)) {
      return 5;
    } else if (age >= 12 || (age == 11 && month >= 10)) {
      return 6;
    }
  } else if (level == 2.02) {
    console.log(`The level is ${level}. Age is ${age}.`);
    if ((age == 8 && month < 10) || age <= 7 || (age == 7 && month >= 10)) {
      return 2;
    } else if (age == 9 || (age == 8 && month >= 10)) {
      return 3;
    } else if (age == 10 || (age == 10 && month >= 10)) {
      return 4;
    } else if (age == 11 || (age == 10 && month >= 10)) {
      return 5;
    } else if (age == 12 || (age == 11 && month >= 10)) {
      return 6;
    } else {
      return 6;
    }
  } else if (level == 2.05) {
    if ((age == 8 && month < 10) || age <= 7 || (age == 7 && month >= 10)) {
      return 2;
    } else if (age == 9 || (age == 8 && month >= 10)) {
      return 3;
    } else if (age >= 10 || (age == 9 && month >= 10)) {
      return 4;
    }
  } else if (level == 3.16 || level == 5.01) {
    let countNine = 0;
    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;
    allAttempts.forEach((item) => {
      if (item.level == 3.16) {
        if (item.setting == 1) countOne += 1;
        if (item.setting == 2 || item.setting == "1-2") {
          countTwo += 1;
        }
        if (item.setting == 3 || item.setting == "1-3") {
          countThree += 1;
        }
        if (item.setting == 9) countNine += 1;
      }
    });
    if (countNine > 0) {
      return 9;
    } else if (countThree > 0) {
      return "1-3";
    } else if (countTwo > 0) {
      return "1-2";
    } else {
      return "1";
    }
    // 2 settings
  } else if (
    level == 3.19 ||
    level == 4.03 ||
    level == 4.04 ||
    level == 4.05 ||
    level == 4.11
  ) {
    let countNine = 0;
    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;
    allAttempts.forEach((item) => {
      // if (
      //   item.level == 3.19 ||
      //   level == 4.03 ||
      //   level == 4.04 ||
      //   level == 4.05 ||
      //   level == 4.11
      // ) {
      if (item.setting == 1) countOne += 1;
      if (item.setting == 2 || item.setting == "1-2") {
        countTwo += 1;
      }
      if (item.setting == 9) countNine += 1;
      // }
    });
    if (countNine > 0) {
      return 9;
      // } else if (countThree > 0) {
      //   return "1-3";
      // } else if (countTwo > 0) {
      //   return "1-2";
    } else {
      return "1";
    }
  } else if (level == 4.21) {
    let countNine = 0;
    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;
    let countFour = 0;
    let countFive = 0;

    allAttempts.forEach((item) => {
      if (item.level == 4.21) {
        if (item.setting == 1) countOne += 1;
        if (
          item.setting == 2 ||
          item.setting == "1-2" ||
          age >= 10 ||
          (age == 9 && month >= 10)
        ) {
          countTwo += 1;
        }
        if (
          item.setting == 3 ||
          item.setting == "1-3" ||
          age >= 11 ||
          (age == 10 && month >= 10)
        ) {
          countThree += 1;
        }
        if (
          item.setting == 4 ||
          item.setting == "1-4" ||
          (age >= 12 && new Date().getMonth() >= 3) ||
          (age == 11 && month >= 10)
        ) {
          countFour += 1;
        }
        if (
          item.setting == 5 ||
          item.setting == "1-5" ||
          (age >= 12 && new Date().getMonth() >= 5)
        ) {
          countFive += 1;
        }
        if (item.setting == 9) countNine += 1;
      }
    });
    if (countNine > 0) {
      return 9;
    } else if (countFour > 0) {
      return "1-4";
    } else if (countThree > 0) {
      return "1-3";
    } else if (countTwo > 0) {
      return "1-2";
    } else {
      return "1";
    }
  } else if (level == 5.06 || level == 6.01) {
    let countOne = 0;
    let countTwo = 0;

    allAttempts.forEach((item) => {
      if (item.level == 6.01 && item.setting == 1) {
        countOne += 1;
      }
      if (item.level == 6.01 && item.setting == 2) {
        countTwo += 1;
      }
    });
    if (countTwo > 0) {
      return "2";
    } else {
      return "1";
    }
  } else {
    return "";
  }
}

const generateRec = async (nameTemp) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // SEARCH FOR INTERVENTION
  const interventions = await Intervention.find({
    student: nameTemp.toLowerCase(),
  });
  console.log(`Student name is ${nameTemp}`);
  console.log(`The list of interventions is/are: ${interventions}`);
  const [latestAttempt, { DOB }] = await Promise.all([
    Attempt.find({
      user: nameTemp,
      date: { $lt: today },
      tries: "1",
      recommendCheck: true,
    })
      .sort({
        // level: -1,
        date: -1,
      })
      // .limit(1000)
      .lean(),
    User.findOne({ username: nameTemp.toLowerCase() }),
  ]);
  let distinctLevels = await Attempt.distinct("level", {
    user: nameTemp,
    recommendCheck: true,
    date: { $lt: today },
  });

  const age = new Date().getFullYear() - DOB.getFullYear();
  console.log(`The month for today is ${new Date().getMonth()}`);
  const month = new Date().getMonth();
  // console.log(age);

  let recommend = [];
  let recommendList = [];
  let levelRecommend = [];
  let calRecommend = [];
  let heuRecommend = [];
  let mode = ["Easy", "Normal", "Hardcore"];
  let awards = ["Try harder", "Bronze", "Silver", "Gold", "Platinum"];

  // GET ALL UNIQUE LEVELS
  latestAttempt.forEach((item) => {
    if (item.level.startsWith("cal")) {
      if (!calRecommend.includes(item.level)) calRecommend.push(item.level);
    } else if (item.level.startsWith("heu")) {
      if (!heuRecommend.includes(item.level)) heuRecommend.push(item.level);
    } else {
      if (!levelRecommend.includes(item.level)) levelRecommend.push(item.level);
    }
  });

  console.log(calRecommend);
  //CALCULATIONS
  console.log("CHECKING CALCULATIONS");
  // let calculations = await Attempt.distinct("level", { user: nameTemp });
  let calculationsArr = [];
  const calOne = ["calOne"]; //age 7
  const calTwo = ["calTwo"];
  const calThree = ["calThree"];
  const calFour = ["calFour"];
  const calFive = ["calFive", "calFiveb"];
  const calSix = ["calSix", "calSixb"];
  const calAgeSeven = calOne; //p1
  const calAgeEight = calTwo; //p2
  const calAgeNine = calThree.concat(calTwo); //p3
  const calAgeTen = calThree.concat(calFour); //p4
  const calAgeEleven = calFour.concat(calFive);
  const calAgeTwelve = calFour.concat(calFive, calSix);
  let uniqLevel = [];
  awards.forEach((award) => {
    uniqLevel = [];
    // if (recommend.length < 1) {
    // calRecommend.forEach((calLevel) => {
    latestAttempt.forEach((attempt) => {
      let recommendObj = { ...attempt };
      if (interventions && recommend.length == 0) {
        interventions.forEach((item) => {
          if (item.dateStart)
            item.dateStart = item.dateStart.setHours(0, 0, 0, 0);
          // console.log(item.dateStart);
          if (item.level.startsWith("cal") && new Date() > item.dateStart) {
            recommend.push(item);
            uniqLevel.push(item.level);
          }
        });
      }
      if (calRecommend.includes(attempt.level) && recommend.length < 1) {
        if (
          !uniqLevel.includes(attempt.level) &&
          !recommendList.includes(attempt.level)
        ) {
          // console.log(`In calcuation: ${attempt.level} 🥀`);
          // if (attempt.award == award) {
          if (attempt.award == award && recommend.length < 1) {
            recommendObj.level = attempt.level;
            recommendObj.mode = "Easy";
            recommend.push(recommendObj);
            recommendList.push(attempt.level);
            uniqLevel.push(attempt.level);
          } else {
            // uniqLevel.push(attempt.level);
            // console.log("Rotation or promoted");
            if (attempt.extra == "") {
              let ageCal;
              if (age <= 7) ageCal = calAgeSeven;
              if (age == 8 || (age == 7 && month >= 10)) ageCal = calAgeEight;
              if (age == 9 || (age == 8 && month >= 10)) ageCal = calAgeNine;
              if (age == 10 || (age == 9 && month >= 10)) ageCal = calAgeTen;
              if (age == 11 || (age == 10 && month >= 10))
                ageCal = calAgeEleven;
              if (age == 12 || (age == 11 && month >= 10))
                ageCal = calAgeTwelve;
              distinctLevels.forEach((item) => {
                if (ageCal.includes(item) && !calculationsArr.includes(item)) {
                  calculationsArr.push(item);
                }
              });
              // console.log(calculationsArr + " 💯");
              const index = calculationsArr.indexOf(attempt.level);
              recommendObj.level = calculationsArr[index + 1];
              if (index + 1 == calculationsArr.length) {
                recommendObj.level = calculationsArr[0];
              }
            }

            if (
              !recommendList.includes(attempt.level) &&
              recommend.length < 1
            ) {
              let count = 0;
              let maximum = 1;
              // console.log(`The maximum is ${maximum}`);
              latestAttempt.forEach((item) => {
                if (item.level.startsWith(recommendObj.level)) {
                  if (item.setting == 99) {
                    // console.log("99 exist");
                    count += 1;
                  } else {
                    // console.log(
                    //   `Checking if setting is integer: ${item.setting} for Level: ${item.level}`
                    // );
                    // console.log(Number.isInteger(item.setting * 1));
                    if (Number.isInteger(item.setting * 1)) {
                      // console.log("Yes Integer");
                      // console.log(item.setting);
                      if (item.setting * 1 > maximum) {
                        maximum = item.setting;
                      }
                    } else {
                      const split = item.setting.split("-");
                      const largest = split[split.length - 1];
                      if (largest > maximum * 1) {
                        // console.log("Switching maximum");
                        maximum = largest;
                      }
                      // console.log(`The maximum is now! ${maximum}`);
                    }
                  }
                }
              });
              // console.log(`Calculation maximum = ${maximum}`);
              if (count > 0) {
                console.log("Setting to 99");
                recommendObj.setting = 99;
              } else {
                if (maximum == 1) {
                  recommendObj.setting = 1;
                } else {
                  recommendObj.setting = `1-${maximum}`;
                }
              }

              recommendObj.mode = "Easy";
              recommendObj.time = "";
              recommendObj.mistake = "";
              recommendObj.score = "";
              recommendObj.award = "";
              attempt.date = new Date();
              // console.log(`Obj: ${recommendObj}`);
              recommend.push(recommendObj);
              recommendList.push(attempt.level);
              uniqLevel.push(attempt.level);
            }
          }
        }
      }
    });
    // });
    // }
  });

  // //HEURISTICS
  console.log("CHECKING HEURISTICS");
  let heuristics = await Attempt.distinct("level", { user: nameTemp });
  // console.log("Attempted " + heuristics + " before");
  let heuristicsArr = [];
  const heuOne = ["heuOne"]; //age 7
  const heuTwo = ["heuTwo", "heuTwob"];
  const heuThree = ["heuThree", "heuThreeb"];
  const heuFour = ["heuFour", "heuFourb"];
  const heuFive = ["heuFive", "heuFiveb"];
  const heuSix = ["heuSix", "heuSixb"];
  const heuAgeSeven = heuOne;
  const heuAgeEight = heuTwo.concat(heuOne);
  const heuAgeNine = heuTwo.concat(heuThree); //p3
  const heuAgeTen = heuThree.concat(heuTwo, heuFour); //p4
  const heuAgeEleven = heuThree.concat(heuFour, heuFive); //p5
  const heuAgeTwelve = heuThree.concat(heuFour, heuFive, heuSix); //p6
  awards.forEach((award) => {
    uniqLevel = [];
    // if (recommend.length < 2) {
    // heuRecommend.forEach(heuRecommendl) => {
    latestAttempt.forEach((attempt) => {
      let recommendObj = { ...attempt };
      if (interventions && recommend.length == 1) {
        interventions.forEach((item) => {
          if (item.dateStart)
            item.dateStart = item.dateStart.setHours(0, 0, 0, 0);
          // console.log(item.dateStart);
          if (item.level.startsWith("heu") && new Date() > item.dateStart) {
            // recommendObj.level = item.level;
            // recommendObj.setting = item.setting;
            // recommendObj.mode = item.mode;
            // recommendObj.time = "";
            // recommendObj.score = "";
            // recommendObj.mistake = "";
            recommend.push(item);
            uniqLevel.push(item.level);
          }
        });
      }

      if (heuRecommend.includes(attempt.level) && recommend.length < 2) {
        // console.log(`In heuristics: ${attempt.level} 🌞`);
        if (
          !uniqLevel.includes(attempt.level) &&
          !recommendList.includes(attempt.level)
        ) {
          if (attempt.award == "Try harder" && recommend.length < 2) {
            recommend.push(recommendObj);
            recommendList.push(attempt.level);
            uniqLevel.push(attempt.level);
          } else {
            // uniqLevel.push(attempt.level);
            // console.log("Rotation or promoted");
            if (attempt.extra == "") {
              let ageHeu = [];
              if (age <= 7) ageHeu = heuAgeSeven;
              if (age == 8 || (age == 7 && month >= 10)) ageHeu = heuAgeEight;
              if (age == 9 || (age == 8 && month >= 10)) ageHeu = heuAgeNine;
              if (age == 10 || (age == 9 && month >= 10)) ageHeu = heuAgeTen;
              if (age == 11 || (age == 10 && month >= 10))
                ageHeu = heuAgeEleven;
              if (age == 12 || (age == 11 && month >= 10))
                ageHeu = heuAgeTwelve;
              distinctLevels.forEach((item) => {
                if (ageHeu.includes(item) && !heuristicsArr.includes(item)) {
                  // console.log("YES!");
                  heuristicsArr.push(item);
                }
              });
              // console.log(heuristicsArr + " 💯");
              const index = heuristicsArr.indexOf(attempt.level);
              recommendObj.level = heuristicsArr[index + 1];
              if (index + 1 == heuristicsArr.length) {
                recommendObj.level = heuristicsArr[0];
              }
            }

            if (
              !recommendList.includes(recommendObj.level) &&
              recommend.length < 2
            ) {
              let count = 0;
              let maximum = 1;
              latestAttempt.forEach((item) => {
                if (item.level.startsWith(recommendObj.level)) {
                  if (item.setting == 9) {
                    // console.log("9 exist");
                    count += 1;
                  } else {
                    // console.log(
                    //   `Checking if setting is integer: ${item.setting}`
                    // );
                    // console.log(Number.isInteger(item.setting * 1));
                    if (Number.isInteger(item.setting * 1)) {
                      // console.log("Yes Integer");
                      // console.log(item.setting);
                      if (item.setting > maximum) {
                        maximum = item.setting;
                      }
                    } else {
                      // console.log("No integer, splitting");
                      // console.log(item.setting);
                      const split = item.setting.split("-");
                      // console.log(split);
                      const largest = split[split.length - 1];
                      if (largest > maximum) {
                        maximum = largest;
                      }
                    }
                  }
                }
              });
              // console.log(`Calculation maximum = ${maximum}`);
              if (count > 0) {
                // console.log("Setting to 9");
                recommendObj.setting = 9;
              } else {
                if (maximum == 1) {
                  recommendObj.setting = 1;
                } else {
                  recommendObj.setting = `1-${maximum}`;
                }
              }

              recommendObj.mode = "Easy";
              recommendObj.time = "";
              recommendObj.mistake = "";
              recommendObj.award = "";
              recommendObj.score = "";
              recommendObj.date = new Date();
              // console.log(`heu: ${recommendObj}`);
              recommend.push(recommendObj);
              // recommend.push(attempt);
              recommendList.push(attempt.level);
              uniqLevel.push(attempt.level);
            }
          }
        }
      }
    });
    // });
    // }
  });
  // CHECK IF RECOMMENDATION IS LESS THAN 4 ENTRIES
  // CHECK IF THE LATEST ENTRY OF A LEVEL IS 'TRY HARDER'
  // IF YES, RECOMMEND IT.
  // IF NO, CHECK ANOTHER LEVEL.

  //NORMAL LEVELS
  let existingLevel = [];
  // let recommendObj = {};
  if (interventions) {
    interventions.forEach((item) => {
      if (item.dateStart) item.dateStart = item.dateStart.setHours(0, 0, 0, 0);
      // console.log(item.dateStart);
      if (
        !item.level.startsWith("heu") &&
        !item.level.startsWith("cal") &&
        new Date() > item.dateStart
      ) {
        recommend.push(item);
        existingLevel.push(item.level);
        // console.log("Pushed Intervention");
      }
    });
  }

  //REMOVING CAL AND HEU FROM LIST
  let onlyLevelsArr = [];
  distinctLevels.forEach((level) => {
    if (!level.startsWith("cal") && !level.startsWith("heu")) {
      onlyLevelsArr.push(level);
    }
  });
  console.log("1st: " + onlyLevelsArr);
  const levelOne = [
    "1",
    "1.01",
    "1.02",
    "1.03",
    "1.04",
    "1.05",
    "1.06",
    "1.07",
    "1.08",
    "1.09",
    "1.1",
    "1.11",
  ];
  const levelTwo = [
    "2",
    "2.01",
    "2.02",
    "2.03",
    "2.04",
    "2.05",
    "2.06",
    "2.07",
    "2.08",
    "2.09",
    "2.1",
    "2.11",
    "2.12",
  ];
  const levelThree = [
    "3",
    "3.01",
    "3.02",
    "3.03",
    "3.04",
    "3.05",
    "3.06",
    "3.07",
    "3.11",
    "3.12",
    "3.16",
    "3.17",
    "3.18",
    "3.19",
  ];
  const levelFour = [
    "4.01",
    "4.02",
    "4.03",
    "4.04",
    "4.05",
    "4.06",
    "4.07",
    "4.08",
    "4.09",
    "4.1",
    "4.11",
    "4.13",
    "4.15",
    // "4.16",
    "4.17",
    "4.18",
    "4.19",
    "4.2",
    "4.21",
    "4.22",
    "4.23",
    // "4.24",
    "4.25",
    "4.26",
  ];
  const levelFive = [
    "5",
    "5.01",
    "5.02",
    "5.03",
    "5.04",
    "5.05",
    "5.06",
    "5.07",
    "5.08",
    "5.09",
    "5.1",
    "5.11",
    "5.12",
    "5.13",
    "5.14",
    "5.15",
    "5.16",
    "5.17",
    "5.18",
  ];
  const levelSix = ["6", "6.01", "6.02", "6.03", "6.05"];

  function removeAncient(arr, item) {
    if (arr.includes(item)) {
      const index = arr.indexOf(item);
      arr.splice(index, 1);
    }
  }
  let ageLevel;
  if (age <= 7) ageLevel = [];
  if (age == 8 || (age == 7 && month >= 10)) {
    ageLevel = levelOne;
    const removeList = ["1"];
    removeList.forEach((item) => {
      if (ageLevel.includes(item)) {
        const index = ageLevel.indexOf(item);
        ageLevel.splice(index, 1);
      }
      removeAncient(onlyLevelsArr, item);
    });
  }
  // p3
  if (age == 9 || (age == 8 && month >= 10)) {
    ageLevel = levelOne.concat(levelTwo);
    const removeList = ["1", "1.01", "1.02", "1.09", "2.01"];
    removeList.forEach((item) => {
      if (ageLevel.includes(item)) {
        const index = ageLevel.indexOf(item);
        ageLevel.splice(index, 1);
      }
      removeAncient(onlyLevelsArr, item);
    });
  }

  //p4
  //Delete list for age 10
  if (age == 10 || (age == 9 && month >= 10)) {
    ageLevel = levelOne.concat(levelTwo, levelThree);
    const removeList = [
      "1",
      "1.01",
      "1.02",
      "1.03",
      "1.06",
      "1.09",
      "2",
      "2.01",
      "2.03",
      "3",
      "3.04",
      // "3.05",
      "3.09",
      "3.1",
    ];
    // Removing certain level
    removeList.forEach((item) => {
      // console.log(item);
      if (ageLevel.includes(item)) {
        // console.log("Removing " + item);
        const index = ageLevel.indexOf(item);
        ageLevel.splice(index, 1);
      }
      removeAncient(onlyLevelsArr, item);
    });
  }

  //Delete list for age 10, 11 and 12
  if (age == 11 || age >= 12 || (age == 10 && month >= 10)) {
    if (age == 11 || (age == 10 && month >= 10))
      ageLevel = levelOne.concat(levelTwo, levelThree, levelFour);
    if (age >= 12 || (age == 11 && month >= 10))
      ageLevel = levelOne.concat(
        levelTwo,
        levelThree,
        levelFour,
        levelFive
        // levelSix
      );

    const removeList = [
      "1",
      "1.01",
      "1.02",
      "1.03",
      "1.04",
      "1.05",
      "1.06",
      "1.07",
      "1.08",
      "1.09",
      "1.11",
      "2",
      "2.01",
      "2.03",
      "3",
      "3.04",
      "3.05",
      "3.09",
      "3.1",
    ];
    // Removing certain level
    removeList.forEach((item) => {
      // console.log(item);
      if (ageLevel.includes(item)) {
        // console.log("Removing " + item);
        const index = ageLevel.indexOf(item);
        ageLevel.splice(index, 1);
        removeAncient(onlyLevelsArr, item);
      }
    });
  }
  console.log("2nd: " + onlyLevelsArr);
  let loopingLevel = 0;
  distinctLevels.forEach((item) => {
    if (age <= 7) {
      loopingLevel = 1;
      if (item.startsWith("1")) {
        ageLevel.push(item);
      }
    }
    if (age == 8 || (age == 7 && month >= 10)) {
      loopingLevel = 2;
      if (item.startsWith("2")) {
        ageLevel.push(item);
      }
    }
    if (age == 9 || (age == 8 && month >= 10)) {
      loopingLevel = 3;
      if (item.startsWith("3")) {
        ageLevel.push(item);
      }
    }
    if (age == 10 || (age == 9 && month >= 10)) {
      loopingLevel = 4;
      if (item.startsWith("4")) {
        ageLevel.push(item);
      }
    }
    if (age == 11 || (age == 10 && month >= 10)) {
      loopingLevel = 5;
      if (item.startsWith("5")) {
        ageLevel.push(item);
      }
    }
    if (age >= 12 || (age == 11 && month >= 10)) {
      loopingLevel = 6;
      if (item.startsWith("6")) {
        ageLevel.push(item);
      }
    }
  });
  console.log("here 1");

  // console.log(`History: ${ageLevel}`);
  console.log(latestAttempt);

  latestAttempt.forEach((attempt) => {
    // console.log("here 1.1");
    // console.log(attempt.level);
    if (
      !attempt.level.startsWith("cal") &&
      !attempt.level.startsWith("heu") &&
      recommend.length < 6
    ) {
      console.log("here 1.2");
      if (
        attempt.award == "Try harder" &&
        !existingLevel.includes(attempt.level)
      ) {
        console.log("here 1.3");
        if (attempt.mode == "Hardcore" || attempt.mode == "Normal") {
          // console.log("⏱️");
          console.log("here 1.4");
          if (attempt.time >= 600) {
            let mode = ["Easy", "Normal", "Hardcore"];
            let index = mode.indexOf(attempt.mode);
            attempt.mode = mode[index - 1];
          }
        }
        // console.log("Please try again");
        recommend.push(attempt);
        existingLevel.push(attempt.level);
        // console.log(attempt);
      } else {
        //EASY MODE
        console.log("here 1.5");
        if (!ageLevel.includes(attempt.level)) {
          console.log("here 1.6");
          // console.log(ageLevel);
          // console.log("Not suppose to do " + attempt.level);
          return;
        }

        if (attempt.mode == "Easy" && !existingLevel.includes(attempt.level)) {
          console.log("here 1.7");
          if (attempt.time <= 600 && attempt.mistake <= 5) {
            console.log("here 1.8");
            // console.log("Easy to Normal");
            attempt.mode = "Normal";
          }
          console.log("here 1.8");
          attempt.time = "";
          attempt.mistake = "";
          attempt.score = "";
          attempt.award = "";
          recommend.push(attempt);
          existingLevel.push(attempt.level);
        } else if (
          // NORMAL MODE
          attempt.mode == "Normal" &&
          !existingLevel.includes(attempt.level)
        ) {
          console.log("here 1.9");
          if (attempt.time < 600) {
            // console.log("Normal to Hardcore");
            attempt.mode = "Hardcore";
            recommend.push(attempt);
            existingLevel.push(attempt.level);
            attempt.time = "";
            attempt.mistake = "";
            attempt.score = "";
            attempt.award = "";
          } else if (attempt.time == 600) {
            console.log("here 1.10");
            // console.log("Demoted from Normal to Easy");
            attempt.mode = "Easy";
            attempt.award = "";
            recommend.push(attempt);
            existingLevel.push(attempt.level);
          } else {
            console.log("here 1.11");
            attempt.award = "";
            recommend.push(attempt);
            existingLevel.push(attempt.level);
          }

          // HARDCORE MODE
        } else if (attempt.mode == "Hardcore" && attempt.time == 600) {
          // console.log("Demoted from Hardcore to Normal");
          attempt.mode = "Normal";
          attempt.time = "";
          attempt.mistake = "";
          attempt.score = "";
          attempt.award = "";
          recommend.push(attempt);
          existingLevel.push(attempt.level);
        } else if (attempt.mode == "Hardcore" && attempt.time < 600) {
          // console.log("COMPLETED IN HARDCORE MODE", attempt.level);
          let recommendObj = {};
          // Get rid of those levels are already has been pushed
          existingLevel.push(attempt.level);
          // console.log(`Unique Levels: ${existingLevel}`);
          // console.log(attempt.level);
          let index = ageLevel.indexOf(attempt.level);

          //Select new level
          console.log(attempt.level, index, ageLevel);
          if (index == ageLevel.length - 1 || index == -1) {
            console.log("YOU HAVE REACHED THE END ✅");
            //if last
            // let end = 0;
            let i = 0;

            // if (age >= 11) {
            // console.log("Age 11 and above");
            // console.log(loopingLevel);
            if (loopingLevel > 1) {
              recommend.forEach((l) => {
                if (l.level.startsWith(loopingLevel)) {
                  console.log(`Level ${loopingLevel} already exist.`);
                  loopingLevel -= 1;
                }
              });
              ageLevel.forEach((l, index) => {
                if (i != 0) return;
                if (l.startsWith(loopingLevel)) {
                  console.log(`Returning index: ${index}, ${l}`);
                  i = index;
                }
              });
            } else {
              console.log("i = 0");
              i = 0;
            }
            // }

            while (existingLevel.includes(ageLevel[i])) {
              i += 1;
            }
            recommendObj.level = ageLevel[i];
            // } else if (index == -1) {
            //   //if it doesnt exist
            //   let temp = Math.floor(ageLevel.length / 2);
            //   while (existingLevel.includes(ageLevel[temp])) {
            //     temp += 1;
            //   }
            // recommendObj.level = ageLevel[temp];
          } else {
            //next level
            console.log("Next Level");
            index += 1;

            while (existingLevel.includes(ageLevel[index])) {
              index += 1;
            }
            recommendObj.level = ageLevel[index];
            if (index == ageLevel.length - 1) {
              index = 0;
            }
          }
          if (!recommendObj.level) {
            console.log("here 1.11");
            // console.log("UNDEFINED!");
            let index = 0;
            while (existingLevel.includes(ageLevel[index])) {
              index += 1;
            }
            recommendObj.level = ageLevel[index];
          }
          // console.log("The index is " + index);
          // console.log(`Previous: ${attempt.level}, New: ${recommendObj.level}`);
          recommendObj.time = "";
          recommendObj.mistake = "";
          recommendObj.score = "";
          recommendObj.award = "";
          recommendObj.date = new Date();

          let count = 0;
          latestAttempt.forEach((latest) => {
            if (latest.level == recommendObj.level) {
              count += 1;
            }
          });
          // console.log(`Count: ${count}`);
          if (count == 0) {
            // console.log(`Setting ${recommendObj.level} to Easy`);
            recommendObj.mode = "Easy";
          } else {
            // console.log(`Setting ${recommendObj.level} to Hardcore`);
            recommendObj.mode = "Hardcore";
          }

          recommendObj.setting = settings(
            recommendObj.level,
            age,
            latestAttempt
          );
          // console.log(`The recommended settings is ${recommendObj.setting}`);
          recommend.push(recommendObj);
          existingLevel.push(recommendObj.level);

          //Get rid of current level
          existingLevel.forEach((item) => {
            if (ageLevel.includes(item)) {
              const index = ageLevel.indexOf(item);
              ageLevel.splice(index, 1);
            }
          });
        }
      }
    }
  });
  console.log("Here 2");
  let oldest = [];

  latestAttempt.forEach((attempt) => {
    if (onlyLevelsArr.includes(attempt.level) && attempt.mode == "Hardcore") {
      if (oldest.length == 0 || oldest[0].date > attempt.date) {
        oldest[0] = attempt;
        const index = onlyLevelsArr.indexOf(attempt.level);
        onlyLevelsArr.splice(index, 1);
      }
    }
  });

  console.log("Here 3");
  //CHECKING IF THE EXISTING RECOMMENDED LIST CONTAINS THE ANCIENT LEVEL
  let recommendLevels = [];
  recommend.forEach((item) => {
    console.log("Here 4");
    recommendLevels.push(item.level);
  });
  if (
    oldest.length != 0 &&
    onlyLevelsArr.length > 0 &&
    !recommendLevels.includes(oldest[0].level)
  ) {
    console.log("Here 5");
    let ancient = {
      level: oldest[0].level,
      mode: "Hardcore",
      setting: oldest[0].setting,
      date: oldest[0].date,
    };
    recommend.push(ancient);
  }
  console.log("Here 6");
  return recommend;
};

exports.generateRecommendMiddleware = catchAsync(async (req, res, next) => {
  // try {
  let username = req.user.username;
  const usernameStr = username.split(" ");
  let nameTemp = [];
  usernameStr.forEach((item) => {
    nameTemp.push(item.charAt(0).toUpperCase() + item.slice(1, item.length));
  });
  nameTemp = nameTemp.join(" ");
  // console.log(nameTemp);
  // const summaryUser = req.params.username;

  const recommend = await generateRec(nameTemp);
  console.log(`Middleware: ${recommend}`);
  res.recommend = recommend;
  // console.log(res.recommend);
  next();
  // } catch (err) {
  //   res.status(404).json({ err });
  // }
});

exports.recommend = catchAsync(async (req, res, next) => {
  // try {
  let username = req.params.username.trim();
  const usernameStr = username.split(" ");
  let nameTemp = [];
  usernameStr.forEach((item) => {
    nameTemp.push(item.charAt(0).toUpperCase() + item.slice(1, item.length));
  });
  nameTemp = nameTemp.join(" ");
  // console.log(nameTemp);

  const recommend = await generateRec(nameTemp);

  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const todayAttempts = await Attempt.find({
    user: nameTemp,
    date: { $gte: start, $lt: end },
  });

  console.log(todayAttempts);
  // console.log(todayAttempts);
  recommend.forEach((item, index) => {
    todayAttempts.forEach((todayItem) => {
      if (
        item.level == todayItem.level &&
        item.mode == todayItem.mode &&
        item.setting == todayItem.setting &&
        todayItem.extra == ""
      ) {
        console.log("YES! " + index);
        item.accomplish = true;
        console.log(todayItem.time, todayItem.mode);
        if (
          (todayItem.mode == "Hardcore" || todayItem.mode == "Normal") &&
          todayItem.time >= 600
        ) {
          console.log("?");
          item.accomplish = false;
        }
      }
    });
    console.log(item.accomplish, item.level);
  });
  // console.log(recommend);
  //  console.log(item.accomplish);
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/recommend", {
    authenticate,
    username,
    currentUser,
    recommend,
  });
  // } catch (err) {
  //   res.status(404).json({ err });
  // }
});

exports.summary = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let searchedUser;
  let homework;

  let todayCount = 0;
  let weekCount = 0;
  let monthCount = 0;
  let yearCount = 0;
  let todayLevelCount = 0;
  let todayCalCount = 0;
  let todayCalFirst = 0;
  let todayHeuFirst = 0;
  let todayHeuCount = 0;
  let weekLevelCount = 0;
  let weekCalCount = 0;
  let weekHeuCount = 0;
  let weekCalFirst = 0;
  let weekHeuFirst = 0;
  let monthLevelCount = 0;
  let monthCalCount = 0;
  let monthHeuCount = 0;
  let yearLevelCount = 0;
  let yearCalCount = 0;
  let yearHeuCount = 0;
  let allLevelCount = 0;
  let allCalCount = 0;
  let allHeuCount = 0;
  let allCount = 0;
  let students;
  // let attempts;
  // console.log(req.query);

  try {
    if (req.query.username) {
      req.query.username = req.query.username.toLowerCase();
      console.log("Searching for user with specified ID");
      const small = req.query.username.split(" ");
      let arr = [];
      small.forEach((item) => {
        const temp = item.charAt(0).toUpperCase() + item.slice(1, item.length);
        arr.push(temp);
      });
      const username = arr.join(" ");
      searchedUser = await User.findOne({ username: req.query.username });
      allCount = await Attempt.find({ user: username }).count();

      //TODAY
      // console.log("Today start");
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      const today = await Attempt.find({
        user: username,
        date: { $gte: start, $lt: end },
      });
      todayCount = today.length;

      // FOR CHART
      const todayOnList = await Attempt.find({
        date: { $gte: start, $lt: end },
        extra: "",
        recommendCheck: true,
      });
      console.log(todayOnList);
      students = {
        name: [],
        count: [],
      };
      todayOnList.forEach((x) => {
        if (!students.name.includes(x.user)) {
          students.name.push(x.user);
        }
      });
      students.name.forEach((names) => {
        let count = 0;
        todayOnList.forEach((x) => {
          if (x.user == names) {
            // console.log(`${x} ☎️`);
            // if (x.level.startsWith("cal") || x.level.startsWith("heu")) {
            //   if (x.extra == "") {
            //     count += 1;
            //   }
            // } else {
            //   count += 1;
            // }
            count += 1;
          }
        });
        students.count.push(count);
      });
      today.forEach((item) => {
        if (item.level) {
          if (!item.level.startsWith("cal") && !item.level.startsWith("heu")) {
            todayLevelCount += 1;
          }
          if (item.level.startsWith("cal")) {
            todayCalCount += 1;
            if (item.tries == "1") {
              todayCalFirst += 1;
            }
          }
          if (item.level.startsWith("heu")) {
            todayHeuCount += 1;
            if (item.tries == "1") {
              todayHeuFirst += 1;
            }
          }
        }
      });
      // todayLevelCount = todayLevel.length;
      // todayCalCount = todayCal.length;
      // todayHeuCount = todayHeu.length;
      // console.log("Today end");
      //THIS WEEK
      // console.log("Week start");
      const now = new Date();
      let day = now.getDay();
      if (day == 0) day = 7;
      // console.log(`The day is ${day}`);
      const oneDay = 1000 * 60 * 60 * 24;
      // 2 = Tuesday; 3 = Wednesday
      let begin = new Date(start.getTime() - (day - 1) * oneDay);
      // console.log(begin.toLocaleDateString("en-GB"));
      const week = await Attempt.find({
        user: username,
        date: { $gte: begin, $lt: end },
      });
      weekCount = week.length;
      // console.log(`Week: ${weekCount}`);

      week.forEach((item) => {
        if (item.level) {
          if (!item.level.startsWith("cal") && !item.level.startsWith("heu")) {
            // weekLevel.push(item);
            weekLevelCount += 1;
          }
          if (item.level.startsWith("cal")) {
            weekCalCount += 1;
            if (item.tries == "1") {
              weekCalFirst += 1;
            }
          }
          if (item.level.startsWith("heu")) {
            // weekHeu.push(item);
            weekHeuCount += 1;
            if (item.tries == "1") {
              weekHeuFirst += 1;
            }
          }
        }
      });
      // console.log("Week End");

      //THIS MONTH
      // console.log("Month start");
      const thisMonth = start.getMonth() + 1;
      const month = await Attempt.find({
        $expr: { $eq: [{ $month: "$date" }, thisMonth] },
        user: username,
      });
      monthCount = month.length;

      month.forEach((item) => {
        if (item.level) {
          if (!item.level.startsWith("cal") && !item.level.startsWith("heu")) {
            // monthLevel.push(item);
            monthLevelCount += 1;
          }
          if (item.level.startsWith("cal")) {
            // monthCal.push(item);
            monthCalCount += 1;
          }
          if (item.level.startsWith("heu")) {
            // monthHeu.push(item);
            monthHeuCount += 1;
          }
        }
      });

      // console.log(`Month: ${monthCount}`);
      // console.log("Month End");
      // THIS YEAR
      // console.log("Year Start");

      const thisYear = new Date().getFullYear();

      // const year = await Attempt.find({
      //   $expr: { $eq: [{ $year: "$date" }, thisYear] },
      //   user: username,
      // });
      // console.log(year);
      // if (!year) {
      //   yearCount = "Database Error";
      //   yearLevelCount = "Database Error";
      //   yearCalCount = "Database Error";
      //   yearHeuCount = "Database Error";
      //   console.log("Database Error");
      // } else {
      //   yearCount = year.length;
      //   year.forEach((item) => {
      //     if (item.level) {
      //       if (
      //         !item.level.startsWith("cal") &&
      //         !item.level.startsWith("heu")
      //       ) {
      //         yearLevelCount += 1;
      //       }
      //       if (item.level.startsWith("cal")) {
      //         yearCalCount += 1;
      //       }
      //       if (item.level.startsWith("heu")) {
      //         yearHeuCount += 1;
      //       }
      //     }
      //   });
      // }

      // console.log("HERE!");

      // const year = await Attempt.find({
      //   $expr: { $eq: [{ $year: "$date" }, thisYear] },
      //   user: username,
      // });

      async function year(username, thisYear) {
        const year = await Attempt.find({
          $expr: { $eq: [{ $year: "$date" }, thisYear] },
          user: username,
        });
        return year;
      }

      let timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Timeout");
        }, 10000);
      });

      await Promise.race([year(username, thisYear), timeout]).then(
        (message) => {
          // console.log(`msg: ${message}`);
          if (message == "Timeout") {
            yearCount = "Database slow";
            yearLevelCount = "Database slow";
            yearCalCount = "Database slow";
            yearHeuCount = "Database slow";
          } else {
            yearCount = message.length;
            // console.log(`The year count is ${message.length}`);
            message.forEach((item) => {
              if (item.level) {
                if (
                  !item.level.startsWith("cal") &&
                  !item.level.startsWith("heu")
                ) {
                  yearLevelCount += 1;
                }
                if (item.level.startsWith("cal")) {
                  yearCalCount += 1;
                }
                if (item.level.startsWith("heu")) {
                  yearHeuCount += 1;
                }
              }
            });
          }
        }
      );

      // yearCount = year.length;
      // console.log(`The year count is ${year.length}`);
      // year.forEach((item) => {
      //   if (item.level) {
      //     if (!item.level.startsWith("cal") && !item.level.startsWith("heu")) {
      //       yearLevelCount += 1;
      //     }
      //     if (item.level.startsWith("cal")) {
      //       yearCalCount += 1;
      //     }
      //     if (item.level.startsWith("heu")) {
      //       yearHeuCount += 1;
      //     }
      //   }
      // });

      // console.log("Year End");

      //HOMEWORK!!!
      // console.log(req.query.username);
      homework = await Homework.find({ name: req.query.username }).sort({
        subject: -1,
        dateIssue: -1,
      });
      // console.log(homework);
      let exam_id = [];
      let exams = [];
      async function getExamComments(homework) {
        for (let i = 0; i < homework.length; i++) {
          const exam = await Exam.findById(homework[i].exampaper_id);
          if (exam) {
            // console.log(`The exam comment is ${exam.comment}`);
            exams.push(exam);
            homework[i].exampaper_comment = exam.comment;
            // console.log(exam + " ⌚️");
            // console.log(homework[0] + " ☎️");
          }
        }
      }
      await getExamComments(homework);

      // homework.forEach(async (item, index) => {
      //   // exam_id.push(item.exampaper_id);
      //   const exam = await Exam.findById(item.exampaper_id);
      //   if (exam) {
      //     exams.push(exam);
      //     homework[index].exam_comment = exam.comment;
      //     console.log(exam + " ⌚️");
      //   }
      // });
      console.log(`Students: ${students}`);
      if (!searchedUser) {
        searchedUser = "Not found";
      }
    } else {
      console.log("Empty");
    }
    res.render("pages/summary", {
      students,
      username,
      authenticate,
      currentUser,
      searchedUser,
      todayCount,
      todayLevelCount,
      todayCalCount,
      todayHeuCount,
      todayCalFirst,
      todayHeuFirst,
      weekCount,
      weekLevelCount,
      weekCalCount,
      weekHeuCount,
      weekCalFirst,
      weekHeuFirst,
      monthCount,
      monthLevelCount,
      monthCalCount,
      monthHeuCount,
      yearCount,
      yearLevelCount,
      yearCalCount,
      yearHeuCount,
      allCount,
      allLevelCount,
      allCalCount,
      allHeuCount,
      homework,
    });
  } catch (e) {
    res.status(400).json({ message: e });
    // if (e.name == "CastError") {
    //   searchUser = "Not found";
    //   res.render("pages/summary", {
    //     username,
    //     authenticate,
    //     currentUser,
    //     searchedUser,
    //   });
    // }
  }
};

exports.login = async (req, res) => {
  console.log(req.auth);
  // const { message } = req;
  let message;
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  // const gradPictures = await Graduation.find().sort({ date: -1 }).limit(5);
  const gradPictures = await Graduation.find().sort({ date: -1 });

  res.render("pages/login", {
    gradPictures,
    username,
    authenticate,
    currentUser,
    message,
  });
  // res.send("This is the login page.");
};

exports.signup = (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/signup", { username, authenticate, currentUser });
};
