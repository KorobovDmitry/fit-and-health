const Sequelize = require('sequelize')
// const Op = Sequelize.Op;
// const errorHandler = require('../utils/errorHandler.js')
const Recipes = require('../models/Recipes')

module.exports.getRecipe = async function (req, res) {
  try {
    // console.log(req.params.id)
    const tragetRecipeId = req.params.id.split('-')[1]
    // console.log(tragetRecipeId)

    const Recipe = await Recipes.findOne({
      where: {
        id: tragetRecipeId
      }
    })

    res.status(200).json(Recipe)
  } catch (err) {
    console.log(err);
  }
}
