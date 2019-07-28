const express = require('express')
const passport = require('passport')
const controller = require('../controllers/nutritionDiary')
const router = express.Router()

// passport не дает выполнять корректно fetch запросы axios. 
// перепроверить как работает паспорт и вообще авторизация и перенастроить . поправить все

// http://localhost:3000/api/nutrition-diary/meal-planer
router.get('/meal-planer', controller.getCurrentDayMealPlanerInfo)
router.patch('/meal-planer/update-meal-parts', controller.updateMealParts)
router.patch('/meal-planer/update-target-protein', controller.updateMealPlanerTargetProtein)
router.patch('/meal-planer/update-target-fats', controller.updateMealPlanerTargetFats)
router.patch('/meal-planer/update-target-carb', controller.updateMealPlanerTargetCarb)

// http://localhost:3000/api/nutrition-diary/food-calorie-table
router.get('/food-calorie-table', controller.getAllProducts)
router.post('/food-calorie-table/create-product', controller.createProduct)

// Общие роуты для nutrition-diary, используемые на разных страницах в Дневнике питания
// http://localhost:3000/api/nutrition-diary/get-all-products
router.post('/get-all-products', controller.getAllProducts)

module.exports = router
