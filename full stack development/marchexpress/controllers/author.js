console.log('came in');
var Author = require('../model/author');
exports.createAuthor=function(req,res,next){
    console.log(req.body)
    var authorOb=new Author({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        dob:req.body.dob,
        dod:req.body.dod
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
//get all author
exports.getAuthors = function(req, res, next){
    Author.find(function(err, author_list){
        res.json(author_list);
    })
}
//get a single author
exports.getAuthor =  function(req, res, next){
    console.log(req.params);
    Author.findById(req.params.id,function(err,author){
        res.json(author);
    })
}
//delete

exports.deleteAuthor = function(req, res, next){
    Author.findByIdAndDelete(req.params.id, function(err){
        if(err)
            res.json(err.toString());
        res.json({status:1, msg:"successfully delete author with id " + req.params.id})
    })
}
//update 
exports.updateAuthor = function(req, res, next){
    console.log(req.body);
    Author.findByIdAndUpdate(req.params.id,req.body, function(err){
        if(err)
            res.json(err.toString());
        res.json({status:1,msg:"successfully edited author with id " + req.params.id})
        
    })
}
