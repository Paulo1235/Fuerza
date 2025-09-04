const Sale = require('../models/Sale')

class SaleRepository {
  static async createSale (quantity, totalValue) {
    const sale = await new Sale({ quantity, totalValue })
    return sale
  }

  static async editQuantitySale (id, quantity) {
    const sale = await Sale.findByIdAndUpdate(id, { quantity }, { new: true })
    return sale
  }

  static async editTotalValueSale (id, totalValue) {
    const sale = await Sale.findByIdAndUpdate(id, { totalValue }, { new: true })
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
