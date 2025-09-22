const ItemService = require('../service/ItemService')
const { StatusCodes } = require('http-status-codes')

class ItemController {
  static async createItem (req, res) {
    try {
      const items = await ItemService.createItem(req.body)
      res.status(StatusCodes.OK).json(items)
    } catch (error) {
      res.json(({ message: 'Error creating item' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async editItem (req, res) {
    const itemId = req.body.itemId
    try {
      const items = await ItemService.editItem(itemId, req.body)
      res.status(StatusCodes.OK).json(items)
    } catch (error) {
      res.json(({ message: 'Error editing item' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findAllItems (_, res) {
    try {
      const items = await ItemService.findAllItems()
      res.status(StatusCodes.OK).json(items)
    } catch (error) {
      res.json(({ message: 'Error finding all items' })).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async deleteItem (req, res) {
    const itemId = req.body.itemId
    try {
      const items = await ItemService.deleteItem(itemId)
      res.status(StatusCodes.OK).json(items)
    } catch (error) {
      res.json({ message: 'Error deleting item' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async findItemById (req, res) {
    const itemId = req.body.itemId
    try {
      const items = await ItemService.findItemById(itemId)
      res.status(StatusCodes.OK).json(items)
    } catch (error) {
      res.json({ message: 'Error finding item' }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = ItemController
