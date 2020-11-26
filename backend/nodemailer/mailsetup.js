const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "test@taxastork.dk", // generated ethereal user
    pass: process.env.PASS, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// setup email data with unicode symbols
const mailOptions = (receiver, html) => {
  return {
    from: '"John Travolta" <test@taxastork.dk>', // sender address
    to: receiver, // list of receivers
    subject: "Mail from mandatory test", // subject line
    html: html
  };
};

module.exports = {
  transporter,
  mailOptions,
};
