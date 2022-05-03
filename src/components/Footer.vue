<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 15:48:33
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-10 19:23:41
 * @FilePath: \mk\src\components\Footer.vue
-->
<template>
  <div>
    <div class="footer">
        <span>联系单位：MK影武联盟</span>
        <img src="../assets/pictures/logo/2m.png" alt="" width="10%" style="float:right;margin-right:1%;margin-top:1%">
        <span>联系地址：北京市海淀区XXX</span><br>
        <span> 联系电话: XXXXXX </span><br>
        <span>邮编：XXXXXX</span><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  font-size: 5px;
  width: 100%;
  /* height: 15%; */
  background: rgb(160, 157, 157);
}
</style>