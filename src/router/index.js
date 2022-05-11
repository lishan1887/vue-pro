import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routesMap = [
  {
    path:"/",
    name:'HrFront',
    component:() => import('../page/hrFront.vue'),
  },
  {
    path:"/page/organizational",
    name:'Organizational',
    meta: {
      title: '管理概括',
    },
    component:() => import('../page/organizational.vue'),
  },
  {
    path:"/page/management",
    name:'Management',
    meta: {
      title: '组织指标',
    },
    component:() => import('../page/management.vue'),
  },
  // {
  //   path:"/page/hrScreen",
  //   name:'hrScreen',
  //   meta: {
  //     title: '组织指标',
  //   },
  //   component:() => import('../page/hrScreen.vue'),
  // }
]

const router = new VueRouter({
  routes:routesMap
})

export default router