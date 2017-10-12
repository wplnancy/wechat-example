// pages/input/input.js
Page({
  data: {
    log: '事件触发'
  },
  bindblur: function (e) {
    var value = e.detail.value;
    this.setData({
      log: "bindblur失去焦点.输入框值=" + value
    })
  },
  bindinput: function (e) {
    var value = e.detail.value;
    this.setData({
      log: "bindinput内容改变.输入框值=" + value
    })
  },
  bindfocus: function (e) {
    var value = e.detail.value;
    this.setData({
      log: "bindfocus获取焦点.输入框值=" + value
    })
  }
})