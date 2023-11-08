const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1) CREATE TRANSPORTER

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },

    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // auth: {
    //   user: process.env.EMAIL_USERNAME,
    //   pass: process.env.EMAIL_PASSWORD,
    // },

    // ACTIVATE IN GMAIL "LESS SECURE APP" OPTION
  });
  // 2) DEFINE EMAIL OPTIONS
  const mailOptions = {
    from: "Arithmetic",
    to: "kennerve14@gmail.com",
    subject: options.subject,
    text: options.message,
  };

  // 3) ACTUALLY SEND THE EMAIL

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
