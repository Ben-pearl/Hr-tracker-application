import { conn } from '../HR Tracker APP/controller/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
const secret = 'asbadbbdbbh7788888887hb113h3hbb';
const session = require('express-session');

function login(res,req){
const sql = "SELECT * FROM user_hrs WHERE hr_id = '"+ res.body.hr_id+"'";
console.log('sql:',sql);
const query = conn.query(sql, async(err,results)=>{
    if(err) throw err;
    console.log('result:',results);
    if(results.lenght > 0){
        req.session.loggedin = true
        res.redirect('/login/success');
    }
   
    else{
        res.send(JSON.stringify({"status":404,"error":'incorrect password',"token":null}));
        return;
    }
    
    const valid = await bcrypt.compare(req.body.hr_password, results[0].hr_password);
    const token = jwt.sign({
        user:_.pick(results[0],[hr_id,hr_password]),
    },
    secret,{
        expiresIn:'5m',
    });
    res.send(JSON.stringify({"status":200,"error":null,"token":token}));
});

}

module.exports={
    login
}