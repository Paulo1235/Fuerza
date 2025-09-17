//  const User = require('../models/User')
const userSchema = require('../validations/userSchema')
const UserRepository = require('../repositories/UserRepository')

class UserService {
  static async createUser (data) {
    const validatedData = await userSchema.validate(data, { abortEarly: false })
    if (data.birthDate > new Date()) {
      throw new Error('Birth Date cannot be in the future')
    }

    const user = await UserRepository.createUser(validatedData)
    return user
  }

  static async editUser (data) {
    const validatedData = await userSchema.validate(data, { abortEarly: false })
    if (data.birthDate > new Date()) {
      throw new Error('Birth Date cannot be in the future')
    }

    const user = await UserRepository.editUser(validatedData)
    return user
  }

  static async findAllUsers () {
    const users = await UserRepository.findAllUsers()
    if (!users) {
      throw new Error('Not found any user')
    }
    return users
  }

  static async deleteUser (id) {
    if (await UserRepository.deleteUser(id)) {
      return true
    }
    return false
  }

  static async findUserById (id) {
    const user = await UserRepository.findUserById(id)
    if (!user) {
      throw new Error('Not found this user')
    }
    return user
  }
}

module.exports = UserService
