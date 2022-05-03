/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 14:05:14
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-21 18:31:32
 * @FilePath: \mk\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'http://114.116.79.120:81/v1/sql/'
// axios.defaults.baseURL = 'http://114.115.211.196:80/v1/sql/'
// axios.defaults.baseURL = 'http://127.0.0.1:80/v1/sql/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
