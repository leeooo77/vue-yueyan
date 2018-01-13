<template>
  <div class="footer">
    <div class="voice"></div>
    <div class="position-con">
      <div class="position-icon" ref="placeIcon"></div>
      <p class="position-info" ref="placeBtn">
        <span class="country">中国</span>·<span class="privance">浙江省</span>·<span class="city">绍兴市</span>·<span class="county">越城区</span>
      </p>
      <div class="position-btn" @click="handlePositionBtnClick" ref="ponBtn"></div>
    </div>
  </div>
</template> 

<script>
  export default {
    name: 'publishFooter',
    components: {},
    data () {
      return {
        showPosition: true
      }
    },
    methods: {
      handlePositionBtnClick () {
        this.showPosition = !this.showPosition
        if (this.showPosition) {
          this.$refs.ponBtn.style.backgroundImage = 'url(../../../static/img/pub-pon-on.png)'
          this.$refs.placeIcon.style.backgroundImage = 'url(../../../static/img/pub-place-on.png)'
          this.$refs.placeBtn.style.display = 'block'
        } else {
          this.$refs.ponBtn.style.backgroundImage = 'url(../../../static/img/pub-pon-off.png)'
          this.$refs.placeIcon.style.backgroundImage = 'url(../../../static/img/pub-place-off.png)'
          this.$refs.placeBtn.style.display = 'none'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .footer
    width: 100%
    height: .98rem
    background: #fff
    position: absolute
    left: 0
    bottom: 0
    box-sizing: border-box
    padding: 0 .2rem
    display: flex
    justify-content: space-between
    align-items: center
    .voice
      width: .6rem
      height: .6rem
      background:url('../../../static/img/voice.png') no-repeat center
      background-size: cover
    .position-con
      width: 6.3rem
      height: .6rem
      background: #ececec
      border-radius: .1rem
      display: flex
      align-items: center
      box-sizing: border-box
      justify-content: space-between
      padding: 0 .2rem
      .position-icon
        width: .29rem
        height: .34rem
        background-image: url('../../../static/img/pub-place-on.png')
        background-size: cover
        margin-right: .2rem
      .position-btn
        width: .77rem
        height: .34rem
        background-image: url('../../../static/img/pub-pon-on.png')
        background-size: cover
</style>
