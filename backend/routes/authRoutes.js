const express = require('express')
const router = express.Router()
const { registerUser, loginUser, resetPassword, forgotPassword } = require('../controllers/authController')


router.post('/login', loginUser)

router.post('/register', registerUser)

router.post('/forgotPassword', forgotPassword)

router.post('/resetPassword', resetPassword)

module.exports = router