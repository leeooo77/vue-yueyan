<template>
  <div class="main">
    <div class="wrapper" ref="wrapper">
      <div class="list">
        <div class="list-item" v-for="item in hotInfo" :key="item.id">
          <div class="userInfo">
            <div class="user-headImg-con">
              <img class="user-headImg" :src="item.head_img">
            </div>
            <div class="user-desc">
              <p class="user-name">{{item.nickname}}</p>
              <p class="user-data">{{item.data}}</p>
            </div>
          </div>
          <div class="user-title">{{item.title}}</div>
          <div class="user-txtImg-con">
            <img class="user-txtImg" :src="item.txtImg">
          </div>
          <div class="user-handle">
            <div class="repeat handleItem">
              <div class="iconfont">&#xe665;</div>
              <div class="repeat-txt handleBtn">转发</div>
            </div>
            <div class="talk handleItem">
              <div class="iconfont">&#xe6be;</div>
              <div class="talk-txt handleBtn">评论</div>
            </div>
            <div class="agree handleItem">
              <div class="iconfont">&#xe603;</div>
              <div class="agree-txt handleBtn">点赞</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'hot',
    props: {
      hotInfo: Array
    },
    data () {
      return {}
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles'
  .main
    background: #f7f7f7
    .wrapper
      height: 100%
      .list-item
        margin: .2rem 0 .4rem 0
        .userInfo
          display: flex
          .user-headImg-con
            overflow: hidden
            width: .8rem
            height: .8rem
            border-radius: .4rem
            .user-headImg
              width: 100%
          .user-desc
            margin-left: .2rem
            .user-name
              font-size: .28rem
              color: #333
            .user-data
              font-size: .16rem
              color: #333
              line-height: .38rem
        .user-title
          font-size: .26rem
          color: #333
          line-height: .63rem
        .user-txtImg-con
          overflow: hidden
          width: 100%
          height: 0
          padding-bottom: 50.7%
          border-radius: .1rem
          .user-txtImg
            width: 100%
        .user-handle
          display: flex
          .handleItem
            display: flex
            line-height: .54rem
            color: #333
            margin-right: .4rem
            .iconfont
              font-size: .26rem
              margin: 0 .1rem
            .handleBtn
              font-size: .26rem
</style>
