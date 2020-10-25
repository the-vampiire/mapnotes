// prod config: common config + prod environment configuration

const path = require("path");
const { merge } = require("webpack-merge"); // merge webpack configs
const DotEnvPlugin = require("dotenv-webpack");
const commonConfig = require("./webpack.common"); // import the common config file

// export the merged common + dev environment configs
module.exports = merge(commonConfig, {
  mode: "production", // https://webpack.js.org/configuration/mode/#mode-production
  plugins: [new DotEnvPlugin({ path: path.join(__dirname, "prod.env") })],
});
