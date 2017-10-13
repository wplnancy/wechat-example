Page({
  data: {
    checkboxItems: [
      { name: 'ctrip', value: '携程', checked: 'true' },
      { name: 'qunar', value: '去哪儿' },
      { name: 'tuniu', value: '途牛' }
    ],
    radioItems: [
      { name: 'ctrip', value: '携程' },
      { name: 'qunar', value: '去哪儿', checked: 'true' },
      { name: 'tuniu', value: '途牛' }
    ],
    hidden: false
  },
  checkboxChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  testLabelBindButton_1: function () {
    console.log("奔走相告，button通过for可以绑定成功啦！！！");
  },
  testLabelBindButton_2: function () {
    console.log("奔走相告，button通过内嵌可以绑定成功啦！！！");
  }
})