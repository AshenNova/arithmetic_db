const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
// const attemptController = require("../controllers/attemptController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const scienceController = require("../controllers/scienceController");

router.route("/").get(scienceController.getAllQuestions);

router
  .route("/new")
  .get(scienceController.createQuestion)
  .post(upload.any(), scienceController.saveQuestion);

router.route("/topics").get(scienceController.getTopic);
router.route("/questions").post(scienceController.getQuestions);
router
  .route("/questions/extrapractice")
  .get(scienceController.extraPracticeQuestions);
router.route("/updateUserScience").post(scienceController.updateUserScience);

router.route("/questions/:id").get(scienceController.viewScience);
router.route("/questions/edit/:id").get(scienceController.editScience);
router.route("/questions/delete/:id").get(scienceController.deleteScience);
module.exports = router;
