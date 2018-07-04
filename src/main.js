// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 该文件管理全局使用的js,组件,样式
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 引入element的样式文件,在node_modules文件夹下
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// vue去掉警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
