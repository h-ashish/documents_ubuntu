var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type:String, required:true, max: 100},
    name: {type:String, required:true, max:100},
    dob: {type: Date},
    password: {type: String, required:true, max: 100},
    personalinfo: {type: mongoose.Schema.ObjectId, ref:"Personalinfo"}
})

module.exports = mongoose.model('users', userSchema);
