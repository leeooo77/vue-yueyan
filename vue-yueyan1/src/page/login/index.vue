<template>
  <div class="main">
    <div class="banner">
      <img src="../../img/1.png" class="bgimg"/>
    </div>
    <button class="loginBtn">登录</button>
    <p class="txt">探索更多知己</p>
  </div>
</template>

<script>
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
      position: fixed
      left: -1.8rem
      top: -0.4rem
  .loginBtn
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
  .txt
    margin-top: 0.38rem
    color: #fa6d43
    font-size: 0.3rem
</style>