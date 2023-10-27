const User = require("../models/userModel");
const Attempt = require("../models/attemptModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  console.log("Signing Up!");
  console.log(req.body);
  const combineName = `${req.body.givenName} ${req.body.surname}`;
  // console.log(combineName);
  // try {
  // const newUser = await User.create(req.body);
  // USE THE BELOW CODE INSTEAD SO THAT ONLY THE LISTED PARAMETERS AT THE BOTTOM ARE ACCEPTED. IF NOT, HACKERS CAN SET THEMSELVES AS ADMIN.
  const newUser = await User.create({
    username: combineName,
    DOB: req.body.DOB,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  if (!newUser) {
    return next(
      new AppError(
        "User was not created, some fields were incorrect/missing",
        401
      )
    );
  }
  // PAYLOAD -> SECRET -> OPTIONS (EXPIRY)
  // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
  //   expiresIn: process.env.JWT_EXPIRES,
  // });

  const token = signToken(newUser._id);
  console.log({ newUser });
  newUser.password = undefined;
  res.redirect("/user/login");
  // } catch (e) {
  // if (e.code == 11000) {
  //   res.status(400).json({
  //     status: "Failed",
  //     message: "The email you have entered has already being taken.",
  //   });
  // } else {
  // res.status(400).json({
  //   status: "Failed",
  //   message: { e },
  // });
  // }
  // }
});

exports.login = catchAsync(async (req, res, next) => {
  // let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let message;
  console.log("Log in");
  const { username, password } = req.body;
  // try {
  // 1. CHECK IF USER AND PASSWORD EXIST
  console.log("USER AND PASSWORD EXIST CHECK!");
  if (!username || !password) {
    // return next(new AppError("Please enter a password or email", 401));
    message = "Please enter a password or email.";
    return res.render("pages/login", {
      username,
      authenticate,
      currentUser,
      message,
    });
  }
  console.log("Cleared! 1");
  // 2. CHECK IF PASSWORD IS CORRECT
  //HAVE TO USE .SELECT HAS WE SET THE PASSWORD TO NOT SHOW UP IN THE MODELS, HENCE IT WILL NOT SHOW UP HERE TOO. SO WE HAVE TO EXPLICITLY SELECT IT.
  console.log("SEARCHING FOR USER");
  const user = await User.findOne({ username }).select("+password");
  const passwordAuthentication = await user.correctPassword(
    password,
    user.password
  );
  console.log("Cleared! 2");
  console.log("CHECK IF EMAIL OR PASSWORD IS CORRECT!");
  if (!user || passwordAuthentication == false) {
    // return next(
    //   new AppError("The email or password entered is incorrect.", 401)
    // );
    message = "The email or password entered is incorrect.";
    return res.render("pages/login", {
      username,
      authenticate,
      currentUser,
      message,
    });
  }
  console.log("Cleared! 3");
  // 3. IF EVERYTHING IS OK, SEND TOKEN TO CLIENT

  // const cookieSetting = {
  //   maxAge: (1 * 24 * 60 * 60 * 1000) / 2,
  //   httpOnly: true,
  // };
  // const cookieSetting = {
  //   maxAge: 1000 / 2,
  //   httpOnly: true,
  // };
  if (process.env.NODE.ENV == "PRODUCTION") {
    cookieSetting.secure = true;
  }
  // }
  const token = signToken(user._id);
  res.cookie("JWT", token, {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  }); // Milliseconds
  const userString = user.username.split(" ");
  let userArr = [];
  userString.forEach((item) => {
    userArr.push(item.charAt(0).toUpperCase() + item.slice(1, item.length));
  });
  userArr = userArr.join(" ");
  const daysAgo = Math.floor(
    (new Date() - user.loggedIn) / (1000 * 60 * 60 * 24)
  );
  console.log(`Last logged in: ${daysAgo} days ago`);

  // CHECK FREEZE
  console.log(user);
  const updateUser = async (daysAgo, user) => {
    if (daysAgo > 1) {
      console.log("Checking after unfreezing");
      user.points -= (daysAgo - 1) * 10;
      if (user.points < 0) user.points = 0;
      const penalty = await User.findByIdAndUpdate(user._id, {
        points: user.points,
        loggedIn: new Date(),
      });
    }
  };
  if (user.freeze) {
    console.log("Check if frozen");
    console.log(new Date() > user.freezeEndDate);
    if (new Date() > user.freezeEndDate) {
      const changeFreeze = await User.findByIdAndUpdate(user._id, {
        freeze: false,
        freezeEndDate: "",
      });
      console.log("Unfrozen");
      // if (daysAgo > 1) {
      //   console.log("Checking after unfreezing");
      //   user.points -= (daysAgo - 1) * 10;
      //   if (user.points < 0) user.points = 0;
      //   const penalty = await User.findByIdAndUpdate(user._id, {
      //     points: user.points,
      //     loggedIn: new Date(),
      //   });
      // }
      updateUser(daysAgo, user);
    }
  } else {
    // if (daysAgo > 1) {
    //   console.log("Not Frozen");
    //   user.points -= (daysAgo - 1) * 10;
    //   if (user.points < 0) user.points = 0;
    //   const penalty = await User.findByIdAndUpdate(user._id, {
    //     points: user.points,
    //     loggedIn: new Date(),
    //   });
    // }
    updateUser(daysAgo, user);
  }

  const updateLogin = await User.updateOne(
    { username: user.username },
    { $set: { loggedIn: new Date() } }
  );

  // if (daysAgo > 1 && user.freeze == false) {
  //   console.log("Not Frozen");
  //   user.points -= (daysAgo - 1) * 10;
  //   if (user.points < 0) user.points = 0;
  //   const penalty = await User.findByIdAndUpdate(user._id, {
  //     points: user.points,
  //     loggedIn: new Date(),
  //   });
  // } else {
  //   const updateLogin = await User.updateOne(
  //     { username: user.username },
  //     { $set: { loggedIn: new Date() } }
  //   );
  // }
  // } else {
  // const updateLogin = await User.updateOne(
  //   { username: user.username },
  //   { $set: { loggedIn: new Date() } }
  // );
  // }

  if (user.admin) {
    res.redirect("/attempts");
  } else {
    res.redirect("/arithmetic");
  }
  // } catch (err) {
  //   // res.status(400).json({ message: err });
  //   return res.redirect("/user/login");
  //   // res.redirect("/arithmetic");
  // }
});

exports.logout = (req, res) => {
  const token = "";
  const cookieSetting = {
    maxAge: 0,
    httpOnly: true,
  };
  if (process.env.NODE_ENV == "PRODUCTION") cookieSetting.secure = true;
  res.cookie("JWT", token, { maxAge: 1000, httpOnly: true });
  return res.redirect("/user/login");
};

exports.protect = async (req, res, next) => {
  console.log("Hello there!", req.header);
  next();
};

exports.authenticate = catchAsync(async (req, res, next) => {
  console.log("Authenticating");
  const accessToken = req.cookies["JWT"];
  req.auth = {
    login: undefined,
  };

  // try {
  // if (process.env.NODE_ENV != "DEVELOPMENT") {
  if (accessToken) {
    // try {
    const validToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (validToken) {
      const user = await User.findById(validToken.id);
      req.user = user;
      req.auth = { login: true };
    } else {
      // res.message = "Please login before proceeding";
      // console.log(res.message);
      return res.redirect("/user/login");
    }
    // }
  }
  if (!accessToken) {
    console.log("No token");
    req.user = "";
    req.auth = { login: false };
    console.log(req.auth);
  }
  // }
  console.log("Done authenticating");
  next();
});

exports.loginCheck = catchAsync(async (req, res, next) => {
  console.log("Login Check");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  // let message;
  if (req.auth.login == false) {
    console.log("Bad login");
    // message = "Please login before proceeding";
    // return res.redirect("/user/login");
    let message;
    return res.render("pages/login", {
      username,
      authenticate,
      currentUser,
      message,
    });
  }
  next();
});

exports.adminCheck = catchAsync(async (req, res, next) => {
  console.log("Admin Check");
  if (req.user == "" || req.user.admin == false) {
    return res.redirect("/user/login");
  }
  next();
});
