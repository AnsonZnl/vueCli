<template>
 <div id="app">
  <div class='vue-demo'>
   <input type="text" class="txt" v-model='newItem' placeholder="请输入您要做的事情..." @keyup.enter='addItemFun'>
   <ul>
    <li v-for="its in items">
      <input type="checkbox">
      <span>{{its.name}}</span>
      <b @click="del">❌</b>
    </li>
   </ul>
  </div>
 </div>
</template>
<script>
import store from './store'
export default {
 name: 'app',
 data() {
  return {
   newItem: '',
   items: store.fetch()
  }
 },
 watch: {
  items: {
   handler: function(val, oldVal) {
    store.save(val);
   },
   deep: true
  }
 },
 methods: {
  addItemFun() {
   var _this = this;
   _this.items.unshift({ 'name': _this.newItem });
   _this.newItem = '';
 },
 del(e){
   console.log(e);
   console.log(e.path[1])
   e.path[1].style.display = "none"
 }
}
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
input[type = "text"]{
  width:500px;
  height: 50px;
  font-size: 22px;
  text-indent: 15px;
}
.vue-demo {
 width: 500px;
 margin: auto;
}

.txt {
 width: 200px;
 height: 25px;
 line-height: 24px;
 border-radius: 5px;
}
ul {
  clear: both;
  width: 500px;
  margin: auto;
  padding: 10px;
}
.vue-demo>ul>li{
  float: left;
  width: 100%;
  text-align: left;
  font-size: 25px;
  cursor: pointer;
  padding:5px 10px;
  border-radius: 5px;
}
ul li input[type = "checkbox"]{
  font-size: 35px;
}
ul li b{
  float: right;
}
ul li:hover{
  background: #32ce73;
}

</style>
