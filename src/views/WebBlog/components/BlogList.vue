<template>
  <div class="BlogList">
    <div class="blog-card-wrapper">
      <blog-card class="blog-card"
        v-for="(item, index) in blogCardList"
        :key="index"
        :cardImgUrl="item.cardImgUrl"
        :cardTitle="item.cardTitle"
        @click.native="handleBlogClick(item.id)"
      >
      </blog-card>
    </div>
    <el-pagination
      class="el-pagination-custom"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[4, 6, 8, 10 ]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      :total="totalCounts"
    >
    </el-pagination>
  </div>
</template>

<script>
import BlogCard from './BlogCard'
import axios from 'axios'
export default {
  name: 'BlogList',
  data () {
    return {
      currentPage: 1,
      pageSize: 4,
      totalCounts: 5,
      originBlogCardList: [],
      blogCardList: []
    }
  },
  components: {
    BlogCard
  },
  methods: {
    handleBlogClick (clickedIndex) {
      this.$store.commit('switchBlogIndex', clickedIndex)
      this.$router.push({ name: 'BlogContent' })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getDataInfo()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getDataInfo()
    },
    getDataInfo () {
      axios.get('mock/blogCard.json').then(res => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          const _start = (this.currentPage - 1) * this.pageSize
          const _end = this.currentPage * this.pageSize
          this.originBlogCardList = data.blogCardList || []
          this.blogCardList = this.originBlogCardList.slice(_start, _end)
        }
      })
    }
  },
  created () {
    this.getDataInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .blog-card-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin: 0 auto
    width: 600px
    .blog-card
      margin: 20px
  .el-pagination
    text-align: center
</style>
