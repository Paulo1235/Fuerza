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
  address: {
    rua: {
      type: String, required: true
    },
    door: {
      type: String, required: true
    },
    cp: {
      type: String, required: true
    }
  },
  saved: [{
    type: mongoose.type.ObjectId, ref: 'Item'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User
