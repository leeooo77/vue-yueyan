<template>
  <div class="box">
    <header-con @showNew="handleShowNew" @showHot="handleShowHot"></header-con>
    <new-con class="mainNew" 
              :newInfo="newInfo" 
              v-show="showNew" :flag="flag"></new-con>
    <hot-con class="mainHot" 
            :hotInfo="hotInfo" 
            v-show="showHot" :flag="flag"></hot-con>
    <footer-nav :name="name"></footer-nav>
  </div>
</template> 

<script>
  import HeaderCon from './header'
  import FooterNav from '../../components/ui/footerNav'
  import NewCon from './new'
  import HotCon from './hot'
  import axios from 'axios'
  export default {
    name: 'Find',
    components: {
      HeaderCon,
      FooterNav,
      NewCon,
      HotCon
    },
    data () {
      return {
        newInfo: [],
        hotInfo: [],
        showNew: true,
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
        axios.get('/api/find.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataError.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.data
        if (body && body.ret && body.data) {
          body.data.new && (this.newInfo = body.data.new)
          body.data.hot && (this.hotInfo = body.data.hot)
        }
      },
      handleGetDataError () {
        console.log('请求错误')
      },
      handleShowNew () {
        this.showNew = true
        this.showHot = false
        this.flag = 0
      },
      handleShowHot () {
        this.showNew = false
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
    .mainHot
      flex: 1
      box-sizing: border-box
      padding: 0 .2rem
      overflow: hidden
    .mainNew
      flex: 1
      box-sizing: border-box
      padding: 0 .2rem
      overflow: hidden
</style>
