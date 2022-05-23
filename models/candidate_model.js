const db = require("../controller/connection");
const sequelize = require("sequelize");
const candidate = db.define('candidate_tables',{
    ca_id:sequelize.INTEGER,
    ca_name:sequelize.STRING,
    address:sequelize.STRING,
    email:sequelize.STRING,
    phone:sequelize.INTEGER,
    expected_ctc:sequelize.STRING,
    current_ctc:sequelize.STRING,
    notice_period:sequelize.STRING,
    vaccination_status:sequelize.STRING
}) ;

db.sync({force:true}).then(()=>{
    candidate.create({
        ca_id:'',
        ca_name:'',
        address:'',
        email:'',
        phone:'',
        expected_ctc:'',
        current_ctc:'',
        notice_period:'',
        vaccination_status:''
    })
})

module.exports = candidate;