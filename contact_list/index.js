const express = require("express");
const port=8000;

const app=express();

app.get('/',function(req,res){
    res.send('<h1>Cool !, It is Running</h1>');
})

app.listen(port,function(err){
    if(err){
        console.log('Error!',err);
    }

    console.log('Express Server is Running!',port);
});
//Commiting