 ### # 1.Vuejs的认识和安装

#### 1.1基本使用

    1). 引入vue.js
    2). 创建Vue实例对象(vm), 指定选项(配置)对象
        el : 指定dom标签容器的选择器
        data : 指定初始化状态数据的对象/函数(返回一个对象)
    3). 在页面模板中使用{{}}或vue指令

#### 1.2Vue对象的选项

###### 1). el

    指定dom标签容器的选择器
    Vue就会管理对应的标签及其子标签

##### 2). data

    对象或函数类型
    指定初始化状态属性数据的对象
    vm也会自动拥有data中所有属性
    页面中可以直接访问使用
    数据代理: 由vm对象来代理对data中所有属性的操作(读/写)

##### 3). methods

    包含多个方法的对象
    供页面中的事件指令来绑定回调
    回调函数默认有event参数, 但也可以指定自己的参数
    所有的方法由vue对象来调用, 访问data中的属性直接使用this.xxx

##### 4). computed

    包含多个方法的对象
    对状态属性进行计算返回一个新的数据, 供页面获取显示
    一般情况下是相当于是一个只读的属性
    利用set/get方法来实现属性数据的计算读取, 同时监视属性数据的变化
    如何给对象定义get/set属性
        在创建对象时指定: get name () {return xxx} / set name (value) {}
          对象创建之后指定: Object.defineProperty(obj, age, {get(){}, set(value){}})

## 
#### 1.3 Vue的生命周期函数

定义：从Vue实例创建，运行，到销毁期间，总是伴随着各种各样的事件，这些事件统称为**生命周期**

![img](https://img-blog.csdnimg.cn/20191027161848413.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzMwMjI4,size_16,color_FFFFFF,t_70)

const vm =new Vue({})创建一个Vue实例对象

beforeCreate

初始化data和methods

**created**  实例已经创建好，还没有开始编译模板（如果要操作data中的数据或是调用methods中的方法，最早只能在created中操作）

beforeMount

**mounted**    将编译好的template挂载到页面指定的容器中

**update**     实例更新完毕之后调用此函数，页面和data数据保持同步

**destroyed**

#### 1.4过滤器

1).定义：对需要显示的数据进行格式化后再显示

2). 编码

    1). 定义过滤器
        Vue.filter(filterName, function(value[,arg1,arg2,...]){
          // 进行一定的数据处理
          return newValue
        })
    2). 使用过滤器
        <div>{{myData | filterName}}</div>
        <div>{{myData | filterName(arg)}}</div>

#### 1.5 Vue内置语言

**v-for**     v-for="item in  names"

**v-on**     事件监听   v-on:click="counter++"  语法糖 @

**v-bind**     事件绑定   v-bind:src="imgURL"   语法糖  ：

**v-model**  双向绑定      v-model="message"  一般是input或者是select等

**v-if**

### 2.组件化实现

##### 1）vue组件化的基本使用

```
//1.创建组件构造器对象   extend:继承 template：模板  component:组件
const cpnConstructor = Vue.extend({  
template:`    
<div>        
   <h2>我是标题</h2>  
   <p>我是内容，哈哈哈哈哈</p>     
   <p>我是内容，呵呵呵呵呵</p>  
</div>`
})
//2.注册组件   组件的标签名  组件构造器
Vue.component('my-cpn',cpnConstructor); 
const app=new Vue({   
el:"#app",   
data:{ 
message: '你好啊！'    
}  
})
```

##### 2）全局组件和局部组件

局部组件

```
const app = new Vue({ 
el: "#app",  
data: {   
message: '你好啊！' 
},  //局部组件
components:{  
//cpn使用组件时的标签名  
cpn:cpnC  
}
})
```

##### 3）父传子，子传父

```
父传子：props
```

```
props:{  
  //1.类型限制 
// cmovies:Array, 
// cmessage:String  
//2.提供一些默认值,以及必传值 
cmessage:{  
  type:String,  
  default:'aaaaa',    //若不传值，默认值  
  required:true       //必传值 
}, 
//类型是对象或者数组时，默认值必须是一个函数 
cmovies: {   
  type: Array,  
  default() {
//vue2.5.17以下
     return []   
}  
}},
```

子传父（自定义事件）

```
methods:{  
btnclick(item){ 
// console.log(item); 
//发射自定义事件   
this.$emit('item-click',item)  
}}
```

均是在子组件内完成

##### 4）slot插槽

```
<!--//组件的插槽是为了让封装的组件更加具有扩展性-->
<!--1.插槽的基本使用<slot></slot>
    2.插槽的默认值<slot>button</slot>
    3.如果有多个值，同时放入到组件进行替换时，一起作为替换元素
    -->
```

##### 5) 前端模块化

### 4.webpack安装配置及使用

### 5.Vuecli2、3

### 6.前端路由 v-router

### 7.tabbar组件化封装

### 8.promise

```
//什么情况下会用到promise？ 
//一般情况下是有异步操作，使用promise对这个异步操作进行封装  
//new->构造函数（1.保存了一些状态信息 2.执行传入的函数) 
//在执行传入的回调函数时，会传入两个参数，resolve，reject，本身又是函数
```

```
new Promise((resolve,reject)=>{  
setTimeout(()=>{   
//成功时调用resolve    
// resolve('Hello World')  
//失败的时候调用reject  
reject('error message') 
})
}).then((data)=>{ 
//1.100行的处理代码
console.log(data); 
console.log(data); 
console.log(data);
}).catch((err)=>{  
console.log(err);
})
```

链式调用。。。

### 9、vuex

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。

![vuex](https://vuex.vuejs.org/vuex.png)



###  10.axios网络请求模块封装













