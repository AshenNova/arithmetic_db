const Science = require("../models/scienceModel.js");
const User = require("../models/userModel.js");
const catchAsync = require("../utils/catchAsync");
const stream = require("stream");
const multer = require("multer");
const upload = multer();
const { google } = require("googleapis");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

exports.getAllQuestions = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  console.log("Getting all questions");
  try {
    const getAllQuestions = await Science.find().sort({ date: -1 });
    res.render("./science/displayAllQuestions", {
      username,
      authenticate,
      currentUser,
      getAllQuestions,
    });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e });
  }
  // res.status(200).json({ message: "Well come to science!" });
};

exports.extraPracticeQuestions = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let extra = req.user.incorrectScience;
  // console.log(extra);
  console.log("Getting extra questions");
  try {
    const extraQuestions = await Science.find({ _id: { $in: extra } });
    // console.log(extraQuestions);
    res.render("./science/extraPracticeQuestions", {
      username,
      authenticate,
      currentUser,
      extraQuestions,
    });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e });
  }
  // res.status(200).json({ message: "Well come to science!" });
};

exports.createQuestion = async (req, res) => {
  console.log("Creating Questions");
  //   res.status(200).json({ message: "Creating new question" });
  let topic = await Science.distinct("topic");
  let subtopic = await Science.distinct("subtopic");
  if (subtopic.includes("")) {
    const index = subtopic.indexOf("");
    console.log(index);
    subtopic.splice(index, 1);
  }
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("./science/scienceQuestion", {
    username,
    authenticate,
    currentUser,
    topic,
    subtopic,
  });
};

const GOOGLE_API_SCIENCE_FOLDER_ID = process.env.GOOGLE_API_SCIENCE_FOLDER_ID;
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
      parents: [GOOGLE_API_SCIENCE_FOLDER_ID],
    },
    fields: "id,name",
  });
  console.log(`Uploaded file ${data.name} ${data.id}`);
  return data.id;
}

exports.saveQuestion = async (req, res) => {
  if (!req.user.admin) {
    res.redirect("/science/topics");
  }
  console.log(req.body);
  if (req.body.topic[1] == "Select") {
    req.body.topic = req.body.topic[0];
  } else {
    req.body.topic = req.body.topic[1];
  }
  if (req.body.subtopic[1] == "Select") {
    req.body.subtopic = req.body.subtopic[0];
  } else {
    req.body.subtopic = req.body.subtopic[1];
  }
  req.body.level = req.body.level.toLowerCase();

  // FOR IMAGES
  const { body, files } = req;
  // if (files)
  if (files.length != 0) {
    const imageID = await uploadFile(files[0]);
    // console.log(imageID);
    req.body.image = imageID;
  }

  try {
    const newQuestion = await Science.create(req.body);
    console.log(newQuestion);
    res.redirect("/science/new");
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.getTopic = async (req, res) => {
  if (!req.user.subject.includes("Primary Science") && !req.user.admin) {
    return res.redirect("/user/login");
  }
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  try {
    let topic_p3 = [];
    let topic_p4 = [];
    let topic_p5 = [];
    let topic_p6 = [];
    let age = new Date().getFullYear() - currentUser.DOB.getFullYear();
    console.log(age);
    const everything = await Science.find();
    everything.forEach((item) => {
      item.level = item.level.toLowerCase();
      if (item.level == "p3" && !topic_p3.includes(item.topic) && age >= 8)
        topic_p3.push(item.topic);
      if (item.level == "p4" && !topic_p4.includes(item.topic) && age >= 9)
        topic_p4.push(item.topic);
      if (item.level == "p5" && !topic_p5.includes(item.topic) && age >= 10)
        topic_p5.push(item.topic);
      if (item.level == "p6" && !topic_p6.includes(item.topic) && age >= 11)
        topic_p6.push(item.topic);
    });
    // const topics = await Science.distinct("topic");

    res.render("./science/getTopic", {
      username,
      authenticate,
      currentUser,
      topic_p3,
      topic_p4,
      topic_p5,
      topic_p6,
    });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e });
  }
};

exports.getQuestions = async (req, res) => {
  console.log("Sent topic, querying for questions");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let limit = req.body.numberOfQuestions;
  try {
    console.log(req.body);
    const [p3, p4, p5, p6] = await Promise.all([
      Science.find({ level: "p3", topic: req.body.topic_p3 }).lean(),
      Science.find({ level: "p4", topic: req.body.topic_p4 }).lean(),
      Science.find({ level: "p5", topic: req.body.topic_p5 }).lean(),
      Science.find({ level: "p6", topic: req.body.topic_p6 }).lean(),
    ]);
    // const p3 = await Science.find({ topic: req.body.topic_p3, level: "p3" });
    // const p4 = await Science.find({ topic: req.body.topic_p4, level: "p4" });
    // const p5 = await Science.find({ topic: req.body.topic_p5, level: "p5" });
    // const p6 = await Science.find({ topic: req.body.topic_p6, level: "p6" });

    const questionsDB = p3.concat(p4, p5, p6);
    let questions = [];
    if (limit > questionsDB.length) limit = questionsDB.length;
    while (questions.length != limit) {
      const chosenQuestion =
        questionsDB[Math.floor(Math.random() * questionsDB.length)];
      const index = questionsDB.indexOf(chosenQuestion);
      questionsDB.splice(index, 1);
      questions.push(chosenQuestion);
    }
    // res.status(200).json({ status: "Success", message: e });
    res.render("./science/displayQuestions", {
      username,
      authenticate,
      currentUser,
      questions,
    });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e });
  }
};

exports.updateUserScience = async (req, res) => {
  console.log("Received!");
  // const arrStr = req.body;
  console.log(req.body);
  console.log(req.body.incorrect);

  const currentUser = req.user;
  const list = currentUser.incorrectScience;
  // console.log(currentUser);
  console.log(list);
  if (req.body.correct) {
    req.body.correct.forEach((item) => {
      if (list.includes(item)) {
        const index = list.indexOf(item);
        list.splice(index, 1);
      }
    });
  }
  if (req.body.incorrect) {
    req.body.incorrect.forEach((item) => {
      if (!list.includes(item)) {
        list.push(item);
      }
    });
  }

  const updating = await User.findByIdAndUpdate(
    currentUser._id,
    { incorrectScience: list },
    { new: true }
  );
  res.send();
};
