const mongoose = require('mongoose')

const typeItemSchema = mongoose.Schema({
  typeItemName: {
    type: String, required: true
  }
})

const TypeItem = mongoose.model('TypeItem', typeItemSchema)

module.exports = TypeItem
