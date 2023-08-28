let username;
let authenticate;
let currentUser;
// let fields = {
//   username,
//   authenticate,
// };
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
