module.exports = {
  map: false, // 关闭source-map
  plugins: {
    'postcss-preset-env': {
      stage: 0, // 使用所有的语法
      preserve: false, // 不保留最新的语法
    },
    "postcss-apply": {},
    "postcss-color-function": {}
  }
}