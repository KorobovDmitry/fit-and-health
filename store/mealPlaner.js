export const state = () => ({
  selectedDay: '',
  targetProtein: null,
  targetFats: null,
  targetCarb: null,
  currentWeight: null,
  targetWeight: null,
  userGender: 'male',
  userHeight: 174.2,
  userAge: 30,
  userActivity: 1.2,
  selectedDayMealParts: [
    {
      title: 'Завтрак',
      description: 'Описание приема пищу',
      productList: [
        {
          title: 'Гречка',
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        }
      ]
    }
  ]
})

export const getters = {
  getTargetProtein (state) {
    return state.targetProtein
  },
  getTargetFats (state) {
    return state.targetFats
  },
  getTargetCarb (state) {
    return state.targetCarb
  },
  getCurrentWeight (state) {
    return state.currentWeight
  },
  getTargetWeight (state) {
    return state.targetWeight
  },
  getDayTargetProtein (state) {
    return state.targetProtein * state.targetWeight
  },
  getDayTargetFats (state) {
    return state.targetFats * state.targetWeight
  },
  getDayTargetCarb (state) {
    return state.targetCarb * state.targetWeight
  },
  getDayTargetKkal (state) {
    // targetKkalMale = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity
    // targetKkalFemale = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity

    if (state.userGender === 'male') {
      let targetKkal = (88.36 + (13.4 * state.targetWeight) + (4.8 * state.userHeight) - (5.7 * state.userAge)) * state.userActivity
      return Math.round(targetKkal)
    } else {
      lettargetKkal = (447.6 + (9.2 * state.targetWeight) + (3.1 * state.userHeight) - (4.3 * state.userAge)) * state.userActivity
      return Math.round(targetKkal)
    }
  }
}

export const mutations = {
  setCurrentDayMealPlanerInfo (state, mealPlanerDayInfo) {
    state.targetProtein = mealPlanerDayInfo.targetProtein
    state.targetFats = mealPlanerDayInfo.targetFats
    state.targetCarb = mealPlanerDayInfo.targetCarb
    state.currentWeight = mealPlanerDayInfo.currentWeight || 0
    state.targetWeight = mealPlanerDayInfo.targetWeight || 0
    state.selectedDay = mealPlanerDayInfo.selectedDay || ''
    state.selectedDayMealParts = mealPlanerDayInfo.selectedDayMealParts
  }
}

export const actions = {
  async getCurrentDayMealPlanerInfo ({ commit }) {
    const mealPlanerDayInfo = await this.$axios.$get('http://localhost:3000/api/nutrition-diary/meal-planer')
    commit('setCurrentDayMealPlanerInfo', mealPlanerDayInfo)
  }
}
