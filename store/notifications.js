const BASE_URL = process.env.baseUrl

export const state = () => ({
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

export const getters = {}
export const mutations = {
  // Добавить notice в массив с оповещениями для страницы food calorie table
  addNewNotice (state, notice) {
    // Переписать на общий для всего сайта
    // commit работает в любом модуле
    // this.commit('foodCalorieTable/setModalActive', true)
    state.notifications.push(notice)
  },
  // Удалить notice из массива с оповещениями для страницы food calorie table
  removeNotice (state, noticeId) {
    // console.log(state.notifications)
  },
  // Очистить список notifications перед рендерингом страницы (beforeMount на главном компоненте страницы food calorie table)
  cleanNotifications (state) {
    state.notifications = []
  }
}
export const actions = {}