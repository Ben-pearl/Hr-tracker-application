const express = require("express");
const app = express();
const session = require("express-session");
const path = require('path');
const conn = require("../controller/connection");
const user = require('../models/usermodel');


app.get('/',function(req,res){
    // res.sendFile(path.join(__dirname + '../index.html'));
   res.send('hi')
});


app.post('/', user.login);
exports.login = function(res,req){
    var message = '';
    var sess = req.session;

    if(req.method == 'POST'){
        var post = req.body;
        var hr_id = req.body.hr_id;
        var pass = req.body.hr_pass;

        var sql = "SELECT hr_id, hr_password FROM user_tables WHERE hr_id ='"+hr_id+" 'and pass =' "+hr_password+"'";
        conn.query(sql, function(err,results){
            if(results.length){
                req.sess.hr_id = results[0].hr_id;
                req.sess.pass = results[0].hr_pass;
                console.log(results[0].id);
                res.redirect('/dashboard');
            
            }
            else{
                message = 'Wrong credentials';
                res.render('',{message: message});
            }

        });
        
    }else{
        res.render('',{message: message});
    }
};






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

module.exports = {
    app,login
};