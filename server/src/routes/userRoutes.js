const UserController = require('../controllers/UserController')
const express = require('express')

const userRouter = express.Router()

userRouter.get('/find-all', UserController.findAllUsers)

module.exports = userRouter
