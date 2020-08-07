export const state = () => ({
  notices: []
})

export const getters = {}

export const mutations = {
  addNewNotice (state, notice) {
    state.notices.push(notice)
  },
  removeNotice (state, noticeId) {
    for (let i = 0; i < state.notices.length; i++) {
      if (state.notices[i].id === noticeId) {
        state.notices[i].active = false
        break
      }
    }

    let clearNotice = true
    for (let i = 0; i < state.notices.length; i++) {
      if (state.notices[i].active) {
        clearNotice = false
      }
    }

    if (clearNotice) {
      state.notices = []
    }
  }
}

export const actions = {}
