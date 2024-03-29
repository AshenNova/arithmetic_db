const express = require("express");
const multer = require("multer");
const upload = multer();
// const mongoose = require("mongoose");
// const Attempts = require("../models/attemptModel");
const attemptController = require("../controllers/attemptController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const examController = require("../controllers/examController");
//ROUTER
const router = express.Router();

router.route("/new").get(examController.new).post(examController.save);
router.route("/new/:driveid").get(examController.new);

router.route("/edit/:id").get(examController.edit);
router.route("/queryupdate/:driveid").get(examController.queryupdate);
router.route("/view/:id").get(examController.view);
router.route("/clone/:id").get(examController.new);
router.route("/list").get(examController.list);
router.route("/upload").get(examController.upload);
router.route("/upload/save").post(upload.any(), examController.uploadSave);
router.route("/table").get(examController.table);
router.route("/delete/:id").get(examController.delete);

module.exports = router;
