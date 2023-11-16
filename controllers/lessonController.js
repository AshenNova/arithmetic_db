const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const Lesson = require("../models/lessonModel");

exports.getAllLessons = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin) {
    return res.redirect("/user/login");
  }
  const lessons = await Lesson.find().sort({ outlet: -1, day: 1, time: -1 });
  res.render("./lesson/all", { username, authenticate, currentUser, lessons });
};

exports.createNewLesson = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let lesson;
  if (!currentUser.admin) {
    return res.redirect("/user/login");
  }
  if (req.params.id) {
    lesson = await Lesson.findById(req.params.id);
    // return res.status(200).json({
    //   status: "Success",
    return res.render("./lesson/new", {
      username,
      authenticate,
      currentUser,
      lesson,
    });
  }
  res.render("./lesson/new", { username, authenticate, currentUser, lesson });
  //   res.status(200).json({
  //     status: "Success",
  //   });
};

exports.postNewLesson = async (req, res) => {
  // let username = req.user.username;
  // let authenticate = req.auth;
  let currentUser = req.user;
  try {
    if (!currentUser.admin) {
      return res.redirect("/user/login");
    }

    if (req.body.id) {
      const update = await Lesson.findByIdAndUpdate(req.body.id, req.body);
      console.log(update);
      return res.redirect("/lesson");
    } else {
      console.log(req.body);
      const lesson = await Lesson.create(req.body);
      return res.redirect("/lesson");
    }
  } catch (e) {
    res.status(404).json({ status: "Failed", message: e });
  }
};

exports.deleteLesson = async (req, res) => {
  // let username = req.user.username;
  // let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin) {
    return res.redirect("/user/login");
  }
  try {
    const deleteLesson = await Lesson.findByIdAndDelete(req.params.id);
    return res.redirect("/lesson");
  } catch (e) {
    res.status(404).json({ message: e });
  }
};
