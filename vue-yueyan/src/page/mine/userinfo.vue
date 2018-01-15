<template>
  <div class="main">
    <div class="header">
      <router-link class="iconfont back" to="/set">&#xe629;</router-link>
      <h2 class="tit">幸福的旅途</h2>
      <div></div>
    </div>
    <div class="banner">
      <img src="/static/img/7.png"/>
    </div>
    <div class="list">
      <ul>
      	<li class="border-bottom">
      	  <span>昵称  幸福的旅途</span>
          <span class="iconfont">&#xe777;</span>
      	</li>
      	<li class="border-bottom">
      	  <span>认证</span>
          <span class="iconfont">&#xe777;</span>
      	</li>
      	<li class="border-bottom">
      	  <span>性别 男</span>
          <span class="iconfont">&#xe777;</span>
      	</li>
      	<li class="border-bottom">
      	  <span>名称  幸福的旅途的悦言</span>
          <span class="iconfont">&#xe777;</span>
      	</li>
      	<li>
      	  <span>简介  因为年轻，所以自信；因为自信，所以年轻。</span>
          <span class="iconfont">&#xe777;</span>
      	</li>
      </ul>
      <ul>
        <li>
          <span>背景</span>
          <span class="iconfont">&#xe777;</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>手机号  15037754824</span>
          <span class="iconfont">&#xe777;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import FooterNav from '../../components/ui/footerNav'
  export default {
    name: 'userinfo',
    components: {
      FooterNav
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="stylus">
  .main
    height: 100%
    background: #f7f7f7
    .border-bottom::before
      border-color: #ccc
    .header
      background: #fff
      padding: 0 .2rem
      height: .88rem
      display: flex
      justify-content: space-between
      align-items: center
      .back
        font-size: .4rem
      .tit
        font-size: .32rem
    .banner
      height: 1.6rem
      background: #fff
      display: flex
      justify-content: center
      align-items: center
      img
        width: 1.22rem
        height: 1.22rem
        border-radius: 50%
    .list
      ul
        padding: 0 .2rem
        margin-bottom: .1rem
        background: #fff
        li
          height: 1rem
          display: flex
          justify-content: space-between
          align-items: center
</style>