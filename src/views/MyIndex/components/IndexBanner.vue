<template>
  <div class="IndexBanner">
    <p class="BloggerName">Janet BLOG</p>
    <p class="BloggerSign">
      <span>
        Stay positive. Stay happy. Keep learning. Keep walking.<br>
        Maybe I am a slow walker, but I never walk backwards.
      </span>
    </p>
    <el-row>
      <el-button class="el-button-custom" @click.native="handleBlogBtnClick" size="medium">前端博客</el-button>
      <el-button class="el-button-custom" @click.native="handleGitHubClick" size="medium">GitHUb</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'IndexBanner',
  methods: {
    handleBlogBtnClick () {
      this.$router.push({ name: 'BlogList' })
    },
    handleGitHubClick () {
      window.location.href = 'https://github.com/sunnyjanet/my-blog'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .IndexBanner
    padding: 20%
    text-align: center
    color: rgb(167, 92, 92)
    overflow: hidden
    background: url("~@/assets/img/IndexBg.jpg") no-repeat
    .BloggerName
      text-shadow: rgb(167, 92, 92) 3px 3px 6px
      font-size: 50px
      margin: 20px
    .BloggerSign
      text-shadow: rgb(167, 92, 92) 1px 1px 10px
      font-size: 16px
      line-height: 30px
    .el-button-custom
      margin: 20px 80px
      font: 15px '微软雅黑', Arial, Helvetica, sans-serif
</style>
