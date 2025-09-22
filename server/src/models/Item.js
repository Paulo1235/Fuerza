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
    enum: ['Calções', 'Camisola', 'Pesos', 'Equipamento'],
    required: true
  },
  properties: {
    size: {
      type: String,
      enum: ['XS', 'S', 'M', 'L', 'XL'],
      required: false
    },
    color: {
      type: String, required: false
    },
    capacity: {
      type: String, required: false
    },
    material: {
      type: String, required: false
    },
    brand: {
      type: String, required: false
    },
    weight: {
      type: Number, required: false
    }
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
