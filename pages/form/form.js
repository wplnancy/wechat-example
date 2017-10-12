// pages/form/form.js
Page({
  data: {
    pickerHidden: true,
    chosen: '',
    modalHidden: true,
    name: '',
    gender: '',
    age: '',
    technology: '',
    isPublic: ''
  },
  formSubmit: function (e) {
    var value = e.detail.value;
    this.setData({
      modalHidden: false,
      name: value.name,
      gender: value.gender,
      age: value.age,
      technology: value.technology,
      isPublic: value.isPublic
    });
    wx.showModal({
      title: '您填写的表单如下',
      content: '姓名:' + value.name
      + '性别：' + value.gender
      + '年龄：' + value.age
      + '擅长的开发语言：' + value.technology
      + '是否公开信息：' + value.isPublic,
      success: function (res) {
        if(res.confirm) {
          console.log('用户点击了确定')
        }        
      }
    })
    console.log('form发生了submit事件吗，携带的数据为', e.detail.value)
  },

  formReset: function (e) {
    console.log('form 发生了reset 事件， 携带的数据为', e.datail);
  },

  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },
})