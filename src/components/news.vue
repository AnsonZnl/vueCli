<template lang="html">
  <div class="">
    <h1>{{news_title}}</h1>
      <p>
        <router-link to="/news/news_ent">娱乐新闻</router-link>
        <router-link to="/news/news_it">互联网新闻</router-link>
      </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      news_title: '这是新闻页'
    }
  }
}
</script>

<style lang="css" scoped>

</style>
