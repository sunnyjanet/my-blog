<template>
  <div class="MessageBoard">
    <div class="banner">
      <p class="textInfo" v-scroll-reveal.reset="{delay: 100,origin: 'top'}">“三人行，必有我师焉；择其善者而从之，其不善者而改之。”</p>
      <p class="textInfo"  v-scroll-reveal.reset="{delay: 1000,}">能和志同道合的朋友一起畅谈，是修行，是幸运。</p>
      <p class="textInfo" v-scroll-reveal.reset="{delay: 2000, origin: 'bottom'}">亲爱的朋友，如果你曾在这驻足片刻，请留下足迹。</p>
    </div>
    <div class="blog-detail">
      <div id="SOHUCS" ></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'MessageBoard',
  mounted () {
    this.loadScript()
    // 强力去除广告方法
    this.forceDeleteAdvertisement()
  },
  methods: {
    loadScript () {
      // As an instance method inside a component
      this.$loadScript('http://cy-cdn.kuaizhan.com/upload/changyan.js')
        .then(() => {
          // Script is loaded, 已经加载好 现在开始做点什么
          window.changyan.api.config({
            appid: 'cyv8NkonO',
            conf: 'prod_25d364365b715fd09b831547796be4d3'
          })
        })
        .catch(() => {
          console.log('评论脚本加载失败')
        })
    },
    forceDeleteAdvertisement () {
      // 每500ms轮询一次 直接把dom删掉 css再厉害 再important也没用 元素都没饿了
      setInterval(() => {
        // 选择class要加.
        if ($('.section-service-w')) {
          $('.section-service-w').remove()
        }
      }, 500)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .MessageBoard
    display: flex
    flex-direction: column
    align-items: center
    .banner
      display: flex
      flex-direction: column
      justify-content: center
      padding-bottom: 60px
      width: 660px
      height: 200px
      background: url("~@/assets/img/messageBanner.jpg") left/100% no-repeat
      color: #666
      font-size: 15px
      line-height: 35px
      text-align: center
    .blog-detail
      position: relative;
      width: 622px;
      background: #ffffff
      border-radius: 15px
      padding: 20px
      margin-top: 30px
</style>
