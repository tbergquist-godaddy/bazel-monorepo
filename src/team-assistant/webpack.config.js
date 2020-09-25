// @flow

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const templateContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Team assistant</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

module.exports = {
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[contenthash].bundle.js',
  },
  plugins: [
    (new CleanWebpackPlugin() /*: Object */),
    (new HtmlWebpackPlugin({
      title: 'My app',
      hash: true,
      scriptLoading: 'defer',
      templateContent,
    }) /*: Object */),
  ],
  devServer: {
    contentBase: (path.join(__dirname, 'dist') /*: string */),
    compress: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: (/\.mjs$/ /*: RegExp */),
      },
      {
        test: (/\.(?:js)$/ /*: RegExp */),
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: (/\.css$/i /*: RegExp  */),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: (/\.svg$/ /*: RegExp  */),
        use: ['@svgr/webpack'],
      },
    ],
  },
};
