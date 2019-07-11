const mongoose = require('mongoose')
// Дополнительная библиотека позволяющая сохранять Float числа с заданным кол-вом числе после запятой
const Float = require('mongoose-float').loadType(mongoose, 2)
const Schema = mongoose.Schema

const mealPlanerDaySchema = new Schema({
  date: {
    type: String
  },
  targetProtein: {
    type: Float
  },
  targetFats: {
    type: Float
  },
  targetCarb: {
    type: Float
  },
  selectedDayMealParts: {
    parts: [
      {
        title: {
          type: String
        },
        description: {
          type: String
        }
      }
    ]
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = mongoose.model('meal-planer-days', mealPlanerDaySchema)
