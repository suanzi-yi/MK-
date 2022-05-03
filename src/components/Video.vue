<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 17:03:40
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-08 22:05:37
 * @FilePath: \mk\src\components\Video.vue
-->
<template>
<div>
  <div class="video_c">
    <span><i class="el-icon-video-camera-solid"></i></span>
    <span style="display:inline-block;width:200px;font-weight:bold;font-size: 10px">精彩视频</span>
    <span @click="toall" style="float: right;font-size: 8px;margin-right:6px;">更多</span><br>
    <div class="vc"><video src="../assets/video/001.mp4" controls></video></div>
  </div>
</div>
</template>

<script>
export default {
    name: "Video", 
    methods:{
        toall(){
            this.$router.push({name: "AllVideo"})
        }
    }
}
</script>

<style scoped>
.video_c{
    background-color:rgb(248, 245, 245);
    /* transform: translateY(12px); */
    margin-top:10px;
    margin-bottom:10px;
}
video{
    width: 90%;
}
.vc{
    margin-top:2px;
    text-align:center
}
</style>