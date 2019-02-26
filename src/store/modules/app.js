const state = {
  showNavBar: true
}
const actions = {}
const mutations = {
  changeNavBar(state,payload) {
    // 变更状态
    state.showNavBar = payload
  }
}
const getters = {}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
