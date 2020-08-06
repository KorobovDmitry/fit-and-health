const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const Products = require('../models/Products')
const jwt = require('jsonwebtoken')
const keys = require('../keys')

module.exports.getAllProducts = async function (req, res) {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, keys.jwt)

      const AllProducts = await Products.findAll({
        where: {
          [Op.or]: [{userProduct: 0}, {userId: decodedToken.userId}]
        }
      })

      res.status(200).json(AllProducts)
    } else {
      res.status(401).json({message: 'Необходима авторизация'})
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.saveNewProduct = async function (req, res) {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, keys.jwt)

      const CreatedProduct = await Products.create({
        title: req.body.title,
        weight: req.body.weight,
        protein: req.body.protein,
        fats: req.body.fats,
        carb: req.body.carb,
        kkal: req.body.kkal,
        category: req.body.category,
        favorite: req.body.favoriteProduct,
        userProduct: req.body.userProduct,
        userId: decodedToken.userId
      })

      res.status(200).json(CreatedProduct)
    } else {
      res.status(401).json({message: 'Необходима авторизация'})
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.removeProduct = async function (req, res) {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, keys.jwt)

      const RemoveProduct = await Products.destroy({
        where: {
          [Op.and]: [{id: req.body.product}, {userId: decodedToken.userId}]
        }
      })

      res.status(200).json(RemoveProduct)
    } else {
      res.status(401).json({message: 'Необходима авторизация'})
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.editProduct = async function (req, res) {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, keys.jwt)

      Products.update(
        req.body.updateProduct,
        // updateProduct Должен содержать в себе стандартный набор параметров согласно модели для БД "Products"
        // {
        //   title: req.body.title,
        //   weight: req.body.weight,
        //   protein: req.body.protein,
        //   fats: req.body.fats,
        //   carb: req.body.carb,
        //   kkal: req.body.kkal,
        //   category: req.body.category,
        //   favorite: req.body.favoriteProduct,
        //   userProduct: req.body.userProduct,
        //   userId: req.body.userId
        // },
        {
          where: {
            [Op.and]: [{id: req.body.productId}, {userId: decodedToken.userId}]
          }
        }
      )
      res.status(200).json(product)
    } else {
      res.status(401).json({message: 'Необходима авторизация'})
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.changeFavoriteParam = async function (req, res) {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, keys.jwt)

      const UpdatedProduct = await Products.update(
        req.body.newParam, // должно быть в виде { title: 'foooo', fats: 'baaaaaar'}
        {
          where: {
            [Op.and]: [{id: req.body.productId}, {userId: decodedToken.userId}]
          }
        }
      )

      res.status(200).json(UpdatedProduct[0])
    }
  } catch (error) {
    console.log(error)
  }
}
