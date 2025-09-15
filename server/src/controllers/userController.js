const UserRepository = require('../repositories/UserRepository')
const { StatusCodes } = require('http-status-codes')

class UserController {
  static async findAllUsers (_, res) {
    try {
      const users = await UserRepository.findAllUsers()
      res.json(users).status(StatusCodes.OK)
    } catch (error) {
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = UserController
