// pages/0_management/0_management.js
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
    console.log("0_management页面收到的参数：",options)
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

  gotoBack(event){
    wx.navigateBack(
      {
        delta:1,
        success:function(){
          console.log("执行success")
        },
        fail:function(){
          console.log("执行fail")
        },
        complete:function(){
          console.log("执行complete-无论成功失败都会执行")
        }
      }
    )
    // 如果直接返回到上一个页面，即delta==1，且不需要回到函数，则直接wx.navigateBack()即可返回
    // wx.navigateBack()
  }
})