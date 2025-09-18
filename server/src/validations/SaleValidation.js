import * as yup from 'yup'

const saleSchema = yup.object({
  quantity: yup.string.min(1),
  totalValue: yup.number.min(1),
  contribuinte: yup.number.min(9).max(9)
})

module.exports = saleSchema
