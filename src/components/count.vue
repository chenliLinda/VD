<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}</h3>
     <!--$store表示引用外部的store对象,可以理解为将效果提交到该方法中  -->
    <button @click="$store.commit('add')" >+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store,
  // 第一种方法
  // computed: {
  //   counted () {
  //     return this.$store.state.count
  //   }
  // }
  computed: mapState({
    count: state => state.count
  })
}
</script>

<style scoped>

</style>
