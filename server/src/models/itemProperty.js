const mongoose = require('mongoose')

const itemPropertySchema = mongoose.Schema({
  value: {
    type: String, required: true
  },
  itemID: {
    type: mongoose.Types.ObjectId, ref: 'Item'
  },
  propertyID: {
    type: mongoose.Types.ObjectId, ref: 'Property'
  }
})

const ItemProperty = mongoose.model('ItemProperty', itemPropertySchema)

module.exports = ItemProperty
