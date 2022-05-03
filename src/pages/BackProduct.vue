<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 19:14:27
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-08 18:25:23
 * @FilePath: \mk\src\pages\BackProduct.vue
-->
<template>
  <div class="container">
  <div class="card">
    <el-card >
          <!-- <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          /> -->
          <div style="padding: 14px">
            <span>商业表演合作</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="buyone">下订单</el-button>
            </div>
          </div>
    </el-card>
  </div>
    
  </div>
</template>

<script>
export default {
  name: "BackProduct",
  data(){
    return {
      currentDate:new Date(),
    }
  },
  methods:{
    buyone(){
      this.$router.push({name:'OrderPage'})
    }
  }
};
</script>

<style scpoed>
.container{
  width: 100%;
  height: 100%;
}
.card{
  width: 100%;
  height: 10%;
}
.button {
    padding: 0;
    float: right;
  }
</style>