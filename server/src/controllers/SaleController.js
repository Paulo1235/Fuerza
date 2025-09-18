const SaleService = require('../service/SaleService')
const { StatusCodes } = require('http-status-codes')

class SaleController {
  static async createSale (req, res) {
    try {
      const sales = await SaleService.createSale(req.body)
      res.status(StatusCodes.OK).json(sales)
    } catch (error) {
      res.json(({ message: 'Error creating sale' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async editSale (req, res) {
    const saleId = req.body.saleId
    try {
      const sales = await SaleService.editSale(saleId, req.body)
      res.status(StatusCodes.OK).json(sales)
    } catch (error) {
      res.json(({ message: 'Error editing sale' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findAllSales (_, res) {
    try {
      const sales = await SaleService.findAllSales()
      res.status(StatusCodes.OK).json(sales)
    } catch (error) {
      res.json(({ message: 'Error finding all sales' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async deleteSale (req, res) {
    const saleId = req.body.saleId
    try {
      const sales = await SaleService.deleteSale(saleId)
      res.status(StatusCodes.OK).json(sales)
    } catch (error) {
      res.json({ message: 'Error deleting sale' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findSaleById (req, res) {
    const saleId = req.body.saleId
    try {
      const sales = await SaleService.findSaleById(saleId)
      res.status(StatusCodes.OK).json(sales)
    } catch (error) {
      res.json({ message: 'Error finding sale' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = SaleController
