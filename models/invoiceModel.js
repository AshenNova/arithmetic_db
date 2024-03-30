const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  student: String,
  subject: Array,
  day: Array,
  date: Array,
  daySent: {
    type: Date,
    default: Date.now,
  },
  perSession: Number,
  amount: Number,
  status: { type: String, default: "Incomplete" },
  balance: Number,
});

const Invoice = mongoose.model("invoices", invoiceSchema);

module.exports = Invoice;
