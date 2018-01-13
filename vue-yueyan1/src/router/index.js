import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index/index'
import Login from '@/page/login/index'
import Qqlogin from '@/page/login/qqlogin'
import Emaillogin from '@/page/login/emaillogin'
import Mine from '@/page/mine/index'
import Set from '@/page/mine/set'
import Userinfo from '@/page/mine/userinfo'

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
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }, {
      path: '/set',
      name: 'set',
      component: Set
    }, {
      path: '/userinfo',
      name: 'userinfo',
      component: Userinfo
    }
  ]
})
