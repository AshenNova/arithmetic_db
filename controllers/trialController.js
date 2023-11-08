const Trial = require("../models/trialModel");
const Lesson = require("../models/lessonModel");

exports.new = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let message;

  try {
    // Object.keys(req.body).forEach((key) => {
    //   if (req.body[key] == "") delete req.query[key];
    // });
    console.log(req.body);

    const trial = await Trial.create(req.body);
    // res.status(200).json({ status: "Success" });
    res.render("trial/end", {
      username,
      authenticate,
      currentUser,
      trial,
      message,
    });
  } catch (error) {
    // const toapayoh = await Lesson.find({ outlet: "Toa Payoh" });
    // const hougang = await Lesson.find({ outlet: "Hougang" });
    // const private = await Lesson.find({ outlet: "Private" });
    // const clone = req.body;
    // message = "*Please enter all required fields";
    // console.log(error);
    // res.render("trial/signup", {
    //   username,
    //   authenticate,
    //   currentUser,
    //   clone,
    //   message,
    //   toapayoh,
    //   hougang,
    //   private,
    // });
    res.send("missing");
  }
};
exports.trialEnd = async (req, res) => {
  console.log("Trial End");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let trial;
  if (trial && !trial._id) {
    return res.redirect("/trial/signup");
  }
  let message;
  trial = await Trial.findOne().sort({ filledIn: -1 });
  res.render("trial/end", {
    username,
    authenticate,
    currentUser,
    trial,
    message,
  });
};

exports.signup = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let clone;
  let message;

  try {
    if (req.params.id) {
      console.log("ANOTHER!");
      clone = await Trial.findById(req.params.id);
      console.log(clone);
      clone.childName = "";
      clone.outlet = "";
      clone.timing = "";
      clone.subject = "";
      clone.DOB = "";
      clone.level = "";
      clone.gender = "";
      clone.school = "";
      clone.questionA = "";
      clone.questionB = "";
      clone.questionC = "";
      clone.questionD = "";
      clone.questionE = "";
      clone.questionF = "";
    }
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
      clone,
      message,
    });
  } catch (e) {
    res.status(404).json({ message: e });
  }
};

exports.getAllTrials = async (req, res) => {
  console.log("GETTING ALL THE TRIALS");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin) {
    return res.redirect("/user/login");
  }
  try {
    const getAllTrials = await Trial.find().sort({ filledIn: -1 });
    console.log(getAllTrials);
    res.render("trial/all", {
      username,
      authenticate,
      currentUser,
      getAllTrials,
    });
  } catch (e) {
    res.status(404).json({ message: e });
  }
};

exports.deleteTrial = async (req, res) => {
  await Trial.findByIdAndDelete(req.params.id);
  res.redirect("/trial");
};
