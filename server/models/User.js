const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String
  },
  birthday: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', userSchema)
