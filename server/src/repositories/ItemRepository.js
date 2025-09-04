const Item = require('../models/Item')

class ItemRepository {
  static async createItem (nameItem, price) {
    const item = await new Item({ nameItem, price })
    return item
  }

  static async editNameItemItem (id, nameItem) {
    const item = await Item.findByIdAndUpdate(id, { nameItem }, { new: true })
    return item
  }

  static async editPriceItem (id, price) {
    const item = await Item.findByIdAndUpdate(id, { price }, { new: true })
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
