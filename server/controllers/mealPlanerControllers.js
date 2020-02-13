const errorHandler = require('../utils/errorHandler.js')
const MealPlanerInfos = require('../models/MealPlanerInfos')

module.exports.getMealPlanerInfo = async function (req, res) {
  try {

    // console.log(req.params)
    console.log(req.query)
    // console.log(req.body)

    // Дата по которой искать данные в БД для невника питания
    const mealPlanerTargetDay = req.query.date
    const token = req.headers.cookie
    const userId = null

    MealPlanerInfos.findOne({
      where: {
        // userId: userId,
        date: mealPlanerTargetDay
      }
    }).then(info => console.log(info))

    res.status(200).json({})

    // console.log(req.headers.cookie)
    // const dayInfo = await MealPlanerInfos.create({
    //   title: `Название дневного рациона ${req.query.date}`
    // })
    // res.status(200).json({dayInfo})
  } catch (err) {
    errorHandler(res, err)
  }
}

