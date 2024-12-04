const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
    pager: "./src/pager.js"
  },
  output: {
    filename: "scripts/[name]-[chunkhash:5].js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "pager.html",
      chunks: ["pager"]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name]-[contenthash:5].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name]-[contenthash:5].[ext]",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    open: true,
    publicPath: "/"
  },
  stats: {
    modules: false
  }
}