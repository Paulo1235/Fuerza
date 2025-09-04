const Address = require('../models/Address')

class AddressRepository {
  static async createAddress (road, door, cpID) {
    const address = await new Address({ road, door, cpID })
    return address
  }

  static async editRoadAddress (id, road) {
    const address = await Address.findByIdAndUpdate(id, { road }, { new: true })
    return address
  }

  static async editDoorAddress (id, door) {
    const address = await Address.findByIdAndUpdate(id, { door }, { new: true })
    return address
  }

  static async deleteAddress (id) {
    await Address.findByIdAndDelete(id)
    return true
  }

  static async findAllAddress () {
    const address = await Address.find()
    return address
  }

  static async findAddressById (id) {
    const address = await Address.findById(id)
    return address
  }
}

module.exports = AddressRepository
