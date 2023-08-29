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
