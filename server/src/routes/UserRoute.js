const UserController = require('../controllers/UserController')
const express = require('express')

const userRoute = express.Router()

userRoute.get('/find-all/:id', UserController.findAllUsers)

userRoute.get('/find/:id', UserController.findUserById)

userRoute.post('/create/:id', UserController.createUser)

userRoute.get('/edit/:id', UserController.editUser)

userRoute.get('/delete/:id', UserController.deleteUser)

module.exports = userRoute
