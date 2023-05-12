const express = require('express')
const userController = require('../controllers/userController.js')
const router = new express.Router()

router.get('/users', userController.getAll)
router.post('/registration', userController.create)
router.post('/login', userController.login)

module.exports = router
