const Sale = require('../models/Sale')

class SaleRepository {
  static async createSale (data) {
    const sale = await new Sale(data)
    return sale
  }

  static async editSale (id, data) {
    const sale = await Sale.findByIdAndUpdate(id, data, { new: true })
    return sale
  }

  static async deleteSale (id) {
    await Sale.findByIdAndDelete(id)
    return true
  }

  static async findAllSales () {
    const sales = await Sale.find()
    return sales
  }

  static async findSaleById (id) {
    const sale = await Sale.findById(id)
    return sale
  }
}

module.exports = SaleRepository
