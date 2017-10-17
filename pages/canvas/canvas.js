
Page({
  mytouchstart: function(e) {
    console.log('touchstart')
  },
  mytouchmove: function (e) {
    console.log('touchmove')
  },
  mytouchend: function (e) {
    console.log('touchend')
  }
})


var context = wx.createContext();
console.log(context);
wx.drawCanvas({
  canvasId: 'canvas',
  actions: context.getActions()
});

console.log(context);

