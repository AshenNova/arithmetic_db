const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

router.route("/").get(invoiceController.getAllInvoices);
router.route("/view/:id").get(invoiceController.view);
module.exports = router;
