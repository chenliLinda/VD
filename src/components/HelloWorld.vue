<template>
  <div class="hello">
    <h1>{{ '------------------------------------------' }}</h1>
    <h3>{{ msg }}</h3>
    <el-button type="info" @click="upd">我是子页的按钮，点激活将调用父页的方法</el-button>
    <p>{{'从父页获取到的信息:'+info}}</p>
    <h1>{{ '------------------------------------------' }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    info: ''
  },
  data () {
    return {
      msg: '我是子页！',
      cIN: '我是子页的信息,我存在data()中'
    }
  },
  methods: {
    ChiledFun () {
      alert('我是子页中的方法')
    },
    upd () {
      this.$emit('upd', { value: '124' })
    }
  }
}
</script>
