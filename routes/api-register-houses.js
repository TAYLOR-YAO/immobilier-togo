const express = require("express");
const router = express.Router();

const db= require("../models");


router.post("/new-home", (req, res) => {
    console.log(req.body)
    // console.log(req)
    res.send( "Good Job" );


 });
// router.post("/register-house", (req, res) => {

//  });


module.exports = router;
