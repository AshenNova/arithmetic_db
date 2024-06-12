const express = require("express");
const router = express.Router();
const trialController = require("../controllers/trialController");
const authController = require("../controllers/authController");

router.route("/").get(trialController.getAllTrials);
router.route("/new").post(trialController.new);

router.route("/signup/options").get(trialController.options);
router.route("/signup/options/private").get(trialController.private);
router.route("/signup/options/centre").get(trialController.centre);
// router.route("/another/:id").get(trialController.signup);
router.route("/another/:id").get(trialController.centre);
router.route("/end").get(trialController.trialEnd);
router.route("/edit/:id").get(trialController.signup);
router.route("/save/:id").post(authController.adminCheck, trialController.save);
router
  .route("/delete/:id")
  .get(authController.adminCheck, trialController.deleteTrial);

router
  .route("/accepted/:id")
  .get(authController.adminCheck, trialController.accepted);
module.exports = router;
