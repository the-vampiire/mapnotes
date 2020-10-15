// common config: shared base config for both the .dev and .prod config files

// this is all running in the NodeJS environment
// we use webpack to "compile" from the NodeJS environment to a bundle compatible with the browser
const HtmlWebpackPlugin = require("html-webpack-plugin");

// CommonJS export syntax
module.exports = {
  // the entrypoint script to construct the dependency tree
  // will recursively follow import statements to determine what code is part of the project
  entry: "./src/index.js",

  // specify where the output (bundle file) should be created
  // output target: repo/dist/bundle.js
  output: {
    // defaults to 'dist' output directory
    filename: "bundle.js", // file name
  },

  // rules for how webpack should build and process the dep tree
  // https://webpack.js.org/configuration/module/#modulerules
  module: {
    rules: [
      {
        test: /\.css$/, // any CSS files that were imported
        // handled by the CSS loading tools
        // multiple loaders are called inside each other
        // ex: styleLoader(cssLoader(matchingFile))
        // where the initial input (a file matching the test) is passed to the right-most loader (css-loader)
        use: ["style-loader", "css-loader"], // uses right to left
      },
    ],
  },

  // plugins for processing the build behavior
  plugins: [
    // will produce a build/index.html with the bundle.js file loaded in a <script> element
    new HtmlWebpackPlugin({
      // path to the HTML file to use as a template
      template: "./src/index.html",
    }),
  ],
};
