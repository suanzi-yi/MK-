<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-06 21:36:00
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-07 21:24:53
 * @FilePath: \mk\src\pages\Articles.vue
-->
<template>
  <div>
    <el-page-header @back="$router.go(-1)" content="所有文章" style="margin-bottom: 20px;  padding-top: 10px;  padding-buttom: 5px;

"> </el-page-header>
    <div class="time">
      <el-timeline>
        <el-timeline-item
          v-for="item in article"
          :key="item.id"
          :timestamp="item.date"
          placement="top"
          :icon="el-icon-more"
          :color="'#0bbd87'"
        >
          <el-card style="margin-right: 15px">
            <h4>
              <el-link :href="item.url" type="primary">{{
                item.title
              }}</el-link>
            </h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      article: [],
    };
  },
  mounted() {
    this.$http
      .get("article")
      .then((result) => {
        console.log(result);
        this.article = result.data.data;
        console.log(this.article);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
    
<style scoped>
.time {
  background-color: rgb(252, 246, 246);
  margin-top: 10px;
}
</style>