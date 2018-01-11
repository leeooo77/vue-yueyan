<template>
  <div class="main">
    <div class="wrapper">
      <div class="list">
        <div class="list-item">
          <div class="user-info">
            <div class="user-headImg-con">
              <img class="user-headImg" src="">
            </div>
            <div class="user-desc">
              <p class="user-name">岁月无痕</p>
              <p class="user-date">2017/12/25</p>
            </div>
            <div class="user-title">愿你被世界温柔以待，愿你始终不忘初心</div>
            <div class="user-txtImg-con">
              <img class="user-txtImg" src="">
            </div>
            <div class="user-handle">
              <div class="repeat">
                <div class="iconfont"></div>
                <div class="repeat-txt">转发</div>
              </div>
              <div class="talk">
                <div class="iconfont"></div>
                <div class="talk-txt">评论</div>
              </div>
              <div class="agree">
                <div class="iconfont"></div>
                <div class="agree-txt">点赞</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles'
  .main
    background: #f7f7f7
    .list-item
      margin: .2rem 0 .4rem 0
</style>
