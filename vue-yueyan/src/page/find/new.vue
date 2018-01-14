<template>
  <div class="main">
    <div class="new-nav">
      <div class="new-nav-item new-article">
        <div class="mark">优质文章</div>
      </div>
      <div class="new-nav-item new-autor">
        <div class="mark">人气作者</div>
      </div>
      <div class="new-nav-item new-talk">
        <div class="mark">热门话题</div>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="list">
        <transition name="loading">
          <div v-show="isLoading" class="loading">正在加载...</div>
        </transition>
        <div class="list-item" v-for="item in listInfo" :key="item.uid">
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
  import axios from 'axios'
  export default {
    name: 'findNew',
    props: {
      newInfo: Array,
      flag: Number
    },
    data () {
      return {
        moreInfo: [],
        isLoading: false,
        isFetching: false,
        pageNum: 1
      }
    },
    watch: {
      flag () {
        this.scroll && this.scroll.refresh()
      },
      listInfo () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    computed: {
      listInfo () {
        return this.newInfo.concat(this.moreInfo)
      }
    },
    methods: {
      bindEvents () {
        this.scroll.on('scroll', this.handleScroll.bind(this))
        this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handleScroll (e) {
        if (e.y > 90 && !this.isLoading) {
          this.getListInfo()
          this.isLoading = true
        }
      },
      handleScrollEnd () {
        this.isLoading = false
      },
      getListInfo () {
        axios.get('/api/more.json?page=' + this.pageNum)
          .then(this.handleGetListSucc.bind(this))
          .catch(this.handleGetListErr.bind(this))
      },
      handleGetListSucc (res) {
        res && (res = res.data)
        if (res.data) {
          if (res.data.moreList) {
            this.moreInfo = this.moreInfo.concat(res.data.moreList)
            this.pageNum += 1
          }
          this.isFetching = false
        } else {
          this.handleGetListErr()
        }
      },
      handleGetListErr () {
        this.isFetching = false
        console.log('获取内容失败')
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3
      })
      this.bindEvents()
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
    display: flex
    flex-direction: column
    .new-nav
      height: 1rem
      display: flex
      justify-content: space-between
      padding: .2rem 0
      .new-nav-item
        width: 2.3rem
        height: 1rem
        font-size: .28rem
        color: #fff
        line-height: 1rem
        text-align: center
        background: #ccc
        border-radius: .2rem
        position: relative
        .mark
          width: 2.3rem
          height: 1rem
          background: rgba(0, 0, 0, .1)
          border-radius: .2rem
          position: absolute
          top: 0
          left: 0
      .new-article
        background: url('../../../static/img/hotArticle.jpg')
        background-size: cover
      .new-autor
        background: url('../../../static/img/hotAutor.jpg')
        background-size: cover
      .new-talk
        background: url('../../../static/img/hotTalk.jpg')
        background-size: cover
    .wrapper
      flex: 1
      overflow: hidden
      .list
        padding-bottom: 1.2rem
        .loading
          line-height: .8rem
          text-align: center
          color: #000
        .loading-enter-active, .loading-leave-active
          transition: opacity .5s
        .loading-enter, .loading-leave-to
          opacity: 0
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
            line-height: .42rem
            margin: .1rem 0
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
              margin-right: .63rem
              .iconfont
                font-size: .18rem
                margin-right: .1rem
              .handleBtn
                font-size: .18rem
</style>
