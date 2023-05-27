const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CodeSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    ref: 'User'
  },
  size: String,
  title: String,
  codeSrcs: Array,
  description: String,
  item: Array
})


const Code = mongoose.model('Code', CodeSchema)

module.exports = Code