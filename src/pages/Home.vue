<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 15:40:59
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-08 18:02:05
 * @FilePath: \mk\src\pages\Home.vue
-->
<template>
  <div class="home">
      <Header/>
      <Picture/>
      <Menus/>
      <Headlines/>
      <Video/>
      <!-- <News/> -->
      <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Picture from "@/components/Picture.vue"
import Headlines from "@/components/Headlines.vue"
import Video from "@/components/Video.vue"
import Menus from "@/components/Menus.vue"
import News from "@/components/News.vue"
export default {
    name:'Home',
    components:{
        Header,
        Footer,
        Picture,
        Headlines,
        Video,
        Menus,
        News
    }
}
</script>

<style>
.home{
    height: 100%;
    background: #FFFFFF
}
</style>