// const Sequelize = require('sequelize')
// const Op = Sequelize.Op;
// const errorHandler = require('../utils/errorHandler.js')
// const Products = require('../models/Products')

module.exports.getRecipe = async function (req, res) {
  try {
    console.log(req.params.id)
    res.status(200).json({mess: 'recipe'})
  } catch (err) {
    console.log(err);
  }
}
