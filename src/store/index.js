import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import find from './modules/find'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    find,
    home
  }
})
