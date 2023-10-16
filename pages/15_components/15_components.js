// pages/15_components/15_components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      homeOjb:{
        add:"合力达卓越南城"
      }
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
  //子传父第1步：在父组件定义一个事件函数，参数可有可无
  parentEventBack(e){
    // 子传父第4步：子组件发送事件后，会回调第1步，定义的这个事件函数，如果有参数，则e.detail即使子组件传递过来的数据
    console.log("事件参数：",e,e.detail)
  },
  getChildComponent(){
    //通过类选择器或id选择器获取子组件
    // const child = this.selectComponent('.m-test1')
    const child = this.selectComponent('#m-test1-id')
    //可以从新设置子组件的数据
    child.setData({
      count:child.data.count+1
    })
    //可以调用子组件的方法
    child.addCount()
    //可以读取子组件的数据
    console.log("获取子组件的count:",child.data.count)
  }
})