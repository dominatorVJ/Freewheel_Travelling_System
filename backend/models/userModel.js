const mongoose = require("mongoose");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  resetToken: String,
});

userSchema.post("save", function (doc) {
  console.log("user saved");
});
userSchema.methods.createResetToken = function () {
  //creating unique token using crypto
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetToken = resetToken;
  this.save();
  return resetToken;
};
userSchema.methods.resetpasswordhandler = function (newpassword) {
  this.password = newpassword;
  this.resetToken = undefined;
};

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
