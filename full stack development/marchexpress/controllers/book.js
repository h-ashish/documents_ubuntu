var Book =  require('../model/book');
exports.createBook = function(req, res, next){
    if(!req.body.category instanceof Array){
        req.body.category = []
    } else {
        req.body.category = new Array(req.body.category)
    }
    var bookOb = new Book({
        title: req.body.title,
        summary:req.body.summary,
        isbn:req.body.isbn,
        author:req.body.author,
        category:req.body.category
    });
    bookOb.save(function(err){
        if(err){
            res.json({status:0,debug_data: err});
        } else {
            res.json({status: 1, data: "Book saved successfully"});
        }
    })
}
exports.getBooks = function(req, res, next){
    Book.find(function(err, book){
        res.json(book)
    })
}