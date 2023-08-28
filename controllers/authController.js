const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.signup = async (req, res) => {
  console.log("Signing Up!");
  try {
    // const newUser = await User.create(req.body);
    // USE THE BELOW CODE INSTEAD SO THAT ONLY THE LISTED PARAMETERS AT THE BOTTOM ARE ACCEPTED. IF NOT, HACKERS CAN SET THEMSELVES AS ADMIN.
    const newUser = await User.create({
      username: req.body.username,
      DOB: req.body.DOB,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    // PAYLOAD -> SECRET -> OPTIONS (EXPIRY)
    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES,
    // });

    const token = signToken(newUser._id);

    console.log(newUser);
    newUser.password = undefined;
    res.redirect("/user/login");
  } catch (e) {
    if (e.code == 11000) {
      res.status(400).json({
        status: "Failed",
        message: "The email you have entered has already being taken.",
      });
    } else {
      res.status(400).json({
        status: "Failed",
        message: { e },
      });
    }
  }
};

exports.login = async (req, res) => {
  console.log("Log in");
  const { username, password } = req.body;
  try {
    // 1. CHECK IF USER AND PASSWORD EXIST
    if (!username || !password) {
      return res.status(400).json({
        status: 400,
        message: `Please enter a password or email.`,
      });
    }
    // 2. CHECK IF PASSWORD IS CORRECT
    //HAVE TO USE .SELECT HAS WE SET THE PASSWORD TO NOT SHOW UP IN THE MODELS, HENCE IT WILL NOT SHOW UP HERE TOO. SO WE HAVE TO EXPLICITLY SELECT IT.
    const user = await User.findOne({ username }).select("+password");
    const passwordAuthentication = await user.correctPassword(
      password,
      user.password
    );
    if (!user || passwordAuthentication == false) {
      return res.status(401).json({
        status: 401,
        message: `The username or the password has been entered incorrectly.`,
      });
    }
    // 3. IF EVERYTHING IS OK, SEND TOKEN TO CLIENT
    const token = signToken(user._id);
    res.cookie("JWT", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      // secure: true,
      httpOnly: true,
      domain: "/user/login",
      path: "/",
    }); // Milliseconds
    // res.render("pages/arithmetic", { username });
    res.redirect("/arithmetic");
  } catch (e) {
    // res.status(400).json({ message: "ERROR!" });
    res.redirect("/arithmetic");
  }
};

exports.logout = (req, res) => {
  const token = "";
  res.cookie("JWT", token, { maxAge: 1000, secure: true, httpOnly: true });
  res.redirect("/attempts");
};

exports.protect = async (req, res, next) => {
  console.log("Hello there!", req.header);
  next();
};

exports.authenticate = async (req, res, next) => {
  console.log("Authenticating");
  const accessToken = req.cookies["JWT"];
  console.log(accessToken);
  if (!accessToken) {
    console.log("No token");
    req.user = "";
    req.auth = {
      login: false,
    };
  }
  if (accessToken) {
    try {
      const validToken = jwt.verify(accessToken, process.env.JWT_SECRET);
      if (validToken) {
        const user = await User.findById(validToken.id);
        req.user = user;
        req.auth = {
          login: true,
        };
      }
    } catch (e) {
      console.log(e);
    }
  }
  next();
};
