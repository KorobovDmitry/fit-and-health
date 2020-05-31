// const Sequelize = require('sequelize')
// const Op = Sequelize.Op;
// const errorHandler = require('../utils/errorHandler.js')
const Recipes = require('../models/Recipes')

module.exports.getRecipes = async function (req, res) {
  Recipes.findAll({
    // where: {
    //   [Op.or]: [{userProduct: 0}, {userId: 1}]
    // }
  }).then( recipes => {
    res.status(200).json(recipes)
  }).catch(err=>console.log(err));
}
