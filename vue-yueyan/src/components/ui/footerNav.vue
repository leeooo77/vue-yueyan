<template>
  <footer class="footer">
    <router-link to="/">
      <div class="footer-item">
        <span class="icon iconfont footer-index" ref="indexIcon" v-show="showIndexNormal">&#xe621;</span>
        <span class="icon iconfont footer-index" v-show="showIndexCheck">&#xe620;</span>
        <i>首页</i>
      </div>
    </router-link>
    <router-link to="/find">
      <div class="footer-item">
        <span class="icon iconfont footer-find" v-show="showFindNormal">&#xe608;</span>
        <span class="icon iconfont footer-find" v-show="showFindCheck">&#xe746;</span>
        <i>发现</i>
      </div>
    </router-link>
    <router-link to="/publish">
      <div class="footer-add iconfont">&#xe614;</div>
    </router-link>
    <router-link to="/mall">
      <div class="footer-item">
        <span class="icon iconfont footer-mall" v-show="showMallNormal">&#xe663;</span>
        <span class="icon iconfont footer-mall" v-show="showMallCheck">&#xe680;</span>
        <i>商城</i>
      </div>
    </router-link>
    <router-link to="/mine">
      <div class="footer-item">
        <span class="icon iconfont footer-mine" v-show="showMineNormal">&#xe60c;</span>
        <span class="icon iconfont footer-mine" v-show="showMineCheck">&#xe60f;</span>
        <i>我的</i>
      </div>
    </router-link>
  </footer>
</template>

<script>
  export default {
    props: ['name'],
    data () {
      return {
        showIndexCheck: true,
        showIndexNormal: false,
        showFindNormal: true,
        showFindCheck: false,
        showMallNormal: true,
        showMallCheck: false,
        showMineNormal: true,
        showMineCheck: false
      }
    },
    watch: {
      name () {
        if (this.name === 'index') {
          this.showIndexCheck = this.showIndexCheck
          this.showIndexNormal = this.showIndexNormal
        } else {
          this.showIndexCheck = !this.showIndexCheck
          this.showIndexNormal = !this.showIndexNormal
        }
        if (this.name === 'find') {
          this.showFindCheck = !this.showFindCheck
          this.showFindNormal = !this.showFindNormal
        } else {
          this.showFindNormal = this.showFindNormal
          this.showFindCheck = this.showFindCheck
        }
        if (this.name === 'mall') {
          this.showMallCheck = !this.showMallCheck
          this.showMallNormal = !this.showMallNormal
        } else {
          this.showMallCheck = this.showMallCheck
          this.showMallNormal = this.showMallNormal
        }
        if (this.name === 'mine') {
          this.showMineCheck = !this.showMineCheck
          this.showMineNormal = !this.showMineNormal
        } else {
          this.showMineCheck = this.showMineCheck
          this.showMineNormal = this.showMineNormal
        }
      }
    }
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
    position: absolute
    bottom: 0
    left: 0
    .footer-item
      width: .56rem
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
        margin-bottom: .08rem
    .footer-add
      height: .98rem
      font-size: .78rem
      color: #333333
      line-height: 1rem
</style>
