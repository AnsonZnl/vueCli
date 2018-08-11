# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).





饿了不预览：http://ansonznl.coding.me/vue-router-dome01/#/main2
饿了不参考：https://coding.net/u/AnsonZnl/p/vue-router-dome01/git/tree/master/src
## 安装vue-cli
1. ```npm install -g vue-cli```
2. `vue init webpack my-project`
3. `cd my-project`
//有的时候根据版本不同需要下载依赖  npm install
4. `npm run dev`   // dev代表下图框选的内容
5. `npm run build`


参考：https://blog.csdn.net/xiaoyangerbani/article/details/80735310
参考：http://jspang.com/2017/04/10/vue-cli/

## 第一节 vue-router
这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统。

1. ``npm install vue-router --save-dev``
//如果你在使用vue-cli中已经选择安装了vue-router，那这里不需要重复安装了。



参考：http://jspang.com/2017/04/13/vue-router/

router/index.js下添加一个路由：
```
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'

Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    },{
      path:'/hi',
      name:'Hi',
      component:Hi
    }
  ]
})
```
- router-link导航
```
<p>导航 ：
   <router-link to="/">首页</router-link>
   <router-link to="/hi">Hi页面</router-link>
</p>
```
## 第二节vue-router配置子路由
在Hi页面的下面新建两个子页面，分别是 “Hi页面1” 和 “Hi页面2”，来实现子路由。
app.vue的代码：
```
<p>导航 ：
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <router-link to="/hi/hi1">-Hi页面1</router-link> |
      <router-link to="/hi/hi2">-Hi页面2</router-link>
</p>
```
二、改写components/Hi.vue页面
把Hi.vue改成一个通用的模板，加入<router-view>标签，给子模板提供插入位置。“Hi页面1”   和 “Hi页面2”  都相当于“Hi页面”的子页面，有点想继承关系。我们在“Hi页面”里加入<router-view>标签。

components/Hi.vue,就是第5行的代码，其他代码不变。
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <router-view class="aaa"></router-view>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am JSPang'
    }
  }
}
</script>
<style scoped>

</style>
```
三、在components目录下新建两个组件模板 Hi1.vue 和 Hi2.vue
新建的模板和Hi.vue没有太多的差别，知识改变了data中message的值，也就是输出的结果不太一样了。

Hi1.vue
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am Hi1!'
    }
  }
}
</script>
<style scoped>

</style>
```
children字段后边跟的是个数组，数组里和其他配置路由基本相同，需要配置path和component。具体看一下这个子路由的配置写法。
```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path:'/hi',
      component:Hi,
      children:[
        {path:'/',component:Hi},
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
      ]
    }
  ]
})
```
需要注意的是，在配置路由文件前，需要先用import引入Hi1和Hi2。

总结：
这节课学的内容在路由配置里经常用到，比如我们作一个购物模块，购物模块里有很多相同的元素，我们就会利用这种子路由的形式，先定一个父页面，然后再修改子页面。希望这节课对你有帮助，其实子路由的步骤还是有些繁琐的，所以希望你们多练习几遍，能够完全掌握。
## 第3节：vue-router如何参数传递
开发中，参数的传递是个最基本的业务需求。通过URL地址来传递参数是一个形式，这节课我们就看看vue-router为我们提供了那些传递参数的功能。我们先想象一个基本需求，就是在我们点击导航菜单时，跳转页面上能显示出当前页面的路径，来告诉用户你想在所看的页面位置（类似于面包屑导航）。

### 一、用name传递参数
前两节课一直出现name的选项，但是我们都没有讲，这节课我们讲name的一种作用，传递参数。接着上节课的程序继续编写。

两步完成用name传值并显示在模板里：
1. 在路由文件src/router/index.js里配置name属性。
```
 routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
 ]
```
2. 模板里(src/App.vue)用{{$route.name}}（点击进入那个页面就是读取那个页面的name值）的形势接收，比如直接在模板中显示：
```
<p>{{ $route.name}}</p>
```
### 二、通过<router-link> 标签中的to传参
也许你也会觉的上边的传参很不正规，也不方便，其实我们多数传参是不用name进行传参的，我们用<router-link>标签中的to属性进行传参，需要您注意的是这里的to要进行一个绑定，写成:to。先来看一下这种传参方法的基本语法：

