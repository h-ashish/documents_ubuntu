console.log('came in');
var User = require('../model/users');
exports.createUser = function(req, res, next){
    console.log(req.query)
    var userOb = new User ({
        username: req.body.username,
        name: req.body.name,
        dob: req.body.dob,
        password: req.body.password
    });
    userOb.save(function(err){
        if(err){
            console.log(err);
            res.json({error:"cant save"});
        } else {
            console.log('success');
            res.json({msg:"product saved"})
        }
    })
}
exports.getUsers = function(req,res,next){
    User.find(function (err,users_list) {
        res.json(users_list)
    })
}
exports.getUser = function(req,res,next) {
    User.findById(req.params.id,function (err,user) {
        res.json(user)
    })
}
exports.updateUser = function(req,res,next){
    console.log(req.params)
    User.findByIdAndUpdate(req.params.id,req.body,function (err) {
        if(err)
            res.json(err.toString());
        res.json({status:1,msg:"Successfully update User by id"+req.params.id})
    })
}

exports.deleteUser = function(req,res,next){
    console.log(req.params)
    User.findByIdAndDelete(req.params.id,function (err) {
        if(err)
            res.json(err.toString());
        res.json({status:1,msg:"Successfully delete User by id"+req.params.id})
    })
}
exports.getByName = function(req,res,next){
    console.log(req.params)

    User.find({"name":req.params.name},function (err,user) {
        res.json(user)
    })
}

exports.getByUsername = function(req,res,next){
    console.log(req.params)

    User.find({"username":req.params.username},function (err,user) {
        res.json(user)
    })
}
exports.getByPassword = function(req,res,next){
    console.log(req.params)

    User.find({"password":req.params.password},function (err,user) {
        res.json(user)
    })
}
exports.getByDob = function(req,res,next){
    console.log(req.params)

    User.find({"dob":req.params.dob},function (err,user) {
        res.json(user)
    })
}