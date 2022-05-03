<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 16:51:31
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-07 20:14:51
 * @FilePath: \mk\src\components\Picture.vue
-->
<template>
<div>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in pictures" :key="item.id">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img :src="item.name" alt="" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
export default {
    name: "Picture",
    data(){
      return {
        pictures: [{name:require( "../assets/pictures/Head001.jpg"),id: "1"},
                  {name: require("../assets/pictures/Head002.jpg"),id: "2"},
                  {name: require("../assets/pictures/Head003.jpg"),id: "3"},
                  {name: require("../assets/pictures/Head004.jpg"),id: "4"}]
      }
    }
}
</script>

<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 75px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .image{
    object-fit: fill;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
  }
</style>