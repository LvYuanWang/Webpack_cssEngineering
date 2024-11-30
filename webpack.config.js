const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/bannerPager/index.js",
  module: {
    rules: [
      // {
      //   test: /\.css$/, use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         // 自定义生成的类名
      //         modules: {
      //           localIdentName: "[path][name]__[local]--[hash:base64:5]"
      //         }
      //       }
      //     }
      //   ]
      // },
      // 简化版
      { test: /\.css$/, use: ["style-loader", "css-loader?modules"] },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name].[contenthash:5].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    open: true
  }
}