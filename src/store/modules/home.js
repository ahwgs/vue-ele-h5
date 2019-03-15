import api from "../../api";

const state = {
  storeList: [],
  classifyList:[]
}
//进行异步操作
const actions = {
  async getStoreList({commit, state}, {payload}) {
    const response = await api.home.getStoreList(payload);
    console.log(response);
    if (response && response.status === 0) {
      commit('doSaveStoreList', response.data)
    }
  },
  async getHomeClassifyList({commit, state}, {payload}) {
    const response = await api.home.getHomeClassifyList(payload);
    console.log(response);
    if (response && response.status === 0) {
      commit('doSaveClassifyList', response.data)
    }
  }
}
//进行同步操作
const mutations = {
  doSaveStoreList(state, payload) {
    state.storeList = payload.items
  },
  doSaveClassifyList(state, payload) {
    state.classifyList = payload
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
