const express = require('express');

const sequelize = require("sequelize");
const dbsequelize = new sequelize("tracker_db","root","",{
    host:"localhost",
    dialect:"mysql"
});





module.exports = dbsequelize;