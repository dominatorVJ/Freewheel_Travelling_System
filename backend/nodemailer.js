const nodemailer = require("nodemailer");


module.exports.sendMail = async function sendMail(str, data) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 547,
    secure: false,
    auth: {
      user: "kartik1vivo@gmail.com",
      pass: process.env.FORGOTPASSKEY,
    },
  });
  var Osubject, Ohtml;
  if (str == "otp") {
    Osubject = `Hello User`;
    Ohtml = `
    <h1>Welcome to TravelSathi,</h1>
    <br>
    Your OTP to verify email address is given below.
    <br>
    <h1>${data.Otp}</h1>`;
  } else {
    Osubject = "Reset Password";
    Ohtml = `
    <h1>Link to reset your password</h1>
    <br>
    ${data.resetpassword}`;
  }
  
  let info = await transporter.sendMail({
    from: '"TravelSathi" <admin@gmail.com>', 
    to: data.email, 
    subject: Osubject, 
    html: Ohtml, 
  });
};
