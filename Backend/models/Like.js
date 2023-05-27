const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CodeSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  uid: {
    type: Number,
  },
  code_id: {
    type: Number,
  },
})


const Code = mongoose.model('Code', CodeSchema)

module.exports = Code