<!--
 * @miaoshuripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-07 14:30:48
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-10 19:06:00
 * @FilePath: \mk\src\pages\OrderPage.vue
-->
<template>
  <div>
    <el-page-header @back="$router.go(-1)" content="订单详情"> </el-page-header>
    <!-- 表单区域 -->
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="elform"
    >
      <el-form-item label="活动名称" prop="activename">
        <el-input v-model="form.activename"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="上海" value="上海"></el-option>
          <el-option label="北京" value="北京"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              style="width: 100%"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">--</el-col>
        <el-col :span="11">
          <el-form-item prop="time">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.time"
              style="width: 100%"
              value-format="hh:mm:ss"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-select v-model="form.type" placeholder="请选择活动性质">
          <el-option label="线上活动" value="线上活动"></el-option>
          <el-option label="地推活动" value="地推活动"></el-option>
          <el-option label="线下活动" value="线下活动"></el-option>
        </el-select>
      </el-form-item>
      <!--  -->
      <el-form-item label="产品资源" prop="resource">
        <el-select v-model="form.resource" placeholder="请选择产品类型">
          <el-option label="主流型产品服务" value="主流型产品服务"></el-option>
          <el-option label="特殊型产品服务" value="特殊型产品服务"></el-option>
          <el-option label="创新型产品服务" value="创新型产品服务"></el-option>
        </el-select>
      </el-form-item>
      <!--  -->
      <el-form-item label="活动形式" prop="miaoshu">
        <el-input type="textarea" v-model="form.miaoshu"></el-input>
      </el-form-item>
      <el-form-item class="button_S">
        <el-button type="primary" @click="open">立即创建</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "OrderPage",
  methods: {
      open() {
        this.$confirm(' 是否确认下单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.onSubmit()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '下单失败'
          })     
        })
      },
    resetForm() {
      this.$refs["form"].resetFields();
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        this.form.name=window.sessionStorage.getItem("name")
        console.log(this.form);
        if (!valid) return;
        this.$http
          .post("order", this.form)
          .then((result) => {
            console.log(result.data);
            if (result.data.status == 1) {
              this.$message.success("订单已完成！");
              this.resetForm();
            } else {
              this.$message.error("失败订单！");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
  },
  data() {
    return {
      form: {
        activename: "",
        region: "",
        date: "",
        time: "",
        type: "",
        resource: "",
        miaoshu: "",
      },
      rules: {
        activename: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date: [{ required: true, message: "请选择日期", trigger: "change" }],
        time: [{ required: true, message: "请选择时间", trigger: "change" }],
        type: [
          { required: true, message: "请选择活动性质", trigger: "change" },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        miaoshu: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.elform {
  margin-top: 12%;
  margin-left: 5%;
  margin-right: 5%;
}
.button_S {
  margin-top: 50px;
  margin-left: 20%;
}
</style>