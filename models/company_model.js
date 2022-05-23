const db = require('../controller/connection');
const sequelize = require('sequelize');

const company = db.define('company_tables',{
    company_id:sequelize.STRING,
    company_name:sequelize.STRING,
    description:sequelize.STRING,
    comp_address:sequelize.STRING,
    logo:sequelize.BLOB
});

db.sync({force:true}).then(()=>{
    company.create({
        company_id:'',
        company_name:'',
        description:'',
        comp_address:'',
        logo:''
    });
});
module.exports = company