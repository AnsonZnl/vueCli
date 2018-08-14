<template>
<div class="main">
  <h2>{{msg}}</h2>
  <hr>
  <h3>{{count}}</h3>
  <p>
    <!-- commit 提交 （fcuntion）  传参方式 2种 -->
    <el-button type="primary" @click="$store.commit('add',10)">+</el-button>
    <el-button type="primary" @click="reduce(10)">-</el-button>
  </p>
  <br>
  <hr>
  <br>
  <ul>
    <!-- <li>
      <strong class="textLeft">id</strong>
      <strong class="textCenter">name</strong>
      <strong class="textRight">score</strong>
    </li> -->
    <li v-for="item in arrList">
      {{item}}
      <!-- <span class="textLeft">{{item.id}}</span>
      <span class="textCenter">{{item.name}}</span>
      <span class="textRight">{{item.score}}</span> -->
    </li>
  </ul>
</div>
</template>

<script>
//引用
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters } from 'vuex';

export default {
  data(){
    return {
      msg: 'hello vuex'
    }
  },
  store,
  //访问状态对象 使用计算属性
  // computed:mapState(['count','arr']),
  computed:{
    ...mapState(['count']),
    ...mapGetters(['count','arrList'])
  },
  //模板获取Mutations方法
  methods:mapMutations(['add','reduce']),

}
</script>

<style>
.main ul {
  width: 250px;
  margin: auto;
}
.main ul li {
    display: block;
}
.textLeft{
  display: inline-block;
  width:30%;
  text-align: left;
}
.textCenter{
  display: inline-block;
  width:30%;
  text-align: center;
}
.textRight{
  display: inline-block;
  width:30%;
  text-align: right;
}
</style>
