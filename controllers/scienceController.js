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

exports.getAllQuestions = (req, res) => {
  res.status(200).json({ message: "Well come to science!" });
};

exports.createQuestion = (req, res) => {
  //   res.status(200).json({ message: "Creating new question" });
  res.render("./science/scienceQuestion");
};

exports.postQuestion = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Posted new question" });
};
