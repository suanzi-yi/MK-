<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 19:17:11
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-10 19:03:26
 * @FilePath: \mk\src\pages\BackCenter.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div  @click="logout">
        <span>退出登录</span>
        <span style="float:right">></span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BackCenter",
  methods:{
    logout(){
      window.sessionStorage.clear()
      this.$router.push('/')
      this.$message.success("退出登录成功！")
    }
  }
};
</script>

<style scoped>
.box-card{
  margin-top: 5%;
}
</style>