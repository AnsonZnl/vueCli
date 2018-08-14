<template>
<div class="">
  <h2>{{msg}}</h2>
  <hr>
  <h3>{{$store.state.count}}</h3>
  <p>
    <!-- commit 提交 （fcuntion） -->
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </p>
</div>
</template>

<script>
//引用
import store from '@/vuex/store';
export default {
  data(){
    return {
      msg: 'hello vuex'
    }
  },
  store
}
</script>

<style lang="css">
</style>
