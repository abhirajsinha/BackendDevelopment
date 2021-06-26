const path = require("path");
const express = require("express");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactList = [
  {
    name: "Aman",
    phone: "1243454",
  },
  {
    name: "Abhi",
    phone: "11143454",
  },
  {
    name: "Rishav",
    phone: "333243454",
  },
];

app.get("/", function (req, res) {
  return res.render("home", { 
    title: "My Contacts List" ,
    contact_list: contactList
  });
  
});

app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "Play with EJs",
  });
});


app.post('/create-contact',function(req,res){
  return res.redirect('/practice');
})

app.listen(port, function (err) {
  if (err) {
    console.log("Error!", err);
  }

  console.log("Express Server is Running!", port);
});
