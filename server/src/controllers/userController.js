const UserRepository = require('../repositories/UserRepository')
const { StatusCodes } = require('http-status-codes')

class UserController {
  static async findAllUsers (_, res) {
    const users = await UserRepository.findAllUsers()
    res.json(users).status(StatusCodes.OK)
  }
}

module.exports = UserController
