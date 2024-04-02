const interventionController = require("../controllers/interventionController");
const express = require("express");
const router = express.Router();

router.route("/").get(interventionController.all);
router.route("/create").get(interventionController.create);
router.route("/save").post(interventionController.save);
router.route("/delete").delete(interventionController.delete);

module.exports = router;
