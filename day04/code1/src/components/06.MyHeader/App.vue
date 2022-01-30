<template>
    <div>
        <h1 class="app-container">这是 App.vue 组件</h1>
        <hr> 
        <my-header title="Martin" bgcolor="#000" color="pink"></my-header>
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
export default {
    name: 'MyApp',
    components: {
        MyHeader
    }
}
</script>

<style lang="less" scoped>
.app-container {
  margin-top: 45px;
}
</style>
