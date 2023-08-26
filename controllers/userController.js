exports.login = (req, res) => {
  let username = "";
  res.render("pages/login", { username });
  // res.send("This is the login page.");
};

exports.signup = (req, res) => {
  res.render("pages/signup", { username });
  // res.send("This is the signup page.");
};
