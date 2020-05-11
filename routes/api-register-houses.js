const express = require("express");
const router = express.Router();
const db= require("../models");

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req, file,cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
})
fileFilter = (req, file,cb)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null,true);
    }else{
        cb(null,false);
    }
}
var upload = multer({ dest: 'uploads/' })
// var upload = multer({ 
//     storage: storage, 
//     limits:{
//     fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// })

router.post('/profile', upload.single('avatar'), function (req, res, next) {
    // recfile
    console.log(req.file)
    console.log("===================")

    console.log(req.body.title)


    res.send(req.file)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

router.post('/photos/upload', upload.array('files', 12), function (req, res, next) {
    console.log(req.files)
    // res.send(req.files)

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})



router.post("/new-home", (req, res) => {
    console.log(req.body)
    // console.log(req)
    res.send( "Good Job" );


 });
// router.post("/register-house", (req, res) => {

//  });


module.exports = router;
