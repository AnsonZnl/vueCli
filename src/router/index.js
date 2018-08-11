import Vue from 'vue'                           //引入vue
import Router from 'vue-router'
import home from '@/components/home'//引入根目录下的Hello。vue组件
import news from '@/components/news'
import news_it from '@/components/news_it'
import news_ent from '@/components/news_ent'
import news_it_pages from '@/components/news_it_pages'



Vue.use(Router)   //vue全局使用router

export default new Router({
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
})
