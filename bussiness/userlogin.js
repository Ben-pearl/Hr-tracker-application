const express = require("express");
const app = express();
const session = require("express-session");
const { request } = require("http");
const path = require('path');
const { resourceLimits } = require("worker_threads");
const conn = require("../DAL/userDAL");

app.get('/',function(req,res) { 
   res.send('hi')
});

  
//admin login
app.post('/auth',async function (req, res) {
    var hr_id = req.body.hr_id;
    var hr_password = req.body.hr_password;

    conn.query('SELECT * FROM user_tables WHERE hr_id = ?  AND hr_password = ?',[hr_id,hr_password],
    async function (err,result,fields) {
        if(err){
            res.send(err);

        }else{
            if(result.length >0){
                const comparision = await bcrypt.compare(hr_password, result[0].hr_password);
                if(comparision){
                    res.send('login success');
                    res.redirect('/dashboard');
                }
                else{
                    res.send('login failure. Check your credentials');
                    res.redirect('/auth');
                }
            }
            else{
            res.send('invalid email');
            res.redirect('/auth');
        }
        }

    })

   
});

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