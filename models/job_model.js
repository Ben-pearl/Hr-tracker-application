const db = require('../controller/connection');
const sequelize = require('sequelize');

const jobs = db.define('jobs_table',{
    job_id:sequelize.INTEGER,
    job_name:sequelize.STRING,
    description:sequelize.STRING,
    job_location:sequelize.STRING,
    skillset:sequelize.STRING,
    ctc:sequelize.STRING
})

db.sync({force:true}).then(()=>{
    jobs.create({
        job_id:'',
        job_name:'',
        description:'',
        job_location:'',
        skillset:'',
        ctc:''

    })
})

module.exports = jobs;