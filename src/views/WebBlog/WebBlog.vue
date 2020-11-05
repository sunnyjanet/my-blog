<template>
  <div class="WebBlog">
    <div class="blog-outter-wrapper">
      <div class="blog-inner-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebBlog'
}
</script>

<style lang="stylus" scoped>
  .WebBlog
    background: url("~@/assets/img/BlogBg.jpg") no-repeat left top /60% #075498
    overflow: hidden
    min-height: 900px
    .blog-outter-wrapper
      position: relative
      margin: 80px auto
      width: 700px
      padding: 20px
      overflow: hidden
      background: url("~@/assets/img/blogOutterBcImg.png") repeat
      .blog-inner-wrapper
        background: url("~@/assets/img/blogOutterBcImg.png") repeat
        padding: 20px 0
</style>
