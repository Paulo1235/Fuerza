const Auth = require('../models/Auth')

class AuthRepository {
  static async createAuth (data) {
    const auth = await new Auth(data)
    return auth
  }

  static async editAuth (id, data) {
    const auth = await Auth.findByIdAndUpdate(id, data, { new: true })
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
