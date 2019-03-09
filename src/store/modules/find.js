import api from "../../api";

const state = {
  discoverList: []
}
//进行异步操作
const actions = {
  async getFindList({commit, state}, {payload}) {
    const response = await api.find.getFindList(payload);
    if (response && response.status === 0) {
      commit('doSaveFindList', response.data)
    }
  }
}
//进行同步操作
const mutations = {
  doSaveFindList(state, payload) {
    state.discoverList = payload.list
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
