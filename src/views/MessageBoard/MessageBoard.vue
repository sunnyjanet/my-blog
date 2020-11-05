<template>
  <div class="MessageBoard">
    <div class="banner">
      <p class="textInfo" v-scroll-reveal.reset="{delay: 100,origin: 'top'}">“三人行，必有我师焉；择其善者而从之，其不善者而改之。”</p>
      <p class="textInfo"  v-scroll-reveal.reset="{delay: 1000,}">能和志同道合的朋友一起畅谈，是修行，是幸运。</p>
      <p class="textInfo" v-scroll-reveal.reset="{delay: 2000, origin: 'bottom'}">亲爱的朋友，如果你曾在这驻足片刻，请留下足迹。</p>
    </div>
    <div class="blog-detail">
      <!--PC和WAP自适应版-->
      <div id="SOHUCS" sid="请将此处替换为配置SourceID的语句"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBoard',
  created () {
    /* eslint-disable */
    var appid = 'cytrsFhPb'
    var conf = 'prod_e4aa56ee5d4c9fe2df62c5ca876a7bae'
    var width = window.innerWidth || document.documentElement.clientWidth
    if (width < 960) {
      window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>')
    } else {
      var loadJs = function (d, a) {
        var c = document.getElementsByTagName('head')[0] || document.head || document.documentElement; var b = document.createElement('script')
        b.setAttribute('type', 'text/javascript')
        b.setAttribute('charset', 'UTF-8')
        b.setAttribute('src', d); if (typeof a === 'function') {
          if (window.attachEvent) {
            b.onreadystatechange = function () {
              var e = b.readyState; if (e === 'loaded' || e === 'complete') {
                b.onreadystatechange = null
                a()
              }
            }
          } else { b.onload = a }
        } c.appendChild(b)
      }
      loadJs('http://changyan.sohu.com/upload/changyan.js', function () { window.changyan.api.config({ appid: appid, conf: conf }) })
      /* eslint-disable */
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
      background: #ffffff
      border-radius: 15px
      padding: 20px
      margin-top: 30px
      #SOHUCS #SOHU_MAIN .module-cmt-footer
        display: none
      #SOHUCS #SOHU_MAIN .module-cmt-notice
        display: none
</style>
