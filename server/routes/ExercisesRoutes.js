const express = require('express')
// const passport = require('passport')
const controller = require('../controllers/ExercisesControllers')
const router = express.Router()

// passport не дает выполнять корректно fetch запросы axios. 
// перепроверить как работает паспорт и вообще авторизация и перенастроить . поправить все

// http://localhost:3000/api/exercises
router.get('/', controller.fetchExercisesList)


module.exports = router
