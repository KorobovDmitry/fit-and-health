export const state = () => ({
  notices: []
})

export const getters = {}
export const mutations = {
  addNewNotice (state, notice) {
    state.notices.push(notice)
  },
  removeNotice (state, noticeId) {
    // console.log(state.notifications)
  }
}
export const actions = {}
