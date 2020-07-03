const Sequelize = require('sequelize')
// const Op = Sequelize.Op;
// const errorHandler = require('../utils/errorHandler.js')
// const Products = require('../models/Products')

module.exports.fetchExercisesList = async function (req, res) {
  try {
    res.status(200).json({message: 'exercises fetched'})
  } catch (err) {
    console.log(err)
  }

}