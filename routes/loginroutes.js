const express = require("express");
const app = express();
const session = require("express-session");
const { request } = require("http");
const path = require('path');
const conn = require("../controller/connection");
const user = require('../models/usermodel');


app.get('/',function(req,res){
    // res.sendFile(path.join(__dirname + '../index.html'));
   res.send('hi')
});


// app.post('/user/all', function(req, res){
//     Controller.Create
//   });
  

app.post('/login',function login(res, req) {
// app.post('/login', user.login);
var hr_id = req.body.hr_id;
        var hr_password = req.body.hr_password;
    if (hr_id && hr_password) {
        var sql = "SELECT hr_id, hr_password FROM user_tables WHERE hr_id ='" + hr_id + " 'and pass =' " + hr_password + "'";
        conn.query(sql, function (err, results) {
            if(err) throw err;
            if (results.length>0) {
              req.session.loggedin = true;
              req.session.hr_id = hr_id;
              res.redirect('/dashboard');

            }
            else {
                message = 'Wrong credentials';
                res.render('', { message: message });
            }
            res.end();

        });

    } else {
        res.render('', { message: message });
    }
});






// app.post('/login',function(req,res){
//     let hr_id = req.body.hr_id;
//     let hr_password = req.body.hr_password;
//     if(hr_id && hr_password){
//         conn.query('SELECT * FROM accounts WHERE hr_id = ? AND hr_password = ?', [hr_id, hr_password], 
//         function(error, results, fields) {
//             if (error) throw error;
//             if(results.length > 0){
//                 req.session.loggedin = true;
//                 req.session.hr_id = hr_id;
//                 res.redirect("/dashboard");

//             }else{
//                 res.send('Incorrect Id and Password');
//             }
//             res.end();
//         });
//     }else{
//         res.send("Please enter the Id and Password.!");
//         res.end();

//     }
// });


app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'static')));

module.exports = app;
