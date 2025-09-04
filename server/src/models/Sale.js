const mongoose = require('mongoose')

const saleSchema = mongoose.Schema({
  quantity: {
    type: Number, required: true
  },
  totalValue: {
    type: Number, required: true
  },
  contribuinteID: {
    type: Number, ref: 'Contribuinte', required: false
  },
  itemID: {
    type: mongoose.Types.ObjectId, ref: 'Item'
  },
  userID: {
    type: mongoose.Types.ObjectId, ref: 'User'
  }
})

const Sale = mongoose.model('Sale', saleSchema)

module.exports = Sale
