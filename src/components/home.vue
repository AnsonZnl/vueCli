<template>
  <div class="">
    <h1>{{ msg }}</h1>
       <el-button type="primary">主要按钮</el-button>
       <el-button plain  @click="open"> 可自动关闭 </el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '这是首页'
    }
  },
   methods: {
      open() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案')
        });
      }
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
