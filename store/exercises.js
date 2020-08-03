const BASE_URL = process.env.baseUrl

export const state = () => ({
  exercises: [],
  exerciseInfo: {}
})

export const getters = {
  getExercises (state) {
    return state.exercises
  },
  getExerciseInfo (state) {
    return state.exerciseInfo
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
    let exercises = []
    categories.forEach(element => {
      exercises.push({category: element, exercises: []})
    })
    // Распределяем упражнения по категориям в массиве exercises
    for (let i = 0; i < ExercisesList.length; i++) {
      exercises.forEach(element => {
        if (ExercisesList[i].category === element.category) {
          element.exercises.push(ExercisesList[i])
        }
      })
    }

    // устанавливаем разбитые по категориям данные об упражнениях
    state.exercises = exercises
  },
  setExerciseInfo (state, ExerciseInfo) {
    state.exerciseInfo = ExerciseInfo
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
  async fetchExerciseInfo ({ commit }, exercisesId) {
    try {
      const ExerciseInfo = await this.$axios.$post(`${BASE_URL}/api/exercises/fetch-exercise-info`, {id: exercisesId})

      // console.log(ExerciseInfo)
      commit('setExerciseInfo', ExerciseInfo)
    } catch (err) {
      console.log(err)
    }
  },
  async saveNewExercises ({ commit }, newExercise) {
    try {
      // console.log('seve ', newExercises)
      const savedExercise = await this.$axios.$post(`${BASE_URL}/api/exercises/save-new-exercise`, newExercise)

      // console.log(savedExercise)
      commit('addNewExercises', savedExercise)
    } catch (err) {
      console.log(err)
    }
  }
}