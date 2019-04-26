export default class MyLocation {
  constructor(options) {
    this.position = null
    this.options = {
      enableHighAccuracy: true,
      maximumAge: 1000,
      ...options
    }
  }

  getLocal(){
    this.getLocation()
    return this.position
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, this.options);
    } else {
      alert('您的浏览器不支持地理位置定位');
    }
  }

  onSuccess(position) {
    //返回用户位置
    let _this = this
    _this.position = position.coords;
  }

  onError(error) {
    switch (error.code) {
      case 1:
        alert("位置服务被拒绝");
        break;
      case 2:
        alert("暂时获取不到位置信息");
        break;
      case 3:
        alert("获取信息超时");
        break;
      case 4:
        alert("未知错误");
        break;
    }
  }
}
