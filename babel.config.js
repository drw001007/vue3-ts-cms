module.exports = {
  plugins: [
    // 按需引入element-plus样式(有问题-未解决)
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus',
    //     customStyleName: (name) => {
    //       return `element-plus/theme-chalk/${name}.css`
    //     }
    //   }
    // ]
    // AutoImport({
    //   resolvers: [ElementPlusResolver()]
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // })
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
