const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
  entry: {
    app: "./src/assets/js/index.js",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  mode: "development",
  devServer: {
    static: "./src",
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  resolveLoader: {
    alias: {
      'sass-loader': require.resolve('sass-loader'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "God Of War",
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "src/assets/images",
          to: "assets" 
        },
        { 
          from: "_redirects",
          to: "" 
        }
      ],
    }),
  ],
};