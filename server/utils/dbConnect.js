const Sequelize = require('sequelize')

//  Подключение к локальной базе MySQL
const DB_NAME = 'fh'
const USER_NAME = 'root'
const USER_PASSWORD = ''
const sequelize = new Sequelize(DB_NAME, USER_NAME, USER_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize
