const CP = require('../models/CP')

class CPRepository {
  static async createCP (id, city) {
    const cp = await new CP({ _id: id, city })
    return cp
  }

  static async editCityCP (id, city) {
    const cp = await CP.findByIdAndUpdate(id, { city }, { new: true })
    return cp
  }

  static async deleteCP (id) {
    await CP.findByIdAndDelete(id)
    return true
  }

  static async findAllCP () {
    const cp = await CP.find()
    return cp
  }

  static async findCPById (id) {
    const cp = await CP.findById(id)
    return cp
  }
}

module.exports = CPRepository
