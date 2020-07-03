import { BASE_URL } from '../keys/settings'

export const state = () => ({
  exercises: null
})

export const getters = {}

export const mutations = {}

export const actions = {
  async fetchExercisesList ({ commit }) {
    console.log('fetch exercises')
  }
}