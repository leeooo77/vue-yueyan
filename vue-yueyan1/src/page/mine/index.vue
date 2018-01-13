<template>
  <div class="main">
    <div class="main-header">
      <div class="header">
        <span class="iconfont weather">&#xe60d;</span>
        <span class="mine">我</span>
        <router-link class="iconfont set" to="/set">&#xe78a;</router-link>
      </div>
      <div class="pic"><img src="../../img/3.png" class="img"/></div>
      <p class="name">辛西娅的星星</p>
      <div class="number">
        <span class="iconfont gold">&#xe63e;</span>
        <span class="num">1299</span>
      </div>
      <div class="correlate">
        <span>关注</span>
        <span>3</span>
        <span class="disivion">|</span>
        <span>粉丝</span>
        <span>1</span>
      </div>
    </div>
    <div class="main-body">
      <ul>
      	<li class="border-bottom">
      	  <span>
      	    <span class="iconfont">&#xe668;</span>
            <span class="tag">消息</span>
      	  </span>
      	  <span class="iconfont look">&#xe777;</span>
      	</li>
      	<li class="border-bottom">
      	  <span>
      	    <span class="iconfont">&#xe75f;</span>
            <span class="tag">收录</span>
      	  </span>
          <span class="iconfont look">&#xe777;</span>
      	</li>
      	<li class="border-bottom">
      	  <span>
      	   <span class="iconfont">&#xe60b;</span>
            <span class="tag">点赞</span>
      	  </span>
          <span class="iconfont look">&#xe777;</span>
      	</li>
      </ul>
      <ul>
      	<li class="border-bottom">
      	  <span>
            <span class="iconfont">&#xe658;</span>
            <span class="tag">购物</span>
          </span>
          <span class="iconfont look">&#xe777;</span>
      	</li>
      </ul>
      <ul class="down">
        <li class="border-bottom">
          <span>
            <span class="iconfont">&#xe624;</span>
            <span class="tag">下载</span>
          </span>
          <span class="iconfont look">&#xe777;</span>
        </li>
        <li class="border-bottom">
          <span>
            <span class="iconfont">&#xe628;</span>
            <span class="tag">草稿</span>
          </span>
          <span class="iconfont look">&#xe777;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped lang="stylus">
  .main
    height: 100%
    background: #f7f7f7
    .border-bottom::before
      border-color: #ccc
    .main-header
      text-align: center
      padding: 0 .22rem
      margin-bottom: .1rem
      background: #fff
      .header
        height: .88rem
        display: flex
        justify-content: space-between
        align-items: center
        .weather
          font-size: .72rem
          color: #009fe8
        .mine
          font-size: .38rem
          color: #333
        .set
          font-size: .52rem
          color: #333
      .pic
        width: 1.5rem
        height: 1.5rem
        margin: 0 auto
        margin-top: .3rem
        .img
          width: 100%
          border-radius: 50%
      .name
        line-height: .6rem
        font-size: .34rem
      .number
        height: .42rem
        display: flex
        justify-content: center
        align-items: center
        .gold
          margin-right: .1rem
          font-size: .44rem
          color: #f9e06c
        .num
          font-size: .34rem
      .correlate
        height: 1.16rem
        display: flex
        justify-content: center
        align-items: center
        span
          margin: 0 .07rem
          font-size: .3rem
        .disivion
          margin: 0 .2rem
    .main-body
      ul
        margin-bottom: .1rem
        padding: 0 .22rem
        background: #fff
        li
          height: 1rem
          display: flex
          justify-content: space-between
          align-items: center
          color: #333
          .tag
            margin-left: .2rem
      .down
        margin-bottom: .82rem
</style>