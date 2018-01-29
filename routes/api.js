const express = require('express');
const router = express.Router();
const Temp = require('../models/m_users');
//get lisr users
router.get('/users', function(req, res, next){
    Temp.find().then(function(users){
        res.send(users);
    }).catch(next);
});

//add new record
router.post('/users', function(req, res, next){
    Temp.create(req.body).then(function(users){
        res.send(Users);
    }).catch(next);
});

//update new record
router.put('/users/:id', function(req, res, next){
    Temp.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        Temp.findOne({_id:req.params.id}).then(function(users){
             res.send(users);
        });
    });
});
//delete record selectted
router.delete('/users/:id', function(req, res){
    Temp.findByIdAndRemove({_id:req.params.id}).then(function(users){
        res.send(users);
    });
});

module.exports = router;