# vuecli
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




# vue-cli
参考：
- 新闻资讯pages：http://ansonznl.coding.me/vue-router-dome2/#/main1
 新闻资讯code：https://coding.net/u/AnsonZnl/p/vue-router-dome2/git
- 饿了吗code：https://coding.net/u/AnsonZnl/p/vue-router-dome01/git
饿了吗pages:https://coding.net/u/AnsonZnl/p/vue-router-dome01/git
- vue-cli参考：http://jspang.com/2017/04/10/vue-cli/
- vue-router参考：http://jspang.com/2017/04/13/vue-router/

1 安装vue-cli: 	`npm install vue-cli -g`
2 初始化项目: `vue init <template-name> <project-name>`
3 init：表示我要用vue-cli来初始化项目

<template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，

webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。

webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。

browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。

browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。

simple-一个最简单的单页应用模板。

<project-name>：标识项目名称，这个你可以根据自己的项目来起名字。

在实际开发中，一般我们都会使用webpack这个模板，那我们这里也安装这个模板，在命令行输入以下命令：
`vue init webpack vuecliTest`

输入命令后，会询问我们几个简单的选项，我们根据自己的需要进行填写就可以了。

* Project name :项目名称 ，如果不需要更改直接回车就可以了。注意：这里不能使用大写，所以我把名称改成了vueclitest
* Project description:项目描述，默认为A Vue.js project,直接回车，不用编写。
* Author：作者，如果你有配置git的作者，他会读取。
* Install  vue-router? 是否安装vue的路由插件，我们这里需要安装，所以选择Y
* Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。我们这里不需要输入n，如果你是大型团队开发，最好是进行配置。
* setup unit tests with  Karma + Mocha? 是否需要安装单元测试工具Karma+Mocha，我们这里不需要，所以输入n。
* Setup e2e tests with Nightwatch?是否安装e2e来进行用户行为模拟测试，我们这里不需要，所以输入n。
进入：`cd vuecliTest `
启动：`npm run dev`

## Vue-router

[^xr1]:vue-router

参考：http://jspang.com/2017/04/13/vue-router/

### 下载vue-router
`npm install vue-router --save-dev`
### 跳转：
`<router-link to=''></router-link>`跳转
### vue-router配置子路由 新闻页
```
//news.vue
<p>
  <router-link to="/news/news_ent">娱乐新闻</router-link>
  <router-link to="/news/news_it">互联网新闻</router-link>
</p>
//router/index.js
{
  path: '/news',
  name: '新闻',
  component: news,
  children: [
    {path: '/', component: news_it},  //默认打开news显示的是it
    {path: 'news_it', component: news_it},
    {path: 'news_ent', component: news_ent}
  ]
}
```
### vue-router如何参数传递
**params传参**
news_it.vue:
传递到name为‘news_it_pages’的vue文件里，传递的数据是
`params:{date:value.date,title:value.title,author:value.author,content:value.content`
```
<ul>
      <li v-for="(value,index) in num">
        <router-link class="block" :to="{name:'news_it_pages',params:{date:value.date,title:value.title,author:value.author,content:value.content}}">
                             {{value.title}}
        </router-link>
      </li>
    </ul>
```
router.js:
```
routes: [                     //配置路由
    {                           //每一个链接都是一个对象
      path: '/',               //链接对象
      name: '首页',            //路由名称
      component: home         //对应的组件模板
    },{
      path: '/news',
      name: '新闻',
      component: news,
      children: [
        {path: '/', name: 'news_it',component: news_it},
        {path: 'news_it', component: news_it},
        {path: 'news_it_pages', name: 'news_it_pages', component: news_it_pages},
        {path: 'news_ent', component: news_ent}
      ]
    }
  ]
```
`this.$route.params`接收：
```
<template>
        <div class="mains">
           <div class="text-center main">
                <h2>详情内容</h2>
                <h3>{{titles}}</h3>
                 <div>
                    <p class="block">发布时间：{{dates}}</p>
                    <p class="block">作者：{{authors}}</p>
                 </div>
                    <div class="left m4-auto">
                    <p v-html="contents" style="text-align: left;">{{contents}}</p>
                </div>
            </div>
             <router-link to="/news/news_it">返回</router-link>
     </div>
</template>
<style>
.main{
  width: 400px;
  margin: auto;
}
</style>
<script>
export default{
//暴露一下
        data(){
            return{
                titles:"",
                dates:"",
                authors:"",
                contents:""
            }
        },
        beforeMount:function(){
            this.titles=this.$route.params.title;
            this.dates=this.$route.params.date;
            this.authors=this.$route.params.author;
            this.contents=this.$route.params.content;
        }
    }
</script>

```
### 引入elementUI
ElementUI,是一个比较完善的UI库，但是使用它需要有一点vue的基础。

