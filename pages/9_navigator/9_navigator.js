// pages/9_navigator/9_navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("9_navigator被销毁了")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  gotoTabbar(event){
    wx.switchTab({
      url: '/pages/7_tabbar2/7_tabbar2?name=tab&age=11',//跳转到tabbar页面，url不能传参，因此后面的?name=tab&age=11无效，似乎reLaunch可以传参
      success:function(){
        console.log("执行success")
      },
      fail:function(){
        console.log("执行fail")
      },
      complete:function(){
        console.log("执行complete-无论成功失败都会执行")
      }
    })
  },
  gotoNoTabbar(event){
    wx.navigateTo({
      url: '/pages/0_management/0_management?name=wxnav&age=14',//跳转到没有tabbar页面，url可以携带参数,然后目标页面在onLoad()中接收参数
      success:function(){
        console.log("执行success")
      },
      fail:function(){
        console.log("执行fail")
      },
      complete:function(){
        console.log("执行complete-无论成功失败都会执行")
      }
    })
  }
})