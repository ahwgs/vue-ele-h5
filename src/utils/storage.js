const storageUtil = {
  setHisSearch: function (list) {
    if (!list) return
    localStorage.setItem('history_list', JSON.stringify(list))
  },
  getHisSearch: function () {
    return JSON.parse(localStorage.getItem('history_list'))
  }
}
export default storageUtil
