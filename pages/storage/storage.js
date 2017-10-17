var app = getApp()
Page({
  data: {
    data1: "",
    data2: "",
    det: ""
  },
  onLoad: function (options) {
    // 页面初始化获取缓存的数据
    var that = this;
    this.setData({
      data1: wx.getStorageSync('data1') || null,
      data2: wx.getStorageSync('data2') || null
    })
    //获取最新的缓存信息
    this.see()
  },
  sync: function () {
    // 同步存储后获取数据
    var that = this;
    wx.setStorageSync('data1', 'value1')
    wx.getStorage({
      key: 'data1',
      success: function (res) {
        that.setData({
          data1: wx.getStorageSync('data1') || null,
          data2: wx.getStorageSync('data2') || null
        })
      }
    })
    this.see()
  },
  asyn: function () {
    // 异步存储后获取数据
    var that = this;
    wx.setStorage({
      key: 'data2',
      data: 'value2',
      success: function (res) {
        // success
        console.log('success')
      }
    })
    that.setData({
      data1: wx.getStorageSync('data1') || null,
      data2: wx.getStorageSync('data2') || null
    })
    this.see()
  },
  update: function () {
    // 修改缓存data1
    wx.setStorageSync('data1', 'new_value1')
    this.setData({
      data1: wx.getStorageSync('data1') || null,
      data2: wx.getStorageSync('data2') || null
    })
    this.see()
  },
  del_one: function () {
    // 删除一条缓存数据
    wx.removeStorageSync('data1')
    this.setData({
      data1: wx.getStorageSync('data1') || null,
      data2: wx.getStorageSync('data2') || null
    })
    this.see()
  },
  del_all: function () {
    wx.clearStorageSync()
    this.setData({
      data1: wx.getStorageSync('data1') || null,
      data2: wx.getStorageSync('data2') || null
    })
    this.see()
  },
  // 每一步操作之后都调用  see  这个方法
  see: function () {
    // 查看缓存信息
    var that = this;
    wx.getStorageInfo({
      success: function (res) {
        that.setData({
          det: '缓存中存在的key:' + res.keys +
          '已缓存的数据大小: '+res.currentSize+'kb'+
          '缓存限制的大小:'+res.currentSize + 'kb'
        })
      }
    })
  }
})