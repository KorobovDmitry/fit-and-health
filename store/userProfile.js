export const state = () => ({
  lastName: 'Коробов',
  firstName: 'Дмитрий',
  middleName: 'Васильевич',
  email: 'RedFrag@yandex.ru',
  phoneNumber: 'Номер телефона',
  birthday: '26.11.88',
  age: 30,
  gender: 'Male',
  activity: 1.2,
  height: 174,
  initialWeight: 86.5,
  currentWeight: [86.5, 86.2, 85.8, 85.6, 86.1, 86.6, 86.1, 86.1, 86.0, 85.5, 85.0, 84.7, 84.7, 85.1, 84.8, 84.5, 84.0, 83.7, 83.6, 83.2, 83.3, 83.3, 82.7, 82.8, 82.6, 82.6, 83.0, 82.2, 82.1, 81.9, 82.2, 81.9, 81.7, 81.6, 81.4, 81.5, 82.0, 81.8, 81.3, 81.2, 81.0, 81.1, 81.0, 80.9, 80.8, 80.5, 80.5, 81.2, 80.7, 80.6, 80.5, 80.2, 80.1, 80.1, 80.0],
  targetWeight: 70,

  userEmail: '',
  userLastName: '',
  userFirstName: '',
  userMiddleName: '',
  userBirthday: '',
  userPhoneNumber: null,
  userGender: '',
  userActivity: '',
})

export const getters = {
  getUserEmail (state) {
    return state.userEmail
  },
  getUserLastName (state) {
    return state.userLastName
  },
  getUserFirstName (state) {
    return state.userFirstName
  },
  getUserMiddleName (state) {
    return state.userMiddleName
  },
  getUserBirthday (state) {
    return state.userBirthday
  },
  getUserPhoneNumber (state) {
    return state.userPhoneNumber
  },
  getUserGender (state) {
    return state.userGender
  },
  getUserActivity (state) {
    return state.userActivity
  }
}

export const mutations = {
  setUserInfo (state, userInfo) {
    state.userEmail = userInfo.email,
    state.userLastName = userInfo.lastName,
    state.userFirstName = userInfo.firstName,
    state.userMiddleName = userInfo.middleName,
    state.userBirthday = userInfo.birthday,
    state.userPhoneNumber = userInfo.phoneNumber,
    state.userGender = userInfo.gender,
    state.userActivity = userInfo.activity
  }
}

export const actions = {
  async getUserInfo ({ commit }) {
      const userInfo = await this.$axios.$post('http://localhost:3000/api/user-profile/user-info')
      await commit('setUserInfo', userInfo)
    }
}

