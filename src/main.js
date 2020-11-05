import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/reset.css'
import VueScrollReveal from 'vue-scroll-reveal'
import LoadScript from 'vue-plugin-load-script'

Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 2000,
  scale: 1,
  distance: '50px',
  mobile: false,
  origin: 'right'
})
Vue.use(LoadScript)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
