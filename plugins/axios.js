
export default function ({$axios, redirect, store}) {

  // эта часть нужна если необхадимо получить токен на стороне сервера для получения данных о юзере
  $axios.interceptors.request.use(request => {
    // console.log('interceptor')
    if (store.getters['auth/isAuthenticated'] && !request.headers.common.Authorization) {
      const token = store.getters['auth/getToken']
      request.headers.common.Authorization = token
    }
    return request
  })

  // Если в результате выполнения запроса на сервер axios возвращает ошибку, то будут выполнены ниже описанные проверки (ошибки отлавливаемые в сторе в catch работать не будут. всю логику нужно будет перевести сюда)
  // $axios.onError(error => {
  //   console.log('Плагин axios', error.responce)
  //   if (error.responce.status === 401) {
  //     console.error('Server error 500')
  //     // redirect('/auth?message="Error-401"')
  //     // store.dispatch('auth/logout')
  //   }
  //   if (error.responce.status === 500) {
  //     console.error('Server error 500')
  //   }
  // })
}
