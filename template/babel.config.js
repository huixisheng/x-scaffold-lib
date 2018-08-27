// https://cli.vuejs.org/zh/guide/browser-compatibility.html#polyfill
// https://cli.vuejs.org/zh/config/#babel
module.exports = {
  presets: [
    ['@vue/app', {
      modules: false,
      debug: true,
      targets: {
        browsers: [
          'Android >= 4.0',
          'ios >= 6',
          'Edge >= 10',
          'Firefox >= 20',
          'Safari >= 6',
          'Chrome >= 12',
          'ChromeAndroid >= 4.0',
          'QQAndroid >= 1.2',
        ],
      },
    }],
  ],
};