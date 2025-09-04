const UserController = require('../controllers/userController')
const express = require('express')

const userRouter = express.Router()

userRouter.get('/find-all', UserController.findAllUsers)

module.exports = userRouter
