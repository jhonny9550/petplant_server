const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dfhduki0t',
  api_key: '468173945795776',
  api_secret: '1n0dvq7da7NqXx-uXQiS-knbmMk'
});

var plantSchema = new Schema({
  name: {type:String, required:true},
  type: {type:String, required:true},
  gender: {type:String, required:true},
  img: {type:String},
  user_ref: {type:Schema.Types.ObjectId, ref:'usuarios', required:true},
  created_at: {type:Date, default:Date.now()},
  update_at: Date
});

plantSchema.pre('save', function(next){

  var self = this;

  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  self.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!self.created_at) {
    self.created_at = currentDate;
  }

  if(!self.img){
    self.img = 'assets/img/default_plant_avatar.png';
    next();
  }else{
    cloudinary.uploader.upload(self.img, function(result) {
      console.log(result.url);
      self.img = result.url;
      next();
    });
  }

});

var Plant = mongoose.model('plantas', plantSchema);

module.exports = Plant;
