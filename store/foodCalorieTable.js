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
  ],
  modalActive: false
})

export const getters = {
  getProducts (state) {
    return state.products
  },
  getModalActive (state) {
    return state.modalActive
  }
}

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  addNewProduct (state, newProduct) {
    state.products.push(newProduct)
    state.modalActive = false
  },
  deleteProduct (state, product) {
    let targetProduct = null
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === product.product) {
        targetProduct = i
        break
      }
    }
    state.products.splice(targetProduct, 1)
  },
  setModalActive (state, isActive) {
    state.modalActive = isActive
  }
}

export const actions = {
  async getAllProducts ({ commit } ) {
    try {
      const products = await this.$axios.$get('http://localhost:3000/api/food-calorie-table')
      commit('setProducts', products)
    } catch (err) {
      console.log(err)
    }
  },
  async saveNewProduct ({ commit }, product) {
    try {
      const newProduct = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/saveNewProduct', product)
      commit('addNewProduct', newProduct)
      console.log(newProduct)
    } catch (err) {
      console.log(err)
    }
  },
  async removeProduct ({ commit }, product) {
    try {
      const remove = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/removeProduct', product)
      if (remove) {
        commit('deleteProduct', product)
      } else {
        console.log('Удалить продукт не удалось')
      }
    } catch (err) {
      console.log(err)
    }
  },
  async editProduct ({ commit }, product) {
    try {
      const editedProduct = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/editProduct', product)
      // commit('updateProduct', editedProduct)
      console.log(editedProduct)
    } catch (err) {
      console.log(err)
    }
  },
  async changeFavoriteParam ({ commit }, productParam) {
    try {
      const updatedProduct = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/changeFavoriteParam', productParam)
      // commit('updateProduct', productParam)
      console.log(updatedProduct)
    } catch (err) {
      console.log(err)
    }
  }
}
