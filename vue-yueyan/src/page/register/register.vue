<template>
  <div class="box">
    <div class="main">
      <div class="back iconfont" @click="handleBackClick">&#xe629;</div>
      <ul class="register-nav">
        <li :class="{navCheck: isPhoneCheck, navNormal: isPhoneNormal}" @click="handleNavPhoneClick">手机号注册</li>
        <li :class="{navCheck: isEmailCheck, navNormal: isEamilNoraml}" @click="handleNavEmailClick">邮箱注册</li>
      </ul>
      <register-phone v-show="showPhone"></register-phone>
      <register-email v-show="showEmail"></register-email>
    </div>
  </div>
</template> 

<script>
  import RegisterPhone from './registerPhone'
  import RegisterEmail from './registerEmail'
  export default {
    name: 'Register',
    components: {
      RegisterPhone,
      RegisterEmail
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
        this.$router.go(-1)
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
        width: 1rem
        height: 1.18rem
        line-height: 1.18rem
        text-align: center
        font-size: .38rem
        color: #333
        margin-bottom: .56rem
      .register-nav
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
