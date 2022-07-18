const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  devtool: false,
};

module.exports = merge(common, prodConfig);
