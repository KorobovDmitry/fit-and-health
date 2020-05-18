export const state = () => ({
  products: [1],
  categories: ['Мясо', 'Рыба', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
  productsModalActive: false,
})

export const getters = {
  getProductsModalActive (state) {
    return state.productsModalActive
  },
  getAllProducts (state) {
    return state.products
  },
  getCategories (state) {
    return state.categories
  }
}

export const mutations = {
  setProductsModalActive (state) {
    state.productsModalActive = !state.productsModalActive
    if (state.productsModalActive) {
      document.querySelector('#__nuxt').style.marginTop = `-${window.pageYOffset}px`
      document.querySelector('body').classList.add('body-overflow')
    } else {
      let currentScroll = parseFloat(document.querySelector('#__nuxt').style.marginTop) * -1
      document.querySelector('#__nuxt').style.marginTop = '0px'
      document.querySelector('body').classList.remove('body-overflow')
      window.scrollTo(0, currentScroll)
    }
  },
  setAllProducts (state, allProducts) {
    state.products = allProducts
  }
}

export const actions = {
  async fetchAllProducts ({ commit }) {
    try {
      const allProducts = await this.$axios.$post('http://localhost:3000/api/nutrition-diary/get-all-products')

      commit('setAllProducts', allProducts)
      // console.log(allProducts)
    } catch (e) {
      console.log(e)
    }
  },
  async createProduct ({commit}, product) {
    try {
      const createdProduct = await this.$axios.$post('http://localhost:3000/api/nutrition-diary/food-calorie-table/create-product', product)
      console.log(createdProduct)

      // commit('updateProducts', createdProduct)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}
