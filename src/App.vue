<template>
  <div id="app">
    <img src="./assets/logo.png">
      <p>
        <router-link to='/'>首页</router-link>
        <router-link to='/news'>新闻</router-link>
        <router-link to='/count'>vuex</router-link>
      </p>
    <transition name="fade" mode="out-in">
      <router-view/>
  </transition>

  <router-view class="fl" name="left"/>
  <router-view class="fr" name="right"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fl{
  height: 200px;
  float: left;
  width: 50%;
  background: #ddd;
}
.fr{
  height: 200px;
  float: right;
  width: 50%;
  background: #ccc;
}
/* 过度动画 */
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
</style>
