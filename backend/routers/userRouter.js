const express = require('express')
const userController = require('../controllers/userController.js')
const router = new express.Router()

router.get('/users', userController.getAll)
router.post('/users', userController.create)

module.exports = router
