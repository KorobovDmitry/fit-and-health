import cookieParser from 'cookie'
import cookie from 'js-cookie'

export const state = () => ({
  token: null,
})

export const getters = {
  isAuthenticated (state) {
    return Boolean(state.token)
  }
}

export const mutations = {
  setAuthAcitveForm (state, activeForm) {
    state.activeForm = activeForm
  },
  setToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  async login ({ dispatch }, formData) {
    try {
      const token = await this.$axios.$post('http://localhost:3000/api/auth/login', formData)
      await dispatch('setToken', token)
    } catch (err) {
      // получаем сообщение об ошибке которую возвращае axios
      console.log(err.response)
    }
  },
  setToken ({ commit }, token) {
    // добавляем токен к запросам axios
    this.$axios.setToken(token, 'Bearer')
    // сохроняем в state токен полученный из action login
    commit('setToken', token)
    // сохраняем cookie на 361 день
    cookie.set('jwt-token', token, { expires: 361 })
  },
  logout ({ commit }, token) {
    // убираем токен из запросов axios
    this.$axios.setToken(false)
    // удаляем из state значение токена
    commit('clearToken')
    // удаляем куки
    cookie.remove('jwt-token', token)
  },
  async createUser ({ dispatch }, formData) {
    try {
      // console.log('создать юзера', formData)
      const newUser = await this.$axios.$post('http://localhost:3000/api/auth/register', formData)

      await dispatch('setToken', newUser)
      // console.log(newUser)
    } catch (err) {
      // получаем сообщение об ошибке которую возвращае axios
      console.log(err.response)
    }
  },
  async autoLogin ({ dispatch }) {
    try {
      // Получаем в переменную значение cookie проверяя находимся ли мы в браузере.
      // Если да то берем куки из document.cookie
      // Если нет тогда куки можно получить из get запроса (куки отправляются автоматически со всеми запросами, если куки для этого сайта есть)
      const cookieStr = process.browser ? document.cookie : this.app.context.req.headers.cookie
      // console.log(cookieStr)

      // Получаем распаресную куки (объект содержащий ключ и значение/параметры для каждой cookie) или пустой объект
      const cookie = cookieParser.parse(cookieStr || '') || {}
      // Получаем значение cookie токена по ключу
      const token = cookie['jwt-token']

      // запускаем action setToken для того чтобы установоить значение токена
      await dispatch('setToken', token)
    } catch (err) {
      console.log(err.response)
    }
  }
}
