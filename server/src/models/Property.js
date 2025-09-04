const mongoose = require('mongoose')

const propertySchema = mongoose.Schema({
  propertyName: {
    type: String, required: true
  },
  typeData: {
    type: String, required: true
  },
  addressID: {
    type: mongoose.Types.ObjectId, ref: 'Address'
  },
  typeItemID: {
    type: mongoose.Types.ObjectId, ref: 'TypeItem'
  }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property
