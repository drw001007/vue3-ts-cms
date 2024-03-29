import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createApp } from 'vue'

// import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'

// 按需必须引用的base样式
import 'element-plus/theme-chalk/base.css'

import App from './App.vue'

import router from './router/index'
import store from './store/index'
import { setupStore } from './store'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
