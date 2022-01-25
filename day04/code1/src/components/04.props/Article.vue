<template>
    <div>
        <h3>标题：{{ title }}</h3>
        <h3>作者：{{ author }}</h3>
        <h6>发布时间：{{ pubTime }}</h6>
    </div>
</template>

<script>
export default {
    name: 'MyArticle',
    props: ['title', 'author', 'pubTime']
}
</script>