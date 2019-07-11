const express = require('express')
const controller = require('../controllers/nutritionDiary')
const router = express.Router()

// localhost:3000/api/nutrition-diary/meal-planer
router.get('/meal-planer', controller.getCurrentDayMealPlaner)

// localhost:3000/api/nutrition-diary/food-calorie-table
router.get('/food-calorie-table', controller.getAllProducts)
router.post('/food-calorie-table/create-product', controller.createProduct)

module.exports = router
