const User = require("../models/userModel");
const Reward = require("../models/rewardModel");
const RewardLog = require("../models/rewardLogModel");
const Attempt = require("../models/attemptModel");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const stream = require("stream");
const path = require("path");
const multer = require("multer");
const upload = multer();
const { google } = require("googleapis");

let username;
let authenticate;
let currentUser;
// let fields = {
//   username,
//   authenticate,
// };

exports.getAllUsers = async (req, res) => {
  console.log("Getting all users");
  try {
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
  } catch (err) {
    console.log(err);
    return res.redirect("user/login");
  }
};

exports.editUser = async (req, res) => {
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

  res.render("pages/edit-user", {
    authenticate,
    username,
    currentUser,
    editUser,
  });
};

exports.editSingleUser = async (req, res) => {
  console.log("Edit Single");

  const id = req.params.id;
  const editUser = await User.findOne({ _id: id });
  console.log(req.user, editUser);
  console.log(req.user._id.equals(editUser._id));
  console.log(req.user.admin);
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
  });
};

exports.saveEditUser = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  console.log("Save edited user");
  console.log(currentUser.admin);
  console.log(req.body);
  try {
    const editUser = await User.findOne({ username: req.body.username });

    if (
      !currentUser.admin &&
      currentUser.username != req.body.username &&
      authenticate
    ) {
      res.status(403).json({ message: `You are not authorized to do this.` });
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
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const deleteUser = await User.findByIdAndDelete(id);
    return res.redirect("/user");
  } catch (err) {
    console.log("Delete User", err);
  }
};

exports.getAllPoints = async (req, res) => {
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
};

exports.getAllRewards = async (req, res) => {
  // const allRewards = await Reward.find();
  // const logRewards = await RewardLog.find().sort({ date: -1 }).limit(20);

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
  });
};

exports.newReward = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/rewards/new-rewards", {
    authenticate,
    username,
    currentUser,
  });
};

exports.editReward = async (req, res) => {
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
};

