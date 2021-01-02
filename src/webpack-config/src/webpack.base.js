// @flow

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function (isDevelopment /*: boolean  */) /* : Object */ {
  return {
    plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new ExtractCssChunks({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name]-[hash].css',
        chunkFilename: '[name]-[contenthash].css',
      }),
    ].filter(Boolean),
    output: {
      filename: '[hash].bundle.js',
      chunkFilename: '[contenthash].bundle.js',
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin()],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: (/[\\/]node_modules[\\/]/ /*: RegExp */),
            name: (module /*: Object  */) /* :string */ => {
              // eslint-disable-next-line prefer-named-capture-group
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
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
              plugins: ([isDevelopment && require.resolve('react-refresh/babel')].filter(
                Boolean,
              ) /*: any[]  */),
            },
          },
        },
        {
          test: (/\.css$/i /*: RegExp  */),
          use: [
            {
              loader: ExtractCssChunks.loader,
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['postcss-preset-env', { browsers: 'last 2 versions' }]],
                },
              },
            },
          ],
        },
        {
          test: (/\.svg$/ /*: RegExp  */),
          use: ['@svgr/webpack'],
        },
      ],
    },
  };
};
