<template>
  <div class="">
    <h2>{{msg}}</h2>
    <el-input class="textInput" v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="addInput">添加</el-button>
    <p>{{input}}</p>
  </div>

</template>

<script>
export default {
    data(){
      return {
        msg: 'hemo left',
        input: ''
      }
    },
    methods:{
      addInput(){
        console.log(this.input);
        localStorage.setItem('input',this.input)
      }
    }
}
</script>

<style scoped>
h2{
  color: red;
}
.textInput{
  width:250px;
}
</style>
