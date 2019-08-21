export const state = () => ({
  date: '',
  targetProtein: null,
  targetFats: null,
  targetCarb: null,
  mealParts: [],

  currentWeight: null,
  targetWeight: null,
  userGender: 'male',
  userHeight: 174.2,
  userAge: 30,
  userActivity: 1.2,

  mealPartModalActive: false,
  mealPartModalInfo: {
    modalTitle: '',
    modalSubtitle: '',
    mealPartNumber: null,
    mealPartTitle: '',
    mealPartSubtitle: '',
    mealPartProducts: []
  }
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
    return state.mealParts
  },
  getMealPartModalActive (state) {
    return state.mealPartModalActive
  },
  getMealPartModalInfo (state) {
    return state.mealPartModalInfo
  }
}

export const mutations = {
  setCurrentDayMealPlanerInfo (state, mealPlanerDayInfo) {
    state.date = mealPlanerDayInfo.date
    state.targetProtein = mealPlanerDayInfo.targetProtein
    state.targetFats = mealPlanerDayInfo.targetFats
    state.targetCarb = mealPlanerDayInfo.targetCarb
    state.mealParts = mealPlanerDayInfo.mealParts
    state.currentWeight = mealPlanerDayInfo.currentWeight
    state.targetWeight = mealPlanerDayInfo.targetWeight
  },
  setNewTargetProtein (state, newValue) {
    state.targetProtein = newValue
  },
  setNewTargetFats (state, newValue) {
    state.targetFats = newValue
  },
  setNewTargetCarb (state, newValue) {
    state.targetCarb = newValue
  },
  setNewTargetWeight (state, newValue) {
    state.targetWeight = newValue
  },
  setMealPartTitleModalInfo (state, newTitle) {
    state.mealPartModalInfo.mealPartTitle = newTitle
  },
  setMealPartSubtitleModalInfo (state, newSubtitle) {
    state.mealPartModalInfo.mealPartSubtitle = newSubtitle
  },
  setNewMealParts (state, newMealParts) {
    state.mealParts = newMealParts
  },
  setMealPartModalActive (state) {
    state.mealPartModalActive = !state.mealPartModalActive
    if (state.mealPartModalActive) {
      document.querySelector('#__nuxt').style.marginTop = `-${window.pageYOffset}px`
      document.querySelector('body').classList.add('body-overflow')
    } else {
      let currentScroll = parseFloat(document.querySelector('#__nuxt').style.marginTop) * -1
      document.querySelector('#__nuxt').style.marginTop = '0px'
      document.querySelector('body').classList.remove('body-overflow')
      window.scrollTo(0, currentScroll)
    }
  },
  setMealPartModalInfo (state, modalinfo) {
    state.mealPartModalInfo.modalTitle = modalinfo.modalTitle,
    state.mealPartModalInfo.modalSubtitle = modalinfo.modalSubtitle,
    state.mealPartModalInfo.mealPartNumber = modalinfo.mealPartNumber,
    state.mealPartModalInfo.mealPartTitle = modalinfo.mealPartTitle,
    state.mealPartModalInfo.mealPartSubtitle = modalinfo.mealPartSubtitle,
    state.mealPartModalInfo.mealPartProducts = modalinfo.mealPartProducts
  },
  setNewProductToMealPart (state, newProduct) {
    let productToAdd = {
      productInfo: {
        title: newProduct.productInfo.title,
        protein: newProduct.productInfo.protein,
        fats: newProduct.productInfo.fats,
        carb: newProduct.productInfo.carb,
        kkal: newProduct.productInfo.kkal
      },
      currentWeight: newProduct.currentWeight,
      _id: newProduct._id
    }
    // Если массив пуст то просто добавить элемент в массив
    if (state.mealPartModalInfo.mealPartProducts.length === 0) {
      state.mealPartModalInfo.mealPartProducts.splice(0, 0, productToAdd)
    } else {
      // проверка, находится ли продукт уже в списке
      let productAlreadyInList = false
      for (let i = 0; i < state.mealPartModalInfo.mealPartProducts.length; i++) {
        if (state.mealPartModalInfo.mealPartProducts[i]._id === productToAdd._id) {
          productAlreadyInList = true
        }
      }
      // Если массив продуктов уже содержит элементы тогда добавляем в конец еще 1
      if (!productAlreadyInList) {
        // console.log('добавить продукт в список')
        // const newIndex = state.mealPartModalInfo.mealPartProducts.length
        // state.mealPartModalInfo.mealPartProducts.splice(newIndex, 0, productToAdd)
        state.mealPartModalInfo.mealPartProducts.push(productToAdd)
      }
    }
  },
  removeProductFromMealPart (state, productId) {
    for (let i = 0; i < state.mealPartModalInfo.mealPartProducts.length; i++) {
      if (state.mealPartModalInfo.mealPartProducts[i]._id === productId) {
        // console.log(`удалить продукт из массива под индексом ${i}`)
        state.mealPartModalInfo.mealPartProducts.splice(i, 1)
      }
    }
  },
  updateMealPartsProductWeight (state, {mealPartNumber, productIndex, updatedProduct}) {
    // Одновление данных о продукте в MealParts для пересчета веса
    state.mealParts[mealPartNumber].products.splice(productIndex, 1, updatedProduct)
  }
}

