import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import NProgress from 'nprogress'
import '../assets/less/nprogress.less'

NProgress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

Vue.use(Router)

const _import_ = file => () => import('../views/' + file )

export const routes = [
  {
    path: '/',
    name: '首页',
    component: _import_('Home/Home'),
  },
  {
    path: '/login',
    name: '登录',
    component: _import_('Login/Login'),
  },
  {
    path: '/find',
    name: '发现',
    component: _import_('Find/Find'),
  },
  {
    path: '/order',
    name: '订单',
    component: _import_('Order/Order'),
  },
  {
    path: '/my',
    name: '我的',
    component: _import_('My/My'),
  },
  {
    path: '/search',
    name: '搜索',
    meta: {
      navBar: true
    },
    component: _import_('Search/Search'),
  },
  {
    path: '/my/address',
    name: '我的地址',
    component: _import_('My/Address'),
    meta: {
      auth: true,
      navBar: true
    }
  }
]

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  if (to.name) {
    document.title = to.name
  }

  //改变底部导航
  if (to.meta.navBar)
    store.state.app.showNavBar = false
  else
    store.state.app.showNavBar = true

  NProgress.start()

  if (to.meta.auth) { //判断前往的界面是否需要登陆
    if (store.state.user.isLogin) { // 是否已经登陆
      next()
    } else {
      next({path: '/login'})
      NProgress.done()
    }
  } else {
    next()
  }

})

router.afterEach((to, from) => {
  if (to.name) {
    document.title = to.name
  }
  NProgress.done()
})

export default router




