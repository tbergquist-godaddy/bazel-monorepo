// @flow

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const templateContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Min app</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`;

module.exports = {
  output: {
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[contenthash].bundle.js",
  },
  plugins: [
    (new CleanWebpackPlugin() /*: Object */),
    (new HtmlWebpackPlugin({
      scriptLoading: "defer",
      templateContent,
    }) /*: Object */),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        type: "javascript/auto",
        test: (/\.mjs$/ /*: RegExp */),
      },
      {
        test: (/\.(?:js)$/ /*: RegExp */),
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
          },
        },
      },
    ],
  },
};
