<template>
    <div>
        <input type="text" v-model.number="count">
        <p>{{count}}乘以2的值为: {{plus}}</p>
        <p>{{count}}乘以2的值为: {{plus}}</p>
        <p>{{count}}乘以2的值为: {{plus}}</p>
        <!-- <p>{{count}}乘以2的值为: {{plus()}}</p>
        <p>{{count}}乘以2的值为: {{plus()}}</p>
        <p>{{count}}乘以2的值为: {{plus()}}</p> -->
    </div>
</template>

<script>
export default {
    name: 'MyCounter',
    data() {
        return {
            count: 6,
        }
    },
    computed: {
        // 计算属性会缓存计算结果
        plus() {
            console.log('计算属性被执行了')
            return this.count * 2
        }
    },
    // methods: {
    //     plus() {
    //         console.log('方法被执行了')
    //         return this.count * 2
    //     }
    // }
}
</script>

<style lang="less" scoped>

</style>
