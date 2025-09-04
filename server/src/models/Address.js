const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
  road: {
    type: String, required: true
  },
  door: {
    type: Number, required: true
  },
  cpID: {
    type: mongoose.Types.ObjectId, ref: 'CP'
  }
})

const Address = mongoose.model('Address', addressSchema)

module.exports = Address
