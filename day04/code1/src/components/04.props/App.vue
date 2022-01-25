<template>
    <div>
        <h1>这是 App.vue 组件</h1>
        <hr>
        <!-- <my-article title="面朝大海春暖花开" author="海子"></my-article> -->
        <my-article :title="info.title" :author="'post by ' + info.author" :pub-time="info.pubTime"></my-article>
    </div>
</template>

<script>
import MyArticle from './Article.vue'

export default {
    name: 'MyApp',
    data() {
        return {
            info: {
                title: 'asd',
                author: 'hjk',
                pubTime: '2022'
            }
        }
    },
    components: {
        MyArticle
    }
}
</script>
