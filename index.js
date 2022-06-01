const mysql = require("mysql");
const express = require("express");
const app = express();

//routes
app.use(express.urlencoded({extended : false}))

app.use ('/login',require('./routes/admin'));

app.use('/createuser',require('./bussiness/adminusercreate'));

//server route
app.listen(8081,function(){
    console.log("listening on 8081");
});


module.exports = app;