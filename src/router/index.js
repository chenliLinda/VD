import Vue from 'vue'
import Router from 'vue-router'
// 设置pos组件为入口文件
import Pos from '@/components/page/Pos'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/', // 默认路径
      redirect: '/Pos', // 跳转到'/Pos'路径下
      component: Pos // 加载组件Pos
    }, {
      // 默认地址需要在path的value的"/"后加上名称
      path: '/Pos',
      name: 'Pos',
      component: Pos
    }
  ]
})

export default route
