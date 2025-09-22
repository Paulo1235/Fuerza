const authSchema = require('../validations/authSchema')
const AuthRepository = require('../repositories/AuthRepository')

class AuthService {
  static async createAuth (data) {
    const validatedData = await authSchema.validate(data, { abortEarly: false })

    const auth = await AuthRepository.createAuth(validatedData)
    return auth
  }

  static async editAuth (data) {
    const validatedData = await authSchema.validate(data, { abortEarly: false })

    const auth = await AuthRepository.editAuth(validatedData)
    return auth
  }

  static async findAllAuths () {
    const auths = await AuthRepository.findAllAuths()
    if (!auths) {
      throw new Error('Not found any auth')
    }
    return auths
  }

  static async deleteAuth (id) {
    if (await AuthRepository.deleteAuth(id)) {
      return true
    }
    return false
  }

  static async findAuthById (id) {
    const auth = await AuthRepository.findAuthById(id)
    if (!auth) {
      throw new Error('Not found this auth')
    }
    return auth
  }
}

module.exports = AuthService
