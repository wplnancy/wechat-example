Page({
  data: {},
  onLoad: function (options) {
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var longitude = res.longitude, latitude = res.latitude;
        _this.setData({
          location: {
            latitude: latitude,
            longitude: longitude,
          },
          markers: [{
            latitude: latitude,
            longitude: longitude,
            name: '微信小程序社区',
            desc: '我在这里'
          }],
          covers: [{
            latitude: latitude,
            longitude: longitude,
            iconPath: '../images/car.png',
            rotate: 10
          }]
        });
      }
    })
  },
  showLocation: function (e) {
    var _this = this;
    var location = _this.data.location;
    wx.openLocation({
      latitude: location.latitude,      // 纬度，范围为-90~90，负数表示南纬
      longitude: location.longitude,    // 经度，范围为-180~180，负数表示西经
      scale: 28,               // 缩放比例
      name: '微信小程序社区',   // 位置名
      address: '我还是在这里'       // 地址的详细说明
    });
  }
})