const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 80;

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

const arithemeticJavascript = "./javascript/script.js";
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(fs.readFileSync("index.html", "utf8"));
});

// app.use("/arithmetic", express.static("./javascript/script.js"));
app.get("/arithmetic", (req, res) => {
  // res.write(arithemeticJavascript.getMessage());
  res.send(fs.readFileSync("arithmetic.html", "utf8"));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});
