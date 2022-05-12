const express = require("express");
let app = express.Router();

app.get('/',function(req,res){
    res.send("login");

});
app.post('/',function(req,res){
    res.send("/dashboard")
})

app.get("/",function(req,res){
    res.send("");
});
module.exports = app