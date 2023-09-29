const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv/config");
const attemptRoute = require("./routes/attempts");
const userRoute = require("./routes/users");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");
const authController = require("./controllers/authController");
const cors = require("cors");

let username;
let currentUser;
// let authenticate;

const app = express();
// const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
// app.set("trust proxy", 1);
app.use(
  cors({
    credentials: true,
    origin: "https://www.epicmindarithmetic",
    //     // exposedHeaders: ["set-cookie"],
  })
);

// app.use(cors({ credentials: "include" }));

// app.use(cors());
// app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

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
    console.log(err);
  });

//ROUTERS
//

app.get("/", (req, res) => {
  res.send(fs.readFileSync("index.html", "utf8"));
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

app.use("/attempts", authController.authenticate, attemptRoute);
app.use("/user", authController.authenticate, userRoute);
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
app.listen(process.env.PORT || 3000, () => {
  console.log(`We are listening!`);
});
