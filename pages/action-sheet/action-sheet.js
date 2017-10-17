// pages/action-sheet/action-sheet.js
Page({

  actionSheetTap: function () {
    var itemList = [
      'A', 'B', 'C'
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "blue",
      success: function (res) {
        // 取消了就会这行fail这个函数
        console.log(res);
        if (!res.cancel) {
          console.log(itemList[res.tapIndex])
        }
      },
      fail: function () {
        console.log('fail')
      },
      complete: function () {
        // 不管是成功还是失败，都会执行 complete 这个函数
        console.log('complete...')
      }
    })
  }
})