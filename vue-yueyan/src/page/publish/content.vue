<template>
  <div class="main">
    <div class="wrapper" ref="wrapper">
      <div class="list">
        <div class="img-con">
          <img src="../../../static/img/publish.png" class="publish-img">
        </div>
        <textarea class="txt-con">江南真的是人间仙境啊！这次来真的没有失望，希望下次还有时间再来一次</textarea>
      </div>
    </div>
  </div>
</template> 

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Publish',
    components: {},
    data () {
      return {}
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
  .main
    flex: 1
    background: #f7f7f7
    overflow: hidden
    .wrapper
      height: 100%
      .list
        display: flex
        flex-direction: column
        align-items: center
        .img-con
          width: 94.36%
          height: auto
          margin: .4rem auto .2rem
          background: #f7f7f7
          border-radius: .1rem
          .publish-img
            width: 100%
        .txt-con
          width: 94.36%
          height: 8rem
          background: #f7f7f7
          resize: none
          border: none
</style>
