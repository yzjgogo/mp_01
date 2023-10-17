// pages/16_npm_vant/16_npm_vant.js
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
  /*
  getInfo(){
      const result = wx.p.request({
          method:'GET',
          url:'https://www.esbook.cn/api/get',
          data:{name:'zs',age:20}
      })
      console.log(result)//可见这个result是Promise类型的对象
  }
  */
  async getInfo(){
    const result = await wx.p.request({
        method:'GET',
        url:'https://www.esbook.cn/api/get',
        data:{name:'zs',age:20}
    })
    console.log(result)//因为使用了await和async，此时的result其实已经不是Promise对象了，而是Promise对象包裹的实际返回的数据对象，因为await和async本身是支持Promise的
}
})