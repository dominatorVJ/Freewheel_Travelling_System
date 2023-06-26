const nodemailer = require("nodemailer");
const { pass } = require("./key");
module.exports.sendMail = async function sendMail(str, data) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "admin@gmail.com", // generated ethereal user
      pass: pass, // generated ethereal password
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
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"TravelSathi" <admin@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: Osubject, // Subject line
    html: Ohtml, // html body
  });
};
