//在组件中使用store数据1:导入storeBindingsBehavior 和 store
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
    //在组件中使用store数据2：组件使用store是通过behavior实现数据绑定的
  behaviors:[storeBindingsBehavior],  
  //在组件中使用store数据3：定义storeBindings，其中fields可列出当前组件要使用的store里的数据,可更改数据变量名；actions列出当前组件要使用的store里的方法，可更改方法名。
  storeBindings:{
      store,
      fields:{
          numA:()=>store.numA,//其中属性名numA可以任意起名
          numB:(store)=>store.numB,
          sum:'sum'
      },
      actions:{
          updateNumB:'updateNumB'//其中属性名updateNumB可以任意取名
      }
  },
  properties: {

  },

  data: {

  },

  methods: {
    btnHandler2(e){
        //在组件中使用store数据5：使用步骤“在组件中使用store数据3”中定义的方法
        this.updateNumB(e.target.dataset.step)
    }
  }
})
