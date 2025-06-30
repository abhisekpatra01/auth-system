const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `http://localhost:3000/verify-email?token=${token}`;
  
  await transporter.sendMail({
    to: email,
    subject: "Verify Your Email",
    html: `Click <a href="${verificationLink}">here</a> to verify your email.`,
  });
};

module.exports = { sendVerificationEmail };