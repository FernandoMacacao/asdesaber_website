const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5d82533a071744",
    pass: "245c6aaa58df7e",
  },
});

// define route to handle email sending
app.post("/send-email", (req, res) => {
  const { from, subject, body } = req.body;

  const mailOptions = {
    from,
    to: process.env.USER_EMAIL,
    subject,
    body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

// start server
app.listen(3001, () => console.log("Server running on port 3001"));
