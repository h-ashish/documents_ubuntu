console.log('came in');
var Products = require('../model/product1');
exports.createProduct = function(req, res, next){
    console.log(req.query)
    var productOb = new Products ({
        name: req.body.name,
        price: req.body.price,
        availability: req.body.availability
    });
    productOb.save(function(err){
        if(err){
            console.log(err);
            res.json({error:"cant save"});
        } else {
            console.log('success');
            res.json({msg:"product saved"})
        }
    })
}

exports.getProducts =  function(req, res, next){
    Products.find(function(err,product_list){
        res.json(product_list);
    })
}

exports.getProduct =  function(req, res, next){
    Products.findById(req.params.id ,function(err, product){
        res.json(product);
    })
}

exports.deleteProduct = function(req, res, next){
    Products.findByIdAndDelete(req.params.id, function(err){
        if(err)
            res.json(err.toString())
        res.json({status: 1,msg: "successfully deleted product " + req.params.id})
    })
}

exports.updateProduct = function(req, res, next){
    Products.findByIdAndUpdate(req.params.id, req.body, function(err){
        if(err)
            res.json(err.toString());
        res.json({status:1, msg:"successfully updated product " + req.params.id})
    })
}
exports.getProductes =  function(req, res, next){
    Products.findOne({"name":req.params.name},function(err,product){
        res.json(product);
    })
}
exports.getAvailability = function(req, res, next){
    Products.findOne({"availability":req.params.availability}, function(err, product){
        res.json(product);
    })
}
exports.getPrice = function(req, res, next){
    Products.findOne({"price":req.params.price}, function(err, product){
        res.json(product);
    })
}
