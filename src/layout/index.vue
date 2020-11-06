<template>
  <div class="layout">
    <div class="header">
      <el-menu
        class="menu-custom"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        text-color="#000"
      >
        <el-menu-item  class= "menu-item-custom" v-for="item in menuTitleList" :index="item.menuItemIndex" :key="item.menuItemIndex">
          {{item.title}}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="appMain">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      menuTitleList: [
        { title: '我的首页', menuItemIndex: '0' },
        { title: '前端博客', menuItemIndex: '1' },
        { title: '我的简历', menuItemIndex: '2' },
        { title: '给我留言', menuItemIndex: '3' }
      ]
    }
  },
  computed: {
    routeName () {
      const routeName = [{ name: 'MyIndex' }, { name: 'BlogList' }, { name: 'MyResume' }, { name: 'MessageBoard' }]
      return routeName
    },
    activeIndex () {
      return this.$store.state.activeMenuIndex
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      index = parseInt(index)
      this.$router.push(this.routeName[index]).catch(err => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
          err.name !== 'NavigationDuplicated' &&
          !err.message.includes('Avoided redundant navigation to current location')
        ) {
          // But print any other errors to the console
          console.error(err)
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .header
    position: fixed
    top: 0
    width: 100%
    z-index: 99
    .menu-custom.el-menu
      display: flex
      justify-content: center
      background-color: rgba(250,250,250,0.4)
      .menu-item-custom
        padding: 0 35px
        &.is-active
          font-weight: bold
          background-color #fff
</style>
