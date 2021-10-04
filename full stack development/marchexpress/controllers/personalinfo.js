var Personalinfo = require('../model/personalinfo');
exports.createPersonalinfo = function(req, res, next){
    var personalinfoObj =  new Personalinfo({
        phoneno: req.body.phoneno,
        salary: req.body.salary,
        fathername: req.body.fathername
    })
    personalinfoObj.save(
        err => err?
        res.json({error:'cant save'}):
        res.json({msg:'info saved'})
    )
}

exports.getPersonalinfo = function(req, res, next){
    Personalinfo.find(function(err, info){
        res.json(info);
    })
}
