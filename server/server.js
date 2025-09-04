const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRouter = require('./src/routes/userRoutes')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI

app.get('/', (req, res) => {
  res.send('Servidor a funcionar!')
})

app.listen(5000, () => {
  console.log('Servidor a funcionar em http://localhost:5000')
})

mongoose.connect(MONGO_URI)
  .then(() => console.log('Ligado ao Mongo'))
  .catch(() => console.log('Erro ao ligar ao Mongo'))

app.use('/user', userRouter)
