const mongoose = require('mongoose')
// Дополнительная библиотека позволяющая сохранять Float числа с заданным кол-вом числе после запятой
const Float = require('mongoose-float').loadType(mongoose, 2)
const Schema = mongoose.Schema

const userParamsSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  currentWeight: {
    type: Float
  },
  targetWeight: {
    type: Float
  },
  height: {
    type: Float
  },
  activity: {
    type: Number,
    default: 1.2
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = mongoose.model('user-params', userParamsSchema)
