import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index/index'
import Login from '@/page/login/index'
import Detail from '@/page/login/detail'

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
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
