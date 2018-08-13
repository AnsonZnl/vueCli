<template lang="html">
  <div class="">
    <h1>{{news_title}}</h1>
      <p>
        <router-link to="/news/news_ent">娱乐新闻</router-link>
        <router-link to="/news/news_it">互联网新闻</router-link>
      </p>
    <transition name="fade" mode="out-in">
       <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      news_title: '这是新闻页'
    }
  },
  beforeRouteEnter:(to,form,next)=>{
    console.log("准备进入news路由");
    next();//可以在这里做一些切换路由时获取数据的操作
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log("离开news模板")
    next();
  }
}
</script>

<style lang="css" scoped>

</style>
