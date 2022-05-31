const express = require('express');
const app = express();  

app.get('/', isLoggedIn, (req, res) => {
    req.session.destroy();
    req.flash('success', 'Login Again Here');
    res.redirect('/login');
    });

module.exports = app;