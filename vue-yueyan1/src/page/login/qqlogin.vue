<template>
  <div class="main">
    <div class="cancel">
      <span class="iconfont icon-cancel">&#xe60e;</span>
    </div>
    <div class="inner">
      <div class="login-type">
        <a href="javascript:;" class="login-in">手机</a>
        <a href="javascript:;" class="login-in">邮箱</a>
      </div>
      <div>
        <p class="import border-bottom">
          <span class="select">+86</span>
          <input type="text" placeholder="手机号" class="phoneNum"/>
        </p>
        <p class="import border-bottom">
          <input type="password" placeholder="密码" class="psd"/>
        </p>
      </div>
      <div class="forget">忘记密码?</div>
      <div class="loginBtnin">
        <button class="loginBtn">登录</button>
      </div>
      <div class="elseLoginType">
        <span class="iconfont icon">&#xe607;</span>
        <span class="iconfont icon">&#xe60a;</span>
        <span class="iconfont icon">&#xe600;</span>
      </div>
      <a class="register">注册新账号</a>
    </div>
    <div class="bgimg">
      <img src="../../img/2.png" class="img"/>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="stylus">
  .cancel
    display: flex
    justify-content: flex-end
    margin: .4rem .4rem 1.08rem 0
    .icon-cancel
      color: #2f92ee
  .inner
    margin: 0 1.9rem
    .login-type
      display: flex
      justify-content: space-between
      text-align: center
      margin-bottom: .74rem
      .login-in
        width: 1.5rem
        line-height: .7rem
        color: #333
        border-bottom: 3px solid #2583e8
        font-size: .3rem
        border: none
    .import
      height: .72rem
      .select
        width: .62rem
        line-height: .72rem
        display: inline-block
      .phoneNum
        width: 3rem
        line-height: .26rem
        padding: .2rem 0 .26rem
      .psd
        line-height: .72rem
    .border-bottom::before
      border-color: #ababab
  .forget
    line-height: 0.62rem
    display: flex
    justify-content: flex-end
    align-items: center
    color: #2f92ee
  .loginBtnin
    width: 100%
    height: 1.47rem
    display: flex
    justify-content: center
    align-items: flex-end
    .loginBtn
      width: 2.73rem
      height: 0.9rem
      border-radius: 0.88rem
      display: flex
      justify-content: center
      align-items: center
      color: #fff
      font-size: 0.34rem
      background: #2f92ee
  .elseLoginType
    height: 1.54rem
    display: flex
    justify-content: space-around
    align-items: flex-end
    .icon
      font-size: 0.6rem
  .register
    height: 0.64rem
    display: flex
    justify-content: center
    align-items: flex-end
    font-size: 0.2rem
    color: #2f92ee
  .bgimg
    width: 100%
    position: absolute
    bottom: 0
    .img
      width: 100%
</style>