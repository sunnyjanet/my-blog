import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import MessageBoard from '@/views/MessageBoard/MessageBoard'
import MyIndex from '@/views/MyIndex/MyIndex'
import WebBlog from '@/views/WebBlog/WebBlog'
import BlogList from '@/views/WebBlog/components/BlogList'
import BlogContent from '@/views/WebBlog/components/BlogContent'
import MyResume from '@/views/MyResume/MyResume'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    menuIndex: 0,
    children: [
      {
        path: '/',
        name: 'MyIndex',
        component: MyIndex,
        meta: { menuIndex: 0 }
      },
      {
        path: 'detail',
        name: 'WebBlogLayout',
        component: WebBlog,
        children: [
          {
            path: 'bloglist',
            name: 'BlogList',
            component: BlogList,
            meta: { menuIndex: 1 }
          },
          {
            path: 'blogcontent',
            name: 'BlogContent',
            component: BlogContent,
            meta: { menuIndex: 1 }
          },
          {
            path: 'resume',
            name: 'MyResume',
            component: MyResume,
            meta: { menuIndex: 2 }
          },
          {
            path: 'message',
            name: 'MessageBoard',
            component: MessageBoard,
            meta: { menuIndex: 3 }
          }]
      }]
  }
]

const router = new VueRouter({
  routes
})
// 该导航守卫的作用：每跳转一次路由，都切换menu的activeIndex，使每个menu的tab按is-active类的css样式进行显示。且switchActiveMenuIndex使用了localStorage，每次f5刷新页面，activeIndex的值能得到缓存
router.beforeEach((to, from, next) => {
  store.commit('switchActiveMenuIndex', to.meta.menuIndex)
  next()
})

export default router