安装ElementUI模块
`
cnpm install element-ui -S
`

在router.js中引入
```
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)   //vue全局使用router
Vue.use(ElementUI)
```
然后在home.vue中引用
` <el-button type="primary">主要按钮</el-button>`

安装完记得重新运行，`cnpm run dev`   ，现在就可以直接使用elementUI了。

### 单页面多路由区域操作
在vue文件里的style 添加 `<style scoped>...</style>` 的样式 仅会作用域这个vue文件，不会污染其他文件。
**在一个页面里我们有2个以上<router-view>区域，我们通过配置路由的js文件，来操作这些区域的内容**
app.vue:
```
    <router-view/>
    <router-view class="fl" name="left"/>
    <router-view class="fr" name="right"/>
```
在compontents/hemoLeft.vue和components/hemoRight.vue:
```
<template>
  <h2>{{msg}}</h2>
</template>

<script>
export default {
    data(){
      return {
        msg: 'hemo right'
      }
    }
}
</script>

<style lang="css">
</style>

```
配置路由 router.js:
```
{                           //每一个链接都是一个对象
      path: '/',               //链接对象
      name: '首页',            //路由名称
      components: {
        default: home,
        left: left,
        right: right
      }
```
### 路由重定向和别名
> redirect和alias的区别
redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。

###  路由的过渡动画

在开发中有一种需求叫高端、大气、上档次。所以作为一个大前端有责任让你的程序开起来更酷炫。可以在页面切换时我们加入一些动画效果，提升我们程序的动效设计。这节课我们就学习一下路由的过渡动画效果制作。

想让路由有过渡动画，需要在<router-view>标签的外部添加<transition>标签，标签还需要一个name属性。:
```
<transition name="fade">
  <router-view ></router-view>
</transition>
```
我们在/src/App.vue文件里添加了<transition>标签，并给标签起了一个名字叫fade。

css过渡类名：
组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：

- fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
- fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
- fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
- fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
从上面四个类名可以看出，fade-enter-active和fade-leave-active在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。

那我们就在App.vue页面里加入四种CSS样式效果，并利用CSS3的transition属性控制动画的具体效果。代码如下：

```
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
```
上边的代码设置了改变透明度的动画过渡效果，但是默认的mode模式in-out模式，这并不是我们想要的。下面我们学一下mode模式。

过渡模式mode：
in-out:新元素先进入过渡，完成之后当前元素过渡离开。
out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

### mode的设置和404页面的处理
在学习过渡效果的时候，我们学了mode的设置，但是在路由的属性中还有一个mode。这节课我们就学习一下另一个mode模式和404页面的设置。

mode的两个值
histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！
hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。
具体的效果我在视频中会有所掩饰，不理解的小伙伴可以到视频中进行查看。

404页面的设置：
用户会经常输错页面，当用户输错页面时，我们希望给他一个友好的提示，为此美工都会设计一个漂亮的页面，这个页面就是我们常说的404页面。vue-router也为我们提供了这样的机制.

1.设置我们的路由配置文件（/src/router/index.js）：
```
{
   path:'*',
   component:Error
}
```

