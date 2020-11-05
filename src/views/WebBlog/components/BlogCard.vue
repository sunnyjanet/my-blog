<template>
  <div class="BlogCard">
    <img class="card-img" :src="cardImgUrl" />
    <p class="card-title">{{cardTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    cardImgUrl: {
      type: String,
      default: ''
    },
    cardTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .BlogCard
    background-color: #fff
    padding: 20px
    .card-img
      display: block
      width: 200px
    .card-title
      text-align: center
      font-weight: bold
      margin: 10px 0
      width: 200px
</style>
