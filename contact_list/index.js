const path = require("path");
const express = require("express");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());//Parser

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


//A Contact Coming from home 
app.post('/create-contact',function(req,res){
  // contactList.push({
  //   name:req.body.name,
  //   phone:req.body.phone
  // })
  contactList.push(req.body);
  
  //  return res.redirect('/');
   return res.redirect('back');
})

app.listen(port, function (err) {
  if (err) {
    console.log("Error!", err);
  }

  console.log("Express Server is Running!", port);
});
