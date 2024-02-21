const express = require("express");
// const mongoose = require("mongoose");
// const Attempts = require("../models/attemptModel");
const attemptController = require("../controllers/attemptController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const examController = require("../controllers/examController");
//ROUTER
const router = express.Router();

router.route("/new").get(examController.new).post(examController.save);
router.route("/edit/:id").get(examController.edit);
router.route("/view/:id").get(examController.view);
router.route("/clone/:id").get(examController.new);
router.route("/list").get(examController.list);
router.route("/upload").get(examController.upload);
router.route("/table").get(examController.table);
router.route("/delete/:id").get(examController.delete);

module.exports = router;
