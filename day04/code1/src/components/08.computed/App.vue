<template>
    <div>
        <h1>这是 App.vue 组件</h1>
        <hr>
        <my-counter></my-counter>
    </div>
</template>

<script>
import MyCounter from './MyCounter.vue'
export default {
    name: 'MyApp',
    components: {
        MyCounter
    }
}
</script>

<style lang="less" scoped>

</style>
