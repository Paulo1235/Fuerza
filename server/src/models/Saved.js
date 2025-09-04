const mongoose = require('mongoose')

const savedSchema = mongoose.Schema({
  userID: {
    type: mongoose.Types.ObjectId, ref: 'User'
  },
  itemID: {
    type: mongoose.Types.ObjectId, ref: 'Item'
  }
})

const Saved = mongoose.model('Saved', savedSchema)

module.exports = Saved
