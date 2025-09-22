const itemSchema = require('../validations/itemSchema')
const ItemRepository = require('../repositories/ItemRepository')

class ItemService {
  static async createItem (data) {
    const validatedData = await itemSchema.validate(data, { abortEarly: false })

    const item = await ItemRepository.createItem(validatedData)
    return item
  }

  static async editItem (data) {
    const validatedData = await itemSchema.validate(data, { abortEarly: false })

    const item = await ItemRepository.editItem(validatedData)
    return item
  }

  static async findAllItems () {
    const items = await ItemRepository.findAllItems()
    if (!items) {
      throw new Error('Not found any item')
    }
    return items
  }

  static async deleteItem (id) {
    if (await ItemRepository.deleteItem(id)) {
      return true
    }
    return false
  }

  static async findItemById (id) {
    const item = await ItemRepository.findItemById(id)
    if (!item) {
      throw new Error('Not found this item')
    }
    return item
  }
}

module.exports = ItemService
