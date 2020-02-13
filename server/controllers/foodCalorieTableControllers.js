const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const errorHandler = require('../utils/errorHandler.js')
const Products = require('../models/Products')

module.exports.getAllProducts = async function (req, res) {
  try {

    // Получить все продукты (базовые и конкретного юзера с ID)
    // SELECT * FROM products WHERE userProduct = null OR userId = 12;
    Products.findAll({
      where: {
        [Op.or]: [{userProduct: null}, {userId: 1}]
      }
    }).then(products => {
      res.status(200).json(products)
    })

  } catch (err) {
    errorHandler(res, err)
  }
}
