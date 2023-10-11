const Science = require("../models/scienceModel.js");
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
  try {
    const newQuestion = await Science.create(req.body);
    console.log(newQuestion);
    res.redirect("/science/new");
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.getTopic = async (req, res) => {
  if (!req.user.subject.includes("Primary Science") || !req.user.admin) {
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
    const everything = await Science.find();
    everything.forEach((item) => {
      item.level = item.level.toLowerCase();
      if (item.level == "p3" && !topic_p3.includes(item.topic))
        topic_p3.push(item.topic);
      if (item.level == "p4" && !topic_p4.includes(item.topic))
        topic_p4.push(item.topic);
      if (item.level == "p5" && !topic_p5.includes(item.topic))
        topic_p5.push(item.topic);
      if (item.level == "p6" && !topic_p6.includes(item.topic))
        topic_p6.push(item.topic);
      console.log(topic_p5);
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
    const questionsDB = await Science.find({ topic: req.body.topic });
    let questions = [];
    if (limit > questionsDB.length) limit = questionsDB.length;
    while (questions.length != limit) {
      const chosenQuestion =
        questionsDB[Math.floor(Math.random() * questionsDB.length)];
      const index = questionsDB.indexOf(chosenQuestion);
      questionsDB.splice(index, 1);
      questions.push(chosenQuestion);
    }
    console.log(questions);
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
