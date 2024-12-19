const express = require('express')
const router = express.Router()
const { addSkill,getSkills} = require('../controllers/skillController')
const { isLoggedin } = require('../controllers/authController')

router.post('/addSkill', isLoggedin, addSkill)
router.get('/getSkills', isLoggedin, getSkills)



module.exports = router