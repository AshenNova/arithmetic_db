const User = require("../models/userModel");
const Reward = require("../models/rewardModel");
const RewardLog = require("../models/rewardLogModel");
const Attempt = require("../models/attemptModel");
const Homework = require("../models/homeworkModel");
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
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (
    !authenticate ||
    (!currentUser.admin && currentUser.username != req.query.username)
  ) {
    return res.redirect("/user/login");
  }
  console.log("Editing");
  // console.log(req.query);
  const editUser = await User.findOne({ username: req.query.username });

  if (!editUser) {
    return next(new AppError(`No such User was found.`, 404));
  }

  let subjects = ["Primary Math", "Primary Science"];
  console.log(editUser.subject);
  res.render("pages/edit-user", {
    authenticate,
    username,
    currentUser,
    editUser,
    subjects,
  });
});

exports.editSingleUser = catchAsync(async (req, res, next) => {
  console.log("Edit Single");

  const id = req.params.id;
  const editUser = await User.findOne({ _id: id });
  console.log(editUser);
  const subjects = editUser.subject;
  console.log(subjects);
  if (!req.user._id.equals(editUser._id) && !req.user.admin) {
    return res.redirect("/user/login");
  }
  console.log(editUser);

  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/edit-user", {
    authenticate,
    username,
    currentUser,
    editUser,
    subjects,
  });
});

