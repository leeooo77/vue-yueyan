<template>
  <div class="box">
    <header-con></header-con>
    <focus-con class="main"></focus-con>
    <footer-nav></footer-nav>
  </div>
</template> 

<script>
  import HeaderCon from './header'
  import FooterNav from './footerNav'
  import FocusCon from './focus'
  import axios from 'axios'
  export default {
    name: 'Index',
    components: {
      HeaderCon,
      FooterNav,
      FocusCon
    },
    data () {
      return {}
    },
    computed: {},
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataError.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.data
        if (body && body.ret && body.data) {
          // body.data.swiper && (this.swiperInfo = body.data.swiper)
        }
      },
      handleGetDataError () {
        console.log('请求错误')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
  .box
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .main
      flex: 1
</style>
