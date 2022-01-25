<template>
  <h1>这是 <i>App.vue</i> 根组件</h1>
  <h3>name: {{username}}</h3>
  <hr>
  <p>count值是：{{count}}</p>
  <button @click="addCount">+1</button>

  <p>生成一个随机数：{{ (Math.random() * 10).toFixed(2) }}</p>

  <my-swiper></my-swiper>
  <MySwiper></MySwiper>
  <my-test></my-test>
  <hr>
  <my-search></my-search>

</template>

<script>

import Search from './components/02.privateReg/Search.vue'

export default {
  // 组件名称
  name: 'MyApp',
  data() {
    return {
      username: 'martin',
      count: 0
    }
  },
  methods: {
    addCount(){
      this.count += 1
    }
  },
  // 局部组件 
  components: {
    'my-search': Search
  }
}
console.log()
</script>

<style lang="less">
  h1 {
    color: pink;
    i{
      color: #666;
    }
  }
</style>
