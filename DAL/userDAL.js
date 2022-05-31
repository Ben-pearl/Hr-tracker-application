const conn = require('../config/connection');
const users = require('./models/user');
const bcrypt = require('bcrypt');
// const hashedPassword = await bcrypt.hash(req.body.hr_password,10);
//sequelize entry in database
// const user_hr = require('../HR Tracker APP/DAL/user');

// const candidate = require('../HR Tracker APP/DAL/candidate');
// const company = require('../HR Tracker APP/DAL/company');
// const jobs = require('../HR Tracker APP/DAL/jobs');
// const panel = require('../HR Tracker APP/DAL/panel');


module.exports=conn;