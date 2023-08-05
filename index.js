const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv/config");
// require("mongoose-type-email");

const app = express();
const port = process.env.PORT || 80;
app.set("view engine", "ejs");

// const DB = process.env.MONGOOSE_DATABASE.replace(
//   "<PASSWORD>",
//   process.env.MONGODB_PASSWORD
// );
const DB = process.env.MONGOOSE_DATABASE;
// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log(con.connections);
//     console.log("Connected to database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

mongoose
  .connect(DB)
  .then((con) => {
    console.log("Connection to Database established!");
    console.log(con.connections);
  })
  .catch((err) => {
    console.log(err);
  });

const attemptSchema = new mongoose.Schema({
  user: String,
  level: String,
  time: Number,
  mistake: Number,
  score: Number,
  setting: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const attempt = mongoose.model("attempt", attemptSchema);

const attemptNew = new attempt({
  user: "Kenneth",
  level: 1.07,
  time: 300,
  score: 10,
  setting: "nil",
});
// attemptNew
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => {
//     console.log(err);
//   });

const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "Please provide a username"] },
  email: {
    type: String,
    required: [true, "Please provide an email."],
  },
  admin: { type: Boolean, default: false },
  password: String,
  confirmPassword: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const user = mongoose.model("user", userSchema);

// const userNew = new user({
//   username: "Kenneth",
//   email: "test@example.com",
//   password: 12345678,
//   confirmPassword: 12345678,
// });

// userNew
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => console.log(err));

const arithemeticJavascript = "./javascript/script.js";
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(fs.readFileSync("index.html", "utf8"));
});

// app.use("/arithmetic", express.static("./javascript/script.js"));
app.get("/arithmetic", (req, res) => {
  // res.write(arithemeticJavascript.getMessage());
  // res.send(fs.readFileSync("arithmetic.html", "utf8"));
  // res.render(__dirname + "/arithmetic.html", function (req, res) {});
  res.render("./pages/arithmetic");
});

app.get("/login", (req, res) => {
  res.render("./pages/login");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});
