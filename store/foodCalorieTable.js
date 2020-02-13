export const state = () => ({
  products: [
    {
      id: null,
      title: '',
      weight: null,
      protein: null,
      fats: null,
      carb: null,
      kkal: null,
      category: '',
      favoriteProduct: false,
      userProduct: false,
      userId: null
    }
  ]
})

export const getters = {
  getProducts (state) {
    return state.products
  }
}

export const mutations = {
  setProducts (state, products) {
    state.products = products
  }
}

export const actions = {
  async getAllProducts ({ commit } ) {
    try {
      const products = await this.$axios.$get('http://localhost:3000/api/food-calorie-table')
      commit('setProducts', products)
    } catch (e) {
      console.log(e)
    }
  }
}
