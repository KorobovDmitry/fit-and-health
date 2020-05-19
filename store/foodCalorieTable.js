export const state = () => ({
  productCategories: ['Мясо', 'Рыба', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
  products: [
    {
      id: null,
      title: '',
      weight: null,
      protein: null,
      fats: null,
      carb: null,
      kkal: null,
      category: '',
      favorite: false,
      userProduct: false,
      userId: null
    }
  ],
  sortedProducts: [],
  modalActive: false,
  notifications: [
    // {
    //   id: 1,
    //   type: 'success',
    //   message: 'Продукт успешно добавлен.',
    //   timeToShow: 3000
    // },
    // {
    //   id: 2,
    //   type: 'warning',
    //   message: 'В базе данных уже содержится продукт с такими параметрами. Воспользуйтесь поиском, чтобы найти его в списке продуктов.',
    //   timeToShow: 2000
    // },
    // {
    //   id: 3,
    //   type: 'info',
    //   message: 'Возможная дополнительна информация о дейсвиях',
    //   timeToShow: 5000
    // },
    // {
    //   id: 4,
    //   type: 'alert',
    //   message: 'При сохранении произошла ошибка. Попробуйте позже или свяжитесь с нами по E-mail: support@fh.ru',
    //   timeToShow: 1000
    // }
  ]
})

export const getters = {
  // Getters для блока PageInfo страницы food calorie table
  getProductsAmount (state) {
    return state.products.length
  },
  getCategoriesAmount (state) {
    return state.productCategories.length
  },
  getFavoriteAmount (state) {
    let favoriteAmount = 0
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].favorite) {
        favoriteAmount += 1
      }
    }
    return favoriteAmount
  },
  getUserProductsAmount (state) {
    let userProducts = 0
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].userProduct) {
        userProducts += 1
      }
    }
    return userProducts
  },
  // getter для выпадающего списка категорий в модальном окне "добавить продукт" и в фильтрах "Категория"
  getProductCategories (state) {
    return state.productCategories
  },
  // Для формирования списка продуктов в таблице
  // getProducts (state) {
  //   return state.products
  // },
  // Для формирования списка продуктов в таблице на странице food calorie table
  getSortedProducts (state) {
    return state.sortedProducts
  },
  // getter для работы модально окна "добавить продукт"
  getModalActive (state) {
    return state.modalActive
  },
  // getter для работы с оповещениями на странице food calorie table
  getNotifications (state) {
    return state.notifications
  }
}

export const mutations = {
  // Установить значение массива продуктов, полученное в ходе выборки из БД (базовые и пользовательские продукты)
  setProducts (state, products) {
    state.products = products
    state.sortedProducts = products
  },
  // Добавить продукт в массив всех продуктов на старнице food calorie table
  addNewProduct (state, newProduct) {
    state.products.push(newProduct)
    state.modalActive = false
  },
  // Удалить продукт из массива всех продуктов на старнице food calorie table
  deleteProduct (state, product) {
    let targetProduct = null
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === product.product) {
        targetProduct = i
        break
      }
    }
    state.products.splice(targetProduct, 1)
  },
  // Обновить значение свойства favorite у продукта в массиве продуктов страницы food calorie table
  updateFavoriteProduct (state, product) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === product.productId) {
        state.products[i].favorite = product.newParam.favorite
        break
      }
    }
  },
  // Сортировка продуктов
  sortProducts (state, selectedFilters) {
    // state.sortedProducts = [...state.products].sort()

    let newSortedProducts = []

    // Фильтрация по типу продуктов (все, мои, избранное)
    if (selectedFilters.productType === 'Мои продукты') {
      // console.log('Мои продукты')
      state.products.filter( product => {
        if (product.userProduct) {
          newSortedProducts.push(product)
        }
      })
      state.sortedProducts = [...newSortedProducts]
    } else if (selectedFilters.productType === 'Избранное') {
      // console.log('Избранное')
      state.products.filter(product => {
        if (product.favorite === true) {
          newSortedProducts.push(product)
        }
      })
      state.sortedProducts = [...newSortedProducts]
    } else {
      // console.log('Все продукты')
      state.sortedProducts = [...state.products]
    }

    // Фильтрайия по категориям

    // Фильтрация по колонкам (название, б, ж, у, к)
  },
  // Добавить notice в массив с оповещениями для страницы food calorie table
  addNewNotice (state, notice) {
    // Переписать на общий для всего сайта
    // commit работает в любом модуле
    // this.commit('foodCalorieTable/setModalActive', true)
    state.notifications.push(notice)
  },
  // Удалить notice из массива с оповещениями для страницы food calorie table
  removeNotice (state, noticeId) {

    // let targetNotice = null
    // for (let i = 0; i < state.products.length; i++) {
    //   if (state.notifications[i].id === noticeId) {
    //     targetNotice = i
    //     console.log(state.notifications[i])
    //     break
    //   }
    // }
    // state.notifications.splice(targetNotice, 1)

    // TODO удалять оповещения, когда у всех истекло время показа у всех notice
    // for (let i = 0; i < state.notifications.length; i++) {
    //   if (state.notifications[i].isActive === true) {
    //     break
    //   } else {
    //     state.notifications = []
    //   }
    // }

    // console.log(state.notifications)
  },
  // Очистить список notifications перед рендерингом страницы (beforeMount на главном компоненте страницы food calorie table)
  cleanNotifications (state) {
    state.notifications = []
  },
  // Изменить значение флага isActive для модального окна "Добавить продукт"
  setModalActive (state, isActive) {
    state.modalActive = isActive
  },
}

export const actions = {
  async getAllProducts ({ commit } ) {
    try {
      const products = await this.$axios.$get('http://localhost:3000/api/food-calorie-table')
      commit('setProducts', products)
    } catch (err) {
      console.log(err)
    }
  },
  async saveNewProduct ({ commit }, product) {
    try {
      const newProduct = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/saveNewProduct', product)
      await commit('addNewProduct', newProduct)

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Продукт успешно добавлен.',
        timeToShow: 2000
      }
      await commit('addNewNotice', notice)
    } catch (err) {
      console.log(err)
    }
  },
  async removeProduct ({ commit }, product) {
    try {
      const remove = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/removeProduct', product)
      if (remove) {
        await commit('deleteProduct', product)

        const notice = {
          id: Date.now(),
          type: 'warning',
          message: 'Продукт удален из базы данных.',
          timeToShow: 3000
        }
        await commit('addNewNotice', notice)
      } else {
        console.log('Удалить продукт не удалось')
      }
    } catch (err) {
      console.log(err)
    }
  },
  async editProduct ({ commit }, product) {
    try {
      const editedProduct = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/editProduct', product)
      // commit('updateProduct', editedProduct)
      console.log(editedProduct)
    } catch (err) {
      console.log(err)
    }
  },
  async changeFavoriteParam ({ commit }, productParam) {
    try {
      const updatedProduct = await this.$axios.$post('http://localhost:3000/api/food-calorie-table/changeFavoriteParam', productParam)
      if (updatedProduct) {
        commit('updateFavoriteProduct', productParam)
      }
      // console.log(updatedProduct)
    } catch (err) {
      console.log(err)
    }
  }
}
