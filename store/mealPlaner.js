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
  mealParts: [
    {
      mealPartNumber: 0,
      title: 'Завтрак',
      description: 'Высокоуглеводный прием пищи',
      productsList: [
        {
          title: 'Гречка',
          weight: 120,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Овощной салат',
          weight: 80,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Яблоко',
          weight: 107,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Овощной салат',
          weight: 100,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Яблоко',
          weight: 84,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Овощной салат',
          weight: 50,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Яблоко',
          weight: 120,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Овощной салат',
          weight: 120,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Яблоко',
          weight: 120,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        }
      ]
    },
    {
      mealPartNumber: 1,
      title: 'Обед',
      description: 'Большое содержание углеводов и белков для продуктивной второй половины дня.',
      productsList: [
        {
          title: 'Макароны',
          weight: 240,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        },
        {
          title: 'Бутерброд с ветчиной',
          weight: 120,
          protein: 5.2,
          fats: 0.2,
          carb: 67.2,
          kkal: 453
        }
      ]
    }
  ],
  mealPartModalActive: false
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

    // if (state.userGender === 'male') {
    //   let targetKkal = (88.36 + (13.4 * state.targetWeight) + (4.8 * state.userHeight) - (5.7 * state.userAge)) * state.userActivity
    //   return Math.round(targetKkal)
    // } else {
    //   lettargetKkal = (447.6 + (9.2 * state.targetWeight) + (3.1 * state.userHeight) - (4.3 * state.userAge)) * state.userActivity
    //   return Math.round(targetKkal)
    // }

    let currentKkal = (state.targetProtein * state.targetWeight * 4.1) + (state.targetFats * state.targetWeight * 9.3) + (state.targetCarb * state.targetWeight * 4.1)
    return Math.round(currentKkal)
  },
  getMealParts (state) {
    // return state.mealParts
    return state.mealParts
  },
  getMealPartModalActive (state) {
    return state.mealPartModalActive
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
    // Сформировать новый объект mealParts содержащий вычисляемые недостающие свойства (общее содержание БЖУК)
    // const mealParts = [
    //   {
    //     title: mealPlanerDayInfo.selectedDayMealParts[0].title,
    //     description: mealPlanerDayInfo.selectedDayMealParts[0].description,
    //     totalProtein: 10,
    //     totalFats: 10,
    //     totalCarb: 10,
    //     totalKkal: 10,
    //     productsList: [
    //       {
    //         title: 'Гречка',
    //         weight: 100,
    //         protein: 5.2,
    //         fats: 0.2,
    //         carb: 67.2,
    //         kkal: 453
    //       }
    //     ]
    //   }
    // ]
    // state.mealParts = mealParts


    state.mealParts = mealPlanerDayInfo.selectedDayMealParts
  },
  setTargetProtein (state, newValue) {
    state.targetProtein = newValue
  },
  setTargetFats (state, newValue) {
    state.targetFats = newValue
  },
  setTargetCarb (state, newValue) {
    state.targetCarb = newValue
  },
  setTargetWeight (state, newValue) {
    state.targetWeight = newValue
  },
  setNewMealParts (state, newMealPart) {
    state.mealParts.push(newMealPart)
  },
  setMealPartModalActive (state) {
    state.mealPartModalActive = !state.mealPartModalActive
    if (state.mealPartModalActive) {
      document.querySelector('body').classList.add('body-overflow')
    } else {
      document.querySelector('body').classList.remove('body-overflow')
    }
  }
}

export const actions = {
  async getCurrentDayMealPlanerInfo ({ commit }) {
    const mealPlanerDayInfo = await this.$axios.$get('http://localhost:3000/api/nutrition-diary/meal-planer')
    commit('setCurrentDayMealPlanerInfo', mealPlanerDayInfo)
  },
  // async updateMealParts ({ commit }) {
    // const newMealParts = await this.$axios.$post('', newMealPart)
  // }
}
