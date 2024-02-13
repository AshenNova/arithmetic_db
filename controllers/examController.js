//FOR BODY PARSER
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//FOR MODELS AND CONTROLLERS
const Exam = require("../models/examModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/userModel");

exports.new = catchAsync(async (req, res, next) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  if (!currentUser.admin) {
    return res.redirect("/exam/table");
  }
  console.log("New exam paper");
  let existing = {};
  const schools = await Exam.distinct("school");
  const subjects = await Exam.distinct("subject");

  if (req.url.startsWith("/clone")) {
    console.log("Cloning");
    const id = req.params.id;
    const exam = await Exam.findById(id);
    console.log(exam);
    existing.subject = exam.subject;
    existing.year = exam.year;
    existing.level = exam.level;
    existing.type = exam.type;
  }
  res.render("./exam/new", {
    schools,
    subjects,
    existing,
    username,
    authenticate,
    currentUser,
  });
});

exports.save = catchAsync(async (req, res, next) => {
  const exam = req.body;
  console.log(req.body);
  // req.body.school = req.body.school1;
  // if (req.body.school1 == "") {
  //   req.body.school = req.body.school2;
  // }
  //   req.body.level = req.body.level.toUpperCase();
  //   req.body.type = req.body.type.toUpperCase();
  //   req.body.school = req.body.school.toUpperCase();
  const arrays = ["level", "type", "school"];
  for (let [key, value] of Object.entries(exam)) {
    if (arrays.includes(key)) {
      exam[key] = value.toUpperCase();
    }
    exam[key] = exam[key].trim();
  }
  if (req.body.id) {
    console.log("Saving");
    let saveExam = await Exam.findByIdAndUpdate(req.body.id, exam);
    res.redirect(`/exam/view/${saveExam._id}`);
  } else {
    let saveExam = new Exam(exam);
    saveExam = await saveExam.save();
    res.redirect(`/exam/view/${saveExam._id}`);
  }
});

exports.view = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const exam = await Exam.findById(id);
  res.render("./exam/view", { exam });
});

exports.edit = catchAsync(async (req, res, next) => {
  console.log("Editing paper");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  const id = req.params.id;
  const schools = await Exam.distinct("school");
  const subjects = await Exam.distinct("subject");
  const existing = await Exam.findById(id);
  res.render("./exam/new", {
    username,
    authenticate,
    currentUser,
    schools,
    subjects,
    existing,
  });
});

exports.list = catchAsync(async (req, res, next) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  const params = req.query;

  let unique = {};
  [unique.year, unique.subject, unique.level, unique.type, unique.school] =
    await Promise.all([
      Exam.distinct("year"),
      Exam.distinct("subject"),
      Exam.distinct("level"),
      Exam.distinct("type"),
      Exam.distinct("school"),
    ]);
  console.log(`Unique: ${unique}`);
  for (const [key, value] of Object.entries(params)) {
    if (value == "") delete params[key];
  }
  // console.log(params);

  console.log("Viewing exam paper (List)");
  if (params) {
    console.log("Params detected");
    exams = await Exam.find(params).sort({ date: -1 });
    // console.log(exams);
  } else {
    console.log("No params");
    exams = await Exam.find().sort({ date: -1 });
  }

  res.render("./exam/list", {
    exams,
    username,
    authenticate,
    currentUser,
    unique,
  });
});
exports.table = catchAsync(async (req, res, next) => {
  console.log("Table");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  const exams = await Exam.find().sort({ date: -1 });
  res.render("./exam/table", {
    exams,
    username,
    authenticate,
    currentUser,
  });
});
exports.delete = catchAsync(async (req, res, next) => {
  console.log("Deleting");
});
