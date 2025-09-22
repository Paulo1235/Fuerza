const SaleController = require('../controllers/SaleController')
const express = require('express')

const saleRoute = express.Router()

saleRoute.get('/find-all/:id', SaleController.findAllSales)

saleRoute.get('/find/id/:id', SaleController.findSaleById)

saleRoute.get('/create/:id', SaleController.createSale)

saleRoute.put('/edit/:id', SaleController.editSale)

saleRoute.delete('/delete/:id', SaleController.deleteSale)

module.exports = saleRoute
