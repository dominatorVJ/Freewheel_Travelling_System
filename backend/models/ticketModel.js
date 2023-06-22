const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  Ondate: {
    type: Date,
    default: Date.now,
  },
  User: {
    type: String,
    required: true,
  },
});

ticketSchema.post("save", function (doc) {
  console.log("ticket saved");
});

const ticketModel = mongoose.model("ticketModel", ticketSchema);
module.exports = ticketModel;
