//调用Behavior()方法创建Behavior实例，然后使用module.exports将实例分享出去
module.exports = Behavior({
  properties:{
    behaviroProperties:{
      type:String,
      value:"我是behaviors里的属性"
    }
  },
  data:{
    behaviorData:{name:"我是Behavior的data"}
  },
  methods:{
    toLog(){
      console.log("执行behavior里的toLog")
    }
  }
})