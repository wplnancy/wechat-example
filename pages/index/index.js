//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    linkList: [
      {
        url: "../sliders/sliders",
        name: "swiper 滑动容器"
      },
      {
        url: "../icon/icon",
        name: "icon 图标"
      },
      {
        url: "../text/text",
        name: "tetx 文本"

      },
      {
        url: "../progress/progress",
        name: "progress 进度条"

      },
      {
        url: "../button/button",
        name: "button 按"
      },
      {
        url: "../checkbox/checkbox",
        name: "checkbox 多选项"
      },
      {
        url: "../form/form",
        name: "form 表单"
      },
      {
        url: "../input/input",
        name: "input 输入框"
      },
      {
        url: "../label/label",
        name: "label 标签"
      },
      {
        url: '../picker/picker',
        name: 'picker 滚动选择'
      },
      {
        url: '../radio/radio',
        name: 'radio 单选项目'
      },
      {
        url: '../slider/slider',
        name: 'slider 滑动选择器'
      },
      {
        url: '../switch/switch',
        name: 'switch 开关选择器'
      },
      {
        url: '../textarea/textarea',
        name: 'textarea 多行输入框'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
