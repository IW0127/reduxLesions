const path = require("path");

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { HotModuleReplacementPlugin } = require("webpack");

const devConfig = {
  mode: "development",

  devServer: {
    port: 3000 | 3001 | 3002 | 5000,
    static: path.join(__dirname, "../dist"),
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  /*  devtool: "source-map", */
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, devConfig);
