const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("./models/userModel");
const { sendMail } = require("./nodemailer");
const fetchuser = require("./fetchuser");
const Router = express.Router();
Router.post(
  "/signup",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Details unjustified" });
    }
    try {
      // Check whether the user with this email exists already
      let user = await userModel.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({
            success: false,
            message: "This email is already registered.",
          });
      }
      obj = req.body;
      const salt = await bcrypt.genSalt(10);
      pass = await bcrypt.hash(obj.password, salt);
      obj.password = pass;
      user = new userModel(obj);
      user
        .save()
        .then((user) => res.send({ user, success: true }))
        .catch((err) => {
          console.log(err);
          res.send({ success: false, message: err.message });
        });
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .send({ success: false, message: "Internal Server Error" });
    }
  }
);
Router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Details unjustified" });
    }
    const { email, password } = req.body;
    try {
      let user = await userModel.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, message: "Invalid credentials." });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, message: "Invalid credentials." });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, process.env.JWT_KEY);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .send((success = false), (message = "Internal Server Error"));
    }
  }
);
Router.post("/sendotp", async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "This email is already registered." });
    }
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number

    const Otp = Math.floor(Math.random() * (max - min + 1)) + min;
    req.body.Otp = Otp;
    sendMail("otp", req.body);
    let success = true;
    res.json({ success, Otp });
  } catch {
    res.json({ success: false, message: "Internal server error" });
  }
});

Router.post("/forgotpassword", async (req, res) => {
  let mail = req.body.email;
  try {
    let user = await userModel.findOne({ email: mail });
    const resetToken = user.createResetToken();
    let resetpassword = `${req.protocol}://localhost:3000/resetpassword/${resetToken}`;
    let Obj = {
      resetpassword: resetpassword,
      email: mail,
    };
    sendMail("resetPassword", Obj);
    res.json({ success: true });
  } catch {
    res.json({
      success: false,
      message: "User not identified.",
    });
  }
});

Router.post("/resetpassword", async (req, res) => {
  const token = req.body.resetToken;
  let newpassword = req.body.password;
  try {
    const user = await userModel.findOne({ resetToken: token });
    if (user) {
      const salt = await bcrypt.genSalt(10);
      pass = await bcrypt.hash(newpassword, salt);
      newpassword = pass;
      user.resetpasswordhandler(newpassword);
      await user.save();
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: "User not found." });
    }
  } catch (error) {
    res.json({ success: false, message: "Internal server error." });
  }
});

module.exports = Router;
