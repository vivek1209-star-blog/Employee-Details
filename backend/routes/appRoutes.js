var express = require('express');
var router = express.Router();
var Employee = require('../models/dataSchema');


router.post('/create',(req, res, next) => {
    var newEmployee = new Employee({
        name:req.body.name,
        totalDays:req.body.totalDays,
        availableDays:req.body.availableDays,
        bandScores:req.body.bandScore

    });
    newEmployee.save((err, employee)=>{
        if(err)
           res.status(500).json({ errmsg:err });
        res.status(200).json({ msg: employee });
    })
    });


router.get('/read',(req, res, next) => {
    Employee.find({},(err, employees)=>{
        if(err)
        res.status(500).json({ errmsg:err });
     res.status(200).json({ msg: employees });
    });
 });

 module.exports = router;