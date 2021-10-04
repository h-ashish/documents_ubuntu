var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {type:String, required:true, max:500},
    price: {type: Number, required:true},
    availability: {type: String, required:true, max: 500}
})

module.exports = mongoose.model('Products', productSchema);
