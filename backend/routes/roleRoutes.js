const express = require('express')
const router = express.Router()
const { addRoles} = require('../controllers/roleController')


router.post('/', addRoles)


module.exports = router