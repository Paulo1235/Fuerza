const UserService = require('../service/UserService')
const { StatusCodes } = require('http-status-codes')

class UserController {
  static async createUser (req, res) {
    try {
      const users = await UserService.createUser(req.body)
      res.json(users).status(StatusCodes.OK)
    } catch (error) {
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async editUser (req, res) {
    try {
      const users = await UserService.editUser(req.body)
      res.json(users).status(StatusCodes.OK)
    } catch (error) {
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findAllUsers (_, res) {
    try {
      const users = await UserService.findAllUsers()
      res.json(users).status(StatusCodes.OK)
    } catch (error) {
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async deleteUser (req, res) {
    try {
      const users = await UserService.deleteUser(req.body)
      res.json(users).status(StatusCodes.OK)
    } catch (error) {
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findUserById (req, res) {
    try {
      const users = await UserService.findUserById(req.body)
      res.json(users).status(StatusCodes.OK)
    } catch (error) {
      res.json(error).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = UserController
