Page({
  data: {
  },
  showModel1: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个简单设置的弹窗',
      success: function (res) {
        console.log(res)
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  showModel2: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个设定过全部属性模态弹窗',
      showCancel: true,
      confirmText: '好的',
      confirmColor: '#FF0000',
      cancelText: '算了',
      cancelColor: '#999999',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else {
          console.log('用户点击取消');
        }
      },
      fail: function () {
        console.log('接口调用失败');
      },
      complete: function () {
        console.log('接口调用结束')
      }
    })
  },
})