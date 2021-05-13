const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/users', userController.index)
router.get('/users/:id', userController.show)
router.post('/users', userController.store)

module.exports = router