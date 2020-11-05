<template>
  <div class="InviteToMessage">
    <div class="wrapper" v-scroll-reveal.reset>
      <p class="invite-title">欢迎志同道合的朋友给我留言</p>
      <p class="msg-example">
        <span>畅所欲言...如何自学转前端？</span><br>
        <span>or 博主喜欢看什么书、什么剧？</span><br>
        <span>or 制造焦虑已成趋势？如何克服焦虑？</span><br>
      </p>
      <el-button @click.native="handleBtnClick" class="button-custom" type="primary" plain size="medium">我要留言</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteToMessage',
  methods: {
    handleBtnClick () {
      this.$router.push({ name: 'MessageBoard' })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .InviteToMessage
    width: 100%
    background: url("~@/assets/img/MessageBg.jpg") no-repeat center/110%
    font: 15px '微软雅黑', Arial, Helvetica, sans-serif
    .wrapper
      width: 500px
      margin: 0 auto
      text-align: center
      .invite-title
        font-size: 25px
        text-shadow: #fff 1px 1px 30px
        padding: 10px 0
        color: #ffffff
      .msg-example
        font-size: 15px
        line-height: 35px
        color: #fff
        opacity: 0.5
      .button-custom
        margin: 10px 0 18px 0
        font: 15px '微软雅黑', Arial, Helvetica, sans-serif
</style>
