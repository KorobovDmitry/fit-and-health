const moment = require('moment')
const jwtDecode = require('jwt-decode')
const MealPlanerDay = require('../models/MealPlanerDay')
const UserParams = require('../models/UserParams')
const Product = require('../models/Product')
const errorHandler = require('../utils/errorHandler.js')

// Meal Planer
module.exports.getCurrentDayMealPlanerInfo = async function (req, res) {

  try {
    const token = req.headers.authorization
    const decoded_token = jwtDecode(token)
    const currentDate = moment().format('DD.MM.YYYY')
    const lastMealPlanerDay = await MealPlanerDay
      .findOne({})
      .populate({
        path: 'mealParts.products.productId',
        select: '_id productInfo.title productInfo.protein productInfo.fats productInfo.carb productInfo.kkal'
      })
      .sort({$natural:-1})
    const lastWeightParams = await UserParams
      .findOne({}, {currentWeight: true, targetWeight: true, height: true, userId: true, _id: false})
      .populate('userId', 'gender birthday activity')
      .sort({$natural:-1})

    if (!lastMealPlanerDay) {
      // Если не найдено ни одной записи о рационе Meal Planer создать новую с начальными данными
      const newMealPlanerDay = await new MealPlanerDay({
        userId: decoded_token.userId,
        date: currentDate,
        targetProtein: 0,
        targetFats: 0,
        targetCarb: 0,
        mealParts: []
      }).save()
      // Вернуть новый объект дополненный currentWeight и targetWeight
      const newMealPlanerDayData = {
        date: currentDate,
        targetProtein: newMealPlanerDay.targetProtein,
        targetFats: newMealPlanerDay.targetFats,
        targetCarb: newMealPlanerDay.targetCarb,
        mealParts: newMealPlanerDay.mealParts,
        currentWeight: lastWeightParams.currentWeight || 0,
        targetWeight: lastWeightParams.targetWeight || 0,
      }
      res.status(200).json(newMealPlanerDayData)
    } else if (currentDate === lastMealPlanerDay.date) {
      // Если запись найдена и последняя запись выполнена текущим числом возвращаем дополненный объект содержащий currentWeight и targetWeight

      const lastMealPlanerDayData = {
        date: lastMealPlanerDay.date,
        targetProtein: lastMealPlanerDay.targetProtein,
        targetFats: lastMealPlanerDay.targetFats,
        targetCarb: lastMealPlanerDay.targetCarb,
        mealParts: lastMealPlanerDay.mealParts,
        currentWeight: lastWeightParams.currentWeight || 0,
        targetWeight: lastWeightParams.targetWeight || 0
      }

      // Формируем корректный объект products вида --> {_id: '', productInfo: {}, currentWeight: 0 }
      for (let i = 0; i < lastMealPlanerDayData.mealParts.length; i++) {
        for (let p = 0; p < lastMealPlanerDayData.mealParts[i].products.length; p++) {
          let newProduct = {
            _id: lastMealPlanerDayData.mealParts[i].products[p].productId._id,
            productInfo: {
              title: lastMealPlanerDayData.mealParts[i].products[p].productId.productInfo.title,
              protein: lastMealPlanerDayData.mealParts[i].products[p].productId.productInfo.protein,
              fats: lastMealPlanerDayData.mealParts[i].products[p].productId.productInfo.fats,
              carb: lastMealPlanerDayData.mealParts[i].products[p].productId.productInfo.carb,
              kkal: lastMealPlanerDayData.mealParts[i].products[p].productId.productInfo.kkal
            },
            currentWeight: lastMealPlanerDayData.mealParts[i].products[p].currentWeight
          }
          lastMealPlanerDayData.mealParts[i].products[p] = newProduct
        }
      }

      res.status(200).json(lastMealPlanerDayData)
    } else {
      // Если запись найдена, но даты не совпали, тогда скопировать нуные данные из последней записи и создать новую запись с текущей датой
      const currentMealPlanerDay = await new MealPlanerDay({
        userId: decoded_token.userId,
        date: currentDate,
        targetProtein: lastMealPlanerDay.targetProtein,
        targetFats: lastMealPlanerDay.targetFats,
        targetCarb: lastMealPlanerDay.targetCarb,
        mealParts: lastMealPlanerDay.mealParts
      }).save()
      // Вернуть новый объект дополненный currentWeight и targetWeight
      const currentMealPlanerDayData = {
        date: currentMealPlanerDay.date,
        targetProtein: currentMealPlanerDay.targetProtein,
        targetFats: currentMealPlanerDay.targetFats,
        targetCarb: currentMealPlanerDay.targetCarb,
        mealParts: currentMealPlanerDay.mealParts,
        currentWeight: lastWeightParams.currentWeight || 0,
        targetWeight: lastWeightParams.targetWeight || 0,
      }

      // Формируем корректный объект products вида --> {_id: '', productInfo: {}, currentWeight: 0 }
      for (let i = 0; i < currentMealPlanerDayData.mealParts.length; i++) {
        for (let p = 0; p < currentMealPlanerDayData.mealParts[i].products.length; p++) {
          let newProduct = {
            _id: currentMealPlanerDayData.mealParts[i].products[p].productId._id,
            productInfo: {
              title: currentMealPlanerDayData.mealParts[i].products[p].productId.productInfo.title,
              protein: currentMealPlanerDayData.mealParts[i].products[p].productId.productInfo.protein,
              fats: currentMealPlanerDayData.mealParts[i].products[p].productId.productInfo.fats,
              carb: currentMealPlanerDayData.mealParts[i].products[p].productId.productInfo.carb,
              kkal: currentMealPlanerDayData.mealParts[i].products[p].productId.productInfo.kkal
            },
            currentWeight: currentMealPlanerDayData.mealParts[i].products[p].currentWeight
          }
          currentMealPlanerDayData.mealParts[i].products[p] = newProduct
        }
      }

      res.status(200).json(currentMealPlanerDayData)
    }
  } catch (err) {
    errorHandler(res, err)
  }
}

