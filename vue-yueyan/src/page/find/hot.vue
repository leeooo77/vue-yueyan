<template>
  <div class="main">
    <div class="wrapper" ref="wrapper">
      <div class="list">
        <div class="list-item" v-for="item in hotInfo" :key="item.uid">
          <div class="userInfo">
            <div class="user-headImg-con">
              <img class="user-headImg" :src="item.head_icon">
            </div>
            <div class="user-desc">
              <p class="user-name">{{item.nickname}}</p>
              <p class="user-data">{{item.create_time}}</p>
            </div>
          </div>
          <div class="user-title">{{item.content}}</div>
          <div class="user-txtImg-con">
            <img class="user-txtImg" :src="item.image">
          </div>
          <div class="user-handle">
            <div class="repeat handleItem">
              <div class="iconfont">&#xe665;</div>
              <div class="repeat-txt handleBtn">{{item.repeat}}</div>
            </div>
            <div class="talk handleItem">
              <div class="iconfont">&#xe6be;</div>
              <div class="talk-txt handleBtn">{{item.talk}}</div>
            </div>
            <div class="agree handleItem">
              <div class="iconfont">&#xe603;</div>
              <div class="agree-txt handleBtn">{{item.agree}}</div>
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
    name: 'findHot',
    props: {
      hotInfo: Array,
      flag: Number
    },
    data () {
      return {}
    },
    watch: {
      flag () {
        this.scroll && this.scroll.refresh()
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3
      })
    },
    activated () {
      this.scroll && this.scroll.refresh()
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
        margin: .6rem 0 .4rem 0
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
          line-height: .42rem
          margin: .1rem 0
        .user-txtImg-con
          overflow: hidden
          width: 42%
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
            margin-right: .63rem
            .iconfont
              font-size: .18rem
              margin-right: .1rem
            .handleBtn
              font-size: .18rem
</style>
