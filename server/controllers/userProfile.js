const jwtDecode = require('jwt-decode')
const User = require('../models/User.js')
const errorHandler = require('../utils/errorHandler.js')

module.exports.getUserProfileInfo = async function (req, res) {
  const token = req.headers.authorization
  const decoded_token = jwtDecode(token)

  const candidate = await User.findOne({_id: decoded_token.userId})

  if (candidate) {
    const userInfo = {
      email: candidate.email,
      lastName: candidate.lastName,
      firstName: candidate.firstName,
      middleName: candidate.middleName,
      birthday: candidate.birthday,
      phoneNumber: candidate.phoneNumber,
      gender: candidate.gender,
      activity: candidate.activity
    }
    res.status(200).json(userInfo)
  } else {
    res.status(404).json({
      message: 'пользователь не найден'
    })
  }
}
