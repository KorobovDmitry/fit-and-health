const express= require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const morgan = require('morgan')
const keys = require('./keys')

const authRoutes = require('./routes/auth.js')
const nutritionDiaryRoutes = require('./routes/nutritionDiary')

const app = express()

//Подключение к локальной базе mongoDB
mongoose.connect(keys.mongo_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB has been connected :)'))
  .catch(err => console.log(err))

// Инициализация passport.js
app.use(passport.initialize())
// Подключение модуля с настройками passport, который возвращает функцию, которую мы вызываем и передаем в неепеременную в которой лежит сам модуль паспорта. Л-логика...
require('./middleware/passport.js')(passport)

// выводит в консоль информацию о запросах пришедших на сервер
app.use(morgan('dev'))

// подключение bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

// Для получения доступа к папке напрямую
// localhost:5000/uploads/названиеКартинки.png
app.use('/uploads', express.static('uploads'))

app.use('/api/auth', authRoutes)
app.use('/api/nutrition-diary', nutritionDiaryRoutes)

module.exports = app
