const express = require("express");
const multer = require("multer");
const upload = multer();
const graduationController = require("../controllers/graduationController");
const authController = require("../controllers/authController");

//ROUTER
const router = express.Router();
router
  .route("/upload")
  .get(authController.adminCheck, graduationController.upload)
  .post(
    authController.adminCheck,
    upload.any(),
    graduationController.uploadNew
  );

module.exports = router;
