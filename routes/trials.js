const express = require("express");
const router = express.Router();
const trialController = require("../controllers/trialController");

router.route("/").get(trialController.getAllTrials);
router.route("/new").post(trialController.new);

router.route("/signup").get(trialController.signup);
router.route("/another/:id").get(trialController.signup);

module.exports = router;
