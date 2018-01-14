<template>
  <div class="box">
    <div class="main">
      <div class="back">
        <div class="backIcon iconfont" @click="handleBackClick">&#xe60e;</div>
      </div>
      <ul class="login-nav">
        <li :class="{navCheck: isPhoneCheck, navNormal: isPhoneNormal}" @click="handleNavPhoneClick">手机号</li>
        <li :class="{navCheck: isEmailCheck, navNormal: isEamilNoraml}" @click="handleNavEmailClick">邮箱</li>
      </ul>
      <login-phone v-show="showPhone"></login-phone>
      <login-email v-show="showEmail"></login-email>
    </div>
  </div>
</template> 

<script>
  import LoginPhone from './loginPhone'
  import LoginEmail from './loginEmail'
  export default {
    name: 'Login',
    components: {
      LoginPhone,
      LoginEmail
    },
    data () {
      return {
        isPhoneCheck: true,
        isPhoneNormal: false,
        isEmailCheck: false,
        isEamilNoraml: true,
        showPhone: true,
        showEmail: false
      }
    },
    methods: {
      handleNavPhoneClick () {
        this.isPhoneCheck = true
        this.isPhoneNormal = false
        this.isEmailCheck = false
        this.isEamilNoraml = true
        this.showPhone = true
        this.showEmail = false
      },
      handleNavEmailClick () {
        this.isPhoneCheck = false
        this.isPhoneNormal = true
        this.isEmailCheck = true
        this.isEamilNoraml = false
        this.showPhone = false
        this.showEmail = true
      },
      handleBackClick () {
        this.$router.push('/toLogin')
      }
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
    .main
      width: 100%
      height: 100%
      background: #f7f7f7
      .back
        width: 100%
        height: 1.18rem
        line-height: 1.18rem
        text-align: center
        font-size: .38rem
        color: #2583e8
        margin-bottom: .56rem
        .backIcon
          float: right
          width: 1rem
      .login-nav
        display: flex
        justify-content: center
        .navCheck
          height: .77rem
          padding: 0 .16rem
          box-sizing: border-box
          border-bottom: 1.5px solid #2583e8
          line-height: .77rem
          text-align: center
          font-size: .32rem
          color: #2583e8
          margin: 0 .24rem
        .navNormal
          height: .77rem
          padding: 0 .16rem
          box-sizing: border-box
          line-height: .77rem
          text-align: center
          font-size: .32rem
          color: #333
          margin: 0 .24rem
</style>
