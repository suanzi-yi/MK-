<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 19:03:53
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-08 18:25:54
 * @FilePath: \mk\src\pages\BackHome.vue
-->
<template>
  <div>
    <el-page-header
      @back="goBack"
      content="合作中心"
      v-if="$route.path == '/backhome/product'"
    >
    </el-page-header>
    <router-view />
    <!--  -->
    <div class="buttom">
      <div class="back">
        <div
          span="12"
          class="entranceItem"
          style="background-color: rgb(247, 167, 45);;" 
          @click="toproduct"
        >
          <div>
            <i class="el-icon-video-camera"></i>
            <p>首页</p>
          </div>
        </div>
        <div
          span="12"
          class="entranceItem"
          style="background-color: rgb(229, 56, 77)"
          @click="toorder"
        >
          <div>
            <i class="el-icon-trophy"></i>
            <p>订单</p>
          </div>
        </div>
        <div
          span="12"
          class="entranceItem"
          style="background-color: rgb(24, 191, 171)"
          @click="tocenter"
        >
          <div>
            <i class="el-icon-edit"></i>
            <p>个人中心</p>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
console.log(this.$router);
export default {
  name: "BackHome",
  methods: {
    goBack() {
      this.$router.push("/");
    },
    toproduct(){
      this.$router.push({name: "product"})
    },
    tocenter(){
      this.$router.push({name:"center"})
    },
    toorder(){
      this.$router.push({name:"order"})
    }
  },
};
</script>

<style scoped>
.back {
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  position: fixed; bottom: 0; width:100%;
}
.buttom {
  position: relative;
  bottom: 0;
}
.entranceItem {
  text-align: center;
  cursor: pointer;
  display: inline-block;
  width: 55%;
  height: 55px;
  border-radius: 3px;
  margin: 0px 2px;
}
</style>