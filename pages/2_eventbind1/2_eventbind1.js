// pages/2_eventbind1/2_eventbind1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    msg:"我的信息",
    other:"我是别的信息"
  },
  /**
   * 事件触发时，自带event参数
   */
  outerHandler(event){
    console.log(event)
    //type：事件类型，字符串，这里是'tap'
    console.log(event.type)
    //target：是触发该事件的源头组件，例如这里虽然点击事件bindtap绑定到outer-view上，但是实际上我们点击的是里面的button，因此target是里面的button
    console.log(event.target)
    //currentTarget：当前事件所绑定到的组件，例如这里当前的bindtap事件绑定到outer-view上，因此currentTarget就是外部的outer-view
    console.log(event.currentTarget)
  },
  changeData(event){
    // 响应式的改变data里的数据:this.setData(obj); 传入的对象obj会与原来的data对比，obj里的属性会替换data里相同的属性，data中obj里没有的属性仍然保留
    this.setData(
      {
        count:this.data.count+1,
        msg:Date.now()
      }
    )
    // 这样也能改变data中的数据，但是不是响应式的
    // this.data.count++
    console.log("count改变："+this.data.count)
    console.log(this.data)
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

  }
})