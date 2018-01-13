<template>
  <div class="main">
    <div class="header">
      <router-link class="iconfont back" to="/mine">&#xe629;</router-link>
      <h2 class="tit">设置</h2>
      <div></div>
    </div>
    <router-link class="banner" to="/userinfo">
      <div>
        <img src="../../img/4.png"/>
        <span class="txt">幸福的旅途</span>
      </div>
      <span class="iconfont">&#xe777;</span>
    </router-link>
    <div class="list">
      <ul>
      	<li class="border-bottom">
      	  <span>自定义点赞提示语</span>
      	  <span class="iconfont">&#xe777;</span>
      	</li>
      	<li class="border-bottom">
      	 <span>非WIFI下允许下载</span>
      	 <span class="iconfont downbtn btn">&#xe6db;</span>
      	</li>
      	<li>
      	  <span>非WIFI环境下播放电台 </span>
      	  <span class="iconfont playbtn btn">&#xe6da;</span>
      	</li>
      </ul>
      <ul>
      	<li class="border-bottom">
      	  <span>推送通知</span>
      	  <span class="iconfont">&#xe777;</span>
      	</li>
      	<li class="border-bottom">
      	  <span>清除缓存</span>
          <span class="num">23.65M</span>
      	</li>
      	<li>
      	  <span>意见反馈</span>
          <span class="iconfont">&#xe777;</span>
      	</li>
      </ul>
      <ul>
      	<li>
      	  <span>退出当前账号</span>
      	  <span class="iconfont">&#xe777;</span>
      	</li>
      </ul>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped lang="stylus">
  .main
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
      margin-bottom: .1rem
      .back
        font-size: .4rem
      .tit
        font-size: .32rem
    .banner
      height: 1rem
      background: #fff
      padding: 0 .2rem
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: .1rem
      img
        width: .8rem
        height: .8rem
        margin-right: .2rem
        border-radius: 50%
      .txt
        font-size: .26rem
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
          .btn
            font-size: .54rem
          .downbtn
            color: #2f92ee
</style>