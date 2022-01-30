<template>
    <div>
        <h1>这是 App.vue 组件</h1>
        <hr>
        <my-count :count="12" :state="true" :info="123" :age="martin" type="success"></my-count> 
    </div>
</template>

<script>
import MyCount from './Count.vue'
export default {
    name: 'MyApp',
    components: {
        MyCount
    }
}
</script>
åç
<style lang="less" scoped>

</style>
