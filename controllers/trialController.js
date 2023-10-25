const Trial = require("../models/trialModel");
const Lesson = require("../models/lessonModel");

exports.new = async (req, res) => {
  try {
    // Object.keys(req.body).forEach((key) => {
    //   if (req.body[key] == "") delete req.query[key];
    // });
    console.log(req.body);
    const trial = await Trial.create(req.body);
    res.status(200).json({ status: "Success" });
  } catch (e) {
    res.status(401).json({ message: e });
  }
};

exports.signup = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  const toapayoh = await Lesson.find({ outlet: "Toa Payoh" });
  const hougang = await Lesson.find({ outlet: "Hougang" });
  const private = await Lesson.find({ outlet: "Private" });
  res.render("trial/signup", {
    username,
    authenticate,
    currentUser,
    toapayoh,
    hougang,
    private,
  });
};
