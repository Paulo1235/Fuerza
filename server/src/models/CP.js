const mongoose = require('mongoose')

const cpSchema = mongoose.Schema({

  _id: {
    type: Number, required: true
  },
  city: {
    type: String, required: true
  }
  
}, { _id: false })

const CP = mongoose.model('CP', cpSchema)

module.exports = CP
