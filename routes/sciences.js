const express = require("express");
const router = express.Router();
// const attemptController = require("../controllers/attemptController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const scienceController = require("../controllers/scienceController");

router.route("/").get(scienceController.getAllQuestions);

router
  .route("/new")
  .get(scienceController.createQuestion)
  .post(scienceController.saveQuestion);

router.route("/topics").get(scienceController.getTopic);

router.route("/questions").post(scienceController.getQuestions);
module.exports = router;
