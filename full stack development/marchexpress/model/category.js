const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema ({
    name:{type:String, required: true, max : 400},
    description: {type: String, required: true, max:300}
})

module.exports = mongoose.model("Category",CategorySchema);