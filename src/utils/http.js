import axios from 'axios'
// 请求成功返回状态，字段和后台统一
// export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变量process.env中，开发环境为了方便转发，值为空字符串
// 环境的切换
// axios.defaults.baseURL = '';
// 请求超时时间
axios.defaults.timeout = 5000

// 封装请求拦截
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 封装响应拦截，判断token是否过期
axios.interceptors.response.use(
  response => {
    let {data} = response
    if (data.responseCode === 202) {    // 如果后台返回的错误标识为token过期，则重新登录
    } else {
      return Promise.resolve(data)
    }
  },
  error => {
    return Promise.reject(error.response)
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:

          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          break;

        // 404请求不存在
        case 404:

          break;
        // 其他错误，直接抛出错误提示
        default:

      }
    }
    return Promise.reject(error.response)
  }
)
export default axios
