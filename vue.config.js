const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// import Icons from 'unplugin-icons/webpack'
// import IconsResolver from 'unplugin-icons/resolver'

// const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 1.当前修改会合并到webpack
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    // 按需引入element-plus组件和样式
    plugins: [
      AutoImport({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver()
          // Auto import icon components
          // 自动导入图标组件
          //   IconsResolver({
          //     prefix: 'Icon'
          //   })
        ]
      }),
      Components({
        // 自动注册 Element Plus 组件
        resolvers: [
          ElementPlusResolver()
          // Auto register icon components
          // 自动注册图标组件
          // IconsResolver({
          //   enabledCollections: ['ep']
          // })
        ]
      })
      // Icons({
      //   // expiremental
      //   autoInstall: true
      // })
    ]
  }
  // 2.当前修改会覆盖webpack里面的配置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.链式设置webpack配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
})
