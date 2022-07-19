const path = require('path');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { HotModuleReplacementPlugin } = require('webpack');

const devConfig = {
  mode: 'development',

  devServer: {
    static: path.join(__dirname, '../dist'),
    port: 3000 || 5000,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  /*  devtool: "source-map", */
  target: 'web',
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, devConfig);