这里的path:’*’就是找不到页面时的配置，component是我们新建的一个Error.vue的文件。

2.新建404页面：

在/src/components/文件夹下新建一个Error.vue的文件。简单输入一些有关错误页面的内容。
```
<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Error:404'
    }
  }
}
</script>
```
然后瞎写一个router-link 看看效果：
```
 <router-link to="/bbbbbb">我是瞎写的</router-link> |
```
### 路由中的钩子
我们知道一个组件从进入到销毁有很多的钩子函数，同样在路由中也设置了钩子函数。路由的钩子选项可以写在路由配置文件中，也可以写在我们的组件模板中。我们这节课就介绍这两种钩子函数的写法。

路由配置文件中的钩子函数
我们可以直接在路由配置文件（/src/router/index.js）中写钩子函数。但是在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时。先来看一段具体的代码：

```
{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
```
我们在params路由里配置了bdforeEnter得钩子函数，函数我们采用了ES6的箭头函数，需要传递三个参数。我们并在箭头函数中打印了to和from函数。具体打印内容可以在控制台查看object。

三个参数：

to:路由将要跳转的路径信息，信息是包含在对像里边的。
from:路径跳转前的路径信息，也是一个对象的形式。
next:路由的控制参数，常用的有next(true)和next(false)。
写在模板中的钩子函数
在配置文件中的钩子函数，只有一个钩子-beforeEnter，如果我们写在模板中就可以有两个钩子函数可以使用：
```
beforeRouteEnter：在路由进入前的钩子函数。
beforeRouteLeave：在路由离开前的钩子函数。
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>
```
这是我们写在params.vue模板里的路由钩子函数。它可以监控到路由的进入和路由的离开，也可以轻易的读出to和from的值。
### 编程式导航  前进后退 跳转
this.$router.go(-1) 和 this.$router.go(1)
这两个编程式导航的意思是后退和前进，功能跟我们浏览器上的后退和前进按钮一样，这在业务逻辑中经常用到。比如条件不满足时，我们需要后退。
router.go(-1)代表着后退，我们可以让我们的导航进行后退，并且我们的地址栏也是有所变化的。
1.我们先在app.vue文件里加入一个按钮，按钮并绑定一个goback( )方法。
```
<button @click="goback">后退</button>
```
2.在我们的script模块中写入goback()方法，并使用this.$router.go(-1),进行后退操作。
```
<script>
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>
```
我们设置一个按钮，点击按钮后回到站点首页。

1.先编写一个按钮，在按钮上绑定goHome( )方法。
```
<button @click="goHome">回到首页</button>
```
2.在<script>模块里加入goHome方法，并用this.$router.push(‘/’)导航到首页
```
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
```

## vuex
参考：https://blog.csdn.net/weixin_35955795/article/details/57412181
>vuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据.
### 引入vuex
1.利用npm包管理工具，进行安装 vuex。在控制命令行中输入下边的命令就可以了。
`cnpm install vuex --save`
一定要加上 --save 因为这个包我们在生产环境中使用。
2.新建一个vuex文件夹（这个不是必须的），并在文件夹下新建store.js文件，文件中引入我们的vue和vuex。
```
import Vue from 'vue';
import Vuex from 'vuex';
```
3.使用我们的vuex，引用之后用Vue.use进行引用。
`Vue.use(Vuex)`
通过这三步的操作，vuex就算引用成功了
4.现在我们store.js文件里增加一个常量对象。store.js文件就是我们在引入vuex时的那个文件。
```
const state = {
    count:1
}
```
5.用export default 封装代码，让外部可以引用。
```
export default new Vuex.Store({
	state
})
```
6.新建一个vue的模板，位置在components文件夹下，名字叫count.vue。在模板中我们引入我们刚建的store.js文件，并在模板中用{{$store.state.count}}输出count 的值。
```
<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    export default{
        data(){
            return{
                msg:'Hello Vuex',

            }
        },
        store

    }
</script>
```
7.在store.js文件中加入两个改变state的方法。
```
const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
```
这里的mutations是固定的写法，意思是改变的，我们到时候会用一节课专门讲这个mutations，所以你先不用着急，只知道我们要改变state的数值的方法，必须写在mutations里就可以了。

