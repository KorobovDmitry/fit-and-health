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
    // получаем массив возможных категорий
    let categories = []
    for (let i = 0; i < ExercisesList.length; i++) {
      if (!categories.includes(ExercisesList[i].category)) {
        categories.push(ExercisesList[i].category)
      }
    }
    // Формируем массив упражнений с категориями
    categories.forEach(element => {
      state.exercises.push({category: element, exercises: []})
    })
    // Распределяем упражнения по категориям в массиве exercises
    for (let i = 0; i < ExercisesList.length; i++) {
      state.exercises.forEach(element => {
        if (ExercisesList[i].category === element.category) {
          element.exercises.push(ExercisesList[i])
        }
      })
    }
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