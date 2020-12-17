import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from './components/common/toast/index'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus=new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
Fastclick.attach(document.body)
// 使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/img_0993.jpg')//占位图片
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
