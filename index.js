const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv/config");
const attemptRoute = require("./routes/attempts");
const userRoute = require("./routes/users");
const scienceRoute = require("./routes/sciences");
const trialRoute = require("./routes/trials");
const lessonRoute = require("./routes/lessons");
const homeworkRoute = require("./routes/homeworks");
const examRoute = require("./routes/exams");
const invoiceRoute = require("./routes/invoices");
const interventionRoute = require("./routes/interventions");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");
const authController = require("./controllers/authController");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

let username;
let currentUser;
// let authenticate = {};

//HAVE TO PLACE THIS AT THE TOP AS WE WANT TO START LISTENING FROM THE START
//eg CONSOLE.LOG(X -> Logging a variable that has not been defined)
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTIONS! 🔥 SHUTTING DOWN....");
  //IN UNCAUGHT EXCEPTION; WE WANT TO CRASH EXPRESS IMMEDIATELY AS IT WOULD BE IN AN 'UNCLEAN' STATE.
  // server.close(() => {
  process.exit(1);
  // });
});

const app = express();
app.set("view engine", "ejs");
app.use(
  cors({
    credentials: true,
    origin: "https://www.epicmindarithmetic",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Limits the number of connection
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 1hours
  message:
    "Too many requests has been made from this IP, please try again in an hour!",
});
app.use("/user/login", limiter);
// JAVASCRIPT
const arithemeticJavascript = "./javascript/script.js";
app.use("/", express.static(path.join(__dirname, "public")));

//DATABASE
const DB = process.env.MONGOOSE_DATABASE;

mongoose
  .connect(DB)
  .then((con) => {
    console.log("Connection to Database established!");
    // console.log(con.connections);
  })
  .catch((err) => {
    server.close(() => {
      console.log(err);
      process.exit(1);
    });
  });

//ROUTERS
//

app.get("/", (req, res) => {
  res.send(fs.readFileSync("index.html", "utf8"));
});

app.get("/online", authController.authenticate, (req, res) => {
  let authenticate = req.auth;
  currentUser = req.user;
  username = req.user.username;
  res.render("./pages/online", {
    username,
    authenticate,
    currentUser,
  });
});

// app.use("/arithmetic", express.static("./javascript/script.js"));
app.get("/arithmetic", authController.authenticate, (req, res) => {
  let authenticate = req.auth;
  console.log(req.auth);
  if (authenticate.login == false) {
    return res.redirect("user/login");
  }

  currentUser = req.user;
  username = req.user.username;
  console.log(authenticate);
  res.render("./pages/arithmetic", {
    username,
    authenticate,
    currentUser,
  });
});

app.use("/lesson", authController.authenticate, lessonRoute);
app.use("/exam", authController.authenticate, examRoute);
app.use("/trial", authController.authenticate, trialRoute);
app.use("/homework", authController.authenticate, homeworkRoute);
app.use("/attempts", authController.authenticate, attemptRoute);
app.use("/user", authController.authenticate, userRoute);
app.use("/science", authController.authenticate, scienceRoute);
app.use(
  "/invoice",
  authController.authenticate,
  authController.adminCheck,
  invoiceRoute
);
app.use("/intervention", authController.authenticate, interventionRoute);
app.get("*", function (req, res, next) {
  // res.redirect("./pages/arithmetic");
  // const err = new Error(`Can't find${req.originalUrl} on this server!`);
  // err.status = "Fail";
  // err.statusCode = "404";

  // if the next function receives an arguement within, express will assume that there is an error. next(error)
  // and skip every other middleware to the error handling middleware.
  // next(err);

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`We are listening!`);
});

//WHENEVER THERE IS A PROMISE IS REJECT, AN 'EVENT' WITH THE NAME 'UNHANDLED REJECTION' IS CREATED; HENCE WE CAN LISTEN FOR IT.
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! 🔥 SHUTTING DOWN....");
  //WE DO NOT JUST WANT TO SHUT DOWN ABRUPTLY;
  //WE WANT TO DO IT GRACEFULLY;
  //HENCE WE SHALL SHUTDOWN THE SERVER FIRST WITH '.CLOSE'; LETS THE SERVER FINISH ALL PROCESSES FIRST.
  //THEN ENTIRE PROCESS SHUTS DOWN
  server.close(() => {
    process.exit(1);
  });
});
