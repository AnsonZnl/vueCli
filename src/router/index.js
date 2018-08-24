import Vue from 'vue'                           //引入vue
import Router from 'vue-router'
import home from '@/components/home'//引入根目录下的Hello。vue组件
import news from '@/components/news'
import news_it from '@/components/news_it'
import news_ent from '@/components/news_ent'
import news_it_pages from '@/components/news_it_pages'
import left from '@/components/homeLeft'
import right from '@/components/homeRight'
import Error from '@/components/Error'
import Count from '@/components/Count'
import Hitokoto from '@/components/Hitokoto'
import Todo from '@/components/Todo'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)   //vue全局使用router
Vue.use(ElementUI)

export default new Router({
  mode: 'history',//路径去掉#模式  hash增加一个#
  routes: [                     //配置路由
    {                           //每一个链接都是一个对象
      path: '/',               //链接对象
      name: '首页',            //路由名称
      components: {
        default: home,
        left: left,
        right: right
      }         //对应的组件模板
    },{
      path: '/news',
      // name: '新闻',
      component: news,
      children: [
        {path: '/', name: 'news_it',component: news_it},
        {path: 'news_it', component: news_it},
        {path: 'news_it_pages', name: 'news_it_pages', component: news_it_pages},
        {path: 'news_ent', component: news_ent}
      ]
      //钩子函数进入
      // beforeEnter:(to,form,next)=>{
      //   console.log(to);
      //   console.log(form);
      //   next();//控制跳转 next(false)  next(path:'/')
      // }
    },
    //404page
    {
      path: '*',
      component: Error
    },
    {
      path: '/count',
      component: Count
    },
    {
      path: '/Hitokoto',
      component: Hitokoto
    },
    {
      path: '/Todo',
      component: Todo
    }
  ]
})
