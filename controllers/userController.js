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
  if (
    !authenticate ||
    (!currentUser.admin && currentUser.username != req.query.username)
  ) {
    return res.redirect("/user/login");
  }
  console.log("Editing");
  // console.log(req.query);
  const editUser = await User.findOne({ username: req.query.username });
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
    RewardLog.find().sort({ claimed: -1 }).limit(20),
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
  const latestAttempt = await Attempt.find({
    user: nameTemp,
    date: { $lt: today },
    tries: "1",
  }).sort({
    level: -1,
    date: -1,
  });

  let recommend = [];
  let levelRecommend = [];
  let calRecommend = [];
  let heuRecommend = [];
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

  let uniqLevel = [];
  awards.forEach((award) => {
    uniqLevel = [];
    if (recommend.length < 1) {
      calRecommend.forEach((calLevel) => {
        latestAttempt.forEach((attempt) => {
          if (attempt.level == calLevel) {
            if (!uniqLevel.includes(attempt.level)) {
              if (attempt.award == award) {
                recommend.push(attempt);
                uniqLevel.push(attempt.level);
              } else {
                uniqLevel.push(attempt.level);
              }
            }
          }
        });
      });
    }
  });

  //HEURISTICS
  awards.forEach((award) => {
    uniqLevel = [];
    if (recommend.length < 2) {
      heuRecommend.forEach((heuLevel) => {
        latestAttempt.forEach((attempt) => {
          if (attempt.level == heuLevel) {
            if (!uniqLevel.includes(attempt.level)) {
              if (attempt.award == award) {
                recommend.push(attempt);
                uniqLevel.push(attempt.level);
              } else {
                uniqLevel.push(attempt.level);
              }
            }
          }
        });
      });
    }
  });
  // CHECK IF RECOMMENDATION IS LESS THAN 4 ENTRIES
  // CHECK IF THE LATEST ENTRY OF A LEVEL IS 'TRY HARDER'
  // IF YES, RECOMMEND IT.
  // IF NO, CHECK ANOTHER LEVEL.

  awards.forEach((award) => {
    uniqLevel = [];
    if (recommend.length < 6) {
      latestAttempt.forEach((attempt) => {
        if (
          !attempt.level.startsWith("cal") &&
          !attempt.level.startsWith("heu")
        ) {
          if (!uniqLevel.includes(attempt.level)) {
            if (attempt.award == award) {
              recommend.push(attempt);
              uniqLevel.push(attempt.level);
            } else {
              uniqLevel.push(attempt.level);
            }
          }
        }
      });
    }
  });

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
    res.recommend = recommend;
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
