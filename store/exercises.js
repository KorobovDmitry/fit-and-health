import { BASE_URL } from '../keys/settings'

export const state = () => ({
  exercises: []
})

export const getters = {
  getExercises (state) {
    return state.exercises
  }
}

export const mutations = {
  setExercises (state, ExercisesList) {
    let categories = []

    for (let i = 0; i < ExercisesList.length; i++) {

    }

    console.log(categories)


  },
  addNewExercises (state, savedExercise) {
    state.exercises.push(savedExercise)
  }
}

export const actions = {
  async fetchExercisesList ({ commit }) {
    try {
      const ExercisesList = await this.$axios.$get(`${BASE_URL}/api/exercises/`)

      // console.log(ExercisesList)
      commit('setExercises', ExercisesList)
    } catch (err) {
      console.log(err)
    }
  },
  async saveNewExercises ({ commit }, newExercise) {
    try {
      // console.log('seve ', newExercises)
      const savedExercise = await this.$axios.$post(`${BASE_URL}/api/exercises/saveNewExercise`, newExercise)

      // console.log(savedExercise)
      commit('addNewExercises', savedExercise)
    } catch (err) {
      console.log(err)
    }
    
  }
}