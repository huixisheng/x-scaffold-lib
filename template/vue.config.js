module.exports = {
  // https://webpack.docschina.org/configuration/output/
  // 指定了public/index.html就用该模板
  // 相关配置可以阅读 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/commands/build
  // https://cli.vuejs.org/zh/config/#configurewebpack
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  configureWebpack: {
    output: {
      libraryExport: 'default',
      // library: 'MyAppXX',
    },
    // dist/myLib.css：提取出来的 CSS 文件 (可以通过在 vue.config.js 中设置 css: { extract: false } 强制内联)
    // delete config.entry.app;
    // config.entry.index = './index.js';
  },
  css: {
    extract: false,
  },
};