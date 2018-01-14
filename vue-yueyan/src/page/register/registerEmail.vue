<template>
  <div>
    <form action="" class="form">
      <p class="border-bottom">
        <input type="text" class="email inputCon" placeholder="请输入注册邮箱" v-model="emailValue" @blur="handleEmailBlur">
        <p v-show="errEmail" class="err">请输入正确的邮箱</p>
      </p>
      <p class="protocol">注册代表你已阅读并同意<span class="yuyan-txt">悦言协议</span></p>
      <p class="border-bottom">
        <input type="text" class="code inputCon" placeholder="手机验证码" v-model="codeValue" @blur="handleCodeBlur" maxlength="4">
        <p v-show="errCode" class="err">验证码错误|(重新发送)</p>
      </p>
      <p class="border-bottom">
       <input type="text" class="name inputCon" placeholder="昵称（12个字符内）" v-model="nameValue" @blur="handleNameBlur" maxlength="12"> 
       <p v-show="errName" class="err">昵称不能为空</p>
      </p>
      <p class="border-bottom">
        <input type="password" class="password inputCon" placeholder="密码（6-12个字符，区分大小写）" v-model="passwordValue" @blur="handlePasswordBlur" maxlength="12">
        <p v-show="errPassword" class="err">请输入正确的密码</p>
      </p>
      <p class="border-bottom">
        <input type="password" class="repassword inputCon" placeholder="再次输入密码" v-model="rePasswordValue" @blur="handleRePasswordBlur" maxlength="12">
        <p v-show="errRePassword" class="err">密码输入不一致</p>
      </p>
      <input type="button" class="reg-btn" value="登录" @click="handleButtonClick">
    </form>
    <div class="wave"></div>
  </div>
</template> 

<script>
  export default {
    name: 'RegisterEmail',
    data () {
      return {
        emailValue: '',
        codeValue: '',
        nameValue: '',
        passwordValue: '',
        rePasswordValue: '',
        isEmail: null,
        isCode: null,
        isName: null,
        isPassword: null,
        isRePassword: null,
        errEmail: null,
        errCode: null,
        errName: null,
        errPassword: null,
        errRePassword: null,
        onLogin: false
      }
    },
    methods: {
      handleButtonClick () {
        if (this.isEmail && this.isCode && this.isName && this.isPassword && this.isRePassword) {
          this.$router.push('/mine')
          this.onLogin = true
          window.localStorage.username = this.emailValue
          window.localStorage.password = this.passwordValue
          window.localStorage.loginStatus = this.onLogin
        } else {
          this.onLogin = false
          window.localStorage.loginStatus = this.onLogin
        }
      },
      handleEmailBlur () {
        this.regEmail = /^\w+@\w+(\.\w+)+$/
        if (this.regEmail.test(this.emailValue)) {
          this.isEmail = true
          this.errEmail = false
        } else {
          this.isEmail = false
          this.errEmail = true
        }
      },
      handleCodeBlur () {
        this.regCode = /^\d{4}$/
        if (this.regCode.test(this.codeValue)) {
          this.isCode = true
          this.errCode = false
        } else {
          this.isCode = false
          this.errCode = true
        }
      },
      handleNameBlur () {
        if (this.nameValue.length !== 0) {
          this.isName = true
          this.errName = false
        } else {
          this.isName = false
          this.errName = true
        }
      },
      handlePasswordBlur () {
        this.regPassword = /^\w{6,12}$/
        if (this.regPassword.test(this.passwordValue)) {
          this.isPassword = true
          this.errPassword = false
        } else {
          this.isPassword = false
          this.errPassword = true
        }
      },
      handleRePasswordBlur () {
        if (this.passwordValue === this.rePasswordValue) {
          this.isRePassword = true
          this.errRePassword = false
        } else {
          this.isRePassword = false
          this.errRePassword = true
        }
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
    .protocol
      font-size: .2rem
      color: #333
      line-height: .36rem
      margin-top: .1rem
      .yuyan-txt
        color: #2f92ee
        margin-left: .1rem
    .inputCon
      width: 3.7rem
      height: .73rem
      margin-bottom: .03rem
      background: #f7f7f7
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
  .wave
    width: 100%
    height: 2.41rem
    background: url('../../../static/img/regbg.png')
    position: absolute
    bottom: 0
    left: 0
    background-size: cover
</style>