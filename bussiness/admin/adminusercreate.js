const express = require('express');
const app = express();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

app.get('/createruser', (req, res) => {{
    res.render('createruser.html');
}});



//entries
const db = require('../../DAL/userDAL')
app.post('/createuserentries', (req, res) => {
    const name = req.body.hr_name;
    const id = req.body.hr_id;
    const gender = req.body.hr_gender;
    const designation = req.body.hr_designation;
    const mail = req.body.hr_mail;

    var sql = 'INSERT INTO user_tables WHERE (name, id, gender, designation, mail) VALUES ("${name}","${id}","${gender}","${designation}","${mail}")';
    db.query(sql,function(err,result){
        if(err) throw err;

        console.log('records inserted successfully');
        req.flash('success','Successful');
        res.redirect('/createuserentries');
    })
})
// uploading image
app.post('/createruserimage',upload.single('image'), (req, res) =>{
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = 'http://12 7.0.0.1:8081/images/' + req.file.filename
        var insertData = "INSERT INTO user_tables VALUES hr_image"
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
    }
});
module.exports = app;