8.在count.vue模板中加入两个按钮，并调用mutations中的方法。
```
<div>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
</div>
```
这样进行预览就可以实现对vuex中的count进行加减了。
### 第2节：state访问状态对象
> 在第1节我们已经写了一个 const state ，这个就是我们说的访问状态对象，它就是我们SPA（单页应用程序）中的共享值。今天我们主要学习状态对象赋值给内部对象，也就是把stroe.js中的值，赋值给我们模板里data中的值。我们有三种赋值方式，我们一个一个来学习一下。

#### 一、通过computed的计算属性直接赋值
computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把store.js中的state值赋值给我们模板中的data值。

```
computed:{
    count(){
        return this.$store.state.count;
    }
}
```
这里需要注意的是return this.$store.state.count这一句，一定要写this，要不你会找不到$store的。这种写法很好理解，但是写起来是比较麻烦的，那我们来看看第二种写法。

#### 二、通过mapState的对象来赋值
参考：https://www.cnblogs.com/wjylca/p/7055042.html
我们首先要用import引入mapState。
```
import {mapState} from 'vuex';
```
然后还在computed计算属性里写如下代码：

```
computed:mapState({
        count:state=>state.count
 })
```
这里我们使用ES6的箭头函数来给count赋值。

#### 三、通过mapState的数组来赋值
```
 computed:mapState(["count"])
```
这个算是最简单的写法了，在实际项目开发当中也经常这样使用。

这就是三种赋值方式，是不是很简单，虽然简单，但是在实际项目中经常使用，一定要自己动手练习两遍啊。

###  第3节：Mutations修改状态
参考：https://segmentfault.com/a/1190000009119500
> 学习一下怎么样修改状态。这个常量我们在第一节课的时候也碰到过，并且进行了加减的操作。我们就具体学习一下，如何操作Mutations。
**$store.commit( )**
Vuex提供了commit方法来修改状态，我们粘贴出第一节课的代码内容，简单回顾一下，我们在button上的修改方法。
```
<button @click="$store.commit('add')">+</button>
<button @click="$store.commit('reduce')">-</button>
```
store.js文件：

```
const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
```
传值：
这只是一个最简单的修改状态的操作，在实际项目中我们常常需要在修改状态时传值。比如上边的例子，是我们每次只加1，而现在我们要通过所传的值进行相加。其实我们只需要在Mutations里再加上一个参数，并在commit的时候传递就就可以了。我们来看具体代码：

现在store.js文件里给add方法加上一个参数n。添加的地方我已经标黄了。
```
nst mutations={
    add(state,n){//参数n
        state.count+=n;
    },
    reduce(state,m){
        state.count--=m;
    }
}
```
在Count.vue里修改按钮的commit( )方法传递的参数，我们传递10，意思就是每次加10.
```
<p>
   <button @click="$store.commit('add',10)">+</button>
   <button @click="$store.commit('reduce(10)')">-</button>
</p>
```
这样两个简单的修改我们就完成了传值，我们可以在浏览器中实验一下了。

模板获取Mutations方法
实际开发中我们也不喜欢看到$store.commit( )这样的方法出现，我们希望跟调用模板里的方法一样调用。

例如：@click=”reduce(10)”   就和没引用vuex插件一样。

要达到这种写法，只需要简单的两部就可以了：

在模板count.vue里用import 引入我们的mapMutations：
```
import { mapState,mapMutations } from 'vuex';
```

在模板的<script>标签里添加methods属性，并加入mapMutations
```
 methods:mapMutations([
        'add','reduce'
]),
```

通过上边两部，我们已经可以在模板中直接使用我们的reduce或者add方法了，就像下面这样。
```
<button @click="reduce(10)">-</button>
```

