<template>
  <div class="box">
    <header-con @showFocus="handleShowFocus" @showHot="handleShowHot"></header-con>
    <focus-con class="main" 
              :focusInfo="focusInfo" 
              v-show="showFocus"></focus-con>
    <hot-con class="main" 
            :hotInfo="hotInfo" 
            v-show="showHot"></hot-con>
    <footer-nav></footer-nav>
  </div>
</template> 

<script>
  import HeaderCon from './header'
  import FooterNav from './footerNav'
  import FocusCon from './focus'
  import HotCon from './hot'
  import axios from 'axios'
  export default {
    name: 'Index',
    components: {
      HeaderCon,
      FooterNav,
      FocusCon,
      HotCon
    },
    data () {
      return {
        focusInfo: [],
        hotInfo: [],
        showFocus: true,
        showHot: false
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataError.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.data
        console.log(body.data.focus)
        if (body && body.ret && body.data) {
          body.data.focus && (this.focusInfo = body.data.focus)
          body.data.hot && (this.hotInfo = body.data.hot)
        }
      },
      handleGetDataError () {
        console.log('请求错误')
      },
      handleShowFocus () {
        this.showFocus = true
        this.showHot = false
      },
      handleShowHot () {
        this.showFocus = false
        this.showHot = true
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
      box-sizing: border-box
      padding: 0 .2rem
      overflow: hidden
</style>
