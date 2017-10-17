// pages/upload-image/upload-image.js
Page({

  chooseImg: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  getImageInfo: function (e) {
    var imgUrl = e.currentTarget.id;
    var that = this;
    wx.getImageInfo({
      src: imgUrl,
      success: function (res) {
        console.log(res);
        that.setData({
          info: "图片长度:" + res.height + "图片宽度: "+res.width
        })
      }
    })
  }
})