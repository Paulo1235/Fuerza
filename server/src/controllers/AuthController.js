const AuthService = require('../service/AuthService')
const { StatusCodes } = require('http-status-codes')

class AuthController {
  static async createAuth (req, res) {
    try {
      const auths = await AuthService.createAuth(req.body)
      res.status(StatusCodes.OK).json(auths)
    } catch (error) {
      res.json(({ message: 'Error creating auth' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async editAuth (req, res) {
    const authId = req.body.authId
    try {
      const auths = await AuthService.editAuth(authId, req.body)
      res.status(StatusCodes.OK).json(auths)
    } catch (error) {
      res.json(({ message: 'Error editing auth' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findAllAuths (_, res) {
    try {
      const auths = await AuthService.findAllAuths()
      res.status(StatusCodes.OK).json(auths)
    } catch (error) {
      res.json(({ message: 'Error finding all auths' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async deleteAuth (req, res) {
    const authId = req.body.authId
    try {
      const auths = await AuthService.deleteAuth(authId)
      res.status(StatusCodes.OK).json(auths)
    } catch (error) {
      res.json({ message: 'Error deleting auth' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findAuthById (req, res) {
    const authId = req.body.authId
    try {
      const auths = await AuthService.findAuthById(authId)
      res.status(StatusCodes.OK).json(auths)
    } catch (error) {
      res.json({ message: 'Error finding auth' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = AuthController
