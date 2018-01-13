<template>
  <div class="box">
    <header class="header-con">
      <div class="back iconfont" @click="handleBack">&#xe629;</div>
      <router-link to="/find">
        <div class="publish-btn">发布</div>
      </router-link>
    </header>
    <publish-con></publish-con>
    <footer-con :name="name"></footer-con>
  </div>
</template> 

<script>
  import axios from 'axios'
  import FooterCon from './footer'
  import PublishCon from './content'
  export default {
    name: 'Publish',
    components: {
      FooterCon,
      PublishCon
    },
    data () {
      return {
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

        }
      },
      handleGetDataError () {
        console.log('请求错误')
      },
      handleBack () {
        this.$router.go(-1)
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
    .header-con
      width: 100%
      height: .88rem
      display: flex
      box-sizing: border-box
      padding: 0 .2rem
      justify-content: space-between
      background: #fff
      align-items: center
      .back
        font-size: .38rem
        color: #333
      .publish-btn
        font-size: .32rem
        color: #333
</style>
