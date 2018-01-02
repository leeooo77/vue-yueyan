<template>
  <div>
    <header-con></header-con>
  </div>
</template> 

<script>
  import HeaderCon from './header'
  import axios from 'axios'
  export default {
    name: 'Index',
    components: {
      HeaderCon
    },
    data () {
      return {}
    },
    computed: {},
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataError.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.data
        if (body && body.ret && body.data) {
          // body.data.swiper && (this.swiperInfo = body.data.swiper)
          console.log(body.data)
        }
      },
      handleGetDataError () {
        console.log('请求错误')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">

</style>
