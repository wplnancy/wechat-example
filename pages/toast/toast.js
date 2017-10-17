Page({
  showToast: function () {
    var that = this;
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
      success: that.flySuccess,
      fail: that.flyFail,
      complete: that.flyComplete
    })
  },
  hideToast: function () {
    // 注意this的指向问题
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000,
      success: that.loadingSuccess,
      fail: that.loadingFail,
      complete: that.loadingComplete
    });
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },
  flySuccess: function (e) {
    console.log(e);
    console.log("起飞成功！");
  },
  flyFail: function (e) {
    console.log(e);
    console.log("起飞失败！")
  },
  flyComplete: function (e) {
    console.log(e);
    console.log("起飞结束！")
  },
  loadingSuccess: function (e) {
    console.log(e);
    console.log("加载成功！");
  },
  loadingFail: function (e) {
    console.log('这是内部的this', this)
    console.log(e);
    console.log("加载失败！")
  },
  loadingComplete: function (e) {
    console.log(e);
    console.log("加载结束！")
  }
})