import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index/index'
import Register from 'page/register/register'
import Mine from 'page/mine/index'
import Find from 'page/find/find'
import Mall from 'page/mall/mall'
import Publish from 'page/publish/publish'

import Login from 'page/login/login'
import MineSet from 'page/mine/set'
import Userinfo from 'page/mine/userinfo'
import ToLogin from 'page/mine/toLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }, {
      path: '/find',
      name: 'find',
      component: Find
    }, {
      path: '/mall',
      name: 'mall',
      component: Mall
    }, {
      path: '/publish',
      name: 'publish',
      component: Publish
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/set',
      name: 'set',
      component: MineSet
    }, {
      path: '/userinfo',
      name: 'userinfo',
      component: Userinfo
    }, {
      path: '/toLogin',
      name: 'toLogin',
      component: ToLogin
    }
  ]
})
