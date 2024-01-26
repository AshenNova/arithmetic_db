const express = require("express");
// const mongoose = require("mongoose");
// const Attempts = require("../models/attemptModel");
const attemptController = require("../controllers/attemptController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

//ROUTER
const router = express.Router();

router
  .route("/")
  .get(attemptController.getAllAttempts)
  .post(
    userController.generateRecommendMiddleware,
    attemptController.newAttempt
  );

router.route("/previousAttempts").post(attemptController.previousAttempts);

router
  .route("/edit/:id")
  .get(authController.adminCheck, attemptController.getAttempt);
router
  .route("/edit/:id")
  .post(authController.adminCheck, attemptController.saveAttempt);
router
  .route("/delete/:id")
  .get(authController.adminCheck, attemptController.deleteAttempt);
router.route("/filter").get(attemptController.getFilteredAttempts);
router.route("/highscore").get(attemptController.getHighscore);
router.route("/monthly-highscore").get(attemptController.monthlyHighscore);

module.exports = router;
