<template>
    <div>
        <p>数量：{{ count }}</p>
        <p>状态：{{ state }}</p>
        <p>info: {{ info }}</p>
        <p>age:{{age}}</p>
    </div>
</template>

<script>
export default {
    name: 'MyCount',
    // props: ['count', 'state']
    props: {
        count: Number,
        state: Boolean,
        info: [Number, String],  //泛型
        age: {
            type: Number,
            default: 23,
            required: true
        },
        type: {
            validator(value) {
                return ['success', 'warning', 'danger'].indexOf(value) != -1
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>
