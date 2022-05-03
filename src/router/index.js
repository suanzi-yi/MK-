/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-04-05 14:05:14
 * @LastEditors: suanzi
 * @LastEditTime: 2022-04-10 19:29:22
 * @FilePath: \mk\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import BackHome from '@/pages/BackHome.vue'
import BackProduct from '@/pages/BackProduct.vue'
import BackCenter from '@/pages/BackCenter.vue'
import BackOrder from '@/pages/BackOrder.vue'
import Articles from '@/pages/Articles.vue'
import OrderPage from '@/pages/OrderPage.vue'
import AllVideo from '@/pages/AllVideo.vue'
Vue.use(Router)

const router =new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/home',
      name: 'Home',
      component:Home,
      meta:{
        title: '主页'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component:Login,
      meta:{title: '登录'}
    },
    {
      path:'/register',
      name: 'Register',
      component:Register,
      meta:{
        title: '注册'
      }
    },
    {
      path: '/backhome',
      name: 'BackHome',
      component:BackHome,
      redirect:'/backhome/product',
      children:[
        {
          path: 'product',
          name: 'product',
          component:BackProduct,
          meta:{
            title: '合作中心'
          }
        },
        {
          path: 'center',
          name: 'center',
          component:BackCenter,
          meta:{
            title: '个人中心'
          }
        },
        {
          path: 'order',
          name: 'order',
          component:BackOrder,
          meta:{
            title: '订单'
          }
        }
      ]
    },
    {
      path: '/articles',
      name:'Articles',
      component:Articles,
      meta:{
        title: '所有文章'
      }

    },
    {
      path:'/orderpage',
      name:'OrderPage',
      component:OrderPage,
      meta:{
        title: '订单详情'
      }
    },
    {
      path: '/allvideo',
      name:'AllVideo',
      component:AllVideo,
      meta:{
        title: '所有视频'
      }
    }
  ]
})
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

router.beforeEach((to,from,next) => {
  // 获取user
  const name = window.sessionStorage.getItem('name')
  if(to.path=='/backhome'||to.path=='/backhome/product'||to.path=='/backhome/order'||to.path=='/backhome/center'||to.path=='/orderpage'){
    if(name){
      return next()
    }
    else{
      return next('/login')
    }
  }
  else if(to.path=='/login'){
    if(name){
      return next('/backhome/product')
    }
    else{
      return next()
    }
  }
  else{
    return next()
  }
  
})
router.afterEach((to,from,next) => {
  window.document.title = to.meta.title
  next()
})
export default router
