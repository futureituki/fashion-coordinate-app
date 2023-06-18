const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CordeSchema = new Schema({
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


const Corde = mongoose.model('Corde', CordeSchema)

module.exports = Corde