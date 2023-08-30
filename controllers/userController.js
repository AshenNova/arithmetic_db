const User = require("../models/userModel");

let username;
let authenticate;
let currentUser;
// let fields = {
//   username,
//   authenticate,
// };

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().sort({ loggedIn: -1 });
    currentUser = req.user;
    authenticate = req.auth;

    if (!currentUser.admin || !authenticate) {
      res.redirect("user/login");
    }

    res.render("pages/all-user", {
      authenticate,
      username,
      allUsers,
      currentUser,
    });
  } catch (err) {
    console.log(err);
    res.redirect("user/login");
  }
};

exports.editUser = async (req, res) => {
  if (
    !authenticate ||
    (!currentUser.admin && currentUser.username != req.query.username)
  ) {
    res.redirect("/user/login");
  }
  console.log("Editing");
  // console.log(req.query);
  const editUser = await User.findOne({ username: req.query.username });
  currentUser = req.user;
  authenticate = req.auth;
  res.render("pages/edit-user", {
    authenticate,
    username,
    currentUser,
    editUser,
  });
};

exports.saveEditUser = async (req, res) => {
  console.log("Save edited user");
  console.log(currentUser.admin);
  console.log(req.body);
  try {
    const editUser = await User.findOne({ username: req.body.username });

    if (
      !currentUser.admin &&
      currentUser.username != req.body.username &&
      authenticate
    ) {
      res.status(403).json({ message: `You are not authorized to do this.` });
    }

    const update = await User.findByIdAndUpdate(editUser._id, req.body, {
      new: true,
    });
    console.log(`Update: ${update}`);
    console.log("Successfully updated.");
    res.redirect("/user");
  } catch (err) {
    console.log(err);
  }

  // res.redirect("/attempts");
};

exports.login = (req, res) => {
  console.log(req.auth);
  authenticate = req.auth;
  currentUser = req.user;
  res.render("pages/login", { username, authenticate, currentUser });
  // res.send("This is the login page.");
};

exports.signup = (req, res) => {
  authenticate = req.auth;
  currentUser = req.user;
  res.render("pages/signup", { username, authenticate, currentUser });
};
