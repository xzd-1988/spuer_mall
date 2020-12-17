import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Classi = () => import('../views/classification/classiFication.vue')
const Cart = () => import('../views/cart/cart.vue')
const My = () => import('../views/my/my.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [{
    path: "", //重定向,首页为默认展示
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta:{
      show:true  //控制路由在该页面上是否显示
    }
  },
  {
    path: "/classiFication",
    component: Classi,
    meta:{
      show:true  //控制路由在该页面上是否显示
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta:{
      show:true  //控制路由在该页面上是否显示
    }
  },
  {
    path: "/my",
    component: My,
    meta:{
      show:true  //控制路由在该页面上是否显示
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta:{
      show:false  //控制路由在该页面上是否显示
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
