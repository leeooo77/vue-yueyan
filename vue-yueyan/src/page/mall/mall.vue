<template>
  <div>
    <footer-nav :name="name"></footer-nav>
  </div>
  
</template>

<script>
  import FooterNav from '../../components/ui/footerNav'
  export default {
    name: 'Mall',
    components: {
      FooterNav
    },
    data () {
      return {
        name: ''
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.name = to.name
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles'
  
</style>
