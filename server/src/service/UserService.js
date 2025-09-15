//  const User = require('../models/User')
const userSchema = require('../validations/userSchema')

class UserService {
  static async createUser (data) {
    const validatedData = await userSchema.validate(data, { abortEarly: false })
    if (data.birthDate > new Date()) {
      throw new Error('Birth Date cannot be in the future')
    }
  }
}//chama o repository

module.exports = UserService
