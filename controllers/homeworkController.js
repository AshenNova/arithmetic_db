const Homework = require("../models/homeworkModel");
const Exam = require("../models/examModel");
const User = require("../models/userModel");

// try {
//     console.log("Something");
//   } catch (e) {
//     res.status(400).json({ message: e });
//   }
exports.updateToCompleted = async (req, res) => {
  console.log("Updating status to completed");
  console.log(req.body);
  try {
    const homework = await Homework.findById(req.params.id);
    if (!req.body.completeDate) req.body.completeDate = Date.now();
    if (req.body.completeDate != homework.completeDate) {
      const homework = await Homework.findByIdAndUpdate(req.params.id, {
        status: "Completed",
        completeDate: req.body.completeDate,
      });
    } else {
      const updateStatusHomework = await Homework.findByIdAndUpdate(
        req.params.id,
        {
          status: "Completed",
        }
      );
    }

    res.redirect(`/user/summary/?username=${homework.name}`);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.updateToIncomplete = async (req, res) => {
  try {
    const homework = await Homework.findByIdAndUpdate(req.params.id, {
      status: "Incomplete",
      completeDate: "",
    });
    res.redirect(`/user/summary/?username=${homework.name}`);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.getHomework = async (req, res) => {
  try {
    let username = req.user.username;
    let authenticate = req.auth;
    let currentUser = req.user;
    let editHomework = {};
    let exampaper = {};
    if (!currentUser.admin) {
      return res.redirect("/user/login");
    }
    const getAllUsers = await User.distinct("username").sort();
    console.log(getAllUsers);
    if (req.params.id) {
      console.log(req.params);
      editHomework = await Homework.findById(req.params.id);
      console.log(`The comment is ${editHomework.comment}`);
      // editHomework.comment.replace("p1", "</br>");
      // console.log(editHomework);
    }
    if (req.params.hw) {
      console.log(req.params);
      const exam = await Exam.findById(req.params.hw);
      console.log(exam);
      exampaper.id = exam._id;
      editHomework.subject = exam.subject;
      editHomework.description = `${exam.year}.${exam.level}.${exam.type}.${exam.school}`;
      editHomework.linkA = exam.link;
      editHomework.dateIssue = new Date();
    }

    res.render("homework/new", {
      username,
      authenticate,
      currentUser,
      getAllUsers,
      editHomework,
      exampaper,
    });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.createHomework = async (req, res) => {
  try {
    console.log(req.body);
    req.body.comment = req.body.comment.trim();
    if (req.body.id) {
      const update = await Homework.findByIdAndUpdate(req.body.id, req.body);
      console.log(update);
    } else {
      console.log(req.body);
      if (req.body.dateIssue == "") {
        req.body.dateIssue = new Date();
      }
      console.log("Something");
      const create = await Homework.create(req.body);
      console.log(create);
    }
    res.redirect(`/user/summary/?username=${req.body.name}`);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.deleteHomework = async (req, res) => {
  console.log(req.params);
  try {
    const deleteHomework = await Homework.findByIdAndDelete(req.params.id);
    res.redirect(`/user/summary/?username=${req.params.user}`);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
