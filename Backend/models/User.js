const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Number,
  uid: String,
  name: String,
  description: String,
  email: String,
  height: String,
  gender: String,
  image: String,
  cordes: Array,
})

UserSchema.virtual('codes', {   //仮想的なアトリビュートを１つ、付け加える
  ref: 'Code',
  localField: '_id',   //Userデータベース側の外部キー（_idは自動作成される）
  foreignField: '_id' 　//Taskデータベース側の外部キー
})

const User = mongoose.model('User', UserSchema);

module.exports = User;