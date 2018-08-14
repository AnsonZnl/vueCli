<template>
  <div>
    <h2>{{msg}}</h2>
    <el-input class="editInput" v-model="editInput" placeholder="请输入内容"></el-input>
    <!-- <el-button type="primary" @click="editInput">编辑</el-button> -->
  </div>
</template>

<script>
export default {
    data(){
      return {
        msg: 'hemo right',
        editInput: localStorage.getItem("input")
      }
    },
    methods:{
      // editInput(){
      //   console.log("123")
      //   // localStorage.setItem('input',this.input)
      // }
    }
}
</script>

<style scoped>
.editInput{
  width:250px;
}
</style>
