"user strict"

const { merge } = require('webpack-merge');
const baseConfig  = require('./webpack.base');
// css 文件单独打包出来
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// css 文件压缩
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
                loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader"
        ]
      },
    ]
  },
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash].css',
    }),
  ],
};

module.exports = merge(prodConfig,baseConfig )





