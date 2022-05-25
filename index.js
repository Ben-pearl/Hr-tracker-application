const dbcon = require("../HR Tracker APP/controller/connection");
const mysql = require("mysql");
const express = require("express");
const app = express();


//database authentication
dbcon.authenticate().then(()=>{
    console.log("Connection Successful");
}).catch(err=>{
    console.log('Error occured',err);
});


//routes
const loginpage = require("../HR Tracker APP/routes/loginroutes");
app.use("/",loginpage);
app.use ('/login',loginpage);

//sequelize entry in database
// const user_hr = require('./models/usermodel');
// const candidate = require('./models/candidate_model');
// const company = require('./models/company_model');
//const jobs = require('./models/job_model');
//const panel = require('./models/panel_model');
//const todolist = require('./models/todolist_model');

//server route
app.listen(8081,function(){
    console.log("listening on 8081");
});


module.exports = app;