const express = require("express");
const router = express.Router();
const trialController = require("../controllers/trialController");

router.route("/").get(trialController.getAllTrials);
router.route("/new").post(trialController.new);

router.route("/signup").get(trialController.signup);
router.route("/another/:id").get(trialController.signup);
router.route("/end").get(trialController.trialEnd);
router.route("/delete/:id").get(trialController.deleteTrial);

module.exports = router;
