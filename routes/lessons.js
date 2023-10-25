const express = require("express");
const router = express.Router();
const lessonController = require("../controllers/lessonController");

router.route("/").get(lessonController.getAllLessons);
router
  .route("/new")
  .get(lessonController.createNewLesson)
  .post(lessonController.postNewLesson);

router.route("/edit/:id").get(lessonController.createNewLesson);
module.exports = router;
