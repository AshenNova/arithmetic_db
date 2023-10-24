const express = require("express");
const multer = require("multer");
const upload = multer();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

// router.post("/signup", authController.signup);
// router.post("/login", authController.login);
router.route("/").get(authController.authenticate, userController.getAllUsers);
router.route("/edit").get(authController.authenticate, userController.editUser);

router.route("/points").get(userController.getAllPoints);
router
  .route("/points/rewards")
  .get(authController.loginCheck, userController.getAllRewards);
router
  .route("/points/rewards/new")
  .get(authController.adminCheck, userController.newReward);
router
  .route("/points/rewards/new")
  .post(upload.any(), authController.adminCheck, userController.postNewReward);
// router.route("/points/rewards/new").post(userController.postNewReward);
router
  .route("/points/rewards/claim")
  .post(authController.loginCheck, userController.claimReward);
router
  .route("/points/rewards/edit/:id")
  .get(authController.adminCheck, userController.editReward);
// router
//   .route("/points/rewards/edit/:id")
//   .post(authController.adminCheck, userController.saveReward);
router
  .route("/points/rewards/save")
  .post(upload.any(), authController.adminCheck, userController.saveReward);

router
  .route("/points/rewards/delete/:id")
  .get(authController.adminCheck, userController.deleteReward);
router
  .route("/edit/:id")
  .get(authController.adminCheck, userController.editSingleUser);
router
  .route("/edit/save")
  .post(authController.adminCheck, userController.saveEditUser);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

router.route("/login").get(userController.login);
router.route("/signup").get(userController.signup);
router
  .route("/delete/:id")
  .get(authController.adminCheck, userController.deleteUser);
router
  .route("/rewardLog/delete/:id")
  .get(authController.adminCheck, userController.deleteRewardLog);

router.route("/recommend").get(
  // authController.authenticate,
  authController.loginCheck,
  userController.recommend
);
// router.route("/trial").post(userController.trial);

module.exports = router;
