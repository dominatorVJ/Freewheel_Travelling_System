const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
app.listen(port);
var cors = require("cors");
const mongoose = require("mongoose");
const {db_link} = require("./key")
mongoose
  .connect(
    db_link
  )
  .then(function (db) {
    console.log("db conncected");
  })
  .catch(function (err) {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Vishal!");
});

app.use("/user", require("./userRouter"));
app.use("/ticket", require("./ticketRouter"));
