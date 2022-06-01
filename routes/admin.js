const express = require('express');
const app = express();

//routes

//login page
app.get('/login', (req, res) => {
    res.send('login');
});

//creating user
app.get('/createuser', (req, res) => {
    res.send('createuser');
})

module.exports = app;