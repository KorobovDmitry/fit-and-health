const BASE_URL = process.env.baseUrl

export const state = () => ({
  recipe: null
})

export const getters = {}

export const mutations = {
  setRecipe (state, Recipe) {
    state.recipe = Recipe
  },
  updateProductWeight (state, newProductWeight) {
    for (let i = 0; i < state.recipe.products.length; i++) {
      if (state.recipe.products[i].id === newProductWeight.id) {
        state.recipe.products[i].weight = newProductWeight.weight
        break
      }
    }
  }
}

export const actions = {
  async fetchRecipe ({ commit }, recipe) {
    try {
      const Recipe = await this.$axios.$get(`${BASE_URL}/api/recipe/${recipe}`)

      commit('setRecipe', Recipe)
      // console.log(Recipe)
    } catch (err) {
      console.log(err)
    }
  }
}
