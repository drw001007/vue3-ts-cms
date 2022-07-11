import { App } from 'vue'

import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-input.css'
import { ElButton, ElForm, ElInput } from 'element-plus'

const components = [ElButton, ElForm, ElInput]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