```
<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
```
这里的to前边是带冒号的，然后后边跟的是一个对象形势的字符串.

name：就是我们在路由配置文件中起的name值。
params：就是我们要传的参数，它也是对象形势，在对象里可以传递多个值。
了解基本的语法后，我们改造一下我们的src/App.vue里的<router-link>标签,我们把hi1页面的<router-link>进行修改。
```
 <router-link :to="{name:'hi1',params:{username:'jspang'}}">Hi页面1</router-link>
```

把src/reouter/index.js文件里给hi1配置的路由起个name,就叫hi1.

```
//配置路由名字 name hi1
 {path:'/hi1',name:'hi1',component:Hi1},
```
最后在模板里(src/components/Hi1.vue)用$route.params.username进行接收.

```
//接收username
{{$route.params.username}}
```
总结：
今天我们学习了两种传参的方法，一般会使用第二种方法。我们通过学习也知道了name的用途，一种作用是传参，一种作用是在传参时起到名称作用。传参的操作在实际开发中是基本的需求，我们一定要掌握好啊。
### 第4节：单页面多路由区域操作
实际需求是这样的，在一个页面里我们有2个以上<router-view>区域，我们通过配置路由的js文件，来操作这些区域的内容。例如我们在src/App.vue里加上两个<router-view>标签。我们用vue-cli建立了新的项目，并打开了src目录下的App.vue文件，在<router-view>下面新写了两行<router-view>标签,并加入了些CSS样式。
**App.vue：**
```
    <router-view></router-view>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
//name="left" right是left.vue的 name值
```
定义好后，我们需要在component文件夹下，新建left.vue和right.vue页面就可以了。
**component/left.vue | right.vue:**
```

<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'left'
//left = app.vue 里<router-view name="left"></router-view>
  data () {
    return {
      msg: '组件left'
    }
  }
}
</script>
```
现在的页面中有了三个<router-view>标签，也就是说我们需要在路由里配置这三个区域，配置主要是在components字段里进行。
**router/index.js:**
```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import left from '@/components/left'
import right from '@/components/right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:Hello,
//默认的 被挂载到谁上 被挂载到Hello上
        left:left,
//挂载的left值==  " <router-view name="left"></router-view> " 是 " left==import left from '@/components/left' "
        right:right
      }
    },{
      path: '/Hi',
      components: {
        default:Hello,
        left:left,
        right:right
      }
    }
  ]
})
```
### 第5节：vue-router 利用url传递参数
我们在第3节虽然已经学会传递参数，但是我们这些老程序员的情怀还是利用url来传值，因为我们以前在前后端没有分开开发的时候，经常这样做。在实际开发也是有很多用URL传值的需求，比如我们在新闻列表中有很多新闻标题整齐的排列，我们需要点击每个新闻标题打开不同的新闻内容，这时在跳转路由时跟上新闻编号就十分实用。

`:冒号`的形式传递参数
我们可以在理由配置文件里以:冒号的形式传递参数，这就是对参数的绑定。

1. 在配置文件里以冒号的形式设置参数。我们在/src/router/index.js文件里配置路由。
```
{
    path:'/params/:newsId/:newsTitle',
     component:Params
}
```
我们需要传递参数是新闻ID（newsId）和新闻标题（newsTitle）.所以我们在路由配置文件里制定了这两个值。
2. 在src/components目录下建立我们params.vue组件，也可以说是页面。我们在页面里输出了url传递的的新闻ID和新闻标题。
```
<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  }
}
</script>
```
3.在App.vue文件里加入我们的<router-view>标签。这时候我们可以直接利用url传值了。
```
<router-link to="/params/198/jspang website is very good">params</router-link> |
```
我们已经实现了以url方式进行传值，这在实际开发中经常使用，必须完全了解。我希望你看完视频后或者学完文章后能多练习两边，并在实际项目中充分使用。

正则表达式在URL传值中的应用
上边的例子，我们传递了新闻编号，现在需求升级了，我们希望我们传递的新闻ID只能是数字的形式，这时候我们就需要在传递时有个基本的类型判断，vue是支持正则的。

加入正则需要在路由配置文件里（/src/router/index.js）以圆括号的形式加入。
```
path:'/params/:newsId(\\d+)/:newsTitle',
```
加入了正则，我们再传递数字之外的其他参数，params.vue组件就没有办法接收到。
