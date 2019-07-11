const moment = require('moment')
const jwtDecode = require('jwt-decode')
const MealPlanerDay = require('../models/MealPlanerDay')
const UserParams = require('../models/UserParams')
const Product = require('../models/Product')
const errorHandler = require('../utils/errorHandler.js')

// Meal Planer
module.exports.getCurrentDayMealPlaner = async function (req, res) {
  // Подтянуть данные пользователя о текущем весе и о желаемом весе
  // поскольку параметры пользователя должны отслеживаться каждый день то под них нужно сделать отдельную таблицу
  // а значит не получится делать ref ссылку на данные. Нужно делать запрос к базе и формировать объект который будем отправлять пользователю в ответ
  try {
    const token = req.headers.authorization
    const decoded_token = jwtDecode(token)
    const currentDate = moment().format('DD.MM.YYYY')
    const lastMealPlanerDay = await MealPlanerDay.findOne({}).sort({$natural:-1})
    const lastWeightParams = await UserParams
      .findOne({}, {currentWeight: true, targetWeight: true, height: true, userId: true, _id: false})
      .populate('userId', 'gender birthday activity')
      .sort({$natural:-1})
    console.log(lastWeightParams)

    if (!lastMealPlanerDay) {
      // Если не найдено ни одной записи о рационе Meal Planer
      const currentDayMealPlaner = await new MealPlanerDay({
        date: currentDate,
        targetProtein: 0,
        targetFats: 0,
        targetCarb: 0,
        userId: decoded_token.userId
      }).save()
      res.status(200).json(currentDayMealPlaner)
    } else if (currentDate === lastMealPlanerDay.date) {
      // Если запись найдена и последняя запись выполнена текущим числом, тогда отправить данные пользователю на фронтенд
      const returnData = {
        targetProtein: lastMealPlanerDay.targetProtein,
        targetFats: lastMealPlanerDay.targetFats,
        targetCarb: lastMealPlanerDay.targetCarb,
        currentWeight: lastWeightParams.currentWeight,
        targetWeight: lastWeightParams.targetWeight,
        selectedDay: lastMealPlanerDay.date,
        selectedDayMealParts: [{}]
      }
      res.status(200).json(returnData)
    } else {
      // Если запись найдена, но даты не совпали, тогда скопировать нуные данные из последней записи и создать новую запись с текущей датой
      const currentDayMealPlaner = await new MealPlanerDay({
        date: currentDate,
        targetProtein: lastMealPlanerDay.targetProtein,
        targetFats: lastMealPlanerDay.targetFats,
        targetCarb: lastMealPlanerDay.targetCarb,
        userId: decoded_token.userId
      }).save()
      res.status(200).json(currentDayMealPlaner)
    }
  } catch (err) {
    errorHandler(res, err)
  }
}

// food calorie table
module.exports.createProduct = async function (req, res) {
  try {
    const token = req.headers.authorization
    const decoded_token = jwtDecode(token)

    const product = await new Product({
      title: req.body.title,
      category: req.body.category,
      categoryIcon: req.body.categoryIcon,
      protein: req.body.protein,
      fats: req.body.fats,
      carb: req.body.carb,
      kkal: req.body.kkal,
      water: req.body.water,
      ash: req.body.ash,
      // vitamins: req.body.vitamins,
      sugar: req.body.sugar,
      cellulose: req.body.cellulose,
      farina: req.body.farina,
      cholesterol: req.body.cholesterol,
      transFats: req.body.transFats,
      userProduct: req.body.userProduct,
      favorites: req.body.favorites,
      userId: decoded_token.userId,
    }).save()
    res.status(200).json(product)
  } catch (err) {
    errorHandler(res, err)
  }
}

module.exports.getAllProducts = async function (req, res) {
  const token = req.headers.authorization
  const decoded_token = jwtDecode(token)
  try {
    const products = await Product
      .find({$or: [{userId: decoded_token.userId}, {userProduct: false}]})
      .sort({title: 1})
      // .sort({title: -1})
    res.status(200).json(products)
  } catch (err) {
    errorHandler(res, err)
  }
}

module.exports.getUserProducts = async function (req, res) {
  const token = req.headers.authorization
  const decoded_token = jwtDecode(token)
  try {
    const products = await Product.find({user: decoded_token.userId})
    res.status(200).json(products)
  } catch (err) {
    errorHandler(res, err)
  }
}
