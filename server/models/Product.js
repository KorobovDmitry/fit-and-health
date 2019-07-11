const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  categoryIcon: {
    type: String,
    default: ''
  },
  protein: {
    type: Number,
    required: true
  },
  fats: {
    type: Number,
    required: true
  },
  carb: {
    type: Number,
    required: true
  },
  kkal: {
    type: Number,
    required: true
  },
  water: {
    type: Number,
    default: null
  },
  ash: {
    type: Number,
    default: null
  },
  // vitamins: {
  //   items: [
  //     {
  //       title: String,
  //       default: null
  //     }
  //   ]
  // },
  sugar: {
    type: Number,
    default: null
  },
  cellulose: {
    type: Number,
    default: null
  },
  farina: {
    type: Number,
    default: null
  },
  cholesterol: {
    type: Number,
    default: null
  },
  transFats: {
    type: Number,
    default: null
  },
  userProduct: {
    type: Boolean,
    default: true
  },
  userId: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true
  },
  favorites: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('products', productSchema)
