# vue-cli
参考：
- 新闻资讯pages：http://ansonznl.coding.me/vue-router-dome2/#/main1
- 新闻资讯code：https://coding.net/u/AnsonZnl/p/vue-router-dome2/git
- 饿了吗code：https://coding.net/u/AnsonZnl/p/vue-router-dome01/git
- 饿了吗pages:https://coding.net/u/AnsonZnl/p/vue-router-dome01/git
- vue-cli参考：http://jspang.com/2017/04/10/vue-cli/
- vue-router参考：http://jspang.com/2017/04/13/vue-router/

- 安装vue-cli: 	`npm install vue-cli -g`
- 初始化项目: `vue init <template-name> <project-name>`
- init：表示我要用vue-cli来初始化项目

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
