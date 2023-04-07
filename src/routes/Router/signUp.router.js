const express = require('express')
const signUpController = require('../../controllers/signUp.controller')
const router = express.Router()

router.post('/signup', signUpController.create)

module.exports = router
