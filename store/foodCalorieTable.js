const BASE_URL = process.env.baseUrl

export const state = () => ({
  productCategories: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
  products: [],
  sortedProducts: [],
  selectedFilters: {
    sortingBy: 'Названию',
    productType: 'Все продукты',
    productCategory: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
    searchString: ''
  },
  newProduct: {
    title: "",
    weight: 100,
    protein: null,
    fats: null,
    carb: null,
    kkal: null,
    category: "Мясо",
    favoriteProduct: false,
    userProduct: true,
    // userId: null
  },
  modalActive: false
})

export const getters = {
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
  }
}

export const mutations = {
  setProducts (state, products) {
    state.products = products
    this.commit('foodCalorieTable/sortProducts')
  },
  addNewProduct (state, newProduct) {
    state.products.push(newProduct)
    this.commit('foodCalorieTable/sortProducts')

    const notice = {
      id: Date.now(),
      type: 'success',
      message: 'Продукт успешно добавлен.',
      timeToShow: 3000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  updateProducts (state, newProduct) {
    let targetProduct = null
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === newProduct.id) {
        targetProduct = i
        state.products[i] = newProduct
        break
      }
    }
    this.commit('foodCalorieTable/sortProducts')

    const notice = {
      id: Date.now(),
      type: 'success',
      message: 'Информация о продукте успешно обновлена.',
      timeToShow: 3000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  deleteProduct (state, product) {
    let targetProduct = null
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === product.product) {
        targetProduct = i
        break
      }
    }
    state.products.splice(targetProduct, 1)
    this.commit('foodCalorieTable/sortProducts')

    const notice = {
      id: Date.now(),
      type: 'info',
      message: 'Продукт удален из базы данных.',
      timeToShow: 3000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  updateFavoriteProduct (state, product) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === product.productId) {
        state.products[i].favorite = product.newParam.favorite
        break
      }
    }

    const notice = {
      id: Date.now(),
      type: 'info',
      message: product.newParam.favorite ? 'Продукт добавлен в избранное.' : 'Продукт удален из избранного.',
      timeToShow: 3000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  setSearchString (state, searchString) {
    state.selectedFilters.searchString = searchString
  },
  setSortingByFilter (state, SortingBy) {
    state.selectedFilters.sortingBy = SortingBy
  },
  setProductTypeFilter (state, ProductType) {
    state.selectedFilters.productType = ProductType
  },
  setProductCategory (state, ProductCategory) {
    state.selectedFilters.productCategory = ProductCategory
  },
  sortProducts (state) {

    // Фильтрация по типу продуктов (все, мои, избранное)
    if (state.selectedFilters.productType === 'Мои продукты') {
      // console.log('Мои продукты')
      state.sortedProducts = [...state.products.filter(product => product.userProduct !== false)]
    } else if (state.selectedFilters.productType === 'Избранное') {
      // console.log('Избранное')
      state.sortedProducts = [...state.products.filter(product => product.favorite !== false)]
    } else {
      // console.log('Все продукты')
      state.sortedProducts = [...state.products]
    }

    // Фильтрация по строке поиска
    let sortedBySearchString =[]
    for (let i = 0; i < state.sortedProducts.length; i++) {
      if (state.sortedProducts[i].title.toLowerCase().includes(state.selectedFilters.searchString.toLowerCase())) {
        sortedBySearchString.push(state.sortedProducts[i])
      }
    }
    state.sortedProducts = [...sortedBySearchString]

    // Фильтрация по категориям
    let sortedByCategory = []
    for (let i = 0; i < state.sortedProducts.length; i++) {
      // проверка на совпадение выбранных категорий у продукта в массиве state.sortedProducts
      // console.log(selectedFilters.productCategory);
      state.selectedFilters.productCategory.forEach(item => {
        if (item === state.sortedProducts[i].category) {
          sortedByCategory.push(state.sortedProducts[i])
        }
      })
    }
    state.sortedProducts = [...sortedByCategory]

    // Сортировка по колонкам (название, б, ж, у, к)
    if (state.selectedFilters.sortingBy === 'Названию') {
      state.sortedProducts.sort(function (a, b) {
        let first = a.title.toLowerCase(), second = b.title.toLowerCase()
        if (first < second) return -1
        if (first > second) return 1
        return 0
      })
    } else {
      let field = null
      switch (state.selectedFilters.sortingBy) {
        case 'Белкам':
          field = 'protein'
          console.log(field)
          break
        case 'Жирам':
          field = 'fats'
          break;
        case 'Углеводам':
          field = 'carb'
          break;
        case 'Калорийности':
          field = 'kkal'
          break
        default:
          break
      }

      state.sortedProducts.sort(function (a, b) {
        if (a[field] > b[field]) return -1
        if (a[field] < b[field]) return 1
        return 0
      })
    }

  },
  changeProductWeight (state, {index, newWeight}) {
    let product = {...state.sortedProducts[index]}
    product.weight = newWeight

    state.sortedProducts.splice(index, 1, product)
  },
  setNewProductParams (state, params) {
    state.newProduct[params.field] = params.value
  },
  openModal (state, productId) {
    if (productId) {
      state.newProduct = state.products.filter(product => product.id === productId)[0]
    } else {
      state.newProduct = {
        title: "",
        weight: 100,
        protein: null,
        fats: null,
        carb: null,
        kkal: null,
        category: "Мясо",
        favorite: false,
        userProduct: true
      }
    }
    state.modalActive = true
  },
  closeModal (state) {
    state.modalActive = false
  }
}

export const actions = {
  async getAllProducts ({ commit }) {
    try {
      const products = await this.$axios.$get(`${BASE_URL}/api/food-calorie-table`)
      commit('setProducts', products)
    } catch (err) {
      console.log(err)
    }
  },
  async saveProduct ({ state, commit }) {
    try {
      const newProduct = await this.$axios.$post(`${BASE_URL}/api/food-calorie-table/saveNewProduct`, state.newProduct)

      if (newProduct === 1) {
        commit('updateProducts', state.newProduct)
      } else {
        commit('addNewProduct', newProduct)
      }

    } catch (err) {
      console.log(err)
    }
  },
  async removeProduct ({ commit }, product) {
    try {
      const remove = await this.$axios.$post(`${BASE_URL}/api/food-calorie-table/removeProduct`, product)
      if (remove) {
        await commit('deleteProduct', product)
      } else {
        console.log('Удалить продукт не удалось')
      }
    } catch (err) {
      console.log(err)
    }
  },
  async editProduct ({ commit }, product) {
    try {
      const editedProduct = await this.$axios.$post(`${BASE_URL}/api/food-calorie-table/editProduct`, product)
      // commit('updateProduct', editedProduct)
      console.log(editedProduct)
    } catch (err) {
      console.log(err)
    }
  },
  async changeFavoriteParam ({ commit }, productParam) {
    try {
      const updatedProduct = await this.$axios.$post(`${BASE_URL}/api/food-calorie-table/changeFavoriteParam`, productParam)
      if (updatedProduct) {
        commit('updateFavoriteProduct', productParam)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
