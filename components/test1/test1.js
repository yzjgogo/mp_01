// components/test1/test1.js
Component({
  /**
   * 组件的属性列表，用于外部调用该组件处，给组件传递数据
   */
  properties: {
    //属性定义方式1：完整的方式，需要指定数据类型和默认值
    max:{
      type:Number,
      value:10,
      observer(){
        //这里也可以监听属性的变化
        console.log("执行onserver:"+this.properties.max)
      }
    },
    //属性定义方法2：简化的定义方式，只需指定数据类型即可
    age:Number,
    address:{
      type:Object,
      value:"default_address"//传过来的不一定是字符串，因为type:Object，传过来什么是什么类型
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    n1:0,
    n2:0,
    sum:0,
    rgb:{
      r:0,
      g:0,
      b:0
    },
    fullcolor:'0,0,0'
  },

  /**
   * 事件处理函数 和 自定义方法都需要定义到methods里
   * 所谓事件处理函数，就是例如bindtap="addCount"中的addCount就是事件处理函数；
   * _showToast()就是自定义方法
   */
  methods: {
    //事件处理函数
    addCount(){
      if(this.data.count > this.properties.max){
        return
      }
      this.setData({
        count:this.data.count+1
      })
      this._showToast()
    },
    //自定义函数
    _showToast(){
      wx.showToast({
        title: 'count值为：'+this.data.count,
        icon:'none'
      })
    },
    // data和properties是同一个对象，只是为了开发方便，定义出data可理解为组件的私有数据存储,定义出properties可理解为用于外界给组件传递数据
    compare(){
      console.log("data数据：",this.data)//打印出了count,max,age
      console.log("properties数据：",this.properties)//也打印出了count,max,age
      console.log("二者对比：",this.data === this.properties)//true
      //因此通过setData可以修改属性值
      this.setData({
        max:this.properties.max+1
      })
    },
    addN1(){
      this.setData({
        n1:this.data.n1+1
      })
    },
    addN2(){
      this.setData({
        n2:this.data.n2+1
      })
    },
    addR(){
      //更新data中对象的属性值
      this.setData({
        'rgb.r':this.data.rgb.r+5>255?255:this.data.rgb.r+5
      })
    },
    addG(){
      this.setData({
        'rgb.g':this.data.rgb.g+5>255?255:this.data.rgb.g+5
      })
    },
    addB(){
      this.setData({
        'rgb.b':this.data.rgb.b+5>255?255:this.data.rgb.b+5
      })
    },
    // 子传父第3步：在子组件的js中，通过triggerEvent将数据发送出去，其中diyEventName就是在父组件中自定义的，如果不需要传递参数{value:'123456'}可以省略
    sendDataToParentByEvent(){
      this.triggerEvent('diyEventName',{value:'123456'})
      // this.triggerEvent('diyEventName') 如果不需要传递参数，则这样即可
    }
  },
  options:{
    // styleIsolation:'isolated'
    // styleIsolation:'apply-shared'
    //插槽方式2：多个插槽，设置multipleSlots:true
    multipleSlots:true
  },
  observers:{
    //监听data或properties的n1和n2数据，其中n1和n2是原来的数据，newN1和newN2是变化后的数据
    'n1, n2':function(newN1,newN2){
      this.setData({
        sum:newN1+newN2
      })
    },
    //监听对象属性的变化
    'rgb.r, rgb.g, rgb.b':function(r,g,b){
      this.setData({
        fullcolor:`${r},${g},${b}`
      })
    },
    //使用通配符**监听对象所有属性的变化
    // 'rgb.**':function(obj){
    //   this.setData({
    //     fullcolor:`${obj.r},${obj.g},${obj.b}`
    //   })
    // }
  },

  // 以下是旧版的生命周期定义格式，不推荐使用
  // created(){
  //   console.log("执行旧版生命周期定义格式-created")
  // },
  // attached(){
  //   console.log("执行旧版生命周期定义格式-attached")
  // },
  // detached(){
  //   console.log("执行旧版生命周期定义格式-detached")
  // },
  //以下是新版生命周期定义格式，推荐这种方式，且同时使用新版和旧版的话，旧版的周期回调方法就不执行了
  lifetimes:{
    // 重要，在组件实例刚刚被创建时执行，此时还不能调用 setData，通常在这个生命周期函数中，只应该用于给组件的 this 添加一些自定义的属性字段
    created(){
      console.log("执行新版生命周期定义格式-created")
    },
    //重要，在组件完全初始化完毕、进入页面节点树后， attached 生命周期函数会被触发，此时， this.data 已被初始化完毕，这个生命周期很有用，绝大多数初始化的工作可以在这个时机进行（例如发请求获取初始数据）
    attached(){
      console.log("执行新版生命周期定义格式-attached")
    },
    //在组件在视图层布局完成后执行
    ready(){

    },
    //在组件实例被移动到节点树另一个位置时执行
    moved(){

    },
    //重要，在组件离开页面节点树后， detached 生命周期函数会被触发，退出一个页面时，会触发页面内每个自定义组件的 detached 生命周期函数，此时适合做一些清理性质的工作
    detached(){
      console.log("执行新版生命周期定义格式-detached")
    },
    //每当组件方法抛出错误时执行
    error(){

    }
  },
  //在自定义组件内部，也可以监听到组件当前所在页面的生命周期回调，方便组件内部做一些操作
  pageLifetimes:{
    //组件所在的页面被展示时执行
    show:function(){
      console.log("执行组件所在页面回调：show")
    },
    //组件所在的页面被隐藏时执行
    hide:function(){
      console.log("执行组件所在页面回调：hide")
    },
    //组件所在的页面尺寸变化时执行
    resize:function(){
      console.log("执行组件所在页面回调：resize")
    }
  }
})
