const TypeItem = require('../models/TypeItem')

class TypeItemRepository {
  static async createTypeItem (typeItemName) {
    const typeItem = await new TypeItem({ typeItemName })
    return typeItem
  }

  static async editTypeItemNameTypeItem (id, typeItemName) {
    const typeItem = await TypeItem.findByIdAndUpdate(id, { typeItemName }, { new: true })
    return typeItem
  }

  static async deleteTypeItem (id) {
    await TypeItem.findByIdAndDelete(id)
    return true
  }

  static async findAllTypeItems () {
    const typeItems = await TypeItem.find()
    return typeItems
  }

  static async findTypeItemById (id) {
    const typeItem = await TypeItem.findById(id)
    return typeItem
  }
}

module.exports = TypeItemRepository
