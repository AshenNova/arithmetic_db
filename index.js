const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv/config");
const attemptRoute = require("./routes/attempts");
const userRoute = require("./routes/users");
// const attemptRoute = express.Router();

// require("mongoose-type-email");

const app = express();
const port = process.env.PORT || 80;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use("/attempts", attemptRoute);
// attemptRoute.route("/");
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
