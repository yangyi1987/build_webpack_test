"user strict"

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig  = require('./webpack.base');


const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
      ]
    },
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: '../dist',
    hot: true,
    port: 9000,
  },
  devtool: 'cheap-source-map'
};

module.exports = merge(baseConfig,devConfig);





