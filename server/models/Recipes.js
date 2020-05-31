const Sequelize = require('sequelize')
const sequelize = require('../utils/dbConnect')

// Описание модели таблицы в БД MySQL
const Recipes = sequelize.define('recipes', {
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  // weight: {
  //   type: Sequelize.FLOAT,
  //   allowNull: true
  // },
  // protein: {
  //   type: Sequelize.FLOAT,
  //   allowNull: true
  // },
  // fats: {
  //   type: Sequelize.FLOAT,
  //   allowNull: true
  // },
  // carb: {
  //   type: Sequelize.FLOAT,
  //   allowNull: true
  // },
  // kkal: {
  //   type: Sequelize.FLOAT,
  //   allowNull: true
  // },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: true
  // }
})

module.exports = Recipes