### 第4节：getters计算过滤操作
参考：https://blog.csdn.net/youzhiningo/article/details/79640388


上传：

1、 assetsPublicPath: './',   修改路径

2、终端输入 npm run  build  命令  生成  dist  文件

3、把dist文件里的冬冬上传就可以了
>Getters 我们可以理解为store仓库的一个计算属性，它的作用主要是用来派生出一些新的状态。比如我们要把state状态的数据进行一次映射或者筛选，再把这个结果重新计算并提供给组件使用。举个例子：

getters从表面是获得的意思，可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工。你可以把它看作store.js的计算属性。

getters基本用法：
比如我们现在要对store.js文件中的count进行一个计算属性的操作，就是在它输出前，给它加上100.

我们首先要在store.js里用const声明我们的getters属性。


```
const getters = {
    count:function(state){
        return state.count +=100;
    }
}
```
写好了gettters之后，我们还需要在Vuex.Store()里引入，由于之前我们已经引入了state盒mutations，所以引入里有三个引入属性。代码如下，

```
export default new Vuex.Store({
    state,mutations,getters
})
```
在store.js里的配置算是完成了，我们需要到模板页对computed进行配置。在vue 的构造器里边只能有一个computed属性，如果你写多个，只有最后一个computed属性可用，所以要对上节课写的computed属性进行一个改造。改造时我们使用ES6中的展开运算符”…”。

```
computed:{
    ...mapState(["count"]),
    count(){
        return this.$store.getters.count;
    }
},
```
需要注意的是，你写了这个配置后，在每次count 的值发生变化的时候，都会进行加100的操作。

用mapGetters简化模板写法：
我们都知道state和mutations都有map的引用方法把我们模板中的编码进行简化，我们的getters也是有的，我们来看一下代码。

首先用import引入我们的mapGetters

`import { mapState,mapMutations,mapGetters } from 'vuex'`

在computed属性中加入mapGetters
`...mapGetters(["count"])`
相信大家已经会了getters的用法，那我们下节课见了。































## localStorage和sessionStorage操作

localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

localStorage和sessionStorage的方法
setItem存储value
用途：将value存储到key字段
用法：.setItem( key, value)
代码示例：

	sessionStorage.setItem("key", "value"); 	localStorage.setItem("site", "js8.in");
getItem获取value
用途：获取指定key本地存储的值
用法：.getItem(key)
代码示例：

	var value = sessionStorage.getItem("key"); 	var site = localStorage.getItem("site");
removeItem删除key
用途：删除指定key本地存储的值
用法：.removeItem(key)
代码示例：

	sessionStorage.removeItem("key"); 	localStorage.removeItem("site");
clear清除所有的key/value
用途：清除所有的key/value
用法：.clear()
代码示例：

	sessionStorage.clear(); 	localStorage.clear();
其他操作方法：点操作和[]
web Storage不但可以用自身的setItem,getItem等方便存取，也可以像普通对象一样用点(.)操作符，及[]的方式进行数据存储，像如下的代码：
```
var storage = window.localStorage; storage.key1 = "hello";
storage["key2"] = "world"; console.log(storage.key1);
console.log(storage["key2"]);
```
localStorage和sessionStorage的key和length属性实现遍历
sessionStorage和localStorage提供的key()和length可以方便的实现存储的数据遍历，例如下面的代码：
```
var storage = window.localStorage;
 for (var i=0, len = storage.length; i  <  len; i++)
   {
 var key = storage.key(i);
 var value = storage.getItem(key);
 console.log(key + "=" + value);
}
```
storage事件
storage还提供了storage事件，当键值改变或者clear的时候，就可以触发storage事件，如下面的代码就添加了一个storage事件改变的监听：
```
if(window.addEventListener){
window.addEventListener("storage",handle_storage,false);
}else if(window.attachEvent){
window.attachEvent("onstorage",handle_storage);
 }
function handle_storage(e){if(!e){e=window.event;}}
```
