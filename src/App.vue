<!--vue的入口文件-->
<template>
  <div id="app">
    <!-- 左侧导航 -->
    <leftNav></leftNav>
    <!-- 操作区域 -->
    <div class="main">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
// 判断系统运行的环境
// import { envirInfo } from '@/common/envir'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    leftNav
  },
  created () {
  }
}
</script>
<style scoped>
#app{
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
  text-align: left;
}
.main{
  float: right;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
  overflow: auto;
}
</style>
