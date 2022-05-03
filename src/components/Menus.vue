<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 17:16:21
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-07 20:57:14
 * @FilePath: \mk\src\components\Menus.vue
-->
<template>
<div>
  <div class="menus">
      <!-- <el-button type="primary" @click="tologin">登录</el-button> -->
      <div
        span="12"
        class="entranceItem"
        style="background-color: rgb(247, 167, 45)"
        @click="tologin"
      >
        <div>
          <i class="el-icon-video-camera"></i>
          <p>商业表演合作</p>
        </div>
      </div>
      <div
        span="12"
        class="entranceItem"
        style="background-color: rgb(229, 56, 77)"
        @click="tologin"
      >
        <div>
          <i class="el-icon-trophy"></i>
          <p>优秀武者合作</p>
        </div>
      </div>
      <div
        span="12"
        class="entranceItem"
        style="background-color: rgb(24, 191, 171)"
        @click="tologin"
      >
        <div>
          <i class="el-icon-edit"></i>
          <p>武者投稿合作</p>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Menus",
  methods: {
    tologin() {
      console.log("tologin");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.menus {
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
}
 .entranceItem{
    text-align: center;
    cursor: pointer;
    display: inline-block;
    width: 81px;
    height: 68px;
    border-radius: 3px;
    margin: 0px 2px;
}
p{
  color: rgb(253, 252, 252);
  font-size: 5px;
}
i{
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 30px;
  
}
</style>
