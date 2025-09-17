//  const User = require('../models/User')
const userSchema = require('../validations/userSchema')
const UserRepository = require('../repositories/UserRepository')

class UserService {
  static async createUser (data) {
    const validatedData = await userSchema.validate(data, { abortEarly: false })
    if (data.birthDate > new Date()) {
      throw new Error('Birth Date cannot be in the future')
    }

    try {
      UserRepository.createUser(validatedData)
    } catch (error) {
      throw new Error('Error creating User')
    }
  }

  static async editUser (data) {
    const validatedData = await userSchema.validate(data, { abortEarly: false })
    if (data.birthDate > new Date()) {
      throw new Error('Birth Date cannot be in the future')
    }

    try {
      UserRepository.editUser(validatedData)
    } catch (error) {
      throw new Error('Error editting User')
    }
  }

  static async findAllUsers () {
    try {
      UserRepository.findAllUsers()
    } catch (error) {
      throw new Error('Error finding all Users')
    }
  }

  static async deleteUser (data) {
    // const validatedData = await userSchema.validate(data, { abortEarly: false })
    // if (data.birthDate > new Date()) {
    //   throw new Error('Birth Date cannot be in the future')
    // }

    try {
      UserRepository.deleteUser(data)
    } catch (error) {
      throw new Error('Error editting User')
    }
  }

  static async findUserById (data) {
    // const validatedData = await userSchema.validate(data, { abortEarly: false })
    // if (data.birthDate > new Date()) {
    //   throw new Error('Birth Date cannot be in the future')
    // }

    try {
      UserRepository.findUserById(data)
    } catch (error) {
      throw new Error('Error editting User')
    }
  }
}

module.exports = UserService
