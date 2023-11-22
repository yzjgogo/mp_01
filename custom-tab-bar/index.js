// custom-tab-bar/index.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'
Component({
    options: {
        //参考：15_components/15_components.wxml对shared的解释：当给一个组件设置styleIsolation:'shared'时，表示组件所在页面 wxss 样式将影响到该组件，该组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。
        //https://youzan.github.io/vant-weapp/#/custom-style vantWeapp里明确说明在自定义组件中使用 Vant Weapp 组件时，需开启styleIsolation: 'shared'选项
      styleIsolation: 'shared'
    },
    behaviors: [storeBindingsBehavior],
    storeBindings: {
      store,
      fields: {
        sum: 'sum',
        active: 'activeTabBarIndex'
      },
      actions: {
        updateActive: 'updateActiveTabBarIndex'
      },
    },
    observers: {
      'sum': function (val) {
        this.setData({
          'list[1].info': val
        })
      }
    },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [{
        "pagePath": "pages/7_tabbar1/7_tabbar1",
        "text": "首页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },{
        "pagePath": "pages/7_tabbar2/7_tabbar2",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png",
        info: 3
      },{
        "pagePath": "pages/7_tabbar3/7_tabbar3",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
        console.log("执行onChange：")
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail })
      this.updateActive(event.detail)
      wx.switchTab({
          //记得补上'/'，因为pagePath不是以'/'开头的，而switchTab()需要以'/'开头
        url: '/'+this.data.list[event.detail].pagePath,
      })
    },
  }
})