exports.saveEditUser = catchAsync(async (req, res, next) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  console.log("Save edited user");
  console.log(currentUser.admin);
  console.log(req.body);
  // try {
  const editUser = await User.findOne({ username: req.body.username });

  if (
    !currentUser.admin &&
    currentUser.username != req.body.username &&
    authenticate
  ) {
    res.status(403).json({ message: `You are not authorized to do this.` });
  }
  console.log(req.body);
  if (!currentUser.admin) {
    delete req.body.email;
    delete req.body.DOB;
    delete req.body.subject;
    delete req.body.gift;
    delete req.body.freeze;
    delete req.body.freezeEndDate;
  }
  console.log(req.body.password, req.body.confirmPassword);
  if (req.body.password == "" || req.body.confirmPassword == "") {
    delete req.body.password;
    delete req.body.confirmPassword;
  } else {
    if (req.body.password == req.body.confirmPassword) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    } else {
      return res
        .status(403)
        .json({ message: `Password and confirm password is not the same.` });
    }
  }
  req.body.confirmPassword = "";
  console.log(req.body);
  const update = await User.findByIdAndUpdate(editUser._id, req.body, {
    new: true,
  });
  // req.body.confirmPassword = "";
  console.log(`Update: ${update}`);
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
  if (level == 2.02 || level == 2.05) {
    console.log(`The level is ${level}. Age is ${age}.`);
    if (age == 8 || age <= 7) {
      return 2;
    } else if (age == 9) {
      return 3;
    } else if (age == 10) {
      return 4;
    } else if (age == 11) {
      return 5;
    } else if (age == 12) {
      return 6;
    } else {
      return 6;
    }
  } else if (level == 3.16) {
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

    allAttempts.forEach((item) => {
      if (item.level == 4.21) {
        if (item.setting == 1) countOne += 1;
        if (item.setting == 2 || item.setting == "1-2") {
          countTwo += 1;
        }
        if (item.setting == 3 || item.setting == "1-3") {
          countThree += 1;
        }
        if (item.setting == 4 || item.setting == "1-4") {
          countFour += 1;
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
  } else {
    return "";
  }
}

const generateRec = async (nameTemp) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [latestAttempt, { DOB }] = await Promise.all([
    Attempt.find({
      user: nameTemp,
      date: { $lt: today },
      tries: "1",
    })
      .sort({
        // level: -1,
        date: -1,
      })
      // .limit(10)
      .lean(),
    User.findOne({ username: nameTemp.toLowerCase() }),
  ]);
  let distinctLevels = await Attempt.distinct("level", { user: nameTemp });
  const age = new Date().getFullYear() - DOB.getFullYear();
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
      if (calRecommend.includes(attempt.level) && recommend.length < 1) {
        if (
          !uniqLevel.includes(attempt.level) &&
          !recommendList.includes(attempt.level)
        ) {
          console.log(`In calcuation: ${attempt.level} 🥀`);
          // if (attempt.award == award) {
          if (attempt.award == award && recommend.length < 1) {
            recommendObj.level = attempt.level;
            recommendObj.mode = "Easy";
            recommend.push(recommendObj);
            recommendList.push(attempt.level);
            uniqLevel.push(attempt.level);
          } else {
            // uniqLevel.push(attempt.level);
            console.log("Rotation or promoted");
            if (attempt.extra == "") {
              let ageCal;
              if (age <= 7) ageCal = calAgeSeven;
              if (age == 8) ageCal = calAgeEight;
              if (age == 9) ageCal = calAgeNine;
              if (age == 10) ageCal = calAgeTen;
              if (age == 11) ageCal = calAgeEleven;
              if (age == 12) ageCal = calAgeTwelve;
              distinctLevels.forEach((item) => {
                if (ageCal.includes(item) && !calculationsArr.includes(item)) {
                  calculationsArr.push(item);
                }
              });
              console.log(calculationsArr + " 💯");
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
              console.log(`The maximum is ${maximum}`);
              latestAttempt.forEach((item) => {
                if (item.level.startsWith(recommendObj.level)) {
                  // console.log("Rabbit 1");
                  if (item.setting == 99) {
                    // console.log("Rabbit 1-1");
                    console.log("99 exist");
                    count += 1;
                  } else {
                    // console.log("Rabbit 1-2");
                    console.log(
                      `Checking if setting is integer: ${item.setting} for Level: ${item.level}`
                    );
                    // console.log(Number.isInteger(item.setting * 1));
                    if (Number.isInteger(item.setting * 1)) {
                      console.log("Yes Integer");
                      console.log(item.setting);
                      if (item.setting * 1 > maximum) {
                        maximum = item.setting;
                      }
                    } else {
                      console.log("No integer, splitting");
                      console.log(item.setting);
                      const split = item.setting.split("-");
                      console.log(split);
                      console.log(`The level is ${item.level}`);
                      const largest = split[split.length - 1];
                      if (largest > maximum) {
                        maximum = largest;
                      }
                    }
                  }
                }
              });
              console.log(`Calculation maximum = ${maximum}`);
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
  console.log("Attempted " + heuristics + " before");
  let heuristicsArr = [];
  const heuOne = ["heuOne"]; //age 7
  const heuTwo = ["heuTwo", "heuTwob"];
  const heuThree = ["heuThree", "heuThreeb"];
  const heuFour = ["heuFour", "heuFourb"];
  const heuFive = ["heuFive", "heuFiveb"];
  const heuSix = ["heuSix", "heuSixb"];
  const heuAgeSeven = heuOne;
  const heuAgeEight = heuTwo;
  const heuAgeNine = heuTwo.concat(heuThree); //p3
  const heuAgeTen = heuThree.concat(heuFour); //p4
  const heuAgeEleven = heuThree.concat(heuFour, heuFive); //p5
  const heuAgeTwelve = heuThree.concat(heuFour, heuFive, heuSix); //p6
  awards.forEach((award) => {
    uniqLevel = [];
    // if (recommend.length < 2) {
    // heuRecommend.forEach(heuRecommendl) => {
    latestAttempt.forEach((attempt) => {
      let recommendObj = { ...attempt };
      if (heuRecommend.includes(attempt.level) && recommend.length < 2) {
        console.log(`In heuristics: ${attempt.level} 🌞`);
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
            console.log("Rotation or promoted");
            if (attempt.extra == "") {
              let ageHeu = [];
              if (age <= 7) ageHeu = heuAgeSeven;
              if (age == 8) ageHeu = heuAgeEight;
              if (age == 9) ageHeu = heuAgeNine;
              if (age == 10) ageHeu = heuAgeTen;
              if (age == 11) ageHeu = heuAgeEleven;
              if (age == 12) ageHeu = heuAgeTwelve;
              distinctLevels.forEach((item) => {
                if (ageHeu.includes(item) && !heuristicsArr.includes(item)) {
                  console.log("YES!");
                  heuristicsArr.push(item);
                }
              });
              console.log(heuristicsArr + " 💯");
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
                    console.log("9 exist");
                    count += 1;
                  } else {
                    console.log(
                      `Checking if setting is integer: ${item.setting}`
                    );
                    // console.log(Number.isInteger(item.setting * 1));
                    if (Number.isInteger(item.setting * 1)) {
                      console.log("Yes Integer");
                      console.log(item.setting);
                      if (item.setting > maximum) {
                        maximum = item.setting;
                      }
                    } else {
                      console.log("No integer, splitting");
                      console.log(item.setting);
                      const split = item.setting.split("-");
                      console.log(split);
                      const largest = split[split.length - 1];
                      if (largest > maximum) {
                        maximum = largest;
                      }
                    }
                  }
                }
              });
              console.log(`Calculation maximum = ${maximum}`);
              if (count > 0) {
                console.log("Setting to 9");
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
              console.log(`heu: ${recommendObj}`);
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
  latestAttempt.forEach((attempt) => {
    if (
      !attempt.level.startsWith("cal") &&
      !attempt.level.startsWith("heu") &&
      recommend.length < 6
    ) {
      if (
        attempt.award == "Try harder" &&
        !existingLevel.includes(attempt.level)
      ) {
        console.log("Please try again");
        recommend.push(attempt);
        existingLevel.push(attempt.level);
        console.log(attempt);
      } else {
        if (attempt.mode == "Easy") {
          attempt.mode = "Normal";
          recommend.push(attempt);
          existingLevel.push(attempt.level);
        }
        if (attempt.mode == "Normal") {
          attempt.mode = "Hardcore";
          recommend.push(attempt);
          existingLevel.push(attempt.level);
        }
        if (attempt.mode == "Hardcore") {
          console.log("COMPLETED IN HARDCORE MODE", attempt.level);
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
          ];
          const levelThree = [
            "3",
            "3.01",
            "3.02",
            "3.03",
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
            "4.24",
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
          const levelSix = ["6", "6.01", "6.02", "6.03"];

          let ageLevel;
          if (age <= 7) ageLevel = [];
          if (age == 8) {
            ageLevel = levelOne;
            const removeList = ["1", "1.02"];
            removeList.forEach((item) => {
              if (ageLevel.includes(item)) {
                const index = ageLevel.indexOf(item);
                ageLevel.splice(index, 1);
              }
            });
          }
          // p3
          if (age == 9) {
            ageLevel = levelOne.concat(levelTwo);
            const removeList = ["1", "1.01", "1.02", "2.01"];
            removeList.forEach((item) => {
              if (ageLevel.includes(item)) {
                const index = ageLevel.indexOf(item);
                ageLevel.splice(index, 1);
              }
            });
          }
          //p4
          if (age == 10) {
            ageLevel = levelOne.concat(levelTwo, levelThree);
          }
          if (age == 11)
            ageLevel = levelOne.concat(levelTwo, levelThree, levelFour);

          if (age == 12)
            ageLevel = levelOne.concat(
              levelTwo,
              levelThree,
              levelFour,
              levelFive
              // levelSix
            );
          //Delete list for age 10, 11 and 12
          if (age == 10 || age == 11 || age == 12) {
            const removeList = [
              "1",
              "1.01",
              "1.02",
              "1.03",
              "1.06",
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
              if (ageLevel.includes(item)) {
                const index = ageLevel.indexOf(item);
                ageLevel.splice(index, 1);
              }
            });
          }
          distinctLevels.forEach((item) => {
            if (age <= 7) {
              if (item.startsWith("1")) {
                ageLevel.push(item);
              }
            }
            if (age == 8) {
              if (item.startsWith("2")) {
                ageLevel.push(item);
              }
            }
            if (age == 9) {
              if (item.startsWith("3")) {
                ageLevel.push(item);
              }
            }
            if (age == 10) {
              if (item.startsWith("4")) {
                ageLevel.push(item);
              }
            }
            if (age == 11) {
              if (item.startsWith("5")) {
                ageLevel.push(item);
              }
            }
            if (age == 12) {
              if (item.startsWith("6")) {
                ageLevel.push(item);
              }
            }
          });

          let recommendObj = {};

          // Get rid of those levels are already has been pushed

          console.log(`History: ${ageLevel}`);
          console.log(`Unique Levels: ${existingLevel}`);
          console.log(attempt.level);
          let index = ageLevel.indexOf(attempt.level);
          console.log("The index is " + index);
          //Select new level
          if (index == ageLevel.length - 1) {
            recommendObj.level = ageLevel[0];
          } else {
            index += 1;
            while (existingLevel.includes(ageLevel[index])) {
              index += 1;
            }
            recommendObj.level = ageLevel[index];
            if (index == ageLevel.length - 1) {
              index = 0;
            }
          }

          console.log(`Previous: ${attempt.level}, New: ${recommendObj.level}`);
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
            console.log(`Setting ${recommendObj.level} to Easy`);
            recommendObj.mode = "Easy";
          } else {
            console.log(`Setting ${recommendObj.level} to Hardcore`);
            recommendObj.mode = "Hardcore";
          }

          recommendObj.setting = settings(
            recommendObj.level,
            age,
            latestAttempt
          );
          console.log(`The recommended settings is ${recommendObj.setting}`);
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
  // awards.forEach((award) => {
  //   uniqLevel = [];
  //   console.log(uniqLevel);
  //   if (recommend.length < 6) {
  //     latestAttempt.forEach((attempt) => {
  //       let recommendObj = { ...attempt };

  //       if (
  //         !attempt.level.startsWith("cal") &&
  //         !attempt.level.startsWith("heu")
  //       ) {
  //         if (
  //           !uniqLevel.includes(attempt.level) &&
  //           !recommendList.includes(attempt.level)
  //         ) {
  //           if (attempt.award == award) {
  //             //CHECK IF AWARD IS BRONZE AND ABOVE
  //             if (attempt.award != "Try harder" && recommend.length < 6) {
  //               if (attempt.mode == "Easy") {
  //                 console.log("Easy detected, switching to Normal");
  //                 recommendObj.mode = "Normal";
  //                 let count = 0;
  //                 latestAttempt.forEach((item) => {
  //                   if (item.level == attempt.level && item.mode == "Normal") {
  //                     console.log(
  //                       "Normal mode done before, switching to Hardcore"
  //                     );
  //                     count += 1;
  //                   }
  //                 });
  //                 if (count != 0) recommendObj.mode = "Hardcore";
  //               } else if (attempt.mode == "Normal") {
  //                 console.log("Normal detected, switching to Hardcore");
  //                 recommendObj.mode = "Hardcore";
  //               } else {
  //                 uniqLevel.push(attempt.level);
  //                 console.log("COMPLETED IN HARDCORE MODE", attempt.level);
  //                 const levelOne = [
  //                   "1",
  //                   "1.01",
  //                   "1.02",
  //                   "1.03",
  //                   "1.04",
  //                   "1.05",
  //                   "1.06",
  //                   "1.07",
  //                   "1.08",
  //                 ];
  //                 const levelTwo = [
  //                   "2",
  //                   "2.01",
  //                   "2.02",
  //                   "2.03",
  //                   "2.04",
  //                   "2.05",
  //                   "2.06",
  //                   "2.07",
  //                 ];
  //                 const levelThree = [
  //                   "3",
  //                   "3.01",
  //                   "3.02",
  //                   "3.03",
  //                   "3.06",
  //                   "3.07",
  //                   "3.11",
  //                   "3.12",
  //                   "3.16",
  //                   "3.17",
  //                   "3.18",
  //                   "3.19",
  //                 ];
  //                 const levelFour = [
  //                   "4.01",
  //                   "4.02",
  //                   "4.03",
  //                   "4.04",
  //                   "4.05",
  //                   "4.07",
  //                   "4.08",
  //                   "4.09",
  //                   "4.1",
  //                   "4.11",
  //                   "4.13",
  //                   "4.15",
  //                   // "4.16",
  //                   "4.17",
  //                   "4.18",
  //                   "4.19",
  //                   "4.2",
  //                   "4.21",
  //                   "4.22",
  //                   "4.23",
  //                   "4.24",
  //                   "4.25",
  //                   "4.26",
  //                 ];
  //                 const levelFive = [
  //                   "5",
  //                   "5.01",
  //                   "5.02",
  //                   "5.03",
  //                   "5.04",
  //                   "5.05",
  //                   "5.06",
  //                   "5.07",
  //                   "5.08",
  //                   "5.09",
  //                   "5.1",
  //                   "5.11",
  //                   "5.12",
  //                   "5.13",
  //                   "5.14",
  //                   "5.15",
  //                   "5.16",
  //                   "5.17",
  //                   "5.18",
  //                 ];
  //                 const levelSix = ["6", "6.01", "6.02", "6.03"];

  //                 let ageLevel;
  //                 if (age <= 7) ageLevel = [];
  //                 if (age == 8) {
  //                   ageLevel = levelOne;
  //                   const removeList = ["1", "1.02"];
  //                   removeList.forEach((item) => {
  //                     if (ageLevel.includes(item)) {
  //                       const index = ageLevel.indexOf(item);
  //                       ageLevel.splice(index, 1);
  //                     }
  //                   });
  //                 }
  //                 // p3
  //                 if (age == 9) {
  //                   ageLevel = levelOne.concat(levelTwo);
  //                   const removeList = ["1", "1.01", "1.02", "2.01"];
  //                   removeList.forEach((item) => {
  //                     if (ageLevel.includes(item)) {
  //                       const index = ageLevel.indexOf(item);
  //                       ageLevel.splice(index, 1);
  //                     }
  //                   });
  //                 }
  //                 //p4
  //                 if (age == 10) {
  //                   ageLevel = levelOne.concat(levelTwo, levelThree);
  //                 }
  //                 if (age == 11)
  //                   ageLevel = levelOne.concat(levelTwo, levelThree, levelFour);

  //                 if (age == 12)
  //                   ageLevel = levelOne.concat(
  //                     levelTwo,
  //                     levelThree,
  //                     levelFour,
  //                     levelFive
  //                     // levelSix
  //                   );
  //                 //Delete list for age 10, 11 and 12
  //                 if (age == 10 || age == 11 || age == 12) {
  //                   const removeList = [
  //                     "1",
  //                     "1.01",
  //                     "1.02",
  //                     "1.03",
  //                     "1.06",
  //                     "2",
  //                     "2.01",
  //                     "2.03",
  //                     "3",
  //                     "3.04",
  //                     "3.05",
  //                     "3.09",
  //                     "3.1",
  //                   ];
  //                   // Removing certain level
  //                   removeList.forEach((item) => {
  //                     if (ageLevel.includes(item)) {
  //                       const index = ageLevel.indexOf(item);
  //                       ageLevel.splice(index, 1);
  //                     }
  //                   });
  //                 }
  //                 distinctLevels.forEach((item) => {
  //                   if (age <= 7) {
  //                     if (item.startsWith("1")) {
  //                       ageLevel.push(item);
  //                     }
  //                   }
  //                   if (age == 8) {
  //                     if (item.startsWith("2")) {
  //                       ageLevel.push(item);
  //                     }
  //                   }
  //                   if (age == 9) {
  //                     if (item.startsWith("3")) {
  //                       ageLevel.push(item);
  //                     }
  //                   }
  //                   if (age == 10) {
  //                     if (item.startsWith("4")) {
  //                       ageLevel.push(item);
  //                     }
  //                   }
  //                   if (age == 11) {
  //                     if (item.startsWith("5")) {
  //                       ageLevel.push(item);
  //                     }
  //                   }
  //                   if (age == 12) {
  //                     if (item.startsWith("6")) {
  //                       ageLevel.push(item);
  //                     }
  //                   }
  //                 });
  //                 // console.log(`Age levels are: ${ageLevel}`);
  //                 console.log(ageLevel + " 💯");
  //                 let index = ageLevel.indexOf(attempt.level);
  //                 console.log(`THE INDEX is ${index}`);
  //                 if (index == -1) {
  //                   index = Math.floor(ageLevel.length / 2);
  //                 }

  //                 if (index + 1 == ageLevel.length) {
  //                   console.log("Resetting Level");
  //                   recommendObj.level = ageLevel[0];
  //                 } else {
  //                   recommendObj.level = ageLevel[index + 1];
  //                 }
  //               }
  //               //CHECKING IF IT HAS BEEN DONE BEFORE

  //               console.log(
  //                 `Before: ${attempt.level} After:${recommendObj.level}`
  //               );
  //               let count = 0;
  //               latestAttempt.forEach((latest) => {
  //                 if (latest.level == recommendObj.level) {
  //                   count += 1;
  //                 }
  //               });
  //               // console.log(`Count: ${count}`);
  //               if (count == 0) {
  //                 console.log(`Setting ${recommendObj.level} to Easy`);
  //                 recommendObj.mode = "Easy";
  //               } else {
  //                 console.log(`Setting ${recommendObj.level} to Hardcore`);
  //                 recommendObj.mode = "Hardcore";
  //               }

  //               // LEVEL WITH SETTINGS

  //               recommendObj.setting = settings(
  //                 recommendObj.level,
  //                 age,
  //                 latestAttempt
  //               );
  //               console.log(
  //                 `The recommended settings is ${recommendObj.setting}`
  //               );

  //               // recommendObj.level = attempt.level;
  //               recommendObj.time = "";
  //               recommendObj.mistake = "";
  //               recommendObj.score = "";
  //               recommendObj.award = "";
  //               recommendObj.date = new Date();
  //             }
  //             // console.log(uniqLevel);
  //             if (
  //               // !uniqLevel.includes(attempt.level) &&
  //               recommend.length < 6 &&
  //               !recommendList.includes(recommendObj.level)
  //             ) {
  //               console.log("PUSHHHH!");
  //               recommend.push(recommendObj);
  //               recommendList.push(recommendObj.level);
  //               uniqLevel.push(attempt.level);
  //             }
  //             // recommend.push(attempt);
  //           } else {
  //             uniqLevel.push(attempt.level);
  //           }
  //         }
  //       }
  //     });
  //   }
  // });
  // console.log(`Recommendations: ${recommend}`);
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
  let username = req.user.username.trim();
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

  // console.log(todayAttempts);
  recommend.forEach((item, index) => {
    todayAttempts.forEach((todayItem) => {
      if (item.level == todayItem.level && item.mode == todayItem.mode) {
        console.log("YES! " + index);
        item.accomplish = true;
      }
    });
  });
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
  // let attempts;
  console.log(req.query);

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
      console.log(username);
      searchedUser = await User.findOne({ username: req.query.username });
      allCount = await Attempt.find({ user: username }).count();

      //TODAY
      console.log("Today start");
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      const today = await Attempt.find({
        user: username,
        date: { $gte: start, $lt: end },
      });
      todayCount = today.length;
      console.log(`Today: ${todayCount}`);
      console.log(today);
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
      console.log("Today end");
      //THIS WEEK
      console.log("Week start");
      const now = new Date();
      let day = now.getDay();
      if (day == 0) day = 7;
      console.log(`The day is ${day}`);
      const oneDay = 1000 * 60 * 60 * 24;
      // 2 = Tuesday; 3 = Wednesday
      let begin = new Date(start.getTime() - (day - 1) * oneDay);
      console.log(begin.toLocaleDateString("en-GB"));
      const week = await Attempt.find({
        user: username,
        date: { $gte: begin, $lt: end },
      });
      weekCount = week.length;
      console.log(`Week: ${weekCount}`);

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
      console.log("Week End");
      //THIS MONTH
      console.log("Month start");
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

      console.log(`Month: ${monthCount}`);
      console.log("Month End");
      // THIS YEAR
      console.log("Year Start");
      const thisYear = new Date().getFullYear();
      const year = await Attempt.find({
        $expr: { $eq: [{ $year: "$date" }, thisYear] },
        user: username,
      });
      console.log("HERE!");
      yearCount = year.length;

      year.forEach((item) => {
        if (item.level) {
          if (!item.level.startsWith("cal") && !item.level.startsWith("heu")) {
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

      console.log("Year End");

      //HOMEWORK!!!
      console.log(req.query.username);
      homework = await Homework.find({ name: req.query.username }).sort({
        subject: -1,
        dateIssue: -1,
      });

      console.log(homework);
      if (!searchedUser) {
        searchedUser = "Not found";
      }
    } else {
      console.log("Empty");
    }
    res.render("pages/summary", {
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
exports.login = (req, res) => {
  console.log(req.auth);
  // const { message } = req;
  let message;
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  res.render("pages/login", { username, authenticate, currentUser, message });
  // res.send("This is the login page.");
};

exports.signup = (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/signup", { username, authenticate, currentUser });
};
