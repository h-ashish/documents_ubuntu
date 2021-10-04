var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type:String, required:true, max: 100},
    name: {type:String, required:true, max:100},
    dob: {type: Date},
    password: {type: String, required:true, max: 100}
})

module.exports = mongoose.model('users', userSchema);
