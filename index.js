const mysql = require("mysql");
const express = require("express");
const app = express();

//routes
app.use(express.urlencoded({extended : false}))
//create new user
app.use('/createuser',require('./bussiness/admin/adminusercreate'));
//login route userlogin
app.use ('/login',require('./bussiness/userlogin'));

//dashboard routes

//todolist routes

//createcompany routes

//assign work routes

//tracker routes


//server route
app.listen(8081,function(){
    console.log("listening on 8081");
});


module.exports = app;