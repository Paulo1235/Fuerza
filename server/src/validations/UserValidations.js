import * as yup from 'yup'

const userSchema = yup.object({
  userName: yup.string.min(3),
  birthDate: yup.date,
  rua: yup.string.min(10),
  door: yup.number.min(1),
  cp: yup.string.min(10)
})

module.exports = userSchema
