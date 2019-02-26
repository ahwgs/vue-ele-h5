import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import store from './store/index'
import './registerServiceWorker'
import 'lib-flexible'


import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

console.log(store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
