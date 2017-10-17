Page({
  data: {
    // text:"这是一个页面"
    hiddenVideo: true
  },
  /**
  * 监听视频加载错误状态
  */
  listenerVideo: function (e) {
    console.log(e.detail.errMsg);
  },
  /**
  * 监听button点击事件
  */
  listenerButton: function () {
    console.log('listenerButton')
    this.setData({
      hiddenVideo: !this.data.hiddenVideo
    })
  },
  binderror: function () {
    console.log('发生了错误')
  }
})