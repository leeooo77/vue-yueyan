<template>
  <div>
    <form action="" class="form">
      <p class="reg-type border-bottom">
        <span class="phone-type border-right">+86</span>
        <input type="text" class="phoneNumber" placeholder="手机" v-model="numberValue" @blur="handleNumberBlur" maxlength="11" ref="number">
        <p v-show="errNumber" class="err">请输入正确的手机号</p>
      </p>
      <p class="border-bottom">
        <input type="password" class="password inputCon" placeholder="密码" v-model="passwordValue" @blur="handlePasswordBlur" maxlength="12">
        <p v-show="errPassword" class="err">请输入正确的密码</p>
      </p>
      <div class="forget">忘记密码?</div>
      <input type="button" class="reg-btn" value="登录" @click="handleLoginClick">
    </form>
    <div class="otherLoginType">
      <span class="iconfont icon">&#xe607;</span>
      <span class="iconfont icon">&#xe60a;</span>
      <span class="iconfont icon">&#xe600;</span>
    </div>
    <div class="register" @click="handleToRegister">注册新账号</div>
    <div class="wave"></div>
  </div>
</template> 

<script>
  import axios from 'axios'
  export default {
    name: 'LoginPhone',
    data () {
      return {
        numberValue: '',
        passwordValue: '',
        isNumber: null,
        isPassword: null,
        errNumber: null,
        errPassword: null,
        onLogin: false
      }
    },
    methods: {
      handleLoginClick () {
        if (this.isNumber && this.isPassword) {
          console.log('success')
          this.$router.push('/mine')
          this.onLogin = true
          window.localStorage.loginStatus = this.onLogin
          this.sendData()
        } else {
          this.onLogin = false
          window.localStorage.loginStatus = this.onLogin
        }
      },
      handleNumberBlur () {
        if (this.numberValue === window.localStorage.username) {
          this.isNumber = true
          this.errNumber = false
        } else {
          this.isNumber = false
          this.errNumber = true
        }
      },
      handlePasswordBlur () {
        if (this.passwordValue === window.localStorage.password) {
          this.isPassword = true
          this.errPassword = false
        } else {
          this.isPassword = false
          this.errPassword = true
        }
      },
      handleToRegister () {
        this.$router.push('/register')
      },
      sendData () {
        axios.post('/api/v1/login', {
          username: this.numberValue,
          password: this.passwordValue,
          type: 'mobile',
          method: 'POST',
          access_token: ''
        })
          .then(this.handleSendDataSucc.bind(this))
          .catch(this.handleSendDataError.bind(this))
      },
      handleGetDataSucc (msg) {
        console.log(msg)
      },
      handleGetDataError () {
        console.log('登录失败')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .form
    width: 3.7rem
    margin: .7rem auto 0
    display: flex
    flex-direction: column
    input::-webkit-input-placeholder
      color: #c2c2c2
      font-size: .26rem
    .border-bottom::before
      background: #ababab
    .border-right::before
      background: #ababab
    .err
      color: red
    .reg-type
      width: 3.7rem
      height: .77rem
      display: flex
      align-items: center
      margin-bottom: .03rem
      .phoneNumber
        width: 3.07rem
        height: .73rem
        box-sizing: border-box
        padding-left: .24rem
        background: #f7f7f7
      .phone-type
        display: block
        width: .62rem
        height: .57rem
        font-size: .2rem
        line-height: .57rem
        color: #333
        text-align: center
        background: #f7f7f7
    .inputCon
      width: 3.7rem
      height: .73rem
      margin-bottom: .03rem
      background: #f7f7f7
    .forget
      width: 3.7rem
      line-height: 0.63rem
      display: flex
      justify-content: flex-end
      align-items: center
      color: #2f92ee
    .reg-btn
      width: 2.13rem
      height: .69rem
      background: #2f92ee
      border-radius: .35rem
      font-size: .28rem
      line-height: .69rem
      color: #fff
      text-align: center
      margin: .97rem auto 0
  .otherLoginType
    width: 100%
    height: .54rem
    margin: 1rem auto .4rem
    display: flex
    justify-content: center
    .icon
      font-size: .54rem
      color: #333
      margin: 0 .4rem
  .register
    width: 1.4rem
    height: .36rem
    font-size: .22rem
    color: #2f92ee
    text-align: center
    line-height: .36rem
    margin: 0 auto
  .wave
    width: 100%
    height: 2.41rem
    background: url('../../../static/img/regbg.png')
    position: absolute
    bottom: 0
    left: 0
    background-size: cover
</style>