exports.deleteReward = async (req, res) => {
  console.log("Deleting reward");
  try {
    const id = req.params.id;
    const deleteReward = await Reward.findByIdAndDelete(id);
    res.redirect("/user/points/rewards");
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

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

// const auth = new google.auth.GoogleAuth({
//   keyFile: "./googlekey.json",
//   scopes: ["https://www.googleapis.com/auth/drive"],
// });

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

exports.postNewReward = async (req, res) => {
  console.log(`Request: ${req}`);
  console.log(req.body);
  try {
    const { body, files } = req;

    const imageID = await uploadFile(files[0]);
    console.log(imageID);
    req.body.link = imageID;
    const newReward = await Reward.create(req.body);
    console.log(newReward);

    // res.redirect("/user/points/rewards");
    res.send("Success");
  } catch (err) {
    console.log(err);
    return res.send("Failed");
  }
};

exports.saveReward = async (req, res) => {
  console.log("Saving Reward");

  const { body, files } = req;
  try {
    if (files.length != 0) {
      const imageID = await uploadFile(files[0]);
      req.body.link = imageID;
    }
    console.log({ body });
    const reward = await Reward.findByIdAndUpdate(body.rewardId, body);
    console.log({ reward });
    res.send("1");
  } catch (err) {
    console.log(err);
  }
};

exports.claimReward = async (req, res) => {
  console.log("Processing Claim");
  console.log(req.body);
  try {
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
  } catch (err) {
    console.log("Something happened");
  }

  // res.send();
};

exports.deleteRewardLog = async (req, res) => {
  const id = req.params.id;

  try {
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
  } catch (err) {
    res.status(404).json({ err });
  }
};

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
        level: -1,
        date: -1,
      })
      .lean(),
    User.findOne({ username: nameTemp.toLowerCase() }),
  ]);
  // console.log(`THESE ARE THE LATEST ATTEMPTS ${latestAttempt}`);
  // const latestAttempt = await Attempt.find({
  //   user: nameTemp,
  //   date: { $lt: today },
  //   tries: "1",
  // }).sort({
  //   level: -1,
  //   date: -1,
  // });

  // const { DOB } = await User.findOne({ username: nameTemp.toLowerCase() });
  const age = new Date().getFullYear() - DOB.getFullYear();
  console.log(age);

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
  console.log(heuRecommend);
  console.log(levelRecommend);

  //CALCULATIONS
  console.log("CHECKING CALCULATIONS");
  const calOne = ["calOne"]; //age 7
  const calTwo = ["calTwo"];
  const calThree = ["calThree"];
  const calFour = ["calFour"];
  const calFive = ["calFive", "calFiveb"];
  const calSix = ["calSix", "calSixb"];
  const calAgeSeven = calOne;
  const calAgeEight = calTwo;
  const calAgeNine = calThree;
  const calAgeTen = calFour;
  const calAgeEleven = calFour.concat(calFive);
  const calAgeTwelve = calFour.concat(calFive, calSix);
  let uniqLevel = [];
  awards.forEach((award) => {
    uniqLevel = [];
    if (recommend.length < 1) {
      calRecommend.forEach((calLevel) => {
        latestAttempt.forEach((attempt) => {
          console.log(`In calcuation: ${attempt.level} 🥀`);
          let recommendObj = { ...attempt };
          if (attempt.level == calLevel) {
            if (
              !uniqLevel.includes(attempt.level) &&
              !recommendList.includes(attempt.level)
            ) {
              // if (attempt.award == award) {
              if (attempt.award == award && recommend.length < 1) {
                console.log(award);
                recommendObj.level = attempt.level;
                recommendObj.mode = "Easy";
                // attempt.mode = "Easy";
                // recommend.push(attempt);
                recommend.push(recommendObj);
                console.log(`Try new stuff ${recommend}`);
                recommendList.push(attempt.level);
                uniqLevel.push(attempt.level);
              } else {
                // uniqLevel.push(attempt.level);
                console.log("Rotation or promoted");
                if (age == 10) {
                  const index = calAgeTen.indexOf(attempt.level);
                  if (index + 1 == calAgeTen.length) {
                    // attempt.level = calAgeTen[0];
                    recommendObj.level = calAgeTen[0];
                  } else {
                    // recommendObj= calAgeTen[index + 1];
                    recommendObj.level = calAgeTen[index + 1];
                  }
                }
                if (age == 11) {
                  const index = calAgeEleven.indexOf(attempt.level);

                  if (index + 1 == calAgeEleven.length) {
                    // attempt.level = calAgeEleven[0];
                    recommendObj.level = calAgeEleven[0];
                  } else {
                    // attempt.level = calAgeEleven[index + 1];
                    recommendObj.level = calAgeEleven[index + 1];
                  }
                }
                if (age == 12) {
                  const index = calAgeTwelve.indexOf(attempt.level);

                  if (index + 1 == calAgeTwelve.length) {
                    recommendObj.level = calAgeTwelve[0];
                  } else {
                    recommendObj.level = calAgeTwelve[index + 1];
                  }
                }
                if (
                  !recommendList.includes(attempt.level) &&
                  recommend.length < 1
                ) {
                  // recommendObj = attempt;
                  recommendObj.setting = 99;
                  recommendObj.mode = "Easy";
                  recommendObj.time = "";
                  recommendObj.mistake = "";
                  recommendObj.score = "";
                  recommendObj.award = "";
                  attempt.date = new Date();
                  console.log(`Obj: ${recommendObj}`);
                  recommend.push(recommendObj);
                  recommendList.push(attempt.level);
                  uniqLevel.push(attempt.level);
                }
              }
            }
          }
        });
      });
    }
  });

  // //HEURISTICS
  console.log("CHECKING HEURISTICS");
  const heuOne = ["heuOne"]; //age 7
  const heuTwo = ["heuTwo", "heuTwob"];
  const heuThree = ["heuThree", "heuThreeb"];
  const heuFour = ["heuFour", "heuFourb"];
  const heuFive = ["heuFive", "heuFiveb"];
  const heuSix = ["heuSix", "heuSixb"];
  const heuAgeSeven = heuOne;
  const heuAgeEight = heuTwo;
  const heuAgeNine = heuThree.concat(heuTwo);
  const heuAgeTen = heuFour.concat(heuThree);
  const heuAgeEleven = heuFour.concat(heuFive, heuThree);
  const heuAgeTwelve = heuFour.concat(heuFive, heuSix, heuThree);
  awards.forEach((award) => {
    uniqLevel = [];
    // if (recommend.length < 2) {
    heuRecommend.forEach((heuLevel) => {
      latestAttempt.forEach((attempt) => {
        console.log(`In heuristics: ${attempt.level} 🌞`);

        let recommendObj = { ...attempt };
        console.log(`${recommendObj.level}`);
        // console.log(`Heu: ${recommendObj.toString()} ☀️`);
        if (attempt.level == heuLevel) {
          if (
            !uniqLevel.includes(attempt.level) &&
            !recommendList.includes(attempt.level)
          ) {
            if (attempt.award == award && recommend.length < 2) {
              recommend.push(recommendObj);
              recommendList.push(attempt.level);
              uniqLevel.push(attempt.level);
            } else {
              // uniqLevel.push(attempt.level);
              console.log("Rotation or promoted");
              if (age == 8) {
                const index = heuAgeEight.indexOf(attempt.level);
                recommendObj.level = heuAgeEight[index + 1];
                if (index + 1 == heuAgeEight.length) {
                  recommendObj.level = heuAgeEight[0];
                }
              }
              if (age == 9) {
                const index = heuAgeNine.indexOf(attempt.level);
                recommendObj.level = heuAgeNine[index + 1];
                if (index + 1 == heuAgeNine.length) {
                  recommendObj.level = heuAgeNine[0];
                }
              }
              if (age == 10) {
                const index = heuAgeTen.indexOf(attempt.level);
                recommendObj.level = heuAgeTen[index + 1];
                if (index + 1 == heuAgeTen.length) {
                  recommendObj.level = heuAgeTen[0];
                }
              }
              if (age == 11) {
                const index = heuAgeEleven.indexOf(attempt.level);
                recommendObj.level = heuAgeEleven[index + 1];
                if (index + 1 == heuAgeEleven.length) {
                  recommendObj.level = heuAgeEleven[0];
                }
              }
              if (age == 12) {
                const index = heuAgeTwelve.indexOf(attempt.level);
                recommendObj.level = heuAgeTwelve[index + 1];
                if (index + 1 == heuAgeTwelve.length) {
                  recommendObj.level = heuAgeTwelve[0];
                }
              }
              if (
                !recommendList.includes(attempt.level) &&
                recommend.length < 2
              ) {
                recommendObj.setting = 9;
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
    });
    // }
  });
  // CHECK IF RECOMMENDATION IS LESS THAN 4 ENTRIES
  // CHECK IF THE LATEST ENTRY OF A LEVEL IS 'TRY HARDER'
  // IF YES, RECOMMEND IT.
  // IF NO, CHECK ANOTHER LEVEL.

  awards.forEach((award) => {
    // console.log(`Recommend: ${recommend}`);
    console.log(`!!!! Award check !!!! ${award}`);
    uniqLevel = [];
    console.log(uniqLevel);
    if (recommend.length < 6) {
      latestAttempt.forEach((attempt) => {
        let recommendObj = { ...attempt };
        // let recommendObj = Object.assign({}, attempt);
        console.log(`In levels: ${attempt.level}🌗`);
        console.log(`${recommendObj.level}`);
        if (
          !attempt.level.startsWith("cal") &&
          !attempt.level.startsWith("heu")
        ) {
          if (
            !uniqLevel.includes(attempt.level) &&
            !recommendList.includes(attempt.level)
          ) {
            // console.log("Checking: " + attempt.level);

            if (attempt.award == award) {
              //CHECK IF AWARD IS BRONZE AND ABOVE
              if (attempt.award != "Try harder") {
                if (attempt.mode == "Easy") {
                  console.log("Easy detected, switching to Normal");
                  recommendObj.mode = "Normal";
                  let count = 0;
                  latestAttempt.forEach((item) => {
                    if (item.level == attempt.level && item.mode == "Normal") {
                      console.log(
                        "Normal mode done before, switching to Hardcore"
                      );
                      count += 1;
                    }
                  });
                  if (count != 0) recommendObj.mode = "Hardcore";
                } else if (attempt.mode == "Normal") {
                  console.log("Normal detected, switching to Hardcore");
                  recommendObj.mode = "Hardcore";
                } else {
                  uniqLevel.push(attempt.level);
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
                    "4.08",
                    "4.11",
                    "4.12",
                    "4.13",
                    "4.16",
                    "4.17",
                    "4.18",
                    "4.19",
                    "4.20",
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
                    "5.10",
                    "5.11",
                    "5.12",
                    "5.13",
                    "5.14",
                    "5.15",
                    "5.16",
                  ];
                  const levelSix = ["6", "6.01", "6.02", "6.03"];
                  console.log(`${attempt.level} <-------`);
                  if (attempt.level.startsWith("1") || attempt.level == "1") {
                    const index = levelOne.indexOf(attempt.level);
                    console.log(`----> ${index}, ${levelOne.length}`);
                    if (index == levelOne.length - 1) {
                      if (age > 7) {
                        recommendObj.level = levelTwo[0];
                      } else {
                        recommendObj.level = levelOne[0];
                      }
                    } else {
                      recommendObj.level = levelOne[index + 1];
                    }
                  } else if (attempt.level.startsWith("2")) {
                    const index = levelTwo.indexOf(attempt.level);
                    if (index == levelTwo.length - 1) {
                      console.log("Ended Level 2s");
                      if (age > 8) {
                        recommendObj.level = levelThree[0];
                      } else {
                        recommendObj.level = levelTwo[0];
                      }
                    } else {
                      recommendObj.level = levelTwo[index + 1];
                    }
                  } else if (attempt.level.startsWith("3")) {
                    const index = levelThree.indexOf(attempt.level);
                    if (index == levelThree.length - 1) {
                      if (age > 9) {
                        recommendObj.level = levelFour[0];
                      } else {
                        recommendObj.level = levelThree[0];
                      }
                    } else {
                      recommendObj.level = levelThree[index + 1];
                    }
                  } else if (attempt.level.startsWith("4")) {
                    const index = levelFour.indexOf(attempt.level);
                    if (index == levelFour.length - 1) {
                      if (age > 10) {
                        recommendObj.level = levelFive[0];
                      } else {
                        recommendObj.level = levelFour[0];
                      }
                    } else {
                      recommendObj.level = levelFour[index + 1];
                    }
                  } else if (attempt.level.startsWith("5")) {
                    const index = levelFive.indexOf(attempt.level);
                    if (index == levelFive.length - 1) {
                      if (age > 11) {
                        recommendObj.level = levelSix[0];
                      } else {
                        recommendObj.level = levelFive[0];
                      }
                    } else {
                      recommendObj.level = levelFive[index + 1];
                    }
                  } else if (attempt.level.startsWith("6")) {
                    const index = levelSix.indexOf(attempt.level);
                    if (index == levelSix.length - 1) {
                      if (age > 12) {
                        recommendObj.level = levelFour[0];
                      } else {
                        recommendObj.level = levelSix[0];
                      }
                    } else {
                      recommendObj.level = levelSix[index + 1];
                    }
                  } else {
                    console.log(`The end`);
                  }
                }
                console.log(`Newly assigned ${recommendObj.level}`);
                //CHECKING IF IT HAS BEEN DONE BEFORE

                console.log(
                  `Before: ${attempt.level} After:${recommendObj.level}`
                );

                let count = 0;
                latestAttempt.forEach((latest) => {
                  if (latest.level == attempt.level) {
                    count += 1;
                  }
                });
                console.log(`Count: ${count}`);
                if (count == 0) {
                  console.log(`Setting ${recommendObj.level} to Easy`);
                  recommendObj.mode = "Easy";
                } else {
                  console.log(`Setting ${recommendObj.level} to Hardcore`);
                  recommendObj.mode = "Hardcore";
                }

                // recommendObj.level = attempt.level;
                recommendObj.time = "";
                recommendObj.mistake = "";
                recommendObj.score = "";
                recommendObj.award = "";
                recommendObj.date = new Date();
              }
              // console.log(uniqLevel);
              if (
                // !uniqLevel.includes(attempt.level) &&
                recommend.length < 6 &&
                !recommendList.includes(recommendObj.level)
              ) {
                console.log("PUSHHHH!");
                console.log(recommendObj);
                recommend.push(recommendObj);
                recommendList.push(attempt.level);
                uniqLevel.push(attempt.level);
              }
              // recommend.push(attempt);
            } else {
              uniqLevel.push(attempt.level);
            }
          }
        }
      });
    }
  });
  // console.log(`Recommendations: ${recommend}`);
  return recommend;
};

exports.generateRecommendMiddleware = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.recommend = async (req, res) => {
  try {
    let username = req.user.username;
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
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.login = (req, res) => {
  console.log(req.auth);
  const { message } = req;
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  res.render("pages/login", { username, authenticate, currentUser });
  // res.send("This is the login page.");
};

exports.signup = (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("pages/signup", { username, authenticate, currentUser });
};
