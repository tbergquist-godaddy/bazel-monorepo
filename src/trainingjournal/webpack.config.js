// @flow

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpackBase = require('@tbergq/webpack-config');
const webpack = require('webpack');
const { config } = require('dotenv');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

config({ path: path.join(__dirname, '.env') });

const isDevelopment = (() => {
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === '--mode' && process.argv[i + 1] === 'production') {
      return false;
    }
  }
  return true;
})();

const webpackConfig /* :Object */ = {
  ...webpackBase(isDevelopment),
  plugins: ([
    (new CleanWebpackPlugin() /*: Object */),
    (new HtmlWebpackPlugin({
      title: 'Trainingjournal',
      hash: true,
      scriptLoading: 'defer',
      template: './src/trainingjournal/src/index.html',
    }) /*: Object */),
    (new CopyPlugin({
      patterns: [{ from: './src/trainingjournal/src/favicon.ico', to: 'favicon.ico' }],
    }) /*: Object */),
    (new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    }) /*: Object */),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean) /*: any[] */),
};

module.exports = webpackConfig;
