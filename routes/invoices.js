const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

router.route("/").get(invoiceController.getAllInvoices);
router.route("/view/:id").get(invoiceController.view);
router.route("/edit/:id").get(invoiceController.edit);
router.route("/save/:id").post(invoiceController.save);
router.route("/delete/:id").delete(invoiceController.delete);
module.exports = router;
