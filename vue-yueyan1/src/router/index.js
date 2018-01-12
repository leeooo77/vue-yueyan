import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index/index'
import Login from '@/page/login/index'
import Qqlogin from '@/page/login/qqlogin'
import Emaillogin from '@/page/login/emaillogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/qqlogin',
      name: 'qqlogin',
      component: Qqlogin
    }, {
      path: '/emaillogin',
      name: 'emaillogin',
      component: Emaillogin
    }
  ]
})
