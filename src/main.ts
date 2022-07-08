import { createApp } from 'vue'

// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'

import App from './App.vue'

import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
