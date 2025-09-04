const Auth = require('../models/Auth')

class AuthRepository {
  static async createAuth (email, password, verified) {
    const auth = await new Auth({email, password, verified})
    return auth
  }

  static async editEmailAuth (id, email) {
    const auth = await Auth.findByIdAndUpdate(id, { email }, { new: true })
    return auth
  }

  static async editPasswordAuth (id, password) {
    const auth = await Auth.findByIdAndUpdate(id, { password }, { new: true })
    return auth
  }

  static async deleteAuth (id) {
    await Auth.findByIdAndDelete(id)
    return true
  }

  static async findAllAuths () {
    const auths = await Auth.find()
    return auths
  }

  static async findAuthById (id) {
    const auth = await Auth.findById(id)
    return auth
  }
}

module.exports = AuthRepository
