const express = require('express')
// const passport = require('passport')
const controller = require('../controllers/foodCalorieTableControllers')
const router = express.Router()

// passport не дает выполнять корректно fetch запросы axios. 
// перепроверить как работает паспорт и вообще авторизация и перенастроить . поправить все

// http://localhost:3000/api/food-calorie-table
router.get('/', controller.getAllProducts)
router.post('/saveNewProduct', controller.saveNewProduct)
router.post('/removeProduct', controller.removeProduct)
router.post('/editProduct', controller.editProduct)
router.post('/changeFavoriteParam', controller.changeFavoriteParam)

module.exports = router
