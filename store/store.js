import {observable,action} from 'mobx-miniprogram'
export const store = observable({
    //数据字段
    numA: 1,
    numB: 2,
    //计算属性,类似vue的计算属性
    get sum() {
        return this.numA + this.numB
    },
    //action用于更新store里的数据，最终updateNumA是一个函数
    updateNumA:action(function(step){
        this.numA += step
    }),
    updateNumB:action(function(step){
        this.numB += step
    }),

    //下面这些是在讲自定义tabbar(custom-tab-bar/index.js)时用到
    activeTabBarIndex: 0,
    updateActiveTabBarIndex: action(function(index) {
      this.activeTabBarIndex = index
    })

})