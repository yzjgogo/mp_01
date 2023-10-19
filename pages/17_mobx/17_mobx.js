// pages/17_mobx/17_mobx.js
//在page中使用store数据1:导入createStoreBindings和store
import{createStoreBindings} from 'mobx-miniprogram-bindings'
import{store} from '../../store/store'
Page({

  data: {

  },

  onLoad(options) {
      //在page中使用store数据2：将当前页要使用的store里的数据 或 方法列出来。其中fields列出要使用的数据，actions列出要使用的方法
      //注意需要定义一个变量接收createStoreBindings()的结果，这里定义成storeBindings,方便在页面的onUnload()中释放资源
    this.storeBindings = createStoreBindings(this,{
        store,
        fields:['numA','numB','sum'],
        actions:['updateNumA']
    })
  },
  btnHandler1(e){
    // 在page中使用store数据5：使用"在page中使用store数据2"步骤中列出的方法
      this.updateNumA(e.target.dataset.step)
  },

  onReady() {

  },

  onShow() {

  },

  onHide() {

  },
  onUnload() {
      //在page中使用store数据3：释放资源
    this.storeBindings.destroyStoreBindings()
  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {

  }
})