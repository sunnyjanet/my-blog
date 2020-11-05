<template>
  <div class="PersonalIntro">
    <div class="left">
      <p>
      <span class="personal-title">个人画像：</span><br>
      <span>90后博主，喜欢逻辑和数学，喜欢思考，性格外向。</span><br>
      <span>非科班出身，自学前端，路漫漫而求索。</span>
      </p>
    </div>
    <div class="photo"></div>
    <div class="right">
      <span class="personal-title">兴趣爱好：</span><br>
      <span>爱好看书、跑步、写代码、看剧，乐于分享、热爱生活。</span><br>
      <span>希望能结交志同道合的朋友，聊互联网、聊人生、聊生活。</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalIntro'
}
</script>

<style lang="stylus" scoped>
  @keyframes rotateRepeat {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }
  .PersonalIntro
    display: flex
    justify-content: space-between
    align-items: center
    .left, .right
      margin: 0 30px
      color: #3e4c5a
      font-size: 16px
      line-height: 20px
      flex: 1
      .personal-title
        font-weight: bold
    .photo
      width: 290px
      height: 290px
      background: url("~@/assets/img/Personal.jpg") no-repeat center/116%
      border-radius: 100%
      &:hover
        animation: rotateRepeat 10s linear 6 forwards
</style>
