const saleSchema = require('../validations/saleSchema')
const SaleRepository = require('../repositories/SaleRepository')

class SaleService {
  static async createSale (data) {
    const validatedData = await saleSchema.validate(data, { abortEarly: false })
    if (data.itemID == null) {
      throw new Error('Sale must have at least one item')
    }
    if (data.userID == null) {
      throw new Error('Sale must have a user')
    }

    const sale = await SaleRepository.createSale(validatedData)
    return sale
  }

  static async editSale (data) {
    const validatedData = await saleSchema.validate(data, { abortEarly: false })

    const sale = await SaleRepository.editSale(validatedData)
    return sale
  }

  static async findAllSales () {
    const sales = await SaleRepository.findAllSales()
    if (!sales) {
      throw new Error('Not found any sale')
    }
    return sales
  }

  static async deleteSale (id) {
    if (await SaleRepository.deleteSale(id)) {
      return true
    }
    return false
  }

  static async findSaleById (id) {
    const sale = await SaleRepository.findSaleById(id)
    if (!sale) {
      throw new Error('Not found this sale')
    }
    return sale
  }
}

module.exports = SaleService
