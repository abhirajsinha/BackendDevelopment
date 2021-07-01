const path = require("path");
const express = require("express");
const port = 8000;

//Acquiring database
const db=require('./config/mongoose')

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded()); //Parser
app.use(express.static("assets"));
//Middleware 1
// app.use(function(req,res,next){
//   req.Myname="Aman";
//   // console.log("MiddleWare 1 ");
//   next();//got to next middleware
// })

//Middleware 2
// app.use(function(req,res,next){
//   console.log("My Name from MW 1 ",req.Myname);
//   next();//got to next middleware
// })

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
  // console.log('From the Route Controller ',req.Myname);
  return res.render("home", {
    title: "My Contacts List",
    contact_list: contactList,
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "Play with EJs",
  });
});

//A Contact Coming from home
app.post("/create-contact", function (req, res) {
  contactList.push(req.body);
  return res.redirect("back");
});

// Through Query:
app.get('/delete-contact/', function(req, res){
  // console.log(req.query);

  /* Without using database: */

  // get the phone query from the url
  let phone = req.query.phone;
  let contactIndex = contactList.findIndex(contact => contact.phone == phone);
  if(contactIndex != -1){
      contactList.splice(contactIndex, 1);
  }
  return res.redirect('back');
})

app.listen(port, function (err) {
  if (err) {
    console.log("Error!", err);
  }

  console.log("Express Server is Running!", port);
});
