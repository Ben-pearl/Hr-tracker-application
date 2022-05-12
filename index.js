const dbcon = require("../HR Tracker APP/controller/connection");
const dbuser = require("../HR Tracker APP/models/usermodel");
const mysql = require("mysql");
const express = require("express");
const app = express();



dbcon.authenticate().then(()=>{
    console.log("Connection Successful");
}).catch(err=>{
    console.log('Error occured',err);
});


//routes
const loginpage = require("../HR Tracker APP/routes/loginroutes");
app.use("/",loginpage);




//server route
app.listen(8081,function(){
    console.log("listening on 8081");
});

