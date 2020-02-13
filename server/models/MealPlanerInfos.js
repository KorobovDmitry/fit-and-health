const Sequelize = require('sequelize')
const sequelize = require('../utils/dbConnect')

// Описание модели таблицы в БД MySQL
const MealPlanerInfos = sequelize.define('meal_planer_infos', {
  // id: {
  //   primaryKey: true,
  //   autoIncrement: true,
  //   allowNull: false,
  //   type: Sequelize.INTEGER
  // },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  date: {
    type: Sequelize.STRING,
    allowNull: true
  },
  targetProtein: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  targetFats: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  targetCarb: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  targetWeight: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  // marks: {
  //   // array whith strings
  // },
  // social: {
  //   // object
  // },
  // mealParts: {
  //   // array with object
  // }
})

module.exports = MealPlanerInfos
