const ItemController = require('../controllers/ItemController')
const express = require('express')

const itemRoute = express.Router()

itemRoute.get('/find-all/:id', ItemController.findAllItems)

itemRoute.get('/find/id/:id', ItemController.findItemById)

itemRoute.get('/create/:id', ItemController.createItem)

itemRoute.put('/edit/:id', ItemController.editItem)

itemRoute.delete('/delete/:id', ItemController.deleteItem)

module.exports = itemRoute
