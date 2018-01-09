<template>
  <footer class="footer">
    <div class="footer-item footer-index">
      <span class="icon iconfont">&#xe641;</span>
      <i>首页</i>
    </div>
    <div class="footer-item footer-find">
      <span class="icon iconfont">&#xe608;</span>
      <i>发现</i>
    </div>
    <div class="footer-add iconfont">&#xe614;</div>
    <div class="footer-item footer-mall">
      <span class="icon iconfont">&#xe626;</span>
      <i>商城</i>
    </div>
    <div class="footer-item footer-mine">
      <span class="icon iconfont">&#xe6f8;</span>
      <i>我的</i>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {}
    },

    methods: {}
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles'
  .footer
    display: flex
    width: 100%
    height: .98rem
    background: #fff
    justify-content: space-around
    .footer-item
      height: .98rem
      display: flex
      flex-direction: column
      box-sizing: border-box
      padding: .12rem 0
      justify-content: space-between
      text-align: center
      color: #333333
      .icon
        font-size: .42rem
        font-weight: 900
        margin: .04rem 0
    .footer-add
      height: .98rem
      font-size: .78rem
      color: #333333
      line-height: .98rem

</style>
