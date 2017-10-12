// pages/checkbox/checkbox.js
Page({
  data: {
    item: [
      { 'name': '俄罗斯', 'value': 'RS', 'disabled': false },
      { 'name': '美国', 'value': 'US', 'disabled': false },
      { 'name': '中国', 'value': 'CN', 'disabled': false, 'checked': true },
      { 'name': '英国', 'value': 'UK', 'disabled': false },
      { 'name': '日本', 'value': 'JP', 'disabled': true }
    ]
  },
  changed: function (e) {
    console.info('您选择了' + e.detail.value)
  }
})