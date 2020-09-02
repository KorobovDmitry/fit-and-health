const BASE_URL = process.env.baseUrl

export const state = () => ({
  recipe: null
})

export const getters = {}

export const mutations = {
  setRecipe (state, Recipe) {
    state.recipe = Recipe
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
