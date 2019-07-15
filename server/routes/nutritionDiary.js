const express = require('express')
const passport = require('passport')
const controller = require('../controllers/nutritionDiary')
const router = express.Router()

// passport не дает выполнять корректно fetch запросы axios. 
// перепроверить как работает паспорт и вообще авторизация и перенастроить . поправить все

// localhost:3000/api/nutrition-diary/meal-planer
router.get('/meal-planer', controller.getSelectedDayMealPlaner)
router.post('/meal-planer', controller.updateSelectedDayMealPlaner)

// localhost:3000/api/nutrition-diary/food-calorie-table
router.get('/food-calorie-table', controller.getAllProducts)
router.post('/food-calorie-table/create-product', controller.createProduct)

module.exports = router
