// app.js
import { promisifyAll } from 'miniprogram-api-promise'
const wxp = wx.p = {}//wxp和wx对象下的p属性都指向同一个对象
promisifyAll(wx, wxp)//将wx对象和wxp对象传入，一劳永逸，以后在任何地方使用都可以实现小程序原生API的Promise化，且以后想使用wx.request()类似这种API时，都可以用wx.p.request()替代，此时返回的就是Promise对象了。
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
