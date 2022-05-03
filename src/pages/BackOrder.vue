<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 19:15:38
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-10 20:04:57
 * @FilePath: \mk\src\pages\BackOrder.vue
-->
<template>
  <div>
    <div>
      <el-collapse class="mianban">
        <el-collapse-item >
          <span style="margin-left:10%;margin-right:10%;" slot="title">我的订单</span>
          <el-card class="box-card" v-for="item in order" :key="item.id">
            <div class="text item">
              <span>活动名称：{{ item.activename }}</span>
              <hr />
              <span>日期：{{ item.date + "-" + item.time }}</span>
              <hr />
              <span style="margin-right: 15%">地区:{{ item.region }}</span>
              <span
                >服务产品： <el-tag size="small">{{ item.resource }}</el-tag></span
              >
              <hr />
              <span>活动类型：{{ item.type }}</span>
              <hr />
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackOrder",
  data() {
    return {
      order: [],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  mounted() {
    let getname = window.sessionStorage.getItem("name");
    this.$http
      .get("getorder?" + "name=" + getname)
      .then((result) => {
        if (result.data.status == 1) {
          this.order = result.data.order;
          console.log(this.order);
        }
      })
      .catch((err) => {});
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 0px 0px 0px 0px;
}

.box-card {
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
}
.el-card__body {
  padding: 0px 0px 0px 0px;
}
</style>