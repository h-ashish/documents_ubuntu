const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonalinfoSchema =  new Schema ({
    phoneno:{type:Number, required: true},
    salary: {type: Number, required: true},
    fathername: {type: String, required: true}
})

module.exports = mongoose.model("personalinfos", PersonalinfoSchema);