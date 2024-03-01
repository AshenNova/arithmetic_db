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

const fs = require("fs");
const multer = require("multer");
const upload = multer();
const stream = require("stream");
const path = require("path");
const { google } = require("googleapis");

exports.new = catchAsync(async (req, res, next) => {
  console.log(req.params);
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

  if (req.params.driveid) {
    existing.link = `https://drive.google.com/file/d/${req.params.driveid}/view?usp=sharing`;
  }
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
  if (!currentUser.admin) {
    return res.redirect("/exam/table");
  }
  const exam = req.body;
  console.log(req.body);
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

exports.upload = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let message = req.message;
  if (!currentUser.admin) {
    return res.redirect("/exam/table");
  }
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
  res.render("./exam/upload", { unique, message });
};

exports.queryupdate = async (req, res) => {
  let currentUser = req.user;
  if (!currentUser.admin) {
    return res.redirect("/exam/table");
  }
  console.log(req.body);
  let driveid = req.params.driveid;
  let params = req.query;
  let message;
  console.log(driveid, params);
  for (const [key, value] of Object.entries(params)) {
    if (value == "") delete params[key];
  }

  if (params.length == 0) {
    return res.send();
  }
  const exam = await Exam.find(params);
  console.log(exam);

  if (exam.length < 1) {
  }
  if (exam[0] && exam.length == 1) {
    exam.link = `https://drive.google.com/file/d/${driveid}/view?usp=sharing`;
    Exam.findByIdAndUpdate(exam._id);
    res.redirect("/exam/upload");
  } else {
    if (exam.length > 1) {
      req.message = `More than 1 exam paper has been found. Please narrow down your filter.`;
    }
    exports.upload(req, res);
  }
};

const GOOGLE_API_FOLDER_ID = process.env.GOOGLE_API_EXAM_FOLDER_ID;
// console.log(`Environment: ${process.env.NODE_ENV}`);

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

exports.uploadSave = async (req, res) => {
  // try {
  console.log(`Request: ${req}`);

  // try {
  const { files } = req;
  console.log(files);
  let data = {};
  const imageID = await uploadFile(files[0]);
  data.driveid = imageID;
  console.log(imageID);
  res.send(data);
};

exports.view = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const exam = await Exam.findById(id);
  res.render("./exam/view", { exam });
});

exports.edit = catchAsync(async (req, res, next) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin) {
    return res.redirect("/exam/table");
  }
  console.log("Editing paper");

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
  if (!currentUser.admin) {
    return res.redirect("/exam/table");
  }
  console.log("Deleting");
});
