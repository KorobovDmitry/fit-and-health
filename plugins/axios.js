
export default function ({$axios, redirect, store}) {

  // Добавление токена в headers
  $axios.interceptors.request.use(request => {
    // console.log('interceptor')
    if (store.getters['auth/isAuthenticated'] && !request.headers.common.Authorization) {
      const token = 'Bearer ' + store.state.auth.token
      request.headers.common.Authorization = token
    }
    return request
  })

  // Обработка ошибок, приходящих с сервера (для 401 и 500)
  // $axios.onError(error => {
  //   console.log('Плагин axios', error.responce)
  //   if (error.responce.status === 401) {
  //     console.error('Server error 401')
  //     // redirect('/auth')
  //     // store.dispatch('auth/logout')
  //   }
  //   if (error.responce.status === 500) {
  //     console.error('Server error 500')
  //   }
  // })
}
