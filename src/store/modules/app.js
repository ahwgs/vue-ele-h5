const state = {
  showNavBar: true,
  loading:false
}
const actions = {}
const mutations = {
  changeLoading(state, payload){
    state.loading = payload
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
