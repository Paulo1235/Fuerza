const Item = require('../models/Item')

class ItemRepository {
  static async createItem (data) {
    const item = await new Item(data)
    return item
  }

  static async editItem (id, data) {
    const item = await Item.findByIdAndUpdate(id, data, { new: true })
    return item
  }

  static async deleteItem (id) {
    await Item.findByIdAndDelete(id)
    return true
  }

  static async findAllItems () {
    const items = await Item.find()
    return items
  }

  static async findItemById (id) {
    const item = await Item.findById(id)
    return item
  }
}

module.exports = ItemRepository
