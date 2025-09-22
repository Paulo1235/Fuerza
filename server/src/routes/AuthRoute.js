const AuthController = require('../controllers/AuthController')
const express = require('express')

const authRoute = express.Router()

authRoute.get('/find-all/:id', AuthController.findAllAuths)

authRoute.get('/find/id/:id', AuthController.findAuthById)

authRoute.get('/create/:id', AuthController.createAuth)

authRoute.put('/edit/:id', AuthController.editAuth)

authRoute.delete('/delete/:id', AuthController.deleteAuth)

module.exports = authRoute
