<template>
  <header class="header-con">
    <div class="weather iconfont">&#xe625;</div>
    <ul class="options">
      <li class="optionChange"
          @click="handleFocusClick">关注</li>
      <li class="optionItem"
          @click="handleHotClick">热门</li>
    </ul>
    <div class="search iconfont">&#xe64b;</div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    },

    methods: {
      handleFocusClick () {
        this.$emit('showFocus')
      },
      handleHotClick () {
        this.$emit('showHot')
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles'
  .header-con
    display: flex
    background: #fff
    height: .88rem
    box-sizing: border-box
    padding: 0 .2rem
    margin-top: .4rem
    justify-content: space-between
    .weather
      width: .55rem
      height: .88rem
      line-height: .88rem
      color: #ffd522
      font-size: .58rem
      font-weight: 900
    .options
      display: flex
      font-size: .32rem
      color: #333333
      .optionItem
        width: 1.18rem
        height: .88rem
        box-sizing: border-box
        margin: 0 .05rem
        text-align: center
        line-height: .88rem
      .optionChange
        width: 1.18rem
        height: .88rem
        box-sizing: border-box
        border-bottom: 2px solid #333
        margin: 0 .05rem
        text-align: center
        line-height: .88rem
        font-weight: 900
    .search
      width: .48rem
      height: .88rem
      line-height: .88rem
      color: #333333
      font-size: .42rem
      font-weight: 900
</style>
