// @flow

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const templateContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Team assistant</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="/favicon.ico"/>
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
    filename: '[hash].bundle.js',
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
    (new CopyPlugin({
      patterns: [{ from: './src/team-assistant/src/favicon.ico', to: 'favicon.ico' }],
    }) /*: Object */),
  ],
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