module.exports.updateMealParts = async function (req, res) {
  // const selectedDate = req.query.date
  // console.log(selectedDate)

  const currentDate = moment().format('DD.MM.YYYY')
  const updatedMealPlanerDay = await MealPlanerDay
    .findOneAndUpdate(
      {date: currentDate},
      { $set: { mealParts: req.body.updatedMealParts }},
      {new: true}
    )
    .populate({
      path: 'mealParts.products.productId',
      select: 'productInfo.title productInfo.protein productInfo.fats productInfo.carb productInfo.kkal'
    })

    // Формируем корректный объект products вида --> {_id: '', productInfo: {}, currentWeight: 0 }
    for (let i = 0; i < updatedMealPlanerDay.mealParts.length; i++) {
      for (let p = 0; p < updatedMealPlanerDay.mealParts[i].products.length; p++) {
        let newProduct = {
          _id: updatedMealPlanerDay.mealParts[i].products[p].productId._id,
          productInfo: {
            title: updatedMealPlanerDay.mealParts[i].products[p].productId.productInfo.title,
            protein: updatedMealPlanerDay.mealParts[i].products[p].productId.productInfo.protein,
            fats: updatedMealPlanerDay.mealParts[i].products[p].productId.productInfo.fats,
            carb: updatedMealPlanerDay.mealParts[i].products[p].productId.productInfo.carb,
            kkal: updatedMealPlanerDay.mealParts[i].products[p].productId.productInfo.kkal
          },
          currentWeight: updatedMealPlanerDay.mealParts[i].products[p].currentWeight
        }
        updatedMealPlanerDay.mealParts[i].products[p] = newProduct
      }
    }

  res.status(200).json(updatedMealPlanerDay.mealParts)
}

module.exports.updateMealPlanerTargetProtein = async function (req, res) {
  const currentDate = moment().format('DD.MM.YYYY')
  const updatedMealPlanerDay = await MealPlanerDay
    .findOneAndUpdate(
      {date: currentDate},
      { $set: { targetProtein: req.body.protein }},
      {new: true}
    )
  res.status(200).json(updatedMealPlanerDay.targetProtein)
}

module.exports.updateMealPlanerTargetFats = async function (req, res) {
  const currentDate = moment().format('DD.MM.YYYY')
  const updatedMealPlanerDay = await MealPlanerDay
    .findOneAndUpdate(
      {date: currentDate},
      { $set: { targetFats: req.body.fats }},
      {new: true}
    )
  res.status(200).json(updatedMealPlanerDay.targetFats)
}

module.exports.updateMealPlanerTargetCarb = async function (req, res) {
  const currentDate = moment().format('DD.MM.YYYY')
  const updatedMealPlanerDay = await MealPlanerDay
    .findOneAndUpdate(
      {date: currentDate},
      { $set: { targetCarb: req.body.carb }},
      {new: true}
    )
  res.status(200).json(updatedMealPlanerDay.targetCarb)
}

// food calorie table
module.exports.createProduct = async function (req, res) {
  try {
    const token = req.headers.authorization
    const decoded_token = jwtDecode(token)

    const product = await new Product({
      productInfo: {
        title: req.body.productInfo.title,
        category: req.body.productInfo.category,
        categoryIcon: req.body.productInfo.categoryIcon,
        protein: req.body.productInfo.protein,
        fats: req.body.productInfo.fats,
        carb: req.body.productInfo.carb,
        kkal: req.body.productInfo.kkal,
        water: req.body.productInfo.water,
        ash: req.body.productInfo.ash,
        // vitamins: req.body.productInfo.vitamins,
        sugar: req.body.productInfo.sugar,
        cellulose: req.body.productInfo.cellulose,
        farina: req.body.productInfo.farina,
        cholesterol: req.body.productInfo.cholesterol,
        transFats: req.body.productInfo.transFats,
        userProduct: req.body.productInfo.userProduct,
        favorites: req.body.productInfo.favorites,
        userId: decoded_token.userId,
      },
      currentWeight: req.body.currentWeight
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
      .find({$or: [{'productInfo.userId': decoded_token.userId}, {'productInfo.userProduct': false}]})
      .sort({'productInfo.title': 1})
      // .sort({title: -1})
    res.status(200).json(products)
  } catch (err) {
    errorHandler(res, err)
  }
}
