console.log('came in');
var Author = require('../model/todoauthor');
exports.createAuthor=function(req,res,next){
    var authorOb=new Author({
        name:"buy milk",
        status: "completed",
    });
    authorOb.save(function(err){
        if(err){
            console.log(err);
            res.json({error:"cant save"})
        }else{
            console.log('success')
            res.json({msg:"Author saved"})
        }
    })
}