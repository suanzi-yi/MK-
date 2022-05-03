<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 17:00:34
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-08 22:05:23
 * @FilePath: \mk\src\components\Headlines.vue
-->
<template>
<!-- 头条组件 -->
<div>
  <div class="Headlines">
    <span><i class="el-icon-tickets"></i></span>
    <span style="display:inline-block;width:200px;font-weight:bold;font-size: 10px">精彩文章</span>
    
    <span @click="toall" style="float: right;margin-right:6px;font-size: 8px;">更多</span><br>
    <hr>
    <div v-for="item in article" :key="item.id">
      <el-link :href="item.url" type="primary" style="padding:2px;font-size:10px">{{item.title}}</el-link>
      <span style="float:right; margin-right:15px;font-size:12px;padding:2px;color:#409EFF">{{item.date}}</span>
      <hr>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "Headlines",
    data(){
      return {
        article:[]
      }
    },
    methods:{
      toall(){
        this.$router.push({name: "Articles"})
      }
    },
    mounted(){
      this.$http.get('article?limit=True').then((result) => {
        console.log(result)
        this.article=result.data.data
        console.log(this.article)
      }).catch((err) => {
        console.error(err)
      });
    }
}
</script>

<style scoped>
.Headlines{
    background-color:rgb(248, 245, 245);
    margin-top:6px;
    margin-bottom:6px;
    margin-left: 2px;
   margin-right: 2px;
  
}

</style>