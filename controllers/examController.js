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
  console.log("New exam paper");
  let existing;
  const schools = await Exam.distinct("school");
  const subjects = await Exam.distinct("subject");

  res.render("./exam/new", { schools, subjects, existing });
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
  // req.body.subject = req.body.subject1;
  // if (req.body.subject1 == "") {
  //   req.body.subject = req.body.subject2;
  // }
  if (req.body.id) {
    console.log("Saving");
    const editSave = await Exam.findByIdAndUpdate(req.body.id, exam);
  } else {
    let saveExam = new Exam(exam);
    saveExam = await saveExam.save();
  }

  res.redirect("/exam/list");
});
exports.edit = catchAsync(async (req, res, next) => {
  const id = req.params.id;
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
  const exams = await Exam.find().sort({ date: -1 });
  res.render("./exam/list", { exams });
});
exports.table = catchAsync(async (req, res, next) => {
  console.log("Table");
  const exams = await Exam.find().sort({ date: -1 });
  res.render("./exam/table", { exams });
});
exports.delete = catchAsync(async (req, res, next) => {
  console.log("Deleting");
});
