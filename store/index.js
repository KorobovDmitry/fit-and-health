export const state = () => ({

})

export const getters = {}

export const mutations = {}

export const actions = {
  // этот action вызывается на стороне сервера при запуске SSR
  nuxtServerInit ({dispatch}) {
    // console.log('nuxt server init')
    // выполняем autoLogin
    dispatch('auth/autoLogin')
  }
}
