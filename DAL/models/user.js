const db = require("../../config/connection");
const sequelize = require("sequelize");
const bcrypt = require("bcrypt");

const users = db.define('user_tables', {
    hr_id:{
        type:sequelize.INTEGER,
        primaryKey:true
    },
    hr_name:{
        type:sequelize.STRING
    },
    hr_username:{
        type:sequelize.STRING
    },
    hr_phone:{
        type:sequelize.STRING
    },
    hr_address:{
        type:sequelize.STRING
    },
    hr_designation:{
        type:sequelize.STRING
    },
    hr_password:{
        type:sequelize.STRING
    },
    hr_image:{
        type:sequelize.BLOB
    }

    
});

users.addHook(
    "beforeCreate",
    users => (users.hr_password = bcrypt.hashSync(users.hr_password, 10))
  );

db.sync({force:true}).then(()=>{
    users.create({
        hr_id:'100',
        hr_name:'benny',
        hr_username:'',
        hr_phone:'123456789',
        hr_address:'',
        hr_designation:'admin',
        hr_password:'bennypearl123'

    })
})





module.exports = users;