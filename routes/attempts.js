const express = require("express");
// const mongoose = require("mongoose");
// const Attempts = require("../models/attemptModel");
const attemptController = require("../controllers/attemptController");

// mongoose
//   .connect(DB)
//   .then((con) => {
//     console.log("Connection to Database established!");
//     // console.log(con.connections);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//ROUTER
const router = express.Router();

router
  .route("/")
  .get(attemptController.getAllAttempts)
  .post(attemptController.newAttempt);

module.exports = router;
