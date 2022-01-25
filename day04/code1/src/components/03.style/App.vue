<template>
    <div data-v-001>
        <h1>这是 App.vue 组件</h1>

        <p>App中的p标签</p>
        <p>App中的p标签</p>

        <hr>
        <my-list></my-list>
    </div>
</template>

<script>
import MyList from './List.vue'

export default {
    name: 'MyApp',
    components: {
        // 'MyList': MyList
        MyList
    }
}
</script>

<style lang="less" scoped>
    p {
        color: pink;
    }
    // /deep/ .title {
    //     color: skyblue;
    // }
    :deep(.title) {
        color: skyblue;
    }
</style>
