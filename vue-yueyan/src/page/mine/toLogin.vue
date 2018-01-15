<template>
  <div class="main">
    <div class="banner">
      <img src="/static/img/1.png" class="bgimg"/>
    </div>
    <button class="loginBtn" @click="handleToLogin">登录</button>
    <p class="txt">探索更多知己</p>
    <footer-nav :name="name"></footer-nav>
  </div>
</template>

<script>
  import FooterNav from '../../components/ui/footerNav'
  export default {
    name: 'ToLogin',
    components: {
      FooterNav
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
      handleToLogin () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="stylus">
.main
  display: flex
  flex-direction: column
  align-items: center
  .banner
    width: 100%
    height: 8.85rem
    .bgimg
      width: 145%
      margin-left: -1.8rem
      margin-top: -0.4rem
  .loginBtn
    display: block
    width: 2.73rem
    height: 0.9rem
    border: 1px solid #fa6d43
    border-radius: 0.88rem
    display: flex
    justify-content: center
    align-items: center
    color: #fa6d43
    font-size: 0.34rem
    background: #fff
    position: absolute
    top: 9.27rem
    left: 30.67%
  .txt
    color: #fa6d43
    font-size: 0.3rem
    position: absolute
    top: 10.58rem
    left: 37.07%
</style>