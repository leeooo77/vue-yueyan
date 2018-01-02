<template>
  <header class="header-con">
    <div class="back iconfont" @click="handleBackClick">&#xe607;</div>
    <div class="search">
      <div class="search-con">
        <span class="search-icon iconfont">&#xe618;</span>
        请输入城市/景点/游玩主题
      </div>
    </div>
<!--     <router-link to="/city"> -->
      <div class="city">城市</div>
    <!-- </router-link> -->
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    },

    methods: {
      handleBackClick () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles'
  .header-con
    display: flex
    background: #000
    height: .88rem
    .back
      width: .8rem
      line-height: .88rem
      text-align: center
      font-weight: bold
      font-size: .44rem
      color: #fff
    .search
      flex: 1
      .search-icon
        position: relative
        top: .02rem
      .search-con
        width: 100%
        line-height: .6rem
        margin-top: .14rem
        background: #fff
        border-radius: .1rem
        text-indent: .2rem
        color: #ccc
    .city
      overflow: hidden
      position: relative
      line-height: .88rem
      max-width: 1.6rem
      padding: 0 .46rem 0 .22rem
      float: right
      font-size: .28rem
      white-space: nowrap
      text-overflow: ellipsis
      color: #fff
      &::before
        position: absolute
        top: .4rem
        right: .16rem
        content: '\0020'
        width: 0
        height: 0
        border-left: .12rem solid transparent
        border-right: .12rem solid transparent
        border-top: .12rem solid #fff
</style>
