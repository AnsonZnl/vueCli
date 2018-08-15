<template>
  <div class="">
    <h2>{{msg}}</h2>
    <p>{{text}}</p>
    <hr><hr>

    <br><br>
    <el-button type="primary" @click="f5">换一换</el-button>
    <br><br><br>
    {{data.hitokoto}}
    <br>
    ------ {{data.from}}
  </div>
</template>

<script>
import axios from 'axios';//引入axios
export default {
    data(){
      return {//https://v1.hitokoto.cn/
        msg:'一言',
        text: "一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子",
        data: ''

      }
    },
    methods:{
       f5(){
         // this.created();
        this.$router.go(0)
        // location.reload()
      }
    },
    created: function(){
      axios.get('https://v1.hitokoto.cn/')
      .then(reponse=>{
        console.log(reponse.data)
        this.data = reponse.data
      })
      .catch(error=>{
        console.log(error)
      })

    }
}
</script>

<style>

</style>
