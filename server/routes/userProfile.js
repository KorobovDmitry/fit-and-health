const express = require('express')
const controller = require('../controllers/userProfile')
const router = express.Router()

// http://localhost:3000/api/user-profile/user-info
router.post('/user-info', controller.getUserProfileInfo)


module.exports = router
