module.exports = {
  mode: "development",
  devtool: "source-map",
  watch: true,
  entry: "./src/bannerPager/index.js",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
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
  }
}