const db = require('../controller/connection');
const sequelize = require('sequelize');

const jobs = db.define('job_tables',{
    job_id:
    {
        type:sequelize.INTEGER,
        primaryKey:true
    },
    job_name:
    {type:sequelize.STRING},
    description:{
        type:sequelize.STRING},

    job_location:{
        type:sequelize.STRING},

    skillset:{type:sequelize.STRING},
    ctc:{type:sequelize.STRING}
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