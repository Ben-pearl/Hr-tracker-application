const db = require("../controller/connection");
const sequelize = require("sequelize");

const users = db.define('user_hrs', {
    hr_id:sequelize.INTEGER,
    hr_name:sequelize.STRING,
    hr_role:sequelize.STRING,
    hr_contact:sequelize.STRING,
    hr_address:sequelize.STRING,
    hr_designation:sequelize.STRING,
    hr_password:sequelize.STRING,

    
});

module.exports = users;