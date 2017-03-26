const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  email: {type:String, required:true},
  created_at: {type:Date, default: Date.now()},
  last_login: Date
});

var User = mongoose.model('usuarios', userSchema);

module.exports = User;
