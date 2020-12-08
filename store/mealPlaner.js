export const state = () => ({
  mealPlanerInfo: {
    id: 1,
    date: '21.11.2020',
    targetProtein: 1,
    targetFats: 0.5,
    targetCarb: 2,
    targetWeight: 65.8,
    title: 'Название рациона на сутки',
    description: 'Короткое описание рациона из нескольких предложений',
    marks: ['Отметка 1', 'Отметка 2', 'Отметка 3'],
    socials: {
      like: 2,
      dislike: 0,
      repost: 54
    },
    mealParts: [
      {
        title: 'Название приема пищи',
        mealTime: 0,
        foods: [
          {
            type: 'recipe',
            id: null,
            title: 'Название рецепта',
            products: [
              {
                id: null,
                title: 'Название продукта',
                weight: 0,
                protein: 0,
                fats: 0,
                carb: 0,
                kkal: 0,
              }
            ]
          },
          {
            type: 'product',
            id: null,
            title: 'Название продукта',
            weight: 0,
            protein: 0,
            fats: 0,
            carb: 0,
            kkal: 0,
          }
        ]
      }
    ]
  }
})

export const getters = {
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

    let currentKkal = (state.mealPlanerInfo.targetProtein * state.mealPlanerInfo.targetWeight * 4.1) + (state.mealPlanerInfo.targetFats * state.mealPlanerInfo.targetWeight * 9.3) + (state.mealPlanerInfo.targetCarb * state.mealPlanerInfo.targetWeight * 4.1)

    return Math.round(currentKkal)
  }
}

export const mutations = {
  setMealPlanerInfo (state, mealPlanerInfo) {
    state.mealPlanerInfo = mealPlanerInfo
  },
  // Настройки модального окна
  // setMealPartModalActive (state) {
  //   state.mealPartModalActive = !state.mealPartModalActive
  // },
}

export const actions = {
  async fetchMealPlanerInfo ({ commit }, query ) {
    try {
      const mealPlanerInfo = await this.$axios.$get(`http://localhost:3000/api/meal-planer?date=${query.date}`)

      // commit('setMealPlanerInfo', mealPlanerInfo)
    } catch (e) {
      console.log(e)
    }
  }
}
