require("dotenv").config();
const nodemailer = require("nodemailer");

const notifyUser = (receiver_email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: process.env.service,
    auth: {
      user: process.env.sender_email,
      pass: process.env.sender_password
    }
  });

  const options = {
    from: process.env.sender_email,
    to: receiver_email,
    subject: subject,
    text: text
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      return err;
    }
    return response;
  });
};

module.exports = {
  notifyUser
};
