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
  let existing;
  const schools = await Exam.distinct("school");
  const subjects = await Exam.distinct("subject");
  console.log("New exam paper");
  res.render("./exam/new", { schools, subjects, existing });
});

exports.save = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const exam = req.body;
  req.body.school = req.body.school1;
  if (req.body.school1 == "") {
    req.body.school = req.body.school2;
  }
  //   req.body.level = req.body.level.toUpperCase();
  //   req.body.type = req.body.type.toUpperCase();
  //   req.body.school = req.body.school.toUpperCase();
  const arrays = ["level", "type", "school"];
  for (let [key, value] of Object.entries(exam)) {
    console.log(`${key}, ${value}`);
    if (arrays.includes(key)) {
      exam[key] = value.toUpperCase();
    }
  }
  req.body.subject = req.body.subject1;
  if (req.body.subject1 == "") {
    req.body.subject = req.body.subject2;
  }

  if (req.body.id) {
    const editSave = await Exam.findByIdAndUpdate(req.body.id, exam);
    console.log(editSave);
  } else {
    let saveExam = new Exam(exam);
    saveExam = await saveExam.save();
    console.log(saveExam);
  }

  res.redirect("/exam/list");
});
exports.edit = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const schools = await Exam.distinct("school");
  const subjects = await Exam.distinct("subject");
  const existing = await Exam.findById(id);
  res.render("./exam/new", {
    schools,
    subjects,
    existing,
  });
});

exports.list = catchAsync(async (req, res, next) => {
  console.log("Viewing exam paper (List)");
  const exams = await Exam.find();
  res.render("./exam/list", { exams });
});
exports.table = catchAsync(async (req, res, next) => {
  console.log("New exam paper");
  const exams = await Exam.find();
  res.render("./exam/table", { exams });
});
exports.delete = catchAsync(async (req, res, next) => {
  console.log("New exam paper");
});
