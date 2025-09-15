const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  nameItem: {
    type: String, required: true
  },
  price: {
    type: Number, required: true
  },
  typeItemID: {
    type: String,
    enum: ['Calções', 'Camisola', 'Pesos']
  },
  properties: {
    size: {
      type: String, required: true
    },
    color: {
      type: String, required: true
    },
    capacity: {
      type: String, required: true
    },
    material: {
      type: String, required: true
    },
    brand: {
      type: String, required: true
    },
    weight: {
      type: Number, required: true
    }
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
