const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const usersSchema = new Schema({
  name:{type:String, unique: false, required: true},
  surname:{type:String, unique: false, required: true},
  email:{type:String, unique: false, required: true},
  phone:{type:String, unique: false, required: true},
  password:{type:String, unique: false, required: true, minlength: 6, maxlength: 12},
  passwordConfimation:{type:String, unique: false, required: true, minlength: 6, maxlength: 12},
  address:{type:String, unique: false, required:true},
  optionalInformation:{type:String, unique: false, required: false},
  postcode:{type:String, unique: false, required:true},
  town:{type:String, unique: false, required:true},
  province:{type:String, unique: false, required:true},
  country:{type:String, unique: false, required:true},
  admin: {type:Boolean, default:false}
});

usersSchema.pre('save', function(next) { //if you cliclk .save 
  const user = this;
  bcrypt.genSalt(10, function(err, salt) { //incrypt the password
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }
      user.password = hash; // and will be replaced by a hash, but will be posisble to check with the real one
      next();
    });
  });
});

usersSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch); // if is correct will return isMatch
  });
}

const Users = mongoose.model('User', usersSchema);
module.exports = Users;