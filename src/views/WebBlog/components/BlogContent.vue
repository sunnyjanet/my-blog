<template>
  <div class="BlogContent">
    <p v-for="(item, index) in dataList" :class="[item.className]" v-html="item.textInfo" :key="index"></p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'BlogContent',
  data () {
    return {
      dataList: []
    }
  },
  computed: {
    ...mapState([
      'clickedBlogIndex'
    ])
  },
  methods: {
    getInfo () {
      axios.get('mock/blogContent.json').then(res => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.dataList = data.blogContentList[this.clickedBlogIndex].textList || []
        }
      })
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .BlogContent
    padding: 20px
    .head-title
      font-size: 25px
      text-align: center
      font-weight: bold
      line-height: 50px
    .first-level-title
      font-size: 20px
      font-weight: bold
      line-height: 40px
    .second-level-title
      font-size: 15px
      font-weight: bold
      line-height: 40px
    .normal-text
      font-size: 12px
      line-height: 30px
</style>
