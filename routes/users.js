const express = require("express");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

// router.post("/signup", authController.signup);
// router.post("/login", authController.login);
router.route("/").get(authController.authenticate, userController.getAllUsers);
router.route("/edit").get(authController.authenticate, userController.editUser);

router
  .route("/points")
  .get(authController.authenticate, userController.getAllPoints);

router
  .route("/edit/:id")
  .get(authController.authenticate, userController.editSingleUser);
router
  .route("/edit/save")
  .post(authController.authenticate, userController.saveEditUser);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

router.route("/login").get(userController.login);
router.route("/signup").get(userController.signup);

module.exports = router;
