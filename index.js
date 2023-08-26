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

let username;

const app = express();
// const port = process.env.PORT || 3000;
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
//

app.get("/", (req, res) => {
  res.send(fs.readFileSync("index.html", "utf8"));
});
// app.use("/arithmetic", express.static("./javascript/script.js"));
app.get("/arithmetic", (req, res) => {
  console.log(req.headers);

  res.render("./pages/arithmetic", { username });
});
app.use("/attempts", attemptRoute);

// app.get("/login", (req, res) => {
//   res.render("./pages/login");
// });

app.use("/user", userRoute);

// app.get("*", function (req, res) {
//   res.redirect("./pages/arithmetic");
// });
app.listen(process.env.PORT || 3000, () => {
  console.log(`We are listening!`);
});
