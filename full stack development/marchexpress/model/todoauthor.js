var mongoose = require("mongoose")

var AuthorSchema = new mongoose.Schema({
    name :{type:String,required:true,max:100},
    status :{type:String,required:true,max:100},

})

module.exports = mongoose.model('Todo',AuthorSchema);