const User = require('../models/User')

class UserRepository {
  static async createUser (name, birth) {
    const user = await new User({ name, birth })
    return user
  }

  static async editUser (id, data) {
    const user = await User.findByIdAndUpdate(id, data, { new: true })
    return user
  }

  static async deleteUser (id) {
    await User.findByIdAndDelete(id)
    return true
  }

  static async findAllUsers () {
    const users = await User.find()
    return users
  }

  static async findUserById (id) {
    const user = await User.findById(id)
    return user
  }
}

module.exports = UserRepository
