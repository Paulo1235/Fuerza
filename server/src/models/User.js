const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userName: {
    type: String, required: true
  },
  birthDate: {
    type: Date, required: true
  },
  authID: {
    type: mongoose.Types.ObjectId, ref: 'Auth'
  },
  addressID: {
    type: mongoose.Types.ObjectId, ref: 'Address'
  },
  typeItemID: {
    type: mongoose.Types.ObjectId, ref: 'TypeItem'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
