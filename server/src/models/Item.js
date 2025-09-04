const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  nameItem: {
    type: String, required: true
  },
  price: {
    type: Number, required: true
  },
  typeItemID: {
    type: mongoose.Types.ObjectId, ref: 'TypeItem'
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
