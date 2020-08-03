const BASE_URL = process.env.baseUrl

export const state = () => ({
  mainTrainingProgram: undefined
})

export const getters = {}

export const mutations = {
  setMainTrainingProgram (state, MainTrainingProgram) {
    state.mainTrainingProgram = MainTrainingProgram
  }
}

export const actions = {
  async fetchMainTrainingProgram ({ commit } ) {
    try {
      const MainTrainingProgram = await this.$axios.$get(`${BASE_URL}/api/training-diary`)
      commit('setMainTrainingProgram', MainTrainingProgram)
      console.log(MainTrainingProgram)
    } catch (err) {
      console.log(err)
    }
  }
}
