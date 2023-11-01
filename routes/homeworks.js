const homeworkController = require("../controllers/homeworkController");
const express = require("express");
const router = express.Router();

router
  .route("/new")
  .get(homeworkController.getHomework)
  .post(homeworkController.createHomework);

module.exports = router;
