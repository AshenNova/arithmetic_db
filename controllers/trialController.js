const Trial = require("../models/trialModel");
const Lesson = require("../models/lessonModel");
const sendEmail = require("../utils/email");

exports.new = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let message;

  try {
    console.log(req.body);

    const trial = await Trial.create(req.body);
    // SEND MAIL
    const message = "You have a new trial.";

    await sendEmail({
      // to: "Kennerve14@gmail.com",
      subject: "A new trial",
      message,
    });
    if (!newUser) {
      return next(
        new AppError(
          "User was not created, some fields were incorrect/missing",
          401
        )
      );
    }
    res.render("trial/end", {
      username,
      authenticate,
      currentUser,
      trial,
      message,
    });
  } catch (error) {
    let errorMsgHandle = error.message.split(": ");
    errorMsgHandle.shift();
    errorMsgHandle.shift();
    errorMsgHandle = errorMsgHandle.join();
    errorMsgHandle = errorMsgHandle.split(",");
    let errorMsg = [];
    errorMsgHandle.forEach((item, index) => {
      if (index % 2 == 0 || index == 0) {
        errorMsg.push(item);
      }
    });
    console.log(errorMsg);
    const response = {
      status: "Failed",
      errorMsg,
    };
    res.send(response);
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
    const url = req.url;
    console.log(url);
    if (req.params.id && url.startsWith("/edit")) {
      if (!currentUser.admin) {
        return res.redirect("/user/login");
      }
      console.log("Editing");
      clone = await Trial.findById(req.params.id);
      clone.edit = 1;
    } else if (req.params.id) {
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
exports.save = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    console.log(req.body);
    const save = await Trial.findByIdAndUpdate(id, req.body);
    res.redirect("/trial");
  } catch (e) {
    res.status(401).json({
      message: `${e}, Failed to save.`,
    });
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
