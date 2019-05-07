import api from "../../api";

const state = {
  storeList: [], //首页店铺列表
  classifyList: [], //首页banner分类接口
  activityList: [],
  advertisList: [],
  filterData: {
    inside_sort_filter: [],
    outside_filters: [],
    outside_sort_filter: []
  }
}
//进行异步操作
const actions = {
  async getStoreList({commit, state}, {payload}) {
    const response = await api.home.getStoreList(payload);
    if (response && response.status === 0) {
      commit('doSaveStoreList', response.data)
    }
  },
  async getHomeClassifyList({commit, state}, {payload}) {
    const response = await api.home.getHomeClassifyList(payload);
    if (response && response.status === 0) {
      commit('doSaveClassifyList', response.data)
    }
  },
  async getActivityList({commit, state}, {payload}) {
    const response = await api.home.getActivityList(payload);
    if (response && response.status === 0) {
      commit('doSaveActivityList', response.data)
    }
  },
  async getFilter({commit, state}, {payload}) {
    const response = await api.home.getFilter(payload);
    if (response && response.status === 0) {
      commit('doSaveFilterList', response.data)
    }
  }
}
//进行同步操作
const mutations = {
  doSaveStoreList(state, payload) {
    let oldList = state.storeList
    state.storeList = oldList.concat(payload.items)
  },
  doSaveClassifyList(state, payload) {
    state.classifyList = payload
  },
  doSaveActivityList(state, payload) {
    state.activityList = payload.activityList
    state.advertisList = payload.advertisList
  },
  doSaveFilterList(state, payload) {
    state.filterData = payload
  },
  doLikeItem(state, payload) {
    let storeList = state.storeList
    let findIndex = -1
    let findItem = {}
    storeList && storeList.length > 0 && storeList.forEach((store, index) => {
      if (store.restaurant.id === payload) {
        findIndex = index
        findItem = store
      }
    })
    storeList.splice(findIndex, 1)
    storeList.push(findItem)
    state.storeList = storeList
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
