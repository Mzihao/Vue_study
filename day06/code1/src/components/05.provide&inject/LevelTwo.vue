<template>
  <div>
    <h3>Level Two 二级组件</h3>

    <hr />

    <level-three></level-three>
  </div>
</template>

<script>
import LevelThree from './LevelThree.vue'
// import { computed } from 'vue'

export default {
  name: 'LevelTwo',
  // data() {
  //   return {
  //     color: 'blue',
  //   }
  // },
  // provide() {
  //   // 返回要共享的数据对象
  //   return {
  //     color: computed(() => this.color),
  //     count: 2,
  //   }
  // },
  components: {
    LevelThree,
  },
}
</script>

<style lang="less" scoped></style>
