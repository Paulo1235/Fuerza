const mongoose = require('mongoose')

const contribuinteSchema = mongoose.Schema({
  _id: {
    type: Number, required: true
  }
}, { _id: false })

const Contribuinte = mongoose.model('Contribuinte', contribuinteSchema)

module.exports = Contribuinte
