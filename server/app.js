const express= require('express')
const bodyParser = require('body-parser')
const sequelize = require('./utils/dbConnect')
// const passport = require('passport')
const cors = require('cors')
// const morgan = require('morgan')
const multer  = require('multer')

const authRoutes = require('./routes/authRoutes')
const mealPlanerRoutes = require('./routes/mealPlanerRoutes')
const foodCalorieTableRoutes = require('./routes/foodCalorieTableRoutes')
const recipesBookRoutes = require('./routes/recipesBookRoutes')
const recipeRoutes = require('./routes/recipeRoutes')
const trainingDiaryRoutes = require('./routes/trainingDiaryRoutes')
const ExercisesRoutes = require('./routes/ExercisesRoutes')

const settingsRoutes = require('./routes/settingsRoutes')

const app = express()

// Подключение к базе MySQL
// Параметр {force: true} перезапишет данные таблицы, если такая таблица цже есть
sequelize.sync()
  .then(() => console.log('MySQL has been connected :)'))


// Инициализация passport.js
// app.use(passport.initialize())
// Подключение модуля с настройками passport, который возвращает функцию, которую мы вызываем и передаем в неепеременную в которой лежит сам модуль паспорта. Л-логика...
// require('./middleware/passport.js')(passport)

// выводит в консоль информацию о запросах пришедших на сервер
// app.use(morgan('dev'))

// подключение bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

// Для получения доступа к папке напрямую
// localhost:3000/uploads/названиеКартинки.png
app.use('/uploads', express.static('uploads'))


// Routes
app.use('/api/auth', authRoutes)
app.use('/api/meal-planer', mealPlanerRoutes)
app.use('/api/food-calorie-table', foodCalorieTableRoutes)
app.use('/api/recipes-book', recipesBookRoutes)
app.use('/api/recipe', recipeRoutes)
app.use('/api/training-diary', trainingDiaryRoutes)
app.use('/api/exercises', ExercisesRoutes)


app.use('/api/settings', settingsRoutes)


module.exports = app
