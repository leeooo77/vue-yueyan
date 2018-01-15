<template>
  <div class="box">
    <header-con @showFocus="handleShowFocus" @showHot="handleShowHot"></header-con>
    <focus-con class="mainFocus" 
              :focusInfo="focusInfo" 
              v-show="showFocus" :flag="flag"></focus-con>
    <hot-con class="mainHot" 
            :hotInfo="hotInfo" 
            v-show="showHot" :flag="flag"></hot-con>
    <footer-nav :name="name"></footer-nav>
  </div>
</template> 

<script>
  import HeaderCon from './header'
  import FooterNav from '../../components/ui/footerNav'
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
        showHot: false,
        flag: 0,
        name: ''
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.name = to.name
      })
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataError.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.data
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
        this.flag = 0
      },
      handleShowHot () {
        this.showFocus = false
        this.showHot = true
        this.flag = 1
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
    margin-top: .39rem
    .guide
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 1
      width: 100%
      height: 0
      padding-bottom: 56.22%
      .guide-img
        width: 100%
    .mainHot
      flex: 1
      box-sizing: border-box
      padding: 0 .2rem
      overflow: hidden
    .mainFocus
      flex: 1
      box-sizing: border-box
      padding: 0 .2rem
      overflow: hidden
</style>
