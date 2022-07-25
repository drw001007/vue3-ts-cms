import { createApp } from 'vue'

// import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'

// 按需必须引用的base样式
// import 'element-plus/theme-chalk/base.css'

import App from './App.vue'

import router from './router/index'
import store from './store/index'
const app = createApp(App)

// app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
