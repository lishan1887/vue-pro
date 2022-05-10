// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
// import {getToken} from '@/util/auth'
import * as echarts from 'echarts'




Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
// router.beforeEach((to, from, next) => {
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // } else if (to.query.userName) {
  //   document.title = to.query.userName
  // }
  // console.log('拦截器')
  // console.log(getToken())
  // axios.post(store.state.url+"workbench/auth/get_user_id").then((res) => {
  //   console.log('get_user_id',res)
  // }).catch(err => [
  // ])
  // next()
  // console.log(store.state.userid)
    // if (!getToken()) {
    //   next()
    //   // window.location.href = 'http://sso.portal.unicom.local/eip_sso/aiportalLogin.html?appid=na186&success=http://service.aiportal.unicom.local/ssoclient/ssologin%3Faction%3Dlogin&error=http://sso.portal.unicom.local/eip_sso/aiportalLogin.html&return=http://sso.portal.unicom.local/eip_sso/aiportalLogin.html';
    // } else if (!store.state.userid) {
    //   axios.post(store.state.url+"/workbench/auth/get_user_id").then((res) => {
    //     console.log('get_user_id',res)
    //     if (res.data) {
    //       store.state.userid = res.data
    //       next()
    //     } else {
    //       next({
    //         path: '/'
    //       })
    //     }
    //   }).catch(err => [
    //     next({
    //       path: '/'
    //     })
    //   ])
    // } else {
    //   next()
    // }
// })

// axios.defaults.baseURL="http://10.188.58.133:10047";
Vue.prototype.$axios=axios;
Vue.prototype.$querystring = require('querystring');
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
