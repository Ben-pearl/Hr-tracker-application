const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');

const sequelize = require("sequelize");
const dbsequelize = new sequelize("tracker_db","root","",{
    host:"localhost",
    dialect:"mysql"
});

dbsequelize.authenticate().then(()=>{
    console.log("Connection Successful");
}).catch(err=>{
    console.log('Error occured',err);
});



app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'static')));




module.exports = dbsequelize,app;