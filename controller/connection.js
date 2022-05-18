const express = require('express');

const sequelize = require("sequelize");
const dbsequelize = new sequelize("userinfo","root","",{
    host:"localhost",
    dialect:"mysql"
});





module.exports = dbsequelize;