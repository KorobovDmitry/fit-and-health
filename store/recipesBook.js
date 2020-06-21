export const state = () => ({
  recipes: []
})

export const getters = {
  getRecipes (state) {
    return state.recipes
  }
}

export const mutations = {
  setRecipes (state, Recipes) {
    // Recipes.forEach(element => {
    //   element.products = JSON.parse(element.products)
    // })
    state.recipes = Recipes
  }
}

export const actions = {
  async fetchRecipes ({ commit }) {
    try {
      const Recipes = await this.$axios.$get('http://localhost:3000/api/recipes-book')

      commit('setRecipes', Recipes)
      // console.log(Recipes)
    } catch (e) {
      console.log(e)
    }
  }
}
