import * as yup from 'yup'

const itemSchema = yup.object({
  nameItem: yup.string.min(1).max(50),
  price: yup.number.min(1),
  size: yup.string.min(9).max(9),
  color: yup.string.min(1).max(50),
  capacity: yup.number.min(9).max(9),
  material: yup.string.min(1).max(50),
  brand: yup.string.min(1).max(50),
  weight: yup.number.min(9).max(9)
})

module.exports = itemSchema
