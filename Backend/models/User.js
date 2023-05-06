const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Number,
  uid: String,
  name: String,
  email: String,
  image: String,
  cordes: Array,
})  

const User = mongoose.model('User', UserSchema);

module.exports = User;