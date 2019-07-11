export const state = () => ({
  sidebarActive: false
})

export const getters = {
  getSidebarActive (state) {
    return state.sidebarActive
  }
}

export const mutations = {
  closeSidebar (state) {
    state.sidebarActive = false
  },
  openSidebar (state) {
    state.sidebarActive = true
  }
}

export const actions = {}
