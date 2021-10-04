console.log('came in');
var Author = require('../model/author');
var dob='12-02-1950';
var dod='1-03-1995';
exports.createAuthor=function(req,res,next){
    var authorOb=new Author({
        first_name:"Virat",
        last_name:"Kohli",
        dob:dob,
        dod:dod
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