const db =  require('../controller/connection');
const sequelize = require('sequelize');
const panel = db.define('panel_table',{
    meeting_type:sequelize.STRING,
    link:sequelize.STRING,
    feedback:sequelize.STRING,
    status:sequelize.STRING
});

db.sync({force:true}).then(()=>{
    panel.create({
        meeting_type:'',
        link:'',
        feedback:'',
        status:''
    })
})

module.exports = panel;