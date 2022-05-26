const express = require('express');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const mongoose = require('mongoose');
var router = express.Router();

//llamado al modelo
const Department = require('../models/department');

router.get('/', (req, res) => {
    res.render('pages/department/addEdit', {
        viewTitle: 'New Department'
    });
});

router.post('/', (req, res) =>{
    if(req.body._id == '')
    newDepartment(req, res)
    else
    updateDepartment(req, res)
});

//método para insertar nuevo registro
function newDepartment(req, res){
    var department = new Department();
    department.name = req.body.name;
    department.alias = req.body.alias;
    department.description = req.body.description;

    department.save((error) => {
        if(error)
        console.log("Error" + error);
        else
        res.redirect('department/list');
    });
}

function updateDepartment(req, res){
    Department.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.redirect('department/list');
        } else {
            res.render('department/addEdit', {
                viewTitle: "Update Department",
                department: req.body
            })
        }
    })
}

router.get('/list', (req, res)=> {
    Department.find((err, doc) => {
        if(!err){
            res.render('pages/department/list', {
                list: doc,
                viewTitle: "Departments"
            })
        } else {
            console.log("Error" + err);
        }
    });
})

router.get('/:id', (req, res) => {
    Department.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render('pages/department/addEdit', {
                viewTitle: "Update Department",
                department: doc
            });
        }
    })
})

router.get('/delete/:id', (req, res) => {
    Department.findByIdAndDelete(req.params.id, (err, doc) =>{
        if(!err){
            res.redirect('/department/list');
        } else {
            console.log("Error" + err);
        }
    })
})

module.exports = router;