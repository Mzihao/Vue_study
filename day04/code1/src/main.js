// 按需导入creatApp函数
import { createApp } from 'vue'
// 导入待渲染的App.vue组件
// import App from './App.vue'
// import App from './components/03.style/App.vue'
import App from './components/04.props/App.vue'

// import './index.css'

// 导入需要被全局注册的组件
import Swiper from './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'

// createApp(App).mount('#app')
// 调用createApp函数，创建SPA应用实例
const app = createApp(App)

// 调用 app.component()方法全局注册组件
// app.component('my-swiper', Swiper)
app.component(Swiper.name, Swiper)
console.log(Swiper.name)
app.component('my-test', Test)

// 调用mount()把App组件的模板结构，渲染到指定的el区域中
app.mount('#app')
