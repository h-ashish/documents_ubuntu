var Category = require('../model/category');
exports.createCategory =  function(req, res, next){
    var categoryObj = new Category({
        name: req.body.name,
        description: req.body.description
    })
    categoryObj.save(
        err => err?
        res.json({error:'cant save'}):
        res.json({msg:'todo list saved'})
    )
}
exports.getCategory = function(req, res, next){
    Category.find(function(err, book){
        res.json(book)
    })
}