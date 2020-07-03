const Sequelize = require('sequelize')
const sequelize = require('../utils/dbConnect')

const Exercises = sequelize.define('exercises', {
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  technique_description: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Exercises