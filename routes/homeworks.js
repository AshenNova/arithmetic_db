const homeworkController = require("../controllers/homeworkController");
const express = require("express");
const router = express.Router();

router
  .route("/new")
  .get(homeworkController.getHomework)
  .post(homeworkController.createHomework);

router.route("/new/:id").get(homeworkController.getHomework);
router.route("/new/exam/:hw").get(homeworkController.getHomework);
router.route("/delete/:id/:user").get(homeworkController.deleteHomework);
router.route("/status/completed/:id").get(homeworkController.updateToCompleted);
router
  .route("/status/incomplete/:id")
  .get(homeworkController.updateToIncomplete);
module.exports = router;
