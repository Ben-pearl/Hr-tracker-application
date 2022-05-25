const db = require('../controller/connection');
const sequelize = require('sequelize');

const company = db.define('company_tables',{
    company_id:sequelize.INTEGER,
    company_name:sequelize.STRING,
    description:sequelize.STRING,
    comp_address:sequelize.STRING,
    logo:sequelize.BLOB
});

db.sync({force:true}).then(()=>{
    company.create({
        company_id:'01',
        company_name:'TCS',
        description:'Some description given by the company',
        comp_address:'chennai',
        logo:''
    });
});
module.exports = company