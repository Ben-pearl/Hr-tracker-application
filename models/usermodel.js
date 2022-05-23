const db = require("../controller/connection");
const sequelize = require("sequelize");

const users = db.define('user_tables', {
    hr_id:{
        type:sequelize.INTEGER
    },
    hr_name:sequelize.STRING,
    hr_username:sequelize.STRING,
    hr_phone:sequelize.STRING,
    hr_address:sequelize.STRING,
    hr_designation:sequelize.STRING,
    hr_password:sequelize.STRING,

    
});

db.sync({force:true}).then(()=>{
    users.create({
        hr_id:'100',
        hr_name:'benny',
        hr_username:'',
        hr_phone:'1234567899',
        hr_address:'',
        hr_designation:'admin',
        hr_password:'bennypearl123'

    })
})

module.exports = users;