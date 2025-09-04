const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  },
  verified: {
    type: Boolean, required: false
  }
})

const Auth = mongoose.model('Auth', authSchema)

module.exports = Auth
