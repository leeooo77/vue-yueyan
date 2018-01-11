import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import store from 'store/'
import 'style/reset.css'
import 'style/border.css'
import 'swiper/dist/css/swiper.css'
import 'style/iconfont/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img4.imgtn.bdimg.com/it/u=1857738762,121097500&fm=27&gp=0.jpg',
  loading: 'http://img4.imgtn.bdimg.com/it/u=1857738762,121097500&fm=27&gp=0.jpg',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
