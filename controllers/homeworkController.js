const Homework = require("../models/homeworkModel");
const User = require("../models/userModel");

// try {
//     console.log("Something");
//   } catch (e) {
//     res.status(400).json({ message: e });
//   }

exports.getHomework = async (req, res) => {
  try {
    let username = req.user.username;
    let authenticate = req.auth;
    let currentUser = req.user;
    let editHomework;
    const getAllUsers = await User.distinct("username").sort();
    console.log(getAllUsers);
    console.log("Something");
    if (req.params.id) {
      console.log(req.params);
      editHomework = await Homework.findById(req.params.id);
      // editHomework.comment = editHomework.comment.trim();
      console.log(editHomework);
    }
    res.render("homework/new", {
      username,
      authenticate,
      currentUser,
      getAllUsers,
      editHomework,
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
