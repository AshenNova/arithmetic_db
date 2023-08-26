const express = require("express");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.route("/login").get(userController.login);
router.route("/signup").get(userController.signup);
// router.route("/signup").get(userController.signup);

module.exports = router;
