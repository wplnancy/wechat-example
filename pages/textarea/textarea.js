// pages/textarea/textarea.js
Page({

  //行高改变时
  bindlinechange: function (e) {
    var height = e.detail.height;
    var heightRpx = e.detail.heightRpx;
    var lineCount = e.detail.lineCount;
    this.setData({
      log: "height=" + height + "  |  heightRpx=" + heightRpx + "  |  lineCount=" + lineCount
    })
  },
  //文本失去焦点
  bindblur: function (e) {
    var value = e.detail.value;
    this.setData({
      log: "bindblur失去改变.获取textarea值=" + value
    })
  },
  //文本获取焦点
  bindfocus: function (e) {
    var value = e.detail.value;
    this.setData({
      log: "bindfocus获取焦点,获取textarea值=" + value
    })
  }
})