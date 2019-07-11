export const state = () => ({
  totalProducts: 0,
  categories: null,
  favorites: null,
  myProducts: null,
  productsList: [],
  categoryOptions: ['Мясо', 'Рыба', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки']
})

export const getters = {
  getTotalProductsAmount (state) {
    return state.totalProducts
  },
  getCategoriesAmount (state) {
    return state.categories
  },
  getFavoritesAmount (state) {
    return state.favorites
  },
  getMyProductsAmount (state) {
    return state.myProducts
  },
  getProductsList (state) {
    return state.productsList
  }
  // эта функция проходит по всем продуктам и получает кол-во категорий
  // getCategoryAmount (state) {
  //   let categoryArray = []
  //   for (let i = 0; i < state.productsList.length; i++) {
  //     if (categoryArray.indexOf(state.productsList[i].category) !== -1) {
  //       // console.log(`КАТЕГОРИЯ ${state.productsList[i].category} ЕСТЬ В МАССИВЕ`)
  //     } else {
  //       // console.log(`ДОБАВИТЬ ${state.productsList[i].category} В МАССИВ`)
  //       if (state.productsList[i].category !== null) {
  //         categoryArray.push(state.productsList[i].category)
  //       }
  //     }
  //     // console.log(categoryArray)
  //   }
  //   return categoryArray
  // }
}

export const mutations = {
  setProductsList (state, products) {
    state.productsList = products
  },
  setOverviewProductsInfo (state) {
    // кол-во всех продуктов
    state.totalProducts = state.productsList.length

    //кол-во категорий
    state.categories = state.categoryOptions.length

    // кол-во избранных продуктов
    let favoritesProductsAmount = 0
    for (let i = 0; i < state.productsList.length; i++) {
      if (state.productsList[i].favorites) {
        favoritesProductsAmount++
      }
    }
    state.favorites = favoritesProductsAmount

    // кол-во продуктов добавленных user'ом
    let userProductsAmount = 0
    for (let i = 0; i < state.productsList.length; i++) {
      if (state.productsList[i].userProduct) {
        userProductsAmount++
      }
    }
    state.myProducts = userProductsAmount
  }
}

export const actions = {
  async getAllProducts ({commit}) {
    try {
      // console.log('products')
      const products = await this.$axios.$get('http://localhost:3000/api/nutrition-diary/food-calorie-table')
      // console.log(products)
      commit('setProductsList', products)
      commit('setOverviewProductsInfo')
    } catch (e) {
      console.log(e)
    }
  },
  async createProduct ({commit}, product) {
    try {
      const createdProduct = await this.$axios.$post('http://localhost:3000/api/nutrition-diary/food-calorie-table/create-product', product)
      console.log(createdProduct)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}
