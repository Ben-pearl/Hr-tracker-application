const express = require("express");
const app = express();
const session = require("express-session");
const { request } = require("http");
const conn = require("../DAL/userDAL");
const LocalStrategy = require('passport-local).Strategy;');
const bcrypt = require('bcrypt');
const passport = require("passport");


app.get('/',function(req,res) { 
   res.send('hi')
});

app.post('/auth',(req, res,next)=>{
    passport.authenticate('local',{
        successRedirect:'/dashboard',
        failureRedirect:'/auth',
        failureFlash:true
    })(req, res, next)
})

//passport authenticate
module.exports = function(passport) {
    passport.use(
        new LocalStrategy({idField: 'hr_id'}, (hr_id,hr_password,done) => {
            conn.findOne({hr_id:hr_id}).then(user => {{
                if(!user){
                    return done(null, false, {message: 'Invalid Id'})
                }
                bcrypt.compare(hr_password,conn.hr_password,(err, isMatch)=>{
                    if(err)throw err;

                    if(isMatch){
                        return done(null, user)
                    }else{
                        return done(null, false, {message: 'password incorrect'})
                    }
                });
            }})
            .catch(err => console.log(err))
        })
    );
}
 
//admin login
// app.post('/auth',async function (req, res) {
//     var hr_id = req.body.hr_id;
//     var hr_password = req.body.hr_password;
//     let errors = [];

// //check fields
// if(!hr_id || !hr_password){
//     errors.push({msg: 'please fill the fields to login'})
// }

//     const conn = require("../DAL/userDAL");
//     conn.query("SELECT * FROM user_tables WHERE hr_id = '?' AND hr_password = '?'",
//     async function (err,result,fields) {
//         if(err){
//             res.send(err);

//         }else{
//             if(result.length >0){
//                 const comparision = await bcrypt.compare(hr_password, result[0].hr_password);
//                 if(comparision){
//                     res.send('login success');
//                     res.redirect('/dashboard');
//                 }
//                 else{
//                     res.send('login failure. Check your credentials');
//                     res.redirect('/auth');
//                 }
//             }
//             else{
//             res.send('invalid email');
//             res.redirect('/auth');
//         }
//         }

//     })

   
// });

app.get('/dashboard', function(req, res) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		res.send('Welcome back, ' + req.session.hr_name + '!');
	} else {
		// Not logged in
		res.send('Please login to view this page!');
	}
	res.end();
});



module.exports = app;