<template>
  <div class="">
    <h1>{{ msg }}</h1>
       <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '这是首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
