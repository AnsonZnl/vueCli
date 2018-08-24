<template>
<div class="">
  <h1>{{title}}</h1>
  <input
  type="text"
  placeholder="请输入您要做的事情..."
  @keyup.enter="addList"
  >
  <ul>
    <li v-for="todo in todoList">
      <input type="checkbox">
      <span>{{todo.content}}</span>
    </li>
  </ul>

</div>
</template>

<script>
var id = 0
export default {
  data(){
    return{
      title:"My Todo",
      todoList:[]
    }
  },
  methods:{
    addList(a){
      console.log(a)
      this.todoList.unshift({
        // id: id++,
        content: a.target.value.trim(),
        // completed: false
      })
      a.target.value = ""
    }
  }
}
</script>

<style lang="css">
input[type = "text"]{
  width:500px;
  height: 50px;
  font-size: 22px;
  text-indent: 15px;
}
ul {
  clear: both;
  width: 500px;
  margin: auto;
  padding: 10px;
}
ul li{
  float: left;
  width: 100%;
  text-align: left;
  font-size: 25px;
}
ul li input[type = "checkbox"]{
  font-size: 35px;
}
</style>
