<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 15:39:53
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-07 22:09:40
 * @FilePath: \mk\src\components\Header.vue
-->
<template>
  <div>
    <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
          <img src="../assets/pictures/logo/logo2.png" height="100%" width="100%">
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 是否折叠
      isCollapse: false,
    };
  },
};
</script>

<style scoped>
.home-container {
  text-align: center;
  height: 100%;
  background-color: red;
}
.el-header {
  padding: 0px 0px 0px 0px;
  display: inline;
}
.one {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #ffffff;
}
.two {
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 220px;
  right: 0px;
  position: fixed;
  background: #000000;
}
</style>