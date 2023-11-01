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
    const getAllUsers = await User.distinct("username").sort();
    console.log(getAllUsers);
    console.log("Something");
    res.render("homework/new", {
      username,
      authenticate,
      currentUser,
      getAllUsers,
    });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.createHomework = async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.dateIssue == "") {
      req.body.dateIssue = new Date();
    }
    console.log("Something");
    const create = await Homework.create(req.body);
    console.log(create);
    res.send();
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
