const express = require("express");
const router = express.Router();
const trialController = require("../controllers/trialController");

router.route("/new").post(trialController.new);
router.route("/signup").get(trialController.signup);

module.exports = router;
