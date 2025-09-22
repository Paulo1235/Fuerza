import * as yup from 'yup'

const authSchema = yup.object({
  email: yup.string.min(1).max(50).email(),
  password: yup.string.min(1),
  verified: yup.boolean().default(false)
})

module.exports = authSchema
