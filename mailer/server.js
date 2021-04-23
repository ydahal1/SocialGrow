require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { notifyUser } = require("./notification");
console.log(notifyUser);

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());

app.post("/notify", (req, res) => {
  const { receiver_email, subject, text } = req.body;
  notifyUser(receiver_email, subject, text);
  res.send("Email sent");
});
app.listen(port);
console.log("App listening on port : " + port);
