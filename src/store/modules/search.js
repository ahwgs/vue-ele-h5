import storageUtil from "../../utils/storage";
import api from "../../api";
import {getSearchList} from "../../api/search";

const state = {
  historyList: storageUtil.getHisSearch() || [],
  hotSearchList: [],
  searchList:[]
}
const actions = {
  async getHotWordList({commit, state}, {payload}) {
    const response = await api.search.getHotList(payload)
    console.log(response);
    if (response && response.status === 0) {
      commit('saveHotList', response.data)
    }
  },
  async getSearchList({commit, state}, {payload}){
    const response = await api.search.getSearchList(payload)
    console.log(response);
    if (response && response.status === 0) {
      commit('saveSearchList', response.data)
    }
  }
}
const mutations = {
  changeHistoryList(state, {payload}) {
    let oldList = state.historyList;
    const newList = Array.from(new Set(oldList.concat(payload)))
    if (payload.length === 0) {
      storageUtil.setHisSearch([])
      state.historyList = []
    } else {
      storageUtil.setHisSearch(newList)
      state.historyList = newList
    }
  },
  saveSearchList(state, payload){
    state.searchList = payload
  },
  saveHotList(state, payload) {
    state.hotSearchList = payload
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
