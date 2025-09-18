const UserService = require('../service/UserService')
const { StatusCodes } = require('http-status-codes')

class UserController {
  static async createUser (req, res) {
    try {
      const users = await UserService.createUser(req.body)
      res.status(StatusCodes.OK).json(users)
    } catch (error) {
      res.json(({ message: 'Error creating user' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async editUser (req, res) {
    const userId = req.user
    try {
      const users = await UserService.editUser(userId, req.body)
      res.status(StatusCodes.OK).json(users)
    } catch (error) {
      res.json(({ message: 'Error editing user' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findAllUsers (_, res) {
    try {
      const users = await UserService.findAllUsers()
      res.status(StatusCodes.OK).json(users)
    } catch (error) {
      res.json(({ message: 'Error finding all users' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async deleteUser (req, res) {
    const userId = req.user
    try {
      const users = await UserService.deleteUser(userId)
      res.status(StatusCodes.OK).json(users)
    } catch (error) {
      res.json({ message: 'Error deleting user' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findUserById (req, res) {
    const userId = req.user
    try {
      const users = await UserService.findUserById(userId)
      res.status(StatusCodes.OK).json(users)
    } catch (error) {
      res.json({ message: 'Error finding user' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = UserController
