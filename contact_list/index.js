const path = require("path");
const express = require("express");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  //   res.send("<h1>Cool !, It is Running</h1>");
  return res.render('home');
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error!", err);
  }

  console.log("Express Server is Running!", port);
});
