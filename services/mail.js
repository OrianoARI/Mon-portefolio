const nodemailer = require('nodemailer');
require("dotenv").config();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Utiliser TLS
    auth: {
        user: 'oandreoli88@gmail.com',
        pass: process.env.PASS_MAIL
    }
});

module.exports = transporter;