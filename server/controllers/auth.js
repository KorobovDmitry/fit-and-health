const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode')
const keys = require('../keys')
const User = require('../models/User.js')
const errorHandler = require('../utils/errorHandler.js')

module.exports.register = async function (req, res) {
  // метод в mongoose --> findOne возможно устарел и нужно использовать другой (смотреть в документации)
  //иначе выводится ошибка depricated
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    // если пользователь существеует то возвращаем ошибку
    res.status(409).json({
      message: 'Такой email уже занят. Введите другой.'
    })
  } else {
    // создать пользователя в БД
    try {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = await new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        birthday: req.body.birthday,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        activity: req.body.activity
      }).save()
      res.status(201).json(user)
    } catch (error) {
      errorHandler(res, error)
    }
  }
}

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    // Проверяем пароль, пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

    if (passwordResult) {
      // Генерация токена
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 3600})

      // const userInfo = {
      //   email: candidate.email,
      //   lastName: candidate.lastName,
      //   firstName: candidate.firstName,
      //   middleName: candidate.middleName || '',
      //   birthday: candidate.birthday,
      //   phoneNumber: candidate.phoneNumber,
      //   gender: candidate.gender,
      //   activity: candidate.activity
      // }
      // Если пароль совпал тогда возвращаем пользователю токен для работы с защищенными разделами сайта и информацию о пользователе
      // res.status(200).json({
      //   token: `Bearer ${token}`,
      //   userInfo: userInfo
      // })
      res.status(200).json(token)
    } else {
      // Пароли не совпали
      res.status(401).json({
        message: 'пароль введен не верно. повторите попытку'
      })
    }
  } else {
    // Пользователя нет, ошибка
    res.status(404).json({
      message: 'пользователь с таким email не найден'
    })
  }
}