export const actions = {
  async getCurrentDayMealPlanerInfo ({ commit }) {
    try {
      const mealPlanerDayInfo = await this.$axios.$get('http://localhost:3000/api/nutrition-diary/meal-planer')
      commit('setCurrentDayMealPlanerInfo', mealPlanerDayInfo)
    } catch (e) {
      console.log(e)
    }
  },
  updateMealParts ({ state, dispatch }, newMealPart) {
    // Обновить массив MealParts
    let targetMealPartIndex = null
    const mealParts = state.mealParts
    const modalInfo = state.mealPartModalInfo
    // Проверяем есть ли нужный нам объект уже в массиве MealParts
    for (let i = 0; i < mealParts.length; i++) {
      if (mealParts[i].mealPartNumber === modalInfo.mealPartNumber) {
        // console.log(`есть совпадение. нужно обнавить данные ${i} в массиве`)
        targetMealPartIndex = i
      }
    }

    // Формирование массива с _id продуктов добавленых в Meal Part
    let productsArray = []
    for (let i = 0; i < newMealPart.products.length; i++) {
      let newProduct = {
        productId: newMealPart.products[i]._id,
        currentWeight: newMealPart.products[i].currentWeight
      }
      productsArray.push(newProduct)
    }

    // Формирование объекта с данными Meal Part которые нужно обновить
    let mealPartForUpdate = {
      mealPartNumber: null,
      title: newMealPart.title,
      description: newMealPart.description,
      products: productsArray
    }

    if (targetMealPartIndex === null) {
      // Если совпадений в массиве mealParts не найдено тогда задаем новое значение для mealPartNumber
      let newMealPartNumber = 0
      for (let i = 0; i < mealParts.length; i++) {
        if (mealParts[i].mealPartNumber >= newMealPartNumber) {
          newMealPartNumber = mealParts[i].mealPartNumber + 1
        }
      }
      mealPartForUpdate.mealPartNumber = newMealPartNumber
    } else {
      // Если такой объект уже есть в массиве тогда нужно его удалить и на его место поставить новый с обновленными данными
      mealPartForUpdate.mealPartNumber = targetMealPartIndex
    }

    let updatedMealParts = []
    if (state.mealParts.length === 0) {
      updatedMealParts.push(mealPartForUpdate)
    } else {
      for (let i = 0; i < state.mealParts.length; i++) {
        // Формируем нужны для backend массив продуктов вида --> [{productId: '', currentWeight: 0}]
        let newProdutsArray = []
        for (let p = 0; p < state.mealParts[i].products.length; p++) {
          let updatedProducts = {
            productId: state.mealParts[i].products[p]._id,
            currentWeight: state.mealParts[i].products[p].currentWeight
          }
          newProdutsArray.push(updatedProducts)
        }
        // Собрать новый объект state.mealParts[i] потому что нельзя присваивать к имеющемуся в store!!!!!
        let newMealPart = {
          _id: state.mealParts[i]._id,
          mealPartNumber: state.mealParts[i].mealPartNumber,
          title: state.mealParts[i].title,
          description: state.mealParts[i].description,
          products: newProdutsArray
        }
        updatedMealParts.push(newMealPart)

        if (i === state.mealParts.length - 1) {
          updatedMealParts.splice(mealPartForUpdate.mealPartNumber, 1, mealPartForUpdate)
        }
      }
    }

    // console.log(updatedMealParts);
    dispatch('fetchUpdatedMealParts', updatedMealParts)
  },
  removeMealParts ({ state, dispatch }, mealPartNumber) {
    let updatedMealParts = []
    for (let i = 0; i < state.mealParts.length; i++) {
      // Формируем нужны для backend массив продуктов вида --> [{productId: '', currentWeight: 0}]
      let newProdutsArray = []
      for (let p = 0; p < state.mealParts[i].products.length; p++) {
        let updatedProducts = {
          productId: state.mealParts[i].products[p]._id,
          currentWeight: state.mealParts[i].products[p].currentWeight
        }
        newProdutsArray.push(updatedProducts)
      }
      // Собрать новый объект state.mealParts[i] потому что нельзя присваивать к имеющемуся в store!!!!!
      let newMealPart = {
        _id: state.mealParts[i]._id,
        mealPartNumber: state.mealParts[i].mealPartNumber,
        title: state.mealParts[i].title,
        description: state.mealParts[i].description,
        products: newProdutsArray
      }
      updatedMealParts.push(newMealPart)
    }
    // удалить из массиванужный объект meal pert 
    updatedMealParts.splice(mealPartNumber, 1)

    dispatch('fetchUpdatedMealParts', updatedMealParts)
  },
  async fetchUpdatedMealParts ({ commit }, updatedMealParts) {
    try {
      // Выполнить запрос на сервер
      const newMealParts = await this.$axios.$patch('http://localhost:3000/api/nutrition-diary/meal-planer/update-meal-parts?date=18.07.2019', {updatedMealParts: updatedMealParts})
      // console.log(newMealParts)
      // Обновить данные в state
      commit('setNewMealParts', newMealParts)
      commit('setMealPartModalActive')
    } catch (e) {
      console.log(e)
    }
  },
  async fetchUpdatedTargetProtein ({ commit }, newProteinValue) {
    try {
      let targetProteinForUpdate = {
        protein: newProteinValue
      }
      const newTargetProtein = await this.$axios.$patch('http://localhost:3000/api/nutrition-diary/meal-planer/update-target-protein?date=18.07.2019', targetProteinForUpdate)
      commit('setNewTargetProtein', newTargetProtein)
    } catch (e) {
      console.log(e)
    }
  },
  async fetchUpdatedTargetFats ({ commit }, newFatsValue) {
    try {
      let targetFatsForUpdate = {
        fats: newFatsValue
      }
      const newTargetFats = await this.$axios.$patch('http://localhost:3000/api/nutrition-diary/meal-planer/update-target-fats?date=18.07.2019', targetFatsForUpdate)
      commit('setNewTargetFats', newTargetFats)
    } catch (e) {
      console.log(e)
    }
  },
  async fetchUpdatedTargetCarb ({ commit }, newCarbValue) {
    try {
      let targetCarbForUpdate = {
        carb: newCarbValue
      }
      const newTargetCarb = await this.$axios.$patch('http://localhost:3000/api/nutrition-diary/meal-planer/update-target-carb?date=18.07.2019', targetCarbForUpdate)
      commit('setNewTargetCarb', newTargetCarb)
    } catch (e) {
      console.log(e)
    }
  },
}
