// prod config: common config + prod environment configuration

const { merge } = require("webpack-merge"); // merge webpack configs
const commonConfig = require("./webpack.common"); // import the common config file

// export the merged common + dev environment configs
module.exports = merge(commonConfig, {
  mode: "production", // https://webpack.js.org/configuration/mode/#mode-production
});
