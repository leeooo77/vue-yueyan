<template>
  <div id="app">
    <div class="guide" v-if="showGuide">
      <img class="guide-img" src="/static/img/guide.jpg">
    </div>
    <keep-alive include="register, guide">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        showGuide: true
      }
    },
    methods: {
      hideGuide () {
        setTimeout(() => {
          this.showGuide = false
        }, 2000)
      }
    },
    created () {
      this.hideGuide()
    }
  }
</script>

<style scoped lang="stylus">
  .guide
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    width: 100%
    height: 0
    padding-bottom: 56.22%
    .guide-img
      width: 100%
</style>
