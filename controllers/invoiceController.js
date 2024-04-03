const schedule = require("node-schedule");
const { listIndexes } = require("../models/invoiceModel");
const Invoice = require("../models/invoiceModel");
const User = require("../models/userModel");
const { sendInvoice } = require("../utils/email");
// const PaynowQR = require("paynowqr");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateInvoice() {
  let QR;
  // schedule.scheduleJob("*/5 * * * * *", async function () {
  schedule.scheduleJob("0 0 1 * *", async function () {
    console.count("Run");
    let event = new Date();
    event.setDate(1);
    console.log(event);
    const index = event.getMonth();
    const month = months[index];
    console.log(`This month is ${month}`);
    let monday = [];
    let tuesday = [];
    let wednesday = [];
    let thursday = [];
    let friday = [];
    let saturday = [];
    let sunday = [];
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    while (event.getMonth() == index) {
      if (event.getDay() == 1) {
        monday.push(event.toLocaleDateString("en-GB"));
      } else if (event.getDay() == 2) {
        tuesday.push(event.toLocaleDateString("en-GB"));
      } else if (event.getDay() == 3) {
        wednesday.push(event.toLocaleDateString("en-GB"));
      } else if (event.getDay() == 4) {
        thursday.push(event.toLocaleDateString("en-GB"));
      } else if (event.getDay() == 5) {
        friday.push(event.toLocaleDateString("en-GB"));
      } else if (event.getDay() == 6) {
        saturday.push(event.toLocaleDateString("en-GB"));

        //SUNDAY IS 0
      } else if (event.getDay() == 0) {
        sunday.push(event.toLocaleDateString("en-GB"));
      }
      console.log(event);
      event.setDate(event.getDate() + 1);
    }

    const students = await User.find({ private: true });

    students.forEach(async (student) => {
      let studentDate = [];
      if (student.day.includes("Monday")) studentDate.push(monday);
      if (student.day.includes("Tuesday")) studentDate.push(tuesday);
      if (student.day.includes("Wednesday")) studentDate.push(wednesday);
      if (student.day.includes("Thursday")) studentDate.push(thursday);
      if (student.day.includes("Friday")) studentDate.push(friday);
      if (student.day.includes("Saturday")) studentDate.push(saturday);
      if (student.day.includes("Sunday")) studentDate.push(sunday);
      // console.log(studentDate.join(",").split(",").length);

      console.log(studentDate);
      // const newDateArr = Array.prototype.concat(...studentDate);
      // studentDate = studentDate.flat();
      // console.log(newDateArr);

      const newInvoice = new Invoice({
        student: student.username,
        subject: student.subject,
        day: student.day,
        date: studentDate,
        perSession: student.perSession,
        email: student.email,
        amount: student.perSession * studentDate.join(",").split(",").length,
      });
      await newInvoice
        .save()
        .then(async () => {
          await sendInvoice({
            email: student.email,
            // email: "kennerve14@gmail.com",
            subject: `Tuition Fees for ${student.username} [${month}] from Kenneth.`,
            message: `
          Hi, this is Kenneth.
          This is an auto generated message, please ignore if you have already sent in the fees.

          Student: ${student.username}
          Subject: ${student.subject}
          Day: ${student.day}
          Dates: ${studentDate.join(",").split(", ")}
          Fees: $${student.perSession} x ${
              studentDate.join(",").split(",").length
            } = $${newInvoice.amount}

          Please let me know when the amount has been sent!
          If you have any queries regarding the fees, do let me know!
          Thank you and have a great day!
          `,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    });
  });
}
generateInvoice();

exports.getAllInvoices = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  const invoices = await Invoice.find().sort({ dateSent: -1 });
  // console.log(invoices[1].date[0].toLocaleDateString("en-GB"));

  res.render("./invoice/all", {
    username,
    authenticate,
    currentUser,
    invoices,
  });
};

exports.view = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  const id = req.params.id;
  const invoice = await Invoice.findById(id);

  console.log(id);
  res.render("./invoice/view", {
    username,
    authenticate,
    currentUser,
    invoice,
  });
};

exports.edit = async (req, res) => {
  console.log("Editing invoice");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  const id = req.params.id;
  let invoice = await Invoice.findById(id);

  // invoice.date = invoice.date.join(",").split(",");

  // console.log(date);
  res.render("./invoice/edit", {
    username,
    authenticate,
    currentUser,
    invoice,
  });
};

exports.save = async (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  // const invoice = await Invoice.findById(id)

  req.body.date.forEach((item, index) => {
    if (!item) {
      req.body.date.splice(index, 1);
    } else {
      req.body.date[index] = item.split(",");
    }

    console.log(req.body);
  });
  const update = await Invoice.findByIdAndUpdate(id, req.body);
  res.redirect("/invoice");
};

exports.delete = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  try {
    const deleteInvoice = await Invoice.findByIdAndDelete(id);
    res.send("success");
  } catch (e) {
    console.log(e);
  }
  console.log("Deleting");
};
