const db = require('../controller/connection');
const sequelize = require('sequelize');
const todolist = db.define('todolist_table',{
    list:sequelize.STRING,
})

db.sync({force:true}).then(()=>{{
    todolist.create({
        list:''
    })
}})